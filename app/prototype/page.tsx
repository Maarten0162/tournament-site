"use client";

import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import TwitchPlayer from "../ui/SinglePage/TwitchPlayer";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function TournamentDashboard() {
  const layout = [
    { i: "banner", x: 0, y: 0, w: 12, h: 2, static: true },
    { i: "players", x: 0, y: 2, w: 2, h: 4 },
    { i: "stream", x: 2, y: 2, w: 8, h: 4 },
    { i: "chat", x: 10, y: 2, w: 2, h: 4 },
    { i: "tournamentInfo", x: 0, y: 6, w: 12, h: 2 },
    { i: "runningPredictions", x: 2, y: 8, w: 10, h: 3 },
    { i: "leaderboard", x: 0, y: 8, w: 2, h: 3 },
    { i: "allRewards", x: 0, y: 11, w: 12, h: 2 },
    { i: "brackets", x: 0, y: 13, w: 12, h: 4 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Tournament Dashboard Prototype</h1>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
        rowHeight={40}
        draggableHandle=".drag-handle"
      >
        <div
          key="banner"
          className="bg-blue-600 text-white flex items-center justify-center rounded-xl shadow font-bold"
        >
          Tournament Banner (locked)
        </div>
        <div
          key="players"
          className="bg-green-500 text-white flex items-center justify-center rounded-xl shadow drag-handle"
        >
          Players
        </div>
        <div
          key="stream"
          className="bg-red-500 text-white flex items-center justify-center rounded-xl shadow drag-handle"
        >
          <TwitchPlayer 
                  channel="lck"
                  autoplay
                   
                  muted={false} 
                />
        </div>
        <div
          key="chat"
          className="bg-yellow-500 text-black flex items-center justify-center rounded-xl shadow drag-handle"
        >
          Chat
        </div>
        <div
          key="tournamentInfo"
          className="bg-purple-500 text-white flex items-center justify-center rounded-xl shadow drag-handle"
        >
          Tournament Info & Top Prediction Rewards
        </div>
        <div
          key="leaderboard"
          className="bg-pink-500 text-white flex items-center justify-center rounded-xl shadow drag-handle"
        >
          Prediction Leaderboard
        </div>
        <div
          key="runningPredictions"
          className="bg-orange-500 text-white flex items-center justify-center rounded-xl shadow drag-handle"
        >
          Currently Running Predictions
        </div>
        <div
          key="allRewards"
          className="bg-teal-500 text-white flex items-center justify-center rounded-xl shadow drag-handle"
        >
          All Prediction Rewards
        </div>
        <div
          key="brackets"
          className="bg-gray-700 text-white flex items-center justify-center rounded-xl shadow drag-handle"
        >
          Brackets
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}
