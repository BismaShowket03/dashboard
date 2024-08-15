import React, { useState } from "react";
import useStore from "../store";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const searchWidgets = useStore((state) => state.searchWidgets);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchWidgets(e.target.value);
  };
};

export default SearchBar;
