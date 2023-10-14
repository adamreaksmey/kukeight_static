import { useRouter } from "next/router";
import { useSpring, animated, config } from "react-spring";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainLayout } from "@/layout/index";
import { useEffect, useState } from "react";
import AuthHoc from "@/components/hoc/Auth";

function App({ Component, pageProps }) {
  const router = useRouter();
  const currentUrl = router.asPath;
  const [allAuthorizedUsers, setAllAuthorizedUsers] = useState("");

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(() => {
    const checkIfArrayExistsLocally = localStorage.getItem(
      "kukeight-authorized-users"
    );
    if (!checkIfArrayExistsLocally) {
      localStorage.setItem("kukeight-authorized-users", "[]");
    }
    const parsed = JSON.parse(checkIfArrayExistsLocally);
    setAllAuthorizedUsers(parsed);
  }, []);

  return (
    <>
      <animated.div style={props}>
        {currentUrl !== "/" ? (
          <Component {...pageProps} style={props} users={allAuthorizedUsers} />
        ) : (
          <MainLayout>
            <Component
              {...pageProps}
              style={props}
              users={allAuthorizedUsers}
            />
          </MainLayout>
        )}
      </animated.div>
    </>
  );
}

export default AuthHoc(App);
