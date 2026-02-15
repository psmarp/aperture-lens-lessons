import { Lesson } from "@/data/lessons";
import { motion } from "framer-motion";
import { StarRating } from "./StarRating";
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Loader2 } from "lucide-react";

export interface FeedbackData {
  rating: number;
  pass: boolean;
  strengths: string[];
  improvements: string[];
  summary: string;
}

interface LessonFeedbackProps {
  lesson: Lesson;
  feedback: FeedbackData | null;
  loading: boolean;
  onContinue: () => void;
  onRetry: () => void;
}

export function LessonFeedback({ lesson, feedback, loading, onContinue, onRetry }: LessonFeedbackProps) {
  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto flex flex-col items-center justify-center py-32"
      >
        <div className="relative">
          <Loader2 className="h-12 w-12 text-primary animate-spin" />
        </div>
        <p className="mt-6 font-display text-lg text-foreground">Analyzing your photograph…</p>
        <p className="mt-2 text-sm text-muted-foreground font-body">Our AI is reviewing your composition, lighting, and technique</p>
      </motion.div>
    );
  }

  if (!feedback) return null;

  const passed = feedback.pass;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-body font-medium text-olive mb-3">
        Feedback
      </span>
      <h2 className="font-display text-3xl text-foreground mb-8">{lesson.title}</h2>

      {/* Rating + Badge */}
      <div className="flex items-center gap-6 mb-8">
        <StarRating rating={feedback.rating} />
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold ${
            passed
              ? "bg-olive/10 text-olive"
              : "bg-destructive/10 text-destructive"
          }`}
        >
          {passed ? <CheckCircle className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
          {passed ? "Passed" : "Needs Work"}
        </span>
      </div>

      {/* Strengths */}
      <div className="card-elevated p-5 mb-4">
        <h3 className="text-sm font-body font-semibold uppercase tracking-wider text-foreground mb-3">
          Strengths
        </h3>
        <ul className="space-y-2">
          {feedback.strengths.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm font-body text-secondary-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Improvements */}
      <div className="card-elevated p-5 mb-6">
        <h3 className="text-sm font-body font-semibold uppercase tracking-wider text-foreground mb-3">
          Areas to Improve
        </h3>
        <ul className="space-y-2">
          {feedback.improvements.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm font-body text-secondary-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <p className="font-display text-base text-secondary-foreground leading-relaxed mb-10">{feedback.summary}</p>

      {/* Action */}
      {passed ? (
        <button
          onClick={onContinue}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-olive text-primary-foreground font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-all"
        >
          Continue to Next Lesson
          <ArrowRight className="h-4 w-4" />
        </button>
      ) : (
        <button
          onClick={onRetry}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-lg border border-border text-foreground font-body font-semibold text-sm hover:bg-secondary transition-colors"
        >
          <RotateCcw className="h-4 w-4" /> Upload a New Photo
        </button>
      )}
    </motion.div>
  );
}
