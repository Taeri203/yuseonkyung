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
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#F6F8FB]">
          <svg viewBox="0 0 760 460" className="absolute inset-0 h-full w-full" role="img" aria-label="서쪽 신당동, 중앙 이곡2동, 동쪽 이곡1동 순서로 표시한 성서 생활권 공약지도">
            <rect width="760" height="460" fill="#F6F8FB" />
            <g opacity=".92">
              <rect x="42" y="42" width="120" height="70" rx="6" fill="#E9EEF5" />
              <rect x="182" y="36" width="150" height="84" rx="6" fill="#EDF2F7" />
              <rect x="354" y="44" width="138" height="76" rx="6" fill="#E9EEF5" />
              <rect x="522" y="40" width="164" height="84" rx="6" fill="#E9EEF5" />
              <rect x="54" y="142" width="110" height="78" rx="6" fill="#E8F3E8" />
              <rect x="190" y="150" width="134" height="70" rx="6" fill="#F3ECE5" />
              <rect x="354" y="150" width="146" height="72" rx="6" fill="#F3ECE5" />
              <rect x="526" y="150" width="150" height="72" rx="6" fill="#EDF2F7" />
              <rect x="58" y="252" width="150" height="88" rx="6" fill="#E9EEF5" />
              <rect x="236" y="258" width="118" height="76" rx="6" fill="#F3ECE5" />
              <rect x="384" y="252" width="136" height="88" rx="6" fill="#E8F3E8" />
              <rect x="552" y="250" width="136" height="92" rx="6" fill="#E9EEF5" />
            </g>
            <g stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round">
              <path d="M20 132H740" />
              <path d="M20 238H740" />
              <path d="M20 360H740" />
              <path d="M176 20V430" />
              <path d="M340 20V430" />
              <path d="M514 20V430" />
              <path d="M674 20V430" />
              <path d="M92 26C114 96 78 136 114 206C154 284 116 340 144 430" />
              <path d="M426 28C406 92 448 138 418 210C384 292 432 348 408 430" />
            </g>
            <g stroke="#D6DEE8" strokeWidth="2" opacity=".85">
              {Array.from({ length: 7 }).map((_, index) => (
                <path key={`h-${index}`} d={`M38 ${72 + index * 50}H714`} />
              ))}
              {Array.from({ length: 9 }).map((_, index) => (
                <path key={`v-${index}`} d={`M${70 + index * 76} 30V420`} />
              ))}
            </g>
            <path d="M-20 312C120 284 226 288 342 296C454 304 580 310 782 286" stroke="#F7DE7B" strokeWidth="30" strokeLinecap="round" />
            <path d="M-20 312C120 284 226 288 342 296C454 304 580 310 782 286" stroke="#22A06B" strokeWidth="5" strokeLinecap="round" />
            <g fill="#0B1F66" fontWeight="900">
              <text x="112" y="204" fontSize="22">신당동</text>
              <text x="350" y="250" fontSize="22">이곡2동</text>
              <text x="584" y="196" fontSize="22">이곡1동</text>
            </g>
            <g>
              <rect x="244" y="274" width="106" height="30" rx="15" fill="#FFFFFF" stroke="#22A06B" strokeWidth="2" />
              <text x="266" y="295" fill="#0F766E" fontSize="14" fontWeight="900">성서산업단지역</text>
              <rect x="440" y="282" width="64" height="30" rx="15" fill="#FFFFFF" stroke="#22A06B" strokeWidth="2" />
              <text x="458" y="303" fill="#0F766E" fontSize="14" fontWeight="900">이곡역</text>
            </g>
            <g fill="#1434A4" fontSize="13" fontWeight="800" opacity=".72">
              <text x="28" y="438">서쪽</text>
              <text x="698" y="438">동쪽</text>
              <path d="M68 434H154" stroke="#1434A4" strokeWidth="2" />
              <path d="M678 434H592" stroke="#1434A4" strokeWidth="2" />
            </g>
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
