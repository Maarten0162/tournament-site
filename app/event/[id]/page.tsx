import TwitchPlayer from "@/app/ui/SinglePage/TwitchPlayer";

import TwitchChat from "@/app/ui/SinglePage/TwitchChat";

// const stream = await fetchStreamByID();
const stream = "lck";

export default function EventDetailPage() {
  return (
    <>
<div className="flex flex-col md:flex-row gap-4 p-3">
      {/* Stream Player */}
      <TwitchPlayer 
        channel={stream} 
        autoplay 
        muted={false} 
        className="w-full md:w-2/3 h-70 md:h-screen lg:h-[500px] xl:h-[700px] shadow-lg"
      />

      {/* Chat */}
      <TwitchChat 
        channel={stream}
        className="w-full md:w-1/3 h-70 md:h-screen lg:h-[500px] xl:h-[700px] shadow-lg"
      />
    </div>
    </>
  )
};
