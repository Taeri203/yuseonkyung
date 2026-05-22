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
  title: "우리 동네를 위한 5가지 공약 | 유선경.kr",
};

export default function PledgesPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-center">
            <SectionTitle eyebrow="핵심공약" title="우리 동네를 위한 5가지 공약" description="이곡동과 신당동을 이렇게 바꾸겠습니다. 아래 내용은 선거공보를 기준으로 정리했습니다." />
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
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
            <p className="text-xl font-black text-[#0B1F66]">생활권별 공약은 공약지도와 동별 안내에서도 확인할 수 있습니다.</p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/map" className="btn-base btn-primary">공약지도 보기</Link>
              <Link href="/districts" className="btn-base btn-white">동별 공약 보기</Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection title="지도에서 현안을 확인하세요" description="성서 생활권의 주요 현안과 공약을 지도형 카드로 정리했습니다." primaryHref="/map" primaryLabel="공약지도 보기" secondaryHref="/districts" secondaryLabel="동별 공약 보기" />
    </>
  );
}
