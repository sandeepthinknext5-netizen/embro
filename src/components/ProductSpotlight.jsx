import React, { useState } from 'react';
import { Heart, ShoppingBag, CheckCircle2, Ruler, Shield, Layers, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductSpotlight({ onExploreProduct }) {
  const spotlightProduct = products[0]; // Solis Curved Bouclé Sofa
  const [selectedFinish, setSelectedFinish] = useState(spotlightProduct.finishes[0]);
  const [activeTab, setActiveTab] = useState('story');

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(spotlightProduct.id);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <section className="section-padding product-spotlight-section">
      <div className="container">
        
        <div className="spotlight-grid">
          
          {/* Left: Large Editorial Imagery */}
          <div className="spotlight-image-column">
            <div className="spotlight-main-img image-zoom-container">
              <img src={spotlightProduct.image} alt={spotlightProduct.name} />
              
              <div className="spotlight-floating-tag">
                <span className="spotlight-tag-title">Architectural Profile</span>
                <span className="spotlight-tag-sub">Continuous Sculptural Joinery</span>
              </div>
            </div>

            <div className="spotlight-gallery-row">
              {spotlightProduct.gallery.map((img, idx) => (
                <div key={idx} className="spotlight-thumb image-zoom-container">
                  <img src={img} alt="Angle detail" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Narrative & Purchase System */}
          <div className="spotlight-content-column">
            
            <span className="section-label">Iconic Feature Spotlight</span>
            
            <h2 className="spotlight-headline editorial-heading-2">
              Designed to Be Lived In.
            </h2>
            
            <h3 className="spotlight-product-name font-serif">
              {spotlightProduct.name}
            </h3>

            {/* Price & EMI */}
            <div className="spotlight-price-box">
              <div className="spotlight-price-row">
                <span className="spotlight-price">{formatPrice(spotlightProduct.price)}</span>
                <span className="spotlight-mrp">{formatPrice(spotlightProduct.mrp)}</span>
                <span className="badge-gold">Save {spotlightProduct.discount}%</span>
              </div>
              <span className="spotlight-emi">{spotlightProduct.emi}</span>
            </div>

            {/* Finish Selector */}
            <div className="spotlight-finishes-group">
              <label className="spotlight-label">
                Select Upholstery Weave: <strong>{selectedFinish.name}</strong>
              </label>
              <div className="swatches-interactive-row">
                {spotlightProduct.finishes.map((f, i) => (
                  <button 
                    key={i}
                    className={`swatch-interactive-btn ${selectedFinish.name === f.name ? 'swatch-active' : ''}`}
                    onClick={() => setSelectedFinish(f)}
                    title={f.name}
                  >
                    <span className="swatch-color-pill" style={{ backgroundColor: f.color }}></span>
                    <span className="swatch-btn-label">{f.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tabbed Specs & Story */}
            <div className="spotlight-tabs-header">
              <button 
                className={`spotlight-tab-btn ${activeTab === 'story' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('story')}
              >
                Design Story
              </button>
              <button 
                className={`spotlight-tab-btn ${activeTab === 'features' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Features & Anatomy
              </button>
              <button 
                className={`spotlight-tab-btn ${activeTab === 'dimensions' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('dimensions')}
              >
                Dimensions & Care
              </button>
            </div>

            <div className="spotlight-tab-body">
              {activeTab === 'story' && (
                <div className="tab-pane animate-fade">
                  <p className="spotlight-story-text">{spotlightProduct.story}</p>
                  <div className="material-callout-box">
                    <Layers size={18} className="text-gold" />
                    <div>
                      <strong>Materials:</strong>
                      <p>{spotlightProduct.materials}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="tab-pane animate-fade">
                  <ul className="spotlight-feature-list">
                    {spotlightProduct.features.map((feat, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'dimensions' && (
                <div className="tab-pane animate-fade">
                  <div className="dimension-row">
                    <Ruler size={18} className="text-gold" />
                    <div>
                      <strong>Dimensions:</strong>
                      <p>{spotlightProduct.dimensions}</p>
                    </div>
                  </div>
                  <div className="dimension-row mt-2">
                    <Shield size={18} className="text-gold" />
                    <div>
                      <strong>Guarantee:</strong>
                      <p>{spotlightProduct.warranty}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="spotlight-actions-row">
              <button 
                className="btn-primary flex-1"
                onClick={() => addToCart(spotlightProduct, selectedFinish.name)}
              >
                <ShoppingBag size={16} /> Add to Cart
              </button>

              <button 
                className={`btn-secondary ${inWishlist ? 'wishlist-active' : ''}`}
                onClick={() => toggleWishlist(spotlightProduct)}
              >
                <Heart size={16} fill={inWishlist ? '#A05A3C' : 'none'} color={inWishlist ? '#A05A3C' : '#1E1C1A'} />
                {inWishlist ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .product-spotlight-section {
          background-color: var(--bg-card);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .spotlight-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 4.5rem;
          align-items: center;
        }

        @media (max-width: 1000px) {
          .spotlight-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .spotlight-main-img {
          height: 480px;
          border-radius: var(--radius-sm);
          position: relative;
          background: #F2EDE4;
        }

        .spotlight-floating-tag {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(22, 20, 18, 0.88);
          backdrop-filter: blur(8px);
          color: #FFF;
          padding: 0.65rem 1rem;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
        }

        .spotlight-tag-title {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold);
        }

        .spotlight-tag-sub {
          font-size: 0.78rem;
          color: #DDD;
        }

        .spotlight-gallery-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 1rem;
        }

        .spotlight-thumb {
          height: 100px;
          border-radius: var(--radius-sm);
          background: #F0ECE4;
        }

        .spotlight-content-column {
          display: flex;
          flex-direction: column;
        }

        .spotlight-headline {
          margin-bottom: 0.35rem;
        }

        .spotlight-product-name {
          font-size: 1.4rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .spotlight-price-box {
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 1.25rem;
        }

        .spotlight-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          margin-bottom: 0.35rem;
        }

        .spotlight-price {
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .spotlight-mrp {
          font-size: 1.1rem;
          text-decoration: line-through;
          color: var(--text-muted);
        }

        .spotlight-emi {
          font-size: 0.8rem;
          color: var(--accent-bronze);
          font-weight: 500;
        }

        .spotlight-finishes-group {
          margin-bottom: 1.5rem;
        }

        .spotlight-label {
          font-size: 0.82rem;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 0.65rem;
        }

        .swatches-interactive-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .swatch-interactive-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.85rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: 0.78rem;
          transition: all var(--transition-fast);
        }

        .swatch-interactive-btn:hover {
          border-color: var(--text-primary);
        }

        .swatch-active {
          border-color: var(--accent-gold);
          background: #FFF;
          box-shadow: 0 2px 8px rgba(194, 155, 56, 0.2);
        }

        .swatch-color-pill {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.15);
        }

        .spotlight-tabs-header {
          display: flex;
          gap: 1.5rem;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 1.25rem;
        }

        .spotlight-tab-btn {
          background: none;
          border: none;
          padding: 0.65rem 0;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-muted);
          cursor: pointer;
          position: relative;
        }

        .spotlight-tab-btn.tab-active {
          color: var(--text-primary);
        }

        .spotlight-tab-btn.tab-active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent-gold);
        }

        .spotlight-tab-body {
          min-height: 120px;
          margin-bottom: 1.75rem;
        }

        .spotlight-story-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }

        .material-callout-box, .dimension-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          padding: 0.65rem 0.85rem;
          border-radius: var(--radius-sm);
        }

        .spotlight-feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .spotlight-feature-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .spotlight-actions-row {
          display: flex;
          gap: 1rem;
        }
      `}</style>
    </section>
  );
}
