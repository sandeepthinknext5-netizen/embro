import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Phone, Compass, Ruler, Home, Calendar } from 'lucide-react';
import ModularKitchens from '../components/ModularKitchens';
import Wardrobes from '../components/Wardrobes';
import BeforeAfter from '../components/BeforeAfter';

export default function InteriorsPage({ onOpenConsultation, onNavigate }) {
  const [bhkType, setBhkType] = useState('3BHK');
  const [finishTier, setFinishTier] = useState('Premium Luxury');

  const pricingEstimates = {
    '2BHK': { 'Standard Contemporary': '₹12L – ₹16L', 'Premium Luxury': '₹18L – ₹24L', 'Atelier Bespoke': '₹28L+' },
    '3BHK': { 'Standard Contemporary': '₹16L – ₹22L', 'Premium Luxury': '₹24L – ₹34L', 'Atelier Bespoke': '₹40L+' },
    '4BHK / Villa': { 'Standard Contemporary': '₹24L – ₹32L', 'Premium Luxury': '₹36L – ₹52L', 'Atelier Bespoke': '₹65L+' }
  };

  const currentEstimate = pricingEstimates[bhkType]?.[finishTier] || '₹24L – ₹34L';

  return (
    <div className="page-wrapper animate-fade">
      
      {/* Hero Banner */}
      <div className="interiors-page-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Turnkey Interiors</span>
          </div>
          <span className="section-label text-gold">Turnkey Architectural Interior Design</span>
          <h1 className="editorial-heading-1 text-white">Your Home, Your Defining Story.</h1>
          <p className="interiors-page-sub">
            From single-room transformations to complete luxury estates, Embroshyal blends photorealistic 3D space planning, master carpentry, German modular hardware and turnkey on-site execution.
          </p>

          <div className="interiors-hero-cta mt-4">
            <button className="btn-gold" onClick={onOpenConsultation}>
              Book a Free 3D Design Session <ArrowRight size={16} />
            </button>
            <button className="btn-secondary-light" onClick={() => onNavigate('projects')}>
              View Completed Projects
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Budget & Scope Estimator */}
      <div className="container section-padding">
        <div className="estimator-card">
          <div className="estimator-left">
            <span className="section-label">Transparent Estimates</span>
            <h2 className="editorial-heading-2">Interior Budget Calculator</h2>
            <p className="editorial-subheading">
              Select your floor plan configuration and finish tier for an instant architectural estimate.
            </p>

            <div className="estimator-controls-grid mt-4">
              <div>
                <label className="estimator-label">1. Configuration</label>
                <div className="estimator-pills">
                  {['2BHK', '3BHK', '4BHK / Villa'].map((type) => (
                    <button 
                      key={type}
                      className={`est-pill ${bhkType === type ? 'est-pill-active' : ''}`}
                      onClick={() => setBhkType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="estimator-label">2. Material Tier</label>
                <div className="estimator-pills">
                  {['Standard Contemporary', 'Premium Luxury', 'Atelier Bespoke'].map((tier) => (
                    <button 
                      key={tier}
                      className={`est-pill ${finishTier === tier ? 'est-pill-active' : ''}`}
                      onClick={() => setFinishTier(tier)}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="estimator-right">
            <span className="est-quote-label">Estimated Turnkey Package</span>
            <span className="est-price font-serif">{currentEstimate}</span>
            <p className="est-includes-text">Includes Modular Kitchen, Wardrobes, Living/Dining Interiors, False Ceiling Lighting, Painting & 10-Yr Guarantee.</p>
            <button className="btn-gold w-full mt-3" onClick={onOpenConsultation}>
              Get Detailed 3D Plan <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Modular Kitchens Component */}
      <ModularKitchens onOpenConsultation={onOpenConsultation} />

      {/* Wardrobes Component */}
      <Wardrobes onOpenConsultation={onOpenConsultation} />

      {/* Before & After Interactive Transformations */}
      <BeforeAfter onOpenConsultation={onOpenConsultation} />

      {/* 4-Step Process Strip */}
      <div className="container section-padding">
        <div className="section-header-centered text-center">
          <span className="section-label">End-to-End Execution</span>
          <h2 className="editorial-heading-2">The Embroshyal Turnkey Journey</h2>
        </div>

        <div className="turnkey-roadmap-grid mt-4">
          <div className="roadmap-step">
            <span className="step-badge">Step 01</span>
            <h3 className="font-serif">1-on-1 Consultation & Site Scan</h3>
            <p>Laser measurement of floor plans, lifestyle audit, and spatial circulation assessment.</p>
          </div>
          <div className="roadmap-step">
            <span className="step-badge">Step 02</span>
            <h3 className="font-serif">3D VR Model & Material Box</h3>
            <p>Photorealistic 360-degree walkthrough deck paired with physical stone and fabric samples.</p>
          </div>
          <div className="roadmap-step">
            <span className="step-badge">Step 03</span>
            <h3 className="font-serif">Precision Factory Fabrication</h3>
            <p>German CNC automated joinery cutting off-site to ensure zero dust pollution in your home.</p>
          </div>
          <div className="roadmap-step">
            <span className="step-badge">Step 04</span>
            <h3 className="font-serif">White-Glove Handover</h3>
            <p>45-day turnkey installation, deep clean, and 10-year warranty passport issuance.</p>
          </div>
        </div>
      </div>

      <style>{`
        .interiors-page-hero {
          background: linear-gradient(to right, rgba(22, 20, 18, 0.94), rgba(22, 20, 18, 0.75)), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          padding: 6rem 0 5rem;
          color: #FFF;
        }

        .interiors-page-sub {
          font-size: 1.15rem;
          color: #D5CEC6;
          max-width: 720px;
          margin-top: 1rem;
          line-height: 1.7;
        }

        .interiors-hero-cta {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .estimator-card {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 3rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 3rem;
          box-shadow: var(--shadow-card);
        }

        @media (max-width: 900px) {
          .estimator-card {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
        }

        .estimator-label {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.65rem;
        }

        .estimator-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .est-pill {
          padding: 0.55rem 1rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .est-pill:hover {
          border-color: var(--text-primary);
        }

        .est-pill-active {
          background: var(--bg-dark);
          color: #FFF;
          border-color: var(--bg-dark);
        }

        .estimator-right {
          background: var(--bg-secondary);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .est-quote-label {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-gold);
        }

        .est-price {
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0.5rem 0;
        }

        .est-includes-text {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .turnkey-roadmap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }

        @media (max-width: 900px) {
          .turnkey-roadmap-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .turnkey-roadmap-grid {
            grid-template-columns: 1fr;
          }
        }

        .roadmap-step {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          padding: 2rem;
          border-radius: var(--radius-sm);
          position: relative;
        }

        .step-badge {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 0.5rem;
        }

        .roadmap-step h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .roadmap-step p {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
