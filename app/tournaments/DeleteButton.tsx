"use client";

import { useRouter } from "next/navigation";

export default function DeleteTournamentButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this tournament?")) return;

    const res = await fetch(`/api/tournaments/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh(); // refresh list so deleted tournament disappears
    } else {
      alert("Failed to delete tournament");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="ml-8 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
    >
      Delete
    </button>
  );
}
