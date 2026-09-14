import React, { useState } from 'react';
import { Search, Package, Truck, RotateCcw, ShieldCheck, Phone, CheckCircle } from 'lucide-react';
import FAQSection from '../components/FAQSection';

export default function FAQPage({ onNavigate, onOpenConsultation }) {
  const [trackId, setTrackId] = useState('');
  const [trackResult, setTrackResult] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackId.trim()) {
      setTrackResult({
        id: trackId.toUpperCase(),
        status: 'In Transit • White-Glove Dispatch',
        milestone: 'Dispatched from Central Atelier Fabrication Center',
        estDelivery: 'Within 4 business days',
        courier: 'Embroshyal Dedicated Climate-Controlled Fleet',
        destination: 'Worli, Mumbai'
      });
    }
  };

  return (
    <div className="page-wrapper animate-fade">
      
      {/* Banner */}
      <div className="faq-page-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Help Centre & Order Tracking</span>
          </div>
          <span className="section-label text-gold">Customer Care & Support</span>
          <h1 className="editorial-heading-1 text-white">How Can We Assist You?</h1>
          <p className="faq-page-sub">
            Track your delivery, learn about our 10-year warranty policies, request home measurements or speak directly with our concierge.
          </p>
        </div>
      </div>

      {/* Live Order Tracking Tool */}
      <div className="container pt-5">
        <div className="order-tracking-tool-card">
          <div className="track-header">
            <Package size={22} className="text-gold" />
            <h3 className="font-serif">Track Your Active Furniture Order</h3>
          </div>
          <p className="track-desc">Enter your 8-character order reference number (e.g. EMB-849201) to view real-time dispatch milestones.</p>

          <form className="track-form-row" onSubmit={handleTrack}>
            <input 
              type="text"
              placeholder="Enter Order Reference (e.g. EMB-849201)..."
              value={trackId}
              onChange={(e) => setTrackId(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">
              Track Order
            </button>
          </form>

          {trackResult && (
            <div className="track-result-box animate-fade">
              <div className="track-status-pill">
                <CheckCircle size={15} /> {trackResult.status}
              </div>
              <div className="track-info-grid">
                <div>
                  <small>Order Ref:</small>
                  <strong>{trackResult.id}</strong>
                </div>
                <div>
                  <small>Current Milestone:</small>
                  <span>{trackResult.milestone}</span>
                </div>
                <div>
                  <small>Estimated Arrival:</small>
                  <strong className="text-gold">{trackResult.estDelivery}</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FAQ Accordion Component */}
      <FAQSection onOpenConsultation={onOpenConsultation} />

      <style>{`
        .faq-page-hero {
          background: linear-gradient(to right, rgba(22, 20, 18, 0.94), rgba(22, 20, 18, 0.75)), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          padding: 6rem 0 5rem;
          color: #FFF;
        }

        .faq-page-sub {
          font-size: 1.15rem;
          color: #D5CEC6;
          max-width: 700px;
          margin-top: 1rem;
          line-height: 1.7;
        }

        .pt-5 {
          padding-top: 4rem;
        }

        .order-tracking-tool-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          padding: 2.5rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-subtle);
          max-width: 860px;
          margin: 0 auto;
        }

        .track-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.35rem;
        }

        .track-header h3 {
          font-size: 1.5rem;
        }

        .track-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .track-form-row {
          display: flex;
          gap: 0.75rem;
        }

        @media (max-width: 600px) {
          .track-form-row {
            flex-direction: column;
          }
        }

        .track-form-row input {
          flex: 1;
          padding: 0.85rem 1.2rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
        }

        .track-result-box {
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-medium);
        }

        .track-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #EAF5ED;
          color: #2E6F40;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .track-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          font-size: 0.85rem;
        }

        @media (max-width: 600px) {
          .track-info-grid {
            grid-template-columns: 1fr;
          }
        }

        .track-info-grid small {
          display: block;
          color: var(--text-muted);
          font-size: 0.72rem;
          margin-bottom: 0.15rem;
        }
      `}</style>
    </div>
  );
}
