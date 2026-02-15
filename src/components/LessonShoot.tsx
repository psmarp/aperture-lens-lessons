import { Lesson } from "@/data/lessons";
import { motion } from "framer-motion";
import { Camera, Upload, X, ArrowLeft } from "lucide-react";
import { useRef, useState } from "react";

interface LessonShootProps {
  lesson: Lesson;
  onSubmit: (imageBase64: string) => void;
  onBack: () => void;
}

export function LessonShoot({ lesson, onSubmit, onBack }: LessonShootProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-sans transition-colors">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to lesson
      </button>

      <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-primary mb-3">
        Assignment
      </span>
      <h2 className="font-serif text-3xl text-foreground mb-4">{lesson.title}</h2>
      <p className="font-serif text-base text-secondary-foreground mb-8 leading-relaxed">{lesson.assignment}</p>

      {/* Criteria cards */}
      <div className="grid grid-cols-2 gap-3 mb-10">
        {lesson.criteria.map((c, i) => (
          <div key={i} className="card-elevated p-4 flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-sans font-bold shrink-0">
              {i + 1}
            </span>
            <p className="text-xs font-sans text-secondary-foreground leading-relaxed">{c}</p>
          </div>
        ))}
      </div>

      {/* Upload area */}
      {!preview ? (
        <button
          onClick={() => fileRef.current?.click()}
          className="w-full border-2 border-dashed border-border rounded-lg py-16 flex flex-col items-center gap-3 hover:border-primary/50 transition-colors group"
        >
          <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <Upload className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <div className="text-center">
            <p className="text-sm font-sans font-medium text-foreground">Upload your photo</p>
            <p className="text-xs text-muted-foreground mt-1">Click to choose from your device</p>
          </div>
        </button>
      ) : (
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden">
            <img src={preview} alt="Your submission" className="w-full max-h-96 object-contain bg-card rounded-lg" />
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setPreview(null);
                if (fileRef.current) fileRef.current.value = "";
              }}
              className="flex-1 py-3 rounded-lg border border-border text-sm font-sans font-medium text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2"
            >
              <X className="h-4 w-4" /> Choose Different Photo
            </button>
            <button
              onClick={() => preview && onSubmit(preview)}
              className="flex-1 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-sans font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Camera className="h-4 w-4" /> Submit for Review
            </button>
          </div>
        </div>
      )}

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />
    </motion.div>
  );
}
