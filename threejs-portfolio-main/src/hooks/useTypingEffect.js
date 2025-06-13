import { useState, useEffect } from "react";

export default function useTypingEffect(text, speed = 50) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length - 1) {
        setDisplayed((prev) => prev + text[i]);
        console.log(text[i], ' UND');
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}