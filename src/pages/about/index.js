import { BasicLayout } from "@/layout/basic";
import Creators from "@/components/about/creators";
import { useSpring, animated, config } from "react-spring";

const About = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses
  });
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
        <div className="text-start">
          <animated.div style={props}>
            <Creators />
          </animated.div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default About;
