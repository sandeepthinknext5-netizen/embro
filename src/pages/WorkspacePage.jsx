import React, { useState } from 'react';
import { 
  Building2, Monitor, Users, Shield, Award, CheckCircle2, 
  ArrowRight, PhoneCall, Download, Layers, Sparkles, SlidersHorizontal 
} from 'lucide-react';

export default function WorkspacePage({ onNavigate, onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Workspaces' },
    { id: 'open-plan', label: 'Open Desking & Clusters' },
    { id: 'executive', label: 'Executive & Boardrooms' },
    { id: 'acoustic', label: 'Acoustic Pods & Focus' },
    { id: 'collaborative', label: 'Lounge & Collaboration' }
  ];

  const solutions = [
    {
      id: 1,
      category: 'open-plan',
      title: 'AeroLine Linear Workstation System',
      subtitle: 'Engineered for agile teams with integrated cable wireways & biophilic privacy screens.',
      specs: ['Dual-motor height adjustable options', 'Sound-absorbing PET felt dividers', 'Concealed power/LAN management'],
      badge: 'Bestseller Enterprise',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      category: 'executive',
      title: 'Apex Sovereign Executive Suite',
      subtitle: 'Italian Canaletto walnut veneer paired with matte black anodized aluminum and leather inlays.',
      specs: ['Wireless charging desktop embed', 'Integrated soft-close credenza', 'Soft leather modesty panel'],
      badge: 'Executive Series',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      category: 'acoustic',
      title: 'Silentium Solo & Duo Acoustic Pods',
      subtitle: '32dB acoustic rating with automated ultra-quiet ventilation, LED lighting, and ergonomic seating.',
      specs: ['Class-A acoustic felt damping', 'Motion-sensor HEPA airflow', 'Universal power & high-speed USB-C'],
      badge: 'Quiet Focus',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      category: 'collaborative',
      title: 'Agora Modular Collaboration Hub',
      subtitle: 'Curved modular banquettes and media-sharing tables designed for dynamic brainstorming.',
      specs: ['Stain-resistant commercial upholstery', 'Integrated TV & HDMI connectivity', 'Lightweight reconfigurable ottomans'],
      badge: 'Agile Breakout',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      category: 'open-plan',
      title: 'Strata 120-Degree Collaborative Cluster',
      subtitle: 'Honeycomb-geometry 3-person and 6-person pods that enhance team interaction while preserving sightlines.',
      specs: ['Curved anti-glare laminate worktops', 'Overhead task lighting rails', 'Magnetic accessory tracks'],
      badge: 'Modern Geometry',
      image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      category: 'executive',
      title: 'Verona 18-Seater Smart Conference Table',
      subtitle: 'Seamless motorized pop-up AV hubs, flush microphone channels, and architectural base styling.',
      specs: ['Solid core engineered timber with brass edge', 'Touch-capacitive power hatches', 'Under-table cable management spine'],
      badge: 'Boardroom Edition',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredSolutions = activeCategory === 'all' 
    ? solutions 
    : solutions.filter(s => s.category === activeCategory);

  return (
    <div className="workspace-page animate-fade">
      
      {/* 1. Hero Banner */}
      <section className="commercial-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Commercial & Institutional</span>
            <span>/</span>
            <span>Workspace</span>
          </div>

          <div className="hero-content-wrapper">
            <span className="section-label text-gold">Enterprise Workplace Architecture</span>
            <h1 className="editorial-heading-1 text-white">
              Workspaces Designed for Focus, Collaboration & Well-being
            </h1>
            <p className="commercial-hero-sub">
              From global corporate headquarters to flexible co-working hubs, Embroshyal engineers ergonomic, modular, and tech-integrated commercial environments with full turnkey execution.
            </p>

            <div className="hero-action-group">
              <button className="btn-gold" onClick={onOpenConsultation}>
                Request Floor Plan & 3D Layout <ArrowRight size={16} />
              </button>
              <button className="btn-secondary-white" onClick={() => onNavigate('projects')}>
                View Corporate Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Pillars Stats */}
      <section className="b2b-stats-bar">
        <div className="container stats-grid">
          <div className="stat-card">
            <span className="stat-number">2.5M+</span>
            <span className="stat-label">Sq. Ft. Furnished Across India</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">450+</span>
            <span className="stat-label">Fortune 500 & Enterprise Projects</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">BIFMA</span>
            <span className="stat-label">Level 3 & GreenGuard Certified</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">10 Years</span>
            <span className="stat-label">Comprehensive Commercial Warranty</span>
          </div>
        </div>
      </section>

      {/* 3. Filterable Solutions Grid */}
      <section className="section-spacing container">
        <div className="section-header text-center">
          <span className="section-label">Enterprise Product Lines</span>
          <h2 className="editorial-heading-2">Curated Commercial Workspace Systems</h2>
          <p className="section-subtitle-wide">
            Designed for high-traffic corporate usage, meeting international ergonomics, fire-safety, and acoustic standards.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="category-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="b2b-product-grid">
          {filteredSolutions.map((item) => (
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
                    Request Spec Sheet & B2B Pricing
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Turnkey Office Execution Process */}
      <section className="b2b-process-section">
        <div className="container">
          <div className="section-header text-center text-white">
            <span className="section-label text-gold">Seamless Project Delivery</span>
            <h2 className="editorial-heading-2 text-white">From 3D Spatial Planning to Final Handover</h2>
          </div>

          <div className="process-steps-grid">
            <div className="process-step-item">
              <span className="step-num">01</span>
              <h4>Space Audit & Needs Analysis</h4>
              <p>On-site laser scanning, employee density assessment, and acoustic zoning analysis.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">02</span>
              <h4>BIM & 3D Walkthrough</h4>
              <p>Custom CAD/Revit layouts, ergonomic heat maps, and full photorealistic rendering.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">03</span>
              <h4>Precision Manufacturing</h4>
              <p>Automated German CNC machining with ISO 9001 and strict anti-sag certifications.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">04</span>
              <h4>Turnkey Night Installation</h4>
              <p>Dedicated project managers ensuring zero disruption to active business operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Consultation & Quote CTA */}
      <section className="commercial-cta-banner container">
        <div className="cta-inner-box">
          <div className="cta-text">
            <h3 className="editorial-heading-2 text-white">Planning a New Office or Expansion?</h3>
            <p>Speak directly with our Chief Commercial Architect for customized floor planning and B2B pricing catalogs.</p>
          </div>
          <button className="btn-gold" onClick={onOpenConsultation}>
            Schedule Corporate Consultation <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .commercial-hero {
          background: linear-gradient(135deg, rgba(18, 16, 14, 0.95) 0%, rgba(30, 26, 22, 0.82) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80');
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

        .btn-secondary-white:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: #FFF;
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
