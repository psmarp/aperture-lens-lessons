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
      <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-primary mb-4">
        {lesson.category}
      </span>

      {/* Title */}
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
        {lesson.title}
      </h1>

      {/* Hero image */}
      <div className="relative rounded-lg overflow-hidden mb-10 glow-gold">
        <img
          src={lesson.image}
          alt={lesson.title}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Theory paragraphs */}
      <div className="space-y-5 mb-10">
        {lesson.description.map((para, i) => (
          <p key={i} className="font-serif text-base leading-relaxed text-secondary-foreground">
            {para}
          </p>
        ))}
      </div>

      {/* Tips card */}
      <div className="card-elevated p-6 mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-foreground">
            Quick Tips
          </h3>
        </div>
        <ul className="space-y-3">
          {lesson.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-sans text-secondary-foreground">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button
        onClick={onReady}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-primary text-primary-foreground font-sans font-semibold text-sm tracking-wide hover:brightness-110 transition-all"
      >
        Ready — Show Me the Assignment
        <ArrowRight className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
