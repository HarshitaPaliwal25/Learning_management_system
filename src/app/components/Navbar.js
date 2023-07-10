"use client"
import React, { useState } from "react";
import classes from "../styles/Navbar.module.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  
    console.log("Search query:", searchQuery);
    
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_item}>
        <form className={classes.searchform} onSubmit={handleSearchSubmit}>
          <input
            className={classes.searchinput}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button className={classes.searchbutton} type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
