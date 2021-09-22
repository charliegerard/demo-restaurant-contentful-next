import Link from "next/link";
import RestaurantInfo from "@components/RestaurantInfo";

export default function Nav() {
  return (
    <nav className="container">
      <RestaurantInfo />
      <section className="nav-links">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/menu">
          <a>Menu</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
      </section>

      <style jsx>{`
        // .container {
        //   height: 10vh;
        //   padding: 1em;
        //   display: flex;
        //   flex-direction: row;
        //   align-items: center;
        //   justify-content: space-between;
        //   border-right: 2px solid black;
        // }

        .container {
          border-right: 1px solid black;
        }

        a {
          display: block;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </nav>
  );
}
