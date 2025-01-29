'use client'
import { useState, useEffect } from "react";

interface VideoData {
  heading: string;
  date: string;
  madeBy: string;
  description: string;
  videoLink: string;
}

const VideoGallery = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/fitness.json"); // Replace with your JSON file path
      const data: VideoData[] = await response.json();
      setVideos(data);
    };

    fetchData();
  }, []);

  const openVideo = (video: VideoData) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  if (!videos.length) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Healthy Feed</h1>
      <div className=" h-full gap-6">
        
        {videos.map((video, index) => (
          
          <div
            key={index}
            className={`shadow-md rounded-lg overflow-hidden h-full w-full py-[10px] px-[15px] mb-[15px] ${
              index % 2 === 1 ? "bg-[#EDEDED]" : "bg-white"
            } cursor-pointer`}
            onClick={() => openVideo(video)}
          >
            {/* Display video thumbnail */}
            <div className="lg:flex w-full gap-[17px]">
              <div className="">
            <video
              src={video.videoLink}
              className="w-[122px] h-[116px] rounded-[10px] object-cover"
              muted
              onLoadedData={(e) => (e.currentTarget.currentTime = 1)}
            /></div>
            <div className=" w-full lg:w-[951px]">
              <div className=" lg:max-w-[1120px] flex justify-between mb-[10px]">
              <h2 className="text-lg font-bold ">{video.heading}</h2>
              <p className="text-sm text-gray-500">
                {video.date} 
              </p>
              </div>
              <div className="bg-[#FEAE0D] py-[5px] w-[123px] h-[28px] rounded-[20px] mb-[10px] ">
                <p className="text-center text-[16px] leading-[18px] font-[500px] ">{video.madeBy}</p>
              </div>
              <div>
              <p className="text-sm">{video.description}</p>
              </div> 
            </div>
          </div>
          </div>  
        ))}
        
      </div>

      {/* Video modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative w-[601px] h-[601px] bg-black">
            <video
              src={selectedVideo.videoLink}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
