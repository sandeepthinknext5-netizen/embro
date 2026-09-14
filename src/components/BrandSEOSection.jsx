import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, ShieldCheck, Leaf, Compass, ArrowRight } from 'lucide-react';

export default function BrandSEOSection({ onNavigate }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const livingLinks = [
    { label: 'Sofas & Loungers', route: 'furniture' },
    { label: 'L-Shaped & Corner Sofas', route: 'furniture' },
    { label: 'Recliner Sofas', route: 'furniture' },
    { label: 'Sofa Cum Beds', route: 'furniture' },
    { label: 'Coffee Tables', route: 'furniture' },
    { label: 'Corner & Side Tables', route: 'furniture' },
    { label: 'Leisure & Accent Chairs', route: 'furniture' },
    { label: 'TV & Media Units', route: 'furniture' },
    { label: 'Display Cabinets', route: 'furniture' },
    { label: 'Ottomans & Pouffes', route: 'furniture' },
    { label: 'Fabric & Velvet Sofas', route: 'furniture' },
    { label: 'Italian Leather Sofas', route: 'furniture' },
    { label: 'Luxury Shoe Racks', route: 'furniture' },
    { label: 'Soft Furnishings & Cushions', route: 'furniture' }
  ];

  const bedroomLinks = [
    { label: 'Beds & Headboards', route: 'bedroom' },
    { label: 'King Size Beds', route: 'bedroom' },
    { label: 'Queen Size Beds', route: 'bedroom' },
    { label: 'Hydraulic Storage Beds', route: 'bedroom' },
    { label: 'Solid Wood Wardrobes', route: 'bedroom' },
    { label: 'Sliding Door Wardrobes', route: 'bedroom' },
    { label: 'Bedside Tables & Nightstands', route: 'bedroom' },
    { label: 'Dressing Tables & Vanities', route: 'bedroom' },
    { label: 'Chest of Drawers', route: 'bedroom' },
    { label: 'Ortho & Memory Foam Mattresses', route: 'bedroom' },
    { label: 'Digital Security Lockers', route: 'bedroom' }
  ];

  const studyLinks = [
    { label: 'Executive Work Desks', route: 'office-and-study' },
    { label: 'Ergonomic Task Chairs', route: 'office-and-study' },
    { label: 'Motorized Sit-Stand Desks', route: 'office-and-study' },
    { label: 'Modular Bookshelves', route: 'office-and-study' },
    { label: 'Filing & Storage Credenzas', route: 'office-and-study' },
    { label: 'Study Table Sets', route: 'office-and-study' }
  ];

  const diningLinks = [
    { label: 'Solid Wood Dining Tables', route: 'dining-room' },
    { label: 'Sculptural Dining Chairs', route: 'dining-room' },
    { label: 'Dining Benches', route: 'dining-room' },
    { label: 'Buffets & Sideboards', route: 'dining-room' },
    { label: 'Bar Stools & Cabinets', route: 'dining-room' },
    { label: 'Travertine Dining Tables', route: 'dining-room' }
  ];

  return (
    <section className="brand-seo-section">
      <div className="container">
        
        {/* Header Tag */}
        <div className="seo-header-strip">
          <div className="seo-header-left">
            <span className="section-label">Architectural Living & Furniture Atelier</span>
            <h2 className="editorial-heading-2">
              Explore Embroshyal Online — Crafted for Beautifully Lived Spaces.
            </h2>
          </div>
          <button 
            className="seo-expand-toggle-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Collapse Full Guide' : 'Read Complete Design Guide'}</span>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Editorial Content Block */}
        <div className="seo-editorial-intro">
          <p className="seo-lead-paragraph">
            Welcome to <strong>Embroshyal</strong>, your premier digital atelier to buy luxury furniture and turnkey architectural interiors online. With an unwavering dedication to timeless joinery, sculptural silhouettes, and sustainable European craftsmanship, we bring you an exquisite collection that seamlessly balances organic warmth, ergonomic precision, and enduring durability.
          </p>
        </div>

        {/* Expandable Rich Content Section */}
        <div className={`seo-collapsible-wrapper ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}>
          
          <div className="seo-columns-grid">
            
            {/* Column 1: Why Buy Online from Embroshyal */}
            <div className="seo-card">
              <h3 className="seo-card-title font-serif">Why Buy Luxury Furniture Online from Embroshyal?</h3>
              <p>
                Shopping for heirloom-grade furniture should be as inspiring as living with it. Our online atelier offers an effortless experience curated for homeowners, architects, and interior designers:
              </p>
              <ul className="seo-card-list">
                <li>
                  <strong>Unrivalled Material Purity:</strong> Hand-finished European white oak, sustainably harvested Burma teak, Italian bouclé, and monolithic Calacatta quartz.
                </li>
                <li>
                  <strong>Photorealistic 3D Spatial Visualisation:</strong> Detailed dimensional schematics, high-resolution 360° views, and complimentary fabric swatch boxes delivered to your door.
                </li>
                <li>
                  <strong>White-Glove Delivery & Installation:</strong> Sanitised, transit-insured delivery by trained master technicians with zero hassle.
                </li>
                <li>
                  <strong>Personal Design Concierge:</strong> Senior interior architects ready to advise on space planning, colour palettes, and custom finishes.
                </li>
              </ul>
            </div>

            {/* Column 2: Architectural Space Curation */}
            <div className="seo-card">
              <h3 className="seo-card-title font-serif">Explore Our Wide Range of Designer Furniture</h3>
              
              <div className="seo-sub-category">
                <h4>Living Room Furniture:</h4>
                <p>
                  From modular feather-down sectionals to monolithic travertine coffee tables and floating acoustic media units, our living room collection transforms your common space into a serene sanctuary of conversation and relaxation.
                </p>
              </div>

              <div className="seo-sub-category">
                <h4>Bedroom Suites & Sleep Systems:</h4>
                <p>
                  Elevate your private quarters with solid wood platform beds, concealed hydraulic storage frames, velvet upholstered headboards, and German-engineered soft-close wardrobes designed for restorative sleep.
                </p>
              </div>

              <div className="seo-sub-category">
                <h4>Dining & Entertaining:</h4>
                <p>
                  Host memorable culinary gatherings with expansive solid oak dining tables, ergonomic upholstered dining chairs, and bespoke buffets that showcase fine craftsmanship.
                </p>
              </div>

              <div className="seo-sub-category">
                <h4>Study & Executive Workspace:</h4>
                <p>
                  Foster focus and creativity with sit-stand motorized desks, ergonomic high-back leather chairs, and modular bookcases built for modern productivity.
                </p>
              </div>
            </div>

          </div>

          {/* Sustainable Ethos Banner */}
          <div className="seo-sustainability-box">
            <div className="seo-eco-icon">
              <Leaf size={22} className="text-gold" />
            </div>
            <div className="seo-eco-text">
              <h4 className="seo-eco-title font-serif">Sustainable Craftsmanship & 10-Year Warranty</h4>
              <p className="seo-eco-desc">
                Every Embroshyal piece is handcrafted from FSC-certified sustainable timber, non-toxic water-based stains, and recyclable hardware. We stand behind our engineering with a comprehensive 10-Year Structural Guarantee and hassle-free returns.
              </p>
            </div>
          </div>

        </div>

        {/* Category Link Clusters (SEO Friendly Directory) */}
        <div className="seo-directory-section">
          
          <div className="seo-directory-group">
            <h4 className="directory-group-title">Explore Living Room Furniture</h4>
            <div className="directory-links-wrap">
              {livingLinks.map((link, idx) => (
                <button 
                  key={idx} 
                  className="directory-link-btn"
                  onClick={() => onNavigate(link.route)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="seo-directory-group">
            <h4 className="directory-group-title">Explore Bedroom Furniture & Mattresses</h4>
            <div className="directory-links-wrap">
              {bedroomLinks.map((link, idx) => (
                <button 
                  key={idx} 
                  className="directory-link-btn"
                  onClick={() => onNavigate(link.route)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="seo-directory-group">
            <h4 className="directory-group-title">Explore Dining Room Furniture</h4>
            <div className="directory-links-wrap">
              {diningLinks.map((link, idx) => (
                <button 
                  key={idx} 
                  className="directory-link-btn"
                  onClick={() => onNavigate(link.route)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="seo-directory-group">
            <h4 className="directory-group-title">Explore Study & Office Furniture</h4>
            <div className="directory-links-wrap">
              {studyLinks.map((link, idx) => (
                <button 
                  key={idx} 
                  className="directory-link-btn"
                  onClick={() => onNavigate(link.route)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Embedded Component Styles */}
      <style>{`
        .brand-seo-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          padding: 4.5rem 0 3.5rem;
          color: var(--text-primary);
        }

        .seo-header-strip {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-light);
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .seo-header-left {
          max-width: 850px;
        }

        .seo-expand-toggle-btn {
          background: #141210;
          color: #ECC868;
          border: 1px solid #C29B38;
          padding: 0.65rem 1.25rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-sans) !important;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }

        .seo-expand-toggle-btn:hover {
          background: #C29B38;
          color: #12100E;
          transform: translateY(-1px);
        }

        .seo-editorial-intro {
          margin: 1.75rem 0 1.25rem;
        }

        .seo-lead-paragraph {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--text-secondary);
          max-width: 1200px;
        }

        /* Collapsible Wrapper */
        .seo-collapsible-wrapper {
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .seo-collapsible-wrapper.is-collapsed {
          max-height: 0;
          opacity: 0;
          margin-bottom: 0;
        }

        .seo-collapsible-wrapper.is-expanded {
          max-height: 2000px;
          opacity: 1;
          margin-bottom: 2rem;
          padding-top: 1.25rem;
        }

        .seo-columns-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 2rem;
        }

        .seo-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
        }

        .seo-card-title {
          font-size: 1.35rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .seo-card p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .seo-card-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .seo-card-list li {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.65;
          position: relative;
          padding-left: 1.25rem;
        }

        .seo-card-list li::before {
          content: '•';
          color: var(--accent-gold);
          font-size: 1.2rem;
          position: absolute;
          left: 0;
          top: -2px;
        }

        .seo-sub-category {
          margin-bottom: 1.15rem;
        }

        .seo-sub-category h4 {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .seo-sub-category p {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0;
        }

        /* Sustainability Box */
        .seo-sustainability-box {
          background: #141210;
          color: #FFF;
          padding: 1.75rem 2rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(194, 155, 56, 0.35);
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .seo-eco-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(194, 155, 56, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .seo-eco-title {
          font-size: 1.15rem;
          color: #ECC868;
          margin-bottom: 0.35rem;
        }

        .seo-eco-desc {
          font-size: 0.84rem;
          color: #D6CEC5;
          line-height: 1.6;
          margin: 0;
        }

        /* Category Directory */
        .seo-directory-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-light);
        }

        .seo-directory-group {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .directory-group-title {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-bronze);
        }

        .directory-links-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem 0.65rem;
        }

        .directory-link-btn {
          background: none;
          border: none;
          font-family: var(--font-sans) !important;
          font-size: 0.78rem;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 2px 0;
          transition: color var(--transition-fast);
          display: inline-flex;
          align-items: center;
          position: relative;
        }

        .directory-link-btn:not(:last-child)::after {
          content: '|';
          margin-left: 0.65rem;
          color: var(--border-medium);
          pointer-events: none;
        }

        .directory-link-btn:hover {
          color: var(--accent-gold);
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .seo-columns-grid {
            grid-template-columns: 1fr;
          }
          .seo-sustainability-box {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}