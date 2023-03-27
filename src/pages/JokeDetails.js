import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";
import NoJokesFound from "../components/jokes/NoJokesFound";
import Loader from "../components/UI/Loader";
import useHttp from "../hooks/use-http";
import { getJoke } from "../utils/firebase-api";

const JokeDetails = () => {
  const routeMatch = useRouteMatch();
  const params = useParams();
  const { jokeId } = params;

  const {
    sendHttpRequest,
    status,
    data: loadedJoke,
    error,
  } = useHttp(getJoke, true);

  useEffect(() => {
    sendHttpRequest(jokeId);
  }, [sendHttpRequest, jokeId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedJoke || loadedJoke.length === 0)) {
    return <NoJokesFound />;
  }

  if (!loadedJoke.text) {
    return <h1 className="centered">Joke not found</h1>;
  }

  return (
    <>
      <HighlightedJoke text={loadedJoke.text} topic={loadedJoke.topic} />
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
