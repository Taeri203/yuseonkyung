import type { MapCategory, MapMarker } from "@/types";

export const mapCategories: MapCategory[] = ["전체", "환경", "공공부지", "배리어프리", "청년", "이주민", "아동", "행정", "안전"];

export const mapMarkers: MapMarker[] = [
  { title: "성서소각장", category: "환경", area: "성서권", issue: "환경시설 부담과 주민 건강 우려", pledge: "정보공개, 주민 의견수렴, 건강영향 조사 요구", x: 27, y: 33 },
  { title: "방천매립장 악취 영향권", category: "환경", area: "신당·이곡 생활권", issue: "악취와 생활불편", pledge: "악취 체감지도, 저감대책, 주민피해 데이터화", x: 16, y: 58 },
  { title: "호산중학교 예정부지", category: "공공부지", area: "이곡1동 동측", issue: "유휴공공부지 활용", pledge: "주민활용 공론장 및 복합생활시설 검토", x: 82, y: 25 },
  { title: "달서구청 2청사 부지", category: "공공부지", area: "이곡2동 생활권", issue: "공공부지 활용 방향", pledge: "청년·돌봄·문화·행정 복합거점 검토", x: 55, y: 48 },
  { title: "옛 신당중학교 부지", category: "이주민", area: "신당동", issue: "폐교 활용과 주민교육", pledge: "AI교육·한국어교육과 주민생활시설 연계", x: 26, y: 68 },
  { title: "이곡1동 행정복지센터", category: "행정", area: "이곡1동", issue: "청사 신축과 주민 접근성", pledge: "주민편의·무장애 접근성 점검", x: 82, y: 40 },
  { title: "성서산업단지", category: "이주민", area: "신당·호림권", issue: "노동자 생활안전과 청년 일자리", pledge: "외국인 노동자 안전, 청년 일자리, 노동권 지원", x: 21, y: 44 },
  { title: "계명대 생활권", category: "청년", area: "신당동", issue: "청년정주와 커리어", pledge: "청년역량개발, 커리어 지원, 1인가구 지원", x: 36, y: 72 },
  { title: "이곡역 생활권", category: "안전", area: "이곡2동", issue: "보행약자 이동권과 안심귀가", pledge: "스마트 가로등, 안심벨, 보행환경 개선", x: 52, y: 42 },
  { title: "성서산업단지역 생활권", category: "배리어프리", area: "신당동", issue: "출퇴근 이동과 보행안전", pledge: "보행동선 점검, 교통약자 이동권 개선", x: 34, y: 54 },
  { title: "장난감도서관 후보지", category: "아동", area: "이곡2·이곡1 생활권", issue: "아동친화시설 부족", pledge: "장난감도서관, 어린이 창작공간, 수유공간 개선", x: 67, y: 70 },
  { title: "신당동 다문화 생활권", category: "이주민", area: "신당동", issue: "정주민과 이주민 공존", pledge: "생활법률·한국어·노동상담 연계", x: 18, y: 76 },
];
