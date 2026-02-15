import { lessons } from "@/data/lessons";
import { ProgressMap } from "@/hooks/useProgress";
import { Check, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CurriculumSidebarProps {
  progress: ProgressMap;
  currentLessonId: string;
  onSelectLesson: (id: string) => void;
}

export function CurriculumSidebar({
  progress,
  currentLessonId,
  onSelectLesson,
}: CurriculumSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="relative flex">
      <AnimatePresence mode="wait">
        {!collapsed && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full border-r border-border bg-card overflow-hidden"
          >
            <div className="p-6 w-[280px]">
              <h2 className="font-serif text-lg text-foreground mb-1">Curriculum</h2>
              <p className="text-xs text-muted-foreground mb-6 font-sans">6 lessons · Photography fundamentals</p>
              <nav className="space-y-1">
                {lessons.map((lesson, i) => {
                  const prog = progress[lesson.id];
                  const isActive = lesson.id === currentLessonId;
                  const isCompleted = prog?.completed;

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => onSelectLesson(lesson.id)}
                      className={`w-full text-left px-3 py-3 rounded-md transition-colors flex items-start gap-3 group ${
                        isActive
                          ? "bg-secondary"
                          : "hover:bg-secondary/50"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-sans font-medium ${
                          isCompleted
                            ? "bg-primary text-primary-foreground"
                            : isActive
                            ? "border-2 border-primary text-primary"
                            : "border border-border text-muted-foreground"
                        }`}
                      >
                        {isCompleted ? <Check className="h-3.5 w-3.5" /> : i + 1}
                      </span>
                      <div className="min-w-0">
                        <p className={`text-sm font-sans truncate ${isActive ? "text-foreground font-medium" : "text-secondary-foreground"}`}>
                          {lesson.title}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            {lesson.category}
                          </span>
                          {prog?.rating && (
                            <span className="flex items-center gap-0.5 text-primary text-[10px]">
                              <Star className="h-2.5 w-2.5 fill-current" />
                              {prog.rating}
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-4 top-8 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>
    </div>
  );
}
