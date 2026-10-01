"use client";
import dynamic from "next/dynamic";
import Preloader from "./PreLoader";
import ScrollHaptics from "./ScrollHaptics";

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
