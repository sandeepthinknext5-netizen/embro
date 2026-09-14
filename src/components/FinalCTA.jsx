import React from 'react';
import { ArrowRight, Sparkles, Phone, Compass } from 'lucide-react';

export default function FinalCTA({ onOpenConsultation, onExploreFurniture }) {
  return (
    <section className="final-cta-section">
      <div className="final-cta-bg">
        <div className="final-cta-overlay"></div>
      </div>

      <div className="container final-cta-container text-center">
        <div className="final-badge mx-auto">
          <Sparkles size={14} className="text-gold" />
          <span>Your Dream Sanctuary Awaits</span>
        </div>

        <h2 className="editorial-heading-1 final-headline">
          <span className="final-headline-inline">Let's Create Something Beautiful.</span>
        </h2>

        <p className="final-subtext mx-auto">
          Whether you're furnishing a single room or creating your dream forever home, Embroshyal brings together world-class design, precision planning and master craftsmanship to bring your vision to life.
        </p>

        <div className="final-cta-buttons-row">
          <button className="btn-gold" onClick={onOpenConsultation}>
            Book a Free Consultation <ArrowRight size={16} />
          </button>
          <button className="btn-secondary-light" onClick={onExploreFurniture}>
            Explore Furniture Catalog
          </button>
        </div>

        <div className="final-contact-bar">
          <span>Or schedule a visit at any of our flagship experience galleries across Mumbai, Delhi, Bengaluru & Hyderabad.</span>
        </div>
      </div>

      <style>{`
        .final-cta-section {
          position: relative;
          padding: 8rem 0;
          background-color: var(--bg-dark);
          color: #FFF;
          overflow: hidden;
          border-bottom: 2px solid var(--accent-gold, #C29B38);
        }

        @media (max-width: 768px) {
          .final-cta-section {
            padding: 5rem 0;
          }
        }

        .final-cta-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85');
          background-size: cover;
          background-position: center;
        }

        .final-cta-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(18, 15, 13, 0.88);
          backdrop-filter: blur(4px);
        }

        .final-cta-container {
          position: relative;
          z-index: 2;
          max-width: 840px;
        }

        .final-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          padding: 0.35rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #FFF;
          margin-bottom: 1.5rem;
        }

        .final-headline {
          color: #FFF;
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }

        .final-headline-inline {
          display: inline-block;
          white-space: nowrap;
          padding-bottom: 0.65rem;
          border-bottom: 2px solid var(--accent-gold, #C29B38);
        }

        @media (max-width: 640px) {
          .final-headline-inline {
            white-space: normal;
          }
        }

        .final-subtext {
          font-size: 1.15rem;
          font-weight: 300;
          line-height: 1.7;
          color: #E2DDD5;
          margin-bottom: 2.75rem;
        }

        .final-cta-buttons-row {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .final-contact-bar {
          margin-top: 3.5rem;
          padding-top: 1.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 0.82rem;
          color: #B5AFA8;
        }
      `}</style>
    </section>
  );
}
