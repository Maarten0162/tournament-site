import { notFound } from "next/navigation";
import EditTournamentForm from "./EditTournamentForm";

type Props = {
  params: { id: string };
};

export default async function EditTournamentPage({ params }: Props) {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/tournaments/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const data = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Tournament</h1>
      <EditTournamentForm tournament={data.tournament} />
    </main>
  );
}
