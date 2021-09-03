import React from "react";
import { render, fireEvent, screen } from "./test-utils/test-utils";
import App from "./App";
// also requires mocking of fetch, use msw
import { rest } from "msw";
import { setupServer } from "msw/node";

// E2E tests

describe("On loading the page", async () => {
  it("should display a text input for searching", () => {
    render(<App />);
    expect(
      screen.getByRole("textbox", { name: /search/i })
    ).toBeInTheDocument();
  });
  it("should display the top subreddit of the day", async () => {
    render(<App />);
    const textElement = await screen.getByText(/ffxiv/);
    expect(textElement).toBeInTheDocument();
  });
});
