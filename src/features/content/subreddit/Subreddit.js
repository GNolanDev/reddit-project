import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentSubName, selectTopSubs } from "../topsubs/topSubsSlice";
import PostsList from "./postslist/PostsList";
import "./Subreddit.css";
import {
  getSubreddit,
  selectCurrentSubredditURL,
  setSelectedSubreddit,
} from "./subredditSlice";

const Subreddit = () => {
  const dispatch = useDispatch();
  const firstSubredditFromList = useSelector(selectTopSubs)[0] || "";
  const currentSubredditName = useSelector(selectCurrentSubName);
  const currentSubredditURL = useSelector(selectCurrentSubredditURL);

  //set current subreddit as first from today's list on first mount
  useEffect(() => {
    dispatch(setSelectedSubreddit(firstSubredditFromList.url));
  }, [dispatch, firstSubredditFromList]);

  // begin fetching of posts from subreddit to display
  useEffect(() => {
    dispatch(getSubreddit(currentSubredditURL));
  }, [dispatch, currentSubredditURL]);

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
