import type { NewsCardProps } from "../interfaces";

const NewsCard = ({
  title,
  description,
  date,
  image,
  onClick,
}: NewsCardProps) => {
  return (
    <article
      className="w-full h-auto flex flex-col gap-3 cursor-pointer"
      onClick={onClick}
    >
      <img className="w-full h-60 object-cover rounded-md" src={image} alt="" />
      <div className="flex flex-col gap-2">
        <p className="text-base font-libre font-bold text-gray-800">{title}</p>
        <p className="text-sm font-libre truncate line-clamp-2 text-gray-500">
          {description}
        </p>
        <p className="text-xs font-libre text-gray-400">{date}</p>
      </div>
    </article>
  );
};

export default NewsCard;
