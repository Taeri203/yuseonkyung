import type { Metadata } from "next";
import { DonationInfoCard } from "@/components/cards/DonationInfoCard";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SourceNoteBox } from "@/components/common/SourceNoteBox";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { donationFaqs, donationGuides } from "@/data/donation";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "후원 안내 | 유선경.kr",
};

export default function DonationPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <SectionTitle eyebrow="유선경 후원 안내" title="성서의 젊은 변화를 함께 만들어 주세요" description="소중한 후원은 유선경후원회(달서구의원선거)를 통해 투명하게 관리됩니다." />
            <div className="rounded-[2rem] bg-white p-3 shadow-xl">
              <ImageWithFallback src={siteConfig.images.donationPoster} alt="유선경후원회 달서구의원선거 후원 안내 이미지" className="rounded-[1.5rem]" sizes="(min-width: 1024px) 420px, 100vw" preset="poster" />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <DonationInfoCard />
            <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-black text-[#0B1F66]">후원 안내</h2>
              <p className="mt-4 leading-8 text-[#667085]">성서의 환경, 돌봄, 청년, 보행권을 바꾸는 생활정치에 함께해 주세요.</p>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {donationGuides.map((guide) => <li key={guide} className="rounded-2xl bg-[#F8FAFC] px-4 py-3 font-bold leading-6 text-[#344054]">- {guide}</li>)}
              </ul>
              <div className="mt-6">
                <SourceNoteBox>본 페이지의 후원 안내는 후원회 안내자료를 바탕으로 구성되었습니다. 후원 전 세부 자격과 한도는 후원회 또는 선거관리위원회 안내를 확인해 주세요.</SourceNoteBox>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <SectionTitle eyebrow="FAQ" title="자주 묻는 질문" />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {donationFaqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                  <h3 className="font-black text-[#0B1F66]">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-[#667085]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
