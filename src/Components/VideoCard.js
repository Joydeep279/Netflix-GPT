import CardList from "./CardList";
import { useSelector } from "react-redux";

const VideoCard = () => {
  const list = useSelector((appStore) => appStore.moviesList);
  console.log(list);
  return (
    <div className="flex flex-col">
      <CardList title={"Now Playing"} movies={list.moviesList} />
      <CardList title={"Popular"} movies={list.PopularMovies} />
      <CardList title={"Top Rated"} movies={list.TopRated} />
      <CardList title={"Up Coming"} movies={list.UpComing} />
    </div>
  );
};

export default VideoCard;
