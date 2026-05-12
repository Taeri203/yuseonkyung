import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureCard({ title, description, icon: Icon, compact = false }: { title: string; description: string; icon: LucideIcon; compact?: boolean }) {
  return (
    <article className={cn("motion-card surface-panel flex items-start gap-4 rounded-[1.25rem] p-4", !compact && "md:block md:rounded-[1.5rem] md:p-6", compact && "h-full")}>
      <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#1434A4]", !compact && "md:h-12 md:w-12")}>
        <Icon className={cn("h-5 w-5", !compact && "md:h-6 md:w-6")} aria-hidden />
      </div>
      <div>
        <h3 className={cn("text-lg font-black text-[#0B1F66]", !compact && "md:mt-5 md:text-xl")}>{title}</h3>
        <p className={cn("mt-1 text-sm leading-6 text-[#667085]", !compact && "md:mt-3 md:text-base md:leading-7")}>{description}</p>
      </div>
    </article>
  );
}
