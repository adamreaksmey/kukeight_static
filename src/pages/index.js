import Head from "next/head";
import MainLayout from "../layout";
import SlideShow from "@/components/top/slideshow.js";
import Icons from "@/components/top/icons";

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
        <div className="w-100 top-2" style={{ backgroundColor: "rgb(24 111 101 / 56%)"}}>
          <div className="w-50">
            <h2>What is this? what do we do?</h2>
            <hr />
            <div>
              KUKEight is a groundbreaking Cambodian web application that allows
              young, talented creators around the world to develop their
              storytelling abilities. Through an intuitive interface and robust
              set of creative tools, KUKEight enables users to translate their
              imaginative stories into captivating novels and movies. By
              fostering global collaboration on diverse narratives, the platform
              sparks creativity and imagination while cultivating important
              literary and filmmaking skills in the next generation of
              storytellers.
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
