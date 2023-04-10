import { Component } from "react";
import "./search-box.style.css";
const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <input
    className={className}
    type="text"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
