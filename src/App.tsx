import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import SearchResults from "./pages/SearchPage";

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
        path="/article/:slug"
        element={
          <Layout>
            <ArticlePage />
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <SearchResults />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
