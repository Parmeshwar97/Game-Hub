import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import DarkMode from "./DarkMode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <nav className="flex items-center py-2 justify-between">
      <Link to='/'><img src={logo} alt="website-logo" className="size-16" /></Link>
      <SearchInput  />
      <DarkMode  />
    </nav>
  );
};

export default NavBar;
