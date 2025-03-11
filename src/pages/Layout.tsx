import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import useGameQueryStore from "../store";

const Layout = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return (
    <div className={'min-h-dvh '+`${gameQuery.isDarkMode && "dark"}`}>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
