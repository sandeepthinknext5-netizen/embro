import React from 'react';
import { Heart, ShoppingBag, Eye, Star, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function NewArrivals({ onQuickViewProduct, onExploreAll }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const newProducts = products.filter(p => p.isNew || p.badge === 'Bestseller' || p.badge === 'Signature').slice(0, 4);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <section className="section-padding new-arrivals-section" id="new-arrivals">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-split motion-slide-up">
          <div>
            <span className="section-label">Fresh Silhouettes</span>
            <h2 className="editorial-heading-2">New Arrivals</h2>
            <p className="editorial-subheading mt-1">Refined details. Designed for today.</p>
          </div>
          <button className="btn-secondary hover-lift" onClick={onExploreAll}>
            Explore All New Arrivals <ArrowRight size={15} />
          </button>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {newProducts.map((product, idx) => {
            const inWishlist = isInWishlist(product.id);

            return (
              <div 
                key={product.id} 
                className={`product-card group motion-card-enter stagger-${idx + 1}`}
              >
                {/* Image Wrap */}
                <div className="product-image-container">
                  <div className="product-image-inner image-zoom-container">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>

                  {/* Badges */}
                  <div className="product-badges">
                    {product.badge && <span className="badge-dark">{product.badge}</span>}
                    {product.discount > 0 && <span className="badge-gold">-{product.discount}%</span>}
                  </div>

                  {/* Wishlist Button */}
                  <button 
                    className={`wishlist-btn ${inWishlist ? 'wishlist-active' : ''}`}
                    onClick={() => toggleWishlist(product)}
                    aria-label="Add to wishlist"
                    title={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
                  >
                    <Heart size={18} fill={inWishlist ? '#A05A3C' : 'none'} color={inWishlist ? '#A05A3C' : '#1E1C1A'} />
                  </button>

                  {/* Hover Quick Actions */}
                  <div className="quick-actions-bar">
                    <button 
                      className="quick-view-btn"
                      onClick={() => onQuickViewProduct(product.id)}
                    >
                      <Eye size={15} /> Quick View
                    </button>
                    <button 
                      className="quick-add-btn"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingBag size={15} /> Add to Cart
                    </button>
                  </div>
                </div>

                {/* Product Meta */}
                <div className="product-meta">
                  <div className="product-category-row">
                    <span className="product-category">{product.category}</span>
                    <div className="product-rating">
                      <Star size={13} fill="#C29B38" color="#C29B38" />
                      <span>{product.rating}</span>
                      <span className="reviews-count">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 
                    className="product-name font-serif"
                    onClick={() => onQuickViewProduct(product.id)}
                  >
                    {product.name}
                  </h3>

                  {/* Finishes Swatches */}
                  {product.finishes && (
                    <div className="finish-swatches">
                      {product.finishes.map((f, i) => (
                        <span 
                          key={i} 
                          className="swatch-dot" 
                          style={{ backgroundColor: f.color }}
                          title={f.name}
                        />
                      ))}
                      <span className="swatch-label">{product.finishes.length} Finishes</span>
                    </div>
                  )}

                  {/* Price & EMI Row */}
                  <div className="product-price-row">
                    <div className="price-stack">
                      <span className="current-price">{formatPrice(product.price)}</span>
                      {product.mrp && <span className="mrp-price">{formatPrice(product.mrp)}</span>}
                    </div>
                    {product.emi && <span className="emi-tag">0% EMI Available</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .new-arrivals-section {
          background-color: var(--bg-primary);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }

        @media (max-width: 1100px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
        }

        .product-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: border-color var(--transition-medium), box-shadow var(--transition-medium), transform var(--transition-medium);
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-card);
          border-color: var(--border-medium);
        }

        .product-image-container {
          position: relative;
          height: 310px;
          background: #F4F0E8;
          overflow: hidden;
        }

        .product-image-inner {
          width: 100%;
          height: 100%;
        }

        .product-badges {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          z-index: 5;
        }

        .wishlist-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          border: 1px solid var(--border-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          z-index: 5;
        }

        .wishlist-btn:hover {
          background: #FFF;
          transform: scale(1.1);
        }

        .wishlist-active {
          background: #FFF;
          border-color: var(--accent-clay);
        }

        .quick-actions-bar {
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
          z-index: 6;
        }

        .product-card:hover .quick-actions-bar {
          transform: translateY(0);
        }

        .quick-view-btn, .quick-add-btn {
          background: rgba(255, 255, 255, 0.96);
          border: none;
          padding: 0.85rem 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          transition: background var(--transition-fast), color var(--transition-fast);
        }

        .quick-view-btn:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .quick-add-btn:hover {
          background: var(--bg-dark);
          color: #FFF;
        }

        .product-meta {
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .product-category-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
        }

        .product-category {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .product-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .reviews-count {
          color: var(--text-muted);
          font-weight: 400;
        }

        .product-name {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.65rem;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .product-name:hover {
          color: var(--accent-gold);
        }

        .finish-swatches {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 0.85rem;
        }

        .swatch-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid var(--border-medium);
          box-shadow: inset 0 0 2px rgba(0,0,0,0.2);
        }

        .swatch-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-left: 0.3rem;
        }

        .product-price-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-light);
        }

        .price-stack {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .current-price {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .mrp-price {
          font-size: 0.82rem;
          text-decoration: line-through;
          color: var(--text-muted);
        }

        .emi-tag {
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--accent-bronze);
          background: var(--bg-secondary);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
        }
      `}</style>
    </section>
  );
}
