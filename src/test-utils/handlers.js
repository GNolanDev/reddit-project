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
          children: [...testdata.topsubs],
        },
      })
    );
  }),
  // handle GET request to reddit for fetching posts from 1st subreddit
  rest.get(
    //new RegExp(`${base_url}${testdata.topsubs[0].data.url}`),
    `${base_url}${testdata.topsubs[0].data.url}.json`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            children: [...testdata.posts1],
          },
        })
      );
    }
  ),
  // handle request for 2nd subreddit
  rest.get(
    `${base_url}${testdata.topsubs[1].data.url}.json`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            children: [...testdata.posts2],
          },
        })
      );
    }
  ),
  // handle request for comments for 1st subreddit
  rest.get(
    `${base_url}${testdata.posts1[0].data.permalink}.json`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { content: "no content" },
          {
            data: {
              children: [...testdata.comments1],
            },
          },
        ])
      );
    }
  ),
];
