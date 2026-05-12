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
      <div className={cn("rounded-[2rem] p-3 shadow-xl", imageTone === "blue" ? "bg-[#0B1F66]" : "bg-white")}>
        <ImageWithFallback
          src={src}
          alt={alt}
          className="aspect-[3/4] w-full rounded-[1.5rem] md:aspect-[4/5] lg:aspect-[4/3]"
          imgClassName="object-contain object-center bg-white"
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
