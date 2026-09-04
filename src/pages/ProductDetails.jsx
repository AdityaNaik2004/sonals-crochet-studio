import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  MessageCircle,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer";
import CheckoutModal from "../components/CheckoutModal";

import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const {
    addToCart,
    cartCount,
  } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Product not found
  if (!product) {
    return (
      <>
        <Navbar
          cartCount={cartCount}
          onCartClick={() => setCartOpen(true)}
        />

        <main className="product-not-found">
          <div>
            <h1>Product Not Found</h1>

            <p>
              Sorry, we couldn't find the product you're
              looking for.
            </p>

            <Link to="/shop" className="primary-button">
              Back to Shop
            </Link>
          </div>
        </main>

        <CartDrawer
          isOpen={cartOpen}
          setIsOpen={setCartOpen}
          onCheckout={() => {
            setCartOpen(false);
            setCheckoutOpen(true);
          }}
        />

        <CheckoutModal
          isOpen={checkoutOpen}
          onClose={() => setCheckoutOpen(false)}
        />
      </>
    );
  }

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      Math.max(1, current - 1)
    );
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    setCartOpen(true);
  };

  const handleWhatsAppOrder = () => {
    const whatsappNumber = "917507739921";

    const message =
      `Hello Sonal's Crochet Studio! 👋\n\n` +
      `I am interested in ordering:\n\n` +
      `*Product:* ${product.name}\n` +
      `*Category:* ${product.category}\n` +
      `*Quantity:* ${quantity}\n` +
      `*Price:* ₹${product.price}\n` +
      `*Total:* ₹${(
        product.price * quantity
      ).toLocaleString("en-IN")}\n\n` +
      `Please let me know the availability. Thank you! ❤️`;

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      <main className="product-details-page">
        {/* Back */}
        <div className="product-back">
          <Link to="/shop">
            <ArrowLeft size={17} />
            Back to Shop
          </Link>
        </div>

        {/* Product */}
        <section className="product-details">
          {/* Image */}
          <div className="product-details-image">
            {product.featured && (
              <span className="product-details-badge">
                <Sparkles size={14} />
                Bestseller
              </span>
            )}

            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          {/* Information */}
          <div className="product-details-info">
            <span className="product-details-category">
              {product.category}
            </span>

            <div className="product-details-title-row">
              <h1>{product.name}</h1>

              <button
                type="button"
                className={
                  wishlist
                    ? "details-wishlist active"
                    : "details-wishlist"
                }
                onClick={() =>
                  setWishlist((current) => !current)
                }
                aria-label="Add to wishlist"
              >
                <Heart
                  size={21}
                  fill={
                    wishlist ? "currentColor" : "none"
                  }
                />
              </button>
            </div>

            <div className="product-rating">
              <span>★★★★★</span>
              <small> Handmade with love</small>
            </div>

            <div className="product-details-price">
              ₹{product.price.toLocaleString("en-IN")}
            </div>

            <p className="product-details-description">
              {product.description}
            </p>

            {/* Features */}
            <div className="product-features">
              <div>
                <span>🧶</span>
                <p>
                  <strong>Handmade</strong>
                  Carefully crafted by hand
                </p>
              </div>

              <div>
                <span>❤️</span>
                <p>
                  <strong>Made with Love</strong>
                  Created especially for you
                </p>
              </div>

              <div>
                <span>✨</span>
                <p>
                  <strong>Unique</strong>
                  Every piece is special
                </p>
              </div>
            </div>

            {/* Quantity */}
            <div className="details-purchase">
              <div>
                <span className="quantity-label">
                  Quantity
                </span>

                <div className="details-quantity">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                  >
                    <Minus size={15} />
                  </button>

                  <span>{quantity}</span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>

              <div className="details-total">
                <span>Total</span>
                <strong>
                  ₹
                  {(
                    product.price * quantity
                  ).toLocaleString("en-IN")}
                </strong>
              </div>
            </div>

            {/* Buttons */}
            <div className="product-action-buttons">
              <button
                type="button"
                className="details-add-cart"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={19} />
                Add to Cart
              </button>

              <button
                type="button"
                className="details-whatsapp"
                onClick={handleWhatsAppOrder}
              >
                <MessageCircle size={19} />
                Order on WhatsApp
              </button>
            </div>

            <div className="product-delivery-note">
              Handmade products may have slight variations,
              making every piece beautifully unique.
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="related-products">
          <div className="section-heading">
            <span>YOU MAY ALSO LIKE</span>
            <h2>More Handmade Creations</h2>
          </div>

          <div className="related-products-grid">
            {products
              .filter(
                (item) =>
                  item.id !== product.id &&
                  item.category === product.category
              )
              .slice(0, 4)
              .map((item) => (
                <Link
                  to={`/product/${item.id}`}
                  className="related-product-card"
                  key={item.id}
                >
                  <div className="related-product-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div className="related-product-info">
                    <span>{item.category}</span>

                    <h3>{item.name}</h3>

                    <strong>
                      ₹
                      {item.price.toLocaleString("en-IN")}
                    </strong>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>

      {/* Cart */}
      <CartDrawer
        isOpen={cartOpen}
        setIsOpen={setCartOpen}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      {/* Checkout */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </>
  );
}