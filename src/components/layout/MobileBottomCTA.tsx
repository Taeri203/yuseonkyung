import Link from "next/link";
import { HeartHandshake, Map, MessageSquareText, Phone, ScrollText } from "lucide-react";
import { siteConfig } from "@/data/site";

const items = [
  { label: "공약", href: "/pledges", icon: ScrollText },
  { label: "지도", href: "/map", icon: Map },
  { label: "의견", href: "/voice", icon: MessageSquareText },
  { label: "후원", href: "/donation", icon: HeartHandshake },
  { label: "전화", href: siteConfig.phoneHref, icon: Phone },
];

export function MobileBottomCTA() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#D7E4FF] bg-white/96 px-2 pb-2 pt-1.5 shadow-2xl backdrop-blur md:hidden" aria-label="모바일 하단 바로가기">
      <div className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isPrimary = item.href === "/pledges" || item.href === "/voice";
          return (
            <Link key={item.href + item.label} href={item.href} className={isPrimary ? "flex flex-col items-center gap-0.5 rounded-2xl bg-[#EAF2FF] px-1 py-1.5 text-[11px] font-black text-[#0B1F66]" : "flex flex-col items-center gap-0.5 rounded-2xl px-1 py-1.5 text-[11px] font-black text-[#0B1F66]"}>
              <Icon className={isPrimary ? "h-5 w-5 text-[#1434A4]" : "h-5 w-5 text-[#667085]"} aria-hidden />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
