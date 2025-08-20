const { configureStore } = require("@reduxjs/toolkit");
import userSlice from "./UserSlice";
const appStore = configureStore({
  reducer: {
    userInfo: userSlice,
  },
});
export default appStore;
