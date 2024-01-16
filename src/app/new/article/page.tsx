import React from "react";
import NewArticleHeader from "./NewArticleHeader";
import ArticleEditor from "./Editor";


const CreateArticle = () => {
  return (
    <div className=" ">
        <NewArticleHeader />
      <div className=" mx-auto max-w-4xl px-3">

          <ArticleEditor  />
      </div>
    </div>
  );
};

export default CreateArticle;
