"use client";

import HireMeButton from "../sections/landingPage/Hireme";
import GitHubStarButton from "../common/GitHubStarButton";

export default function FloatingActions() {
    return (
        <div className="fixed top-4 right-4 z-50 hidden md:flex items-center gap-4">
            <GitHubStarButton />
            <HireMeButton />
        </div>
    );
}
