function Navbar({ search, onSearch }) {
  return (
    <div className="navbar">
      <a
        href="https://github.com/rzidanlib"
        className="profile"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="github.png" className="profile-img" alt="github" />
        <p className="profile-name">Muhammad Rizki Zidan</p>
      </a>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search notes..."
          value={search}
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>
    </div>
  );
}

export default Navbar;
