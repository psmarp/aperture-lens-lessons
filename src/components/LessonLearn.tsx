import { Lesson } from "@/data/lessons";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb } from "lucide-react";
import { DeviceFrame } from "./DeviceFrame";

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

      {/* First paragraph */}
      <p className="font-body text-base leading-relaxed text-secondary-foreground mb-8">
        {lesson.description[0]}
      </p>

      {/* First two example images */}
      {lesson.images.length >= 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <DeviceFrame image={lesson.images[0]} />
          <DeviceFrame image={lesson.images[1]} />
        </div>
      )}

      {/* Second paragraph */}
      {lesson.description[1] && (
        <p className="font-body text-base leading-relaxed text-secondary-foreground mb-8">
          {lesson.description[1]}
        </p>
      )}

      {/* Third example image - full width */}
      {lesson.images.length >= 3 && (
        <div className="mb-10">
          <DeviceFrame image={lesson.images[2]} />
        </div>
      )}

      {/* Third paragraph */}
      {lesson.description[2] && (
        <p className="font-body text-base leading-relaxed text-secondary-foreground mb-8">
          {lesson.description[2]}
        </p>
      )}

      {/* Fourth example image - full width */}
      {lesson.images.length >= 4 && (
        <div className="mb-10">
          <DeviceFrame image={lesson.images[3]} />
        </div>
      )}

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
