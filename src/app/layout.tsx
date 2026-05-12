import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { defaultSeo, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://xn--289ap00bwle.kr"),
  title: {
    default: defaultSeo.title,
    template: "%s",
  },
  description: defaultSeo.description,
  openGraph: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    siteName: siteConfig.siteName,
    images: [{ url: siteConfig.images.hero, width: 1200, height: 630, alt: "달서구의원 후보 유선경 공식 프로필 사진" }],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
