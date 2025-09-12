"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateTournamentForm() {
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

    const res = await fetch("/api/tournaments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/tournaments"); // go back to list
    } else {
      alert("Failed to create tournament");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input name="name" type="text" required className="border rounded p-2 w-full" />
      </div>
      <div>
        <label className="block text-sm font-medium">Game</label>
        <input name="game" type="text" required className="border rounded p-2 w-full" />
      </div>
      <div>
        <label className="block text-sm font-medium">Start Time</label>
        <input name="start_time" type="datetime-local" required className="border rounded p-2 w-full" />
      </div>
      <div>
        <label className="block text-sm font-medium">Twitch Channel</label>
        <input name="twitch_channel" type="text" required className="border rounded p-2 w-full" />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 transition cursor-pointer" disabled={loading}>
        {loading ? "Creating..." : "Create Tournament"}
      </button>
    </form>
  );
}
