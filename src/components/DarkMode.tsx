import { FaMoon, FaSun } from "react-icons/fa";
import useGameQueryStore from "../store";

const DarkMode = () => {
  const isDarkMode = useGameQueryStore((s) => s.gameQuery.isDarkMode);
  const setDarkMode = useGameQueryStore((s) => s.setDarkMode);
  return (
    <>
      <div className="relative inline-block md:w-16 w-11 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-8 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer"
          checked={isDarkMode}
          onChange={() => setDarkMode(!isDarkMode)}
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-8 rounded-full bg-gray-300 cursor-pointer"
        >
          <span className="absolute text-lg left-0 size-8 flex items-center justify-center">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </span>
        </label>
      </div>
      <style>{`
        .toggle-checkbox:checked {
          right: 0;
          border-color: #16a34a;
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: #16a34a;
        }
      `}</style>
    </>
  );
};

export default DarkMode;
