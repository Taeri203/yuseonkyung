import Link from "next/link";
import { HeartHandshake, MessageSquareText, Phone } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navItems, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E7EB]/80 bg-white/94 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="유선경.kr 메인으로 이동">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B1F66] to-[#1D4ED8] text-lg font-black text-[#FFD84D] shadow-lg shadow-blue-900/15 transition-transform group-hover:-rotate-3">유</span>
          <span>
            <span className="block text-xl font-black tracking-tight text-[#0B1F66]">{siteConfig.candidateName}</span>
            <span className="hidden text-xs font-extrabold text-[#667085] sm:block">{siteConfig.party} · {siteConfig.area}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-0 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] p-1 shadow-sm xl:flex" aria-label="상단 메뉴">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-2.5 py-2 text-[13px] font-extrabold text-[#344054] transition hover:bg-white hover:text-[#1434A4] hover:shadow-sm 2xl:px-3 2xl:text-sm">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/voice" className="btn-base btn-white btn-small" aria-label="유권자의 소리로 이동">
            <MessageSquareText className="h-4 w-4" aria-hidden />
            의견
          </Link>
          <Link href="/donation" className="btn-base btn-yellow btn-small" aria-label="후원 안내로 이동">
            <HeartHandshake className="h-4 w-4" aria-hidden />
            후원
          </Link>
          <Link href={siteConfig.phoneHref} className="btn-base btn-dark btn-small" aria-label="전화 문의">
            <Phone className="h-4 w-4" aria-hidden />
            문의
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
