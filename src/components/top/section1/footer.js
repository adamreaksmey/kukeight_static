import { Container, Nav } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="d-flex justify-content-center align-items-center">
        <Nav className="gap-5">
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/about" passHref>
            The Creators
          </Link>
          <Link href="/support" passHref>
            Support Us
          </Link>
          <Link href="/help" passHref>
            Help
          </Link>
          <Link href="/faq" passHref>
            FAQ
          </Link>
          <Link href="/privacy-policy" passHref>
            Privacy & Policy
          </Link>
          <Link href="/license" passHref>
            Licensing
          </Link>
        </Nav>
      </Container>
    </div>
  );
}
