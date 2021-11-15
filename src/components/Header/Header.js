import NavBar from "./NavBar";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h2>MyReads</h2>
      <NavBar className={classes.nav} />
    </header>
  );
};

export default Header;
