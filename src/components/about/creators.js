import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Adam from "@/public/photos/creators/adam.png";
import Vottey from "@/public/photos/creators/vottey.png";
import Rattanak from "@/public/photos/creators/rattanak.png";
import Kanytha from "@/public/photos/creators/kanytha.png";

const Creators = () => {
  return (
    <div>
      <Row>
        <Col>
          <div className="grid-dark">
            <Image
              src={Adam.src}
              width={100}
              height={140}
              className="logo-img pb-2 scale-4"
              alt="logo"
            />
            <h5>Ros Sopheak ( Adam )</h5>
            <h6 className="fw-bold skin">Software developer</h6>
            <hr className="w-50" />
            <div>
              Hello, I am Adam, a passionate software developer! For me, life is
              incomplete without the art of programming. But there is a world
              beyond that one where reading and writing intertwine, bringing
              true fulfillment. As a developer, my purpose goes beyond crafting
              code. I am driven to create an exceptional user experience,
              inspiring individuals in this chaotic and fast-paced world to
              embrace the joy of reading and writing.
            </div>
          </div>
        </Col>
        <Col>
          <div className="grid-dark">
            <Image
              src={Vottey.src}
              width={100}
              height={150}
              className="logo-img pb-2 scale-4"
              alt="logo"
            />
            <h5>Buntha Somavottey</h5>
            <h6 className="fw-bold skin">
              Student | Software Engineering Major
            </h6>
            <hr className="w-50" />
            <div>
              I am BUNTHA Somavottey, a part of KUKEight, a platform where you
              can explore so many adventurous things in your dreaming universe.
              If being a container to receive what you think and how you feel, I
              will sacrifice my own subconsciousness to store your amazing
              tales, and we will make it to tangible memory together! KUKEight,
              your gate to express yourself!
            </div>
          </div>
        </Col>
        <Col>
          <div className="grid-dark">
            <Image
              src={Rattanak.src}
              width={100}
              height={110}
              className="logo-img pb-2 scale-4"
              alt="logo"
            />
            <h5>Chea Rattanak</h5>
            <h6 className="fw-bold skin">
              Artist | Student | Business Administration Major
            </h6>
            <hr className="w-50" />
            <div>
              I am Chea Rattanak, a part of KUKeight, who likes to create
              imagination into artworks and bring them to life through various
              mediums such as painting and digital art. I believe that art has
              the power to inspire, provoke emotions, and challenge societal
              norms. My goal is to push the boundaries of creativity and make a
              lasting impact on the world through my artistic expressions as a
              contribution to our platform.
            </div>
          </div>
        </Col>
        <Col>
          <div className="grid-dark">
            <Image
              src={Kanytha.src}
              width={100}
              height={130}
              className="logo-img pb-2 scale-4"
              alt="logo"
            />
            <h5>San Kanytha</h5>
            <h6 className="fw-bold skin">
              Student | Software Engineering Major
            </h6>
            <hr className="w-50" />
            <div>
              I am San Kanytha, a part of KUKeight, usually love to reading book
              both physical and e-book (novel, self-help, mindset, psychology).
              However, I can contribute to the KUKeight by providing assistance
              processing and create relevant content for the website or
              applications. With my my abilities, flexibility, and the idea I
              have, I can help enhance user experience and ensure that the
              web/app is user-friendly and efficient.
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Creators;
