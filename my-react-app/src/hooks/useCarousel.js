import { useState, useEffect, useCallback } from "react";

/**
 * useCarousel
 *
 * Manages carousel index state and keyboard navigation.
 *
 * @param {number} total      - Total number of items
 * @param {number} startIndex - Which item to open first
 * @param {function} onClose  - Called when Escape is pressed
 *
 * @returns {{ index, prev, next }}
 */
export function useCarousel(total, startIndex, onClose) {
  const [index, setIndex] = useState(startIndex);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );

  const next = useCallback(
    () => setIndex((i) => (i + 1) % total),
    [total]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next, onClose]);

  return { index, prev, next };
}
