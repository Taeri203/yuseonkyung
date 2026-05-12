import { siteConfig } from "@/data/site";
import type { GalleryItem } from "@/types";

export const galleryItems: GalleryItem[] = [
  {
    title: "공식 프로필",
    description: "달서구의원 후보 유선경 공식 프로필 사진입니다.",
    src: siteConfig.images.hero,
    alt: "달서구의원 후보 유선경 공식 프로필 사진",
  },
  {
    title: "후보 소개 프로필",
    description: "유선경 후보의 상반신 프로필 사진입니다.",
    src: siteConfig.images.profileCloseup,
    alt: "유선경 후보 상반신 프로필 사진",
  },
  {
    title: "거리 현장 사진",
    description: "거리에서 피켓을 들고 주민을 만나는 현장 사진입니다.",
    src: siteConfig.images.fieldSign,
    alt: "거리에서 피켓을 들고 주민을 만나는 유선경 후보",
  },
  {
    title: "김부겸 후보와 함께",
    description: "공식 행사장에서 김부겸 후보와 함께한 사진입니다.",
    src: siteConfig.images.withKim,
    alt: "김부겸 후보와 함께한 유선경 후보",
  },
  {
    title: "후원 안내 이미지",
    description: "유선경후원회 달서구의원선거 후원 안내 이미지입니다.",
    src: siteConfig.images.donationPoster,
    alt: "유선경후원회 달서구의원선거 후원 안내 이미지",
  },
];
