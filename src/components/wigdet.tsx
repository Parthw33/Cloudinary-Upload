import { useState } from "react";
import axios from "axios";

export default function Video_Upload() {
  const [video, setVideo] = useState<string | null>(null);

  const handleSubmit = async (result: any) => {
    try {
      const response = await axios.post("/api/upload", {
        video: result?.info?.secure_url,
        name: video,
      });
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "ddrxbg3h9", // Replace with your Cloudinary cloud name
        uploadPreset: "rjr9ezeg", // Replace with your Cloudinary upload preset
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          handleSubmit(result); // Call handleSubmit when upload is successful
        }
      }
    );
    widget.open();
  };

  return (
    <div className="flex item-center jutify-center">
      <input
        className="text-black"
        value={video!}
        onChange={(e) => setVideo(e.target.value)}
        type="text"
        placeholder="Enter Video Title"
      />

      <div className="item-center justify-center">
        <button onClick={showWidget}>React Button Upload video</button>
      </div>
 </div>
 );
}