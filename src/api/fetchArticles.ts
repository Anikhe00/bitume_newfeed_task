import type { Article } from "../interfaces";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gnews.io/api/v4";

interface FetchArticlesParams {
  category?: string;
  search?: string;
  pageSize?: number;
  page?: number;
}

export const fetchArticles = async ({
  category,
  search,
  pageSize = 40,
  page = 1,
}: FetchArticlesParams = {}): Promise<Article[]> => {
  try {
    let url = "";

    if (search && search.trim() !== "") {
      // Search endpoint
      url = `${BASE_URL}/search?q=${encodeURIComponent(
        search
      )}&lang=en&max=${pageSize}&page=${page}&apikey=${API_KEY}`;
    } else {
      // Top headlines by category
      url = `${BASE_URL}/top-headlines?category=${
        category || "general"
      }&lang=en&max=${pageSize}&page=${page}&apikey=${API_KEY}`;
    }

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error fetching articles: ${res.status}`);
    }

    const data = await res.json();

    if (!data.articles || !Array.isArray(data.articles)) {
      throw new Error("No articles returned from API");
    }

    // Map GNews articles to your Article type if needed
    return data.articles.map((a: any) => ({
      source: { id: null, name: a.source.name },
      author: null,
      title: a.title,
      description: a.description,
      url: a.url,
      urlToImage: a.image,
      publishedAt: a.publishedAt,
      content: a.content,
    }));
  } catch (err: any) {
    console.error(err);
    return [];
  }
};
