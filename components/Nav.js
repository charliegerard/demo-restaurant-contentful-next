import Link from "next/link";
import RestaurantInfo from "@components/RestaurantInfo";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <nav>
      {/* <RestaurantInfo /> */}
      <ul className="main-nav-list">
        <NavItem text="Menu" />
        <NavItem text="About" />
        <NavItem text="Gallery" />
      </ul>

      <style jsx>{`
        .main-nav-list {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </nav>
  );
}
