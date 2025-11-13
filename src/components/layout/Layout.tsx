import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative h-dvh bg-gray-50 w-full flex flex-col items-start justify-start">
      <Header />
      <main className="flex flex-col items-center justify-start w-full px-45 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
