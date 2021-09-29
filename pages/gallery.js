import Layout from "../components/Layout";
import gallery from "../data/gallery.json";

export default function Gallery() {
  return (
    <Layout>
      <main className="gallery-page" key="Gallery">
        {gallery.map((img, id) => {
          return <img key={id} src={img.imageUrl} alt={img.caption} />;
        })}
      </main>

      <style jsx global>{`
        .gallery-page img {
          width: 50%;
          vertical-align: top;
          display: inline-flex;
        }
      `}</style>
    </Layout>
  );
}
