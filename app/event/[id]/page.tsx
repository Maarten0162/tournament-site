import TwitchPlayer from "@/app/ui/SinglePage/TwitchPlayer";



// const stream = await fetchStreamByID();
const stream = "lck";

export default function EventDetailPage() {
  return (
    <>
      <TwitchPlayer 
        channel={stream}
        autoplay={true} 
        muted={false} 
        className="w-full h-70 md:h-screen lg:h-[500px] xl:h-[700px] shadow-lg"
      />

      <div className="p-4 md:p-8 lg:p-12 xl:p-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Event Title</h1>
      </div>
    </>
  )
};
