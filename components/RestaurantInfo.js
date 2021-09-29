import info from "../data/info.json";

export default function RestaurantInfo() {
  return (
    <section>
      <h1>{info.name}</h1>
      <section className="details">
        <p>Address: {info.contact.streetAddress.join(" ")}</p>
        <p>Hours: </p>
        {info.hours.map((h) => (
          <ul key={`hour-${h}`}>
            <li>{h}</li>
          </ul>
        ))}
        <p>Contact: {info.contact.phone}</p>
      </section>
    </section>
  );
}
