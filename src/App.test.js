import React from "react";
import { render, fireEvent, screen } from "./test-utils/test-utils";
import App from "./App";
// also requires mocking of fetch, use msw
import { rest } from "msw";
import { setupServer } from "msw/node";

// TODO: set up msw to intercept api requests

// E2E tests
beforeEach(() => {
  render(<App />);
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
    const textElement = await screen.getByText(/ffxiv/);
    expect(textElement).toBeInTheDocument();
  });
  it("should display the top subreddit of the day as the main content", async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    const textElement = await screen.getByText(/Showing posts from: Home/);
    expect(textElement).toBeInTheDocument();
  });
  // tests for visible posts?
});

describe("On clicking the 2nd subreddit", () => {
  it("should display the 2nd subreddit as the main content", async () => {
    // click 2nd subreddit here
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    fireEvent.click(screen.getByText(/ffxiv/));
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    const textElement = await screen.getByText(/Showing posts from: ffxiv/);
    expect(textElement).toBeInTheDocument();
  });
  // tests for visible posts?
});
