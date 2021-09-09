import Link from "next/link";

export default function Nav() {
  return (
    <nav className="container">
      <section className="left-block">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/menu">
          <a>Menu</a>
        </Link>
      </section>

      <section className="right-block">
        <Link href="/">
          <a>Testimonials</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/order-now">
          <a>Order now</a>
        </Link>
      </section>

      <style jsx>{`
        .container {
          height: 10vh;
          padding: 1em;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .left-block,
        .right-block {
          width: fit-content;
          display: inline-flex;
        }

        a {
          margin-right: 1em;
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
