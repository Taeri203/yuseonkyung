import { Baby, BriefcaseBusiness, Footprints, HandHeart, UsersRound } from "lucide-react";
import type { Generation } from "@/types";

export const generations: Generation[] = [
  {
    audience: "청년",
    title: "청년의 꿈이 성서의 내일로, 든든한 성서",
    icon: BriefcaseBusiness,
    pledges: [
      "청년 역량 개발을 위한 자격증·어학 시험 응시료 지원",
      "수도권 청년들이 받는 혜택을 그대로 받을 수 있게 추진",
      "달서형 '천원주택' 시범 시행",
      "1인 가구 공유주택 지원 사업",
    ],
  },
  {
    audience: "여성·가족",
    title: "경력은 이어가고, 일상은 안전한 성서",
    icon: HandHeart,
    pledges: ["안심 귀갓길 확대", "어두운 골목길 스마트 가로등·안심 비상벨", "첫 아이 출생 지원 확대"],
  },
  {
    audience: "아이·학부모",
    title: "아이 키우기 좋은 성서",
    icon: Baby,
    pledges: [
      "어린이 공공보육시설 대폭 확대",
      "어린이집·유치원 급식비·간식비 격차 완화",
      "틈새 돌봄 지원, 동네 돌봄 시설 마련",
      "달빛어린이병원 지정 확대 등 소아·분만 24시간 지역 책임",
    ],
  },
  {
    audience: "어르신·장애인",
    title: "걸어 다니기 좋은 성서",
    icon: Footprints,
    pledges: ["보행로와 공공시설 개선", "할아버지·할머니·어린이·장애인·임산부 안전 이동"],
  },
  {
    audience: "노동·이주민",
    title: "일하고 싶은 성서, 일하기 좋은 성서",
    icon: UsersRound,
    pledges: ["달서구 생활임금 도입", "5인 미만·초단기 근로 노동기본권 보장 및 소상공인 지원", "성서형 어울림 모델 구축"],
  },
];
