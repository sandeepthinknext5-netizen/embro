import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingBag, Eye, Heart, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Bestsellers({ onQuickViewProduct, onExploreBestsellers }) {
  const scrollRef = useRef(null);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const bestsellerProducts = products.filter(p => p.isBestseller || p.badge === 'Bestseller' || p.badge === 'Signature');

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 320 + 24; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth * 2 : cardWidth * 2,
        behavior: 'smooth'
      });
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <section className="section-padding bestsellers-section" id="bestsellers">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-split mb-8">
          <div>
            <span className="section-label">Iconic Living</span>
            <h2 className="editorial-heading-2">The Pieces Everyone Loves</h2>
            <p className="editorial-subheading mt-1">Our most-loved designs, selected for everyday comfort and enduring style.</p>
          </div>

          <div className="carousel-nav-controls">
            <button className="carousel-arrow-btn" onClick={() => scroll('left')} aria-label="Previous pieces">
              <ChevronLeft size={20} />
            </button>
            <button className="carousel-arrow-btn" onClick={() => scroll('right')} aria-label="Next pieces">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="bestsellers-scroll-track" ref={scrollRef}>
          {bestsellerProducts.map((product, idx) => {
            const inWishlist = isInWishlist(product.id);

            return (
              <div key={product.id} className={`bestseller-card motion-card-enter stagger-${(idx % 4) + 1}`}>
                
                {/* Image Wrap */}
                <div className="bestseller-img-container image-zoom-container">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  
                  {/* Top Badges */}
                  <div className="bestseller-badge-group">
                    <span className="bestseller-rating-badge">★ {product.rating}</span>
                    {product.discount > 0 && (
                      <span className="bestseller-discount-badge">-{product.discount}%</span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button 
                    className={`bestseller-wishlist-btn ${inWishlist ? 'wishlist-active' : ''}`}
                    onClick={() => toggleWishlist(product)}
                    aria-label="Wishlist"
                  >
                    <Heart size={16} fill={inWishlist ? '#A05A3C' : 'none'} color={inWishlist ? '#A05A3C' : '#1E1C1A'} />
                  </button>

                  {/* Hover Quick Actions */}
                  <div className="bestseller-quick-bar">
                    <button 
                      className="bestseller-action-btn view-btn"
                      onClick={() => onQuickViewProduct(product.id)}
                    >
                      <Eye size={14} /> Quick View
                    </button>
                    <button 
                      className="bestseller-action-btn add-btn"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingBag size={14} /> Add to Cart
                    </button>
                  </div>
                </div>

                {/* Content Body */}
                <div className="bestseller-body">
                  <div className="bestseller-top-meta">
                    <span className="bestseller-category">{product.category} • {product.room}</span>
                    <span className="bestseller-reviews-count">{product.reviewsCount} Reviews</span>
                  </div>

                  <h3 
                    className="bestseller-product-title font-serif"
                    onClick={() => onQuickViewProduct(product.id)}
                    title={product.name}
                  >
                    {product.name}
                  </h3>

                  {/* Finish Swatches */}
                  {product.finishes && (
                    <div className="bestseller-swatches-wrap">
                      <div className="swatches-dots-list">
                        {product.finishes.map((f, i) => (
                          <span 
                            key={i} 
                            className="swatch-dot-item" 
                            style={{ backgroundColor: f.color }} 
                            title={f.name}
                          />
                        ))}
                      </div>
                      <span className="swatches-label">{product.finishes.length} Finishes</span>
                    </div>
                  )}

                  {/* Pricing & 0% EMI Footer */}
                  <div className="bestseller-footer">
                    <div className="bestseller-price-row">
                      <span className="bestseller-price-current">{formatPrice(product.price)}</span>
                      {product.mrp && (
                        <span className="bestseller-price-mrp">{formatPrice(product.mrp)}</span>
                      )}
                    </div>
                    {product.emi && (
                      <span className="bestseller-emi-pill">{product.emi}</span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Carousel Action */}
        <div className="bestsellers-bottom-cta">
          <button className="btn-primary hover-lift" onClick={onExploreBestsellers}>
            Explore All Iconic Pieces <ArrowRight size={16} />
          </button>
        </div>

      </div>

      <style>{`
        .bestsellers-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .mb-8 {
          margin-bottom: 2.5rem;
        }

        .carousel-nav-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .carousel-arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--border-medium);
          background: var(--bg-card);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow: var(--shadow-subtle);
        }

        .carousel-arrow-btn:hover {
          background: var(--bg-dark);
          color: #FFF;
          border-color: var(--bg-dark);
          transform: translateY(-2px);
          box-shadow: var(--shadow-card);
        }

        .bestsellers-scroll-track {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 0.5rem 0.25rem 2rem;
          scrollbar-width: thin;
          scrollbar-color: var(--border-medium) transparent;
        }

        .bestsellers-scroll-track::-webkit-scrollbar {
          height: 5px;
        }

        .bestsellers-scroll-track::-webkit-scrollbar-thumb {
          background-color: var(--border-medium);
          border-radius: 4px;
        }

        /* Proper Structured Card */
        .bestseller-card {
          flex: 0 0 310px;
          scroll-snap-align: start;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-medium), box-shadow var(--transition-medium), border-color var(--transition-medium);
        }

        @media (max-width: 768px) {
          .bestseller-card {
            flex: 0 0 280px;
          }
        }

        .bestseller-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-card);
          border-color: var(--border-medium);
        }

        /* Image Box with Proportional Height */
        .bestseller-img-container {
          position: relative;
          height: 270px;
          background: #F4EFE6;
          overflow: hidden;
        }

        .bestseller-badge-group {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          z-index: 4;
        }

        .bestseller-rating-badge {
          background: var(--bg-dark);
          color: var(--accent-gold);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 0.28rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .bestseller-discount-badge {
          background: var(--accent-clay);
          color: #FFF;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.28rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .bestseller-wishlist-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(4px);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 4;
          transition: all var(--transition-fast);
        }

        .bestseller-wishlist-btn:hover {
          background: #FFF;
          transform: scale(1.1);
        }

        .wishlist-active {
          background: #FFF;
          border-color: var(--accent-clay);
        }

        /* Action Buttons on Hover */
        .bestseller-quick-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--border-medium);
          transform: translateY(100%);
          transition: transform var(--transition-medium);
          z-index: 5;
        }

        .bestseller-card:hover .bestseller-quick-bar {
          transform: translateY(0);
        }

        .bestseller-action-btn {
          padding: 0.8rem 0.5rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          transition: background var(--transition-fast), color var(--transition-fast);
        }

        .view-btn {
          background: rgba(255, 255, 255, 0.96);
          color: var(--text-primary);
        }

        .view-btn:hover {
          background: var(--bg-secondary);
        }

        .add-btn {
          background: var(--bg-dark);
          color: #FFF;
        }

        .add-btn:hover {
          background: var(--accent-gold);
          color: var(--bg-dark);
        }

        /* Card Content Body */
        .bestseller-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .bestseller-top-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
        }

        .bestseller-category {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .bestseller-reviews-count {
          font-size: 0.7rem;
          color: var(--text-secondary);
        }

        .bestseller-product-title {
          font-size: 1.18rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.65rem;
          cursor: pointer;
          transition: color var(--transition-fast);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 3.1rem;
        }

        .bestseller-product-title:hover {
          color: var(--accent-gold);
        }

        /* Swatches */
        .bestseller-swatches-wrap {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.85rem;
        }

        .swatches-dots-list {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .swatch-dot-item {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          border: 1px solid var(--border-medium);
          display: inline-block;
        }

        .swatches-label {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        /* Footer & Pricing */
        .bestseller-footer {
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-light);
        }

        .bestseller-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 0.3rem;
        }

        .bestseller-price-current {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .bestseller-price-mrp {
          font-size: 0.82rem;
          text-decoration: line-through;
          color: var(--text-muted);
        }

        .bestseller-emi-pill {
          display: block;
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--accent-bronze);
          background: var(--bg-primary);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          width: fit-content;
          border: 1px solid var(--border-light);
        }

        .bestsellers-bottom-cta {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }
      `}</style>
    </section>
  );
}
