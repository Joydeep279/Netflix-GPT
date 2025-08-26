import useMovieList from "../Hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import VideoBackground from "./VideoBackground";
import VideoCard from "./VideoCard";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import useUpComing from "../Hooks/useUpComingMovies";
import GptSearch from "./GptSearch";

const MainContainer = () => {
  const gptConfig = useSelector((store) => store.gptConfig);
  useMovieList();
  usePopularMovies();
  useTopRated();
  useUpComing();

  const movie = useSelector((appStore) => appStore.moviesList);
  if (!movie || !movie.moviesList) {
    return null;
  }
  const displayMovie = movie.moviesList[5];

  return (
    <div
      className={
        gptConfig.GptSearch
          ? "overflow-y-hidden"
          : "bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg')] bg-cover bg-center h-screen w-screen"
      }>
      {gptConfig.GptStatus ? (
        <GptSearch />
      ) : (
        <div>
          <VideoContainer videoDetail={displayMovie} />
          <VideoBackground videoId={displayMovie.id} />
          <VideoCard />
        </div>
      )}
    </div>
  );
};

export default MainContainer;
