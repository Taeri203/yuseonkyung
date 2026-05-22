import type { Metadata } from "next";
import { GenerationCard } from "@/components/cards/GenerationCard";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { CTASection } from "@/components/common/CTASection";
import { generations } from "@/data/generations";

export const metadata: Metadata = {
  title: "세대별·상황별 공약 | 유선경.kr",
};

export default function GenerationsPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <Container>
          <SectionTitle eyebrow="세대별·상황별 공약" title="같은 동네라도 필요한 변화는 사람마다 다릅니다" description="선거공보의 핵심공약과 한 걸음 더 공약을 생활 상황별로 정리했습니다." align="center" />
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {generations.map((item) => <GenerationCard key={item.audience} item={item} />)}
          </div>
        </Container>
      </section>
      <CTASection title="공약 전체를 한눈에 보기" description="핵심공약 5가지와 소통·주거·돌봄·안전·노동 공약을 함께 확인하세요." primaryHref="/pledges" primaryLabel="5가지 공약 보기" secondaryHref="/map" secondaryLabel="공약지도 보기" />
    </>
  );
}
