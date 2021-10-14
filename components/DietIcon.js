import { useState, useEffect } from "react";

export default function DietIcon({ type }) {
  const [foodType, setFoodType] = useState();

  useEffect(() => {
    displayType();
  }, [foodType]);

  const displayType = () => {
    switch (type) {
      case "vegetarian":
        setFoodType("V");
        break;
      case "vegan":
        setFoodType("VE");
        break;
      case "pescatarian":
        setFoodType("P");
        break;
      case "glutenFree":
        setFoodType("GF");
        break;
    }
  };

  return (
    <abbr title="Vegetarian" className="diet-icon">
      {foodType}

      <style jsx>{`
        .diet-icon {
          display: inline-flex;
          margin-right: 5px;
        }
      `}</style>
    </abbr>
  );
}
