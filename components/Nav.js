import NavItem from "./NavItem";

export default function Nav() {
  return (
    <nav>
      <ul className="main-nav-list">
        <NavItem text="Menu" />
        <NavItem text="Gallery" />
      </ul>
    </nav>
  );
}
