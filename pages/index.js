import Head from "next/head";

import RestaurantInfo from "@components/RestaurantInfo";
import Nav from "@components/Nav";
import FeaturedItems from "@components/FeaturedItems";
import Testimonials from "@components/Testimonials";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <RestaurantInfo />
        <FeaturedItems />
        <Testimonials />
      </main>
    </div>
  );
}
