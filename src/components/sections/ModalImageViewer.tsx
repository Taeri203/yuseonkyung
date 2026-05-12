"use client";

import { X } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import type { GalleryItem } from "@/types";

export function ModalImageViewer({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F66]/80 p-4" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="w-full max-w-4xl rounded-[2rem] bg-white p-4 shadow-2xl">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-black text-[#0B1F66]">{item.title}</h2>
            <p className="text-sm text-[#667085]">{item.description}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-[#F8FAFC] p-2" aria-label="이미지 모달 닫기">
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <ImageWithFallback src={item.src} alt={item.alt} sizes="90vw" preset="modal" />
      </div>
    </div>
  );
}
