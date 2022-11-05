type EmojiProps = {
  symbol: string;
  label: string;
};

export const Emoji = ({ symbol, label }: EmojiProps) => (
  <span
    className="inline-block"
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}>
    {symbol}
  </span>
);
