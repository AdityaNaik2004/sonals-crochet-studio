import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductGrid from "../components/ProductGrid";
import About from "../components/About";
import CustomOrders from "../components/CustomOrders";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";
import CheckoutModal from "../components/CheckoutModal";

import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Home() {
  // Global cart
  const {
    cart,
    addToCart,
    cartCount,
  } = useCart();

  // Cart drawer
  const [cartOpen, setCartOpen] = useState(false);

  // Checkout modal
  const [checkoutOpen, setCheckoutOpen] =
    useState(false);

  // Featured products
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  // Add product to cart
  const handleAddToCart = (product) => {
    addToCart(product);

    // Automatically open cart
    setCartOpen(true);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      {/* ================= MAIN CONTENT ================= */}

      <main>

        {/* HERO */}

        <Hero />

        {/* CATEGORIES */}

        <CategorySection />

        {/* FEATURED PRODUCTS */}

        <section className="featured-section">

          <div className="section-heading">

            <span>
              OUR FAVOURITES
            </span>

            <h2>
              Handmade Bestsellers
            </h2>

            <p>
              Some of our most-loved crochet
              creations, carefully handmade with love.
            </p>

          </div>

          <ProductGrid
            products={featuredProducts}
            onAddToCart={handleAddToCart}
          />

          <div className="center-button">

            <Link
              to="/shop"
              className="secondary-button"
            >
              View All Products
            </Link>

          </div>

        </section>

        {/* ABOUT */}

        <About />

        {/* CUSTOM ORDERS */}

        <CustomOrders />

        {/* TESTIMONIALS */}

        <Testimonials />

      </main>

      {/* ================= FOOTER ================= */}

      <Footer />

      {/* ================= CART DRAWER ================= */}

      <CartDrawer
        isOpen={cartOpen}
        setIsOpen={setCartOpen}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      {/* ================= CHECKOUT MODAL ================= */}

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() =>
          setCheckoutOpen(false)
        }
      />
    </>
  );
}