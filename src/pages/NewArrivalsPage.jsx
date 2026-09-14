import React from 'react';
import { Star, Heart, ShoppingBag, Eye, ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function NewArrivalsPage({ onQuickViewProduct, onNavigate }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const newProducts = products.filter(p => p.isNew || p.badge === 'Signature' || p.badge === 'Bestseller');

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="page-wrapper animate-fade">
      
      {/* Banner */}
      <div className="new-arrivals-page-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>New Arrivals</span>
          </div>
          <span className="section-label text-gold">Autumn 2026 Collection</span>
          <h1 className="editorial-heading-1 text-white">Fresh Silhouettes</h1>
          <p className="new-page-sub">
            Fresh silhouettes. Refined details. Designed for today. Discover the newest additions to the Embroshyal catalog.
          </p>
        </div>
      </div>

      <div className="container section-padding">
        
        <div className="products-catalog-grid">
          {newProducts.map((product) => {
            const inWishlist = isInWishlist(product.id);

            return (
              <div key={product.id} className="product-card group">
                <div className="product-image-container">
                  <div className="product-image-inner image-zoom-container">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>

                  <div className="product-badges">
                    <span className="badge-dark">New Release</span>
                    {product.discount > 0 && <span className="badge-gold">-{product.discount}%</span>}
                  </div>

                  <button 
                    className={`wishlist-btn ${inWishlist ? 'wishlist-active' : ''}`}
                    onClick={() => toggleWishlist(product)}
                    aria-label="Wishlist"
                  >
                    <Heart size={18} fill={inWishlist ? '#A05A3C' : 'none'} color={inWishlist ? '#A05A3C' : '#1E1C1A'} />
                  </button>

                  <div className="quick-actions-bar">
                    <button className="quick-view-btn" onClick={() => onQuickViewProduct(product.id)}>
                      <Eye size={15} /> Quick View
                    </button>
                    <button className="quick-add-btn" onClick={() => addToCart(product)}>
                      <ShoppingBag size={15} /> Add to Cart
                    </button>
                  </div>
                </div>

                <div className="product-meta">
                  <div className="product-category-row">
                    <span className="product-category">{product.category} • {product.room}</span>
                    <div className="product-rating">
                      <Star size={13} fill="#C29B38" color="#C29B38" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="product-name font-serif" onClick={() => onQuickViewProduct(product.id)}>
                    {product.name}
                  </h3>

                  {product.finishes && (
                    <div className="finish-swatches">
                      {product.finishes.map((f, i) => (
                        <span key={i} className="swatch-dot" style={{ backgroundColor: f.color }} title={f.name} />
                      ))}
                      <span className="swatch-label">{product.finishes.length} Finishes</span>
                    </div>
                  )}

                  <div className="product-price-row">
                    <div className="price-stack">
                      <span className="current-price">{formatPrice(product.price)}</span>
                      {product.mrp && <span className="mrp-price">{formatPrice(product.mrp)}</span>}
                    </div>
                    {product.emi && <span className="emi-tag">0% EMI</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .new-arrivals-page-hero {
          background: linear-gradient(to right, rgba(22, 20, 18, 0.94), rgba(22, 20, 18, 0.75)), url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          padding: 6rem 0 5rem;
          color: #FFF;
        }

        .new-page-sub {
          font-size: 1.15rem;
          color: #D5CEC6;
          max-width: 700px;
          margin-top: 1rem;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}
