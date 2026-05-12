import { Baby, BriefcaseBusiness, Footprints, HandHeart, Store, UsersRound } from "lucide-react";
import type { Generation } from "@/types";

export const generations: Generation[] = [
  {
    audience: "청년",
    title: "대구를 떠나지 않아도 기회가 넘치는 성서",
    icon: BriefcaseBusiness,
    pledges: ["청년역량개발지원 조례", "자격증·어학시험 응시료 실비 지원", "청년 커리어 지원", "청년·청소년 노동권 보장", "청년 1인가구 공유주택 지원", "지역기업·성서산단·청년 연결", "청년 커뮤니티 공간"],
  },
  {
    audience: "여성",
    title: "경력은 이어가고, 일상은 안전한 성서",
    icon: HandHeart,
    pledges: ["경력보유여성 재취업 매칭", "전문직종 재취업·창업 지원센터", "여성 안심 스마트 귀갓길", "골목길 스마트 가로등", "안심 비상벨", "생활안전 지도", "일과 돌봄이 연결되는 지원"],
  },
  {
    audience: "아이·학부모",
    title: "아이들의 꿈이 자라는 성서",
    icon: Baby,
    pledges: ["장난감도서관", "어린이미술관", "아동친화시설", "지하철역 아동 비데", "세심한 수유공간", "놀이터·공원·통학로 안전", "공동육아 프로그램"],
  },
  {
    audience: "장애인·어르신·보행약자",
    title: "허들 제로 성서",
    icon: Footprints,
    pledges: ["보도 턱 낮춤", "경사로", "점자블록", "쉬어가는 벤치", "횡단보도 대기공간", "스마트 횡단보도", "공공시설 무장애 점검"],
  },
  {
    audience: "이주민·정주민",
    title: "환대와 공존의 성서",
    icon: UsersRound,
    pledges: ["한국어·생활법률·노동상담", "외국인 주민 생활안전", "다문화 가족 교류", "쓰레기·주거·상권 갈등 조정", "성서산단 노동자 지원", "정주민과 이주민이 함께하는 동네 프로그램"],
  },
  {
    audience: "소상공인·상권",
    title: "생활상권이 살아나는 성서",
    icon: Store,
    pledges: ["골목상권 환경 개선", "보행·주차·안전 민원 수렴", "청년과 상권 연결 프로그램", "다문화 상권과 지역상권 공존", "상권 디지털 홍보 지원"],
  },
];
