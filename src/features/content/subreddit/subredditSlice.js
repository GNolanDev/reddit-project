import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../../api/redditApi";

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
  searchTerm: "",
  selectedURL: "",
};

const subredditSlice = createSlice({
  name: "subreddit",
  initialState,
  reducers: {
    startGettingSubreddit(state) {
      state.isLoading = true;
      state.error = false;
    },
    getSubredditSuccess(state, action) {
      state.isLoading = false;
      state.error = false;
      state.posts = action.payload;
    },
    getSubredditFailure(state) {
      state.isLoading = false;
      state.error = true;
    },
    setSelectedSubreddit(state, action) {
      state.selectedURL = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const getSubreddit = (sub_url) => async (dispatch) => {
  if (sub_url && sub_url.startsWith("/r/")) {
    try {
      dispatch(startGettingSubreddit());
      const posts = await fetchPosts(sub_url);
      dispatch(getSubredditSuccess(posts));
    } catch {
      dispatch(getSubredditFailure());
    }
  }
};

export const {
  startGettingSubreddit,
  getSubredditSuccess,
  getSubredditFailure,
  setSelectedSubreddit,
  setSearchTerm,
} = subredditSlice.actions;
export default subredditSlice.reducer;
export const selectSubredditPosts = (state) => state.subreddit.posts;
export const selectSearchedSubredditPosts = (state) => {
  if (state.subreddit.searchTerm === "") {
    return state.subreddit.posts;
  }
  return state.subreddit.posts.filter((post) =>
    post.title.toLowerCase().includes(state.subreddit.searchTerm)
  );
};
export const selectCurrentSubredditURL = (state) => state.subreddit.selectedURL;
export const selectCurrentSearchTerm = (state) => state.subreddit.searchTerm;
export const selectSubreddit = (state) => state.subreddit;
