import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import type { Article } from "../interfaces";
import { fetchArticles } from "../api/fetchArticles";
import NewsCard from "../components/NewsCard";

const Category = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const formattedCategory =
    categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1) || "General";

  const {
    data: articles = [],
    isLoading,
    isError,
    refetch,
  } = useQuery<Article[]>({
    queryKey: ["category", categoryName],
    queryFn: () =>
      fetchArticles({
        category: (categoryName || "general").toLowerCase(),
      }),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-8">
      <h1 className="text-3xl font-libre font-bold text-gray-800 capitalize">
        {formattedCategory} News
      </h1>

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="h-60 bg-gray-200 animate-pulse rounded-lg"
            />
          ))}
        </div>
      )}

      {isError && (
        <div>
          <p className="text-red-500">Failed to load articles.</p>
          <button
            onClick={() => refetch()}
            className="text-blue-600 underline mt-2"
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && !isError && articles.length === 0 && (
        <p>No articles found in {formattedCategory} category.</p>
      )}

      {!isLoading && !isError && articles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.url}
              to={`/article/${encodeURIComponent(article.url)}`}
              state={{ article, articles }}
            >
              <NewsCard article={article} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
