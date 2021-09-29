import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link" data-active={isActive("/")}>
                Restaurants
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/reviews">
              <a className="nav-link" data-active={isActive("/reviews")}>
                Reviews
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
