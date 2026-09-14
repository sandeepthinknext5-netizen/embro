import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Award, Crown, Compass, Truck, CreditCard, Clock, Calendar, CheckCircle2, Phone } from 'lucide-react';

export default function OffersPage({ onNavigate, onOpenConsultation }) {
  const curatedEnsembles = [
    {
      id: 'ens-01',
      tag: 'Living Atelier Suite',
      name: 'The Grand Salon Living Ensemble',
      pieces: 'Solis Curved Bouclé 3-Seater + Atlas Travertine Center Table + Palermo Swivel Chair',
      originalPrice: 308000,
      privilegePrice: 265000,
      savings: 'Save ₹43,000 on Suite Curation',
      img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Matched Italian Bouclé & Honed Roman Travertine', 'Complimentary White-Glove Placement', '10-Year Frame Warranty']
    },
    {
      id: 'ens-02',
      tag: 'Sanctuary Bedroom Suite',
      name: 'The Restorative Master Suite',
      pieces: 'Aurelia Cane & Fluted Oak King Bed + Dual Floating Nightstands + Elysian Bronze Wardrobe',
      originalPrice: 521000,
      privilegePrice: 445000,
      savings: 'Save ₹76,000 on Suite Curation',
      img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Kiln-Dried European Oak & Natural Woven Cane', 'Free 3D Spatial Bedroom Blueprint', 'Soft-Close Blum Mechanism Inclusions']
    },
    {
      id: 'ens-03',
      tag: 'Convivial Dining Suite',
      name: 'The Verona Banquet Dining Ensemble',
      pieces: 'Verona 8-Seater Fluted Marble Dining Table + 8 Hand-Stitched Cashmere Bouclé Chairs',
      originalPrice: 386000,
      privilegePrice: 328000,
      savings: 'Save ₹58,000 on Suite Curation',
      img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Monolithic Calacatta Viola Marble Slab', 'Hydrophobic Stain-Resistant Nano-Seal', 'Single-Day Synchronized Installation']
    }
  ];

  const clientPrivileges = [
    {
      icon: Truck,
      title: 'Complimentary White-Glove Logistics',
      desc: 'Uniformed atelier joiners deliver to your room of choice, assemble, test leveling, and remove all protective packaging debris.'
    },
    {
      icon: Compass,
      title: 'Bespoke 3D Spatial Masterplan',
      desc: 'Work 1-on-1 with a Senior Interior Architect to co-create photorealistic 3D VR renders customized to your exact floor plan.'
    },
    {
      icon: ShieldCheck,
      title: '10-Year Generational Guarantee',
      desc: 'Every solid timber sub-frame carries a serialized brass provenance badge and comprehensive decade-long structural assurance.'
    },
    {
      icon: CreditCard,
      title: '0% Interest Bespoke Financing',
      desc: 'Spread your fine furniture investment across 3, 6, or 9 months with zero processing fees and transparent milestone billing.'
    },
    {
      icon: Award,
      title: 'Annual Timber Restorative Spa',
      desc: 'Our mobile restorative technicians visit biennially to re-hydrate timber grains with natural botanical hardwaxes.'
    },
    {
      icon: Clock,
      title: 'Guaranteed 45-Day Move-In',
      desc: 'Complete turnkey residences and bespoke modular kitchens are delivered and installed within a strict 45-day handover timeline.'
    }
  ];

  return (
    <div className="offers-clean-luxury-page animate-fade">
      
      {/* 1. EDITORIAL HERO BANNER */}
      <section className="offers-editorial-hero">
        <div className="container text-center max-w-800">
          <div className="hero-privilege-pill">
            <Sparkles size={14} className="text-gold" />
            <span>Private Client Privileges • 2026</span>
          </div>

          <h1 className="editorial-heading-1 text-white mb-4">
            Curated Privileges for <span className="italic text-gold">Enduring Living.</span>
          </h1>

          <p className="hero-editorial-sub">
            At Embroshyal, exceptional craftsmanship is paired with unmatched client care. Explore curated spatial suite credits, complimentary white-glove logistics, and bespoke architectural services.
          </p>

          <div className="hero-cta-buttons-center">
            <a href="#curatedEnsembles" className="btn-gold h-12 px-8 text-xs uppercase tracking-widest font-bold flex items-center gap-2">
              Explore Curated Suites <ArrowRight size={16} />
            </a>
            <button 
              onClick={onOpenConsultation}
              className="btn-secondary-light h-12 px-8 text-xs uppercase tracking-widest font-semibold"
            >
              Book Private 3D Session
            </button>
          </div>
        </div>
      </section>

      {/* 2. 6 CORE PILLARS OF CLIENT PRIVILEGES */}
      <section className="privileges-pillars-section">
        <div className="container">
          
          <div className="text-center max-w-700 mx-auto mb-14">
            <span className="section-label">The Embroshyal Difference</span>
            <h2 className="editorial-heading-2 text-dark mt-1">Included with Every Commission</h2>
            <p className="text-muted text-sm mt-2">
              Transparent, sovereign standards provided across all standalone pieces and full turnkey homes.
            </p>
          </div>

          <div className="pillars-grid-row">
            {clientPrivileges.map((cp, idx) => {
              const IconComponent = cp.icon;
              return (
                <div key={idx} className="pillar-feature-card">
                  <div className="pillar-icon-box">
                    <IconComponent size={24} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-dark font-medium mb-2">{cp.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{cp.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. CURATED SPATIAL SUITE ENSEMBLES WITH INCLUDED PRIVILEGES */}
      <section className="curated-suites-section" id="curatedEnsembles">
        <div className="container">
          
          <div className="text-center max-w-700 mx-auto mb-14">
            <span className="section-label text-gold">Cohesive Spatial Living</span>
            <h2 className="editorial-heading-2 text-white mt-1">Curated Room Ensembles</h2>
            <p className="text-neutral-300 text-sm mt-2">
              Harmoniously paired pieces configured by our Lead Architects with built-in ensemble savings.
            </p>
          </div>

          <div className="ensembles-stack">
            {curatedEnsembles.map((ens) => (
              <div key={ens.id} className="ensemble-luxury-card">
                
                <div className="ensemble-img-wrap image-zoom-container">
                  <img src={ens.img} alt={ens.name} />
                  <span className="ensemble-tag-badge">{ens.tag}</span>
                </div>

                <div className="ensemble-details-col">
                  <div>
                    <span className="ensemble-savings-tag text-gold font-bold">{ens.savings}</span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-2">{ens.name}</h3>
                    <p className="text-neutral-300 text-xs leading-relaxed mb-4">{ens.pieces}</p>

                    <div className="ensemble-highlights-list">
                      {ens.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="hl-item">
                          <CheckCircle2 size={14} className="text-gold shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="ensemble-pricing-bottom">
                    <div className="price-stack">
                      <span className="price-original line-through text-neutral-400 text-xs">₹{ens.originalPrice.toLocaleString('en-IN')}</span>
                      <span className="price-privilege font-serif text-2xl sm:text-3xl text-white font-bold">₹{ens.privilegePrice.toLocaleString('en-IN')}</span>
                    </div>

                    <button 
                      onClick={onOpenConsultation}
                      className="btn-gold h-11 px-6 text-xs uppercase tracking-widest font-bold whitespace-nowrap"
                    >
                      Commission This Suite
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PRIVATE ATELIER CONSULTATION BANNER */}
      <section className="private-session-banner-section">
        <div className="container">
          <div className="session-banner-box">
            <div className="max-w-600">
              <span className="section-label text-gold">Personal Concierge</span>
              <h2 className="editorial-heading-2 text-white mb-3">Begin Your Custom Space with an Architect</h2>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">
                Schedule a complimentary 1-on-1 design consultation at our Mumbai or South Delhi Experience Centres, or request a virtual 3D spatial presentation from the comfort of your home.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button 
                  onClick={onOpenConsultation}
                  className="btn-gold h-12 px-8 text-xs uppercase tracking-widest font-bold"
                >
                  Schedule Private Appointment
                </button>
                <a href="tel:+912284923000" className="flex items-center gap-2 text-xs font-bold text-white hover:text-gold transition-colors ml-2">
                  <Phone size={14} className="text-gold" /> +91 22 8492-3000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style>{`
        .offers-clean-luxury-page {
          background-color: var(--bg-primary);
        }

        /* Hero */
        .offers-editorial-hero {
          background: linear-gradient(180deg, rgba(22, 20, 18, 0.96) 0%, rgba(22, 20, 18, 0.85) 100%), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85') center/cover;
          padding: 7rem 0 6rem;
          color: #FFF;
        }

        .max-w-800 {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-privilege-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.4rem 1.1rem;
          border-radius: 50px;
          border: 1px solid rgba(194, 155, 56, 0.35);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent-gold);
          margin-bottom: 1.5rem;
        }

        .hero-editorial-sub {
          font-size: 1.1rem;
          font-weight: 300;
          line-height: 1.7;
          color: #D5CEC6;
          margin-bottom: 2.25rem;
        }

        .hero-cta-buttons-center {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        /* Pillars Section */
        .privileges-pillars-section {
          padding: 6.5rem 0;
          background-color: var(--bg-primary);
        }

        .pillars-grid-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .pillars-grid-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .pillars-grid-row {
            grid-template-columns: 1fr;
          }
        }

        .pillar-feature-card {
          background: #FFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          transition: all var(--transition-medium);
          box-shadow: var(--shadow-subtle);
        }

        .pillar-feature-card:hover {
          transform: translateY(-6px);
          border-color: rgba(194, 155, 56, 0.5);
          box-shadow: var(--shadow-floating);
        }

        .pillar-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(194, 155, 56, 0.1);
          border: 1px solid rgba(194, 155, 56, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        /* Curated Suites Section */
        .curated-suites-section {
          background-color: #12100E;
          padding: 6.5rem 0;
          color: #FFF;
        }

        .ensembles-stack {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          max-width: 1050px;
          margin: 0 auto;
        }

        .ensemble-luxury-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          transition: all var(--transition-medium);
        }

        @media (max-width: 850px) {
          .ensemble-luxury-card {
            grid-template-columns: 1fr;
          }
        }

        .ensemble-luxury-card:hover {
          border-color: rgba(194, 155, 56, 0.5);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .ensemble-img-wrap {
          position: relative;
          min-height: 280px;
        }

        .ensemble-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ensemble-tag-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(18, 16, 14, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(194, 155, 56, 0.4);
          color: var(--accent-gold);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
        }

        .ensemble-details-col {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ensemble-savings-tag {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.35rem;
        }

        .ensemble-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          padding: 1rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 1.5rem;
        }

        .hl-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #DDD;
        }

        .ensemble-pricing-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .price-stack {
          display: flex;
          flex-direction: column;
        }

        /* Private Session Banner */
        .private-session-banner-section {
          padding: 6rem 0;
          background-color: var(--bg-primary);
        }

        .session-banner-box {
          background: linear-gradient(135deg, rgba(22, 20, 18, 0.98) 0%, rgba(22, 20, 18, 0.9) 100%), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80') center/cover;
          border-radius: var(--radius-sm);
          padding: 3.5rem 3rem;
          color: #FFF;
          border: 1px solid var(--border-dark);
          box-shadow: var(--shadow-floating);
        }

        .max-w-600 {
          max-width: 620px;
        }
      `}</style>

    </div>
  );
}
