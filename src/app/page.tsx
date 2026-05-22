import Link from "next/link";
import { ArrowRight, Baby, Building2, Ear, Footprints, Gauge, Leaf, MessageSquareText, Rocket, ShieldCheck } from "lucide-react";
import { AgendaCard } from "@/components/cards/AgendaCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { DonationInfoCard } from "@/components/cards/DonationInfoCard";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SectionTitle } from "@/components/common/SectionTitle";
import { HeroSection } from "@/components/sections/HeroSection";
import { CampaignImageBlock } from "@/components/sections/CampaignImageBlock";
import { StaticMap } from "@/components/sections/StaticMap";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { agendas } from "@/data/agendas";
import { siteConfig } from "@/data/site";

const identityCards = [
  { title: "공감", description: "주민의 삶을 먼저 듣겠습니다.", icon: Ear },
  { title: "실력", description: "PR 전문가의 분석력으로 문제를 풀겠습니다.", icon: Gauge },
  { title: "청년", description: "떠나지 않아도 기회가 있는 성서를 만들겠습니다.", icon: Rocket },
  { title: "실행", description: "말보다 행동, 약속보다 결과물로 답하겠습니다.", icon: ShieldCheck },
];

const problems = [
  { title: "환경", description: "숨쉬기 좋은 성서", icon: Leaf },
  { title: "공간", description: "성서산업단지역 시유지", icon: Building2 },
  { title: "보행", description: "걸어 다니기 좋은 성서", icon: Footprints },
  { title: "청년", description: "든든한 성서", icon: Rocket },
  { title: "아이", description: "아이 키우기 좋은 성서", icon: Baby },
];

const actionSteps = ["현장에서 듣기", "자료로 확인하기", "의회에서 묻기", "예산으로 점검하기"];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="py-11 md:py-16">
        <Container>
          <ScrollReveal>
            <SectionTitle eyebrow="정체성" title="우리 동네를 바꾸는 젊은 엔진" description="유선경은 주민의 삶을 듣고, 문제를 분석하고, 사람을 설득해 결과를 만드는 후보입니다." align="center" />
            <div className="mt-6 grid gap-3 md:mt-9 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
              {identityCards.map((card, index) => <ScrollReveal key={card.title} delay={index * 70}><FeatureCard {...card} /></ScrollReveal>)}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-[#F8FAFC] py-11 md:py-16">
        <Container>
          <ScrollReveal>
            <SectionTitle eyebrow="우리 동네를 위한 5가지 공약" title="이곡동과 신당동을 이렇게 바꾸겠습니다" description="숨쉬기 좋은 성서부터 아이 키우기 좋은 성서까지, 선거공보의 핵심공약을 중심으로 안내합니다." />
            <div className="mt-6 grid gap-3 md:mt-9 md:grid-cols-2 md:gap-5 lg:grid-cols-5">
              {problems.map((card, index) => <ScrollReveal key={card.title} delay={index * 60}><FeatureCard {...card} compact /></ScrollReveal>)}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <SectionTitle eyebrow="핵심공약" title="우리 동네를 위한 5가지 공약" description="환경, 공간, 보행, 청년, 아이의 미래까지 선거공보에 담긴 약속을 성서 생활권에 맞게 추진하겠습니다." />
              <Link href="/pledges" className="btn-base btn-primary self-start md:self-auto">전체 보기 <ArrowRight className="h-5 w-5" aria-hidden /></Link>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {agendas.map((agenda, index) => <ScrollReveal key={agenda.id} delay={index * 55}><AgendaCard agenda={agenda} compact /></ScrollReveal>)}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <Container>
          <ScrollReveal>
            <CampaignImageBlock
              src={siteConfig.images.fieldSign}
              alt="거리에서 피켓을 들고 주민을 만나는 유선경 후보"
              title="답은 현장에 있습니다"
              description="미세먼지, 악취, 보행불편, 돌봄과 청년의 문제까지. 유선경은 주민이 겪는 불편을 현장에서 듣고, 의회에서 끝까지 묻겠습니다."
              imageTone="blue"
            />
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {actionSteps.map((step, index) => (
                <div key={step} className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-black text-[#1434A4]">0{index + 1}</p>
                  <p className="mt-1 text-base font-black leading-6 text-[#0B1F66] md:text-lg">{step}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <ScrollReveal>
            <CampaignImageBlock
              reverse
              src={siteConfig.images.withKim}
              alt="김부겸 후보와 함께한 유선경 후보"
              title="함께 듣고, 함께 바꾸겠습니다"
              description="더 큰 변화는 혼자 만들 수 없습니다. 유선경은 책임 있는 정치와 현장 중심의 소통으로 성서의 변화를 만들어가겠습니다."
            />
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <Container>
          <ScrollReveal>
            <SectionTitle eyebrow="공약지도" title="성서의 현안을 한눈에" description="이곡1동·이곡2동·신당동의 생활 문제를 지도형 카드로 확인하세요." />
            <div className="mt-9"><StaticMap preview /></div>
            <div className="mt-7 text-center">
              <Link href="/map" className="btn-base btn-primary">공약지도 자세히 보기</Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <ScrollReveal className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div className="rounded-[2rem] bg-white p-3 shadow-xl">
              <ImageWithFallback src={siteConfig.images.donationPoster} alt="유선경후원회 달서구의원선거 후원 안내 이미지" className="rounded-[1.5rem]" sizes="(min-width: 1024px) 380px, 100vw" preset="poster" />
            </div>
            <div>
              <SectionTitle eyebrow="후원 안내" title="유선경에게 힘을 보태주세요" description="소중한 후원은 성서의 생활정치를 바꾸는 힘이 됩니다." />
              <div className="mt-6"><DonationInfoCard /></div>
              <Link href="/donation" className="btn-base btn-yellow mt-6">후원 안내 보기</Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="blue-gradient py-16 text-white">
        <Container>
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <MessageSquareText className="mx-auto h-12 w-12 text-[#FFD84D]" aria-hidden />
            <h2 className="mt-4 text-3xl font-black md:text-5xl">성서의 불편을 남겨주세요</h2>
            <p className="mt-4 text-lg leading-8 text-blue-50">작은 제보도 모이면 공약이 되고, 공약은 의회의 질문과 예산으로 이어집니다.</p>
            <Link href="/voice" className="btn-base btn-yellow mt-7">의견 남기기</Link>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
