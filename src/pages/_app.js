import { useRouter } from "next/router";
import { useSpring, animated, config } from "react-spring";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainLayout } from "@/layout/index";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(() => {
    const checkIfArrayExistsLocally = localStorage.getItem("kukeight-authorized-users");
    if (!checkIfArrayExistsLocally) {
      localStorage.setItem("kukeight-authorized-users", "[]");
    }
  })

  return (
    <>
      <animated.div style={props}>
        {currentUrl !== "/" ? (
          <Component {...pageProps} style={props} />
        ) : (
          <MainLayout>
            <Component {...pageProps} style={props} />
          </MainLayout>
        )}
      </animated.div>
    </>
  );
}