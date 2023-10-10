import React from "react";
import WS from "@/public/photos/writers/WS.jpeg";
import JA from "@/public/photos/writers/JA.jpeg";
import CD from "@/public/photos/writers/CD.png";
import FD from "@/public/photos/writers/FD.jpeg";
import LT from "@/public/photos/writers/LT.jpeg";
import MT from "@/public/photos/writers/MT.png";
import GO from "@/public/photos/writers/GO.jpeg";
import JRRT from "@/public/photos/writers/JRRT.png";
import EH from "@/public/photos/writers/EH.jpeg";
import GGM from "@/public/photos/writers/GGM.png";

const Writers = () => {
  const writers = [
    {
      name: "William Shakespeare",
      most_read_book: "Hamlet",
      image_url: WS.src,
    },
    {
      name: "Jane Austen",
      most_read_book: "Pride and Prejudice",
      image_url: JA.src,
    },
    {
      name: "Charles Dickens",
      most_read_book: "A Tale of Two Cities",
      image_url: CD.src,
    },
    {
      name: "Fyodor Dostoevsky",
      most_read_book: "Crime and Punishment",
      image_url: FD.src,
    },
    {
      name: "Leo Tolstoy",
      most_read_book: "War and Peace",
      image_url: LT.src,
    },
    {
      name: "Mark Twain",
      most_read_book: "Adventures of Huckleberry Finn",
      image_url: MT.src,
    },
    {
      name: "George Orwell",
      most_read_book: "Nineteen Eighty-Four",
      image_url: GO.src,
    },
    {
      name: "J.R.R. Tolkien",
      most_read_book: "The Lord of the Rings",
      image_url: JRRT.src,
    },
    {
      name: "Ernest Hemingway",
      most_read_book: "The Old Man and the Sea",
      image_url: EH.src,
    },
    {
      name: "Gabriel Garcia Marquez",
      most_read_book: "One Hundred Years of Solitude",
      image_url: GGM.src,
    },
  ];

  return writers;
};

export default Writers;
