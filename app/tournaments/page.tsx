import React from "react";
import Link from "next/link";
import { Metadata } from "next";

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
    <li key={t.id}>
      <Link
        href={`/event/${t.id}`}
        className="block border rounded-lg p-4 shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        <h2 className="text-xl font-semibold">{t.name}</h2>
        <p className="text-gray-800">Game: {t.game_name}</p>
        <p className="text-gray-800">
          Starts:{" "}
          {new Date(t.start_time).toISOString().slice(0, 16).replace("T", " ")}{" "}
          UTC
        </p>
        <p className="text-gray-500 text-sm">
          Created:{" "}
          {new Date(t.created_at).toISOString().slice(0, 16).replace("T", " ")}{" "}
          UTC
        </p>
      </Link>
    </li>
  ))}
</ul>
    </main>
  );
}
