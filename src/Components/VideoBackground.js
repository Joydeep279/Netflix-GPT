import React, { useEffect, useState } from "react";
import { Api_Options } from "../utils/constants";

const VideoBackground = ({ videoId }) => {
  const [videoKey, setVideoKey] = useState(null);
  async function getVideoDetails() {
    const apiData = await fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,
      Api_Options
    );
    const data = await apiData.json();
    const filteredData = data.results.filter(
      (items) => items.type === "Trailer"
    );
    const filteredVideoDetails = filteredData.length
      ? filteredData[0]
      : data.results[0];
    setVideoKey(filteredVideoDetails.key);
  }
  useEffect(() => {
    getVideoDetails();
  }, []);
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${videoKey}&modestbranding=1&rel=0`}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="w-screen h-screen"></iframe>
    </div>
  );
};

export default VideoBackground;
