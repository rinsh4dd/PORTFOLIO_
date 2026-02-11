"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";

export default function CustomCursor() {
    const cursor = useRef(null);
    const follower = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const { theme } = useTheme();

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

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                ref={cursor}
                className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] mix-blend-exclusion bg-white`}
            />
            <div
                ref={follower}
                className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9998] transition-all duration-100 ease-out mix-blend-exclusion ${isHovering ? "scale-150 bg-white opacity-20" : "scale-100 bg-transparent opacity-100"}`}
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
