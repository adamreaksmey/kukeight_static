import React, { useEffect, useState } from "react";
import Auth from "@/components/hoc/Auth";
import Paper from "@/layout/paper/index";
import Recommended from "@/components/functions/home/recommendation";
import Image from "next/image";
import Recommendation from "@/components/home/section-1";
import ContinueReading from "@/components/home/section-2/continue-reading";

const Home = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  useEffect(() => {
    const setBooks = Recommended();
    setRecommendedBooks(setBooks);
  }, []);
  return (
    <>
      <Paper>
        <div className="section-1 recommendation">
          <Recommendation recommendedBooks={recommendedBooks} />
        </div>
        <hr />
        <div className="section-2 continue-reading saved-books d-flex w-100">
          <div className="w-75">
            <ContinueReading books={recommendedBooks} />
          </div>
          <div className="w-100">{/* Acting as saved books */ }
            <ContinueReading books={recommendedBooks} />
          </div>
        </div>
      </Paper>
    </>
  );
};

export default Auth(Home);
