import { prisma } from '../../lib/db';

export async function getServerSideProps({ params }) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) }
  });
  if (!product) return { notFound: true };
  return { props: { product: JSON.parse(JSON.stringify(product)) } };
}

export default function ProductPage({ product }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-96 object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 mt-2">${(product.priceCents / 100).toFixed(2)}</p>
      <p className="mt-4">{product.description}</p>
      <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}