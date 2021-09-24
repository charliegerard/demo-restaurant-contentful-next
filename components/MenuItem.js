import DietIcon from "./DietIcon";
import gallery from "../data/gallery.json";

export default function MenuItem({ data }) {
  const displayCategory = (cat) => {
    if (cat.length > 1) {
      return <h1>{cat.join(" & ")}</h1>;
    }
    return <h1>{cat}</h1>;
  };

  const dietaryOptions = (diets) => {
    return Object.keys(diets)
      .filter((d) => diets[d])
      .map((t) => <DietIcon type={t} />);
  };

  return (
    <section key={data.title}>
      {displayCategory(data.category)}

      <h3 className="menu-item-title">{data.title}</h3>

      <span className="menu-item-price">
        {data.currency}
        {data.price}
      </span>
      <ul className="menu-item-diet">
        <li>{dietaryOptions(data.dietary)}</li>
      </ul>
      <p>{data.description}</p>

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
