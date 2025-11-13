import { Link } from "react-router-dom";
import type { NavLinkProps } from "../interfaces";

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="text-gray-500 font-libre hover:text-blue-500 text-sm font-medium"
    >
      {children}
    </Link>
  );
};

export default NavLink;
