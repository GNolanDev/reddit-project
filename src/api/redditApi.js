// fetchTopSubs - get top subreddits and extract relevant data before returning
const fetchTopSubs = () => {
  // mock return for development
  return [
    {
      id: "subs12345",
      display_name: "funny",
      url: "/r/funny/",
      icon_img:
        "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
    },
  ];
};

// fetchPosts - get posts from the selected subreddit

export { fetchTopSubs };
