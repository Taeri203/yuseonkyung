import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { cn } from "@/lib/utils";

export function CampaignImageBlock({
  src,
  alt,
  title,
  description,
  reverse = false,
  imageTone = "white",
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  reverse?: boolean;
  imageTone?: "white" | "blue";
}) {
  return (
    <div className={cn("grid items-center gap-8 lg:grid-cols-2", reverse && "lg:[&>*:first-child]:order-2")}>
      <div className={cn("relative overflow-hidden rounded-[2rem] border p-3 shadow-xl", imageTone === "blue" ? "border-[#B9D2FF] bg-gradient-to-br from-[#EAF2FF] via-white to-[#D7E4FF]" : "border-[#E5E7EB] bg-gradient-to-br from-white via-[#F8FAFC] to-[#EAF2FF]")}>
        <div className="pointer-events-none absolute inset-0 opacity-70 soft-grid" aria-hidden />
        <div className={cn("pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-2xl", imageTone === "blue" ? "bg-[#FFD84D]/35" : "bg-[#1434A4]/10")} aria-hidden />
        <ImageWithFallback
          src={src}
          alt={alt}
          className="relative z-10 aspect-[3/4] w-full rounded-[1.5rem] bg-white/30 md:aspect-[4/5] lg:aspect-[4/3]"
          imgClassName="object-contain object-center"
          sizes="(min-width: 1024px) 520px, 100vw"
          preset="landscape"
          withDefaultBg={false}
        />
      </div>
      <div>
        <span className="font-black text-[#1434A4]">성서 현장</span>
        <h2 className="mt-3 text-3xl font-black text-[#0B1F66] md:text-5xl">{title}</h2>
        <p className="mt-5 text-lg leading-8 text-[#667085]">{description}</p>
      </div>
    </div>
  );
}
