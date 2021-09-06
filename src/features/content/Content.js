import Subreddit from "./subreddit/Subreddit";
import TopSubsContainer from "./topsubs/TopSubsContainer";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-container">
      <Subreddit />
      <TopSubsContainer />
    </div>
  );
};

export default Content;
