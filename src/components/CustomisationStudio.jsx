import React, { useState } from 'react';
import { Palette, Layers, Maximize2, Sparkles, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CustomisationStudio({ onOpenConsultation }) {
  const { addToCart } = useCart();

  const [woodFinish, setWoodFinish] = useState('Smoked European Oak');
  const [fabricOption, setFabricOption] = useState('Warm Oatmeal Bouclé');
  const [metalAccent, setMetalAccent] = useState('Brushed Champagne Brass');
  const [sizeConfig, setSizeConfig] = useState('3-Seater (240cm)');

  const woodOptions = [
    { name: 'Smoked European Oak', color: '#544436', multiplier: 1 },
    { name: 'Natural Burmese Teak', color: '#885834', multiplier: 1.08 },
    { name: 'Deep American Walnut', color: '#3A2E26', multiplier: 1.12 },
    { name: 'Bleached Scandinavian Ash', color: '#C8BEAF', multiplier: 1 }
  ];

  const fabricOptions = [
    { name: 'Warm Oatmeal Bouclé', color: '#E8E1D5', tag: 'Textured Weave' },
    { name: 'Charcoal Wool Felt', color: '#3A3938', tag: 'High-Density' },
    { name: 'Terracotta Velvet', color: '#9E5B42', tag: 'Stain-Resistant' },
    { name: 'Olive Green Nubuck', color: '#484E40', tag: 'Semi-Aniline' }
  ];

  const metalOptions = [
    { name: 'Brushed Champagne Brass', color: '#D4AF37' },
    { name: 'Matte Gunmetal Black', color: '#222222' },
    { name: 'Antique Bronze', color: '#7E5233' }
  ];

  const sizeOptions = [
    { label: '2-Seater (180cm)', basePrice: 118000 },
    { label: '3-Seater (240cm)', basePrice: 148000 },
    { label: '4-Seater Modular L-Shape (310cm)', basePrice: 225000 }
  ];

  const currentSize = sizeOptions.find(s => s.label === sizeConfig) || sizeOptions[1];
  const currentWood = woodOptions.find(w => w.name === woodFinish) || woodOptions[0];
  const calculatedPrice = Math.round(currentSize.basePrice * currentWood.multiplier);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  const handleAddToCart = () => {
    const customItem = {
      id: `custom-solis-${Date.now()}`,
      name: `Custom Solis Sofa (${sizeConfig})`,
      subtitle: `${woodFinish} • ${fabricOption} • ${metalAccent}`,
      price: calculatedPrice,
      mrp: Math.round(calculatedPrice * 1.15),
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      finishes: [{ name: fabricOption, color: fabricOptions.find(f => f.name === fabricOption)?.color || '#CCC' }],
      materials: `Solid ${woodFinish}, ${fabricOption}, ${metalAccent}`,
      category: 'Custom Atelier'
    };
    addToCart(customItem, fabricOption);
  };

  return (
    <section className="section-padding customisation-section" id="customisation">
      <div className="container">
        
        {/* Header */}
        <div className="section-header-centered text-center">
          <span className="section-label">Bespoke Atelier</span>
          <h2 className="editorial-heading-2">Made to Feel Like Yours</h2>
          <p className="editorial-subheading mx-auto max-w-600">
            Choose the finishes, materials, configurations and details that make your space uniquely yours.
          </p>
        </div>

        {/* Interactive Customizer Studio Box */}
        <div className="customizer-box">
          
          {/* Left Preview Window */}
          <div className="customizer-preview-pane">
            <div className="preview-canvas-box">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80" 
                alt="Customizer 3D Preview" 
                className="preview-img"
              />
              
              {/* Dynamic Live Spec Overlay */}
              <div className="preview-spec-badge animate-fade">
                <div className="spec-badge-row">
                  <span className="spec-pill" style={{ backgroundColor: fabricOptions.find(f => f.name === fabricOption)?.color }}></span>
                  <strong>{fabricOption}</strong>
                </div>
                <div className="spec-badge-meta">
                  <span>Frame: {woodFinish}</span>
                  <span>Accents: {metalAccent}</span>
                  <span>Size: {sizeConfig}</span>
                </div>
              </div>
            </div>

            <div className="preview-summary-footer">
              <div className="summary-price-col">
                <span className="summary-label">Estimated Custom Quote:</span>
                <span className="summary-price font-serif">{formatPrice(calculatedPrice)}</span>
              </div>
              <div className="summary-btn-group">
                <button className="btn-primary" onClick={handleAddToCart}>
                  <ShoppingBag size={16} /> Order Custom Build
                </button>
                <button className="btn-secondary" onClick={onOpenConsultation}>
                  Request 3D Render
                </button>
              </div>
            </div>
          </div>

          {/* Right Controls Panel */}
          <div className="customizer-controls-pane">
            
            {/* 1. Size & Configuration */}
            <div className="control-group">
              <label className="control-label">
                <Maximize2 size={16} className="text-gold" />
                <span>1. Dimension & Layout:</span>
              </label>
              <div className="config-button-group">
                {sizeOptions.map((sz, i) => (
                  <button 
                    key={i}
                    className={`config-btn ${sizeConfig === sz.label ? 'config-active' : ''}`}
                    onClick={() => setSizeConfig(sz.label)}
                  >
                    <span>{sz.label}</span>
                    <small>{formatPrice(sz.basePrice)}</small>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Fabric & Upholstery */}
            <div className="control-group">
              <label className="control-label">
                <Palette size={16} className="text-gold" />
                <span>2. Italian Fabric Weave: <strong>{fabricOption}</strong></span>
              </label>
              <div className="fabric-swatches-grid">
                {fabricOptions.map((fab, i) => (
                  <button 
                    key={i}
                    className={`fabric-swatch-card ${fabricOption === fab.name ? 'swatch-active' : ''}`}
                    onClick={() => setFabricOption(fab.name)}
                  >
                    <span className="fabric-color-circle" style={{ backgroundColor: fab.color }}></span>
                    <div>
                      <strong>{fab.name}</strong>
                      <small>{fab.tag}</small>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Seasoned Hardwood Frame */}
            <div className="control-group">
              <label className="control-label">
                <Layers size={16} className="text-gold" />
                <span>3. Hardwood Finish: <strong>{woodFinish}</strong></span>
              </label>
              <div className="wood-swatches-grid">
                {woodOptions.map((wood, i) => (
                  <button 
                    key={i}
                    className={`wood-swatch-btn ${woodFinish === wood.name ? 'wood-active' : ''}`}
                    onClick={() => setWoodFinish(wood.name)}
                  >
                    <span className="wood-dot" style={{ backgroundColor: wood.color }}></span>
                    <span>{wood.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Hardware Accents */}
            <div className="control-group">
              <label className="control-label">
                <Sparkles size={16} className="text-gold" />
                <span>4. Metal Foot Caps: <strong>{metalAccent}</strong></span>
              </label>
              <div className="metal-swatches-grid">
                {metalOptions.map((met, i) => (
                  <button 
                    key={i}
                    className={`metal-swatch-btn ${metalAccent === met.name ? 'metal-active' : ''}`}
                    onClick={() => setMetalAccent(met.name)}
                  >
                    <span className="metal-dot" style={{ backgroundColor: met.color }}></span>
                    <span>{met.name}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .customisation-section {
          background-color: var(--bg-primary);
        }

        .customizer-box {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 2.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
          margin-top: 3rem;
          overflow: hidden;
        }

        @media (max-width: 1000px) {
          .customizer-box {
            grid-template-columns: 1fr;
          }
        }

        .customizer-preview-pane {
          display: flex;
          flex-direction: column;
          background: #F5F1E8;
          border-right: 1px solid var(--border-light);
        }

        .preview-canvas-box {
          position: relative;
          min-height: 380px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .preview-spec-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(22, 20, 18, 0.92);
          backdrop-filter: blur(8px);
          color: #FFF;
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-dark);
        }

        .spec-badge-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .spec-pill {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid #FFF;
        }

        .spec-badge-meta {
          display: flex;
          flex-direction: column;
          font-size: 0.72rem;
          color: #B5AFA8;
          gap: 0.15rem;
        }

        .preview-summary-footer {
          padding: 1.5rem;
          background: var(--bg-card);
          border-top: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .summary-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
        }

        .summary-price {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .summary-btn-group {
          display: flex;
          gap: 0.75rem;
        }

        .customizer-controls-pane {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          overflow-y: auto;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .control-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .config-button-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .config-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .config-btn:hover {
          border-color: var(--text-primary);
        }

        .config-active {
          border-color: var(--accent-gold);
          background: #FFF;
          box-shadow: 0 2px 8px rgba(194, 155, 56, 0.2);
        }

        .fabric-swatches-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.65rem;
        }

        @media (max-width: 500px) {
          .fabric-swatches-grid {
            grid-template-columns: 1fr;
          }
        }

        .fabric-swatch-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.85rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          cursor: pointer;
          text-align: left;
          transition: all var(--transition-fast);
        }

        .fabric-swatch-card strong {
          display: block;
          font-size: 0.8rem;
          color: var(--text-primary);
        }

        .fabric-swatch-card small {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .fabric-color-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1px solid var(--border-medium);
          flex-shrink: 0;
        }

        .wood-swatches-grid, .metal-swatches-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
        }

        .wood-swatch-btn, .metal-swatch-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.75rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .wood-dot, .metal-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid var(--border-medium);
        }

        .wood-active, .metal-active {
          border-color: var(--accent-gold);
          background: #FFF;
        }
      `}</style>
    </section>
  );
}
