import Link from "next/link";
import RestaurantInfo from "@components/RestaurantInfo";
import Nav from "@components/Nav";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="/logo.svg" alt="" />
      <Nav />
      <footer className="main-footer">
        <p className="built-with-text">Built with Next.js and Netlify</p>
      </footer>
      <style jsx>{`
        .sidebar {
          display: grid;
          align-items: center;
          grid-template-rows: 200px 1fr 75px;
        }
        .main-footer {
          align-self: end;
        }
      `}</style>
    </aside>
  );
}
