type TwitchPlayerProps = {
    channel: string;
    autoplay?: boolean;
    muted?: boolean;
    vwidth?: string;
    vheight?: string;
    className?: string;
}

export default function TwitchPlayer({channel, autoplay, muted, vwidth, vheight, className}: TwitchPlayerProps) {
  return (
    <iframe
        src={`https://player.twitch.tv/?channel=${channel}&parent=localhost&autoplay=${autoplay}&muted=${muted}`}
        allowFullScreen
        height={vheight}
        width={vwidth}
        className={className}
    />
  );
}