"use client";

import { useMemo, useState } from "react";
import { MarkerCard } from "@/components/cards/MarkerCard";
import { mapCategories, mapMarkers } from "@/data/map";
import type { MapCategory } from "@/types";
import { cn } from "@/lib/utils";

const categoryColor: Record<string, string> = {
  환경: "bg-[#0F766E]",
  공간: "bg-[#6B3FA0]",
  보행: "bg-[#1D4ED8]",
  청년: "bg-[#1434A4]",
  아동: "bg-[#FFD84D]",
  안전: "bg-[#DC2626]",
  노동: "bg-[#B45309]",
};

export function StaticMap({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<MapCategory>("전체");
  const [selected, setSelected] = useState(mapMarkers[0]);
  const markers = useMemo(() => {
    if (category === "전체") return mapMarkers;
    return mapMarkers.filter((marker) => marker.category === category);
  }, [category]);
  const visibleMarkers = markers;
  const listHeightClass = preview ? "max-h-[520px]" : "max-h-[620px]";

  function handleCategoryChange(nextCategory: MapCategory) {
    setCategory(nextCategory);
    const nextMarkers = nextCategory === "전체" ? mapMarkers : mapMarkers.filter((marker) => marker.category === nextCategory);
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
        <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] border border-[#D7E4FF] bg-[#F7FAFF] md:aspect-[16/10]">
          <svg viewBox="0 0 760 460" className="absolute inset-0 h-full w-full" role="img" aria-label="신당동, 이곡2동, 이곡1동을 생활권 도형과 공약 핀으로 표시한 성서 공약지도">
            <defs>
              <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#0B1F66" floodOpacity=".12" />
              </filter>
            </defs>
            <rect width="760" height="460" fill="#F7FAFF" />
            <circle cx="96" cy="76" r="118" fill="#FFD84D" opacity=".18" />
            <circle cx="656" cy="382" r="134" fill="#1D4ED8" opacity=".10" />
            <path d="M66 322C188 292 290 310 392 300C514 288 606 246 724 266" stroke="#2FBF71" strokeWidth="18" strokeLinecap="round" opacity=".42" />
            <path d="M54 124C112 88 188 86 246 122C286 146 292 226 252 264C196 316 104 294 60 244C24 202 16 148 54 124Z" fill="#EAF2FF" stroke="#8FB7F1" strokeWidth="2.5" filter="url(#mapShadow)" />
            <path d="M276 102C346 78 440 82 492 136C536 182 512 256 454 284C382 318 292 284 260 226C232 176 232 118 276 102Z" fill="#FFF7D6" stroke="#E8CA51" strokeWidth="2.5" filter="url(#mapShadow)" />
            <path d="M516 120C582 72 672 88 714 154C752 214 720 292 646 318C568 346 496 302 482 232C472 180 486 142 516 120Z" fill="#E8F5EF" stroke="#89C9B4" strokeWidth="2.5" filter="url(#mapShadow)" />
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
              <span className={cn("flex h-6 w-6 items-center justify-center rounded-full border-[3px] shadow-lg transition hover:scale-110 md:h-8 md:w-8 md:border-4", selected.title === marker.title ? "scale-125 border-[#FFD84D] ring-4 ring-white/80" : "border-white", categoryColor[marker.category], marker.category === "아동" ? "text-[#0B1F66]" : "text-white")}>
                <span className="h-2 w-2 rounded-full bg-current md:h-2.5 md:w-2.5" />
              </span>
              <span className="sr-only">{marker.title}</span>
            </button>
          ))}
          <div className="absolute left-4 top-4 hidden rounded-2xl bg-white/88 px-4 py-3 shadow-lg backdrop-blur md:block">
            <p className="text-xs font-black text-[#1434A4]">성서 생활권</p>
            <p className="mt-1 text-sm font-black text-[#0B1F66]">선·도형·핀으로 보는 공약 흐름</p>
          </div>
          <div className="pointer-events-none absolute inset-0 z-10 hidden md:block" aria-hidden>
            <div className="absolute left-[16.8%] top-[39%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/84 px-3 py-2 text-center shadow-md backdrop-blur">
              <p className="text-xl font-black text-[#0B1F66]">신당동</p>
              <p className="mt-0.5 text-[11px] font-extrabold text-[#344054]">환경·시유지·노동</p>
            </div>
            <div className="absolute left-[50.3%] top-[39%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/84 px-3 py-2 text-center shadow-md backdrop-blur">
              <p className="text-xl font-black text-[#0B1F66]">이곡2동</p>
              <p className="mt-0.5 text-[11px] font-extrabold text-[#344054]">안전·청년·주거</p>
            </div>
            <div className="absolute left-[80.5%] top-[41%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/84 px-3 py-2 text-center shadow-md backdrop-blur">
              <p className="text-xl font-black text-[#0B1F66]">이곡1동</p>
              <p className="mt-0.5 text-[11px] font-extrabold text-[#344054]">환경·보행</p>
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 md:hidden" aria-label="성서 생활권 범례">
          {[
            ["신당동", "환경·시유지"],
            ["이곡2동", "안전·청년"],
            ["이곡1동", "환경·보행"],
          ].map(([name, detail]) => (
            <div key={name} className="rounded-2xl border border-[#D7E4FF] bg-white px-2.5 py-2 text-center shadow-sm">
              <p className="text-sm font-black text-[#0B1F66]">{name}</p>
              <p className="mt-0.5 text-[10px] font-bold leading-4 text-[#667085]">{detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-[#D7E4FF] bg-white p-5">
          <p className="text-xs font-black text-[#1434A4]">{selected.category} · {selected.area}</p>
          <h3 className="mt-2 text-xl font-black text-[#0B1F66]">{selected.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#667085]">{selected.issue}</p>
          <p className="mt-2 text-sm font-bold leading-6 text-[#344054]">{selected.pledge}</p>
        </div>
        <p className="mt-4 text-sm leading-6 text-[#667085]">정확한 행정경계보다 선거공보의 핵심공약과 생활권 현안을 한눈에 이해할 수 있도록 정리했습니다.</p>
      </div>
      <div className={cn("grid gap-3 overflow-auto pr-1", listHeightClass)}>
        {visibleMarkers.map((marker) => <MarkerCard key={marker.title} marker={marker} />)}
      </div>
    </div>
  );
}
