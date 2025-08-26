import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt-Slice",
  initialState: {
    GptStatus: false,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.GptStatus = !state.GptStatus;
    },
  },
});
export default gptSlice.reducer;
export const { toggleGptSearch } = gptSlice.actions;
