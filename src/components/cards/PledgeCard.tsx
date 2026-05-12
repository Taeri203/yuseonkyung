import type { Agenda } from "@/types";
import { AgendaCard } from "@/components/cards/AgendaCard";

export function PledgeCard({ agenda }: { agenda: Agenda }) {
  return <AgendaCard agenda={agenda} />;
}
