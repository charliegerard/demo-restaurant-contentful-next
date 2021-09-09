import Link from "next/link";

export default function RestaurantInfo() {
  return (
    <section>
      <img src="https://s.inyourpocket.com/gallery/helsinki/2019/11/shutterstock-1306257490.jpg" />
      <section className="details">
        <p>Address</p>
        <p>Hours</p>
        <p>Contact</p>
        <Link href="/menu">
          <a>See our menu</a>
        </Link>
      </section>

      <style jsx>{`
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
