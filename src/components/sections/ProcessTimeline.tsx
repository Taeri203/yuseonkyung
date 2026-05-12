export function ProcessTimeline({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <li key={item} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
          <span className="text-sm font-black text-[#1434A4]">STEP {index + 1}</span>
          <p className="mt-2 font-bold leading-7 text-[#0B1F66]">{item}</p>
        </li>
      ))}
    </ol>
  );
}
