type TwitchChatProps = {
  channel: string;
  dark?: boolean;
  className?: string;
};

export default function TwitchChat({ channel, dark = true, className = "" }: TwitchChatProps) {
  const theme = dark ? "darkpopout" : "lightpopout";
  return (
    <iframe
      src={`https://www.twitch.tv/embed/${channel}/chat?parent=localhost&${theme}`}
      height="500"
      width="350"
      className={className}
    />
  );
}