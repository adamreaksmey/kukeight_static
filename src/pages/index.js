import Head from "next/head";
import { MainLayout, LayoutContext } from "../layout";
import SlideShow from "@/components/top/section1/slideshow.js";
import Icons from "@/components/top/section1/icons";
import Section2 from "@/components/top/section2";
import React, { useContext } from "react";
import Section3 from "@/components/top/section3";
import Section4 from "@/components/top/section4";

export default function Home() {
  const mode = useContext(LayoutContext);

  return (
    <>
      <Head>
        <title>KUKeight</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./photos/logo.png" />
      </Head>

      <SlideShow />
      <div className="text-center pb-5 icon-components">
        <Icons />
      </div>
      <div
        className="w-100 top-2 d-flex"
        style={{
          backgroundColor: `${
            mode == "night" ? "rgb(24 111 101 / 56%)" : "#dafffb61"
          }`,
        }}
      >
        <Section2 />
      </div>
      <div className="w-100 top-2 d-flex flex-row-reverse">
        <Section3 />
      </div>
      <hr />
      <div className="w-100 top-2">
        <Section4 />
      </div>
    </>
  );
}
