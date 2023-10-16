import React from "react";
import { lowerCase, replace } from "lodash";

import TheFaultInOurStars from "@/components/book/fault-in-our-stars";
import CoverTheFaultInOurStars from "@/public/photos/recommendation/fault-in-our-stars.jpeg";
import BookTheif from "@/public/photos/recommendation/book-thief.jpg";
import Divergent from "@/public/photos/recommendation/divergent.jpeg";

const BookContents = (name) => {
  const lowercaseText = lowerCase(name);
  const dashedTextBookName = replace(
    lowerCase(lowercaseText),
    /\s+/g,
    " "
  ).replace(/\s/g, "_");

  const BooksContentList = {
    the_fault_in_our_stars: {
      cover: CoverTheFaultInOurStars.src,
      content: TheFaultInOurStars(),
    },
    the_book_thief: {
      cover: BookTheif.src,
      content: "",
    },
    divergent: {
      cover: Divergent.src,
      content: "",
    },
  };

  return BooksContentList[dashedTextBookName];
};

export default BookContents;
