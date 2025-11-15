import CategoryFilter from "../components/CategoryFilter";
import Search from "../components/Search";
import NewsCard from "../components/NewsCard";
import TrendingCard from "../components/TrendingCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const COUNTRY = "us";

interface Article {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}

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
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("general");
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async (search?: string, cat?: string) => {
    setLoading(true);
    setError(null);
    try {
      let url = "";

      if (search) {
        url = `https://newsapi.org/v2/everything?q=${search}&language=en&apiKey=${API_KEY}`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${
          cat || category
        }&apiKey=${API_KEY}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (data.status !== "ok")
        throw new Error(data.message || "Failed to fetch");

      setArticles(data.articles);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const handleSearch = (value: string) => {
    setQuery(value);
    fetchNews(value, category);
  };

  // Find the first article with an image for TrendingCard
  const trendingArticle = articles.find((article) => article.urlToImage);

  // All remaining articles excluding the trending one
  const newsArticles = articles.filter(
    (article) => article !== trendingArticle
  );
  return (
    <div className="w-full h-auto flex flex-col gap-6 md:gap-8 lg:gap-8 items-start justify-start">
      {/* Search Bar */}
      <Search
        placeholder="Search for news, topics..."
        className="h-12 md:h-12 lg:h-13 border border-gray-200 bg-white"
        onSearch={handleSearch}
      />

      {/* Tabs */}
      <CategoryFilter
        categories={categories}
        value={category}
        onChange={setCategory}
      />

      <>
        {loading ? (
          <p className="h-dvh text-gray-500 font-libre text-sm">Loading...</p>
        ) : error ? (
          <p className="h-dvh text-red-500 font-libre text-sm">{error}</p>
        ) : articles.length === 0 ? (
          <p className="h-dvh text-gray-500 font-libre text-sm">
            No articles found.
          </p>
        ) : (
          <>
            {/* Trending News */}
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

              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                {newsArticles.map((article, index) => (
                  <Link
                    to={`/article/${encodeURIComponent(article.url)}`}
                    state={{ article, articles }}
                    key={article.url}
                  >
                    <NewsCard key={index} article={article} />
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Home;
