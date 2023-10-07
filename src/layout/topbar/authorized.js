import React from "react";
import Link from "next/link";
import logout from "@/components/functions/logout";
import { useRouter } from "next/router";

const Authorized = (props) => {
  const router = useRouter();
  return (
    <div
      className="collapse navbar-collapse w-100 justify-content-end gap-5"
      id="navbarNav"
    >
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/write" className="nav-link">
            Write
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/help" className="nav-link">
            Help
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/music" className="nav-link">
            Music library
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => {
              logout(router);
            }}
          >
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Authorized;
