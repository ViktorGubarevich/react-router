import JokeList from "../components/jokes/JokeList";

const DUMMY_JOKES = [
  {
    id: "j1",
    topic: "Programming",
    text: "How many ...",
  },
  {
    id: "j2",
    topic: "General",
    text: "How many ...",
  },
];

const Jokes = () => {
  return <JokeList jokes={DUMMY_JOKES} />;
};

export default Jokes;
