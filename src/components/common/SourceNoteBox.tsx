import type { ReactNode } from "react";
import { Info } from "lucide-react";

export function SourceNoteBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-5 text-sm leading-7 text-[#667085]">
      <div className="mb-2 flex items-center gap-2 font-black text-[#0B1F66]">
        <Info className="h-4 w-4" aria-hidden />
        안내
      </div>
      {children}
    </div>
  );
}
