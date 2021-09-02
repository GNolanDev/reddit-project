import topSubsSliceReducer from "./topSubsSlice";

describe("topSubsSlice reducer", () => {
  it("should have an initial state", () => {
    expect(topSubsSliceReducer(undefined, {})).toEqual({
      topSubs: [],
      error: false,
      isLoading: false,
    });
  });
});
