import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Check, ArrowRight, Layers, Gem, MapPin, Eye, Compass, Award, CheckCircle2, Feather, Flame } from 'lucide-react';

export default function MaterialSensoryLab({ onOpenConsultation }) {
  const materials = [
    {
      id: 'teak',
      name: 'Seasoned Burmese Teak & White Oak',
      category: 'Forest Hardwood',
      origin: 'Shan Highlands & Spessart Forest, Germany',
      coords: '21.9162° N, 95.9560° E',
      grade: 'Grade A+ Quarter-Sawn Old Growth',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
      macroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      inSituTitle: 'Featured in The Aurelia Cane Bed & Monolith Dining Table',
      specs: [
        { label: 'Moisture Equilibrium', val: 'Kiln-Dried to < 7.8%', sub: 'Zero Warping or Seasonal Shrinkage' },
        { label: 'Tensile Flexural Yield', val: '142 MPa Deflection Strength', sub: 'Structural Generational Load Grade' },
        { label: 'Surface Finish', val: 'Botanical Carnauba Hardwax', sub: 'Micro-Porous, Allows Grain to Breathe' },
        { label: 'Natural Oils', val: 'High Tectoguinone Content', sub: 'Naturally Impervious to Moisture & Pests' }
      ],
      description: 'Harvested from certified century-old sustainably managed reserves. Each beam undergoes 14 weeks of progressive temperature-controlled kiln curing followed by artisanal hand-shaping with traditional blind mortise & tenon joinery.'
    },
    {
      id: 'marble',
      name: 'Honed Calacatta Viola & Roman Travertine',
      category: 'Quarried Italian Stone',
      origin: 'Apuan Alps, Carrara & Tivoli Basin, Italy',
      coords: '44.0792° N, 10.1004° E',
      grade: 'Monolithic 20mm Extra-Select Stone',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
      macroImage: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80',
      inSituTitle: 'Featured in The Atlas Centerpiece & Verona Dining Slabs',
      specs: [
        { label: 'Slab Thickness', val: '20mm Monolithic Solid Stone', sub: 'Zero Hollow Fillers or Artificial Backing' },
        { label: 'Tactile Surface Texture', val: 'Velvety Matte Honed Buff', sub: 'Zero Artificial Gloss Glazes' },
        { label: 'Geological Protection', val: 'Hydrophobic Nano-Shield', sub: 'Repels Citrus, Wine & Culinary Oils' },
        { label: 'Edge Articulation', val: 'Hand-Chamfered Bullnose Arc', sub: 'Softened Architectural Edge Profile' }
      ],
      description: 'Individually quarried in the Tuscan Apuan Alps, our Calacatta Viola slabs are selected for their deep cabernet-violet veining over warm alabaster stone. Treated with breathable fluoropolymer nano-sealants that preserve natural crystalline texture.'
    },
    {
      id: 'boucle',
      name: 'Italian Textured Bouclé & Raw Linen',
      category: 'Heritage Textile',
      origin: 'Biella & Lake Como Heritage Mills, Northern Italy',
      coords: '45.5627° N, 8.0583° E',
      grade: 'High-Density Dual-Looped Weave',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      macroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      inSituTitle: 'Featured in The Solis Curved Sofa & Palermo Swivel Chair',
      specs: [
        { label: 'Abrasion Durability', val: '55,000+ Martindale Cycles', sub: 'Heavy Architectural Contract Grade' },
        { label: 'Yarn Composition', val: 'Virgin Wool, Cotton & Flax', sub: '100% Hypoallergenic Natural Fibers' },
        { label: 'Tactile Sensation', val: 'Multi-Depth Cocoon Softness', sub: 'Deep 3D Shadow Play on Curved Silhouettes' },
        { label: 'Stain Resistance', val: 'Eco-Shield Molecular Barrier', sub: 'Spill-Resistant without Harsh Chemicals' }
      ],
      description: 'Spun on heritage dobby looms in the foothills of Piedmont, our Italian bouclé interweaves varied-gauge slub yarns to yield an ultra-tactile three-dimensional topography that contours gracefully around sculptural curved furnishings.'
    },
    {
      id: 'brass',
      name: 'Antiqued Champagne Brass & Bronze',
      category: 'Foundry Cast Metal',
      origin: 'Hand-Cast in Atelier Dedicated Foundry',
      coords: '19.0760° N, 72.8777° E',
      grade: 'Solid Virgin Cu-Zn Architectural Alloy',
      image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80',
      macroImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
      inSituTitle: 'Featured in The Elysian Credenza & Solis Fluted Plinths',
      specs: [
        { label: 'Metal Density', val: '100% Solid Cast Alloy', sub: 'No Thin Electroplate or Hollow Tubing' },
        { label: 'Surface Articulation', val: 'Hand-Brushed Satin Antique', sub: 'Finished with Micro-Crystalline Wax' },
        { label: 'Patina Evolution', val: 'Living Golden Luster', sub: 'Deepens Richly with Human Interaction' },
        { label: 'Hardware Precision', val: 'Diamond Knurled Tactility', sub: 'Engineered with Precision Tolerances' }
      ],
      description: 'Molten virgin brass is poured into custom ceramic molds, hand-filed, and treated with natural botanical oxides to evoke the mellow golden warmth of aged champagne. Sealed with Renaissance micro-wax to preserve depth of tone.'
    }
  ];

  const [activeMaterial, setActiveMaterial] = useState(materials[0]);
  const [viewMode, setViewMode] = useState('macro'); // 'macro' or 'insitu'

  return (
    <section className="material-vault-master-section" id="materials">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-750 mx-auto mb-14">
          <div className="vault-label-badge inline-flex items-center gap-2">
            <Gem size={14} className="text-gold" />
            <span>Material Provenance & Geological Sensory Vault</span>
          </div>
          
          <h2 className="editorial-heading-1 mt-3 text-white">
            Truth in Every <span className="italic text-gold font-normal">Fiber & Grain.</span>
          </h2>
          
          <p className="vault-subheading-text">
            We reject synthetic veneers, sawdust cores, and hollow composites. Every Embroshyal silhouette is anchored in pure, raw architectural matter — seasoned old-growth hardwoods, quarried Tuscan marble monoliths, mill-woven Italian bouclés, and heavy foundry brass.
          </p>
        </div>

        {/* 4 Interactive Material Selector Cards */}
        <div className="material-selector-cards-row">
          {materials.map((mat) => (
            <button
              key={mat.id}
              className={`mat-select-card ${activeMaterial.id === mat.id ? 'active-mat-selected' : ''}`}
              onClick={() => setActiveMaterial(mat)}
            >
              <div className="mat-card-thumb-wrap">
                <img src={mat.image} alt={mat.name} />
                <div className="thumb-gradient"></div>
              </div>
              
              <div className="mat-card-info-col">
                <span className="mat-category-pill">{mat.category}</span>
                <h4 className="mat-name-serif font-serif">{mat.name}</h4>
                <span className="mat-grade-line text-neutral-400">{mat.grade}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Sensory Showcase Exhibition Grid */}
        <div className="vault-exhibition-showcase">
          
          {/* Left Column: Visual Explorer & Geotag Coordinates */}
          <div className="vault-visual-explorer">
            
            <div className="vault-main-image-frame image-zoom-container">
              <img 
                src={viewMode === 'macro' ? activeMaterial.macroImage : activeMaterial.image} 
                alt={activeMaterial.name} 
                className="vault-main-img"
              />
              
              {/* Image Mode Switcher */}
              <div className="view-toggle-strip">
                <button 
                  className={`view-toggle-btn ${viewMode === 'macro' ? 'active-toggle' : ''}`}
                  onClick={() => setViewMode('macro')}
                >
                  <Eye size={13} /> Surface Macro View
                </button>
                <button 
                  className={`view-toggle-btn ${viewMode === 'insitu' ? 'active-toggle' : ''}`}
                  onClick={() => setViewMode('insitu')}
                >
                  <Layers size={13} /> In-Situ Furniture Application
                </button>
              </div>

              {/* Provenance Coordinates Badge */}
              <div className="provenance-geo-pill">
                <MapPin size={13} className="text-gold" />
                <div>
                  <span className="geo-origin font-bold block">{activeMaterial.origin}</span>
                  <span className="geo-coords text-[10px] text-neutral-400 font-mono">{activeMaterial.coords}</span>
                </div>
              </div>

            </div>

            <div className="insitu-caption-bar">
              <span className="text-gold font-bold uppercase text-[10px] tracking-widest block mb-0.5">Architectural Application</span>
              <span className="text-xs text-neutral-300">{activeMaterial.inSituTitle}</span>
            </div>

          </div>

          {/* Right Column: Architectural Specifications & Narrative */}
          <div className="vault-specifications-col">
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">
                  {activeMaterial.category}
                </span>
                <span className="provenance-grade-tag">
                  {activeMaterial.grade}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-3">
                {activeMaterial.name}
              </h3>

              <p className="vault-description-copy">
                {activeMaterial.description}
              </p>

              {/* 4 Laboratory Specifications Cards */}
              <div className="vault-specs-quad-grid">
                {activeMaterial.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="vault-spec-cell">
                    <span className="spec-label-title text-neutral-400">{spec.label}</span>
                    <span className="spec-value-main font-serif text-white font-bold">{spec.val}</span>
                    <span className="spec-sub-note text-gold">{spec.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Swatch Kit Request Banner */}
            <div className="vault-swatch-action-box">
              <div className="swatch-text-side">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck size={20} className="text-gold" />
                  <h4 className="font-serif text-lg text-white font-medium">Request Complimentary Tactile Swatch Chest</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Delivered to your doorstep in a handcrafted wooden crate containing genuine marble chips, seasoned timber blocks, and looped bouclé fabric swatches.
                </p>
              </div>

              <button 
                className="btn-gold h-11 px-7 text-xs uppercase tracking-widest font-bold whitespace-nowrap shadow-xl"
                onClick={onOpenConsultation}
              >
                Order Free Swatches <ArrowRight size={15} />
              </button>
            </div>

          </div>

        </div>

        {/* 4 Sustainability & Provenance Badges Strip */}
        <div className="sustainability-badges-strip">
          <div className="badge-item">
            <CheckCircle2 size={16} className="text-gold" />
            <span>100% FSC® Certified Sustainable Timbers</span>
          </div>
          <div className="badge-item">
            <CheckCircle2 size={16} className="text-gold" />
            <span>Zero VOC Food-Safe Botanical Hardwaxes</span>
          </div>
          <div className="badge-item">
            <CheckCircle2 size={16} className="text-gold" />
            <span>Genuine Monolithic Quarried Italian Stone</span>
          </div>
          <div className="badge-item">
            <CheckCircle2 size={16} className="text-gold" />
            <span>Solid Heavy Virgin Brass Foundry Casting</span>
          </div>
        </div>

      </div>

      {/* FULL SCOPED LUXURY STYLES */}
      <style>{`
        .material-vault-master-section {
          background-color: #0E0D0B;
          color: #FFF;
          padding: 7.5rem 0;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .max-w-750 {
          max-width: 780px;
        }

        .vault-label-badge {
          background: rgba(194, 155, 56, 0.15);
          border: 1px solid rgba(194, 155, 56, 0.35);
          color: var(--accent-gold);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 0.45rem 1.25rem;
          border-radius: 50px;
          margin-bottom: 0.5rem;
        }

        .vault-subheading-text {
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.7;
          color: #C5BFB8;
          margin-top: 1rem;
        }

        /* 4 Selector Cards */
        .material-selector-cards-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }

        @media (max-width: 1024px) {
          .material-selector-cards-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .material-selector-cards-row {
            grid-template-columns: 1fr;
          }
        }

        .mat-select-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          overflow: hidden;
          padding: 0;
          cursor: pointer;
          transition: all var(--transition-medium);
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .mat-select-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(194, 155, 56, 0.4);
          transform: translateY(-4px);
        }

        .active-mat-selected {
          background: rgba(194, 155, 56, 0.1) !important;
          border: 2px solid var(--accent-gold) !important;
          box-shadow: 0 8px 30px rgba(194, 155, 56, 0.25);
        }

        .mat-card-thumb-wrap {
          position: relative;
          height: 100px;
          width: 100%;
          overflow: hidden;
        }

        .mat-card-thumb-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .mat-select-card:hover .mat-card-thumb-wrap img {
          transform: scale(1.08);
        }

        .thumb-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(14, 13, 11, 0.9) 0%, transparent 60%);
        }

        .mat-card-info-col {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mat-category-pill {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold);
        }

        .mat-name-serif {
          font-size: 1.15rem;
          color: #FFF;
          line-height: 1.3;
          margin-top: 0.1rem;
        }

        .mat-grade-line {
          font-size: 0.72rem;
        }

        /* Exhibition Grid */
        .vault-exhibition-showcase {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 3.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: var(--radius-sm);
          padding: 3rem;
          margin-bottom: 3.5rem;
        }

        @media (max-width: 1050px) {
          .vault-exhibition-showcase {
            grid-template-columns: 1fr;
            padding: 2rem;
            gap: 2.5rem;
          }
        }

        .vault-visual-explorer {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .vault-main-image-frame {
          position: relative;
          min-height: 440px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .vault-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .view-toggle-strip {
          position: absolute;
          top: 16px;
          left: 16px;
          display: flex;
          gap: 0.4rem;
          background: rgba(14, 13, 11, 0.85);
          backdrop-filter: blur(10px);
          padding: 0.3rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          z-index: 5;
        }

        .view-toggle-btn {
          background: transparent;
          border: none;
          color: #BBB;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.35rem 0.85rem;
          border-radius: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          transition: all var(--transition-fast);
        }

        .active-toggle {
          background: var(--accent-gold) !important;
          color: #161412 !important;
          font-weight: 700;
        }

        .provenance-geo-pill {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(14, 13, 11, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(194, 155, 56, 0.4);
          padding: 0.6rem 1rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 0.65rem;
          z-index: 5;
        }

        .geo-origin {
          font-size: 0.78rem;
          color: #FFF;
        }

        .insitu-caption-bar {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1.25rem;
        }

        /* Specifications Column */
        .vault-specifications-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .provenance-grade-tag {
          font-size: 0.68rem;
          font-weight: 700;
          color: #D5CEC6;
          background: rgba(255, 255, 255, 0.08);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .vault-description-copy {
          font-size: 0.92rem;
          font-weight: 300;
          color: #C8C2BA;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .vault-specs-quad-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 1.75rem;
          margin-bottom: 2.25rem;
        }

        @media (max-width: 550px) {
          .vault-specs-quad-grid {
            grid-template-columns: 1fr;
          }
        }

        .vault-spec-cell {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-sm);
          padding: 1rem 1.15rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .spec-label-title {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .spec-value-main {
          font-size: 1.15rem;
          line-height: 1.3;
        }

        .spec-sub-note {
          font-size: 0.72rem;
          font-weight: 500;
        }

        .vault-swatch-action-box {
          background: linear-gradient(135deg, rgba(194, 155, 56, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%);
          border: 1px solid rgba(194, 155, 56, 0.35);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.75rem;
        }

        @media (max-width: 700px) {
          .vault-swatch-action-box {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        /* Sustainability Strip */
        .sustainability-badges-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 2.5rem;
        }

        @media (max-width: 900px) {
          .sustainability-badges-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .sustainability-badges-strip {
            grid-template-columns: 1fr;
          }
        }

        .badge-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.78rem;
          color: #DDD;
        }
      `}</style>
    </section>
  );
}
