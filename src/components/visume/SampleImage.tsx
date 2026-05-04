import { useState } from "react";
import { cn } from "@/lib/utils";

export function SampleImage({
  src,
  alt,
  className,
  fallbackColor = "#1F5B5B",
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackColor?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={cn("grid place-items-center", className)}
        style={{
          background: `linear-gradient(160deg, ${fallbackColor} 0%, color-mix(in oklab, ${fallbackColor} 50%, white) 100%)`,
        }}
        aria-label={alt}
      >
        <div className="h-16 w-16 rounded-full bg-white/30 ring-1 ring-white/40 backdrop-blur-sm" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
