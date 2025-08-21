const VideoContainer = ({ videoDetail }) => {
  const { title, overview, poster_path } = videoDetail;
console.log(videoDetail);

  return (
    <div className="absolute top-80 left-10 font-sans subpixel-antialiased flex flex-col gap-5">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="w-1/2 font-normal">{overview}</p>
      <div className=" flex gap-2.5 items-center font-semibold">
        <button className="px-6 py-2 bg-white  flex gap-2.5 items-center rounded">
          <img
            src="https://www.svgrepo.com/show/48617/play-arrow.svg"
            className="w-5 h-5"
          />
          Play
        </button>
        <button className="px-3 py-2 bg-gray-400  flex gap-2.5 items-center rounded text-white">
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
