import { Navbar } from "../Navbar";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="w-full">
        <Navbar />
      </header>

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
