import { useSearchParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { Article } from "../interfaces";
import NewsCard from "../components/NewsCard";
import { fetchArticles } from "../api/fetchArticles";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const {
    data: articles = [],
    isLoading,
    isError,
    refetch,
  } = useQuery<Article[]>({
    queryKey: ["search", query],
    queryFn: () => fetchArticles({ search: query }),
    enabled: query.length >= 3, // only fetch if query >= 3 letters
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="w-full flex flex-col gap-8">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
        Search results for: "{query}"
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
          <p className="text-red-500">Failed to load search results.</p>
          <button
            onClick={() => refetch()}
            className="text-blue-600 underline mt-2"
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && !isError && articles.length === 0 && (
        <p>No results found for "{query}".</p>
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

export default SearchResults;

// import { useSearchParams, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import type { Article } from "../interfaces";
// import NewsCard from "../components/NewsCard";

// const API_KEY = import.meta.env.VITE_API_KEY;

// const SearchResults = () => {
//   const [searchParams] = useSearchParams();
//   const query = searchParams.get("q") || "";

//   const [articles, setArticles] = useState<Article[]>([]);
//   const [loading, setLoading] = useState(false);

//   const fetchSearchResults = async () => {
//     if (query.length < 3) return;

//     setLoading(true);
//     try {
//       const res = await fetch(
//         `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${API_KEY}`
//       );
//       const data = await res.json();
//       setArticles(data.articles || []);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSearchResults();
//   }, [query]);

//   return (
//     <div className="w-full flex flex-col gap-8 items-start">
//       <h1 className="text-lg md:text-xl lg:text-2xl font-libre font-bold">
//         Search results for: "{query}"
//       </h1>

//       {loading && <p>Loading...</p>}

//       {!loading && articles.length === 0 && (
//         <p>No results found for "{query}".</p>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {articles.map((article) => (
//           <Link
//             to={`/article/${encodeURIComponent(article.url)}`}
//             state={{ article, articles }}
//             key={article.url}
//           >
//             <NewsCard article={article} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchResults;
