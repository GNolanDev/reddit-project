import paths from "../constants/paths";
const { base_url } = paths;

// fetchTopSubs - get top 20 subreddits and extract relevant data before returning
const fetchTopSubs = async () => {
  const response = await fetch(`${base_url}/subreddits.json`);
  const json = await response.json();
  const subsFullDetail = json.data.children
    .map((child) => child.data)
    .slice(0, 20);
  return subsFullDetail.map((sub) => {
    // only return necessary data to simplify objects
    const { id, display_name, url, icon_img } = sub;
    return { id, display_name, url, icon_img };
  });
};

// fetchPosts - get first 50 posts from the selected subreddit
const fetchPosts = async (sub_url) => {
  // mock return for development
  // return [
  //   {
  //     author: "testauthorname",
  //     title: "test title text",
  //     url: "https://i.redd.it/zwqg7xqu4uk71.jpg",
  //     id: 12345,
  //   },
  //   {
  //     author: "testauthorname2",
  //     title: "test title text2",
  //     url: "https://i.redd.it/zwqg7xqu4uk71.jpg",
  //     id: 123456,
  //   },
  // ];
  const response = await fetch(`${base_url}${sub_url}.json`);
  const json = await response.json();
  const postsFullDetail = json.data.children
    .map((child) => child.data)
    .slice(0, 50);
  return postsFullDetail.map((post) => {
    const { author, title, url, id } = post;
    return { author, title, url, id };
  });
};

export { fetchTopSubs, fetchPosts };
