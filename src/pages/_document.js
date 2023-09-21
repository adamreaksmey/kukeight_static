import { Html, Head, Main, NextScript } from "next/document";
import MainLayout from "./layout";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <MainLayout>
          <NextScript />
        </MainLayout>
      </body>
    </Html>
  );
}
