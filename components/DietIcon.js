export default function DietIcon({ type }) {
  const displayType = () => {
    let abbr;
    switch (type) {
      case "vegetarian":
        abbr = "V";
        break;
      case "vegan":
        abbr = "VE";
        break;
      case "pescatarian":
        abbr = "P";
        break;
      case "glutenFree":
        abbr = "GF";
        break;
    }
    return (
      <abbr title="Vegetarian" className="diet-icon">
        {abbr}
      </abbr>
    );
  };

  return (
    <>
      {displayType()}

      <style jsx>{`
        .diet-icon {
          width: 32px;
          height: 32px;
          border: 1px solid #222;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
