"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "@/data/site";

const menuLinks = [
  { label: "후보 소개", href: "/about" },
  { label: "5대 의제", href: "/pledges" },
  { label: "동별 공약", href: "/districts" },
  { label: "세대별 공약", href: "/generations" },
  { label: "공약지도", href: "/map" },
  { label: "홍보 이미지", href: "/gallery" },
];


export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const menuPanel = open ? (
    <div className="fixed inset-0 z-[100] bg-[#0B1F66]/58 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="모바일 메뉴">
      <button type="button" className="absolute inset-0 cursor-default" onClick={() => setOpen(false)} aria-label="모바일 메뉴 닫기 배경" />
      <div className="mobile-menu-panel absolute right-0 top-0 flex h-[100dvh] w-[min(88vw,360px)] flex-col overflow-hidden rounded-l-[2rem] bg-white shadow-[0_30px_80px_rgba(2,8,23,.38)]">
        <div className="flex shrink-0 items-start justify-between gap-4 bg-[#0B1F66] p-5 text-white">
          <div>
            <p className="text-xs font-black text-[#FFD84D]">MENU</p>
            <p className="mt-1 text-2xl font-black">{siteConfig.candidateName}</p>
            <p className="mt-1 text-sm font-bold text-blue-100">{siteConfig.slogan}</p>
          </div>
          <button type="button" onClick={() => setOpen(false)} className="rounded-full bg-white/12 p-2 text-white" aria-label="모바일 메뉴 닫기">
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <nav className="grid flex-1 grid-cols-1 content-start gap-2 overflow-y-auto p-4" aria-label="모바일 주요 메뉴">
          {menuLinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-4 text-sm font-black text-[#0B1F66] transition hover:border-[#B9D2FF] hover:bg-[#EAF2FF]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="grid shrink-0 grid-cols-2 gap-2 border-t border-[#E5E7EB] p-4">
          <Link href="/voice" onClick={() => setOpen(false)} className="rounded-full bg-[#1434A4] px-4 py-3 text-center text-sm font-black text-white">
            의견 남기기
          </Link>
          <Link href="/donation" onClick={() => setOpen(false)} className="rounded-full bg-[#FFD84D] px-4 py-3 text-center text-sm font-black text-[#0B1F66]">
            후원 안내
          </Link>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="ml-auto lg:hidden">
        <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-[#0B1F66] px-3.5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-950/20 ring-1 ring-[#FFD84D]/30" aria-label="모바일 메뉴 열기">
          <Menu className="h-5 w-5" aria-hidden />
          메뉴
        </button>
      </div>
      {mounted ? createPortal(menuPanel, document.body) : null}
    </>
  );
}
