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
        <p className="built-with-text">Built with Next.js and Netlify</p>
      </footer>

      <style jsx global>{`
        .sidebar img {
          cursor: pointer;
        }

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
