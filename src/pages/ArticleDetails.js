import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const params = useParams();

  return (
    <section>
      <h1>Article Details Page</h1>
      <p>{params.articleId}</p>
      <p>Lorem ...</p>
    </section>
  );
};

export default ArticleDetails;
