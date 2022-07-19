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
  if (i >= emojiArray.length - 6 && i < emojiArray.length - 1) {
    return (
      <li>
        {i + 1}. {listedEmoji[i]}
      </li>
    );
  } else {
    return <></>;
  }
}
