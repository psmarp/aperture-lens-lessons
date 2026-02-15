import ruleOfThirds from "@/assets/lesson-rule-of-thirds.jpg";
import leadingLines from "@/assets/lesson-leading-lines.jpg";
import lightDirection from "@/assets/lesson-light-direction.jpg";
import framing from "@/assets/lesson-framing.jpg";
import colorContrast from "@/assets/lesson-color-contrast.jpg";
import storytelling from "@/assets/lesson-storytelling.jpg";

export interface Lesson {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string[];
  tips: string[];
  assignment: string;
  criteria: string[];
}

export const lessons: Lesson[] = [
  {
    id: "rule-of-thirds",
    title: "The Rule of Thirds",
    category: "Composition",
    image: ruleOfThirds,
    description: [
      "The Rule of Thirds is one of the most fundamental composition techniques in photography. Imagine dividing your frame into nine equal parts using two horizontal and two vertical lines — like a tic-tac-toe grid overlaid on your image.",
      "The idea is simple: place your main subject along one of these lines, or better yet, at one of the four intersection points. This creates a more dynamic, visually interesting composition than centering your subject.",
      "Our eyes naturally gravitate toward these intersection points. By placing key elements there, you create images that feel balanced yet energetic — guiding the viewer's eye through the frame rather than letting it settle in the middle.",
    ],
    tips: [
      "Enable the grid overlay on your phone camera for easy alignment",
      "Place eyes or faces at the upper-third intersection points in portraits",
      "Position the horizon along the top or bottom third, not dead center",
      "Leave space in the direction your subject is looking or moving",
    ],
    assignment: "Take a photo where the main subject is placed at one of the four intersection points of the thirds grid. Avoid centering your subject.",
    criteria: [
      "Subject is clearly positioned along a third line or intersection",
      "The composition feels balanced and intentional, not random",
      "There's appropriate negative space that complements the subject",
      "The image has a clear focal point that draws the eye",
    ],
  },
  {
    id: "leading-lines",
    title: "Leading Lines",
    category: "Composition",
    image: leadingLines,
    description: [
      "Leading lines are one of the most powerful tools in a photographer's composition toolkit. They're lines within your image that guide the viewer's eye toward the main subject or deeper into the scene.",
      "These lines can be anything: roads, fences, rivers, staircases, shadows, rows of trees, or even the edge of a building. They create a visual pathway that draws attention exactly where you want it.",
      "The best leading lines start near the edge or bottom of the frame and converge toward your subject. They add depth, dimension, and a sense of journey to your photographs — transforming a flat image into one that feels immersive.",
    ],
    tips: [
      "Look for natural lines everywhere: sidewalks, railings, shorelines",
      "Diagonal lines create more energy than horizontal or vertical ones",
      "Try positioning yourself low to exaggerate the perspective of lines",
      "Multiple converging lines create an even stronger pull toward the subject",
    ],
    assignment: "Find and photograph a scene where lines in the environment lead the viewer's eye toward a specific subject or vanishing point.",
    criteria: [
      "Clear leading lines are visible and guide the eye through the frame",
      "The lines converge toward or lead to a defined subject or point",
      "The perspective enhances the sense of depth in the image",
      "The composition uses lines intentionally, not accidentally",
    ],
  },
  {
    id: "light-direction",
    title: "Understanding Light Direction",
    category: "Lighting",
    image: lightDirection,
    description: [
      "Light is the very essence of photography — the word literally means 'writing with light.' The direction light comes from dramatically changes the mood, dimension, and story of your photo.",
      "Front light illuminates your subject evenly but can look flat. Side light creates beautiful shadows and reveals texture and depth. Back light produces dramatic silhouettes and glowing rim effects, especially during golden hour.",
      "Golden hour — the first and last hour of sunlight each day — is legendary among photographers for its warm, soft, directional light. Learning to see and work with light direction is what separates snapshots from photographs.",
    ],
    tips: [
      "Shoot during golden hour (sunrise/sunset) for the most flattering light",
      "Use side light to reveal textures in surfaces like brick, wood, or skin",
      "Backlight works beautifully with translucent subjects like leaves or hair",
      "On cloudy days, light becomes soft and diffused — perfect for portraits",
    ],
    assignment: "Take a photo that clearly demonstrates the effect of light direction — side light creating shadows, backlight creating silhouettes, or golden hour warmth.",
    criteria: [
      "The direction of light is clearly visible and intentional",
      "Light creates interesting shadows, textures, or rim effects",
      "The mood of the image is enhanced by the lighting choice",
      "The exposure handles highlights and shadows well",
    ],
  },
  {
    id: "framing-layers",
    title: "Framing & Layers",
    category: "Composition",
    image: framing,
    description: [
      "Natural framing is a technique where you use elements in your environment — doorways, windows, arches, branches, tunnels — to create a frame within your frame. This draws the viewer's eye directly to your subject.",
      "Framing adds depth by creating distinct layers: a foreground frame, a middle-ground subject, and often a background. These layers give your image a three-dimensional quality that flat compositions lack.",
      "The frame doesn't have to be sharp or complete. Blurred foreground elements, partially obscured edges, and even shadows can serve as effective frames. The key is creating a sense of looking *through* something to see the subject beyond.",
    ],
    tips: [
      "Doorways and windows are the easiest natural frames to find",
      "Use a wider aperture to blur the frame while keeping the subject sharp",
      "Dark frames around a bright subject create dramatic contrast",
      "Try overlapping elements to create multiple layers of depth",
    ],
    assignment: "Photograph a subject framed by a natural element in the environment — an archway, window, doorway, branches, or any other structure.",
    criteria: [
      "A clear natural frame surrounds or partially encloses the subject",
      "The framing element adds depth and layers to the composition",
      "The subject is clearly defined within the frame",
      "The frame enhances rather than distracts from the main subject",
    ],
  },
  {
    id: "color-contrast",
    title: "Color & Contrast",
    category: "Visual Design",
    image: colorContrast,
    description: [
      "Color is one of the most emotional tools in photography. Complementary colors — those opposite each other on the color wheel, like blue and orange, red and green — create vibrant, eye-catching contrast when placed together.",
      "A 'color pop' happens when a single vivid color stands out against a muted or monochrome background. Think of a red umbrella on a gray street, or a yellow taxi against blue buildings. These moments create instant visual impact.",
      "Cohesive color palettes, where tones harmonize rather than clash, create a sense of unity and mood. Cool blues and greens feel calm; warm reds and oranges feel energetic. Learning to see and compose with color transforms your photography.",
    ],
    tips: [
      "Look for complementary color pairs: blue/orange, red/green, yellow/purple",
      "A single bright object against a neutral background creates a powerful color pop",
      "Shoot during golden hour for naturally warm, harmonious color palettes",
      "Overcast skies make colors appear more saturated and vivid",
    ],
    assignment: "Capture a photo that uses color intentionally — through complementary contrast, a color pop, or a cohesive color palette that sets a mood.",
    criteria: [
      "Color is used as a deliberate compositional element",
      "There's clear contrast or harmony in the color palette",
      "Colors contribute to the mood or story of the image",
      "The overall color treatment feels intentional, not accidental",
    ],
  },
  {
    id: "telling-a-story",
    title: "Telling a Story",
    category: "Storytelling",
    image: storytelling,
    description: [
      "The most compelling photographs don't just show — they suggest. They make the viewer wonder: What just happened? What's about to happen? Who was here? A great story-telling photo is an invitation to imagine.",
      "Look for moments of tension, anticipation, or aftermath. An empty chair with a half-finished cup of coffee. A child reaching for something just out of frame. Footprints disappearing into fog. These images are rich with narrative possibility.",
      "Context and details are your storytelling tools. Environmental elements — weather, time of day, objects in the scene — all contribute to the narrative. The viewer should feel like they've walked into the middle of a story.",
    ],
    tips: [
      "Include environmental details that hint at a larger story",
      "Capture moments of anticipation — right before something happens",
      "Leave room for the viewer's imagination; don't show everything",
      "Human elements (even implied) make stories more relatable",
    ],
    assignment: "Take a photo that tells a story or implies a narrative. The viewer should be able to imagine what happened before or after the moment was captured.",
    criteria: [
      "The image clearly implies a narrative or raises questions",
      "Environmental details contribute to the story being told",
      "There's a sense of moment — something has, is, or will happen",
      "The composition supports the storytelling intent",
    ],
  },
];
