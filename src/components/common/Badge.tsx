import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-[#EAF2FF] px-3 py-1 text-sm font-black text-[#1434A4]", className)}>
      {children}
    </span>
  );
}
