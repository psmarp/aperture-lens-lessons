import { useState, useCallback } from "react";
import { lessons } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";
import { ProgressBar } from "@/components/ProgressBar";
import { CurriculumSidebar } from "@/components/CurriculumSidebar";
import { LessonLearn } from "@/components/LessonLearn";
import { LessonShoot } from "@/components/LessonShoot";
import { LessonFeedback, FeedbackData } from "@/components/LessonFeedback";
import { CelebrationScreen } from "@/components/CelebrationScreen";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Aperture } from "lucide-react";
import { Link } from "react-router-dom";

type Phase = "learn" | "shoot" | "feedback";

const Index = () => {
  const { progress, completeLesson, resetProgress, completedCount } = useProgress();
  const [currentLessonId, setCurrentLessonId] = useState(lessons[0].id);
  const [phase, setPhase] = useState<Phase>("learn");
  const [feedback, setFeedback] = useState<FeedbackData | null>(null);
  const [loading, setLoading] = useState(false);

  const allComplete = completedCount === lessons.length;
  const currentLesson = lessons.find((l) => l.id === currentLessonId)!;
  const currentIndex = lessons.findIndex((l) => l.id === currentLessonId);

  const handleSelectLesson = useCallback((id: string) => {
    setCurrentLessonId(id);
    setPhase("learn");
    setFeedback(null);
  }, []);

  const handleSubmit = async (imageBase64: string) => {
    setPhase("feedback");
    setFeedback(null);
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("analyze-photo", {
        body: {
          imageBase64,
          lessonTitle: currentLesson.title,
          lessonCategory: currentLesson.category,
          assignment: currentLesson.assignment,
          criteria: currentLesson.criteria,
        },
      });

      if (error) throw error;
      if (data.error) throw new Error(data.error);

      setFeedback(data as FeedbackData);

      if (data.pass) {
        completeLesson(currentLessonId, data.rating);
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Failed to analyze photo. Please try again.");
      setPhase("shoot");
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = () => {
    if (currentIndex < lessons.length - 1) {
      setCurrentLessonId(lessons[currentIndex + 1].id);
      setPhase("learn");
      setFeedback(null);
    }
  };

  const handleRetry = () => {
    setPhase("shoot");
    setFeedback(null);
  };

  const handleRestart = () => {
    resetProgress();
    setCurrentLessonId(lessons[0].id);
    setPhase("learn");
    setFeedback(null);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <CurriculumSidebar
        progress={progress}
        currentLessonId={currentLessonId}
        onSelectLesson={handleSelectLesson}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="shrink-0 border-b border-border px-8 py-4 flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Aperture className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg text-foreground">Aperture</span>
          </Link>
          <div className="flex-1 max-w-xs">
            <ProgressBar completedCount={completedCount} />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-8 py-10">
          {allComplete ? (
            <CelebrationScreen progress={progress} onRestart={handleRestart} />
          ) : phase === "learn" ? (
            <LessonLearn lesson={currentLesson} onReady={() => setPhase("shoot")} />
          ) : phase === "shoot" ? (
            <LessonShoot lesson={currentLesson} onSubmit={handleSubmit} onBack={() => setPhase("learn")} />
          ) : (
            <LessonFeedback
              lesson={currentLesson}
              feedback={feedback}
              loading={loading}
              onContinue={handleContinue}
              onRetry={handleRetry}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
