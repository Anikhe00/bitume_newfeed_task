import Logo from "../Logo";
import NavLink from "../NavLink";
import Search from "../Search";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from "../../assets/avatar.jpg";
import NavigationData from "../../utils/NavigationList";
import { CgMenuLeftAlt } from "react-icons/cg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex px-5 md:px-8 lg:px-10 py-4 w-full h-auto items-center justify-space-between bg-gray-50 border-b border-gray-200">
      <div className="flex gap-6 w-full h-auto items-center justify-start">
        <Logo />
        <nav className="hidden lg:flex gap-5 items-center justify-center">
          {NavigationData.map((item) => (
            <NavLink key={item.name} to={item.href}>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="hidden w-[480px] h-auto lg:flex items-center justify-center gap-4 ">
        <Search placeholder="Search" />
        <IoMdNotificationsOutline className="text-2xl text-gray-600" />
        {/* Avatar */}
        <div className="flex flex-none items-center justify-center w-8 h-8 rounded-full overflow-hidden">
          <img
            className="h-full w-full rounded-full object-cover object-top"
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-center">
        <CgMenuLeftAlt className="text-2xl text-gray-600" />
      </div>
    </header>
  );
};

export default Header;
