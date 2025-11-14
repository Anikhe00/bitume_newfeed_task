import type { ArticleContentProps } from "../interfaces";

const ArticleContent = ({
  category,
  title,
  author,
  published_date,
  image,
  content,
}: ArticleContentProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-8 items-center justify-start">
      {/* Article Title */}
      <div className="w-full flex flex-col gap-4 items-start justify-start">
        <div className="w-full text-sm font-libre text-gray-500 flex flex-row gap-2 items-center justify-start">
          <span>News</span>
          <span>/</span>
          <span>{category}</span>
        </div>
        <h1 className="text-6xl leading-[110%] font-libre font-bold text-gray-800">
          {title}
        </h1>
        <p className="text-gray-600 font-libre text-sm font-medium">
          By {author} Published on {published_date}
        </p>
      </div>

      {/* Article Image */}
      <div className="w-full h-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-120 object-cover rounded-lg"
        />
      </div>

      {/* Article Content */}
      <div>
        <p className="text-sm leading-[160%] font-libre text-gray-600">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ArticleContent;
