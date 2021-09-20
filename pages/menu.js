import Head from "next/head";
import Nav from "@components/Nav";
import menu from "../data/menu.json";

export default function Menu() {
  const displayCategory = (cat) => {
    if (cat.length > 1) {
      return <h3>{cat.join(" & ")}</h3>;
    }
    return <h3>{cat}</h3>;
  };
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
            return (
              <section key={p.title}>
                {displayCategory(p.category)}

                <p>
                  {p.currency}
                  {p.price}
                </p>
                <p>{p.title}</p>
                <p>{p.description}</p>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
