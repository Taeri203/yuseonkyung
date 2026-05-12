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
      <div className="container-page grid items-center gap-6 py-6 md:py-10 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[.92fr_1.08fr] lg:gap-8 lg:py-12">
        <div className="relative z-10">
          <span className="inline-flex items-center rounded-full border border-[#FFD84D]/45 bg-[#004EA2] px-3 py-1 text-xs font-black text-white shadow-lg shadow-[#004EA2]/20 md:text-sm">
            {siteConfig.party} · {siteConfig.electionName}
          </span>
          <h1 className="mt-4 text-[2.45rem] font-black leading-[1.05] tracking-tight text-[#0B1F66] md:mt-6 md:text-6xl lg:text-7xl">
            <span className="block text-keep">{siteConfig.heroTitle}</span>
            <span className="mt-2 block text-[3.9rem] leading-none text-[#1434A4] md:mt-3 md:text-[7rem]">유선경</span>
          </h1>
          <p className="mt-3 text-xl font-black text-[#0F766E] md:mt-5 md:text-3xl">{siteConfig.slogan}</p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#344054] md:mt-5 md:text-lg md:leading-8">
            이곡1동·이곡2동·신당동, 성서의 오래된 숙제를 젊은 추진력과 소통의 실력으로 풀겠습니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 md:mt-7 md:gap-3">
            <Link href="/pledges" className="btn-base btn-primary px-4 py-3 text-sm md:px-6 md:py-4 md:text-base">성서 5대 의제 보기 <ArrowRight className="h-4 w-4 md:h-5 md:w-5" aria-hidden /></Link>
            <Link href="/map" className="btn-base btn-white px-4 py-3 text-sm md:px-6 md:py-4 md:text-base">우리동네 공약지도</Link>
            <Link href="/donation" className="btn-base btn-yellow px-4 py-3 text-sm md:px-6 md:py-4 md:text-base">후원 안내</Link>
            <Link href="/voice" className="btn-base btn-dark px-4 py-3 text-sm md:px-6 md:py-4 md:text-base">의견 남기기</Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 md:mt-7">
            {keywords.map((keyword) => <span key={keyword} className="rounded-full border border-[#B9D2FF] bg-white px-3 py-1.5 text-xs font-black text-[#1434A4] md:px-4 md:py-2 md:text-sm">{keyword}</span>)}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 md:mt-8 md:gap-3">
            {[
              ["5대", "성서 생활 의제"],
              ["3동", "이곡1·2·신당"],
              ["현장", "주민 의견 기반"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#D7E4FF] bg-white/85 p-3 shadow-sm md:p-4">
                <p className="text-xl font-black text-[#1434A4] md:text-2xl">{value}</p>
                <p className="mt-1 text-[11px] font-extrabold leading-4 text-[#667085] md:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[430px] md:max-w-[590px]">
          <div className="absolute -inset-8 rounded-[3.2rem] bg-[#1D4ED8]/12 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#D7E4FF] bg-white/82 p-2.5 shadow-2xl backdrop-blur md:rounded-[2.75rem] md:p-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,216,77,.48),transparent_22%),radial-gradient(circle_at_24%_70%,rgba(29,78,216,.14),transparent_30%),linear-gradient(145deg,#FFFFFF_0%,#EAF2FF_56%,#F8FBFF_100%)]" aria-hidden />
            <svg className="pointer-events-none absolute inset-0 h-full w-full text-[#1434A4]/28" viewBox="0 0 560 680" fill="none" aria-hidden>
              <path className="hero-drift-line" d="M48 122C134 74 226 116 294 80C384 32 458 96 524 48" stroke="currentColor" strokeWidth="2" strokeDasharray="10 12" />
              <path className="hero-drift-line-alt" d="M34 456C118 374 218 478 314 390C412 300 480 354 542 294" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" />
              <path className="hero-drift-route" d="M86 594C158 548 250 574 330 520C408 468 462 482 526 438" stroke="currentColor" strokeWidth="7" opacity=".22" />
              <circle className="hero-float-orb" cx="426" cy="150" r="76" fill="#FFD84D" opacity=".92" />
              <circle className="hero-float-orb-alt" cx="118" cy="520" r="94" fill="#1D4ED8" opacity=".08" />
            </svg>
            <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-1.5 md:left-6 md:top-6 md:gap-2">
              {["이곡1동", "이곡2동", "신당동"].map((area) => (
                <span key={area} className="inline-flex items-center gap-1 rounded-full bg-[#FFD84D] px-2.5 py-1 text-xs font-black text-[#0B1F66] md:px-3 md:text-sm">
                  <MapPin className="h-3 w-3 md:h-3.5 md:w-3.5" aria-hidden />
                  {area}
                </span>
              ))}
            </div>
            <div className="absolute right-4 top-20 z-20 rounded-2xl bg-white/86 px-3 py-2 text-right shadow-xl backdrop-blur md:right-5 md:top-24 md:px-4 md:py-3">
              <p className="text-xs font-black text-[#1434A4]">성서 생활정치</p>
              <p className="mt-1 text-xl font-black text-[#0B1F66] md:text-2xl">젊은 엔진</p>
            </div>
            <ImageWithFallback
              src={siteConfig.images.heroCutout}
              alt="달서구의원 후보 유선경 공식 프로필 사진"
              className="relative z-10 h-[390px] rounded-[1.75rem] bg-transparent sm:h-[430px] md:h-[700px] md:rounded-[2.25rem]"
              imgClassName="object-contain object-bottom drop-shadow-[0_24px_32px_rgba(11,31,102,0.22)]"
              sizes="(min-width: 1024px) 560px, 100vw"
              preset="cutout"
              withDefaultBg={false}
              priority
            />
            <div className="absolute inset-x-3 bottom-3 z-20 rounded-[1.25rem] border border-white/35 bg-white/92 p-3 shadow-xl backdrop-blur md:inset-x-4 md:bottom-4 md:rounded-[1.5rem] md:p-4">
              <p className="text-xs font-black text-[#1434A4] md:text-sm">공감과 실력, 당당한 달서</p>
              <p className="mt-1 text-sm font-black text-[#0B1F66] md:text-lg">주민 곁에서 듣고, 의회에서 끝까지 묻겠습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
