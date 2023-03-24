import styles from "./HighlightedJoke.module.css";

const HighlightedJoke = ({ text, topic }) => {
  return (
    <figure className={styles.joke}>
      <p>{text}</p>
      <figcaption>{topic}</figcaption>
    </figure>
  );
};

export default HighlightedJoke;
