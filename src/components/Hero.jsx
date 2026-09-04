import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-decoration decoration-one">
        ✿
      </div>

      <div className="hero-decoration decoration-two">
        ❀
      </div>

      <div className="hero-content">

        <div className="hero-text">

          <div className="small-label">
            ✨ HANDMADE WITH LOVE ✨
          </div>

          <h1>
            Little Things
            <br />
            <span>Made With Love</span>
          </h1>

          <p>
            Beautiful handmade crochet creations crafted
            specially for your home, loved ones and special moments.
          </p>

          <div className="hero-buttons">

            <Link to="/shop" className="primary-button">
              Explore Collection
              <ArrowRight size={18} />
            </Link>

            <a href="#custom" className="secondary-button">
              Custom Orders
            </a>

          </div>

          <div className="hero-features">

            <div>
              <Heart size={19} />
              <span>Handmade</span>
            </div>

            <div>
              <span>🧶</span>
              <span>Made With Care</span>
            </div>

            <div>
              <span>🎁</span>
              <span>Perfect Gifts</span>
            </div>

          </div>

        </div>

        <div className="hero-image-wrapper">

          <div className="hero-card">

            <img
                src="/images/banner-1.png"
                alt="Sonal's Crochet Studio handmade products"
             />

          </div>

          <div className="floating-card">
            <span>🌸</span>
            <div>
              <strong>100%</strong>
              <small>Handmade</small>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}