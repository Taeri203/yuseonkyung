import { siteConfig } from "@/data/site";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export function ProfileCard() {
  return (
    <aside className="surface-panel overflow-hidden rounded-[2rem]">
      <div className="bg-gradient-to-br from-[#0B1F66] via-[#1434A4] to-[#1D4ED8] p-4">
        <ImageWithFallback
          src={siteConfig.images.profileCloseup}
          alt="유선경 후보 상반신 프로필 사진"
          className="aspect-[4/5] rounded-[1.5rem] bg-transparent sm:aspect-[5/6] lg:aspect-[4/5]"
          imgClassName="object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,.24)]"
          sizes="(min-width: 1024px) 420px, 100vw"
          preset="cutout"
          withDefaultBg={false}
        />
      </div>
      <div className="p-6">
        <p className="text-sm font-black text-[#1434A4]">{siteConfig.party} · {siteConfig.electionName}</p>
        <h3 className="mt-2 text-4xl font-black text-[#0B1F66]">{siteConfig.candidateName}</h3>
        <p className="mt-3 leading-7 text-[#667085]">공감과 실력으로 성서의 생활 문제에 응답하겠습니다.</p>
      </div>
    </aside>
  );
}
