import Button from "./components/Button";
import NewsCard from "./components/NewsCard";
import Image from "./assets/uppsala university.jpg";

const App = () => {
  return (
    <div className="h-dvh w-full flex flex-col gap-6 items-center justify-center">
      <p className="font-bold text-blue-500">Welcome to Bitume Task</p>
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
    </div>
  );
};

export default App;
