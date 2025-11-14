import type { Article } from "../interfaces";

const NewsCard = ({ article }: { article: Article }) => {
  return (
    <article className="w-full h-auto flex flex-col gap-3 cursor-pointer">
      {article.urlToImage ? (
        <img
          className="w-full h-60 object-cover rounded-md"
          src={article.urlToImage}
          alt={article.title}
        />
      ) : (
        <div className="w-full h-60 flex items-center justify-center bg-gray-200 rounded-md">
          No Image
        </div>
      )}
      <div className="flex flex-col gap-2">
        <p className="text-base font-libre font-bold text-gray-800">
          {article.title}
        </p>
        <p className="text-sm font-libre truncate line-clamp-2 text-gray-500">
          {article.description}
        </p>
        <p className="text-xs font-libre text-gray-400">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </article>
  );
};

export default NewsCard;
