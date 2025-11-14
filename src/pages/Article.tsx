import ArticleContent from "../components/ArticleContent";
import Image from "../assets/uppsala.jpg";
import Stat from "../components/Stat";
import { TiHeartOutline } from "react-icons/ti";
import { BiComment } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { LuShare2 } from "react-icons/lu";
import ArticleCard from "../components/ArticleCard";

const Article = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-8 items-start justify-start">
      <ArticleContent
        category="Technology"
        title="Tech Giants Unveil New Innovations at Annual Conference"
        author="Amelia Harper"
        published_date="July 26, 2024"
        image={Image}
        content="Lund University’s Master’s Programme in Bioinformatics stands out for its interdisciplinary curriculum that integrates biology, computer science, and statistics. I am particularly drawn to the opportunity to work with cutting-edge research groups in molecular evolution and computational genomics, which align closely with my career goal of contributing to research in health informatics and computational biology in Africa."
      />

      {/* Stats */}
      <div className="w-full flex flex-row py-4 border-t border-b border-gray-200 gap-4 items-center justify-center">
        <Stat value="1.2k" icon={TiHeartOutline} />
        <Stat value="34" icon={BiComment} />
        <Stat value="Save" icon={FiBookmark} />
        <Stat value="Share" icon={LuShare2} />
      </div>

      {/* Related Articles */}
      <div className="w-full h-auto flex flex-col gap-8 items-start justify-start">
        <h2 className="text-2xl font-libre font-bold text-gray-800">
          Related Articles
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <ArticleCard
            image={Image}
            title="Tech Giants Unveil New Innovations at Annual Conference"
            description="Lund University’s Master’s Programme in Bioinformatics stands out for its interdisciplinary curriculum that integrates biology, computer science, and statistics."
            category="Technology"
          />
          <ArticleCard
            image={Image}
            title="Tech Giants Unveil New Innovations at Annual Conference"
            description="Lund University’s Master’s Programme in Bioinformatics stands out for its interdisciplinary curriculum that integrates biology, computer science, and statistics."
            category="Health"
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
