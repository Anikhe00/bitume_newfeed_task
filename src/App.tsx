import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Article from "./pages/Article";

import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/article"
        element={
          <Layout>
            <Article />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
