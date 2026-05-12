import { siteConfig } from "@/data/site";

export const donationInfo = {
  name: siteConfig.donationName,
  bank: siteConfig.donationBank,
  account: siteConfig.donationAccount,
  holder: siteConfig.donationAccountHolder,
  inquiry: siteConfig.phone,
  phoneHref: siteConfig.phoneHref,
};

export const donationGuides = [
  "개인 최대 100만 원",
  "법인, 단체, 공무원, 외국인 후원 불가",
  "10만 원 이하는 전액 세액공제",
  "초과분은 소득공제 가능",
  "후원금 영수증 발급을 위해 필요한 정보를 확인할 수 있음",
  "자세한 내용은 후원회로 문의",
];

export const donationFaqs = [
  { question: "후원은 어디로 하나요?", answer: "우체국 100-0003-68828, 유선경후원회(달서구의원선거)로 후원하실 수 있습니다." },
  { question: "후원 한도는 어떻게 되나요?", answer: "개인 최대 100만 원까지 후원할 수 있으며, 법인·단체·공무원·외국인은 후원이 제한될 수 있습니다." },
  { question: "세액공제는 어떻게 되나요?", answer: "10만 원 이하는 전액 세액공제, 초과분은 관련 기준에 따라 공제받으실 수 있습니다." },
  { question: "영수증은 어떻게 발급받나요?", answer: "후원 및 영수증 발급 문의는 010-5178-5711로 연락해 주세요." },
];
