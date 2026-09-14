import React, { useState } from 'react';
import { Tag, Sparkles, Copy, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function OffersSection({ onExploreCollection, onOpenConsultation }) {
  const [copiedCode, setCopiedCode] = useState(null);
  const { applyCoupon, setIsCartOpen } = useCart();

  const offers = [
    {
      id: 'off-01',
      tag: 'New Season Privilege',
      title: 'The Autumn Atelier Welcome',
      desc: 'Receive 10% complimentary savings on your maiden handcrafted furniture order.',
      code: 'EMBROLUXE10',
      benefit: '10% Off Entire Order',
      validity: 'Valid across all collections'
    },
    {
      id: 'off-02',
      tag: 'Turnkey Interior Privilege',
      title: 'Full Residence 3D Visualization Package',
      desc: 'Book a complete home interior consultation and receive complimentary 3D photorealistic VR walkthrough ($1,200 value).',
      code: 'INTERIORFREE3D',
      benefit: '100% Free 3D Modeling Deck',
      validity: 'For projects > 1,500 sq.ft'
    },
    {
      id: 'off-03',
      tag: 'Modular Kitchen Upgrade',
      title: 'German Blum Tandem Box Inclusions',
      desc: 'Upgrade all lower drawer carousels to soft-close Legrabox system with lifetime warranty.',
      code: 'BLUMUPGRADE',
      benefit: 'Complimentary Hardware Tier 1',
      validity: 'With every Island or L-Shape plan'
    },
    {
      id: 'off-04',
      tag: 'Curated Suite Privilege',
      title: 'Living & Dining Harmonious Ensemble',
      desc: 'Save 15% when pairing any signature sofa with a natural travertine or marble dining table.',
      code: 'FIRST15',
      benefit: '15% Bundle Privilege',
      validity: 'Applied automatically at checkout'
    }
  ];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    applyCoupon(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section className="section-padding offers-section" id="offers">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-centered text-center">
          <span className="section-label">Curated Privileges</span>
          <h2 className="editorial-heading-2">Exceptional Design. Exceptional Value.</h2>
          <p className="editorial-subheading mx-auto max-w-600">
            Exclusive privileges designed for those investing in enduring heirloom spaces.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="offers-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              
              <div className="offer-top-row">
                <span className="offer-tag">{offer.tag}</span>
                <span className="offer-benefit-pill">{offer.benefit}</span>
              </div>

              <h3 className="offer-title font-serif">{offer.title}</h3>
              <p className="offer-desc">{offer.desc}</p>
              
              <span className="offer-validity">{offer.validity}</span>

              {/* Coupon Copy Box */}
              <div className="coupon-copy-box">
                <div className="coupon-code-text">
                  <Tag size={14} className="text-gold" />
                  <strong>{offer.code}</strong>
                </div>
                <button 
                  className={`copy-code-btn ${copiedCode === offer.code ? 'copied-active' : ''}`}
                  onClick={() => handleCopy(offer.code)}
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check size={14} /> Applied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy & Apply
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="offers-bottom-banner">
          <div>
            <h4 className="font-serif">Looking for Bespoke Architect Pricing?</h4>
            <p>We provide trade privileges for interior designers, architects and real estate developers.</p>
          </div>
          <button className="btn-primary" onClick={onOpenConsultation}>
            Connect with Trade Concierge <ArrowRight size={16} />
          </button>
        </div>

      </div>

      <style>{`
        .offers-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .offers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
        }

        @media (max-width: 860px) {
          .offers-grid {
            grid-template-columns: 1fr;
          }
        }

        .offer-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 2.2rem;
          box-shadow: var(--shadow-subtle);
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-medium);
          position: relative;
        }

        .offer-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-gold);
          box-shadow: var(--shadow-card);
        }

        .offer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .offer-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-gold);
        }

        .offer-benefit-pill {
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-medium);
        }

        .offer-title {
          font-size: 1.45rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .offer-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
          flex: 1;
        }

        .offer-validity {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          display: block;
        }

        .coupon-copy-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-primary);
          border: 1px dashed var(--border-medium);
          padding: 0.65rem 1rem;
          border-radius: var(--radius-sm);
        }

        .coupon-code-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        .copy-code-btn {
          background: var(--bg-dark);
          color: #FFF;
          border: none;
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: all var(--transition-fast);
        }

        .copy-code-btn:hover {
          background: var(--accent-gold);
          color: #111;
        }

        .copied-active {
          background: #2E6F40;
          color: #FFF;
        }

        .offers-bottom-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-dark);
          color: #FFF;
          padding: 2.2rem 2.5rem;
          border-radius: var(--radius-sm);
          margin-top: 3.5rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .offers-bottom-banner h4 {
          font-size: 1.35rem;
          margin-bottom: 0.25rem;
        }

        .offers-bottom-banner p {
          font-size: 0.85rem;
          color: #B5AFA8;
        }
      `}</style>
    </section>
  );
}
