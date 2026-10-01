"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursor = useRef(null);
    const follower = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursor.current, {
                x: e.clientX,
                y: e.clientY,
                xPercent: -50,
                yPercent: -50,
                duration: 0.1,
                ease: "power2.out",
            });
            gsap.to(follower.current, {
                x: e.clientX,
                y: e.clientY,
                xPercent: -50,
                yPercent: -50,
                duration: 0.25,
                ease: "power2.out",
            });
        };

        const initializeCursor = () => {
            const x = window.innerWidth / 2;
            const y = window.innerHeight / 2;

            gsap.set([cursor.current, follower.current], {
                x,
                y,
                xPercent: -50,
                yPercent: -50,
            });
            setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === "A" ||
                e.target.tagName === "BUTTON" ||
                e.target.closest("a") ||
                e.target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const animationFrame = requestAnimationFrame(initializeCursor);
        window.addEventListener("pointermove", moveCursor, { passive: true });
        window.addEventListener("pointerdown", moveCursor, { passive: true });
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("pointermove", moveCursor);
            window.removeEventListener("pointerdown", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                ref={cursor}
                className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9997] mix-blend-exclusion bg-white transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            />
            <div
                ref={follower}
                className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9996] transition-all duration-100 ease-out mix-blend-exclusion ${isVisible ? (isHovering ? "scale-150 bg-white opacity-20" : "scale-100 bg-transparent opacity-100") : "scale-100 bg-transparent opacity-0"}`}
            />
            <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>
        </>
    );
}
