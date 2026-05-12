import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { siteConfig } from "@/data/site";

const keywords = ["젊은 엔진", "소통 전문가", "현장 중심", "성서 생활정치", "말보다 행동"];

export function HeroSection() {
  return (
    <section className="campaign-gradient relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <svg className="absolute right-0 top-12 h-[420px] w-[620px] text-[#1434A4]" viewBox="0 0 620 420" fill="none">
          <path className="hero-drift-line" d="M20 310C118 238 190 344 286 248C384 150 474 244 590 72" stroke="currentColor" strokeWidth="2" strokeDasharray="10 12" opacity=".22" />
          <path className="hero-drift-line-alt" d="M90 72C170 138 250 86 326 146C404 208 480 168 560 248" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" opacity=".14" />
        </svg>
      </div>
      <div className="container-page grid min-h-[calc(100vh-80px)] items-center gap-8 py-10 lg:grid-cols-[.92fr_1.08fr] lg:py-12">
        <div className="relative z-10">
          <span className="inline-flex items-center rounded-full border border-[#FFD84D]/45 bg-[#004EA2] px-3 py-1 text-sm font-black text-white shadow-lg shadow-[#004EA2]/20">
            {siteConfig.party} · {siteConfig.electionName}
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#0B1F66] md:text-6xl lg:text-7xl">
            <span className="block text-keep">{siteConfig.heroTitle}</span>
            <span className="mt-3 block text-[4.4rem] leading-none text-[#1434A4] md:text-[7rem]">유선경</span>
          </h1>
          <p className="mt-5 text-2xl font-black text-[#0F766E] md:text-3xl">{siteConfig.slogan}</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#344054]">
            이곡1동·이곡2동·신당동, 성서의 오래된 숙제를 젊은 추진력과 소통의 실력으로 풀겠습니다.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/pledges" className="btn-base btn-primary">성서 5대 의제 보기 <ArrowRight className="h-5 w-5" aria-hidden /></Link>
            <Link href="/map" className="btn-base btn-white">우리동네 공약지도</Link>
            <Link href="/donation" className="btn-base btn-yellow">후원 안내</Link>
            <Link href="/voice" className="btn-base btn-dark">의견 남기기</Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {keywords.map((keyword) => <span key={keyword} className="rounded-full border border-[#B9D2FF] bg-white px-4 py-2 text-sm font-black text-[#1434A4]">{keyword}</span>)}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["5대", "성서 생활 의제"],
              ["3동", "이곡1·2·신당"],
              ["현장", "주민 의견 기반"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#D7E4FF] bg-white/85 p-4 shadow-sm">
                <p className="text-2xl font-black text-[#1434A4]">{value}</p>
                <p className="mt-1 text-sm font-extrabold text-[#667085]">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[590px]">
          <div className="absolute -inset-8 rounded-[3.2rem] bg-[#1D4ED8]/12 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2.75rem] border border-[#D7E4FF] bg-white/82 p-4 shadow-2xl backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,216,77,.48),transparent_22%),radial-gradient(circle_at_24%_70%,rgba(29,78,216,.14),transparent_30%),linear-gradient(145deg,#FFFFFF_0%,#EAF2FF_56%,#F8FBFF_100%)]" aria-hidden />
            <svg className="pointer-events-none absolute inset-0 h-full w-full text-[#1434A4]/28" viewBox="0 0 560 680" fill="none" aria-hidden>
              <path className="hero-drift-line" d="M48 122C134 74 226 116 294 80C384 32 458 96 524 48" stroke="currentColor" strokeWidth="2" strokeDasharray="10 12" />
              <path className="hero-drift-line-alt" d="M34 456C118 374 218 478 314 390C412 300 480 354 542 294" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" />
              <path className="hero-drift-route" d="M86 594C158 548 250 574 330 520C408 468 462 482 526 438" stroke="currentColor" strokeWidth="7" opacity=".22" />
              <circle className="hero-float-orb" cx="426" cy="150" r="76" fill="#FFD84D" opacity=".92" />
              <circle className="hero-float-orb-alt" cx="118" cy="520" r="94" fill="#1D4ED8" opacity=".08" />
            </svg>
            <div className="absolute left-6 top-6 z-20 flex flex-wrap gap-2">
              {["이곡1동", "이곡2동", "신당동"].map((area) => (
                <span key={area} className="inline-flex items-center gap-1 rounded-full bg-[#FFD84D] px-3 py-1 text-sm font-black text-[#0B1F66]">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  {area}
                </span>
              ))}
            </div>
            <div className="absolute right-5 top-24 z-20 rounded-2xl bg-white/86 px-4 py-3 text-right shadow-xl backdrop-blur">
              <p className="text-xs font-black text-[#1434A4]">성서 생활정치</p>
              <p className="mt-1 text-2xl font-black text-[#0B1F66]">젊은 엔진</p>
            </div>
            <ImageWithFallback
              src={siteConfig.images.heroCutout}
              alt="달서구의원 후보 유선경 공식 프로필 사진"
              className="relative z-10 h-[540px] rounded-[2.25rem] bg-transparent md:h-[700px]"
              imgClassName="object-contain object-bottom drop-shadow-[0_24px_32px_rgba(11,31,102,0.22)]"
              sizes="(min-width: 1024px) 560px, 100vw"
              preset="cutout"
              withDefaultBg={false}
              priority
            />
            <div className="absolute inset-x-4 bottom-4 z-20 rounded-[1.5rem] border border-white/35 bg-white/92 p-4 shadow-xl backdrop-blur">
              <p className="text-sm font-black text-[#1434A4]">공감과 실력, 당당한 달서</p>
              <p className="mt-1 text-lg font-black text-[#0B1F66]">주민 곁에서 듣고, 의회에서 끝까지 묻겠습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
