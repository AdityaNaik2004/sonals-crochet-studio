import { Heart, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">

      <div className="product-image">

        {product.featured && (
          <span className="product-badge">
            Bestseller
          </span>
        )}

        <button className="wishlist">
          <Heart size={18} />
        </button>

        <img
          src={product.image}
          alt={product.name}
        />

        <Link
          to={`/product/${product.id}`}
          className="quick-view"
        >
          <ArrowUpRight size={18} />
          View
        </Link>

      </div>

      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <div className="product-bottom">

          <strong>
            ₹{product.price}
          </strong>

          <button
            onClick={() => onAddToCart(product)}
            className="add-button"
          >
            <ShoppingBag size={17} />
            Add
          </button>

        </div>

      </div>

    </article>
  );
}