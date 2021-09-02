import subredditSliceReducer from "./subredditSlice";

describe("Subreddit reducer", () => {
  it("should have an initial state", () => {
    expect(subredditSliceReducer(undefined, {})).toEqual({
      posts: [],
      error: false,
      isLoading: false,
      searchTerm: "",
      selectedURL: "",
    });
  });
});
