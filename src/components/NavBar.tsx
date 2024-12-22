import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <nav className="flex items-center">
      <img src={logo} alt="website-logo" className="w-20" />
      <SearchInput />
    </nav>
  );
};

export default NavBar;
