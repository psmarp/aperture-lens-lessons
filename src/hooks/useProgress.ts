import { useState, useEffect } from "react";

export interface LessonProgress {
  completed: boolean;
  rating: number | null;
}

export type ProgressMap = Record<string, LessonProgress>;

const STORAGE_KEY = "aperture-progress";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeLesson = (lessonId: string, rating: number) => {
    setProgress((prev) => ({
      ...prev,
      [lessonId]: { completed: true, rating },
    }));
  };

  const resetProgress = () => setProgress({});

  const completedCount = Object.values(progress).filter((p) => p.completed).length;

  return { progress, completeLesson, resetProgress, completedCount };
}
