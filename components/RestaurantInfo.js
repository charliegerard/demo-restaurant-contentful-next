import Link from "next/link";
import info from "../data/info.json";

export default function RestaurantInfo() {
  return (
    <section>
      <h1>{info.name}</h1>
      <img src="https://s.inyourpocket.com/gallery/helsinki/2019/11/shutterstock-1306257490.jpg" />
      <section className="details">
        <p>Address: {info.contact.streetAddress.join(" ")}</p>
        <p>
          Hours:{" "}
          {info.hours.map((h) => (
            <ul>
              <li>{h}</li>
            </ul>
          ))}
        </p>
        <p>Contact: {info.contact.phone}</p>
        <Link href="/menu">
          <a>See our menu</a>
        </Link>
      </section>

      <style jsx>{`
        h1 {
          position: absolute;
          color: white;
          width: 50%;
          display: block;
          margin: 0 auto;
          text-align: center;
        }

        section {
          display: flex;
          border-top: 1px solid grey;
          border-bottom: 1px solid grey;
        }

        img {
          width: 50%;
        }

        .details {
          width: 50%;
          padding-left: 1em;
          flex-direction: column;
          justify-content: center;
          align-items: start;
        }

        .details a {
          border: 2px solid purple;
          padding: 0.5em 1em;
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
}
