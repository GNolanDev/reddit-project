import { configureStore } from "@reduxjs/toolkit";
import topSubsReducer from "../features/content/topsubs/topSubsSlice";
import subredditReducer from "../features/content/subreddit/subredditSlice";

export const store = configureStore({
  reducer: {
    topSubs: topSubsReducer,
    subreddit: subredditReducer,
  },
});
