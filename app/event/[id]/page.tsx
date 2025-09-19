import TwitchPlayer from "@/app/ui/SinglePage/TwitchPlayer";

import TwitchChat from "@/app/ui/SinglePage/TwitchChat";
type Props = {
  params: { id: string };
};




export default async function EventDetailPage({ params }: Props) {
  const { id } = params;
  const res  = await fetch(`http://localhost:3000/api/tournaments/${id}`, {
    cache: "no-store",
    
  });

  const data = await res.json();
  
  return (
    <>
<div className="flex flex-col md:flex-row gap-4">
  {/* Stream Player */}
  <div className="flex-1 h-[400px] md:h-screen lg:h-[500px] shadow-lg">
    <TwitchPlayer 
      channel={data.tournament.twitch_channel}
      autoplay
      muted={false}
      className="rounded-xl"
    />
  </div>

      {/* Chat */}  
      <TwitchChat 
        channel={data.tournament.twitch_channel}
        className="w-full md:w-1/3 h-70 md:h-screen lg:h-[500px] xl:h-[600px] shadow-lg"
      />
    </div>
    </>
  )
};
