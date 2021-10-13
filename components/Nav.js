import NavItem from "./NavItem";
import RestaurantInfo from "@components/RestaurantInfo";

export default function Nav() {
  return (
    <nav>
      <RestaurantInfo />
      <ul className="main-nav-list">
        <NavItem text="Menu" />
        <NavItem text="Gallery" />
      </ul>
    </nav>
  );
}
