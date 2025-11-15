import type { Article } from "../interfaces";

const API_KEY = import.meta.env.VITE_API_KEY;
const COUNTRY = "us";

interface FetchArticlesParams {
  category?: string;
  search?: string;
  pageSize?: number;
  page?: number;
}

export const fetchArticles = async ({
  category,
  search,
  pageSize = 20,
  page = 1,
}: FetchArticlesParams = {}): Promise<Article[]> => {
  try {
    let url = "";

    if (search && search.trim() !== "") {
      // Search endpoint
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        search
      )}&language=en&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;
    } else {
      // Top headlines by category
      url = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${
        category || "general"
      }&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;
    }

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error fetching articles: ${res.status}`);
    }

    const data = await res.json();

    if (data.status !== "ok") {
      throw new Error(data.message || "Failed to fetch articles");
    }
    console.log("API KEY in production:", API_KEY);
    console.log("NEWSAPI RAW RESPONSE:", data);
    return data.articles;
  } catch (err: any) {
    console.error(err);
    return [];
  }
};
