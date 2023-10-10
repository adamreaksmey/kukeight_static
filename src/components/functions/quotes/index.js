const quotes = [
  "The only true wisdom is in knowing you know nothing.<br /><div class='quoter'>- Socrates</div>",
  "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.<br /><div class='quoter'>- Albert Camus</div>",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. <br /><div class='quoter'>- Aristole</div>",
  "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. <br /><div class='quoter'>- JK Rowling</div>",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. <br /><div class='quoter'>- Nelson Mandela</div>",
  "In a world filled with hate, we must still dare to hope.<br />In a world filled with anger, we must still dare to comfort.<br />In a world filled with despair, we must still dare to dream.<br />And in a world filled with distrust, we must still dare to believe. <br /><div class='quoter'>- Michael Jackson</div>",
  "The greatest education in the world is watching the masters at work. <br /><div class='quoter'>- Michael Jackson</div>",
  "The greatest way to live with honor in this world is to be what we pretend to be. <br /><div class='quoter'>- Socrates</div>",
  "Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will be as one. <br /><div class='quoter'>- John Lennon</div>",
  "Don't count the days; make the days count. <br /><div class='quoter'>- Muhammad Ali</div>",
  "A reader lives a thousand lives before he dies. The man who never reads lives only one. <br /><div class='quoter'>- George R.R. Martin</div>",
  "Reading is essential for those who seek to rise above the ordinary. <br /><div class='quoter'>- Jim Rohn</div>",
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const Quotes = quotes[randomIndex];

export default Quotes;
