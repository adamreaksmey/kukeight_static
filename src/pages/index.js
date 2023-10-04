import Head from "next/head";
import MainLayout from "../layout";
import SlideShow from "@/components/top/section1/slideshow.js";
import Icons from "@/components/top/section1/icons";
import Section2 from "@/components/top/section2";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>KUKeight</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./photos/logo.png" />
      </Head>
      <MainLayout>
        <SlideShow />
        <div className="text-center pb-5">
          <Icons />
        </div>
        <div
          className="w-100 top-2 d-flex"
          style={{ backgroundColor: "rgb(24 111 101 / 56%)" }}
        >
          {React.cloneElement(<Section2 />, { mode: "night" })}
        </div>
        <div className="w-100 top-2 d-flex">
          <h2>What makes us different?</h2>
        </div>
      </MainLayout>
    </>
  );
}
