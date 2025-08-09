// components/Layout.js
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
      <Footer />
    </>
  );
}