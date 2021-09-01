import Subreddit from "./subreddit/Subreddit";
import TopSubsList from "./topsubs/topsubslist/TopSubsList";

const Content = () => {
  return (
    <div className="content-container">
      <Subreddit />
      <TopSubsList />
    </div>
  );
};

export default Content;
