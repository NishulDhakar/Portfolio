"use client";

import HireMeButton from "../sections/landingPage/Hireme";
import GitHubStars from "../sections/landingPage/GithubStar";

export default function FloatingActions() {
    return (
        <div className="fixed top-4 right-4 z-50 hidden flex md:flex items-center gap-4">
            <GitHubStars />
            <HireMeButton />
        </div>
    );
}
