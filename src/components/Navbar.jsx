import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Menu,
  X,
  Search,
} from "lucide-react";
import { useState } from "react";

export default function Navbar({
  cartCount = 0,
  onCartClick,
}) {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <header className="navbar">

      <div className="navbar-inner">

        <Link to="/" className="brand">

          <div className="brand-icon">
            🧶
          </div>

          <div>
            <h2>Sonal's</h2>
            <span>CROCHET STUDIO</span>
          </div>

        </Link>

        <nav
          className={
            menuOpen
              ? "nav-links mobile-open"
              : "nav-links"
          }
        >

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>

          <a
            href="/#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="/#custom"
            onClick={() => setMenuOpen(false)}
          >
            Custom Orders
          </a>

          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

        </nav>

        <div className="nav-actions">

          <button className="icon-button">
            <Search size={20} />
          </button>

          <button
            className="cart-button"
            onClick={onCartClick}
          >

            <ShoppingBag size={21} />

            {cartCount > 0 && (
              <span>
                {cartCount}
              </span>
            )}

          </button>

          <button
            className="menu-button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? (
              <X />
            ) : (
              <Menu />
            )}
          </button>

        </div>

      </div>

    </header>
  );
}