// boilerplate for setting up store provider for testing
import React from "react";
import { render as rtLibRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import reducers for this app
import topSubsReducer from "../features/content/topsubs/topSubsSlice";
import subredditReducer from "../features/content/subreddit/subredditSlice";

function render(
  ui,
  {
    preLoadedState,
    store = configureStore({
      reducer: {
        topSubs: topSubsReducer,
        subreddit: subredditReducer,
      },
      preLoadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtLibRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
