import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-violet-500/30 selection:text-white">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;