import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/layout/index";
import { MainLayout } from "@/layout/index";
import { useRouter } from "next/router";
import TopBar from "@/layout/topbar";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  if (currentUrl !== "/") {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
