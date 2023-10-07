import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/photos/logo.png";
import { useRouter } from "next/router";
import TopIsAuthorized from "@/components/hoc/AuthorizedTop";
import Authorized from "@/layout/topbar/authorized";
import Unauthorized from "@/layout/topbar/unauthorized";
import { useEffect, useState } from "react";

const TopBar = (props) => {
  const { switchMode } = props;
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const switchBackgroundMode = () => {
    switchMode();
  };

  useEffect(() => {
    const authorized = localStorage.getItem("kukeight-authorized-user");
    if (authorized) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  });

  const Authorization = TopIsAuthorized(Authorized, Unauthorized);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top position-fixed w-100">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image
            src={Logo.src}
            width={60}
            height={60}
            className="logo-img"
            alt="logo"
          />{" "}
          | KUKeight
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Authorization
          showAuthorized={authorized}
          switchBackgroundMode={switchBackgroundMode}
        />
      </div>
    </nav>
  );
};

export default TopBar;
