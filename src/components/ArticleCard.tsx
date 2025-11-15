import { Link } from "react-router-dom";
import type { Article } from "../interfaces";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <article className="w-full flex flex-row gap-3 cursor-pointer overflow-hidden items-center">
      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
        <p className="text-xs font-libre font-semibold text-blue-500">
          {article.source.name}
        </p>
        <p className="text-base font-libre font-bold text-gray-800">
          {article.title}
        </p>
        <p className="text-sm font-libre line-clamp-2 text-gray-500">
          {article.description}
        </p>
        <Link
          className="text-sm font-libre font-bold text-blue-500"
          to={`/article/${article.url}`}
        >
          Read more
        </Link>
      </div>
      <div className="w-30 h-30 shrink-0 overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover"
          src={article.urlToImage || ""}
          alt={article.title}
        />
      </div>
    </article>
  );
};

export default ArticleCard;
