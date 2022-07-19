import { useState } from "react";
import EmojiLister from "./EmojiLister";

export default function EmojiPicker(): JSX.Element {
  const [prevStoredValues, queueRerenderWithPreviousEmojis] = useState<
    string[]
  >([]);

  const handlePickDog = () => {
    queueRerenderWithPreviousEmojis((prevStoredValues) => [
      ...prevStoredValues,
      "🐕",
    ]);
  };

  const handlePickMapOfJapan = () => {
    queueRerenderWithPreviousEmojis((prevStoredValues) => [
      ...prevStoredValues,
      "🗾",
    ]);
  };

  const handlePickClock = () => {
    queueRerenderWithPreviousEmojis((prevStoredValues) => [
      ...prevStoredValues,
      "⏰",
    ]);
  };

  const handlePickDerelictHouse = () => {
    queueRerenderWithPreviousEmojis((prevStoredValues) => [
      ...prevStoredValues,
      "🏚️",
    ]);
  };

  const handlePickClockAgain = () => {
    queueRerenderWithPreviousEmojis((prevStoredValues) => [
      ...prevStoredValues,
      "⏰ again?!",
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
      <p>Your current emoji: {prevStoredValues[prevStoredValues.length - 1]}</p>
      <button onClick={handlePickDog}>🐕</button>
      <button onClick={handlePickMapOfJapan}>🗾</button>
      <button onClick={handlePickClock}>⏰</button>
      <button onClick={handlePickDerelictHouse}>🏚️</button>
      <button onClick={handlePickClockAgain}>⏰</button>
    </>
  );
}
