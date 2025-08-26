const { configureStore } = require("@reduxjs/toolkit");
import gptSlice from "./GptSlice";
import userSlice from "./UserSlice";
import movieSlice from "./movieSlice";
const appStore = configureStore({
  reducer: {
    userInfo: userSlice,
    moviesList: movieSlice,
    gptConfig: gptSlice,
  },
});
export default appStore;
