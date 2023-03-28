import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getComments } from "../../utils/firebase-api";
import Loader from "../UI/Loader";

import styles from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { jokeId } = params;

  const {
    sendHttpRequest,
    status,
    data: loadedComments,
  } = useHttp(getComments, true);

  useEffect(() => {
    sendHttpRequest(jokeId);
  }, [sendHttpRequest, jokeId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const commentAddedHandler = useCallback(() => {
    sendHttpRequest(jokeId);
  }, [sendHttpRequest, jokeId]);

  let comments;

  if (status === "pending") {
    comments = (
      <div>
        <Loader />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">This joke doesn`t have comments yet</p>;
  }

  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          jokeId={params.jokeId}
          onCommentAdded={commentAddedHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
