import Link from "next/link";
import RestaurantInfo from "@components/RestaurantInfo";
import Nav from "@components/Nav";
import gallery from "../data/gallery.json";

const dietsMapping = {
  vegan: "vegan",
  vegetarian: "vegetarian",
  glutenFree: "gluten free",
};

export default function MenuItem({ data }) {
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
    <section key={data.title}>
      {displayCategory(data.category)}

      <p>
        {data.currency}
        {data.price} {data.title}
      </p>
      <p>{data.description}</p>
      <p>{dietaryOptions(data.dietary)}</p>
      {gallery.map((img) => (
        <img key={img.caption} src={img.imageUrl} alt={img.caption} />
      ))}

      <style jsx>{`
        .menu-item-description {
          margin: 0;
        }
        .menu-item-diet {
          display: flex;
          margin: 0;
          padding: 0;
        }
        .menu-item-diet li {
          margin-left: 10px;
          list-style-type: none;
        }
        .menu-item-diet li:first-child {
          margin-left: 15px;
        }
        .menu-item-header {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .menu-item-price {
          margin-left: 15px;
          font-size: 18px;
        }
        .menu-item-title {
          margin: 0;
          font-size: 20px;
        }
      `}</style>
    </section>
  );
}
