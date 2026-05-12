import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 유선경.kr",
};

const policies = [
  { title: "수집 항목", body: "유권자 의견 접수 시 이름, 연락처, 거주지, 의견 제목과 내용, 답변 희망 여부를 수집할 수 있습니다." },
  { title: "수집 목적", body: "유권자 의견 확인, 답변, 현장점검 및 공약 검토를 위한 연락 목적으로 사용합니다." },
  { title: "보유 기간", body: "수집된 정보는 목적 달성 시 지체 없이 파기합니다. 선거 관련 법령상 보관이 필요한 경우 해당 기간 동안 보관할 수 있습니다." },
  { title: "제3자 제공 원칙", body: "법령에 근거한 경우를 제외하고 정보주체 동의 없이 개인정보를 제3자에게 제공하지 않습니다." },
  { title: "동의 거부권", body: "개인정보 수집에 동의하지 않을 수 있으며, 이 경우 의견 접수와 답변이 제한될 수 있습니다." },
  { title: "문의처", body: `유선경 선거사무소 · 전화: ${siteConfig.phone}` },
];

export default function PrivacyPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle eyebrow="개인정보처리방침" title="개인정보를 필요한 목적에 한해 처리합니다" description="유권자 의견 접수와 답변을 위한 최소한의 개인정보 처리 기준입니다." />
        <div className="mt-9 grid gap-4">
          {policies.map((policy) => (
            <article key={policy.title} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-[#0B1F66]">{policy.title}</h2>
              <p className="mt-3 leading-8 text-[#667085]">{policy.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
