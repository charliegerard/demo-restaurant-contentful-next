import Head from "next/head";
import Nav from "@components/Nav";
import menu from "../data/menu.json";

const dietsMapping = {
  vegan: "vegan",
  vegetarian: "vegetarian",
  glutenFree: "gluten free",
};

export default function Menu() {
  const displayCategory = (cat) => {
    if (cat.length > 1) {
      return <h1>{cat.join(" & ")}</h1>;
    }
    return <h1>{cat}</h1>;
  };

  const dietaryOptions = (diets) => {
    const dietOptions = Object.entries(diets).reduce((acc, item) => {
      if (item[1]) {
        acc.push(item[0]);
      }
      return acc;
    }, []);

    return dietOptions.map((d) => dietsMapping[d]).join(" ");
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
                <h2>{p.title}</h2>
                <p>
                  {p.currency}
                  {p.price}
                </p>
                <p>{p.description}</p>
                <p>{dietaryOptions(p.dietary)}</p>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
