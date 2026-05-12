import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="py-14">
      <Container>
        <div className="blue-gradient rounded-[2rem] p-7 text-center text-white shadow-2xl md:p-10">
          <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-blue-50">{description}</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-base btn-yellow">
              {primaryLabel}
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="btn-base btn-white">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
