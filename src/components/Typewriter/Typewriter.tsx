import React, { useEffect, useState } from "react";
import styles from "./Typewriter.module.scss";

interface TypewriterProps {
  phrases: string[];
  sleepTime: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ phrases, sleepTime }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex] = useState(0);

  useEffect(() => {
    let isCancelled = false;

    const typeLoop = async () => {
      let localIndex = currentIndex;

      while (!isCancelled) {
        let word = phrases[localIndex];

        // Typing effect
        for (let i = 0; i <= word.length; i++) {
          if (isCancelled) return;
          await new Promise<void>((resolve) =>
            setTimeout(() => {
              setCurrentWord(word.substring(0, i));
              resolve();
            }, sleepTime)
          );
        }

        await new Promise<void>((resolve) =>
          setTimeout(resolve, sleepTime * 10)
        );

        // Deleting effect
        for (let i = word.length; i >= 0; i--) {
          if (isCancelled) return;
          await new Promise<void>((resolve) =>
            setTimeout(() => {
              setCurrentWord(word.substring(0, i));
              resolve();
            }, sleepTime)
          );
        }

        await new Promise<void>((resolve) =>
          setTimeout(resolve, sleepTime * 5)
        );

        // Update the local index for the next word
        localIndex = (localIndex + 1) % phrases.length;
      }
    };

    typeLoop();

    // Cleanup function to stop the loop if the component unmounts
    return () => {
      isCancelled = true;
    };
  }, [phrases, sleepTime]);

  return (
    <div>
      <p className="typeEffect">
        <span className={styles.typed}>{currentWord}</span>
        <span className={styles.blink}>|</span>
      </p>
    </div>
  );
};

export default Typewriter;
