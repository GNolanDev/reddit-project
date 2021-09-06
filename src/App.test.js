import React from "react";
import { rest } from "msw";
import { cleanup, render, fireEvent, screen } from "./test-utils/test-renderer";
import App from "./App";
import paths from "./constants/paths";
const { base_url } = paths;
import { server } from "./test-utils/test-server";
import testdata from "./test-utils/test-data";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// E2E tests
// establish API mocking before all tests
beforeAll(() => {
  server.listen();
});
// render the App within a Provider at teh start of each test
beforeEach(() => {
  // render(<App />);
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
    render(<App />);
    expect(
      screen.getByRole("textbox", { name: /search/i })
    ).toBeInTheDocument();
  });
  it("should display the second subreddit of the day in list", async () => {
    render(<App />);
    await wait(200);
    const textElement = await screen.getByText(
      testdata.topsubs[1].data.display_name
    );
    expect(textElement).toBeInTheDocument();
  });
  it("should display the top subreddit of the day as the main content", async () => {
    render(<App />);
    await wait(200);
    const textElement = await screen.getByText(
      `Showing posts from: ${testdata.topsubs[0].data.display_name}`
    );
    expect(textElement).toBeInTheDocument();
  });
  it("should display a post from the top subreddit", async () => {
    render(<App />);
    await wait(200);
    const textElement = await screen.getByText(
      `${testdata.posts1[0].data.title}`
    );
    expect(textElement).toBeInTheDocument();
  });

  describe("When the subreddits fetch api has a problem", () => {
    it("should display an error message if 404 returned", async () => {
      server.use(
        rest.get(`${base_url}/subreddits.json`, (req, res, ctx) => {
          return res(
            ctx.status(404),
            ctx.json({ message: "Not Found", error: "404" })
          );
        })
      );
      render(<App />);
      await wait(200);
      const textElement = await screen.getByText(/Could not fetch subreddits/i);
      expect(textElement).toBeInTheDocument();
    });
    it("should display a waiting message if there's a delay", async () => {
      server.use(
        rest.get(`${base_url}/subreddits.json`, async (req, res, ctx) => {
          await wait(4000);
          return res(
            ctx.status(404),
            ctx.json({ message: "Not Found", error: "404" })
          );
        })
      );
      render(<App />);
      await wait(500);
      const textElement = await screen.getByText(/fetching subreddits/i);
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe("On clicking the 2nd subreddit", () => {
  it("should display the 2nd subreddit title and posts", async () => {
    render(<App />);
    // click 2nd subreddit here
    await wait(200);
    fireEvent.click(screen.getByText(testdata.topsubs[1].data.display_name));
    await wait(200);
    const titleElement = await screen.getByText(
      `Showing posts from: ${testdata.topsubs[1].data.display_name}`
    );
    const postElement = await screen.getByText(
      `${testdata.posts2[0].data.title}`
    );
    expect(titleElement).toBeInTheDocument();
    expect(postElement).toBeInTheDocument();
  });
  // tests for visible posts?
});
