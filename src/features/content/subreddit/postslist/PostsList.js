import { useSelector } from "react-redux";
import Post from "../post/Post";
import { selectSubredditPosts } from "../subredditSlice";

const PostsList = () => {
  const posts = useSelector(selectSubredditPosts);

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
