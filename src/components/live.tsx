'use client';

import { CldVideoPlayer } from "next-cloudinary";
import 'next-cloudinary/dist/';

export default function Live() {

    return(
    <main>
        <h1 className="flex flex-col items-center justify-between p-24">Video Streaming</h1>
        <CldVideoPlayer width="1920" height="1080" src="https://res.cloudinary.com/ddrxbg3h9/video/upload/v1710523471/a1ulcdww864uynpibyua.mp4" />
        <span className="mt-8">
            Video by <a href="https://www.pexels.com/@david-bartus?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Parth</a> from <a href="https://www.pexels.com/video/sea-turtle-8542183?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Pexels</a>
        </span>
    </main>
    );
}