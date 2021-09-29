import Layout from "../components/Layout";
import menu from "../data/menu.json";
import pages from "../data/pages.json";
import MenuItem from "@components/MenuItem";

export default function Menu() {
  const getCategories = () => {
    return menu.reduce(
      (acc, item) => {
        if (item.category.length > 1) {
          acc["Lunch & Dinner"].push(item);
        } else if (item.category[0] === "Lunch") {
          acc["Lunch"].push(item);
        } else {
          acc["Dinner"].push(item);
        }

        return acc;
      },
      { "Lunch & Dinner": [], Lunch: [], Dinner: [] }
    );
  };

  return (
    <Layout>
      <main className="menu-page" key="Menu">
        <h2 className="section-title">{pages.menu.description}</h2>

        {Object.entries(getCategories()).map((category, id) => {
          return (
            <section key={id}>
              <h1>{category[0]}</h1>
              {category[1].map((p, id) => (
                <MenuItem key={id} data={p}></MenuItem>
              ))}
            </section>
          );
        })}
      </main>
    </Layout>
  );
}
