import { useEffect } from "react";
import { Api_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  async function getPopularMovies() {
    const apiData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      Api_Options
    );

    const jsonData = await apiData.json();
    dispatch(addToPopularMovies(jsonData.results));
  }
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
