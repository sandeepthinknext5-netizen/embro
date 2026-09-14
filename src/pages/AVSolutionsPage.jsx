import React, { useState } from 'react';
import { 
  Tv, Volume2, Mic, Wifi, Video, Cast, 
  ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Sliders 
} from 'lucide-react';

export default function AVSolutionsPage({ onNavigate, onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const avCategories = [
    { id: 'all', label: 'All AV & Collaboration' },
    { id: 'boardrooms', label: 'Smart Boardrooms' },
    { id: 'huddle', label: 'Hybrid Huddle Rooms' },
    { id: 'videowall', label: 'LED Video Walls & Displays' },
    { id: 'acoustic', label: 'Acoustic & Sound Masking' }
  ];

  const avSolutions = [
    {
      id: 1,
      category: 'boardrooms',
      title: 'AeroVue Executive Boardroom Suite',
      subtitle: 'Integrated 4K dual PTZ optical zoom tracking cameras, beamforming ceiling mic array, and touch-screen room scheduler.',
      specs: ['Microsoft Teams & Zoom Rooms Certified', 'Ceiling tile beamforming microphone array', 'Flush motorized motorized table pop-up hubs'],
      badge: 'Boardroom Grade',
      image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      category: 'videowall',
      title: 'Direct-View MicroLED Seamless Video Wall',
      subtitle: 'Ultra-fine 0.9mm pixel pitch seamless video wall with HDR10+ calibration for corporate town halls & command centers.',
      specs: ['100,000 hrs operational lifespan', 'Zero-bezel seamless tile magnetic mounting', 'Redundant power & controller failover'],
      badge: 'Town Hall & NOC',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      category: 'huddle',
      title: 'OmniCast Plug & Play Hybrid Huddle Bar',
      subtitle: 'All-in-one smart conference bar featuring AI speaker tracking, 120° wide-angle 4K lens, and noise suppression.',
      specs: ['Single USB-C BYOD instant plug & play', 'Wireless airplay / Miracast projection', 'AI-driven auto framing & noise block'],
      badge: 'Huddle & Focus',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      category: 'acoustic',
      title: 'EchoShield Architectural Fabric Acoustic Wall Panels',
      subtitle: 'Class-A NRC 0.95 rated sound absorbing fabric panels designed to eliminate boardroom echo and enhance speech clarity.',
      specs: ['Fire rated ASTM E84 Class A', 'Custom architectural geometric patterns', 'Eco-friendly recycled polyester core'],
      badge: 'Acoustic Clarity',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      category: 'boardrooms',
      title: 'SynchroTouch Centralized Room Control Panel',
      subtitle: '10.1-inch wall-mounted or tabletop capacitive touch controller for one-touch meeting launch, lighting, blinds & HVAC.',
      specs: ['Power over Ethernet (PoE) single cable', 'Integrated room occupancy sensor', 'Native calendar sync (Office 365 & Google)'],
      badge: 'Smart Automation',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      category: 'acoustic',
      title: 'SoundGuard Emitter Speech Privacy System',
      subtitle: 'Commercial sound masking system generating tuned ambient acoustic spectrum to protect sensitive conversation privacy.',
      specs: ['Direct field sound masking emitters', 'Zone-based volume scheduling', 'Protects HIPAA and corporate NDA privacy'],
      badge: 'Privacy Shield',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filtered = activeCategory === 'all' 
    ? avSolutions 
    : avSolutions.filter(item => item.category === activeCategory);

  return (
    <div className="av-solutions-page animate-fade">
      
      {/* 1. Hero */}
      <section className="av-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Commercial & Institutional</span>
            <span>/</span>
            <span>AV Solutions</span>
          </div>

          <div className="hero-content-wrapper">
            <span className="section-label text-gold">Unified Communications & Smart Audio-Visual Tech</span>
            <h1 className="editorial-heading-1 text-white">
              Seamless Audio-Visual Architecture for the Hybrid Era
            </h1>
            <p className="commercial-hero-sub">
              Empower seamless collaboration between remote and in-office teams. We engineer turnkey smart boardrooms, video conferencing suites, acoustic treatments, and immersive LED video walls.
            </p>

            <div className="hero-action-group">
              <button className="btn-gold" onClick={onOpenConsultation}>
                Book Smart AV Design Audit <ArrowRight size={16} />
              </button>
              <button className="btn-secondary-white" onClick={() => onNavigate('projects')}>
                View Corporate AV Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats & Certified Ecosystems */}
      <section className="b2b-stats-bar">
        <div className="container stats-grid">
          <div className="stat-card">
            <span className="stat-number">4K 60FPS</span>
            <span className="stat-label">Ultra-HD Video Telepresence Systems</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">0.95 NRC</span>
            <span className="stat-label">Maximum Speech Acoustic Clarity</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">One-Touch</span>
            <span className="stat-label">Instant MS Teams & Zoom Join</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">24/7 SLA</span>
            <span className="stat-label">Enterprise AV Maintenance & Support</span>
          </div>
        </div>
      </section>

      {/* 3. Catalog Grid */}
      <section className="section-spacing container">
        <div className="section-header text-center">
          <span className="section-label">Smart AV Integrations</span>
          <h2 className="editorial-heading-2">Collaboration & Video Conference Systems</h2>
          <p className="section-subtitle-wide">
            Turnkey hardware, optical tracking, ceiling microphone grids, and intelligent acoustic zoning.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="category-filter-pills">
          {avCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
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
                    Request AV Schematic & Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AV Architecture Features */}
      <section className="b2b-process-section">
        <div className="container">
          <div className="section-header text-center text-white">
            <span className="section-label text-gold">Turnkey Technology Integration</span>
            <h2 className="editorial-heading-2 text-white">Engineered for Frictionless Meetings</h2>
          </div>

          <div className="process-steps-grid">
            <div className="process-step-item">
              <span className="step-num">01</span>
              <h4>Acoustic Room Modeling</h4>
              <p>Simulating reverberation time (RT60) to eliminate echo before installing hardware.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">02</span>
              <h4>Concealed Wireway Architecture</h4>
              <p>Tables with subterranean conduits, pop-up retractable HDMI/Type-C, and clean aesthetics.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">03</span>
              <h4>Automated Lighting & Blinds</h4>
              <p>Smart sensors dim room lights and lower motorized blinds when video calls begin.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">04</span>
              <h4>Annual AMC & Remote Telemetry</h4>
              <p>Proactive hardware monitoring, firmware updates, and on-site engineering support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="commercial-cta-banner container">
        <div className="cta-inner-box">
          <div className="cta-text">
            <h3 className="editorial-heading-2 text-white">Upgrading Boardrooms or Town Hall AV?</h3>
            <p>Our certified AV architects provide full schematics, acoustic RT60 audits, and multi-room hardware packages.</p>
          </div>
          <button className="btn-gold" onClick={onOpenConsultation}>
            Schedule AV Engineering Consultation <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .av-hero {
          background: linear-gradient(135deg, rgba(16, 18, 26, 0.95) 0%, rgba(24, 28, 42, 0.84) 100%), url('https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=2000&q=80');
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

        .filter-pill-btn:hover {
          border-color: var(--accent-gold);
          color: var(--text-primary);
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
