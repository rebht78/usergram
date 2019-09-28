import React from "react";
import "./searchbox.styles.css";

const SearchBox = ({ handleChange }) => {
  return (
    <input
      type="text"
      className="ui input"
      placeholder="Enter your Search Value"
      onChange={handleChange}
    />
  );
};

export default SearchBox;
