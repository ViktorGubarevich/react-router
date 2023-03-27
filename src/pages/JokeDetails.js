import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";

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

const JokeDetails = () => {
  const routeMatch = useRouteMatch();
  const params = useParams();

  const joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);

  if (!joke) {
    return <h1 className="centered">Шуток не найдено</h1>;
  }

  return (
    <>
      <HighlightedJoke text={joke.text} topic={joke.topic} />
      <Route path={`${routeMatch.path}`} exact>
        <div className="centered">
          <Link to={`${routeMatch.url}/comments`} className="btn--empty">
            Show Comments
          </Link>
        </div>
      </Route>
      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default JokeDetails;
