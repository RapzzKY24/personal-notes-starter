import React from "react";
import SearchBar from "./SearchBar";

const Header = ({ onSearch }) => {
  return (
    <div className="note-app__header">
      <h1>Catatan</h1>
      <SearchBar onSearch={onSearch} /> 
    </div>
  );
};

export default Header;
