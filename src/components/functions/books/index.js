import React from "react";
import { lowerCase, replace } from "lodash";

import TheFaultInOurStars from "@/components/book/fault-in-our-stars";
import CoverTheFaultInOurStars from "@/public/photos/recommendation/fault-in-our-stars.jpeg";
import BookTheif from "@/public/photos/recommendation/book-thief.jpg";
import Divergent from "@/public/photos/recommendation/divergent.jpeg";
import HungerGame from "@/public/photos/recommendation/hunger-game.jpg";
import PerksOfWallflower from "@/public/photos/recommendation/perks-of-being-a-wallflower.jpg";

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
      author: "John Green",
      description: `"The Fault in Our Stars" by John Green is a touching and profound book that delves into the lives of Hazel and Gus, two young cancer patients. It explores love, friendship, and the search for meaning in the face of mortality, leaving readers with a powerful and unforgettable experience."`,
    },
    the_book_thief: {
      cover: BookTheif.src,
      content: "",
      author: "Markus Zuksak",
    },
    divergent: {
      cover: Divergent.src,
      content: "",
      author: "Veronica Roth",
    },
    the_hunger_games: {
      cover: HungerGame.src,
      content: "",
      author: "Suzanne Collins",
    },
    the_perks_of_being_a_sunflower: {
      cover: PerksOfWallflower.src,
      content: "",
      author: "Stephen Chbosky",
    },
  };

  return BooksContentList[dashedTextBookName];
};

export default BookContents;
