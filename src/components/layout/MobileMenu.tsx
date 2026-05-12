"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { navItems, siteConfig } from "@/data/site";

const groupedNav = [
  { title: "후보", items: navItems.filter((item) => item.href === "/about" || item.href === "/gallery") },
  { title: "공약", items: navItems.filter((item) => ["/pledges", "/districts", "/generations", "/map"].includes(item.href)) },
  { title: "참여", items: navItems.filter((item) => item.href === "/voice" || item.href === "/donation") },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-[#D7E4FF] bg-[#F8FAFC] px-3 py-2 text-sm font-black text-[#0B1F66]" aria-label="모바일 메뉴 열기">
        <Menu className="h-6 w-6" aria-hidden />
        메뉴
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B1F66]/58 p-3 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="모바일 메뉴">
          <div className="mx-auto flex min-h-[calc(100vh-24px)] max-w-[390px] flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1434A4] via-[#1D4ED8] to-[#EAF2FF] p-5 text-white">
              <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-[#FFD84D]/35 blur-2xl" aria-hidden />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-blue-100">{siteConfig.electionName}</p>
                  <p className="mt-1 text-3xl font-black">{siteConfig.candidateName}</p>
                  <p className="mt-1 text-sm font-black text-[#FFD84D]">{siteConfig.slogan}</p>
                </div>
                <button type="button" onClick={() => setOpen(false)} className="rounded-2xl bg-white/12 p-2" aria-label="모바일 메뉴 닫기">
                  <X className="h-6 w-6" aria-hidden />
                </button>
              </div>
              <div className="relative mt-4 grid grid-cols-[76px_1fr] items-center gap-3 rounded-2xl bg-white/10 p-3">
                <ImageWithFallback src={siteConfig.images.heroCutout} alt="달서구의원 후보 유선경 공식 프로필 사진" className="h-20 w-20 shrink-0 rounded-2xl bg-white/10" imgClassName="object-contain object-bottom" sizes="80px" preset="cutout" withDefaultBg={false} />
                <p className="text-sm font-bold leading-6 text-blue-50">이곡1동·이곡2동·신당동의 생활 문제를 공약과 실행으로 연결하겠습니다.</p>
              </div>
            </div>
            <nav className="grid content-start gap-4 p-4">
              {groupedNav.map((group) => (
                <section key={group.title} aria-label={`${group.title} 메뉴`}>
                  <h2 className="mb-2 px-1 text-xs font-black tracking-[0.18em] text-[#1434A4]">{group.title}</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-14 items-center justify-between rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-3 text-sm font-black text-[#0B1F66]">
                        <span>{item.label}</span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-[#1434A4]" aria-hidden />
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </nav>
            <div className="mt-auto grid grid-cols-2 gap-2 border-t border-[#E5E7EB] p-4">
              <Link href="/voice" onClick={() => setOpen(false)} className="btn-base btn-primary btn-small">의견 남기기</Link>
              <Link href="/donation" onClick={() => setOpen(false)} className="btn-base btn-yellow btn-small">후원 안내</Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
