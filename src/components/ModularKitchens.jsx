import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export default function ModularKitchens({ onOpenConsultation }) {
  const layouts = [
    {
      id: 'island',
      name: 'Island Kitchens',
      subtitle: 'The Ultimate Social & Culinary Hub',
      desc: 'Featuring a central quartz waterfall island with built-in hob, breakfast bar seating, integrated wine cooler, and 360-degree circulation.',
      idealFor: 'Large Open-Plan Residences & Luxury Villas',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      specs: ['Waterfall Calacatta Quartz Counter', 'Blum Legrabox German Tandem Drawers', 'Integrated BORA Downdraft Cooktop', 'Sensor-Activated Under-Cabinet 2700K Glow']
    },
    {
      id: 'l-shaped',
      name: 'L-Shaped Kitchens',
      subtitle: 'Ergonomic Golden Triangle Workflow',
      desc: 'Seamless corner carousels, uninterrupted counter runs, and space for a cozy breakfast banquet table.',
      idealFor: 'Modern Apartments & Medium-to-Large Homes',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      specs: ['Magic Corner Swivel Trays (30kg rating)', 'Anti-Fingerprint Super-Matte Acrylic Shutter', 'Soft-Close Tandem Pantry Unit', 'Under-Mount Fragranite Sink with Pull-Out Brass Tap']
    },
    {
      id: 'parallel',
      name: 'Parallel Kitchens',
      subtitle: 'Chef-Grade Efficiency & Parallel Lanes',
      desc: 'Two parallel counter banks separating wet prep from dry cooking zones for maximum culinary speed and double storage.',
      idealFor: 'Gourmet Chefs & Linear Urban Apartments',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
      specs: ['Separate Wet Prep & Hot Cooking Stations', 'Floor-to-Ceiling Appliance Garage', 'Double Built-in Convection Ovens', 'Heavy-Duty Stainless Steel Cutlery Inserts']
    },
    {
      id: 'u-shaped',
      name: 'U-Shaped Kitchens',
      subtitle: 'Enclosed Panoramic Culinary Haven',
      desc: 'Surrounds the chef with continuous counters on three walls, ideal for intensive family meal preparations and deep perimeter cabinetry.',
      idealFor: 'Spacious Dedicated Kitchen Suites',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
      specs: ['Triple-Side Workstation Layout', 'Dual Flying Saucer Corner Units', 'Built-in Dishwasher and Microwave Niche', 'Anti-Scratch Sintered Stone Surfaces']
    },
    {
      id: 'straight',
      name: 'Straight Kitchens',
      subtitle: 'Linear Minimalist Elegance',
      desc: 'Streamlined single-wall architecture with clean continuous lines and concealed appliances for compact modern living.',
      idealFor: 'Studio Lofts & Compact Penthouse Kitchens',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      specs: ['Linear Single-Run Ergonomics', 'Touch-to-Open Bi-fold Overhead Wall Units', 'Concealed Integrated Refrigerator', 'Continuous Seamless Backsplash Slab']
    }
  ];

  const [activeLayout, setActiveLayout] = useState(layouts[0]);

  return (
    <section className="section-padding modular-kitchens-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header-centered text-center">
          <span className="section-label">Culinary Architecture</span>
          <h2 className="editorial-heading-2">Beautifully Designed. Brilliantly Organised.</h2>
          <p className="editorial-subheading mx-auto max-w-600">
            Create a kitchen that works beautifully around your routines, storage needs and personal style.
          </p>
        </div>

        {/* Layout Switcher Tabs */}
        <div className="kitchen-layout-tabs">
          {layouts.map((layout) => (
            <button 
              key={layout.id}
              className={`kitchen-tab-btn ${activeLayout.id === layout.id ? 'active-kitchen-tab' : ''}`}
              onClick={() => setActiveLayout(layout)}
            >
              {layout.name}
            </button>
          ))}
        </div>

        {/* Active Layout Showcase Card */}
        <div className="kitchen-showcase-box">
          <div className="kitchen-image-area image-zoom-container">
            <img src={activeLayout.image} alt={activeLayout.name} />
            <div className="kitchen-overlay-badge">
              <Sparkles size={13} className="text-gold" />
              <span>{activeLayout.idealFor}</span>
            </div>
          </div>

          <div className="kitchen-details-area">
            <span className="kitchen-sub-tag">{activeLayout.subtitle}</span>
            <h3 className="kitchen-name font-serif">{activeLayout.name}</h3>
            <p className="kitchen-desc">{activeLayout.desc}</p>

            <h4 className="specs-header">Standard Engineering Inclusions:</h4>
            <ul className="kitchen-specs-list">
              {activeLayout.specs.map((spec, i) => (
                <li key={i}>
                  <div className="spec-check-icon">
                    <Check size={14} />
                  </div>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>

            <div className="kitchen-action-row">
              <button className="btn-gold" onClick={onOpenConsultation}>
                Design Your Kitchen <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .modular-kitchens-section {
          background-color: var(--bg-primary);
        }

        .kitchen-layout-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .kitchen-tab-btn {
          padding: 0.65rem 1.35rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-card);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .kitchen-tab-btn:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }

        .active-kitchen-tab {
          background: var(--bg-dark);
          color: #FFF;
          border-color: var(--bg-dark);
        }

        .kitchen-showcase-box {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }

        @media (max-width: 960px) {
          .kitchen-showcase-box {
            grid-template-columns: 1fr;
          }
        }

        .kitchen-image-area {
          position: relative;
          min-height: 420px;
          background: #EFECE6;
        }

        .kitchen-overlay-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(22, 20, 18, 0.9);
          color: #FFF;
          backdrop-filter: blur(8px);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .kitchen-details-area {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .kitchen-sub-tag {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent-bronze);
          margin-bottom: 0.35rem;
        }

        .kitchen-name {
          font-size: 1.9rem;
          color: var(--text-primary);
          margin-bottom: 0.85rem;
        }

        .kitchen-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .specs-header {
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .kitchen-specs-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 2rem;
        }

        .kitchen-specs-list li {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .spec-check-icon {
          width: 20px;
          height: 20px;
          background: rgba(194, 155, 56, 0.15);
          color: var(--accent-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
