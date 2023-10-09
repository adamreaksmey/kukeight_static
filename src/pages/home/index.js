import React, { useEffect, useState } from "react";
import Auth from "@/components/hoc/Auth";
import Paper from "@/layout/paper/index";
import Recommended from "@/components/functions/home/recommendation";
import Image from "next/image";
import Recommendation from "@/components/home/recommendation";

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
        <div className="section-2 continue-reading saved-books"></div>
      </Paper>
    </>
  );
};

export default Auth(Home);
