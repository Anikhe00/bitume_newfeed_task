import Logo from "../Logo";
import NavigationData from "../../utils/NavigationList";
import NavLink from "../NavLink";

const Footer = () => {
  return (
    <footer className="flex flex-col px-8 py-8 gap-4 w-full h-auto items-center justify-center bg-gray-50 border-t border-gray-100">
      <Logo />
      <nav className="flex gap-5 items-center justify-center">
        {NavigationData.map((item) => (
          <NavLink key={item.name} to={item.href}>
            {item.name}
          </NavLink>
        ))}
      </nav>
      <p className="font-libre text-sm text-gray-600">
        &copy; 2025 NewsToday. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
