import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  as?: "p" | "h1" | "span";
  showCursor?: boolean;
  onDone?: () => void;
}

const TypewriterText = ({
  text,
  className = "",
  delay = 0,
  speed = 50,
  as: Tag = "span",
  showCursor = false,
  onDone,
}: TypewriterTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      setDone(true);
      onDone?.();
      return;
    }
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [started, displayed, text, speed, onDone]);

  return (
    <Tag className={className}>
      {started ? displayed : "\u00A0"}
      {showCursor && !done && (
        <span className="inline-block w-[2px] h-[1em] bg-accent ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
      )}
    </Tag>
  );
};

export default TypewriterText;
