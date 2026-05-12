import { Badge } from "@/components/common/Badge";
import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0B1F66] md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-[#667085]">{description}</p> : null}
    </div>
  );
}
