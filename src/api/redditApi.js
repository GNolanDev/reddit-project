import paths from "../constants/paths";
const { base_url } = paths;

// fetchTopSubs - get top 20 subreddits and extract relevant data before returning
const fetchTopSubs = async () => {
  // 'loading' test code
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 5000);
  // });
  // 'failing' test code
  //throw new Error("Failed to fetch subreddits");
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
  // 'loading' test code
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 5000);
  // });
  // 'failing' test code
  //throw new Error("Failed to fetch posts");
  const response = await fetch(`${base_url}${sub_url}.json`);
  const json = await response.json();
  const postsFullDetail = json.data.children
    .map((child) => child.data)
    .slice(0, 50);
  return postsFullDetail.map((post) => {
    const { author, title, url, id, num_comments, permalink } = post;
    return {
      author,
      title,
      url,
      id,
      num_comments,
      permalink,
      error: false,
      isLoading: false,
      showComments: false,
      comments: [],
    };
  });
};

// fetch first 100 comments on the post
const fetchComments = async (permalink) => {
  const response = await fetch(`${base_url}${permalink}.json`);
  const json = await response.json();
  const commentsFullDetail = json[1].data.children
    .map((child) => child.data)
    .slice(0, 100);
  return commentsFullDetail.map((comment) => {
    const { id, author, created_utc, body } = comment;
    return { id, author, created_utc, body };
  });
};

export { fetchTopSubs, fetchPosts, fetchComments };
