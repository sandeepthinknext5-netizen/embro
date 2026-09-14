import React, { useState } from 'react';
import { 
  HeartPulse, ShieldPlus, Activity, Award, Sparkles, 
  CheckCircle2, ArrowRight, Stethoscope, Microscope 
} from 'lucide-react';

export default function HealthcarePage({ onNavigate, onOpenConsultation }) {
  const [activeSegment, setActiveSegment] = useState('all');

  const segments = [
    { id: 'all', label: 'All Healthcare Solutions' },
    { id: 'opd', label: 'OPD & Waiting Lounges' },
    { id: 'clinical', label: 'Consultation & Examination' },
    { id: 'nurse', label: 'Nurse Stations & Modular Carts' },
    { id: 'inpatient', label: 'Patient Rooms & ICU Recliners' }
  ];

  const healthcareProducts = [
    {
      id: 1,
      segment: 'opd',
      title: 'Aegis Medical Grade Lounge Seating',
      subtitle: 'Bleach-cleanable seamless vinyl with antibacterial barrier and wall-saver anti-scuff legs.',
      specs: ['Fluid-impervious polyurethane barrier', 'Wall-saver steel frame geometry', '350kg bariatric weight tested'],
      badge: 'NABH Compliant',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      segment: 'nurse',
      title: 'Centrum Corian Curved Nurse Station',
      subtitle: 'Non-porous seamless solid surface with integrated sub-counter CPU bays and chart management.',
      specs: ['Seamless thermoformed Corian / Staron', 'Concealed nurse-call & power conduits', 'Heavy duty soft-close stainless hardware'],
      badge: 'Sterile Zone',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      segment: 'clinical',
      title: 'Medica Doctor Consultation Desk Suite',
      subtitle: 'Ergonomic practitioner desks with integrated hygienic exam glove dispensers and privacy returns.',
      specs: ['Anti-microbial silver-infused worktop', 'Dual-screen medical monitor arm', 'Lockable prescription drawer unit'],
      badge: 'Physician Suite',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      segment: 'inpatient',
      title: 'ComfortCare Motorized Patient Attendant Recliner',
      subtitle: 'True flat lie-down sleeper recliner designed for patient rooms, upholstered in medical grade antimicrobial vinyl.',
      specs: ['Single-touch zero gravity recline', 'Antimicrobial & fire-retardant foam', 'Heavy duty medical locking casters'],
      badge: 'Inpatient Care',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      segment: 'nurse',
      title: 'AeroMed Mobile Pharmacy & Emergency Cart',
      subtitle: 'Anodized aluminum body with centralized electronic RFID keyless locking and crash-cart accessory rails.',
      specs: ['RFID / keypad electronic lock', 'Defibrillator shelf and IV pole mount', 'Quiet non-marking 5-inch wheels'],
      badge: 'Critical Care',
      image: 'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      segment: 'opd',
      title: 'Serenade Bariatric Tandem Beam Seating',
      subtitle: 'High-density modular seating rows for high-volume hospital lobbies and diagnostic centers.',
      specs: ['Easy-to-disinfect seamless steel beam', 'Removable and replaceable seat pads', 'Optional integrated center tables'],
      badge: 'High Traffic OPD',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filtered = activeSegment === 'all' 
    ? healthcareProducts 
    : healthcareProducts.filter(p => p.segment === activeSegment);

  return (
    <div className="healthcare-page animate-fade">
      
      {/* 1. Hero */}
      <section className="healthcare-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Commercial & Institutional</span>
            <span>/</span>
            <span>Healthcare</span>
          </div>

          <div className="hero-content-wrapper">
            <span className="section-label text-gold">Clinical Architecture & Medical Furniture</span>
            <h1 className="editorial-heading-1 text-white">
              Healing Environments Built with Clinical Precision & Empathy
            </h1>
            <p className="commercial-hero-sub">
              Engineered specifically for hospitals, clinics, and diagnostic centers. Combining rigorous infection-control, seamless wipe-down hygiene, and comforting ergonomics for patients and caregivers.
            </p>

            <div className="hero-action-group">
              <button className="btn-gold" onClick={onOpenConsultation}>
                Request Hospital Tender & Specification Sheet <ArrowRight size={16} />
              </button>
              <button className="btn-secondary-white" onClick={() => onNavigate('projects')}>
                View Hospital Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats & Certifications */}
      <section className="b2b-stats-bar">
        <div className="container stats-grid">
          <div className="stat-card">
            <span className="stat-number">NABH</span>
            <span className="stat-label">Infection Control Compliant Materials</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">ISO 13485</span>
            <span className="stat-label">Medical Furniture Quality Certified</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Silver-Ion Antibacterial Surface Efficacy</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">85+</span>
            <span className="stat-label">Multi-Speciality Hospitals Outfitted</span>
          </div>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="section-spacing container">
        <div className="section-header text-center">
          <span className="section-label">Medical Furniture Lines</span>
          <h2 className="editorial-heading-2">Infection-Control Healthcare Solutions</h2>
          <p className="section-subtitle-wide">
            Seamless solid surfaces, non-porous vinyls, and ergonomic caregiver workstations built to meet the strictest clinical standards.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="category-filter-pills">
          {segments.map((seg) => (
            <button
              key={seg.id}
              className={`filter-pill-btn ${activeSegment === seg.id ? 'active' : ''}`}
              onClick={() => setActiveSegment(seg.id)}
            >
              {seg.label}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="b2b-product-grid">
          {filtered.map((item) => (
            <div key={item.id} className="b2b-product-card">
              <div className="b2b-card-image image-zoom-container">
                <img src={item.image} alt={item.title} />
                <span className="b2b-card-badge">{item.badge}</span>
              </div>
              <div className="b2b-card-body">
                <h3 className="b2b-card-title">{item.title}</h3>
                <p className="b2b-card-desc">{item.subtitle}</p>
                
                <div className="b2b-specs-list">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="spec-item">
                      <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="b2b-card-actions">
                  <button className="btn-primary w-full" onClick={onOpenConsultation}>
                    Request Clinical Quotation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Clinical Standards Banner */}
      <section className="b2b-process-section">
        <div className="container">
          <div className="section-header text-center text-white">
            <span className="section-label text-gold">Hygiene & Safety Protocols</span>
            <h2 className="editorial-heading-2 text-white">Engineered for Medical Sterilization</h2>
          </div>

          <div className="process-steps-grid">
            <div className="process-step-item">
              <span className="step-num">01</span>
              <h4>Bleach & Chemical Resistance</h4>
              <p>Withstands continuous hospital-grade cleaning agents (quaternary ammonium, bleach, alcohol).</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">02</span>
              <h4>Crevice-Free Clean Design</h4>
              <p>Seamless joints and thermoformed coved edges eliminate dirt and bacteria traps.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">03</span>
              <h4>Bariatric Tested Strength</h4>
              <p>All inpatient and lobby seating undergo static load testing up to 350kg.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">04</span>
              <h4>Turnkey Hospital Setup</h4>
              <p>Staged floor-by-floor installation coordinated with MEP and clinical engineering teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="commercial-cta-banner container">
        <div className="cta-inner-box">
          <div className="cta-text">
            <h3 className="editorial-heading-2 text-white">Setting up a Clinic or Hospital Wing?</h3>
            <p>Our healthcare design team provides full compliance reviews, layout optimizations, and tailored institutional pricing.</p>
          </div>
          <button className="btn-gold" onClick={onOpenConsultation}>
            Connect with Healthcare Specialists <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .healthcare-hero {
          background: linear-gradient(135deg, rgba(16, 22, 20, 0.95) 0%, rgba(20, 32, 30, 0.84) 100%), url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80');
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

        .category-filter-pills {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin: 2.5rem 0 3rem;
        }

        .filter-pill-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          padding: 0.65rem 1.35rem;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filter-pill-btn.active {
          background: #181512;
          color: var(--accent-gold);
          border-color: var(--accent-gold);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .b2b-product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 1050px) {
          .b2b-product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .b2b-product-grid {
            grid-template-columns: 1fr;
          }
        }

        .b2b-product-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .b2b-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
          border-color: var(--border-dark);
        }

        .b2b-card-image {
          height: 240px;
          position: relative;
        }

        .b2b-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .b2b-card-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(18, 16, 14, 0.88);
          color: var(--accent-gold);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid rgba(194, 155, 56, 0.4);
        }

        .b2b-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .b2b-card-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .b2b-card-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }

        .b2b-specs-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.82rem;
          color: var(--text-primary);
        }

        .b2b-card-actions {
          margin-top: auto;
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
