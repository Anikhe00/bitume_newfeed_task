import { PiStepsFill } from "react-icons/pi";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center justify-center">
      <PiStepsFill className="text-2xl text-blue-500" />
      <p className="font-bold font-libre text-md text-gray-600">NewsToday</p>
    </div>
  );
};

export default Logo;
