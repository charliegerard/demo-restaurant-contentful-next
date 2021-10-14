import FeaturedItems from "@components/FeaturedItems";
import Testimonials from "@components/Testimonials";

import pages from "../data/pages.json";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <FeaturedItems
        title={pages.home.body}
        subtitle={pages.home.description}
      />
      <Testimonials />
    </Layout>
  );
}
