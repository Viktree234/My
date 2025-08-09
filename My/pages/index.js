import Header from "../components/Header";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabaseClient";
import styles from "../styles/products.module.css"; // ✅ Component-scoped styles

export async function getServerSideProps() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    return { props: { products: [] } };
  }

  return { props: { products } };
}

export default function Home({ products }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          🚀 Featured Products
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-400">
            No products found. Add some in your database.
          </p>
        ) : (
          <div className={styles.grid}>
            {products.map((p) => (
              <div key={p.id} className={styles.card}>
                {p.image_url && (
                  <img src={p.image_url} alt={p.title} />
                )}
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                  <p className={styles.cardDesc}>{p.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className={styles.price}>${p.price}</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}