import NavLink from "../components/NavLink";
import NavigationData from "../utils/NavigationList";
import Search from "../components/Search";
import type { NavigationDataProps } from "../interfaces";
import NewsCard from "../components/NewsCard";
import Image from "../assets/uppsala.jpg";
import TrendingCard from "../components/TrendingCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-8 items-start justify-start">
      {/* Search Bar */}
      <Search
        placeholder="Search for news, topics..."
        className="h-13 border border-gray-200 bg-white"
      />

      {/* Tabs */}
      <div className="flex gap-2 items-center justify-start">
        <NavLink to={"/"} tab={true} active={true}>
          All
        </NavLink>
        {NavigationData.map((item: NavigationDataProps) => (
          <NavLink to={item.href} tab={true} active={false}>
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Trending News */}
      <TrendingCard
        title="Breaking: Major Political Event Unfolds"
        description="A major political event is unfolding, with significant changes expected."
        image={Image}
      />

      {/* Recent Articles */}
      <div className="w-full h-auto flex flex-col gap-6 items-start justify-start">
        <h2 className="text-2xl font-libre font-bold text-gray-800">
          Recent Articles
        </h2>

        <div className="grid grid-cols-3 gap-4">
          <Link to={"/article"}>
            <NewsCard
              title="Tech Giants Unveil New Innovations"
              description="Leading tech companies announce new innovations in their respective fields."
              date="Oct 1, 2023"
              image={Image}
            />
          </Link>
          <NewsCard
            title="Global Tech Summit Highlights Cutting-Edge Innovations"
            description="A global tech summit highlights the latest innovations in the industry."
            date="Oct 1, 2023"
            image={Image}
          />
          <NewsCard
            title="AI Revolutionizes Healthcare with Predictive Analytics"
            description="Artificial intelligence is transforming healthcare by enabling predictive analytics for better patient outcomes."
            date="Oct 1, 2023"
            image={Image}
          />
          <NewsCard
            title="Global Tech Summit Highlights Cutting-Edge Innovations"
            description="A global tech summit highlights the latest innovations in the industry."
            date="Oct 1, 2023"
            image={Image}
          />
          <NewsCard
            title="AI Revolutionizes Healthcare with Predictive Analytics"
            description="Artificial intelligence is transforming healthcare by enabling predictive analytics for better patient outcomes."
            date="Oct 1, 2023"
            image={Image}
          />
          <NewsCard
            title="AI Revolutionizes Healthcare with Predictive Analytics"
            description="Artificial intelligence is transforming healthcare by enabling predictive analytics for better patient outcomes."
            date="Oct 1, 2023"
            image={Image}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
