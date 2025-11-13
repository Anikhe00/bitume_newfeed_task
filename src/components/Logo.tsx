import { MdNewspaper } from "react-icons/md";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center justify-center cursor-pointer">
      <MdNewspaper className="text-2xl text-blue-500" />
      <p className="font-bold font-libre text-md text-gray-800">NewsToday</p>
    </div>
  );
};

export default Logo;
