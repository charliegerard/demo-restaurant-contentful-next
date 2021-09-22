import Head from "next/head";

import FeaturedItems from "@components/FeaturedItems";
import Testimonials from "@components/Testimonials";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <FeaturedItems />
        <Testimonials />
      </Layout>
    </div>
  );
}
