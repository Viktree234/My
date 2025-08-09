

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.image_url && <img src={product.image_url} alt={product.title} />}
      <div className="product-card-content">
        <div className="product-title">{product.title}</div>
        <div className="product-price">${product.price}</div>
      </div>
    </div>
  );
}