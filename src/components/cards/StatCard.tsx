export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/20 bg-white/12 p-5 text-white backdrop-blur">
      <div className="text-3xl font-black text-[#FFD84D]">{value}</div>
      <div className="mt-1 text-sm font-bold text-blue-50">{label}</div>
    </div>
  );
}
