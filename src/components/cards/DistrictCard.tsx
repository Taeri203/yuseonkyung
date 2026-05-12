import { MapPin } from "lucide-react";
import type { District } from "@/types";

export function DistrictCard({ district }: { district: District }) {
  return (
    <article className="motion-card rounded-[1.75rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1434A4] text-white">
          <MapPin className="h-5 w-5" aria-hidden />
        </span>
        <span className="text-lg font-black text-[#1434A4]">{district.name}</span>
      </div>
      <h3 className="mt-5 text-2xl font-black leading-tight text-[#0B1F66]">{district.title}</h3>
      {district.keywords ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {district.keywords.map((keyword) => <span key={keyword} className="rounded-full bg-[#FFF7D6] px-3 py-1 text-xs font-black text-[#0B1F66]">{keyword}</span>)}
        </div>
      ) : null}
      <p className="mt-4 rounded-2xl bg-[#EAF2FF] p-4 font-bold leading-7 text-[#0B1F66]">{district.summary}</p>
      <ul className="mt-5 space-y-3 leading-7 text-[#344054]">
        {district.pledges.map((item) => <li key={item} className="flex gap-2"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD84D]" />{item}</li>)}
      </ul>
    </article>
  );
}
