import { MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  const whatsappNumber = "917507739921";

  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Sonal's Crochet Studio</h2>

          <p>
            Handmade crochet creations crafted
            with love, patience and creativity.
          </p>

          <div className="socials">

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>

          </div>
        </div>

        {/* Shop */}
        <div>
          <h3>Shop</h3>

          <a href="/shop">All Products</a>
          <a href="/shop">Home Decor</a>
          <a href="/shop">Gifts</a>
          <a href="/shop">Accessories</a>
        </div>

        {/* Help */}
        <div>
          <h3>Help</h3>

          <a href="#custom">Custom Orders</a>
          <a href="#contact">Contact Us</a>
          <a href="#about">Our Story</a>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact</h3>

          <p>📱 +91 75077 39921</p>

          <p>💬 WhatsApp us for orders</p>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Sonal's Crochet Studio
        </p>

        <p>
          Handmade with
          <Heart size={14} fill="currentColor" />
          love
        </p>

      </div>
    </footer>
  );
}