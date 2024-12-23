import { BsSearch } from "react-icons/bs";

const SearchInput  = () => {
  return (
    <div className="h-11 w-9/12">
      <input
        placeholder="Search games..."
        className="px-5 pl-11 py-2 w-full text-lg rounded-3xl bg-neutral-800 placeholder-zinc-600"
      />
      <div className="relative max-w-1 bottom-[30px] left-[19px]">
        <BsSearch/>
      </div>
    </div>
  );
}

export default SearchInput;