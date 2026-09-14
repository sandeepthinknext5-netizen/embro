import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, CreditCard, Landmark, QrCode, Sparkles, Truck, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cartItems, total, subtotal, discountAmount, shipping, couponCode, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Order Confirmation
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderId, setOrderId] = useState('');

  const [addressData, setAddressData] = useState({
    firstName: 'Siddharth',
    lastName: 'Singhania',
    phone: '+91 98201 44890',
    email: 'siddharth@example.com',
    address: 'Flat 1402, Signature Towers, Worli Seaface',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400018',
    deliverySlot: 'Standard White Glove (10-12 Days)'
  });

  if (!isCheckoutOpen) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedId = `EMB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep(3);
    clearCart();
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsCheckoutOpen(false)}>
      <div className="checkout-modal-box animate-fade" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="checkout-header">
          <div className="checkout-brand-title">
            <span className="brand-wordmark">EMBROSHYAL</span>
            <span className="checkout-secure-tag"><Lock size={12} /> 256-Bit Encrypted Checkout</span>
          </div>
          {step !== 3 && (
            <button className="checkout-close" onClick={() => setIsCheckoutOpen(false)}>
              <X size={22} />
            </button>
          )}
        </div>

        {/* Step Indicator */}
        {step !== 3 && (
          <div className="checkout-steps-bar">
            <div className={`checkout-step-node ${step >= 1 ? 'step-active' : ''}`}>
              <span className="step-num">1</span>
              <span className="step-text">Delivery Address</span>
            </div>
            <div className="step-connector"></div>
            <div className={`checkout-step-node ${step >= 2 ? 'step-active' : ''}`}>
              <span className="step-num">2</span>
              <span className="step-text">Payment & EMI</span>
            </div>
          </div>
        )}

        {/* Step 1: Shipping Address */}
        {step === 1 && (
          <form className="checkout-form-body" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            <h3 className="checkout-section-title font-serif">1. Delivery & Placement Details</h3>
            
            <div className="checkout-grid-2">
              <div className="form-group">
                <label>First Name *</label>
                <input 
                  type="text" 
                  required 
                  value={addressData.firstName}
                  onChange={(e) => setAddressData({ ...addressData, firstName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input 
                  type="text" 
                  required 
                  value={addressData.lastName}
                  onChange={(e) => setAddressData({ ...addressData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="checkout-grid-2">
              <div className="form-group">
                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  value={addressData.phone}
                  onChange={(e) => setAddressData({ ...addressData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  required 
                  value={addressData.email}
                  onChange={(e) => setAddressData({ ...addressData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Street Address / Apartment *</label>
              <input 
                type="text" 
                required 
                value={addressData.address}
                onChange={(e) => setAddressData({ ...addressData, address: e.target.value })}
              />
            </div>

            <div className="checkout-grid-3">
              <div className="form-group">
                <label>City *</label>
                <input 
                  type="text" 
                  required 
                  value={addressData.city}
                  onChange={(e) => setAddressData({ ...addressData, city: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>State *</label>
                <input 
                  type="text" 
                  required 
                  value={addressData.state}
                  onChange={(e) => setAddressData({ ...addressData, state: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Pincode *</label>
                <input 
                  type="text" 
                  required 
                  value={addressData.pincode}
                  onChange={(e) => setAddressData({ ...addressData, pincode: e.target.value })}
                />
              </div>
            </div>

            <div className="order-mini-summary">
              <div className="summary-row">
                <span>Items Total ({cartItems.length} pieces):</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="summary-row">
                <span>White-Glove Delivery & Installation:</span>
                <span className="text-gold">COMPLIMENTARY</span>
              </div>
            </div>

            <button type="submit" className="btn-gold w-full mt-3">
              Continue to Payment & EMI →
            </button>
          </form>
        )}

        {/* Step 2: Payment Gateway */}
        {step === 2 && (
          <form className="checkout-form-body" onSubmit={handlePlaceOrder}>
            <h3 className="checkout-section-title font-serif">2. Select Payment Method</h3>

            {/* Payment Method Selector */}
            <div className="payment-methods-grid">
              <div 
                className={`payment-method-card ${paymentMethod === 'card' ? 'payment-active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard size={20} />
                <strong>Credit / Debit Card</strong>
                <small>Visa, Mastercard, Amex</small>
              </div>

              <div 
                className={`payment-method-card ${paymentMethod === 'emi' ? 'payment-active' : ''}`}
                onClick={() => setPaymentMethod('emi')}
              >
                <Sparkles size={20} className="text-gold" />
                <strong>No-Cost 0% EMI</strong>
                <small>HDFC, ICICI, Axis Bank</small>
              </div>

              <div 
                className={`payment-method-card ${paymentMethod === 'upi' ? 'payment-active' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <QrCode size={20} />
                <strong>UPI & Instant QR</strong>
                <small>GPay, PhonePe, Paytm</small>
              </div>

              <div 
                className={`payment-method-card ${paymentMethod === 'netbanking' ? 'payment-active' : ''}`}
                onClick={() => setPaymentMethod('netbanking')}
              >
                <Landmark size={20} />
                <strong>Net Banking</strong>
                <small>50+ Indian Banks</small>
              </div>
            </div>

            {/* Payment Input Fields */}
            {paymentMethod === 'card' && (
              <div className="card-input-box animate-fade">
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" defaultValue="4242 •••• •••• 9102" />
                </div>
                <div className="checkout-grid-2">
                  <div className="form-group">
                    <label>Expiry (MM/YY)</label>
                    <input type="text" defaultValue="08/29" />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="password" defaultValue="894" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'emi' && (
              <div className="emi-calculator-box animate-fade">
                <p>Select your preferred 0% No-Cost EMI tenure:</p>
                <div className="emi-tenure-pills">
                  <label className="emi-pill active-emi-pill">
                    <input type="radio" name="emi" defaultChecked />
                    <div>
                      <strong>3 Months No-Cost EMI</strong>
                      <span>{formatPrice(Math.round(total / 3))}/mo</span>
                    </div>
                  </label>
                  <label className="emi-pill">
                    <input type="radio" name="emi" />
                    <div>
                      <strong>6 Months No-Cost EMI</strong>
                      <span>{formatPrice(Math.round(total / 6))}/mo</span>
                    </div>
                  </label>
                  <label className="emi-pill">
                    <input type="radio" name="emi" />
                    <div>
                      <strong>12 Months Low-Interest EMI</strong>
                      <span>{formatPrice(Math.round((total * 1.05) / 12))}/mo</span>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Total summary */}
            <div className="order-final-box">
              <div className="summary-row">
                <span>Total Payable Amount:</span>
                <strong className="final-price-tag font-serif">{formatPrice(total)}</strong>
              </div>
            </div>

            <div className="checkout-btn-group">
              <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
                ← Back to Address
              </button>
              <button type="submit" className="btn-gold flex-1">
                Authorize & Place Order • {formatPrice(total)}
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Order Confirmation */}
        {step === 3 && (
          <div className="order-confirmation-pane animate-fade">
            <div className="confirmation-icon">
              <CheckCircle2 size={44} />
            </div>

            <span className="order-tag">Order Confirmed</span>
            <h2 className="confirmation-title font-serif">Thank You for Investing in Embroshyal</h2>
            <p className="confirmation-id-text">Order Reference: <strong>#{orderId}</strong></p>

            <div className="confirmation-card">
              <div className="conf-row">
                <span>Shipping To:</span>
                <strong>{addressData.firstName} {addressData.lastName}</strong>
              </div>
              <div className="conf-row">
                <span>Address:</span>
                <span>{addressData.address}, {addressData.city}, {addressData.state} - {addressData.pincode}</span>
              </div>
              <div className="conf-row">
                <span>Estimated Delivery:</span>
                <strong className="text-gold">Within 10–12 Business Days</strong>
              </div>
              <div className="conf-row">
                <span>Includes:</span>
                <span>White-Glove Room Placement & Installation</span>
              </div>
            </div>

            <p className="conf-note">
              A comprehensive dispatch receipt, warranty passport and order tracking link has been sent to <strong>{addressData.email}</strong>.
            </p>

            <button 
              className="btn-primary mt-4"
              onClick={() => setIsCheckoutOpen(false)}
            >
              Return to Flagship Store
            </button>
          </div>
        )}

      </div>

      <style>{`
        .checkout-modal-box {
          background: var(--bg-card);
          width: 90%;
          max-width: 680px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: var(--radius-sm);
          padding: 2.5rem;
          position: relative;
          box-shadow: var(--shadow-dark);
        }

        @media (max-width: 600px) {
          .checkout-modal-box {
            padding: 1.5rem;
          }
        }

        .checkout-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 1.5rem;
        }

        .checkout-secure-tag {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          color: #2E6F40;
          font-weight: 600;
          margin-top: 0.2rem;
        }

        .checkout-close {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
        }

        .checkout-steps-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .checkout-step-node {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.5;
        }

        .checkout-step-node.step-active {
          opacity: 1;
        }

        .step-num {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-dark);
          color: #FFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .step-text {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .step-connector {
          width: 40px;
          height: 1px;
          background: var(--border-medium);
          margin: 0 1rem;
        }

        .checkout-section-title {
          font-size: 1.4rem;
          margin-bottom: 1.25rem;
        }

        .checkout-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .checkout-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        @media (max-width: 540px) {
          .checkout-grid-2, .checkout-grid-3 {
            grid-template-columns: 1fr;
          }
        }

        .order-mini-summary {
          background: var(--bg-secondary);
          padding: 1.2rem;
          border-radius: var(--radius-sm);
          margin: 1.5rem 0;
          font-size: 0.85rem;
        }

        .payment-methods-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 500px) {
          .payment-methods-grid {
            grid-template-columns: 1fr;
          }
        }

        .payment-method-card {
          border: 1px solid var(--border-medium);
          background: var(--bg-primary);
          padding: 1rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          transition: all var(--transition-fast);
        }

        .payment-active {
          border-color: var(--accent-gold);
          background: #FFF;
          box-shadow: 0 2px 10px rgba(194, 155, 56, 0.2);
        }

        .card-input-box, .emi-calculator-box {
          background: var(--bg-primary);
          padding: 1.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          margin-bottom: 1.5rem;
        }

        .emi-tenure-pills {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }

        .emi-pill {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.85rem;
          background: #FFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          cursor: pointer;
        }

        .active-emi-pill {
          border-color: var(--accent-gold);
        }

        .order-final-box {
          padding: 1rem 0;
          border-top: 1px solid var(--border-light);
          margin-bottom: 1.5rem;
        }

        .final-price-tag {
          font-size: 1.5rem;
          color: var(--accent-gold);
        }

        .checkout-btn-group {
          display: flex;
          gap: 1rem;
        }

        .order-confirmation-pane {
          text-align: center;
          padding: 2rem 0;
        }

        .confirmation-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(46, 111, 64, 0.15);
          color: #2E6F40;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
        }

        .order-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #2E6F40;
        }

        .confirmation-title {
          font-size: 1.8rem;
          margin: 0.35rem 0 0.5rem;
        }

        .confirmation-id-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .confirmation-card {
          background: var(--bg-secondary);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          text-align: left;
          font-size: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
        }

        .conf-row {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
        }

        .conf-note {
          font-size: 0.8rem;
          color: var(--text-secondary);
          max-width: 480px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
