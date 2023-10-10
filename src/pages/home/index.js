import React, { useEffect, useState } from "react";
import Auth from "@/components/hoc/Auth";
import Paper from "@/layout/paper/index";
import Recommended from "@/components/functions/home/recommendation";
import Image from "next/image";
import Recommendation from "@/components/home/section-1";
import ContinueReading from "@/components/home/section-2/continue-reading";
import { Row, Col } from "react-bootstrap";
import TopWritersList from "@/components/functions/home/writers";
import TopWriters from "@/components/home/section-2/top-writers";

const Home = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [topWriters, setTopWriters] = useState([]);

  useEffect(() => {
    const setBooks = Recommended();
    setRecommendedBooks(setBooks);

    const setWriters = TopWritersList();
    setTopWriters(setWriters);
  }, []);
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
            <h5 className="pb-3 pt-3 fw-bold">Top Writers</h5>
            <TopWriters writers={topWriters} />
          </Col>
        </Row>
      </Paper>
    </>
  );
};

export default Auth(Home);
