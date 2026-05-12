import type { Metadata } from "next";
import Link from "next/link";
import { DistrictCard } from "@/components/cards/DistrictCard";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { CTASection } from "@/components/common/CTASection";
import { districts } from "@/data/districts";

export const metadata: Metadata = {
  title: "동별 공약 | 유선경.kr",
};

export default function DistrictsPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <Container>
          <SectionTitle eyebrow="동별 공약" title="같은 성서라도, 동마다 필요한 변화는 다릅니다" description="이곡1동·이곡2동·신당동을 따로 보고 생활 불편을 구체적으로 점검하겠습니다." align="center" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {districts.map((district) => <a key={district.name} href={`#${district.name}`} className="btn-base btn-white btn-small">{district.name}</a>)}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {districts.map((district) => (
              <div key={district.name} id={district.name}>
                <DistrictCard district={district} />
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/map" className="btn-base btn-primary">공약지도 보기</Link>
            <Link href="/voice" className="btn-base btn-white">유권자의 소리 남기기</Link>
          </div>
        </Container>
      </section>

      <CTASection title="동네의 작은 불편을 알려주세요" description="이곡1동·이곡2동·신당동의 현장 의견을 공약과 의정 질문으로 연결하겠습니다." primaryHref="/voice" primaryLabel="의견 남기기" />
    </>
  );
}
