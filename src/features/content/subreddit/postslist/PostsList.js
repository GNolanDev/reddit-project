import { useSelector } from "react-redux";
import Post from "../post/Post";
import {
  selectSearchedSubredditPosts,
  selectSubreddit,
} from "../subredditSlice";

const PostsList = () => {
  const posts = useSelector(selectSearchedSubredditPosts);
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
      {posts.map((post, index) => {
        return <Post postprops={post} key={post.id} index={index} />;
      })}
    </div>
  );
};

export default PostsList;
