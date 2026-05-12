"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePreset = "default" | "portrait" | "poster" | "landscape" | "cutout" | "gallery" | "modal";

const presetClasses: Record<ImagePreset, { frame: string; image: string; bg: boolean }> = {
  default: { frame: "", image: "object-cover", bg: true },
  portrait: { frame: "aspect-[4/5] rounded-[2rem]", image: "object-contain object-bottom", bg: true },
  poster: { frame: "aspect-[3/4] rounded-[2rem]", image: "object-contain object-center bg-white", bg: false },
  landscape: { frame: "aspect-[4/3] rounded-[2rem]", image: "object-contain object-center bg-white", bg: false },
  cutout: { frame: "aspect-[4/5] rounded-[2rem]", image: "object-contain object-bottom", bg: false },
  gallery: { frame: "aspect-[4/3] rounded-[1.75rem]", image: "object-contain object-center bg-[#F8FAFC]", bg: true },
  modal: { frame: "h-[72vh] rounded-[1.5rem]", image: "object-contain object-center bg-white", bg: false },
};

function hasObjectFitClass(className?: string) {
  return /\bobject-(contain|cover|fill|none|scale-down)\b/.test(className || "");
}

export function ImageWithFallback({
  src,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  preset = "default",
  withDefaultBg = true,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  preset?: ImagePreset;
  withDefaultBg?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const presetClass = presetClasses[preset];
  const shouldUseDefaultBg = withDefaultBg && presetClass.bg;
  const imageClassName = hasObjectFitClass(imgClassName) ? imgClassName : cn(presetClass.image, imgClassName);

  return (
    <div className={cn("relative overflow-hidden", shouldUseDefaultBg && "bg-[#EAF2FF]", presetClass.frame, className)}>
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClassName}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 p-6 text-center text-[#1434A4]">
          <ImageIcon aria-hidden className="h-10 w-10" />
          <p className="text-sm font-bold">지정된 실제 사진을 이 경로에 넣으면 표시됩니다.</p>
          <p className="text-xs text-[#667085]">{src}</p>
        </div>
      )}
    </div>
  );
}
