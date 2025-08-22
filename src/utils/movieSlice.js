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
    addToPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addToPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addToTopRated: (state, action) => {
      state.TopRated = action.payload;
    },
    addToUpComing: (state, action) => {
      state.UpComing = action.payload;
    },
    clearMovieList: (state) => {
      return null;
    },
  },
});
export default movieSlice.reducer;
export const {
  addToMovieList,
  clearMovieList,
  addToPopularMovies,
  addToTopRated,
  addToUpComing,
} = movieSlice.actions;
