"use client";

import { useEffect, useState } from "react";

interface ISTClockProps {
  className?: string;
}

export default function ISTClock({ className = "" }: ISTClockProps) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
      );
      const hours = istTime.getHours().toString().padStart(2, "0");
      const minutes = istTime.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <span
      className={`font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint tabular-nums ${className}`}
    >
      IST {time}
    </span>
  );
}
