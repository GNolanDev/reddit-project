import TopSub from "../topsub/TopSub";

const TopSubsList = () => {
  const topsubs = [
    {
      id: "subs12345",
      display_name: "funny",
      url: "/r/funny/",
      icon_img:
        "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
    },
  ]; // get from store by selector
  return (
    <div className="topsubsList">
      <div className="topsubsTitle">Top subreddits today</div>
      <ul>
        {topsubs.map((sub) => {
          return (
            <li key={sub.id}>
              <TopSub
                url={sub.url}
                icon_url={sub.icon_img}
                name={sub.display_name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopSubsList;
