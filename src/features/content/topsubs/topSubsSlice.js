import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { fetchTopSubs } from "../../../api/redditApi";
import { selectCurrentSubredditURL } from "../subreddit/subredditSlice";

const initialState = {
  topSubs: [],
  error: false,
  isLoading: false,
};

const topSubsSlice = createSlice({
  name: "topsubs",
  initialState,
  reducers: {
    startGettingTopSubs(state) {
      state.isLoading = true;
      state.error = false;
    },
    getTopSubsSuccess(state, action) {
      state.isLoading = false;
      state.error = false;
      state.topSubs = action.payload;
    },
    getTopSubsFailure(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const getTopSubs = () => async (dispatch) => {
  try {
    dispatch(startGettingTopSubs());
    const topSubs = await fetchTopSubs();
    dispatch(getTopSubsSuccess(topSubs));
  } catch {
    dispatch(getTopSubsFailure());
  }
};

export const { startGettingTopSubs, getTopSubsSuccess, getTopSubsFailure } =
  topSubsSlice.actions;
export default topSubsSlice.reducer;
export const selectTopSubs = (state) => state.topSubs.topSubs;
export const selectCurrentSubName = (state) => {
  // use array of subreddits to get display name of selected subreddit
  const currentSubURL = state.subreddit.selectedURL;
  const currentSub = state.topSubs.topSubs.find(
    (sub) => sub.url === currentSubURL
  );
  return currentSub && "display_name" in currentSub
    ? currentSub.display_name
    : "Not found";
};
