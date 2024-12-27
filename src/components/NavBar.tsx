import logo from "../assets/logo.webp";
import DarkMode from "./DarkMode";
import SearchInput from "./SearchInput";
interface Props{
  onSearch: (searchText: string) => void;
  isDarkMode: boolean;
  onDarkMode: (isDarkMode:boolean) =>void;

}
const NavBar = ({isDarkMode,onDarkMode,onSearch}:Props) => {
  return (
    <nav className="flex items-center py-2 justify-between">
      <img src={logo} alt="website-logo" className="size-16" />
      <SearchInput onSearch={onSearch} />
      <DarkMode isDarkMode={isDarkMode} onDarkMode={onDarkMode} />
    </nav>
  );
};

export default NavBar;
