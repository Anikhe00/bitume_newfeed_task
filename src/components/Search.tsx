import { HiOutlineSearch } from "react-icons/hi";
import classNames from "classnames";
import { useState } from "react";
import debounce from "lodash.debounce";

const Search = ({
  placeholder,
  className,
  onSearch,
}: {
  placeholder: string;
  className?: string;
  onSearch: (query: string) => void;
}) => {
  const [value, setValue] = useState("");
  const searchClassName = className
    ? classNames(
        "flex gap-2 items-center justify-start w-full px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2",
        className
      )
    : "flex gap-2 items-center justify-start w-full h-10 px-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const debouncedSearch = debounce((query: string) => {
    if (query.length >= 3) {
      onSearch(query);
    } else {
      onSearch("");
    }
  }, 400);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query = e.target.value;
    setValue(query);
    debouncedSearch(query);
  };

  return (
    <div className={searchClassName}>
      <HiOutlineSearch className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full font-libre text-sm placeholder:text-sm placeholder:text-gray-400  text-gray-800 focus:outline-none"
      />
    </div>
  );
};

export default Search;
