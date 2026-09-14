import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ onExploreFurniture }) {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    shipping,
    total,
    freeShippingThreshold,
    couponCode,
    couponMessage,
    applyCoupon,
    setIsCheckoutOpen
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponError, setCouponError] = useState('');

  if (!isCartOpen) return null;

  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    if (!res.success) {
      setCouponError(res.message);
    }
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsCartOpen(false)}>
      <div className="drawer-container cart-drawer animate-fade" onClick={(e) => e.stopPropagation()}>
        
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <ShoppingBag size={20} className="text-gold" />
            <h3 className="font-serif">Your Shopping Bag ({cartItems.length})</h3>
          </div>
          <button className="drawer-close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="shipping-progress-panel">
          {remainingForFreeShipping === 0 ? (
            <div className="shipping-unlocked-msg">
              <Sparkles size={14} className="text-gold" />
              <span>Congratulations! You've unlocked <strong>Free White-Glove Shipping</strong>.</span>
            </div>
          ) : (
            <div className="shipping-progress-msg">
              <span>Add <strong>{formatPrice(remainingForFreeShipping)}</strong> more to enjoy Free White-Glove Shipping!</span>
            </div>
          )}
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${freeShippingProgress}%` }}></div>
          </div>
        </div>

        {/* Cart Item List */}
        <div className="cart-items-scroll">
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <div key={`${item.id}-${item.selectedFinish}-${idx}`} className="cart-item-card">
                <div className="cart-item-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-item-info">
                  <div className="flex-between">
                    <h4 className="cart-item-name font-serif">{item.name}</h4>
                    <button 
                      className="cart-remove-btn" 
                      onClick={() => removeFromCart(item.id, item.selectedFinish)}
                      title="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <span className="cart-item-finish">Finish: {item.selectedFinish}</span>
                  <span className="cart-item-price">{formatPrice(item.price)}</span>

                  <div className="cart-qty-row">
                    <div className="cart-counter">
                      <button onClick={() => updateQuantity(item.id, item.selectedFinish, -1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.selectedFinish, 1)}>+</button>
                    </div>

                    <span className="cart-item-subtotal">
                      Subtotal: <strong>{formatPrice(item.price * item.quantity)}</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="cart-empty-state">
              <ShoppingBag size={48} className="empty-cart-icon" />
              <h4 className="font-serif">Your shopping bag is currently empty</h4>
              <p>Explore our timeless furniture collections and interior suites.</p>
              <button 
                className="btn-primary mt-3"
                onClick={() => {
                  setIsCartOpen(false);
                  onExploreFurniture();
                }}
              >
                Explore Collection
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer Summary */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            
            {/* Promo Code Box */}
            <form className="cart-promo-form" onSubmit={handleApplyCoupon}>
              <Tag size={15} className="promo-icon" />
              <input 
                type="text" 
                placeholder="Privilege code (e.g. EMBROLUXE10)"
                value={inputCoupon}
                onChange={(e) => setInputCoupon(e.target.value)}
              />
              <button type="submit">Apply</button>
            </form>

            {couponMessage && <div className="coupon-success-tag">✓ {couponMessage}</div>}
            {couponError && <div className="coupon-error-tag">⚠ {couponError}</div>}

            {/* Calculations Breakdown */}
            <div className="cart-summary-breakdown">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="summary-row discount-row">
                  <span>Privilege Discount ({couponCode}):</span>
                  <span>−{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="summary-row">
                <span>White-Glove Shipping & Placement:</span>
                <span>{shipping === 0 ? <strong className="text-gold">FREE</strong> : formatPrice(shipping)}</span>
              </div>
              <div className="summary-row total-row">
                <strong>Grand Total:</strong>
                <strong className="final-total-amount">{formatPrice(total)}</strong>
              </div>
            </div>

            <button 
              className="btn-gold w-full checkout-action-btn"
              onClick={handleProceedCheckout}
            >
              Proceed to Secure Checkout <ArrowRight size={16} />
            </button>

            <div className="cart-security-badge">
              <ShieldCheck size={14} /> 256-Bit Encrypted Secure Checkout
            </div>

          </div>
        )}

      </div>

      <style>{`
        .cart-drawer {
          display: flex;
          flex-direction: column;
        }

        .cart-drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-light);
        }

        .cart-header-title {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .cart-header-title h3 {
          font-size: 1.35rem;
        }

        .drawer-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
        }

        .shipping-progress-panel {
          padding: 1rem 1.5rem;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-light);
        }

        .shipping-progress-msg, .shipping-unlocked-msg {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .shipping-unlocked-msg {
          color: #2E6F40;
          font-weight: 600;
        }

        .progress-bar-track {
          width: 100%;
          height: 6px;
          background: var(--border-medium);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: var(--accent-gold);
          transition: width 0.4s ease;
        }

        .cart-items-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cart-item-card {
          display: flex;
          gap: 1rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-light);
        }

        .cart-item-img {
          width: 85px;
          height: 85px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: #F0ECE4;
          flex-shrink: 0;
        }

        .cart-item-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cart-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cart-item-name {
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .cart-remove-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }

        .cart-remove-btn:hover {
          color: var(--accent-clay);
        }

        .cart-item-finish {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
        }

        .cart-item-price {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .cart-qty-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.65rem;
        }

        .cart-counter {
          display: flex;
          align-items: center;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
        }

        .cart-counter button {
          background: none;
          border: none;
          padding: 0.2rem 0.6rem;
          cursor: pointer;
        }

        .cart-counter span {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0 0.3rem;
        }

        .cart-item-subtotal {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .cart-empty-state {
          text-align: center;
          padding: 4rem 1rem;
          color: var(--text-secondary);
        }

        .empty-cart-icon {
          color: var(--border-medium);
          margin-bottom: 1rem;
        }

        .cart-drawer-footer {
          padding: 1.5rem;
          background: var(--bg-card);
          border-top: 1px solid var(--border-light);
        }

        .cart-promo-form {
          display: flex;
          align-items: center;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          padding: 0.3rem 0.6rem;
          background: var(--bg-primary);
          margin-bottom: 0.65rem;
        }

        .promo-icon {
          color: var(--accent-gold);
          margin-right: 0.5rem;
        }

        .cart-promo-form input {
          flex: 1;
          border: none;
          background: none;
          font-size: 0.8rem;
        }

        .cart-promo-form input:focus {
          outline: none;
        }

        .cart-promo-form button {
          background: var(--bg-dark);
          color: #FFF;
          border: none;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
        }

        .coupon-success-tag {
          font-size: 0.75rem;
          color: #2E6F40;
          margin-bottom: 0.75rem;
        }

        .coupon-error-tag {
          font-size: 0.75rem;
          color: var(--accent-clay);
          margin-bottom: 0.75rem;
        }

        .cart-summary-breakdown {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
        }

        .discount-row {
          color: #2E6F40;
        }

        .total-row {
          padding-top: 0.65rem;
          border-top: 1px solid var(--border-light);
          font-size: 1.15rem;
          color: var(--text-primary);
        }

        .final-total-amount {
          color: var(--accent-gold);
          font-size: 1.25rem;
        }

        .checkout-action-btn {
          font-size: 0.88rem;
        }

        .cart-security-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 0.75rem;
        }
      `}</style>
    </div>
  );
}
