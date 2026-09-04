import { MessageCircle, Sparkles } from "lucide-react";

export default function CustomOrders() {

  const whatsappNumber = "917507739921";

  const message =
    "Hello Sonal's Crochet Studio! I would like to enquire about a custom crochet order.";

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="custom-section" id="custom">

      <div className="custom-inner">

        <div className="custom-content">

          <span className="section-label">
            MADE JUST FOR YOU
          </span>

          <h2>
            Have Something
            <br />
            <span>Special In Mind?</span>
          </h2>

          <p>
            Tell us what you have in mind and we'll create
            a beautiful handmade crochet piece specially for you.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-button"
          >
            <MessageCircle size={21} />
            Discuss Your Order
          </a>

        </div>

        <div className="custom-art">

          <div className="yarn-ball">
            🧶
          </div>

          <Sparkles className="sparkle sparkle-1" />
          <Sparkles className="sparkle sparkle-2" />

          <div className="custom-circle">
            Handmade
            <br />
            With Love
          </div>

        </div>

      </div>

    </section>
  );
}