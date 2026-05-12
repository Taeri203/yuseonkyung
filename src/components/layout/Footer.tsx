import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#0B1F66] py-12 text-white">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-bold text-blue-100">{siteConfig.party} · {siteConfig.electionName}</p>
            <h2 className="mt-2 text-4xl font-black">{siteConfig.candidateName}</h2>
            <p className="mt-3 max-w-xl leading-7 text-blue-100">{siteConfig.slogan}. {siteConfig.area}의 생활 문제에 응답하겠습니다.</p>
          </div>
          <nav className="grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label="하단 메뉴">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="rounded-xl bg-white/10 px-3 py-2 text-sm font-bold text-blue-50">{item.label}</Link>)}
          </nav>
        </div>
        <div className="mt-8 border-t border-white/15 pt-6 text-sm leading-7 text-blue-100">
          <p>문의: {siteConfig.phone} · 후원회: {siteConfig.donationName}</p>
          <p className="mt-1">본 홈페이지는 유선경 후보의 정책, 후원 안내, 유권자 의견 접수 안내를 제공하는 정적 웹사이트입니다.</p>
        </div>
      </div>
    </footer>
  );
}
