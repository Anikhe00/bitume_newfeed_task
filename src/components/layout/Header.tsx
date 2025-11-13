import Logo from "../Logo";
import NavLink from "../NavLink";
import Search from "../Search";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from "../../assets/avatar.jpg";

const navigation = [
  {
    name: "Top Stories",
    href: "/",
  },
  {
    name: "World",
    href: "/about",
  },
  {
    name: "Business",
    href: "/contact",
  },
  {
    name: "Technology",
    href: "/contact",
  },
  {
    name: "Sports",
    href: "/contact",
  },
  {
    name: "Arts",
    href: "/contact",
  },
];

const Header = () => {
  return (
    <header className="flex px-8 w-full h-16 items-center justify-space-between bg-white border-b border-gray-200">
      <div className="flex gap-6 w-full h-auto items-center justify-start">
        <Logo />
        <nav className="flex gap-5 items-center justify-center">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.href}>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="w-[480px] h-auto flex items-center justify-center gap-4 ">
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
    </header>
  );
};

export default Header;
