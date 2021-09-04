// handlers for api requests intercepted by msw - used in test-server.js
import { rest } from "msw";
import paths from "../constants/paths";
const { base_url } = paths;
import testdata from "./test-data";

export const handlers = [
  // handle GET request to reddit for fetching top subreddits
  rest.get(`${base_url}/subreddits.json`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          children: {
            ...testdata.topsubs,
          },
        },
      })
    );
  }),
];
