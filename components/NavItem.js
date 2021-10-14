import Link from "next/link";

export default function NavItem({ text }) {
  return (
    <li className="nav-item">
      <Link href={`/${text.toLowerCase()}`}>
        <a className="nav-item-link">
          <img src={`/${text.toLowerCase()}-icon.svg`} alt={text} />
          <span>{text}</span>
        </a>
      </Link>
    </li>
  );
}
