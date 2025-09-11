import React from "react";
import Link from "next/link";

export default async function TournamentsPage() {
  // Call the API route
  const res = await fetch("/api/tournaments", {
    cache: "no-store", // ensure fresh data
  });
  const data = await res.json();

  if (!data.success) {
    return <div>Error loading tournaments: {data.error}</div>;
  }

  const tournaments = data.tournaments;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tournaments</h1>
      <ul className="space-y-4">
        {tournaments.map((t: any) => (
          <li key={t.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="text-gray-800">Game: {t.game_name}</p>
            <p className="text-gray-800">
  Starts: {new Date(t.start_time).toISOString().slice(0, 16).replace("T", " ")} UTC
</p>
<p className="text-gray-500 text-sm">
  Created: {new Date(t.created_at).toISOString().slice(0, 16).replace("T", " ")} UTC
</p>
<Link
  href={`/event/${t.id}/edit`}
  className="mt-2 inline-block px-3 py-1 bg-blue-500 text-white rounded"
>
  Edit
</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
