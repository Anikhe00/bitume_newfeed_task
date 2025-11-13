import { HiOutlineSearch } from "react-icons/hi";

const Search = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="flex gap-2 items-center justify-start w-full h-10 px-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2">
      <HiOutlineSearch className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full font-libre text-sm placeholder:text-sm placeholder:text-gray-400  text-gray-800 focus:outline-none"
      />
    </div>
  );
};

export default Search;
