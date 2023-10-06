import { BasicLayout } from "@/layout/basic";
import Creators from "@/components/about/creators";
import { Button } from "react-bootstrap";
import Back from "@/public/photos/icons/back.png";
import Image from "next/image";
import { useRouter } from 'next/router';

const About = () => {

  const router = useRouter();
  const handleRedirectHome = () => {
    router.push("/");
  };
  return (
    <BasicLayout>
      <div className="text-center w-100 p-5">
        <h1 className="fw-bold">
          For the greatest minds, By the best creators!
        </h1>
        <div className="w-100 d-flex justify-content-center pb-4">
          <hr className="w-50" />
        </div>
        <div className="w-100 d-flex justify-content-center pb-5">
          <div className="w-50 text-center">
            Our small team, comprising four visionary co-founders, is driven by
            unwavering passion and profound expertise. We pride ourselves on
            delivering unrivaled excellence to writers and novelists, harnessing
            the power of cutting-edge artificial intelligence. Our mission is to
            keep you captivated, fully immersed in the art of reading and
            writing like never before!
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center pb-5">
          <Button variant="secondary" onClick={handleRedirectHome}>
            <Image
              src={Back.src}
              width={30}
              height={30}
              className="logo-img scale-2"
              alt="logo"
            />
          </Button>
        </div>
        <div className="text-start">
          <Creators />
        </div>
      </div>
    </BasicLayout>
  );
};

export default About;
