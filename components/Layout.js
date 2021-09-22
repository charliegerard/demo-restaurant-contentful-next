import Nav from "@components/Nav";
export default function Layout({ children }) {
  return (
    <main className="app">
      <Nav />
      <main>{children}</main>
      {/* <Footer /> */}

      <style jsx>{`
        .app {
          display: grid;
          min-height: 100%;
          grid-template-columns: 30% 70%;
        }
      `}</style>
    </main>
  );
}
