import { useEffect } from "react";
import { Api_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToUpComing } from "../utils/movieSlice";

const useUpComing = () => {
  const dispatch = useDispatch();
  async function getUpComing() {
    const apiData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      Api_Options
    );

    const jsonData = await apiData.json();
    dispatch(addToUpComing(jsonData.results));
  }
  useEffect(() => {
    getUpComing();
  }, []);
};
export default useUpComing;
