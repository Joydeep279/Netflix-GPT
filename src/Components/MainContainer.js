import useMovieList from "../Hooks/useMovieList";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import VideoBackground from "./VideoBackground";

function getRandomNumber() {
  return Math.floor(Math.random() * 20);
}

const MainContainer = () => {
  useMovieList();
  const movie = useSelector((appStore) => appStore.moviesList);

  if (movie.moviesList === null) return;
  const displayMovie = movie.moviesList[getRandomNumber()];

  return (
    <div>
      <VideoContainer videoDetail={displayMovie} />
      <VideoBackground videoId={displayMovie.id}/>
    </div>
  );
};

export default MainContainer;
