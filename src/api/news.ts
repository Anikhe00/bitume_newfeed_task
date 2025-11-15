import type { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchArticles } from "../api/fetchArticles";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { category, search } = req.query;

  try {
    const articles = await fetchArticles({
      category: category as string,
      search: search as string,
    });
    res.status(200).json({ articles });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
