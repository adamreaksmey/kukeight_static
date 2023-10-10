import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Unauthorized = (props) => {
  const router = useRouter();
  const { switchBackgroundMode } = props;
  return (
    <div
      className="collapse navbar-collapse w-100 justify-content-end gap-5"
      id="navbarNav"
    >
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" className="nav-link">
            The Creators
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/support" className="nav-link">
            Support Us
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/help" className="nav-link">
            Help
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/faq" className="nav-link">
            FAQ
          </Link>
        </li>
        <li className={router.asPath == "/" ? "nav-item" : "d-none"}>
          <a
            className="nav-link"
            onClick={switchBackgroundMode}
            style={{ cursor: "pointer" }}
          >
            Switch mode
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Unauthorized;
