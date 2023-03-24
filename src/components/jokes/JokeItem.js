import styles from "./JokeItem.module.css";

const JokeItem = ({ text, topic }) => {
  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{topic}</figcaption>
      </figure>
      <a className="btn">Expand</a>
    </li>
  );
};

export default JokeItem;
