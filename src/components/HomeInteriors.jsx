import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Home, Compass, Layers, ShieldCheck } from 'lucide-react';

export default function HomeInteriors({ onOpenConsultation, onExploreInteriors }) {
  const services = [
    { title: 'Modular Kitchens', desc: 'Precision German hardware, quartz waterfalls & concealed pantries.', tag: '10-Yr Guarantee', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80' },
    { title: 'Bespoke Wardrobes', desc: 'Bronze glass sliding systems, sensory lighting & Italian leather trays.', tag: 'Custom Modular', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80' },
    { title: 'Living Room Interiors', desc: 'Curved seating, acoustic fluted panels & ambient 2700K lighting.', tag: 'Turnkey Luxury', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80' },
    { title: 'Bedroom Interiors', desc: 'Sanctuary headboards, floating consoles & concealed dressing rooms.', tag: 'Restorative Design', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80' },
    { title: 'Kids Room Interiors', desc: 'Non-toxic rounded edges, modular storage towers & study nooks.', tag: 'Adaptive Living', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80' },
    { title: 'Home Office Interiors', desc: 'Acoustic slatted partitions, cable bays & ergonomic executive desks.', tag: 'Executive Focus', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80' },
    { title: 'Complete Home Interiors', desc: 'Full architectural space planning, 3D VR renders & turnkey execution.', tag: 'Full Flagship', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80' },
    { title: 'Custom Solutions', desc: 'One-of-a-kind stone dining tables, feature wine bars & custom partitions.', tag: 'Bespoke Studio', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="section-padding home-interiors-section" id="interiors">
      <div className="container">
        
        {/* Editorial Section Header */}
        <div className="interiors-header-block">
          <span className="section-label">Tailored Architecture & Living</span>
          <h2 className="editorial-heading-1">Your Home, Your Story.</h2>
          <p className="interiors-header-copy">
            From a single room to an entire luxury residence, Embroshyal brings together thoughtful design, intelligent space planning and beautiful craftsmanship to create spaces that feel uniquely yours.
          </p>

          <div className="interiors-actions-group">
            <button className="btn-gold" onClick={onOpenConsultation}>
              Design My Home <ArrowRight size={16} />
            </button>
            <button className="btn-secondary-light" onClick={onExploreInteriors}>
              Explore Interiors Portfolio
            </button>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="interiors-services-grid">
          {services.map((srv, idx) => (
            <div key={idx} className="service-card group" onClick={onOpenConsultation}>
              <div className="service-img-box image-zoom-container">
                <img src={srv.img} alt={srv.title} loading="lazy" />
                <div className="service-overlay"></div>
                <span className="service-tag">{srv.tag}</span>
              </div>
              <div className="service-content">
                <h3 className="service-title font-serif">{srv.title}</h3>
                <p className="service-desc">{srv.desc}</p>
                <span className="service-cta">
                  Consult Designer <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Process Pillars */}
        <div className="process-pillars-strip">
          <div className="process-pillar">
            <span className="pillar-num">01</span>
            <h4>Design Consultation</h4>
            <p>1-on-1 space planning & 3D photorealistic virtual reality visualization.</p>
          </div>
          <div className="process-pillar">
            <span className="pillar-num">02</span>
            <h4>Material Selection</h4>
            <p>Touch & feel Italian marbles, FSC hardwoods, and European fabrics in our studios.</p>
          </div>
          <div className="process-pillar">
            <span className="pillar-num">03</span>
            <h4>Precision Craft</h4>
            <p>Engineered off-site with German CNC precision for millimeter-perfect fitment.</p>
          </div>
          <div className="process-pillar">
            <span className="pillar-num">04</span>
            <h4>White-Glove Handover</h4>
            <p>Turnkey on-site installation, zero debris, backed by a 10-year structural warranty.</p>
          </div>
        </div>

      </div>

      <style>{`
        .home-interiors-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
        }

        .interiors-header-block {
          max-width: 800px;
          margin-bottom: 4rem;
        }

        .interiors-header-copy {
          font-size: 1.15rem;
          font-weight: 300;
          line-height: 1.7;
          color: #D2CCC4;
          margin: 1.25rem 0 2rem;
        }

        .interiors-actions-group {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .interiors-services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
          margin-bottom: 4.5rem;
        }

        @media (max-width: 1200px) {
          .interiors-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .interiors-services-grid {
            grid-template-columns: 1fr;
          }
        }

        .service-card {
          background: var(--bg-dark-secondary);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius-sm);
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-medium);
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-gold);
          box-shadow: var(--shadow-dark);
        }

        .service-img-box {
          height: 190px;
          position: relative;
        }

        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(22, 20, 18, 0.7) 0%, transparent 60%);
        }

        .service-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(22, 20, 18, 0.85);
          backdrop-filter: blur(6px);
          color: var(--accent-gold);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .service-content {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .service-title {
          font-size: 1.25rem;
          color: #FFF;
          margin-bottom: 0.4rem;
        }

        .service-desc {
          font-size: 0.82rem;
          color: #B5AFA8;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex: 1;
        }

        .service-cta {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: gap var(--transition-fast);
        }

        .service-card:hover .service-cta {
          gap: 0.65rem;
        }

        .process-pillars-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border-dark);
        }

        @media (max-width: 900px) {
          .process-pillars-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .process-pillars-strip {
            grid-template-columns: 1fr;
          }
        }

        .process-pillar {
          border-left: 2px solid var(--accent-gold);
          padding-left: 1.25rem;
        }

        .pillar-num {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 0.25rem;
        }

        .process-pillar h4 {
          font-size: 1.05rem;
          font-weight: 600;
          color: #FFF;
          margin-bottom: 0.35rem;
        }

        .process-pillar p {
          font-size: 0.8rem;
          color: #A8A29A;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
