import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopSub from "../topsub/TopSub";
import { getTopSubs, selectTopSubs } from "../topSubsSlice";
import "./TopSubsList.css";

const TopSubsList = () => {
  const dispatch = useDispatch();
  const topsubs = useSelector(selectTopSubs);

  // populate store with today's subreddits when component first mounts
  useEffect(() => {
    dispatch(getTopSubs());
  }, [dispatch]);

  return (
    <ul className="topsubsList">
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
  );
};

export default TopSubsList;
