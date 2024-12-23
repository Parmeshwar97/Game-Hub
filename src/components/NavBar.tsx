import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
interface Props{
  onSearch: (searchText: string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <nav className="flex items-center">
      <img src={logo} alt="website-logo" className="w-20 mr-4" />
      <SearchInput onSearch={onSearch} />
    </nav>
  );
};

export default NavBar;
