"use client";
import dynamic from "next/dynamic";
import ScrollHaptics from "./ScrollHaptics";

const Preloader = dynamic(() => import("@/components/PreLoader"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function ClientSideComponents() {
    return (
        <>
            <Preloader />
            <CustomCursor />
            <ScrollHaptics />
        </>
    );
}
