import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { cn } from "@/lib/utils";

export function CandidateVisualFrame({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(min-width: 1024px) 420px, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#D7E4FF] bg-white/90 p-3 shadow-2xl shadow-[#0B1F66]/12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,216,77,.46),transparent_22%),radial-gradient(circle_at_18%_78%,rgba(29,78,216,.16),transparent_30%),linear-gradient(145deg,#FFFFFF_0%,#EAF2FF_55%,#F8FBFF_100%)]" aria-hidden />
      <svg className="pointer-events-none absolute inset-0 h-full w-full text-[#1434A4]/28" viewBox="0 0 560 680" fill="none" aria-hidden>
        <path className="hero-drift-line" d="M42 124C136 72 226 116 300 80C386 38 460 96 526 48" stroke="currentColor" strokeWidth="2" strokeDasharray="10 12" />
        <path className="hero-drift-line-alt" d="M30 456C116 374 218 478 316 390C414 300 480 354 544 294" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" />
        <path className="hero-drift-route" d="M84 594C158 548 250 574 330 520C408 468 462 482 526 438" stroke="currentColor" strokeWidth="7" opacity=".2" />
        <circle className="hero-float-orb" cx="426" cy="150" r="76" fill="#FFD84D" opacity=".88" />
        <circle className="hero-float-orb-alt" cx="118" cy="520" r="94" fill="#1D4ED8" opacity=".08" />
      </svg>
      <div className="pointer-events-none absolute left-5 top-5 z-20 flex gap-2" aria-hidden>
        {["공감", "실력", "성서"].map((label) => (
          <span key={label} className="rounded-full bg-[#FFD84D] px-3 py-1 text-xs font-black text-[#0B1F66] shadow-sm">
            {label}
          </span>
        ))}
      </div>
      <ImageWithFallback
        src={src}
        alt={alt}
        className={cn("relative z-10 aspect-[4/5] rounded-[1.5rem] bg-transparent", className)}
        imgClassName={cn("object-contain object-bottom drop-shadow-[0_20px_30px_rgba(11,31,102,.24)]", imgClassName)}
        sizes={sizes}
        preset="cutout"
        withDefaultBg={false}
      />
    </div>
  );
}
