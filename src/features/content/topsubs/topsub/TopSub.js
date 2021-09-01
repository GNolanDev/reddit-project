const TopSub = (props) => {
  // onclick, dispatch action to change selected subreddit to props.url
  return (
    <div className="topSubContainer">
      <button onClick={() => {}}>
        <img src={props.icon_url} alt="" className="topSubIcon" />
        <div className="topSubName">{props.name}</div>
      </button>
    </div>
  );
};

export default TopSub;
