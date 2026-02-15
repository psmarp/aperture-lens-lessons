import { Lesson } from "@/data/lessons";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb } from "lucide-react";

interface LessonLearnProps {
  lesson: Lesson;
  onReady: () => void;
}

export function LessonLearn({ lesson, onReady }: LessonLearnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      {/* Category badge */}
      <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-body font-medium text-olive mb-4">
        {lesson.category}
      </span>

      {/* Title */}
      <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
        {lesson.title}
      </h1>

      {/* Hero image */}
      <div className="relative rounded-lg overflow-hidden mb-10 glow-gold">
        <img
          src={lesson.image}
          alt={lesson.title}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Theory paragraphs */}
      <div className="space-y-5 mb-10">
        {lesson.description.map((para, i) => (
          <p key={i} className="font-display text-base leading-relaxed text-secondary-foreground">
            {para}
          </p>
        ))}
      </div>

      {/* Tips card */}
      <div className="card-elevated p-6 mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-4 w-4 text-olive" />
          <h3 className="text-sm font-body font-semibold uppercase tracking-wider text-foreground">
            Quick Tips
          </h3>
        </div>
        <ul className="space-y-3">
          {lesson.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-body text-secondary-foreground">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button
        onClick={onReady}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-olive text-primary-foreground font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-all"
      >
        Ready — Show Me the Assignment
        <ArrowRight className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
