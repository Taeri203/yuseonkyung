import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { SourceNoteBox } from "@/components/common/SourceNoteBox";
import { VoiceForm } from "@/components/forms/VoiceForm";
import { siteConfig } from "@/data/site";
import { voiceFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "유권자의 소리 | 유선경.kr",
};

export default function VoicePage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_.75fr] lg:items-center">
            <SectionTitle eyebrow="유권자의 소리" title="성서의 환경, 보행, 돌봄, 청년, 이주민, 공공부지 의견을 남겨주세요" description="작은 제보도 모이면 공약이 되고, 현장점검의 출발점이 됩니다." />
            <div className="rounded-[2rem] bg-white p-3 shadow-xl">
              <ImageWithFallback src={siteConfig.images.fieldSign} alt="거리에서 피켓을 들고 주민을 만나는 유선경 후보" className="rounded-[1.5rem]" sizes="(min-width: 1024px) 420px, 100vw" preset="portrait" />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
            <aside className="space-y-4">
              {voiceFaqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                  <h2 className="font-black text-[#0B1F66]">{faq.question}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#667085]">{faq.answer}</p>
                </article>
              ))}
              <SourceNoteBox>현재 페이지는 API 연결 없이 프론트엔드 폼만 구현되어 있으며, 제출 시 서버 전송 없이 성공 안내를 표시합니다.</SourceNoteBox>
            </aside>
            <VoiceForm />
          </div>
        </Container>
      </section>
    </>
  );
}
