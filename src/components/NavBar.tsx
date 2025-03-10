import logo from "../assets/logo.webp";
import DarkMode from "./DarkMode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <nav className="flex items-center py-2 justify-between">
      <img src={logo} alt="website-logo" className="size-16" />
      <SearchInput  />
      <DarkMode  />
    </nav>
  );
};

export default NavBar;
