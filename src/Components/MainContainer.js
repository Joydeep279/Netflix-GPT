import useMovieList from "../Hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import VideoBackground from "./VideoBackground";
import VideoCard from "./VideoCard";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import useUpComing from "../Hooks/useUpComingMovies";
function getRandomNumber() {
  return Math.floor(Math.random() * 20);
}

const MainContainer = () => {
  useMovieList();
  usePopularMovies();
  useTopRated();
  useUpComing();
  const movie = useSelector((appStore) => appStore.moviesList);

  if (movie.moviesList === null) return;
  const displayMovie = movie.moviesList[getRandomNumber()];

  return (
    <div>
      <VideoContainer videoDetail={displayMovie} />
      <VideoBackground videoId={displayMovie.id} />
      <VideoCard />
    </div>
  );
};

export default MainContainer;
