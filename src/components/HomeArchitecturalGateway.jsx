import React from 'react';
import { 
  Building2, Home, ArrowRight, ShieldCheck, 
  Sparkles, CheckCircle2, Compass, Layers, Award, Clock, Cpu 
} from 'lucide-react';

export default function HomeArchitecturalGateway({ onNavigate, onOpenConsultation }) {
  const residentialPillars = [
    {
      title: 'Bespoke Home Interiors',
      desc: 'Full-home turnkey transformations crafted with Italian textures, custom fluted paneling, and ambient lighting.',
      route: 'interiors',
      tag: 'Turnkey Living'
    },
    {
      title: 'German Modular Kitchens',
      desc: 'Seamless handleless cabinetry, Blum soft-close mechanics, and antibacterial quartz countertops.',
      route: 'modular-kitchen',
      tag: 'Culinary Architecture'
    },
    {
      title: 'Signature Living & Bedroom Suites',
      desc: 'Curved bouclé sofas, hydraulic storage platform beds, and solid Calacatta marble dining ensembles.',
      route: 'furniture',
      tag: 'Living Atelier'
    }
  ];

  const commercialPillars = [
    {
      title: 'Workspaces & Executive Suites',
      desc: 'Modular desking clusters, acoustic solo pods, motorized sit-to-stand desks, and BIFMA task seating.',
      route: 'workspace',
      tag: 'Enterprise Architecture'
    },
    {
      title: 'Universities & Academic Labs',
      desc: 'Tiered lecture hall seating, STEM maker workbenches, mobile collaborative desks, and hostel bunk pods.',
      route: 'education',
      tag: 'Higher Education'
    },
    {
      title: 'Clinical Healthcare & Laboratories',
      desc: 'NABH-compliant anti-microbial Corian nurse stations, SEFA 8 chemical research benches, and fume hoods.',
      route: 'healthcare',
      tag: 'Technical & Clinical'
    }
  ];

  return (
    <section className="gateway-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header text-center">
          <span className="section-label">Two Specialized Divisions. One High Standard.</span>
          <h2 className="editorial-heading-2">Architectural Excellence for Every Scale</h2>
          <p className="section-subtitle-wide">
            Whether furnishing a seaface private residence or a 50,000 sq. ft. enterprise campus, Embroshyal delivers precision engineering, bespoke aesthetics, and turnkey execution.
          </p>
        </div>

        {/* Dual Portals Grid */}
        <div className="dual-portals-grid">
          
          {/* 1. Residential Atelier Portal */}
          <div className="portal-column residential-portal">
            <div className="portal-banner">
              <div className="portal-tag">
                <Home size={14} /> FOR HOMES & PENTHOUSES
              </div>
              <h3 className="portal-title font-serif">Residential Atelier</h3>
              <p className="portal-sub">Bespoke furniture and turnkey interior architecture for fine living.</p>
            </div>

            <div className="portal-cards-list">
              {residentialPillars.map((item, i) => (
                <div key={i} className="portal-sub-card" onClick={() => onNavigate(item.route)}>
                  <div className="portal-card-head">
                    <span className="portal-card-tag">{item.tag}</span>
                    <ArrowRight size={15} className="portal-card-arrow" />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="btn-primary w-full mt-4" onClick={() => onNavigate('interiors')}>
              Explore Residential Interiors <ArrowRight size={15} />
            </button>
          </div>

          {/* 2. Commercial & Institutional Portal */}
          <div className="portal-column commercial-portal">
            <div className="portal-banner dark-portal-banner">
              <div className="portal-tag gold-portal-tag">
                <Building2 size={14} /> FOR ENTERPRISES & INSTITUTIONS
              </div>
              <h3 className="portal-title font-serif text-white">Commercial & Institutional</h3>
              <p className="portal-sub text-muted-white">BIFMA-certified workspaces, healthcare, labs & smart AV solutions.</p>
            </div>

            <div className="portal-cards-list">
              {commercialPillars.map((item, i) => (
                <div key={i} className="portal-sub-card dark-sub-card" onClick={() => onNavigate(item.route)}>
                  <div className="portal-card-head">
                    <span className="portal-card-tag gold-tag">{item.tag}</span>
                    <ArrowRight size={15} className="portal-card-arrow text-gold" />
                  </div>
                  <h4 className="text-white">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="btn-gold w-full mt-4" onClick={() => onNavigate('workspace')}>
              Explore Commercial Solutions <ArrowRight size={15} />
            </button>
          </div>

        </div>

        {/* 4-Step Turnkey Execution Process */}
        <div className="turnkey-process-box mt-5">
          <div className="text-center mb-4">
            <span className="section-label text-gold">Turnkey Execution Model</span>
            <h3 className="editorial-heading-2 text-white">How We Bring Spaces to Life</h3>
          </div>

          <div className="turnkey-steps-grid">
            <div className="turnkey-step">
              <span className="turnkey-step-num">01</span>
              <h4>3D Spatial Audit</h4>
              <p>On-site laser scanning, acoustic modeling, ergonomic density planning, and feasibility report.</p>
            </div>
            <div className="turnkey-step">
              <span className="turnkey-step-num">02</span>
              <h4>BIM & Photorealistic 3D</h4>
              <p>Detailed architectural renderings, custom finish swatches, and itemized transparent BoQ costing.</p>
            </div>
            <div className="turnkey-step">
              <span className="turnkey-step-num">03</span>
              <h4>German CNC Fabrication</h4>
              <p>E0 grade non-toxic emission boards, precision automated edge-banding, and robotic welding.</p>
            </div>
            <div className="turnkey-step">
              <span className="turnkey-step-num">04</span>
              <h4>White-Glove Handover</h4>
              <p>Staged on-time installation, air-purification cleanup, and 10-year structural warranty certificate.</p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .gateway-section {
          padding: 4.5rem 0 3.5rem;
          background: var(--bg-primary);
        }

        .dual-portals-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-top: 3.5rem;
        }

        @media (max-width: 900px) {
          .dual-portals-grid {
            grid-template-columns: 1fr;
          }
        }

        .portal-column {
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .residential-portal {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          padding: 2rem;
        }

        .commercial-portal {
          background: #161412;
          border: 1px solid rgba(194, 155, 56, 0.35);
          padding: 2rem;
        }

        .portal-banner {
          margin-bottom: 1.75rem;
        }

        .portal-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-bronze);
          background: var(--bg-secondary);
          padding: 4px 10px;
          border-radius: 20px;
          margin-bottom: 0.75rem;
        }

        .gold-portal-tag {
          color: var(--accent-gold);
          background: rgba(194, 155, 56, 0.15);
          border: 1px solid rgba(194, 155, 56, 0.4);
        }

        .portal-title {
          font-size: 1.85rem;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .portal-sub {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .text-muted-white {
          color: #BDB5AA;
        }

        .portal-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }

        .portal-sub-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 1.25rem 1.4rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .portal-sub-card:hover {
          transform: translateX(4px);
          border-color: var(--accent-gold);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
        }

        .dark-sub-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .dark-sub-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-gold);
        }

        .dark-sub-card p {
          color: #A8A096;
        }

        .portal-card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
        }

        .portal-card-tag {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .gold-tag {
          color: var(--accent-gold);
        }

        .portal-sub-card h4 {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          margin-bottom: 0.35rem;
          color: var(--text-primary);
        }

        .portal-sub-card p {
          font-size: 0.84rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .turnkey-process-box {
          background: linear-gradient(135deg, #181512 0%, #25201A 100%);
          border: 1px solid rgba(194, 155, 56, 0.3);
          border-radius: var(--radius-md);
          padding: 3.5rem 3rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .turnkey-process-box {
            padding: 2.2rem 1.5rem;
          }
        }

        .turnkey-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
          margin-top: 2rem;
        }

        @media (max-width: 900px) {
          .turnkey-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .turnkey-steps-grid {
            grid-template-columns: 1fr;
          }
        }

        .turnkey-step {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1.75rem 1.25rem;
          border-radius: var(--radius-sm);
        }

        .turnkey-step-num {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 0.75rem;
        }

        .turnkey-step h4 {
          color: #FFF;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .turnkey-step p {
          color: #B0A89E;
          font-size: 0.84rem;
          line-height: 1.55;
        }
      `}</style>
    </section>
  );
}
