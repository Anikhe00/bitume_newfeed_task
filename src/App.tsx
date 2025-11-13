import Button from "./components/Button";

const App = () => {
  return (
    <div className="h-dvh w-full flex flex-col gap-6 items-center justify-center">
      <p className="font-bold text-blue-500">Welcome to Bitume Task</p>
      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
        Post Comment
      </Button>
    </div>
  );
};

export default App;
