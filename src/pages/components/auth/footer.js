import { Container, Nav } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="d-flex justify-content-center align-items-center">
        <Nav className="gap-3">
          <Link href="/" passHref>
            <Nav.Link className="home">Home</Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link className="about-us">About Us</Nav.Link>
          </Link>
          <Link href="/support" passHref>
            <Nav.Link className="support-us">Support Us</Nav.Link>
          </Link>
          <Link href="/help" passHref>
            <Nav.Link className="help">Help</Nav.Link>
          </Link>
          <Link href="/faq" passHref>
            <Nav.Link className="faq">FAQ</Nav.Link>
          </Link>
          <Link href="/privacy" passHref>
            <Nav.Link className="privacy">Privacy & Policy</Nav.Link>
          </Link>
          <Link href="/license" passHref>
            <Nav.Link className="license">Licensing</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </div>
  );
}
