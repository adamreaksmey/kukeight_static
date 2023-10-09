import BookThief from "@/public/photos/recommendation/book-thief.jpg";
import Divergent from "@/public/photos/recommendation/divergent.jpeg";
import StarsFault from "@/public/photos/recommendation/fault-in-our-stars.jpeg";
import PotterAndThePhilosopher from "@/public/photos/recommendation/harry-potter-and-the-philosopher-stone.jpeg";
import HungerGame from "@/public/photos/recommendation/hunger-game.jpg";
import MazeRunner from "@/public/photos/recommendation/maze-runner.jpg";
import PerksOfWallflower from "@/public/photos/recommendation/perks-of-being-a-wallflower.jpg";
import Giver from "@/public/photos/recommendation/the-giver.jpeg";
import Outsider from "@/public/photos/recommendation/the-outsiders.jpg";
import Twilight from "@/public/photos/recommendation/twilight.jpg";

const recommendation = () => {
  const recommendedBooks = [
    {
      image: StarsFault.src,
      title: "The Fault in Our Stars",
      author: "John Green",
      rating: 4.24,
    },
    {
      image: HungerGame.src,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      rating: 4.33,
    },
    {
      image: PerksOfWallflower.src,
      title: "The Perks of Being a Wallflower",
      author: "Stephen Chbosky",
      rating: 4.21,
    },
    {
      image: PotterAndThePhilosopher.src,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K Rowling",
      rating: 4.48,
    },
    {
      image: Giver.src,
      title: "The Giver",
      author: "Lois Lowry",
      rating: 4.13,
    },
    {
      image: Divergent.src,
      title: "Divergent",
      author: "Veronica Roth",
      rating: 4.21,
    },
    {
      image: Twilight.src,
      title: "Twilight",
      author: "Stephenie Meyer",
      rating: 3.59,
    },
    {
      image: MazeRunner.src,
      title: "The Maze Runner",
      author: "James Dashner",
      rating: 4.03,
    },
    {
      image: BookThief.src,
      title: "The Book Thief",
      author: "Markus Zuksak",
      rating: 4.37,
    },
    {
      image: Outsider.src,
      title: "The Outsiders",
      author: "S. E. Hinton",
      rating: 4.1,
    },
  ];

  return recommendedBooks;
};

export default recommendation;
