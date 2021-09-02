import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import searchicon from "../../assets/magnifying-glass.png";
import redditicon from "../../assets/reddit.png";
import { setSearchTerm } from "../content/subreddit/subredditSlice";
import "./Header.css";

const Header = () => {
  const [tempSearchTerm, setTempSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setTempSearchTerm(target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(tempSearchTerm));
  };

  // useEffect(() => {

  // })

  // attribute: <div>Icons made by <a href="" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  // attribute: <div>Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

  return (
    <header className="mainheader">
      <div id="headerlogo">
        <img src={redditicon} alt="" />
      </div>
      <form className="searchBar">
        <input
          type="text"
          placeholder="Search posts"
          onChange={handleChange}
          value={tempSearchTerm}
        />
        <button type="submit" onClick={submitSearch}>
          <img src={searchicon} alt="" />
        </button>
      </form>
    </header>
  );
};

export default Header;
