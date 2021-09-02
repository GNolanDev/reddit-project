import { useDispatch } from "react-redux";
import { setSelectedSubreddit } from "../../subreddit/subredditSlice";
import "./TopSub.css";

const TopSub = (props) => {
  const dispatch = useDispatch();
  // onclick, dispatch action to change selected subreddit to props.url
  const handleClick = (e) => {
    dispatch(setSelectedSubreddit(props.url));
  };

  return (
    <button className="topSubContainer" onClick={handleClick}>
      <img src={props.icon_url} alt="" className="topSubIcon" />
      <div className="topSubName">{props.name}</div>
    </button>
  );
};

export default TopSub;
