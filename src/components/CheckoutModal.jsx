import { useState } from "react";
import {
  X,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "../context/CartContext";

export default function CheckoutModal({
  isOpen,
  onClose,
}) {
  const { cart, cartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      return;
    }

    setIsSubmitting(true);

    let orderMessage =
      `Hello Sonal's Crochet Studio! 👋\n\n` +
      `I would like to place an order.\n\n`;

    orderMessage += `*ORDER DETAILS*\n`;

    cart.forEach((item) => {
      orderMessage +=
        `• ${item.name} × ${item.quantity} = ₹` +
        `${(
          item.price * item.quantity
        ).toLocaleString("en-IN")}\n`;
    });

    orderMessage +=
      `\n*Total: ₹${cartTotal.toLocaleString(
        "en-IN"
      )}*\n\n`;

    orderMessage += `*CUSTOMER DETAILS*\n`;
    orderMessage += `Name: ${formData.name}\n`;
    orderMessage += `Phone: ${formData.phone}\n`;
    orderMessage += `Address: ${formData.address}\n`;
    orderMessage += `City: ${formData.city}\n`;
    orderMessage += `Pincode: ${formData.pincode}\n`;

    if (formData.notes.trim()) {
      orderMessage += `Notes: ${formData.notes}\n`;
    }

    orderMessage +=
      `\nPlease confirm the availability and order details. Thank you! ❤️`;

    /*
      IMPORTANT:
      Replace the number below with Sonal's actual
      WhatsApp business number.

      Example:
      const whatsappNumber = "917507739921";
    */

    const whatsappNumber = "91 7507739921";

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(orderMessage);

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      onClose();

      setFormData({
        name: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
        notes: "",
      });
    }, 500);
  };

  return (
    <div
      className="checkout-overlay"
      onClick={onClose}
    >
      <div
        className="checkout-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="checkout-header">
          <div>
            <span className="checkout-eyebrow">
              FINAL STEP
            </span>

            <h2>Complete Your Order</h2>

            <p>
              Enter your details and we'll continue the
              order through WhatsApp.
            </p>
          </div>

          <button
            type="button"
            className="checkout-close"
            onClick={onClose}
            aria-label="Close checkout"
          >
            <X size={21} />
          </button>
        </div>

        {/* Order Summary */}
        <div className="checkout-summary">
          <div className="checkout-summary-title">
            <ShoppingBag size={18} />
            <span>Order Summary</span>
          </div>

          <div className="checkout-summary-items">
            {cart.map((item) => (
              <div
                className="checkout-summary-item"
                key={item.id}
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <strong>
                  ₹
                  {(
                    item.price * item.quantity
                  ).toLocaleString("en-IN")}
                </strong>
              </div>
            ))}
          </div>

          <div className="checkout-summary-total">
            <span>Total</span>

            <strong>
              ₹{cartTotal.toLocaleString("en-IN")}
            </strong>
          </div>
        </div>

        {/* Form */}
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                Full Name *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number *
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">
              Delivery Address *
            </label>

            <textarea
              id="address"
              name="address"
              rows="3"
              placeholder="House/Flat No., Street, Area"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">
                City *
              </label>

              <input
                id="city"
                name="city"
                type="text"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="pincode">
                Pincode *
              </label>

              <input
                id="pincode"
                name="pincode"
                type="text"
                inputMode="numeric"
                maxLength="6"
                placeholder="6-digit pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes">
              Order Notes
            </label>

            <textarea
              id="notes"
              name="notes"
              rows="2"
              placeholder="Any colour, size or customization request?"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          {/* WhatsApp Button */}
          <button
            type="submit"
            className="whatsapp-checkout-button"
            disabled={isSubmitting || cart.length === 0}
          >
            <MessageCircle size={20} />

            {isSubmitting
              ? "Opening WhatsApp..."
              : "Place Order on WhatsApp"}
          </button>

          <p className="checkout-disclaimer">
            Your order will open in WhatsApp for final
            confirmation. No online payment is processed
            on this website.
          </p>
        </form>
      </div>
    </div>
  );
}