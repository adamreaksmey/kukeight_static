import React from "react";
import { lowerCase, replace } from "lodash";

import TheFaultInOurStars from "@/components/book/fault-in-our-stars";
import CoverTheFaultInOurStars from "@/public/photos/recommendation/fault-in-our-stars.jpeg";
import BookTheif from "@/public/photos/recommendation/book-thief.jpg";
import Divergent from "@/public/photos/recommendation/divergent.jpeg";
import HungerGame from "@/public/photos/recommendation/hunger-game.jpg";
import PerksOfWallflower from "@/public/photos/recommendation/perks-of-being-a-wallflower.jpg";
import PotterAndThePhilosopher from "@/public/photos/recommendation/harry-potter-and-the-philosopher-stone.jpeg";

const BookContents = (name) => {
  const lowercaseText = lowerCase(name);
  const dashedTextBookName = replace(
    lowerCase(lowercaseText),
    /\s+/g,
    " "
  ).replace(/\s/g, "_");
  console.log(dashedTextBookName);

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
      description: `"The Book Thief" by Markus Zusak is a captivating tale set in Nazi Germany, narrated by Death. It follows Liesel Meminger, a young girl who finds solace and courage in books during a time of darkness. Through poignant storytelling, it explores the power of words and the resilience of the human spirit.`,
    },
    divergent: {
      cover: Divergent.src,
      content: "",
      author: "Veronica Roth",
      description: `"Divergent" by Veronica Roth is a thrilling dystopian novel set in a futuristic society divided into distinct factions based on personality traits. The story revolves around Beatrice Prior, who faces a life-altering choice that challenges her identity and uncovers a dangerous conspiracy. Packed with action, romance, and thought-provoking themes, "Divergent" is a gripping exploration of individuality and societal control.`,
    },
    the_hunger_games: {
      cover: HungerGame.src,
      content: "",
      author: "Suzanne Collins",
      description: `"The Hunger Games" by Suzanne Collins is a gripping dystopian novel set in a post-apocalyptic world. It follows Katniss Everdeen, a courageous young woman who volunteers for a brutal televised competition where children fight to the death. Through Katniss' journey, the book examines themes of survival, rebellion, and the corrupting influence of power. A thrilling blend of action, suspense, and social commentary, "The Hunger Games" captivates readers with its intense storytelling and complex characters.`,
    },
    the_perks_of_being_a_wallflower: {
      cover: PerksOfWallflower.src,
      content: "",
      author: "Stephen Chbosky",
      description: `"The Perks of Being a Wallflower" is a coming-of-age novel that tells the story of Charlie, an introverted teenager navigating high school, friendship, love, and mental health challenges. Through a series of letters, Charlie explores themes of identity, self-discovery, and the complexities of adolescence. Chbosky's poignant writing captures the emotional journey of Charlie and resonates with readers through its authenticity and relatability.`,
    },
    harry_potter_and_the_philosophers_stone: {
      cover: PotterAndThePhilosopher.src,
      content: "",
      author: "JK Rowling",
      description: `"Harry Potter and the Philosopher's Stone" by J.K. Rowling is the first book in the iconic "Harry Potter" series. It introduces readers to the magical world of Hogwarts School of Witchcraft and Wizardry, following the adventures of Harry Potter, a young orphan with extraordinary abilities. As Harry embarks on his journey, he discovers his true heritage, makes lifelong friends, and faces the growing threat of the dark wizard, Lord Voldemort. Rowling's imaginative storytelling, enchanting characters, and themes of friendship, courage, and the power of love have made this book a beloved classic for readers of all ages.`,
    },
  };

  return BooksContentList[dashedTextBookName];
};

export default BookContents;
