import { useState } from "react";
import { Smartphone, Camera } from "lucide-react";
import { LessonImage } from "@/data/lessons";

interface DeviceFrameProps {
  image: LessonImage;
}

type DeviceMode = "none" | "phone" | "camera";

export function DeviceFrame({ image }: DeviceFrameProps) {
  const [mode, setMode] = useState<DeviceMode>("none");

  return (
    <div className="space-y-3">
      {/* Image with device frame */}
      <div className="relative flex items-center justify-center">
        {mode === "none" && (
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {mode === "phone" && (
          <div className="inline-block p-3 bg-foreground/90 rounded-[2rem] shadow-xl">
            <div className="w-48 md:w-56 rounded-[1.5rem] overflow-hidden border-2 border-foreground/20">
              <div className="w-full h-3 bg-foreground/90 flex items-center justify-center">
                <div className="w-12 h-1 rounded-full bg-foreground/40" />
              </div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
              <div className="w-full h-4 bg-foreground/90 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border border-foreground/30" />
              </div>
            </div>
          </div>
        )}

        {mode === "camera" && (
          <div className="inline-block">
            {/* Camera viewfinder */}
            <div className="bg-foreground/90 rounded-lg p-1 shadow-xl">
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full max-w-md h-auto object-cover rounded-sm"
                />
                {/* Viewfinder overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Corner brackets */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-white/60" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-white/60" />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-white/60" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-white/60" />
                  {/* Center focus point */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/50 rounded-sm" />
                </div>
              </div>
              {/* Bottom info bar */}
              <div className="flex items-center justify-between px-3 py-1.5 text-[10px] text-white/60 font-mono">
                <span>f/2.8</span>
                <span>1/250</span>
                <span>ISO 400</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Caption + mode toggle */}
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs text-muted-foreground leading-relaxed font-body flex-1">
          {image.caption}
        </p>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => setMode("none")}
            className={`p-1.5 rounded transition-colors text-xs font-body ${
              mode === "none" ? "bg-olive/10 text-olive" : "text-muted-foreground hover:text-foreground"
            }`}
            title="No frame"
          >
            Full
          </button>
          <button
            onClick={() => setMode("phone")}
            className={`p-1.5 rounded transition-colors ${
              mode === "phone" ? "bg-olive/10 text-olive" : "text-muted-foreground hover:text-foreground"
            }`}
            title="View on phone"
          >
            <Smartphone className="h-4 w-4" />
          </button>
          <button
            onClick={() => setMode("camera")}
            className={`p-1.5 rounded transition-colors ${
              mode === "camera" ? "bg-olive/10 text-olive" : "text-muted-foreground hover:text-foreground"
            }`}
            title="View in camera"
          >
            <Camera className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
