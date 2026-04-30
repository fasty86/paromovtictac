import { useEffect, useState } from "react";

export function useNow(enabled, interval) {
  const [now, setNow] = useState();
  useEffect(() => {
    if (!enabled) {
      setNow(undefined);
      return;
    }
    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, interval);
    return () => clearInterval(intervalId);
  }, [enabled, interval]);
  return now;
}

export function useInterval(interval, enabled, cb) {
  useEffect(() => {
    if (!enabled) return;
    const timerId = setInterval(() => cb(Date.now()), interval);
    return () => {
      clearInterval(timerId);
    };
  }, [interval, enabled]);
}
