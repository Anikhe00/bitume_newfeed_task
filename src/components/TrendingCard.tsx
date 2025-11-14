import type { Article } from "../interfaces";
import Button from "./Button";

const TrendingCard = ({
  article,
  onClick,
}: {
  article: Article;
  onClick: () => void;
}) => {
  return (
    <article
      className="relative flex flex-col py-8 pl-8 pr-16 items-start justify-end w-full h-140 bg-cover bg-center bg-no-repeat rounded-xl"
      style={{
        backgroundImage: `url(${article.urlToImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

      <div className="flex z-10 relative flex-col gap-4 items-start justify-end">
        <h1 className="text-5xl leading-[120%] font-libre font-bold text-white">
          {article.title}
        </h1>
        <p className="text-md font-libre font-medium text-white">
          {article.description}
        </p>
        <Button
          onClick={onClick}
          className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full"
        >
          Read More
        </Button>
      </div>
    </article>
  );
};

export default TrendingCard;
