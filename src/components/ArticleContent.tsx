import type { Article } from "../interfaces";
import { Link } from "react-router-dom";

const ArticleContent = ({ article }: { article: Article }) => {
  return (
    <div className="w-full h-full flex flex-col gap-8 items-center justify-start">
      {/* Article Title */}
      <div className="w-full flex flex-col gap-4 items-start justify-start">
        <div className="w-full text-sm font-libre text-gray-500 flex flex-row gap-2 items-center justify-start">
          <Link to="/">
            <span className="hover:text-blue-500 cursor-pointer">News</span>
          </Link>
          <span>/</span>
          <span>{article.source.name}</span>
        </div>
        <h1 className="text-6xl leading-[110%] font-libre font-bold text-gray-800">
          {article.title}
        </h1>
        <p className="text-gray-600 font-libre text-sm font-medium">
          By {article.author} Published on{" "}
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
      </div>

      {/* Article Image */}
      <div className="w-full h-auto">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-120 object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-120 flex bg-blue-500 rounded-md"></div>
        )}
      </div>

      {/* Article Content */}
      <div>
        <p className="text-sm leading-[160%] font-libre text-gray-600">
          {article.content || article.description || "No content available."}
        </p>
      </div>
    </div>
  );
};

export default ArticleContent;
