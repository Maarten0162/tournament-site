import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import DeleteTournamentButton from "./DeleteButton";

export const metadata: Metadata = {
  title: "TOURNAMENTS PAGE JAJA",
  description: "DIT IS DE PAGE VOOR DE TOURNAMENTS",
};

export default async function TournamentsPage() {
  // Call the API route
  const res = await fetch("http://localhost:3000/api/tournaments", {
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
  <li
    key={t.id}
    className="flex items-center justify-between border rounded-lg p-4 shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
  >
    {/* Left side: tournament info */}
    <Link href={`/event/${t.id}`} className="flex-1">
      <div>
        <h2 className="text-xl font-semibold">{t.name}</h2>
        <p className="text-white">Game: {t.game_name}</p>
        <p className="text-white">Where to watch: www.twitch.tv/{t.twitch_channel}</p>
        <p className="text-white">
          Starts:{" "}
          {new Date(t.start_time).toISOString().slice(0, 16).replace("T", " ")}{" "}
          UTC
        </p>
      </div>
    </Link>

    {/* Right side: Edit button */}
    <Link
      href={`/event/${t.id}/edit`}
      className="ml-8 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Edit
    </Link>
   <DeleteTournamentButton id={t.id} />

  </li>
))}

</ul>
    </main>
  );
}
