import { Link } from "react-router-dom";
import type { NavLinkProps } from "../interfaces";
import classNames from "classnames";

const NavLink = ({ to, children, className }: NavLinkProps) => {
  const generalClass =
    "text-gray-500 font-libre hover:text-blue-600 font-medium";

  const allClasses = classNames(generalClass, className);

  return (
    <Link
      to={to || "/"}
      className={
        className
          ? allClasses
          : "text-gray-500 font-libre hover:text-blue-600 text-sm font-medium"
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
