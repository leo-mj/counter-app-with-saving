import { useState } from "react";
import EmojiLister from "./EmojiLister";

export default function EmojiPicker(): JSX.Element {
  const [currentEmoji, queueRerenderWithNewEmoji] = useState<string>("");
  const [prevStoredValues, queueRerenderWithPreviousEmojis] = useState<
    string[]
  >([]);

  const handlePickDog = () => {
    queueRerenderWithNewEmoji("🐕");
    queueRerenderWithPreviousEmojis((prevStoredValues) => [
      ...prevStoredValues,
      currentEmoji,
    ]);
  };

  const handlePickMapOfJapan = () => {
    queueRerenderWithNewEmoji("🗾");
    queueRerenderWithPreviousEmojis((prevStoredValues) => [
      ...prevStoredValues,
      currentEmoji,
    ]);
  };

  const handlePickClock = () => {
    queueRerenderWithNewEmoji("⏰");
    queueRerenderWithPreviousEmojis((prevStoredValues) => [
      ...prevStoredValues,
      currentEmoji,
    ]);
  };

  const handlePickDerelictHouse = () => {
    queueRerenderWithNewEmoji("🏚️");
    queueRerenderWithPreviousEmojis((prevStoredValues) => [
      ...prevStoredValues,
      currentEmoji,
    ]);
  };

  const handlePickClockAgain = () => {
    queueRerenderWithNewEmoji("⏰ again?!");
    queueRerenderWithPreviousEmojis((prevStoredValues) => [
      ...prevStoredValues,
      currentEmoji,
    ]);
  };

  return (
    <>
      <h1>Creative emoji picker</h1>
      <p>
        Your previous emojis:
        {prevStoredValues.map((emoji, i) =>
          EmojiLister(emoji, i, prevStoredValues)
        )}
      </p>
      <p>Your current emoji: {currentEmoji}</p>
      <button onClick={handlePickDog}>🐕</button>
      <button onClick={handlePickMapOfJapan}>🗾</button>
      <button onClick={handlePickClock}>⏰</button>
      <button onClick={handlePickDerelictHouse}>🏚️</button>
      <button onClick={handlePickClockAgain}>⏰</button>
    </>
  );
}
