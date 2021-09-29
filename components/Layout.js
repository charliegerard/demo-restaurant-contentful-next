import Sidebar from "@components/Sidebar";
import Head from "next/head";
import "../node_modules/contentfull-belly-styles/styles.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{children.length ? children[0].key : children.key}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="home-grid">
        <Sidebar />

        <main className="content-container">{children}</main>

        <style jsx global>{`
          :root {
            --sansSerif: "Quicksand", "Segoe UI", Candara, "DejaVu Sans",
              "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref",
              sans-serif;
          }
          *,
          html,
          body {
            box-sizing: border-box;
          }
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: "Quicksand";
          }
          .content-container {
            height: 100vh;
            overflow-y: auto;
          }
        `}</style>
      </main>
    </>
  );
}
