import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

import { useCart } from "../context/CartContext";

export default function CartDrawer({
  isOpen,
  setIsOpen,
  onCheckout,
}) {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="cart-overlay"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside className="cart-drawer">
        {/* Header */}
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={22} />

            <div>
              <h2>Your Cart</h2>
              <span>
                {cart.length}{" "}
                {cart.length === 1 ? "item" : "items"}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="cart-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Cart Content */}
        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">
                <ShoppingBag size={38} />
              </div>

              <h3>Your cart is empty</h3>

              <p>
                Looks like you haven't added anything yet.
              </p>

              <button
                type="button"
                className="primary-button"
                onClick={() => setIsOpen(false)}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  {/* Image */}
                  <div className="cart-item-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  {/* Details */}
                  <div className="cart-item-details">
                    <div className="cart-item-top">
                      <div>
                        <h3>{item.name}</h3>

                        <span className="cart-item-category">
                          {item.category}
                        </span>
                      </div>

                      <button
                        type="button"
                        className="remove-item"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>

                    <div className="cart-item-bottom">
                      <div className="quantity-control">
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <strong>
                        ₹
                        {(
                          item.price * item.quantity
                        ).toLocaleString("en-IN")}
                      </strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>

              <strong>
                ₹{cartTotal.toLocaleString("en-IN")}
              </strong>
            </div>

            <p className="cart-note">
              Handmade with love • Final order will be
              confirmed on WhatsApp.
            </p>

            <button
              type="button"
              className="checkout-button"
              onClick={onCheckout}
            >
              Continue to Checkout
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="continue-shopping"
              onClick={() => setIsOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}