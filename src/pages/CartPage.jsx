import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Trash2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './CartPage.css';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalAmount } = useCart();
  const [checkoutStep, setCheckoutStep] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="cart-page section text-center">
        <div className="container max-w-600 card p-5">
          <div className="order-success-icon"><CheckCircle2 size={48} /></div>
          <h2>Order Received!</h2>
          <p className="mt-2 text-muted">
            Thank you for your order with POM Agency. Our account provisioning team is setting up your hosting environment.
          </p>
          <Link to="/my_account" className="btn btn-primary mt-4">
            Go to My Account Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page section">
      <div className="container">
        <div className="badge"><ShoppingBag size={14} /> SHOPPING CART</div>
        <h1 className="section-title text-left">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="card text-center empty-cart-box p-5">
            <ShoppingBag size={48} className="empty-icon" />
            <h3>Your cart is currently empty.</h3>
            <p className="text-muted mt-2">Explore our professional email and tech service packages.</p>
            <Link to="/mail-professional" className="btn btn-primary mt-4">
              Return to Shop <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid-cart">
            <div className="cart-items-container">
              {cart.map((item) => (
                <div key={item.id} className="card cart-item-card">
                  <div className="cart-item-main">
                    {item.image && (
                      <div className="cart-item-thumb-box">
                        <img src={item.image} alt={item.title} className="cart-item-thumb" />
                      </div>
                    )}
                    <div className="item-info">
                      <h3>{item.title}</h3>
                      <span className="item-price">{item.price} EGP / Month</span>
                    </div>
                  </div>
                  <div className="item-controls">
                    <div className="quantity-selector">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <span className="item-total font-weight-bold">
                      {(item.price * item.quantity).toFixed(2)} EGP
                    </span>
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="remove-btn"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary-box card">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{totalAmount.toFixed(2)} EGP</span>
              </div>
              <div className="summary-row">
                <span>Tax / VAT</span>
                <span>Included</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>{totalAmount.toFixed(2)} EGP</span>
              </div>

              {!checkoutStep ? (
                <button 
                  onClick={() => setCheckoutStep(true)} 
                  className="btn btn-primary full-width mt-4"
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </button>
              ) : (
                <form onSubmit={handleCheckoutSubmit} className="checkout-form mt-4">
                  <h4>Billing & Domain Details</h4>
                  <div className="form-group">
                    <input type="text" placeholder="Full Name *" required className="form-input" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Business Email *" required className="form-input" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Desired Domain (e.g. brand.com)" required className="form-input" />
                  </div>
                  <button type="submit" className="btn btn-primary full-width mt-2">
                    Complete Order Now
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
