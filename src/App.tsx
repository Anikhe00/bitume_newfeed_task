import Button from "./components/Button";
import NewsCard from "./components/NewsCard";
import Header from "./components/layout/Header";
import Image from "./assets/uppsala university.jpg";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="h-dvh bg-gray-50 w-full flex flex-col gap-6 items-center justify-start">
      <Header />
      <NewsCard
        title="Tech Giants Unveil New Innovations"
        description="Leading tech companies showcased groundbreaking technologies at a recent conference."
        date="2023-01-01"
        image={Image}
        onClick={() => console.log("Click")}
      />
      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
        Post Comment
      </Button>
      <Footer />
    </div>
  );
};

export default App;
