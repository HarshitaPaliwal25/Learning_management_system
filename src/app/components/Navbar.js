import classes from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_item}>
        <form className={classes.searchform}>
          <input
            className={classes.searchinput}
            type="text"
            placeholder="Search..."
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
