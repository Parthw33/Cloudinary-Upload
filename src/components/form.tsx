'use client';

import {CldUploadButton} from "next-cloudinary";
import { useState } from 'react';
import axios from 'axios';


export default function From() {

    const [video, setVideo] = useState<string|null>(null);

    const handleUpload = async (result: any) => {
      try {
        const response = await axios.post('/api/upload', {
          video: result?.info?.secure_url,
          name: video,
        });
        console.log('Video upload successful:', response.data);
      } catch (error) {
        console.error('Error uploading video:', error);
      }
  
}


  return (
    <main className="flex item-center jutify-center">

        <input className="text-black" value={video!} onChange={(e) => setVideo(e.target.value)} type="text" placeholder="Enter Video Title" />

        <div className="item-center justify-center">
        <CldUploadButton
                options={{maxFiles: 1}}
                onUpload={handleUpload}
                uploadPreset="rjr9ezeg"
            >
            Upload
        </CldUploadButton>
        </div>
    </main>
  );
}

