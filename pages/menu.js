import Head from "next/head";
import Nav from "@components/Nav";
import menu from "../data/menu.json";

export default function Menu() {
  return (
    <div className="container">
      <Head>
        <title>Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className="menu">
          {menu.map((p) => {
            return p.category.map((category) => {
              return (
                <section>
                  <h3>{category}</h3>
                  <p>
                    {p.currency}
                    {p.price}
                  </p>
                  <p>{p.title}</p>
                  <p>{p.description}</p>
                </section>
              );
            });
          })}
        </div>
      </main>
    </div>
  );
}
