import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { imageBase64, lessonTitle, lessonCategory, assignment, criteria } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Extract base64 data and mime type
    const match = imageBase64.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!match) throw new Error("Invalid image data");
    const mimeType = match[1];
    const base64Data = match[2];

    const systemPrompt = `You are an expert photography instructor reviewing a student's photo submission. You must evaluate the photo based on the lesson context and specific grading criteria provided.

Always respond by calling the "evaluate_photo" tool with your structured evaluation. Be encouraging but honest. Give constructive, specific feedback referencing what you actually see in the image.

Rating guide:
- 5 stars: Exceptional execution of the concept
- 4 stars: Strong understanding with minor areas for improvement
- 3 stars: Meets the basic requirements (passing grade)
- 2 stars: Shows some understanding but needs significant improvement
- 1 star: Does not demonstrate the concept`;

    const userPrompt = `Lesson: "${lessonTitle}" (${lessonCategory})
Assignment: ${assignment}

Grading criteria:
${criteria.map((c: string, i: number) => `${i + 1}. ${c}`).join("\n")}

Please evaluate this student's photo submission against these criteria.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: [
              { type: "text", text: userPrompt },
              { type: "image_url", image_url: { url: `data:${mimeType};base64,${base64Data}` } },
            ],
          },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "evaluate_photo",
              description: "Return the structured evaluation of a student photo submission",
              parameters: {
                type: "object",
                properties: {
                  rating: { type: "number", description: "Star rating from 1-5" },
                  pass: { type: "boolean", description: "true if rating >= 3" },
                  strengths: {
                    type: "array",
                    items: { type: "string" },
                    description: "2-3 specific strengths observed in the photo",
                  },
                  improvements: {
                    type: "array",
                    items: { type: "string" },
                    description: "2-3 specific areas for improvement",
                  },
                  summary: {
                    type: "string",
                    description: "An encouraging 2-3 sentence summary paragraph",
                  },
                },
                required: ["rating", "pass", "strengths", "improvements", "summary"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "evaluate_photo" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add more credits." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) throw new Error("No tool call in response");

    const evaluation = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify(evaluation), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("analyze-photo error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
