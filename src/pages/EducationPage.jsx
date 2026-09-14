import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Users, ShieldCheck, 
  Sparkles, CheckCircle2, ArrowRight, Layers, FileSpreadsheet 
} from 'lucide-react';

export default function EducationPage({ onNavigate, onOpenConsultation }) {
  const [activeSegment, setActiveSegment] = useState('all');

  const segments = [
    { id: 'all', label: 'All Educational Solutions' },
    { id: 'classrooms', label: 'Smart Classrooms & Lecture Halls' },
    { id: 'libraries', label: 'Libraries & Media Centers' },
    { id: 'stem', label: 'STEM & Maker Labs' },
    { id: 'hostels', label: 'Hostel & Cafeteria Systems' }
  ];

  const educationProducts = [
    {
      id: 1,
      segment: 'classrooms',
      title: 'ErgoLearn Tiered Lecture Seating',
      subtitle: 'Gravity-return tip-up seats with continuous curved write-tops and integrated dual power ports.',
      specs: ['Cold-cure molded fire-retardant foam', 'Heavy gauge powder-coated steel chassis', 'Integrated acoustic modesty panels'],
      badge: 'University Grade',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      segment: 'classrooms',
      title: 'OmniFlex Mobile Collaborative Desks',
      subtitle: 'Hexagonal & trapezoidal nesting desks with locking casters for instant transition between lectures and group work.',
      specs: ['Scratch-resistant antibacterial laminate', 'Pneumatic height adjustment', 'Backpack hooks and wire book baskets'],
      badge: 'K-12 & Colleges',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      segment: 'libraries',
      title: 'Athenaeum Modular Library Stacks & Carrels',
      subtitle: 'Heavy-load cantilever steel book racks paired with acoustic individual study pods and reading tables.',
      specs: ['Under-shelf LED diffuse reading lights', 'Concealed power/USB-C charging hubs', 'Solid ash wood edge banding'],
      badge: 'High-Density Library',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      segment: 'stem',
      title: 'Innovator STEM & Robotics Workbench',
      subtitle: 'Chemical and impact-resistant phenolic resin surfaces with overhead utility racks and heavy-duty tool storage.',
      specs: ['Heavy-duty 400kg load capacity', 'ESD anti-static surface option', 'Lockable mobile sub-counter drawer units'],
      badge: 'STEM & Maker Labs',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      segment: 'hostels',
      title: 'DormMax Compact Living Bunk & Study Pod',
      subtitle: 'Space-saving integrated bunk beds with private acoustic privacy curtains, personal wardrobe, and study nook.',
      specs: ['Heavy-duty anti-corrosion welded tubular steel', 'Anti-tamper hardware and lockable storage', 'Reinforced ladder with non-slip treads'],
      badge: 'Campus Living',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      segment: 'hostels',
      title: 'Gourmet Campus Cafeteria Benches',
      subtitle: 'Commercial high-traffic dining tables with auto-return fixed swivel stools for fast cleaning and orderly seating.',
      specs: ['Compact grade moisture-proof laminate tops', 'Seamless robotically welded round pipe frame', 'Easy floor mopping clearance'],
      badge: 'High-Traffic Dining',
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filtered = activeSegment === 'all' 
    ? educationProducts 
    : educationProducts.filter(p => p.segment === activeSegment);

  return (
    <div className="education-page animate-fade">
      
      {/* 1. Hero */}
      <section className="education-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Commercial & Institutional</span>
            <span>/</span>
            <span>Education</span>
          </div>

          <div className="hero-content-wrapper">
            <span className="section-label text-gold">Institutional Infrastructure</span>
            <h1 className="editorial-heading-1 text-white">
              Inspiring Future-Ready Learning Spaces & Universities
            </h1>
            <p className="commercial-hero-sub">
              Durable, ergonomic, and safety-certified educational furniture built to withstand decades of intensive academic use while fostering engagement, teamwork, and student well-being.
            </p>

            <div className="hero-action-group">
              <button className="btn-gold" onClick={onOpenConsultation}>
                Download Institutional Catalog & RFQ <ArrowRight size={16} />
              </button>
              <button className="btn-secondary-white" onClick={() => onNavigate('projects')}>
                View Campus Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Trust Bar */}
      <section className="b2b-stats-bar">
        <div className="container stats-grid">
          <div className="stat-card">
            <span className="stat-number">120+</span>
            <span className="stat-label">Universities & Colleges Outfitted</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">EN 1729</span>
            <span className="stat-label">European Student Ergonomics Certified</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">Child-Safe</span>
            <span className="stat-label">Non-toxic VOC Free & Rounded Edges</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">15 Years</span>
            <span className="stat-label">Structural Frame Warranty</span>
          </div>
        </div>
      </section>

      {/* 3. Product Catalog Grid */}
      <section className="section-spacing container">
        <div className="section-header text-center">
          <span className="section-label">Academic Portfolio</span>
          <h2 className="editorial-heading-2">Furniture Engineered for Higher Education & Schools</h2>
          <p className="section-subtitle-wide">
            Transform classrooms into dynamic collaboration spaces with modular, reconfigurable, and ultra-durable institutional systems.
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

        {/* Products */}
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
                    Request Institutional Tender Pricing
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Institutions Choose Embroshyal */}
      <section className="b2b-process-section">
        <div className="container">
          <div className="section-header text-center text-white">
            <span className="section-label text-gold">Institutional Standards</span>
            <h2 className="editorial-heading-2 text-white">Engineered for Lifelong Performance</h2>
          </div>

          <div className="process-steps-grid">
            <div className="process-step-item">
              <span className="step-num">01</span>
              <h4>Heavy-Duty Steel & Welds</h4>
              <p>MIG robotically welded steel framing treated with 7-tank anti-rust zinc phosphating.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">02</span>
              <h4>Antibacterial Surface Shield</h4>
              <p>Laminates infused with silver-ion technology that neutralizes 99.9% of surface bacteria.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">03</span>
              <h4>Zero-Injury Rounding</h4>
              <p>All desks and chair edges are CNC profiled with 3mm impact-absorbing PVC safety bands.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">04</span>
              <h4>Tender & Campus Support</h4>
              <p>Direct support for BoQ preparation, sample room mockups, and staged milestone deliveries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="commercial-cta-banner container">
        <div className="cta-inner-box">
          <div className="cta-text">
            <h3 className="editorial-heading-2 text-white">Upgrading Campus Infrastructure?</h3>
            <p>Our institutional architects provide turnkey spatial planning, prototype samples, and competitive educational bulk discount slabs.</p>
          </div>
          <button className="btn-gold" onClick={onOpenConsultation}>
            Request Campus Tender Quote <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .education-hero {
          background: linear-gradient(135deg, rgba(20, 18, 14, 0.95) 0%, rgba(35, 28, 20, 0.84) 100%), url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2000&q=80');
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
