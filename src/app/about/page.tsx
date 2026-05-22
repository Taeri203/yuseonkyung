import type { Metadata } from "next";
import Link from "next/link";
import { CareerTimeline } from "@/components/sections/CareerTimeline";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { CampaignImageBlock } from "@/components/sections/CampaignImageBlock";
import { profileKeywords, profileStory } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { Ear, Gauge, HandHeart, MessageCircle, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "유선경 소개 | 유선경.kr",
};

const icons = [Ear, Gauge, Rocket, HandHeart, MessageCircle];
const storySteps = [
  { title: "대구에 온 청년", body: "스무 살에 대구에 첫발을 내딛고 성서의 골목에서 주민의 삶을 배웠습니다." },
  { title: "PR 전문가의 실력", body: "복잡한 이해관계를 조율하고 성과를 만드는 훈련을 현장에서 쌓았습니다." },
  { title: "성서의 실행력", body: "데이터를 읽고 사람을 설득해 생활 문제를 의회의 질문과 예산으로 연결하겠습니다." },
];

export default function AboutPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_.78fr] lg:items-center">
            <div>
              <SectionTitle eyebrow="유선경 소개" title="당신을 닮은 후보, 성서를 바꾸는 젊은 엔진" description="젊은 감각과 PR 전문가의 실력으로 성서 생활정치의 변화를 만들겠습니다." />
              <div className="mt-7 space-y-5 text-lg leading-9 text-[#344054]">
                {profileStory.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-7 grid gap-3 md:grid-cols-3">
                {storySteps.map((step, index) => (
                  <article key={step.title} className="rounded-2xl border border-[#D7E4FF] bg-white/86 p-5 shadow-sm">
                    <p className="text-sm font-black text-[#1434A4]">0{index + 1}</p>
                    <h2 className="mt-2 text-lg font-black text-[#0B1F66]">{step.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[#667085]">{step.body}</p>
                  </article>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/pledges" className="btn-base btn-primary">5가지 공약 보기</Link>
                <Link href="/voice" className="btn-base btn-white">의견남기기</Link>
              </div>
            </div>
            <ProfileCard />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle eyebrow="후보 키워드" title="공감과 실력으로 준비했습니다" align="center" />
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {profileKeywords.map((keyword, index) => <FeatureCard key={keyword.title} title={keyword.title} description={keyword.description} icon={icons[index]} />)}
          </div>
        </Container>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <Container>
          <SectionTitle eyebrow="경력과 학력" title="공감만이 아니라 실력으로 준비했습니다" description="청년 정치, 지역 활동, 미디어와 소통 경험을 성서의 문제 해결로 연결하겠습니다." />
          <div className="mt-9"><CareerTimeline /></div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <CampaignImageBlock
            src={siteConfig.images.withKim}
            alt="김부겸 후보와 함께한 유선경 후보"
            title="책임 있는 정치, 현장에서 시작합니다"
            description="유선경은 더 큰 변화도 주민 곁의 작은 문제에서 출발한다고 믿습니다. 함께 듣고, 함께 바꾸는 성서 생활정치를 실천하겠습니다."
          />
        </Container>
      </section>
    </>
  );
}
