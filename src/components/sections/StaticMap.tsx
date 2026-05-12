"use client";

import { useMemo, useState } from "react";
import { MarkerCard } from "@/components/cards/MarkerCard";
import { mapCategories, mapMarkers } from "@/data/map";
import type { MapCategory } from "@/types";
import { cn } from "@/lib/utils";

const categoryColor: Record<string, string> = {
  환경: "bg-[#0F766E]",
  공공부지: "bg-[#6B3FA0]",
  배리어프리: "bg-[#1D4ED8]",
  청년: "bg-[#1434A4]",
  이주민: "bg-[#B45309]",
  아동: "bg-[#FFD84D]",
  행정: "bg-[#0B1F66]",
  안전: "bg-[#DC2626]",
};

export function StaticMap({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<MapCategory>("전체");
  const [selected, setSelected] = useState(mapMarkers[0]);
  const markers = useMemo(() => {
    if (category === "전체") return mapMarkers;
    if (category === "청년") return mapMarkers.filter((marker) => marker.category === "청년" || marker.title.includes("산업단지"));
    if (category === "이주민") return mapMarkers.filter((marker) => marker.category === "이주민");
    return mapMarkers.filter((marker) => marker.category === category);
  }, [category]);
  const visibleMarkers = preview ? markers.slice(0, 6) : markers;

  function handleCategoryChange(nextCategory: MapCategory) {
    setCategory(nextCategory);
    const nextMarkers = nextCategory === "전체"
      ? mapMarkers
      : nextCategory === "청년"
        ? mapMarkers.filter((marker) => marker.category === "청년" || marker.title.includes("산업단지"))
        : nextCategory === "이주민"
          ? mapMarkers.filter((marker) => marker.category === "이주민")
          : mapMarkers.filter((marker) => marker.category === nextCategory);
    setSelected(nextMarkers[0] || mapMarkers[0]);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
      <div className="surface-panel relative overflow-hidden rounded-[2rem] p-5 md:p-7">
        <div className="mb-5 flex flex-wrap gap-2">
          {mapCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleCategoryChange(item)}
              aria-pressed={category === item}
              className={cn("rounded-full border px-3 py-2 text-sm font-black", category === item ? "border-[#1434A4] bg-[#1434A4] text-white" : "border-[#E5E7EB] bg-white text-[#344054]")}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#EAF2FF] soft-grid">
          <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" role="img" aria-label="이곡1동, 이곡2동, 신당동 핵심 현안을 표시한 추상 공약지도">
            <path d="M32 72 C88 22 154 35 200 74 C244 112 315 85 360 130 C394 164 358 242 286 254 C220 266 178 232 126 250 C72 269 20 221 34 166 C44 125 12 105 32 72Z" fill="#fff" stroke="#B9D2FF" strokeWidth="4" />
            <path d="M82 64 C110 120 112 176 96 244" stroke="#1434A4" strokeWidth="3" strokeDasharray="8 8" fill="none" opacity=".45" />
            <path d="M176 48 C162 108 171 184 202 250" stroke="#1434A4" strokeWidth="3" strokeDasharray="8 8" fill="none" opacity=".45" />
            <path d="M260 64 C282 122 296 180 322 236" stroke="#1434A4" strokeWidth="3" strokeDasharray="8 8" fill="none" opacity=".45" />
            <path d="M54 190 C130 165 230 162 350 180" stroke="#1D4ED8" strokeWidth="7" fill="none" opacity=".28" />
            <path d="M64 205 C140 180 230 178 344 194" stroke="#1D4ED8" strokeWidth="3" fill="none" opacity=".55" />
            <text x="72" y="132" fill="#0B1F66" fontSize="18" fontWeight="900">이곡1동</text>
            <text x="167" y="142" fill="#0B1F66" fontSize="18" fontWeight="900">이곡2동</text>
            <text x="268" y="142" fill="#0B1F66" fontSize="18" fontWeight="900">신당동</text>
          </svg>
          {visibleMarkers.map((marker) => (
            <button
              key={marker.title}
              type="button"
              onClick={() => setSelected(marker)}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              title={`${marker.title}: ${marker.pledge}`}
              aria-label={`${marker.title} 공약 보기`}
            >
              <span className={cn("flex h-7 w-7 items-center justify-center rounded-full border-4 shadow-lg transition", selected.title === marker.title ? "scale-125 border-[#FFD84D]" : "border-white", categoryColor[marker.category], marker.category === "아동" ? "text-[#0B1F66]" : "text-white")}>
                <span className="h-2 w-2 rounded-full bg-current" />
              </span>
            </button>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-[#D7E4FF] bg-white p-5">
          <p className="text-xs font-black text-[#1434A4]">{selected.category} · {selected.area}</p>
          <h3 className="mt-2 text-xl font-black text-[#0B1F66]">{selected.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#667085]">{selected.issue}</p>
          <p className="mt-2 text-sm font-bold leading-6 text-[#344054]">{selected.pledge}</p>
        </div>
        <p className="mt-4 text-sm leading-6 text-[#667085]">정확한 행정경계보다 성서 생활권의 핵심 현안과 공약 흐름을 한눈에 이해할 수 있도록 정리했습니다.</p>
      </div>
      <div className="grid max-h-[620px] gap-3 overflow-auto pr-1">
        {visibleMarkers.map((marker) => <MarkerCard key={marker.title} marker={marker} />)}
      </div>
    </div>
  );
}
