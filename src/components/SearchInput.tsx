import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current?.value);
      }}
    >
      <div className="h-10">
        <input
          ref={ref}
          placeholder="Search games..."
          className="pl-11  w-11/12 md:w-full py-2 rounded-3xl bg-[#EDEDED] dark:bg-[#202020] placeholder-zinc-600"
        />
        <div className="relative max-w-1 bottom-[27px] dark:text-white text-black left-[19px]">
          <BsSearch />
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
