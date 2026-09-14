import React, { useState } from 'react';
import { 
  FlaskConical, TestTube2, ShieldCheck, Atom, 
  Sparkles, CheckCircle2, ArrowRight, Gauge, Layers 
} from 'lucide-react';

export default function LaboratoryPage({ onNavigate, onOpenConsultation }) {
  const [activeSegment, setActiveSegment] = useState('all');

  const segments = [
    { id: 'all', label: 'All Lab Solutions' },
    { id: 'workbenches', label: 'Modular Research Benches' },
    { id: 'fume-hoods', label: 'Fume Hoods & Exhaust' },
    { id: 'cleanroom', label: 'Cleanroom & Anti-Static (ESD)' },
    { id: 'storage', label: 'Safety Chemical Cabinets' }
  ];

  const labProducts = [
    {
      id: 1,
      segment: 'workbenches',
      title: 'Titan Phenolic & Epoxy Research Island',
      subtitle: 'Heavy C-frame modular workbench with Trespa TopLab chemical-resistant worktops and service reagent racks.',
      specs: ['Solid 19mm Epoxy / Trespa chemical worktop', 'Integrated gas/water/vacuum service valves', 'Electro-galvanized epoxy powder-coated steel'],
      badge: 'SEFA 8 Certified',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      segment: 'fume-hoods',
      title: 'AeroShield Bypass Chemical Fume Hood',
      subtitle: 'Aerodynamic bypass design with constant face velocity control and motorized safety sash.',
      specs: ['ASHRAE 110 containment tested', 'Acid-resistant solid phenolic liner', 'Vapor-proof LED task light fixture'],
      badge: 'ASHRAE 110 Tested',
      image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      segment: 'cleanroom',
      title: 'SteriSteel 316 Cleanroom Workstation',
      subtitle: 'Electro-polished 316-grade stainless steel tables designed for ISO Class 4-8 pharmaceutical cleanrooms.',
      specs: ['Perforated airflow top option', 'Zero-particle shedding electro-polish', 'Electrically grounded ESD protection'],
      badge: 'ISO Cleanroom Ready',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      segment: 'storage',
      title: 'FlamSafe Double-Wall Chemical Storage Locker',
      subtitle: 'FM-approved 18-gauge double-walled steel cabinet with 38mm insulating air barrier and 3-point latching.',
      specs: ['FM & OSHA 29 CFR compliant', 'Spill-containment sump tray at bottom', 'Dual flame arrestor ventilation bungs'],
      badge: 'FM Approved Safety',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      segment: 'workbenches',
      title: 'VibraZero Granite Balance Isolation Table',
      subtitle: 'Massive polished black granite slab suspended on tuned pneumatic dampening mounts for micro-balance precision.',
      specs: ['Zero-resonance vibration isolation', 'Grade 00 polished granite slab', 'Independent decoupled outer study frame'],
      badge: 'Analytical Precision',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      segment: 'cleanroom',
      title: 'ErgoLab ESD Antistatic Tech Bench',
      subtitle: 'Conductive dissipative laminate surface with wrist-strap grounding plug points and overhead LED lighting.',
      specs: ['Surface resistivity: 10^6 to 10^9 ohms', 'Overhead instrument and power raceways', 'Motorized height adjustment 650-1250mm'],
      badge: 'Electronics & R&D',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filtered = activeSegment === 'all' 
    ? labProducts 
    : labProducts.filter(p => p.segment === activeSegment);

  return (
    <div className="laboratory-page animate-fade">
      
      {/* 1. Hero */}
      <section className="laboratory-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Commercial & Institutional</span>
            <span>/</span>
            <span>Laboratory</span>
          </div>

          <div className="hero-content-wrapper">
            <span className="section-label text-gold">Technical Lab Furniture & Cleanroom Systems</span>
            <h1 className="editorial-heading-1 text-white">
              Precision Laboratory Furniture for High-Stakes Research
            </h1>
            <p className="commercial-hero-sub">
              SEFA-compliant modular casework, chemical-resistant fume hoods, and cleanroom grade stainless steel workstations engineered for pharmaceuticals, biotechnology, petrochemicals, and academia.
            </p>

            <div className="hero-action-group">
              <button className="btn-gold" onClick={onOpenConsultation}>
                Request Technical Lab Consultation <ArrowRight size={16} />
              </button>
              <button className="btn-secondary-white" onClick={() => onNavigate('projects')}>
                View R&D Lab Installations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="b2b-stats-bar">
        <div className="container stats-grid">
          <div className="stat-card">
            <span className="stat-number">SEFA 8</span>
            <span className="stat-label">Laboratory Casework Certified</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">ASHRAE 110</span>
            <span className="stat-label">Fume Hood Containment Tested</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">316 Grade</span>
            <span className="stat-label">Cleanroom Stainless Steel Casework</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">150+</span>
            <span className="stat-label">Pharma & Industrial Labs Furnished</span>
          </div>
        </div>
      </section>

      {/* 3. Catalog Grid */}
      <section className="section-spacing container">
        <div className="section-header text-center">
          <span className="section-label">Technical Product Lines</span>
          <h2 className="editorial-heading-2">Chemical-Resistant & Cleanroom Lab Systems</h2>
          <p className="section-subtitle-wide">
            Designed for harsh chemical environments, rigorous washdowns, and zero-contamination research facilities.
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
                    Request Technical Datasheet & Pricing
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Engineering Standards */}
      <section className="b2b-process-section">
        <div className="container">
          <div className="section-header text-center text-white">
            <span className="section-label text-gold">Rigorous Lab Engineering</span>
            <h2 className="editorial-heading-2 text-white">Tested Against 49+ Industrial Reagents</h2>
          </div>

          <div className="process-steps-grid">
            <div className="process-step-item">
              <span className="step-num">01</span>
              <h4>Trespa TopLab & Epoxy Tops</h4>
              <p>Impervious to concentrated acids, alkalis, solvents, and thermal shock up to 180°C.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">02</span>
              <h4>Integrated MEP Utility Spines</h4>
              <p>Quick-connect gas manifolds, vacuum lines, de-ionized water faucets, and waterproof sockets.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">03</span>
              <h4>Vibration Dampening Design</h4>
              <p>Rigid sub-frame geometry eliminates micro-sway for precision laser & spectroscopy equipment.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">04</span>
              <h4>Full Turnkey Lab Handover</h4>
              <p>Ducting coordination, scrubber integration, and certified velocity commissioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="commercial-cta-banner container">
        <div className="cta-inner-box">
          <div className="cta-text">
            <h3 className="editorial-heading-2 text-white">Designing a New R&D Facility or Quality Lab?</h3>
            <p>Our lab infrastructure consultants provide 3D BIM coordination, chemical compatibility audits, and custom layout drawings.</p>
          </div>
          <button className="btn-gold" onClick={onOpenConsultation}>
            Schedule Lab Technical Consultation <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .laboratory-hero {
          background: linear-gradient(135deg, rgba(14, 18, 24, 0.95) 0%, rgba(18, 28, 38, 0.84) 100%), url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80');
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
