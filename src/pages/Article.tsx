import ArticleContent from "../components/ArticleContent";
import Stat from "../components/Stat";
import { TiHeartOutline } from "react-icons/ti";
import { BiComment } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { LuShare2 } from "react-icons/lu";
import ArticleCard from "../components/ArticleCard";
import { useLocation } from "react-router-dom";
import type { Article } from "../interfaces";

const Article = () => {
  const location = useLocation();
  const article = location.state?.article as Article | null;
  const articles = location.state?.articles as Article[] | null;

  const otherArticles = articles?.filter((a) => a.url !== article?.url) || [];

  let relatedArticles = otherArticles.filter(
    (a) =>
      a.source?.name?.toLowerCase() === article?.source?.name?.toLowerCase()
  );

  if (relatedArticles.length === 0 && article?.source?.name) {
    relatedArticles = otherArticles.filter(
      (a) =>
        a.source?.name?.toLowerCase() === article?.source?.name?.toLowerCase()
    );
  }

  // 4. If still no match, fallback to any 2 articles
  if (relatedArticles.length === 0) {
    relatedArticles = otherArticles.slice(0, 2);
  } else {
    relatedArticles = relatedArticles.slice(0, 2);
  }

  return (
    <div className="w-full h-auto flex flex-col gap-8 items-start justify-start">
      {article && <ArticleContent article={article} />}

      {/* Stats */}
      <div className="w-full flex flex-row py-4 border-t border-b border-gray-200 gap-4 items-center justify-center">
        <Stat value="1.2k" icon={TiHeartOutline} />
        <Stat value="34" icon={BiComment} />
        <Stat value="Save" icon={FiBookmark} />
        <Stat value="Share" icon={LuShare2} />
      </div>

      {/* Related Articles */}
      {article && (
        <div className="w-full h-auto flex flex-col gap-8 items-start justify-start">
          <h2 className="text-2xl font-libre font-bold text-gray-800">
            Related Articles
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {relatedArticles.map((a) => (
              <ArticleCard article={a} key={a.url} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
