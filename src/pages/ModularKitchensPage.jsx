import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, 
  Ruler, Calendar, Layers, Droplets, Flame, Zap, 
  Clock, Check, Heart, Award, ThumbsUp, HelpCircle 
} from 'lucide-react';

export default function ModularKitchensPage({ onOpenConsultation, onNavigate }) {
  
  // Kitchen Layouts with High-Res Editorial Photography
  const kitchenLayouts = [
    {
      id: 'island',
      name: 'Island Kitchen Suites',
      tagline: 'The Grand Social & Culinary Epicenter',
      desc: 'An expansive central quartz waterfall island serving as an active prep station, induction cooktop, and casual breakfast bar. Designed for open-plan homes and effortless social entertaining.',
      idealFor: 'Villas, Penthouses & 3/4 BHK Open Floorplans',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
      features: [
        'Waterfall Calacatta Quartz Island with breakfast seating',
        'Blum Legrabox German soft-close tandem drawers (65kg rating)',
        'Built-in Downdraft ventilation & concealed induction hob',
        'Dedicated wine cooler niche & integrated double pantry'
      ],
      priceRange: '₹3.8L – ₹7.5L'
    },
    {
      id: 'l-shaped',
      name: 'L-Shaped Kitchens',
      tagline: 'The Ergonomic Golden Triangle Workflow',
      desc: 'Seamlessly organizes refrigerator, prep sink, and hot cooking range into an intuitive ergonomic triangle. Features ingenious corner space optimization and expansive continuous counter runs.',
      idealFor: 'Apartments, Urban Condos & Medium-to-Large Homes',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      features: [
        'Magic Corner blind-carousel swivel mechanism',
        'Anti-fingerprint super-matte lacquered shutter panels',
        'Floor-to-ceiling appliance tower with microwave niche',
        'Under-mount quartz sink with pull-out brass spray tap'
      ],
      priceRange: '₹2.4L – ₹4.8L'
    },
    {
      id: 'parallel',
      name: 'Parallel Galley Kitchens',
      tagline: 'Chef-Grade Efficiency & Parallel Lanes',
      desc: 'Two parallel counter banks separating wet washing and chopping from hot boiling and baking. Eliminates wasted steps for serious home chefs while doubling storage and preparation real estate.',
      idealFor: 'Gourmet Enthusiasts & Linear Layout Urban Suites',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85',
      features: [
        'Distinct wet prep zone and dry cooking/baking counter',
        'Double full-height pantry pull-out larders with glass baskets',
        'Heavy-duty stainless steel spice and cutlery drawer organizers',
        'Full-depth wall units with push-to-open bi-fold glass doors'
      ],
      priceRange: '₹2.8L – ₹5.2L'
    },
    {
      id: 'u-shaped',
      name: 'U-Shaped Panoramic Kitchens',
      tagline: 'Enclosed Maximum Countertop & Storage Luxury',
      desc: 'Wraps three perimeter walls with continuous engineered quartz surfaces and deep storage modules. Perfect for large families requiring multiple simultaneous preparation stations.',
      idealFor: 'Dedicated Large Kitchen Rooms & Independent Homes',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85',
      features: [
        'Triple-side continuous countertop with zero joint lines',
        'Dual flying-saucer corner organizers on both corner junctions',
        'Integrated dishwasher, oven, and warming drawer suite',
        'Overhead perimeter LED illumination with dimming sensors'
      ],
      priceRange: '₹3.2L – ₹6.2L'
    },
    {
      id: 'straight',
      name: 'Straight Linear Kitchens',
      tagline: 'Architectural Minimalist Simplicity',
      desc: 'Streamlines all appliances, sink, and cooking into a single architectural wall run. Maximizes living floor space while concealing utility lines behind handleless flush panels.',
      idealFor: 'Studio Lofts, 1/2 BHKs & Compact Modern Suites',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
      features: [
        'Single-wall seamless vertical integration',
        'Concealed built-in refrigerator and integrated dishwasher',
        'Continuous stone backsplash matching counter surface',
        'Motorized push-to-open wall units'
      ],
      priceRange: '₹1.8L – ₹3.2L'
    }
  ];

  // Material & Finishes Library
  const materials = [
    {
      name: 'Super-Matte Anti-Fingerprint',
      type: 'Nanotech Acrylic',
      desc: 'Soft thermal-healing velvet texture that resists oil, fingerprints, and smudges with ultra-low light reflectivity.',
      img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80',
      tag: 'Best Seller'
    },
    {
      name: 'Fluted Tinted Smoked Glass',
      type: 'Aluminum Profile Glass',
      desc: 'Tempered European fluted bronze glass with integrated vertical LED ribbon lighting for illuminated crockery displays.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
      tag: 'Luxury Tier'
    },
    {
      name: 'Calacatta Gold Engineered Quartz',
      type: 'Countertop & Backsplash',
      desc: '93% natural quartz with non-porous antimicrobial surface that resists turmeric, citrus, heat, and knife scratches.',
      img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=400&q=80',
      tag: 'Stain Proof'
    },
    {
      name: 'Natural European Oak Veneer',
      type: 'Handcrafted Wood Finish',
      desc: 'Sustainably harvested genuine white oak with poly-coat water sealant, bringing organic biophilic warmth into cooking spaces.',
      img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=400&q=80',
      tag: 'Organic Luxe'
    }
  ];

  // German Hardware & Storage Innovations
  const innovations = [
    {
      title: 'Blum Servo-Drive Motorized Opening',
      desc: 'A light touch of the knee or fingertip automatically opens waste bins and heavy lift-up wall cabinets seamlessly.',
      icon: <Zap className="text-gold" size={24} />
    },
    {
      title: 'BWP 710 Boiling Water Resistant Plywood',
      desc: 'Marine grade treated core boards calibrated with anti-termite and anti-borer chemicals guaranteed for 10+ years.',
      icon: <Droplets className="text-gold" size={24} />
    },
    {
      title: 'Magic Corner Swivel Carousels',
      desc: 'Brings deep rear corner pots and heavy pressure cookers gliding effortlessly into the front with 35kg load capacity.',
      icon: <Layers className="text-gold" size={24} />
    },
    {
      title: '45-Day Guaranteed Handover',
      desc: 'Precision factory prefabricated components delivered and assembled on site with zero messy carpentry dust in your home.',
      icon: <Clock className="text-gold" size={24} />
    }
  ];

  // Interactive Kitchen Cost Calculator State
  const [calcLayout, setCalcLayout] = useState('l-shaped');
  const [calcSize, setCalcSize] = useState('medium');
  const [calcFinish, setCalcFinish] = useState('premium');

  const calculateEstimate = () => {
    let base = 220000;
    if (calcLayout === 'island') base = 380000;
    if (calcLayout === 'parallel') base = 270000;
    if (calcLayout === 'u-shaped') base = 320000;
    if (calcLayout === 'straight') base = 180000;

    let sizeMultiplier = 1.0;
    if (calcSize === 'large') sizeMultiplier = 1.45;
    if (calcSize === 'compact') sizeMultiplier = 0.85;

    let finishMultiplier = 1.0;
    if (calcFinish === 'luxury') finishMultiplier = 1.35;
    if (calcFinish === 'standard') finishMultiplier = 0.88;

    const total = Math.round((base * sizeMultiplier * finishMultiplier) / 10000) * 10000;
    const min = total - 30000;
    const max = total + 45000;

    const fmt = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
    return `${fmt(min)} – ${fmt(max)}`;
  };

  const [activeTab, setActiveTab] = useState('island');
  const currentLayout = kitchenLayouts.find(l => l.id === activeTab) || kitchenLayouts[0];

  return (
    <div className="page-wrapper animate-fade">
      
      {/* 1. Architectural Hero Banner */}
      <section className="kitchen-hero-banner">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <button onClick={() => onNavigate('interiors')}>Interiors</button>
            <span>/</span>
            <span className="text-gold">Modular Kitchens</span>
          </div>

          <div className="kitchen-hero-content">
            <span className="section-label text-gold">Culinary Architecture Atelier</span>
            <h1 className="editorial-heading-1 text-white">
              German Precision Modular Kitchens.
            </h1>
            <p className="kitchen-hero-desc">
              Custom-scaled to your cooking routines, countertop ergonomics, and lifestyle habits. Handcrafted with boiling-water-resistant Marine Ply, Blum German soft-close hardware, and quartz waterfall islands.
            </p>

            <div className="kitchen-hero-badges-strip">
              <div className="hero-badge-pill">
                <ShieldCheck size={16} className="text-gold" />
                <span>10-Year Water & Termite Warranty</span>
              </div>
              <div className="hero-badge-pill">
                <Clock size={16} className="text-gold" />
                <span>45-Day Guaranteed Delivery</span>
              </div>
              <div className="hero-badge-pill">
                <Award size={16} className="text-gold" />
                <span>Blum German Fittings</span>
              </div>
            </div>

            <div className="kitchen-hero-actions">
              <button className="btn-gold" onClick={onOpenConsultation}>
                Book Free 3D Kitchen Design <ArrowRight size={16} className="ml-1" />
              </button>
              <a href="#calculator" className="btn-secondary-light">
                Calculate Kitchen Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Kitchen Layouts Showcase */}
      <section className="section-padding bg-card">
        <div className="container">
          
          <div className="section-header-centered text-center mb-5">
            <span className="section-label">Tailored Floorplan Architecture</span>
            <h2 className="editorial-heading-2">Choose Your Kitchen Layout</h2>
            <p className="editorial-subheading mx-auto max-w-600">
              Explore our five signature architectural modular layouts engineered for seamless workflow and maximum storage.
            </p>
          </div>

          {/* Layout Tab Switcher */}
          <div className="kitchen-layout-selector-bar">
            {kitchenLayouts.map((layout) => (
              <button
                key={layout.id}
                className={`layout-select-btn ${activeTab === layout.id ? 'active' : ''}`}
                onClick={() => setActiveTab(layout.id)}
              >
                <span>{layout.name}</span>
              </button>
            ))}
          </div>

          {/* Active Layout Detailed Showcase */}
          <div className="layout-showcase-grid">
            
            {/* Visual Image Side */}
            <div className="layout-image-pane image-zoom-container">
              <img src={currentLayout.image} alt={currentLayout.name} />
              <div className="layout-image-overlay">
                <span className="overlay-ideal">{currentLayout.idealFor}</span>
                <span className="overlay-price">Est. {currentLayout.priceRange}</span>
              </div>
            </div>

            {/* Details and Engineering Specs Side */}
            <div className="layout-info-pane">
              <span className="layout-sub-badge">{currentLayout.tagline}</span>
              <h3 className="layout-title font-serif">{currentLayout.name}</h3>
              <p className="layout-description">{currentLayout.desc}</p>

              <div className="layout-inclusions-box">
                <h4 className="inclusions-title">Standard Master Inclusions:</h4>
                <ul className="inclusions-list">
                  {currentLayout.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="text-gold shrink-0 mt-1" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="layout-cta-row">
                <button className="btn-gold" onClick={onOpenConsultation}>
                  Customize This Layout in 3D <ArrowRight size={15} className="ml-1" />
                </button>
                <div className="warranty-guarantee-note">
                  <ShieldCheck size={14} className="text-gold" />
                  <span>Includes 10-Yr BWP Plywood Guarantee</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Materials, Shutters & Countertops Sensory Library */}
      <section className="section-padding">
        <div className="container">
          
          <div className="section-header-centered text-center mb-5">
            <span className="section-label">Master Finishes & Quartz</span>
            <h2 className="editorial-heading-2">Curated Material Palette</h2>
            <p className="editorial-subheading mx-auto max-w-600">
              Every surface is selected for scratch resistance, oil repellence, anti-microbial hygiene, and enduring luxury aesthetics.
            </p>
          </div>

          <div className="materials-cards-grid">
            {materials.map((mat, i) => (
              <div key={i} className="material-item-card">
                <div className="material-img-wrap image-zoom-container">
                  <img src={mat.img} alt={mat.name} />
                  <span className="mat-badge">{mat.tag}</span>
                </div>
                <div className="material-meta">
                  <span className="mat-type">{mat.type}</span>
                  <h4 className="mat-title font-serif">{mat.name}</h4>
                  <p className="mat-desc">{mat.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Hardware Innovations & Engineering Standards */}
      <section className="section-padding bg-secondary">
        <div className="container">
          
          <div className="section-header-centered text-center mb-5">
            <span className="section-label">Built to Last Generations</span>
            <h2 className="editorial-heading-2">Hardware & Structural Engineering</h2>
            <p className="editorial-subheading mx-auto max-w-600">
              We never cut corners on what’s inside your cabinets. Tested for over 200,000 opening cycles.
            </p>
          </div>

          <div className="innovations-grid">
            {innovations.map((item, idx) => (
              <div key={idx} className="innovation-box">
                <div className="innovation-icon-wrap">
                  {item.icon}
                </div>
                <h4 className="innovation-title font-serif">{item.title}</h4>
                <p className="innovation-desc">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Interactive Instant Kitchen Price Calculator */}
      <section id="calculator" className="section-padding">
        <div className="container">
          
          <div className="kitchen-calculator-card">
            
            <div className="calc-left">
              <span className="section-label text-gold">Transparent Instant Pricing</span>
              <h2 className="editorial-heading-2 text-white">Modular Kitchen Cost Estimator</h2>
              <p className="text-muted-light mb-4">
                Configure your kitchen layout, room size, and material tier to calculate a realistic turnkey estimate.
              </p>

              {/* Step 1: Layout */}
              <div className="calc-group">
                <label className="calc-label">1. Select Layout Architecture</label>
                <div className="calc-pill-options">
                  {[
                    { id: 'l-shaped', label: 'L-Shaped' },
                    { id: 'island', label: 'Island Suite' },
                    { id: 'parallel', label: 'Parallel' },
                    { id: 'u-shaped', label: 'U-Shaped' },
                    { id: 'straight', label: 'Straight' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      className={`calc-pill-btn ${calcLayout === item.id ? 'active' : ''}`}
                      onClick={() => setCalcLayout(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Size */}
              <div className="calc-group mt-3">
                <label className="calc-label">2. Kitchen Floor Area</label>
                <div className="calc-pill-options">
                  {[
                    { id: 'compact', label: 'Compact (60–80 sq.ft)' },
                    { id: 'medium', label: 'Standard (80–130 sq.ft)' },
                    { id: 'large', label: 'Expansive (130–220 sq.ft)' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      className={`calc-pill-btn ${calcSize === item.id ? 'active' : ''}`}
                      onClick={() => setCalcSize(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Finish */}
              <div className="calc-group mt-3">
                <label className="calc-label">3. Surface & Shutter Tier</label>
                <div className="calc-pill-options">
                  {[
                    { id: 'standard', label: 'Contemporary Matte' },
                    { id: 'premium', label: 'Super-Matte Acrylic & Quartz' },
                    { id: 'luxury', label: 'Fluted Tinted Glass & Sintered Stone' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      className={`calc-pill-btn ${calcFinish === item.id ? 'active' : ''}`}
                      onClick={() => setCalcFinish(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Price Output Card */}
            <div className="calc-right">
              <span className="calc-est-subtitle">Estimated Turnkey Investment</span>
              <div className="calc-price-display font-serif">{calculateEstimate()}</div>
              
              <ul className="calc-benefits-list">
                <li><Check size={14} className="text-gold mr-1" /> 100% BWP Marine Plywood Core (IS 710)</li>
                <li><Check size={14} className="text-gold mr-1" /> Blum German Soft-Close Tandem Drawers</li>
                <li><Check size={14} className="text-gold mr-1" /> Engineered Calacatta Quartz Countertop</li>
                <li><Check size={14} className="text-gold mr-1" /> 10-Year Water & Termite Structural Warranty</li>
                <li><Check size={14} className="text-gold mr-1" /> 45-Day Guaranteed Factory-to-Site Handover</li>
              </ul>

              <button className="btn-gold w-full mt-4" onClick={onOpenConsultation}>
                Book Free 3D Measurement & CAD <ArrowRight size={15} className="ml-1" />
              </button>
              <p className="calc-disclaimer-text">Final quote confirmed after complimentary on-site laser measurement.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Step-by-Step Turnkey Process */}
      <section className="section-padding bg-card">
        <div className="container">
          
          <div className="section-header-centered text-center mb-5">
            <span className="section-label">How We Build Your Dream Kitchen</span>
            <h2 className="editorial-heading-2">The 4-Step Turnkey Journey</h2>
          </div>

          <div className="kitchen-process-grid">
            
            <div className="process-step-card">
              <div className="process-step-num">01</div>
              <h4 className="font-serif process-step-title">Free 3D Consultation</h4>
              <p className="process-step-desc">Our senior kitchen architects visit your space or meet online to analyze cooking habits, storage volume, and aesthetic style.</p>
            </div>

            <div className="process-step-card">
              <div className="process-step-num">02</div>
              <h4 className="font-serif process-step-title">Laser Measurement & CAD</h4>
              <p className="process-step-desc">Millimeter-precise laser measuring of plumbing points, gas inlets, and electrical sockets to eliminate on-site gaps.</p>
            </div>

            <div className="process-step-card">
              <div className="process-step-num">03</div>
              <h4 className="font-serif process-step-title">Factory Automated CNC Build</h4>
              <p className="process-step-desc">German CNC machinery cuts, edges, and drills your marine ply boards in controlled cleanrooms for zero dust in your home.</p>
            </div>

            <div className="process-step-card">
              <div className="process-step-num">04</div>
              <h4 className="font-serif process-step-title">45-Day Handover & 10-Yr Guarantee</h4>
              <p className="process-step-desc">Professional white-glove installation completed in 3–5 days with comprehensive 10-year warranty certification.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Final Consultation CTA Strip */}
      <section className="kitchen-final-cta-section">
        <div className="container text-center">
          <span className="section-label text-gold">Start Your Kitchen Transformation</span>
          <h2 className="editorial-heading-2 text-white">Let’s Design Your Kitchen in Photorealistic 3D.</h2>
          <p className="kitchen-final-sub">
            Meet with our certified kitchen architects for a complimentary 3D design session and receive itemized transparent pricing.
          </p>
          <div className="kitchen-final-btn-wrap">
            <button className="btn-gold" onClick={onOpenConsultation}>
              Book Free Kitchen Design Session <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Component Styles */}
      <style>{`
        .kitchen-hero-banner {
          background: linear-gradient(to right, rgba(18, 16, 14, 0.95), rgba(18, 16, 14, 0.72)), url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=85');
          background-size: cover;
          background-position: center;
          padding: 6.5rem 0 5.5rem;
          color: #FFF;
        }

        .kitchen-hero-content {
          max-width: 780px;
        }

        .kitchen-hero-desc {
          font-size: 1.15rem;
          color: #D6CEC5;
          margin-top: 1.25rem;
          line-height: 1.7;
        }

        .kitchen-hero-badges-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-top: 2rem;
        }

        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(194, 155, 56, 0.35);
          padding: 0.45rem 1rem;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #F5F2EB;
        }

        .kitchen-hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: 2.5rem;
          flex-wrap: wrap;
        }

        .btn-secondary-light {
          background: transparent;
          color: #FFF;
          border: 1px solid rgba(255, 255, 255, 0.4);
          padding: 0.85rem 1.6rem;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.25s ease;
        }

        .btn-secondary-light:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--accent-gold);
          color: var(--accent-gold);
        }

        /* Layout Tabs */
        .kitchen-layout-selector-bar {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .layout-select-btn {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 0.65rem 1.35rem;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .layout-select-btn.active {
          background: #141210;
          color: #ECC868;
          border-color: #C29B38;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }

        .layout-showcase-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          align-items: center;
          background: var(--bg-secondary);
          padding: 2.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }

        .layout-image-pane {
          position: relative;
          height: 440px;
          border-radius: var(--radius-sm);
          overflow: hidden;
        }

        .layout-image-pane img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .layout-image-overlay {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
          display: flex;
          justify-content: space-between;
          background: rgba(18, 16, 14, 0.85);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(194, 155, 56, 0.3);
          color: #FFF;
          font-size: 0.82rem;
          font-weight: 600;
        }

        .overlay-price {
          color: var(--accent-gold);
        }

        .layout-sub-badge {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--accent-gold);
          font-weight: 700;
          display: block;
          margin-bottom: 0.35rem;
        }

        .layout-title {
          font-size: 1.95rem;
          color: var(--text-primary);
          margin-bottom: 0.85rem;
        }

        .layout-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .layout-inclusions-box {
          background: var(--bg-card);
          padding: 1.35rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          margin-bottom: 1.5rem;
        }

        .inclusions-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .inclusions-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          font-size: 0.86rem;
          color: var(--text-secondary);
        }

        .inclusions-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
        }

        .layout-cta-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .warranty-guarantee-note {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        /* Materials Grid */
        .materials-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }

        .material-item-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: transform var(--transition-medium);
        }

        .material-item-card:hover {
          transform: translateY(-4px);
        }

        .material-img-wrap {
          height: 200px;
          position: relative;
        }

        .material-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mat-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: rgba(18, 16, 14, 0.85);
          color: var(--accent-gold);
          border: 1px solid var(--accent-gold);
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
          text-transform: uppercase;
        }

        .material-meta {
          padding: 1.25rem;
        }

        .mat-type {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-gold);
          font-weight: 700;
          display: block;
          margin-bottom: 0.25rem;
        }

        .mat-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .mat-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* Innovations Grid */
        .innovations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }

        .innovation-box {
          background: var(--bg-card);
          padding: 1.75rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
        }

        .innovation-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(194, 155, 56, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .innovation-title {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
        }

        .innovation-desc {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Calculator Card */
        .kitchen-calculator-card {
          background: #141210;
          color: #FFF;
          border-radius: var(--radius-md);
          padding: 3.5rem;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 3.5rem;
          border: 1px solid rgba(194, 155, 56, 0.35);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .calc-group {
          margin-bottom: 1.25rem;
        }

        .calc-label {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: #E2DCD5;
          margin-bottom: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .calc-pill-options {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .calc-pill-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #E2DCD5;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.55rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .calc-pill-btn.active {
          background: #C29B38;
          color: #12100E;
          border-color: #C29B38;
          font-weight: 700;
          box-shadow: 0 2px 10px rgba(194, 155, 56, 0.4);
        }

        .calc-right {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(194, 155, 56, 0.3);
          border-radius: var(--radius-sm);
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .calc-est-subtitle {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #D6CEC5;
        }

        .calc-price-display {
          font-size: 2.3rem;
          color: #ECC868;
          font-weight: 700;
          margin: 0.5rem 0 1.25rem;
        }

        .calc-benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          font-size: 0.8rem;
          color: #D6CEC5;
        }

        .calc-benefits-list li {
          display: flex;
          align-items: center;
        }

        .calc-disclaimer-text {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.45);
          text-align: center;
          margin-top: 0.75rem;
        }

        /* 4-Step Process */
        .kitchen-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .process-step-card {
          background: var(--bg-secondary);
          padding: 2rem 1.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          position: relative;
        }

        .process-step-num {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 700;
          color: rgba(194, 155, 56, 0.4);
          line-height: 1;
          margin-bottom: 1rem;
        }

        .process-step-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }

        .process-step-desc {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Final CTA */
        .kitchen-final-cta-section {
          background: #141210;
          padding: 5rem 0;
          color: #FFF;
          border-top: 1px solid rgba(194, 155, 56, 0.3);
        }

        .kitchen-final-sub {
          font-size: 1.05rem;
          color: #D6CEC5;
          max-width: 620px;
          margin: 1rem auto 2rem;
          line-height: 1.6;
        }

        @media (max-width: 1080px) {
          .layout-showcase-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .materials-cards-grid,
          .innovations-grid,
          .kitchen-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .kitchen-calculator-card {
            grid-template-columns: 1fr;
            padding: 2rem;
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .materials-cards-grid,
          .innovations-grid,
          .kitchen-process-grid {
            grid-template-columns: 1fr;
          }
          .kitchen-hero-banner {
            padding: 4.5rem 0 3.5rem;
          }
          .layout-image-pane {
            height: 280px;
          }
        }
      `}</style>
    </div>
  );
}