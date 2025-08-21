const { configureStore } = require("@reduxjs/toolkit");
import userSlice from "./UserSlice";
import movieSlice from "./movieSlice";
const appStore = configureStore({
  reducer: {
    userInfo: userSlice,
    moviesList: movieSlice,
  },
});
export default appStore;
