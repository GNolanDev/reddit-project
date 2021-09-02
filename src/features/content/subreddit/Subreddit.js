import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentSubName, selectTopSubs } from "../topsubs/topSubsSlice";
import PostsList from "./postslist/PostsList";
import "./Subreddit.css";
import { getSubreddit, setSelectedSubreddit } from "./subredditSlice";

const Subreddit = () => {
  const dispatch = useDispatch();
  const firstSubredditFromList = useSelector(selectTopSubs)[0] || "";
  const currentSubredditName = useSelector(selectCurrentSubName);

  //set current subreddit as first from today's list on first mount
  useEffect(() => {
    dispatch(setSelectedSubreddit(firstSubredditFromList.url));
  }, [dispatch, firstSubredditFromList]);

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
