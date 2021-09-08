import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, fetchComments } from "../../../api/redditApi";

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
    startGettingComments(state, action) {
      state.posts[action.payload].isLoading = true;
      state.posts[action.payload].error = false;
    },
    getCommentsSuccess(state, action) {
      state.posts[action.payload.id].isLoading = false;
      state.posts[action.payload.id].error = false;
      state.posts[action.payload.id].comments = action.payload.comments;
    },
    getCommentsFailure(state, action) {
      state.posts[action.payload].isLoading = false;
      state.posts[action.payload].error = true;
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

export const getComments = (post_id) => async (dispatch, getState) => {
  try {
    dispatch(startGettingComments(post_id));
    const permalink = getState().subreddit.posts.find(
      (post) => post.id === post_id
    ).permalink;
    const comments = await fetchComments(permalink);
    dispatch(getCommentsSuccess({ id: post_id, comments }));
  } catch {
    dispatch(getCommentsFailure(post_id));
  }
};

export const {
  startGettingSubreddit,
  getSubredditSuccess,
  getSubredditFailure,
  startGettingComments,
  getCommentsSuccess,
  getCommentsFailure,
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
