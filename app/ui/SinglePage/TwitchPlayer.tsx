type TwitchPlayerProps = {
    channel: string;
    autoplay?: boolean;
    muted?: boolean;
    vwidth?: string;
    vheight?: string;
    className?: string;
}

export default function TwitchPlayer({
  channel,
  autoplay = false,
  muted = false,
  className,
}: TwitchPlayerProps) {
  return (
    <iframe
      src={`https://player.twitch.tv/?channel=${channel}&parent=localhost&autoplay=${autoplay}&muted=${muted}`}
      allowFullScreen
      className={`w-full h-full ${className || ""}`}
    />
  );
}