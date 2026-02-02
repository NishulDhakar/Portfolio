"use client";

import HireMeButton from "../sections/landingPage/Hireme";

export default function FloatingActions() {
    return (
        <div className="fixed top-4 right-4 z-50 hidden flex md:flex items-center gap-4">
            <HireMeButton />
        </div>
    );
}
