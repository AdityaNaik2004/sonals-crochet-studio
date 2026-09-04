import { useState } from "react";
import { Search, ShoppingBag, X } from "lucide-react";

import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import CartDrawer from "../components/CartDrawer";
import CheckoutModal from "../components/CheckoutModal";

import { products, categories } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const { addToCart, cartCount } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartOpen(true);
  };

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      <main className="shop-page">
        {/* Shop Header */}
        <section className="shop-header">
          <div className="shop-header-content">
            <span className="section-eyebrow">OUR COLLECTION</span>

            <h1>Shop Handmade Crochet</h1>

            <p>
              Discover beautiful handmade crochet creations, crafted
              carefully with love and attention to detail.
            </p>
          </div>
        </section>

        {/* Shop Controls */}
        <section className="shop-controls">
          {/* Search */}
          <div className="shop-search">
            <Search size={19} />

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {searchTerm && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearchTerm("")}
              >
                <X size={17} />
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="shop-categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  selectedCategory === category
                    ? "category-filter active"
                    : "category-filter"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="shop-products">
          <div className="shop-products-top">
            <div>
              <span className="products-count">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </span>

              {selectedCategory !== "All" && (
                <span className="active-filter">
                  {" "}
                  in {selectedCategory}
                </span>
              )}
            </div>

            <button
              type="button"
              className="mobile-cart-button"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={18} />
              Cart ({cartCount})
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          ) : (
            <div className="no-products">
              <div className="no-products-icon">
                <Search size={32} />
              </div>

              <h2>No products found</h2>

              <p>
                We couldn't find anything matching your search.
              </p>

              <button
                type="button"
                className="primary-button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                View All Products
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Cart Drawer */}
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