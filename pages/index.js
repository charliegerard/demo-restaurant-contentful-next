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
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <FeaturedItems />
        <Testimonials />
      </Layout>
    </div>
  );
}
