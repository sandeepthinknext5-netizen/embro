import React, { useState } from 'react';
import { 
  Rocket, Briefcase, TrendingUp, Zap, Clock, 
  ShieldCheck, CheckCircle2, ArrowRight, DollarSign, Sparkles 
} from 'lucide-react';

export default function SMEPage({ onNavigate, onOpenConsultation }) {
  const [teamSize, setTeamSize] = useState(25);

  const starterKits = [
    {
      id: '10-seater',
      title: 'Agile Startup Kit (10-Seater)',
      desc: 'Ideal for early-stage teams & seed-funded startups needing immediate 7-day office setup.',
      includes: [
        '10x Linear Workstations with Cable Trays',
        '10x Ergonomic Mesh Task Chairs (Class-4 gaslift)',
        '1x 6-Seater Discussion / Meeting Table',
        '1x Mobile Storage Pedestal per desk',
        'Whiteboard wall panels & power track'
      ],
      priceTag: 'Starting from ₹1.45 Lakh',
      delivery: '7-Day Express Dispatch',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '25-seater',
      title: 'Growth Accelerator Pack (25-Seater)',
      desc: 'Full-floor setup for rapidly expanding tech, creative, and consulting teams with acoustic dividers.',
      includes: [
        '25x Dual-Tone Modular Desks with Modesty Screens',
        '25x High-Back Ergonomic Synchronous Chairs',
        '1x 10-Seater Boardroom Table with Pop-up AV',
        '2x 4-Seater Informal Breakout Booths',
        '1x Reception Desk & 3-Seater Guest Sofa'
      ],
      priceTag: 'Starting from ₹3.65 Lakh',
      delivery: '10-Day Turnkey Setup',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '50-seater',
      title: 'ScaleUp Enterprise Hub (50-Seater)',
      desc: 'Comprehensive turnkey solution for mature SMEs and branch offices with executive cabins.',
      includes: [
        '50x Workstations with Acoustic Fabric Panels',
        '2x Executive Cabin Suites with Storage Credenzas',
        '1x 14-Seater Conference Table + 1x 6-Seater Room',
        'Town Hall Modular Lounge Seating & Lockers',
        'Pantry Dining Counters & Bar Stools'
      ],
      priceTag: 'Starting from ₹7.20 Lakh',
      delivery: '14-Day Delivery & Installation',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="sme-page animate-fade">
      
      {/* 1. Hero */}
      <section className="sme-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Commercial & Institutional</span>
            <span>/</span>
            <span>SME & Startups</span>
          </div>

          <div className="hero-content-wrapper">
            <span className="section-label text-gold">Agile Office Packages for Growing Teams</span>
            <h1 className="editorial-heading-1 text-white">
              Fast, Scalable, Budget-Friendly Workspaces for Startups & SMEs
            </h1>
            <p className="commercial-hero-sub">
              Empower your team with designer-grade ergonomic furniture without the enterprise price tag. Pre-configured 10, 25, and 50-seater packs with 7-day express delivery and flexible B2B financing.
            </p>

            <div className="hero-action-group">
              <button className="btn-gold" onClick={onOpenConsultation}>
                Get Instant SME Cost Estimate <ArrowRight size={16} />
              </button>
              <button className="btn-secondary-white" onClick={() => onNavigate('products')}>
                Explore Standalone Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key SME Benefits */}
      <section className="b2b-stats-bar">
        <div className="container stats-grid">
          <div className="stat-card">
            <span className="stat-number">7 Days</span>
            <span className="stat-label">Express Dispatch for Starter Packs</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">0% EMI</span>
            <span className="stat-label">Flexible B2B Financing & Leasing</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">Modular</span>
            <span className="stat-label">100% Scalable as Your Team Expands</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">5-10 Yrs</span>
            <span className="stat-label">Commercial Warranty on Structural Frames</span>
          </div>
        </div>
      </section>

      {/* 3. Pre-Configured Turnkey Kits */}
      <section className="section-spacing container">
        <div className="section-header text-center">
          <span className="section-label">All-Inclusive Packages</span>
          <h2 className="editorial-heading-2">Ready-To-Deploy Startup Office Kits</h2>
          <p className="section-subtitle-wide">
            Stop wasting weeks coordinating multiple vendors. Our turnkey packs include workstations, ergonomic seating, meeting tables, and cable management in one simple invoice.
          </p>
        </div>

        <div className="sme-kits-grid">
          {starterKits.map((kit) => (
            <div key={kit.id} className="sme-kit-card">
              <div className="sme-kit-image image-zoom-container">
                <img src={kit.image} alt={kit.title} />
                <span className="sme-delivery-tag">
                  <Clock size={12} /> {kit.delivery}
                </span>
              </div>
              <div className="sme-kit-body">
                <h3 className="sme-kit-title">{kit.title}</h3>
                <p className="sme-kit-desc">{kit.desc}</p>

                <div className="sme-price-box">
                  <span className="sme-price">{kit.priceTag}</span>
                  <span className="sme-gst">GST Invoice & Input Credit Eligible</span>
                </div>

                <div className="sme-includes-list">
                  <span className="includes-label">Package Includes:</span>
                  {kit.includes.map((inc, i) => (
                    <div key={i} className="inc-item">
                      <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-primary w-full mt-auto" onClick={onOpenConsultation}>
                  Request Custom Layout & Quotation
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SME Advantages */}
      <section className="b2b-process-section">
        <div className="container">
          <div className="section-header text-center text-white">
            <span className="section-label text-gold">Why Founders Choose Embroshyal</span>
            <h2 className="editorial-heading-2 text-white">Built for Velocity & Cashflow Efficiency</h2>
          </div>

          <div className="process-steps-grid">
            <div className="process-step-item">
              <span className="step-num">01</span>
              <h4>Zero Space Wastage</h4>
              <p>Free 3D layout consultation to maximize every square foot of your leased office floor.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">02</span>
              <h4>Plug & Play Daisy Chains</h4>
              <p>Pre-wired power troughs reduce electrician cabling costs and enable rapid office relocation.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">03</span>
              <h4>Add Seats in 48 Hours</h4>
              <p>Standardized components allow you to seamlessly click-in extra desks as you hire new employees.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">04</span>
              <h4>Turnkey Delivery & Assembly</h4>
              <p>Our team handles unpacking, assembly, leveling, and site cleanup in a single weekend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="commercial-cta-banner container">
        <div className="cta-inner-box">
          <div className="cta-text">
            <h3 className="editorial-heading-2 text-white">Need a Customized Office Plan in 24 Hours?</h3>
            <p>Send us your floor carpet area or seating headcount, and get a 3D floor plan layout and itemized quote today.</p>
          </div>
          <button className="btn-gold" onClick={onOpenConsultation}>
            Get 24-Hour 3D Layout & Quote <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .sme-hero {
          background: linear-gradient(135deg, rgba(22, 18, 14, 0.95) 0%, rgba(38, 28, 18, 0.84) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          padding: 5.5rem 0 4.5rem;
          color: #FFF;
        }

        .hero-content-wrapper {
          max-width: 820px;
          margin-top: 1rem;
        }

        .commercial-hero-sub {
          font-size: 1.15rem;
          color: #D6CEC5;
          margin: 1.25rem 0 2rem;
          line-height: 1.7;
        }

        .hero-action-group {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .btn-secondary-white {
          background: rgba(255, 255, 255, 0.1);
          color: #FFF;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.85rem 1.6rem;
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .b2b-stats-bar {
          background: #181512;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.2rem 0;
          color: #FFF;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        @media (max-width: 800px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        .stat-number {
          display: block;
          font-family: var(--font-serif);
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--accent-gold);
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #A8A29A;
        }

        .sme-kits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.2rem;
          margin-top: 3rem;
        }

        @media (max-width: 1050px) {
          .sme-kits-grid {
            grid-template-columns: 1fr;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
          }
        }

        .sme-kit-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .sme-kit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
          border-color: var(--accent-gold);
        }

        .sme-kit-image {
          height: 220px;
          position: relative;
        }

        .sme-kit-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sme-delivery-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: #181512;
          color: var(--accent-gold);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          border: 1px solid rgba(194, 155, 56, 0.4);
        }

        .sme-kit-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .sme-kit-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 0.45rem;
        }

        .sme-kit-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .sme-price-box {
          background: var(--bg-secondary);
          padding: 0.85rem 1rem;
          border-radius: 6px;
          margin-bottom: 1.35rem;
          border: 1px solid var(--border-light);
        }

        .sme-price {
          display: block;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--accent-gold);
        }

        .sme-gst {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .sme-includes-list {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          margin-bottom: 1.75rem;
        }

        .includes-label {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .inc-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.82rem;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .b2b-process-section {
          background: #141210;
          padding: 5.5rem 0;
          margin-top: 5rem;
        }

        .process-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
        }

        @media (max-width: 950px) {
          .process-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .process-steps-grid {
            grid-template-columns: 1fr;
          }
        }

        .process-step-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2rem 1.5rem;
          border-radius: var(--radius-sm);
        }

        .step-num {
          display: block;
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--accent-gold);
          margin-bottom: 1rem;
        }

        .process-step-item h4 {
          color: #FFF;
          font-size: 1.15rem;
          margin-bottom: 0.65rem;
        }

        .process-step-item p {
          color: #A8A29A;
          font-size: 0.85rem;
          line-height: 1.6;
        }

        .commercial-cta-banner {
          margin: 4.5rem auto 5rem;
        }

        .cta-inner-box {
          background: linear-gradient(135deg, #1A1714 0%, #29241F 100%);
          border: 1px solid rgba(194, 155, 56, 0.35);
          padding: 3.5rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 850px) {
          .cta-inner-box {
            flex-direction: column;
            text-align: center;
            padding: 2.5rem 1.5rem;
          }
        }

        .cta-text p {
          color: #D6CEC5;
          margin-top: 0.5rem;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
}
