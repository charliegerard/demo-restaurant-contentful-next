import Link from "next/link";

export default function NavItem({ text }) {
  return (
    <>
      <Link href={`/${text.toLowerCase()}`} className="nav-item">
        <a className="nav-item-link">
          <img src={`/${text.toLowerCase()}-icon.svg`} alt={text} />
          <span>{text}</span>
        </a>
      </Link>

      <style jsx>{`
        .nav-item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
          list-style-type: none;
          border-top: 1px solid #222;
        }
        .nav-item:last-child {
          border-bottom: 1px solid #222;
        }
        .nav-item-link {
          display: grid;
          justify-items: center;
          grid-template-rows: 40px auto;
          grid-row-gap: 5px;
          font-weight: bold;
          text-decoration: none;
          color: #222;
        }
      `}</style>
    </>
  );
}
