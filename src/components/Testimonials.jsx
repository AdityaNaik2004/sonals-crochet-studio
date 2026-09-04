const testimonials = [
  {
    name: "Priya",
    text: "The crochet work is absolutely beautiful. You can really see the love and effort in every piece.",
  },
  {
    name: "Sneha",
    text: "I ordered a custom design and it came out even better than I imagined. Highly recommended!",
  },
  {
    name: "Riya",
    text: "Beautiful handmade products and perfect for gifting.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">

      <div className="section-heading">

        <span>LOVE FROM OUR CUSTOMERS</span>

        <h2>
          Made With Love,
          <br />
          Loved By You
        </h2>

      </div>

      <div className="testimonial-grid">

        {testimonials.map((review, index) => (
          <div className="testimonial-card" key={index}>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "{review.text}"
            </p>

            <strong>
              — {review.name}
            </strong>

          </div>
        ))}

      </div>

    </section>
  );
}