import Link from "next/link";
import Nav from "@components/Nav";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link href="/">
        <img src="/logo.svg" alt="Restaurant logo" />
      </Link>

      <Nav />
      <footer className="main-footer">
        <p className="main-footer-text">
          Repo:{" "}
          <a href="https://github.com/charliegerard/demo-restaurant-contentful-next">
            GitHub
          </a>
        </p>
        <p className="main-footer-text">
          Built with <a href="https://nextjs.org/">Next.js</a> and{" "}
          <a href="https://www.netlify.com">Netlify</a>
        </p>
      </footer>

      <style jsx global>{`
        .sidebar {
          font-size: 14px;
        }

        .main-footer {
          text-align: center;
        }
      `}</style>
    </aside>
  );
}
