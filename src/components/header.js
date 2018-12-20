import React from "react";

const Header = () => {
  return (
    <header className="jumbotron text-center">
      <h1>Google Book Search</h1>
      <h4>Search for interestig books and save them to your list</h4>
      <a href="/" className="btn btn-secondary" role="button">Search Books</a>
      {" "}
      <a href="/saved" className="btn btn-secondary" role="button">Saved Books</a>
    </header>
  );
}

export default Header;
