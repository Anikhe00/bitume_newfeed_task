import CategoryFilter from "../components/CategoryFilter";
import Search from "../components/Search";
import NewsCard from "../components/NewsCard";
import TrendingCard from "../components/TrendingCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "../api/fetchArticles";
import type { Article } from "../interfaces";

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const Home = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("general");

  // Fetch articles with React Query
  const {
    data: articles = [],
    isLoading,
    isError,
    refetch,
  } = useQuery<Article[]>({
    queryKey: ["articles", category, query],
    queryFn: () => fetchArticles({ category, search: query }),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });

  // Trending article (first with image)
  const trendingArticle = articles.find((a) => a.urlToImage);
  const newsArticles = articles.filter((a) => a !== trendingArticle);

  const handleSearch = (value: string) => {
    setQuery(value);
    refetch();
  };

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-8">
      <Search
        placeholder="Search for news, topics..."
        className="h-12 md:h-12 lg:h-13 border border-gray-200 bg-white"
        onSearch={handleSearch}
      />

      <CategoryFilter
        categories={categories}
        value={category}
        onChange={setCategory}
      />

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
        <p className="text-gray-500">No articles found.</p>
      )}

      {!isLoading && !isError && articles.length > 0 && (
        <>
          {/* Trending Article */}
          <Link
            to={`/article/${encodeURIComponent(
              trendingArticle?.url || articles[0].url
            )}`}
            state={{ article: trendingArticle || articles[0], articles }}
          >
            <TrendingCard
              article={trendingArticle || articles[0]}
              onClick={() => {}}
            />
          </Link>

          {/* Recent Articles */}
          <div className="w-full h-auto flex flex-col gap-6 items-start justify-start">
            <h2 className="lg:text-2xl md:text-xl text-lg font-libre font-bold text-gray-800">
              Recent Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <Link
                  key={article.url}
                  to={`/article/${encodeURIComponent(article.url)}`}
                  state={{ article, articles }}
                >
                  <NewsCard article={article} />
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
