import FeaturedItems from "@components/FeaturedItems";
import Testimonials from "@components/Testimonials";
import RestaurantInfo from "@components/RestaurantInfo";

import pages from "../data/pages.json";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="menu-page" key="Home">
        <RestaurantInfo />
        <FeaturedItems />
        <Testimonials />
      </div>
    </Layout>
  );
}
