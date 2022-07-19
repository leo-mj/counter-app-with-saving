interface ListedEmoji {
  [key: number]: string;
}

export default function EmojiLister(
  emoji: string,
  i: number,
  emojiArray: string[]
): JSX.Element {
  const listedEmoji: ListedEmoji = {};
  listedEmoji[i] = emoji;
  if (emoji !== "" && i >= emojiArray.length - 5) {
    return (
      <li>
        {i}. {listedEmoji[i]}
      </li>
    );
  } else {
    return <></>;
  }
}
