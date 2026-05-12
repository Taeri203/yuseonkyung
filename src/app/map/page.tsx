import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { StaticMap } from "@/components/sections/StaticMap";
import { mapMarkers } from "@/data/map";

export const metadata: Metadata = {
  title: "우리동네 공약지도 | 유선경.kr",
};

export default function MapPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <Container>
          <SectionTitle eyebrow="우리동네 공약지도" title="성서의 핵심 현안을 한눈에 보는 공약지도" description="이곡1동·이곡2동·신당동을 세 구역으로 나누고, 환경·공공부지·보행·청년·이주민·아동 의제를 함께 정리했습니다." align="center" />
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <StaticMap />
          <div className="mt-10 rounded-[2rem] bg-[#F8FAFC] p-6">
            <h2 className="text-2xl font-black text-[#0B1F66]">지도 없이도 확인할 수 있는 마커 목록</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mapMarkers.map((marker) => (
                <article key={marker.title} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-black text-[#1434A4]">{marker.category} · {marker.area}</p>
                  <h3 className="mt-2 font-black text-[#0B1F66]">{marker.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#667085]">{marker.issue}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-9 text-center">
            <p className="text-xl font-black text-[#0B1F66]">지도에 없는 성서의 문제도 남겨주세요.</p>
            <Link href="/voice" className="btn-base btn-primary mt-5">유권자의 소리 남기기</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
