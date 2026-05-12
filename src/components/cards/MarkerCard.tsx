import type { MapMarker } from "@/types";

export function MarkerCard({ marker }: { marker: MapMarker }) {
  return (
    <article className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-black text-[#0B1F66]">{marker.title}</h3>
        <span className="rounded-full bg-[#EAF2FF] px-3 py-1 text-xs font-black text-[#1434A4]">{marker.category}</span>
      </div>
      <p className="mt-2 text-sm font-bold text-[#0F766E]">{marker.area}</p>
      <p className="mt-3 text-sm leading-6 text-[#667085]">현안: {marker.issue}</p>
      <p className="mt-2 text-sm leading-6 text-[#344054]">공약: {marker.pledge}</p>
    </article>
  );
}
