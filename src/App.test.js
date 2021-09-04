import React from "react";
import { cleanup, render, fireEvent, screen } from "./test-utils/test-renderer";
import App from "./App";
import { server } from "./test-utils/test-server";
import testdata from "./test-utils/test-data";

// E2E tests
// establish API mocking before all tests
beforeAll(() => {
  server.listen();
});
// render the App within a Provider at teh start of each test
beforeEach(() => {
  render(<App />);
});
/* unmount components etc after each test to avoid leakage &
 * request handlers removed to ensure all tests are independent
 */
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
// clean up after testing is finished
afterAll(() => {
  server.close();
});

describe("On loading the page", () => {
  it("should display a text input for searching", () => {
    expect(
      screen.getByRole("textbox", { name: /search/i })
    ).toBeInTheDocument();
  });
  it("should display the second subreddit of the day in list", async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    const textElement = await screen.getByText(
      testdata.topsubs[1].data.display_name
    );
    expect(textElement).toBeInTheDocument();
  });
  it("should display the top subreddit of the day as the main content", async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    const textElement = await screen.getByText(
      `Showing posts from: ${testdata.topsubs[0].data.display_name}`
    );
    expect(textElement).toBeInTheDocument();
  });
  // tests for visible posts?
});

// describe("On clicking the 2nd subreddit", () => {
//   it("should display the 2nd subreddit as the main content", async () => {
//     // click 2nd subreddit here
//     await new Promise((resolve) => {
//       setTimeout(resolve, 1000);
//     });
//     fireEvent.click(screen.getByText(/ffxiv/));
//     await new Promise((resolve) => {
//       setTimeout(resolve, 1000);
//     });
//     const textElement = await screen.getByText(/Showing posts from: ffxiv/);
//     expect(textElement).toBeInTheDocument();
//   });
//   // tests for visible posts?
// });
