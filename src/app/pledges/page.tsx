import type { Metadata } from "next";
import Link from "next/link";
import { PledgeCard } from "@/components/cards/PledgeCard";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { CandidateVisualFrame } from "@/components/common/CandidateVisualFrame";
import { CTASection } from "@/components/common/CTASection";
import { agendaThemes, agendas } from "@/data/agendas";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "성서를 위한 5대 의제 | 유선경.kr",
};

export default function PledgesPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-center">
            <SectionTitle eyebrow="성서를 위한 5대 의제" title="환경, 공간, 이동권, 공존, 아이의 미래까지" description="유선경은 성서의 오래된 숙제를 생활 속에서 풀겠습니다." />
            <CandidateVisualFrame
              src={siteConfig.images.heroCutout}
              alt="달서구의원 후보 유선경 공식 프로필 사진"
              className="lg:aspect-[4/5]"
              sizes="(min-width: 1024px) 380px, 100vw"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {agendaThemes.map((theme) => (
              <article key={theme.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <span className="rounded-full bg-[#FFD84D] px-3 py-1 text-sm font-black text-[#0B1F66]">{theme.title}</span>
                <h2 className="mt-4 text-2xl font-black text-[#0B1F66]">{theme.headline}</h2>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[#344054]">
                  {theme.points.map((point) => <li key={point}>- {point}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-6">
            {agendas.map((agenda) => <PledgeCard key={agenda.id} agenda={agenda} />)}
          </div>
          <div className="mt-9 rounded-[2rem] bg-[#EAF2FF] p-6 text-center">
            <p className="text-xl font-black text-[#0B1F66]">공약은 주민의 제보로 계속 업데이트됩니다.</p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/map" className="btn-base btn-primary">공약지도 보기</Link>
              <Link href="/voice" className="btn-base btn-white">의견 남기기</Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection title="지도에서 현안을 확인하세요" description="성서 생활권의 주요 현안과 공약을 지도형 카드로 정리했습니다." primaryHref="/map" primaryLabel="공약지도 보기" secondaryHref="/districts" secondaryLabel="동별 공약 보기" />
    </>
  );
}
