"use client";
import { useEffect, useRef } from "react";

export default function ScrollHaptics() {
    const lastScrollY = useRef(0);
    const accumulatedScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = Math.abs(currentScrollY - lastScrollY.current);

            // Update last position
            lastScrollY.current = currentScrollY;

            // Accumulate delta
            accumulatedScroll.current += delta;

            // Trigger haptic every 50px (simulating "notches" on the spine)
            if (accumulatedScroll.current >= 50) {
                if (typeof navigator !== "undefined" && navigator.vibrate) {
                    // Short, sharp vibration (2ms)
                    navigator.vibrate(2);
                }
                // Reset accumulator but keep remainder for precision
                accumulatedScroll.current = accumulatedScroll.current % 50;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return null;
}
