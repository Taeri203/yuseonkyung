import type { NavItem } from "@/types";

export const siteConfig = {
  siteName: "유선경.kr",
  candidateName: "유선경",
  party: "더불어민주당",
  electionName: "달서구의원선거 다 선거구 후보",
  area: "이곡1동·이곡2동·신당동",
  regionName: "성서",
  slogan: "공감과 실력, 당당한 달서",
  heroTitle: "당신의 삶에 응답하는 유능한 변화",
  heroSubtitle: "우리 동네를 바꾸는 젊은 엔진",
  phone: "010-5178-5711",
  phoneHref: "tel:01051785711",
  donationName: "유선경후원회(달서구의원선거)",
  donationBank: "우체국",
  donationAccount: "100-0003-68828",
  donationAccountHolder: "유선경후원회(달서구의원선거)",
  images: {
    hero: "/images/candidate/candidate-hero.jpg",
    heroCutout: "/images/candidate/candidate-hero-cutout.png",
    profileCloseup: "/images/candidate/candidate-profile-closeup.png",
    donationPoster: "/images/donation/donation-poster.jpg",
    fieldSign: "/images/field/field-sign.jpg",
    withKim: "/images/field/with-kim-boo-kyum.jpg",
  },
};

export const navItems: NavItem[] = [
  { label: "유선경 소개", href: "/about" },
  { label: "5가지 공약", href: "/pledges" },
  { label: "동별 공약", href: "/districts" },
  { label: "세대별 공약", href: "/generations" },
  { label: "공약지도", href: "/map" },
  { label: "유권자의 소리", href: "/voice" },
  { label: "후원 안내", href: "/donation" },
  { label: "홍보 이미지", href: "/gallery" },
];

export const defaultSeo = {
  title: "유선경.kr | 공감과 실력, 당당한 달서",
  description: "더불어민주당 유선경 달서구의원선거 다 선거구 후보의 5가지 핵심공약, 이곡1동·이곡2동·신당동 생활공약, 후원 안내와 유권자의 소리를 확인하세요.",
};
