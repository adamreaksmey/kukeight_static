import React from "react";
import Image from "next/image";
import StarRatingComponent from "react-star-rating-component";
import { Row, Col } from "react-bootstrap";

const ContinueReading = ({ books }) => {
  const booksPerChunk = 3;
  const chunks = Array.from({ length: 2 }, (_, index) =>
    books.slice(index * booksPerChunk, (index + 1) * booksPerChunk)
  );

  //   basically what this does is dividing objects to put into a new array based on the 
//   chunk size and how many arrays ( length: 4 ) should be created into a new array

  return (
    <div className="overflow-scroll">
      {chunks.map((chunk, chunkIndex) => (
        <Row key={chunkIndex} className="w-100">
          {chunk.map((data, index) => (
            <Col key={index} className="nowidth-col">
              <Image
                src={data.image}
                width={150}
                height={150}
                className="logo-img"
                alt={data.author}
              />
              <hr style={{ margin: "0.5rem 0" }} />
              <div className="fw-bold">{data.title}</div>
              <StarRatingComponent
                name="Books rating"
                value={data.rating}
                starColor="#CD5C08"
              />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default ContinueReading;
