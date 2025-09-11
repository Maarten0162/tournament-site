import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default async function EditTournamentPage({ params }: Props) {
  const { id } = params;

  // Fetch tournament data from API or DB
  const res = await fetch(`http://localhost:3000/api/tournaments/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const data = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Tournament</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            defaultValue={data.tournament.name}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Game</label>
          <input
            type="text"
            defaultValue={data.tournament.game_name}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Start Time</label>
          <input
            type="datetime-local"
            defaultValue={new Date(data.tournament.start_time)
              .toISOString()
              .slice(0, 16)}
            className="border rounded p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </main>
  );
}
