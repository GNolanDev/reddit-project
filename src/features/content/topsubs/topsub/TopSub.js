import "./TopSub.css";

const TopSub = (props) => {
  // onclick, dispatch action to change selected subreddit to props.url
  return (
    <button className="topSubContainer" onClick={() => {}}>
      <img src={props.icon_url} alt="" className="topSubIcon" />
      <div className="topSubName">{props.name}</div>
    </button>
  );
};

export default TopSub;
