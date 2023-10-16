import React, { useEffect, useState } from "react";
import Paper from "@/layout/paper/index";
import Recommended from "@/components/functions/home/recommendation";
import Image from "next/image";
import Recommendation from "@/components/home/section-1";
import ContinueReading from "@/components/home/section-2/continue-reading";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import TopWritersList from "@/components/functions/home/writers";
import TopWriters from "@/components/home/section-2/top-writers";
import SectionThree from "@/components/home/section-3";
import WS from "@/public/photos/writers/WS.jpeg";
import BookOfTheYear from "@/public/photos/recommendation/fault-in-our-stars.jpeg";

const Home = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [topWriters, setTopWriters] = useState([]);

  useEffect(() => {
    const setBooks = Recommended();
    setRecommendedBooks(setBooks);

    const setWriters = TopWritersList();
    setTopWriters(setWriters);
  }, []);

  const writerOfTheYearDescription =
    "William Shakespeare, the renowned playwright of the Elizabethan era, continues to captivate audiences worldwide with his timeless works. His profound insights into the human condition and masterful storytelling make him an enduring literary icon.";

  const bookOfTheYearDescription =
    "The Fault in Our Stars by John Green is a luminous tapestry of love and resilience, painted with delicate strokes of hope and heartache. Through the tender bond of Hazel and Gus, it explores the fragility of existence and the transformative power of embracing life's fleeting moments.";
  return (
    <>
      <Paper>
        <div className="section-1 recommendation">
          <Recommendation recommendedBooks={recommendedBooks} />
        </div>
        <hr />
        <Row className="section-2 continue-reading saved-books pt-5 gap-2">
          <Col xs={5} className="books-grid-padding">
            <h5 className="px-5 pb-3 pt-3 fw-bold">Saved Books</h5>
            <ContinueReading books={recommendedBooks} />
          </Col>
          <Col xs={5} className="books-grid-padding">
            <h5 className="px-5 pb-3 pt-3 fw-bold">Continue Reading...</h5>
            <ContinueReading books={recommendedBooks} />
          </Col>
          <Col
            xs={1}
            className="books-grid-padding"
            style={{ width: "15.333333%" }}
          >
            <h5 className="pt-3 fw-bold">Top Writers</h5>
            <hr />
            <TopWriters writers={topWriters} />
          </Col>
        </Row>
        <Row className="section-3 writer-of-the-year pt-5 gap-2 align-items-start">
          <Col
            xs={5}
            className="books-grid-padding pb-3 overflow-scroll"
            style={{ height: "18vw" }}
          >
            <div className="px-5">
              <h5 className="pt-3 fw-bold">Writer Of The Year</h5>
              <hr />
              <SectionThree
                image={WS.src}
                description={writerOfTheYearDescription}
                buttonCaption={"View writer's work..."}
              />
            </div>
          </Col>
          <Col
            xs={5}
            className="books-grid-padding pb-3 overflow-scroll"
            style={{ height: "18vw" }}
          >
            <div className="px-5">
              <h5 className="pt-3 fw-bold">Book Of The Year</h5>
              <hr />
              <SectionThree
                image={BookOfTheYear.src}
                description={bookOfTheYearDescription}
                buttonCaption={"View writer's work..."}
              />
            </div>
          </Col>

          <Col
            xs={1}
            className="books-grid-padding pb-3"
            style={{ width: "15.333333%" }}
          >
            <h5 className="pt-3 fw-bold">Top Searches</h5>
            <hr />
            <ListGroup>
              {recommendedBooks.slice(0, 6).map((data, index) => (
                <ListGroupItem className="bg-transparent" role="button" style={{ fontSize: "0.8rem"}} key={index}>
                  {index+1 + "." + data.title}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Paper>
    </>
  );
};

export default Home;
