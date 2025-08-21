import { useEffect } from "react";
import { Api_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToMovieList } from "../utils/movieSlice";

const useMovieList = () => {
  const dispatch = useDispatch();
  async function getMovieData() {
    const apiData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      Api_Options
    );

    const jsonData = await apiData.json();
    dispatch(addToMovieList(jsonData.results));
  }
  useEffect(() => {
    getMovieData();
  }, []);
};
export default useMovieList;
