import { Fragment } from "react";

import JokeItem from "./JokeItem";
import styles from "./JokeList.module.css";

const JokeList = ({ jokes }) => {
  return (
    <Fragment>
      <ul className={styles.list}>
        {jokes.map((joke) => (
          <JokeItem
            key={joke.id}
            id={joke.id}
            topic={joke.topic}
            text={joke.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default JokeList;
