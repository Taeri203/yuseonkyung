import type { Generation } from "@/types";

const toneMap: Record<string, string> = {
  청년: "from-[#1434A4] to-[#1D4ED8]",
  여성: "from-[#6B3FA0] to-[#1D4ED8]",
  "아이·학부모": "from-[#0F766E] to-[#1D4ED8]",
  "장애인·어르신·보행약자": "from-[#0B1F66] to-[#1434A4]",
  "이주민·정주민": "from-[#B45309] to-[#0F766E]",
  "소상공인·상권": "from-[#1434A4] to-[#0F766E]",
};

export function GenerationCard({ item }: { item: Generation }) {
  const Icon = item.icon;
  const tone = toneMap[item.audience] || "from-[#1434A4] to-[#1D4ED8]";
  return (
    <article className="motion-card flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#E5E7EB] bg-white shadow-sm">
      <div className={`bg-gradient-to-br ${tone} p-6 text-white`}>
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <p className="mt-4 font-black text-[#FFD84D]">{item.audience}</p>
        <h3 className="mt-2 text-2xl font-black leading-tight">{item.title}</h3>
      </div>
      <ul className="space-y-2 p-6 leading-7 text-[#344054]">
        {item.pledges.map((pledge) => <li key={pledge}>- {pledge}</li>)}
      </ul>
    </article>
  );
}
