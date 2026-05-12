import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "홍보 이미지 | 유선경.kr",
};

export default function GalleryPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <Container>
          <SectionTitle eyebrow="홍보 이미지" title="유선경 후보 공식 이미지" description="제공된 실제 사진 5장을 카드형 갤러리로 정리했습니다. 이미지를 클릭하면 크게 볼 수 있습니다." align="center" />
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
