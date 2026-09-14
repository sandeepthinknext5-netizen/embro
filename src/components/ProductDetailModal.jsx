import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, CheckCircle, Shield, Ruler, Sparkles, Truck, RotateCcw, Award, ChevronRight, Plus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductDetailModal({ productId, onClose, onOpenConsultation }) {
  const product = products.find(p => p.id === productId) || products[0];
  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedFinish, setSelectedFinish] = useState(product.finishes ? product.finishes[0] : null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('story');

  const { addToCart, setIsCheckoutOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  const complementaryProduct = products.find(p => p.id !== product.id && p.room === product.room) || products[1];

  const handleBuyNow = () => {
    addToCart(product, selectedFinish?.name, quantity);
    onClose();
    setIsCheckoutOpen(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="pdp-modal-box animate-fade" onClick={(e) => e.stopPropagation()}>
        
        <button className="pdp-close-btn" onClick={onClose} aria-label="Close product view">
          <X size={24} />
        </button>

        <div className="pdp-layout-grid">
          
          {/* Left: Gallery Column */}
          <div className="pdp-gallery-col">
            <div className="pdp-main-image image-zoom-container">
              <img src={activeImage} alt={product.name} />
              
              {product.badge && (
                <span className="pdp-badge badge-dark">{product.badge}</span>
              )}
            </div>

            <div className="pdp-thumb-row">
              <div 
                className={`pdp-thumb ${activeImage === product.image ? 'thumb-active' : ''}`}
                onClick={() => setActiveImage(product.image)}
              >
                <img src={product.image} alt="Main view" />
              </div>
              {product.gallery && product.gallery.map((img, i) => (
                <div 
                  key={i} 
                  className={`pdp-thumb ${activeImage === img ? 'thumb-active' : ''}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`Gallery view ${i + 1}`} />
                </div>
              ))}
            </div>

            {/* Complete The Look Bundle Box */}
            {complementaryProduct && (
              <div className="complete-the-look-card">
                <span className="look-label font-serif">Complete The Look</span>
                <div className="look-inner-row">
                  <img src={complementaryProduct.image} alt={complementaryProduct.name} className="look-thumb" />
                  <div className="look-meta">
                    <strong>{complementaryProduct.name}</strong>
                    <span>{formatPrice(complementaryProduct.price)}</span>
                  </div>
                  <button 
                    className="btn-secondary look-add-btn"
                    onClick={() => addToCart(complementaryProduct)}
                  >
                    <Plus size={14} /> Add
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Buy Box & Specs */}
          <div className="pdp-info-col">
            
            <div className="pdp-category-bar">
              <span>{product.collection} • {product.category}</span>
            </div>

            <h1 className="pdp-title font-serif">{product.name}</h1>
            <p className="pdp-subtitle">{product.subtitle}</p>

            {/* Rating */}
            <div className="pdp-rating-row">
              <div className="stars-flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C29B38" color="#C29B38" />
                ))}
              </div>
              <span className="pdp-rating-score">{product.rating}</span>
              <span className="pdp-reviews-link">({product.reviewsCount} Customer Reviews)</span>
            </div>

            {/* Price Box */}
            <div className="pdp-price-panel">
              <div className="pdp-price-row">
                <span className="pdp-main-price">{formatPrice(product.price)}</span>
                {product.mrp && <span className="pdp-mrp-price">{formatPrice(product.mrp)}</span>}
                {product.discount > 0 && <span className="badge-gold">Save {product.discount}%</span>}
              </div>
              <span className="pdp-emi-text">💳 {product.emi}</span>
            </div>

            {/* Finish Selector */}
            {product.finishes && (
              <div className="pdp-finishes-box">
                <label className="pdp-section-label">
                  Finish / Upholstery: <strong>{selectedFinish?.name}</strong>
                </label>
                <div className="pdp-swatches-list">
                  {product.finishes.map((f, idx) => (
                    <button 
                      key={idx}
                      className={`pdp-swatch-pill ${selectedFinish?.name === f.name ? 'swatch-pill-active' : ''}`}
                      onClick={() => setSelectedFinish(f)}
                    >
                      <span className="swatch-color" style={{ backgroundColor: f.color }}></span>
                      <span>{f.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & CTA Buttons */}
            <div className="pdp-cta-block">
              <div className="pdp-qty-row">
                <div className="qty-counter">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>

                <button 
                  className="btn-primary flex-1 pdp-add-cart-btn"
                  onClick={() => addToCart(product, selectedFinish?.name, quantity)}
                >
                  <ShoppingBag size={17} /> Add to Cart • {formatPrice(product.price * quantity)}
                </button>

                <button 
                  className={`pdp-wishlist-toggle ${inWishlist ? 'wishlist-active' : ''}`}
                  onClick={() => toggleWishlist(product)}
                  aria-label="Wishlist"
                >
                  <Heart size={20} fill={inWishlist ? '#A05A3C' : 'none'} color={inWishlist ? '#A05A3C' : '#1E1C1A'} />
                </button>
              </div>

              <button className="btn-gold w-full mt-2" onClick={handleBuyNow}>
                Instant Buy Now
              </button>
            </div>

            {/* Value Guarantees */}
            <div className="pdp-guarantees-grid">
              <div className="guarantee-item">
                <Truck size={16} className="text-gold" />
                <span>Free White-Glove Installation</span>
              </div>
              <div className="guarantee-item">
                <Shield size={16} className="text-gold" />
                <span>10-Year Frame Warranty</span>
              </div>
              <div className="guarantee-item">
                <RotateCcw size={16} className="text-gold" />
                <span>15-Day Easy Returns</span>
              </div>
            </div>

            {/* Tabbed In-Depth Specs */}
            <div className="pdp-tabs-nav">
              <button 
                className={`pdp-tab-nav-btn ${activeTab === 'story' ? 'pdp-tab-active' : ''}`}
                onClick={() => setActiveTab('story')}
              >
                Story & Features
              </button>
              <button 
                className={`pdp-tab-nav-btn ${activeTab === 'specs' ? 'pdp-tab-active' : ''}`}
                onClick={() => setActiveTab('specs')}
              >
                Materials & Dimensions
              </button>
              <button 
                className={`pdp-tab-nav-btn ${activeTab === 'delivery' ? 'pdp-tab-active' : ''}`}
                onClick={() => setActiveTab('delivery')}
              >
                Delivery & Care
              </button>
            </div>

            <div className="pdp-tab-content">
              {activeTab === 'story' && (
                <div className="tab-pane animate-fade">
                  <p className="tab-story-p">{product.story}</p>
                  <ul className="pdp-features-checklist">
                    {product.features && product.features.map((feat, i) => (
                      <li key={i}>
                        <CheckCircle size={14} className="text-gold" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="tab-pane animate-fade">
                  <div className="spec-item-box">
                    <strong>Materials:</strong>
                    <p>{product.materials}</p>
                  </div>
                  <div className="spec-item-box mt-2">
                    <strong>Dimensions:</strong>
                    <p>{product.dimensions}</p>
                  </div>
                  <div className="spec-item-box mt-2">
                    <strong>Warranty:</strong>
                    <p>{product.warranty}</p>
                  </div>
                </div>
              )}

              {activeTab === 'delivery' && (
                <div className="tab-pane animate-fade">
                  <p><strong>Standard Dispatch:</strong> 10 to 14 business days via our dedicated temperature-controlled logistics fleet.</p>
                  <p className="mt-2"><strong>White Glove Service:</strong> Includes inside delivery, unboxing, room-of-choice placement, precision level alignment and packaging removal.</p>
                  <p className="mt-2"><strong>Care Advice:</strong> Clean with soft dry micro-fiber cloth. Avoid harsh chemical detergents. For bouclé/linen, vacuum regularly with soft brush attachment.</p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .pdp-modal-box {
          background: var(--bg-card);
          width: 95%;
          max-width: 1100px;
          max-height: 92vh;
          overflow-y: auto;
          border-radius: var(--radius-sm);
          position: relative;
          padding: 2.5rem;
          box-shadow: var(--shadow-dark);
        }

        @media (max-width: 860px) {
          .pdp-modal-box {
            padding: 1.5rem;
          }
        }

        .pdp-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          z-index: 10;
        }

        .pdp-layout-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.2fr;
          gap: 3rem;
        }

        @media (max-width: 860px) {
          .pdp-layout-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .pdp-gallery-col {
          display: flex;
          flex-direction: column;
        }

        .pdp-main-image {
          height: 420px;
          background: #F4EFE6;
          border-radius: var(--radius-sm);
          position: relative;
        }

        .pdp-badge {
          position: absolute;
          top: 14px;
          left: 14px;
        }

        .pdp-thumb-row {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .pdp-thumb {
          width: 75px;
          height: 75px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          background: #F0ECE4;
        }

        .thumb-active {
          border-color: var(--accent-gold);
        }

        .pdp-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .complete-the-look-card {
          background: var(--bg-secondary);
          padding: 1.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          margin-top: 1.5rem;
        }

        .look-label {
          font-size: 1.1rem;
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.75rem;
        }

        .look-inner-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .look-thumb {
          width: 55px;
          height: 55px;
          object-fit: cover;
          border-radius: var(--radius-sm);
        }

        .look-meta {
          flex: 1;
          display: flex;
          flex-direction: column;
          font-size: 0.82rem;
        }

        .look-add-btn {
          padding: 0.4rem 0.85rem;
          font-size: 0.75rem;
        }

        .pdp-info-col {
          display: flex;
          flex-direction: column;
        }

        .pdp-category-bar {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-gold);
          font-weight: 600;
          margin-bottom: 0.4rem;
        }

        .pdp-title {
          font-size: 2rem;
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .pdp-subtitle {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.85rem;
        }

        .pdp-rating-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          margin-bottom: 1.25rem;
        }

        .stars-flex {
          display: flex;
          gap: 0.2rem;
        }

        .pdp-rating-score {
          font-weight: 700;
          margin-left: 0.3rem;
        }

        .pdp-reviews-link {
          color: var(--text-muted);
        }

        .pdp-price-panel {
          padding: 1rem 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 1.25rem;
        }

        .pdp-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.85rem;
          margin-bottom: 0.35rem;
        }

        .pdp-main-price {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .pdp-mrp-price {
          font-size: 1.1rem;
          text-decoration: line-through;
          color: var(--text-muted);
        }

        .pdp-emi-text {
          font-size: 0.8rem;
          color: var(--accent-bronze);
          font-weight: 500;
        }

        .pdp-finishes-box {
          margin-bottom: 1.5rem;
        }

        .pdp-section-label {
          font-size: 0.82rem;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 0.65rem;
        }

        .pdp-swatches-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .pdp-swatch-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.85rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .swatch-pill-active {
          border-color: var(--accent-gold);
          background: #FFF;
        }

        .swatch-color {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid var(--border-medium);
        }

        .pdp-cta-block {
          margin-bottom: 1.75rem;
        }

        .pdp-qty-row {
          display: flex;
          gap: 0.75rem;
        }

        .qty-counter {
          display: flex;
          align-items: center;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          background: var(--bg-primary);
        }

        .qty-counter button {
          background: none;
          border: none;
          padding: 0.65rem 1rem;
          font-size: 1.1rem;
          cursor: pointer;
        }

        .qty-counter span {
          padding: 0 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .pdp-add-cart-btn {
          font-size: 0.82rem;
        }

        .pdp-wishlist-toggle {
          width: 48px;
          height: 48px;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .pdp-wishlist-toggle:hover {
          border-color: var(--accent-clay);
        }

        .pdp-guarantees-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          padding: 1rem 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 1.5rem;
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.72rem;
          color: var(--text-secondary);
        }

        .pdp-tabs-nav {
          display: flex;
          gap: 1.25rem;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 1rem;
        }

        .pdp-tab-nav-btn {
          background: none;
          border: none;
          padding: 0.5rem 0;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          cursor: pointer;
          position: relative;
        }

        .pdp-tab-active {
          color: var(--text-primary);
        }

        .pdp-tab-active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent-gold);
        }

        .pdp-tab-content {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .pdp-features-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-top: 0.75rem;
        }

        .pdp-features-checklist li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .spec-item-box strong {
          color: var(--text-primary);
          display: block;
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
}
