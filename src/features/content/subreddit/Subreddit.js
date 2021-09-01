import PostsList from "./postslist/PostsList";
import "./Subreddit.css";

const Subreddit = () => {
  return (
    <div className="subreddit-container">
      <div className="selected-subtitle">Name of Subreddit here</div>
      <PostsList />
    </div>
  );
};

export default Subreddit;
