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
          <SectionTitle eyebrow="세대별·상황별 공약" title="같은 동네라도 필요한 변화는 사람마다 다릅니다" description="청년, 여성, 아이, 어르신, 이주민, 소상공인의 일상에서 필요한 정책을 구체화했습니다." align="center" />
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {generations.map((item) => <GenerationCard key={item.audience} item={item} />)}
          </div>
        </Container>
      </section>
      <CTASection title="필요한 공약을 직접 제안해 주세요" description="생활 속 의견은 공약을 더 정확하게 만드는 가장 중요한 근거입니다." primaryHref="/voice" primaryLabel="유권자의 소리 남기기" secondaryHref="/pledges" secondaryLabel="5대 의제 보기" />
    </>
  );
}
