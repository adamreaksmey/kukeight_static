import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/layout/index";
import { MainLayout } from "@/layout/index";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
