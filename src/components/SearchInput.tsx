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
      <div className="h-11">
        <input
          ref={ref}
          placeholder="Search games..."
          className="px-5 pl-11 py-2 w-full text-lg rounded-3xl bg-neutral-800 placeholder-zinc-600"
        />
        <div className="relative max-w-1 bottom-[30px] left-[19px]">
          <BsSearch />
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
