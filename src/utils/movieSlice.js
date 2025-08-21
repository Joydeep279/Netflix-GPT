import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movie",
  initialState: {
    moviesList: null,
  },
  reducers: {
    addToMovieList: (state, action) => {
      state.moviesList = action.payload;
    },
    clearMovieList: (state) => {
      return null;
    },
  },
});
export default movieSlice.reducer;
export const { addToMovieList, clearMovieList } = movieSlice.actions;
