import { Link, useLocation } from "react-router-dom";
import styles from "./JokeItem.module.css";

const JokeItem = ({ text, topic, id }) => {
  const location = useLocation();

  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{topic}</figcaption>
      </figure>
      <Link to={`${location.pathname}/${id}`} className="btn">
        Expand
      </Link>
    </li>
  );
};

export default JokeItem;
