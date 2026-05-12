import Link from "next/link";
import { Phone } from "lucide-react";
import { CopyButton } from "@/components/common/CopyButton";
import { donationInfo } from "@/data/donation";

export function DonationInfoCard() {
  return (
    <article className="surface-panel rounded-[2rem] p-6 md:p-8">
      <h3 className="text-2xl font-black text-[#0B1F66]">후원 정보</h3>
      <dl className="mt-6 grid gap-4">
        {[
          ["후원회명", donationInfo.name],
          ["후원계좌", `${donationInfo.bank} ${donationInfo.account}`],
          ["예금주", donationInfo.holder],
          ["후원 및 영수증 문의", donationInfo.inquiry],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-[#F8FAFC] p-4">
            <dt className="text-sm font-black text-[#667085]">{label}</dt>
            <dd className="mt-1 text-lg font-black text-[#0B1F66]">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <CopyButton value={`${donationInfo.bank} ${donationInfo.account}`} label="후원계좌 복사" />
        <Link href={donationInfo.phoneHref} className="btn-base btn-dark btn-small" aria-label="후원 문의 전화하기">
          <Phone className="h-4 w-4" aria-hidden />
          전화문의
        </Link>
      </div>
    </article>
  );
}
