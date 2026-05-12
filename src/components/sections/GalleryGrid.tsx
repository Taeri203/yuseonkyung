"use client";

import { useState } from "react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { ModalImageViewer } from "@/components/sections/ModalImageViewer";
import { galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/types";

const groups = [
  { title: "공식 프로필", matcher: (item: GalleryItem) => item.title.includes("프로필") },
  { title: "현장", matcher: (item: GalleryItem) => item.title.includes("현장") },
  { title: "연대", matcher: (item: GalleryItem) => item.title.includes("김부겸") },
  { title: "후원", matcher: (item: GalleryItem) => item.title.includes("후원") },
];

export function GalleryGrid() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid gap-8">
        {groups.map((group) => {
          const items = galleryItems.filter(group.matcher);
          if (!items.length) return null;
          return (
            <section key={group.title}>
              <h2 className="mb-4 text-2xl font-black text-[#0B1F66]">{group.title}</h2>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <button key={item.src} type="button" onClick={() => setSelected(item)} className="motion-card overflow-hidden rounded-[1.75rem] border border-[#E5E7EB] bg-white text-left shadow-sm">
                    <ImageWithFallback src={item.src} alt={item.alt} sizes="(min-width: 1024px) 33vw, 100vw" preset="gallery" />
                    <div className="p-5">
                      <h3 className="text-xl font-black text-[#0B1F66]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#667085]">{item.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      {selected ? <ModalImageViewer item={selected} onClose={() => setSelected(null)} /> : null}
    </>
  );
}
