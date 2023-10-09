import React, { useEffect, useState } from "react";
import Auth from "@/components/hoc/Auth";
import Paper from "@/layout/paper/index";
import Recommended from "@/components/functions/home/recommendation";
import Image from "next/image";
import StarRatingComponent from "react-star-rating-component";
import Upload from "@/public/photos/icons/upload.png";

const Home = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  useEffect(() => {
    const setBooks = Recommended();
    setRecommendedBooks(setBooks);
  }, []);
  return (
    <>
      <Paper>
        <div className="pb-4 fw-bold d-flex">
          <div className="d-flex justify-content-start w-100">
            <h5>Recent Top Recommendation:</h5>
          </div>
          <div
            className="d-flex justify-content-end w-100 gap-2 align-items-start"
            role="button"
          >
            Upload
            <Image
              src={Upload.src}
              width={25}
              height={25}
              className="logo-img"
              alt={"Upload"}
            />
          </div>
        </div>
        <div
          className="d-flex gap-4 w-100 overflow-scroll"
          style={{ whiteSpace: "nowrap" }}
        >
          {recommendedBooks?.map((data, index) => (
            <div key={index} style={{ whiteSpace: "break-spaces" }}>
              <Image
                src={data.image}
                width={150}
                height={150}
                className="logo-img"
                alt={data.author}
              />
              <hr style={{ margin: "0.5rem 0" }} />
              <div className="fw-bold">{data.title}</div>
              <StarRatingComponent value={data.rating} starColor={"#CD5C08"} />
            </div>
          ))}
        </div>
      </Paper>
    </>
  );
};

export default Auth(Home);
