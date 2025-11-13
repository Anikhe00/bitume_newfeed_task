import { Link } from "react-router-dom";
import type { NavLinkProps } from "../interfaces";

const NavLink = ({ to, children, tab, active }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={
        tab
          ? active
            ? "text-white px-4 py-2 font-libre bg-blue-600 rounded-full text-sm font-medium"
            : "text-gray-500 px-4 py-2 font-libre hover:text-blue-600 hover:bg-blue-100 rounded-full text-sm font-medium"
          : "text-gray-500 font-libre hover:text-blue-600 text-sm font-medium"
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
