import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [currentEmoji, queueRerenderWithNewEmoji] = useState(" ");
  const [previousEmoji, queueRerenderWithPreviousEmoji] = useState(" ");

  const handlePickDog = () => {
    queueRerenderWithNewEmoji("🐕");
    queueRerenderWithPreviousEmoji(currentEmoji);
  };

  const handlePickMapOfJapan = () => {
    queueRerenderWithNewEmoji("🗾");
    queueRerenderWithPreviousEmoji(currentEmoji);
  };

  const handlePickClock = () => {
    queueRerenderWithNewEmoji("⏰");
    queueRerenderWithPreviousEmoji(currentEmoji);
  };

  const handlePickDerelictHouse = () => {
    queueRerenderWithNewEmoji("🏚️");
    queueRerenderWithPreviousEmoji(currentEmoji);
  };

  const handlePickClockAgain = () => {
    queueRerenderWithNewEmoji("⏰ again?!");
    queueRerenderWithPreviousEmoji(currentEmoji);
  };

  return (
    <>
      <h1>Creative emoji picker</h1>
      <p>Your previous emoji: {previousEmoji}</p>
      <p>Your current emoji: {currentEmoji}</p>
      <button onClick={handlePickDog}>🐕</button>
      <button onClick={handlePickMapOfJapan}>🗾</button>
      <button onClick={handlePickClock}>⏰</button>
      <button onClick={handlePickDerelictHouse}>🏚️</button>
      <button onClick={handlePickClockAgain}>⏰</button>
    </>
  );
}
