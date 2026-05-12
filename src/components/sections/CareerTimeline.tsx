import { careers, educations } from "@/data/profile";

export function CareerTimeline() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_.8fr]">
      <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-black text-[#0B1F66]">주요 경력</h3>
        <ol className="mt-5 space-y-3">
          {careers.map((career) => (
            <li key={career} className="flex gap-3 leading-7 text-[#344054]">
              <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#1434A4]" />
              {career}
            </li>
          ))}
        </ol>
      </div>
      <div className="rounded-[2rem] border border-[#E5E7EB] bg-[#EAF2FF] p-6 shadow-sm">
        <h3 className="text-2xl font-black text-[#0B1F66]">학력</h3>
        <ul className="mt-5 space-y-3 leading-7 text-[#344054]">
          {educations.map((education) => <li key={education}>- {education}</li>)}
        </ul>
      </div>
    </div>
  );
}
