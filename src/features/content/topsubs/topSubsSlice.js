import { createSlice } from "@reduxjs/toolkit";
import { fetchTopSubs } from "../../../api/redditApi";

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
export const selectTopSubsObject = (state) => state.topSubs;
export const selectTopSubs = (state) => state.topSubs.topSubs;
