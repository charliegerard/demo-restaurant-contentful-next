import Link from "next/link";
import RestaurantInfo from "@components/RestaurantInfo";
import Nav from "@components/Nav";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="/logo.svg" alt="" />
      <Nav />
      <footer className="main-footer">
        <p className="built-with-text">Built with Vue 3 and Netlify</p>
      </footer>
    </aside>
  );
}
