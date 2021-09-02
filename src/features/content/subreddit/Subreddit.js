import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentSubName } from "../topsubs/topSubsSlice";
import PostsList from "./postslist/PostsList";
import "./Subreddit.css";
import {
  getSubreddit,
  selectCurrentSubredditURL,
  selectSubredditPosts,
} from "./subredditSlice";

const Subreddit = () => {
  const dispatch = useDispatch();
  const currentSubredditName = useSelector(selectCurrentSubName);

  useEffect(() => {
    dispatch(getSubreddit());
  }, [dispatch, currentSubredditName]);

  return (
    <div className="subreddit-container">
      <div className="selected-subtitle">
        Showing posts from: {currentSubredditName}
      </div>
      <PostsList />
    </div>
  );
};

export default Subreddit;
