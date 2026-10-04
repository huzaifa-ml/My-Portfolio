import { useEffect, useState } from "react";

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 1900;
const GAP_MS = 450;

export function Typewriter({ lines }: { lines: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "gap">("typing");

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(lines[index] ?? "");
      const t = setTimeout(() => setIndex((i) => (i + 1) % lines.length), 3200);
      return () => clearTimeout(t);
    }

    const full = lines[index] ?? "";
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < full.length) {
        timer = setTimeout(() => setText(full.slice(0, text.length + 1)), TYPE_MS);
      } else {
        timer = setTimeout(() => setPhase("holding"), 0);
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => setPhase("deleting"), HOLD_MS);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timer = setTimeout(() => setText(full.slice(0, text.length - 1)), DELETE_MS);
      } else {
        timer = setTimeout(() => setPhase("gap"), 0);
      }
    } else {
      timer = setTimeout(() => {
        setIndex((i) => (i + 1) % lines.length);
        setPhase("typing");
      }, GAP_MS);
    }

    return () => clearTimeout(timer);
  }, [text, phase, index, lines]);

  return (
    <p
      aria-label={lines.join(", ")}
      className="flex min-h-[4.5rem] items-start font-display text-xl font-semibold uppercase tracking-tight text-gold sm:min-h-[4rem] sm:text-2xl md:text-3xl"
    >
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className="caret-blink ml-1 inline-block h-[1.05em] w-[3px] translate-y-[0.12em] bg-gold"
      />
    </p>
  );
}
