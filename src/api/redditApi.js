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
    {
      id: "subs123456",
      display_name: "funny2",
      url: "/r/funny2/",
      icon_img:
        "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
    },
  ];
};

// fetchPosts - get posts from the selected subreddit
const fetchPosts = () => {
  // mock return for development
  return [
    {
      author: "testauthorname",
      title: "test title text",
      url: "https://i.redd.it/zwqg7xqu4uk71.jpg",
      id: 12345,
    },
    {
      author: "testauthorname2",
      title: "test title text2",
      url: "https://i.redd.it/zwqg7xqu4uk71.jpg",
      id: 123456,
    },
  ];
};

export { fetchTopSubs, fetchPosts };
