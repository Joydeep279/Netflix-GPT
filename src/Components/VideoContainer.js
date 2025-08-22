const VideoContainer = ({ videoDetail }) => {
  const { title, overview } = videoDetail;
  console.log(videoDetail);

  return (
    <div className="absolute top-80 left-16 h-screen font-sans subpixel-antialiased flex flex-col gap-5 text-white">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="w-1/2 font-normal">{overview}</p>
      <div className=" flex gap-2.5 items-center font-semibold">
        <button className="px-6 py-2 bg-white/50   flex gap-2.5 items-center rounded text-black hover:bg-white">
          <img
            src="https://www.svgrepo.com/show/48617/play-arrow.svg"
            className="w-5 h-5"
          />
          Play
        </button>
        <button className="px-3 py-2 bg-white/50 flex gap-2.5 items-center rounded text-black hover:bg-white">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Infobox_info_icon.svg"
            className="w-5 h-5"
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoContainer;
