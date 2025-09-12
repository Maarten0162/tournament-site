"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  tournament: {
    id: string;
    name: string;
    game_name: string;
    start_time: string;
    twitch_channel: string;
  };
};

export default function EditTournamentForm({ tournament }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      game_name: formData.get("game"),
      start_time: formData.get("start_time"),
      twitch_channel: formData.get("twitch_channel"),
    };

    const res = await fetch(`/api/tournaments/${tournament.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      router.push(`/tournaments`);
    } else {
      alert("Failed to update tournament");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          name="name" // 🔑 important
          type="text"
          defaultValue={tournament.name}
          className="border rounded p-2 w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Game</label>
        <input
          name="game" // 🔑 important
          type="text"
          defaultValue={tournament.game_name}
          className="border rounded p-2 w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Start Time</label>
        <input
          name="start_time" // 🔑 important
          type="datetime-local"
          defaultValue={new Date(tournament.start_time)
            .toISOString()
            .slice(0, 16)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">twitch channel</label>
        <input
          name="twitch_channel" // 🔑 important
          type="text"
          defaultValue={tournament.twitch_channel}
          className="border rounded p-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 transition cursor-pointer"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
