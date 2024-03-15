'use client';

import { Videoupload } from '@prisma/client';
import React from 'react';

interface GalleryProps {
    videos: Videoupload[];
}

const Gallery: React.FC<GalleryProps> = ({ videos }) => {
    const [playing, setPlaying] = React.useState(false);

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    return (
        <div
            className='grid grid-cols-4 gap-3 w-full h-full p-4'
        >
            {videos?.map((video, index) => (
                <div key={index} className='w-full'>
                    <video className='w-full h-40'  src={video.url!} controls={true} autoPlay={playing} />
                    <p className='text-center'>{video.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;