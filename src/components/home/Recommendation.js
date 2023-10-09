import React from "react";
import StarRatingComponent from "react-star-rating-component";
import Upload from "@/public/photos/icons/upload.png";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";

const Recommendation = (props) => {
  const { recommendedBooks } = props;
  return (
    <>
      <div className="pb-4 fw-bold d-flex">
        <div className="d-flex justify-content-start w-100">
          <h5>Recent Top Recommendation:</h5>
        </div>
        <div
          className="d-flex justify-content-end w-100 gap-2 align-items-start"
          role="button"
        >
          <div>Upload something!</div>
          <Image
            src={Upload.src}
            width={30}
            height={30}
            className="logo-img"
            alt={"Upload"}
          />
          <Dropdown>
            <Dropdown.Toggle
              variant="none"
              id="dropdown-basic"
              className="border border-secondary"
            >
              Sort by
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#action1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#action2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#action3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
    </>
  );
};

export default Recommendation;
