import type { LucideIcon } from "lucide-react";

export function FeatureCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <article className="motion-card surface-panel flex items-start gap-4 rounded-[1.25rem] p-4 md:block md:rounded-[1.5rem] md:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#1434A4] md:h-12 md:w-12">
        <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
      </div>
      <div>
        <h3 className="text-lg font-black text-[#0B1F66] md:mt-5 md:text-xl">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#667085] md:mt-3 md:text-base md:leading-7">{description}</p>
      </div>
    </article>
  );
}
