import TopSubsList from "./topsubslist/TopSubsList";
import "./TopSubsContainer.css";

const TopSubsContainer = () => {
  return (
    <div className="topsubslist-container">
      <div className="topsubslist-subtitle">Today's Top Subreddits</div>
      <TopSubsList />
    </div>
  );
};

export default TopSubsContainer;
