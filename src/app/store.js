import { configureStore } from "@reduxjs/toolkit";
import topSubsReducer from "../features/content/topsubs/topSubsSlice";

export const store = configureStore({
  reducer: {
    topSubs: topSubsReducer,
  },
});
