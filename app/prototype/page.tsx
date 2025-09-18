"use client";

import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function PrototypePage() {
  // Layout configuratie: elk item heeft een positie en grootte
  const layout = [
  { i: "stream", x: 0, y: 0, w: 8, h: 8 },  // neemt kolommen 0–7
  { i: "chat", x: 8, y: 0, w: 2, h: 8 },    // begint in kolom 8, neemt 8–11
    { i: "brackets", x: 0, y: 10, w: 9, h: 7 },
    { i: "Teams", x: 0, y: 4, w: 3, h: 5 },
    { i: "Predictions", x: 3, y: 7, w: 6, h: 4 },
    { i: "Tournament info", x: 0, y: 4, w: 10, h: 1 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Prototype: Drag & Drop Dashboard</h1>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
        rowHeight={30}
      >
        <div
          key="stream"
          className="bg-blue-500 text-white flex items-center justify-center rounded-xl shadow"
        >
          Stream
        </div>
        <div
          key="chat"
          className="bg-green-500 text-white flex items-center justify-center rounded-xl shadow"
        >
          Chat
        </div>
         <div
          key="Tournament info"
          className="bg-pink-500 text-white flex items-center justify-center rounded-xl shadow"
        >
          Tournament info
        </div>
       
        <div
          key="Teams"
          className="bg-gray-500 text-white flex items-center justify-center rounded-xl shadow"
        >
          Teams
        </div>
        <div
          key="Predictions"
          className="bg-red-500 text-white flex items-center justify-center rounded-xl shadow"
        >
          Predictions
        </div>
       
         <div
          key="brackets"
          className="bg-purple-500 text-white flex items-center justify-center rounded-xl shadow"
        >
          Brackets
        </div>
        
      </ResponsiveGridLayout>
    </div>
  );
}
