import { useSelector } from "react-redux";
import Post from "../post/Post";
import { selectSubreddit, selectSubredditPosts } from "../subredditSlice";

const PostsList = () => {
  const posts = useSelector(selectSubredditPosts);
  const { isLoading, error } = useSelector(selectSubreddit);

  if (isLoading) {
    return <div className="loadingDiv">fetching posts...</div>;
  }

  if (error) {
    return <div className="errorDiv">Could not fetch posts!</div>;
  }

  if (posts.length < 1) {
    return <div>No posts available</div>;
  }

  return (
    <div className="postsList">
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            url={post.url}
          />
        );
      })}
    </div>
  );
};

export default PostsList;
