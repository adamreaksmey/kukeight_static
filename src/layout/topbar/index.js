import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/photos/logo.png";

const TopBar = (props) => {
  const { switchMode } = props;

  const switchBackgroundMode = () => {
    switchMode();
  };

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
            <li className="nav-item">
              <a className="nav-link" onClick={switchBackgroundMode} style={{ cursor: "pointer"}}>
                Switch mode
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
