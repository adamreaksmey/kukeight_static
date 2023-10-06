import { useEffect, useState } from "react";
import { MainLayout } from "@/layout/index";
import { BasicLayout } from "@/layout/basic";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    handleScroll(); // Set initial scroll position on the client side

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainLayout>
      <div>
        {/* Child component content */}
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>

        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>

        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        <p>Scroll position: {scrollPosition}</p>
        {/* Additional child component elements */}
      </div>
    </MainLayout>
  );
};

export default About;
