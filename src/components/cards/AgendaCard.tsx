import type { Agenda } from "@/types";

export function AgendaCard({ agenda, compact = false }: { agenda: Agenda; compact?: boolean }) {
  const Icon = agenda.icon;
  return (
    <article className="motion-card flex h-full flex-col rounded-[1.75rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-sm font-black text-[#0F766E]">{agenda.category}</span>
          <h3 className="mt-2 text-2xl font-black text-[#0B1F66]">{agenda.title}</h3>
        </div>
        <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#1434A4]">
          <Icon className="h-7 w-7" aria-hidden />
        </div>
      </div>
      <p className="mt-4 rounded-2xl bg-[#FFF7D6] p-4 font-bold leading-7 text-[#0B1F66]">{agenda.message}</p>
      {!compact ? (
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl bg-[#F8FAFC] p-4">
            <h4 className="text-sm font-black text-[#667085]">문제</h4>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#344054]">
              {agenda.problem.map((item) => <li key={item}>- {item}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-4 lg:col-span-2">
            <h4 className="text-sm font-black text-[#667085]">추진</h4>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#344054]">
              {agenda.pledges.map((item) => <li key={item}>- {item}</li>)}
            </ul>
            <div className="mt-4 rounded-2xl border border-[#D7E4FF] bg-white p-4">
              <h4 className="text-sm font-black text-[#1434A4]">주민에게 좋은 점</h4>
              <p className="mt-2 text-sm leading-6 text-[#344054]">생활 불편을 민원으로만 남기지 않고, 공개 요구·점검·제도화 검토로 이어가겠습니다.</p>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}
