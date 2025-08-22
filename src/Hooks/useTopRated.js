import { useEffect } from "react";
import { Api_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToTopRated } from "../utils/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  async function getTopRated() {
    const apiData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      Api_Options
    );

    const jsonData = await apiData.json();
    dispatch(addToTopRated(jsonData.results));
  }
  useEffect(() => {
    getTopRated();
  }, []);
};
export default useTopRated;
