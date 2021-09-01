const Header = () => {
  return (
    <header>
      <div id="headerlogo">LogoHere</div>
      <form className="searchBar">
        <input
          type="text"
          placeholder="Search posts"
          // onchange handler
          // value=from store
        />
        <button
          type="submit"
          // onclick handler
          // put icon in as content
        >
          S
        </button>
      </form>
    </header>
  );
};

export default Header;
