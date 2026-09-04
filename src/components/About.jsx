export default function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-image">

       <img
             src="/images/banner-2.png"
             alt="Handmade crochet creations"
         />

      </div>

      <div className="about-content">

        <span className="section-label">
          OUR STORY
        </span>

        <h2>
          Handmade With
          <br />
          <span>Love & Patience</span>
        </h2>

        <p>
          Every piece at Sonal's Crochet Studio is carefully
          handcrafted with love, patience and attention to detail.
        </p>

        <p>
          From cute little gifts to beautiful home decorations,
          our creations are made to bring warmth, colour and
          happiness into your everyday life.
        </p>

        <div className="about-stats">

          <div>
            <strong>100%</strong>
            <span>Handmade</span>
          </div>

          <div>
            <strong>♥</strong>
            <span>Made With Love</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Custom Designs</span>
          </div>

        </div>

      </div>

    </section>
  );
}