import Head from "next/head";
import Layout from "../components/Layout";
import menu from "../data/menu.json";
import gallery from "../data/gallery.json";
import pages from "../data/pages.json";
import MenuItem from "@components/MenuItem";

export default function Menu() {
  return (
    <Layout>
      <main className="menu-page">
        <Head>
          <title>Menu</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <h1>Menu</h1>

        <h2 className="section-title">{pages.menu.description}</h2>
        <div className="menu">
          {menu.map((p) => (
            <MenuItem data={p}></MenuItem>
          ))}
        </div>

        <style jsx>{`
          .menu-page {
            margin: 80px;
          }
          .section-title {
            margin: 0;
            margin-bottom: 30px;
            font-size: 40px;
            font-weight: bold;
            text-transform: uppercase;
          }
          .section-title::after {
            content: "";
            display: block;
            width: 150px;
            height: 10px;
            margin-top: 20px;
            margin-left: 1px;
            background-color: #c83030;
          }
        `}</style>
      </main>
    </Layout>
  );
}
