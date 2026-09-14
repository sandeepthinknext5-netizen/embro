import React, { useState, useEffect } from 'react';
import { Plus, Eye, ShoppingBag, ArrowRight, Sparkles, Compass, CheckCircle2, Star, Heart, Layers } from 'lucide-react';
import { rooms } from '../data/rooms';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function RoomsPage({ onQuickViewProduct, onNavigate }) {
  const [activeRoomId, setActiveRoomId] = useState('living');
  const [activeHotspot, setActiveHotspot] = useState(null);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Listen to hash changes or room query
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const matched = rooms.find(r => r.id === hash || r.slug === hash || hash.includes(r.id));
      if (matched) {
        setActiveRoomId(matched.id);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const currentRoom = rooms.find(r => r.id === activeRoomId) || rooms[0];

  // Filter shoppable products for this room
  const roomProducts = products.filter(p => {
    if (activeRoomId === 'living') return p.room === 'Living Room' || p.category === 'Sofas' || p.category === 'Tables' || p.category === 'TV Units';
    if (activeRoomId === 'bedroom') return p.room === 'Bedroom' || p.category === 'Beds' || p.category === 'Wardrobes';
    if (activeRoomId === 'dining') return p.room === 'Dining' || p.category === 'Dining Sets';
    if (activeRoomId === 'office') return p.room === 'Home Office' || p.category === 'Study Furniture';
    if (activeRoomId === 'kitchen') return p.category === 'Tables' || p.category === 'Chairs';
    if (activeRoomId === 'kids') return p.category === 'Beds' || p.category === 'Study Furniture';
    if (activeRoomId === 'entryway') return p.category === 'Tables' || p.category === 'TV Units' || p.category === 'Chairs';
    if (activeRoomId === 'outdoor') return p.category === 'Dining Sets' || p.category === 'Chairs' || p.category === 'Tables';
    return true;
  }).slice(0, 9);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="page-wrapper animate-fade">
      
      {/* Editorial Page Hero Banner */}
      <div 
        className="room-page-hero-banner"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20, 18, 16, 0.95), rgba(20, 18, 16, 0.72)), url('${currentRoom.image}')`
        }}
      >
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <button onClick={() => onNavigate('rooms')}>Shop by Room</button>
            <span>/</span>
            <span className="text-gold">{currentRoom.name}</span>
          </div>

          <div className="room-hero-meta-strip">
            <span className="room-hero-tagline">{currentRoom.tagline}</span>
            <span className="room-hero-count">• {currentRoom.itemCount}</span>
          </div>

          <h1 className="editorial-heading-1 text-white mb-2">{currentRoom.name} Atelier</h1>
          <p className="room-hero-headline font-serif text-gold">{currentRoom.headline}</p>
          <p className="room-hero-desc">{currentRoom.desc}</p>

          <div className="room-hero-spec-chips">
            <div className="spec-chip">
              <Compass size={14} className="text-gold" />
              <span>{currentRoom.dimensions}</span>
            </div>
            <div className="spec-chip">
              <Layers size={14} className="text-gold" />
              <span>Palette: {currentRoom.palette}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-padding">
        
        {/* 8-Room Navigation Tabs Bar */}
        <div className="rooms-tab-navigation-bar">
          <span className="rooms-tab-label">Select Room Space:</span>
          <div className="rooms-pills-scroll-track">
            {rooms.map((room) => (
              <button 
                key={room.id}
                className={`room-pill-tab-btn ${activeRoomId === room.id ? 'active-room-tab' : ''}`}
                onClick={() => {
                  setActiveRoomId(room.id);
                  window.location.hash = `rooms-${room.id}`;
                }}
              >
                <span>{room.name}</span>
                {activeRoomId === room.id && <span className="active-room-dot"></span>}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Room Immersive Visualizer with Hotspots */}
        <div className="room-visualizer-card">
          
          <div className="room-visualizer-viewport image-zoom-container">
            <img src={currentRoom.image} alt={currentRoom.name} />
            <div className="room-visualizer-overlay"></div>

            {/* Pulsing Interactive Hotspots */}
            {currentRoom.hotspots && currentRoom.hotspots.map((spot, sIdx) => {
              const isOpen = activeHotspot === `${currentRoom.id}-${sIdx}`;

              return (
                <div 
                  key={sIdx} 
                  className={`room-hotspot-pin ${isOpen ? 'hotspot-pin-open' : ''}`}
                  style={{ top: spot.top, left: spot.left }}
                  onMouseEnter={() => setActiveHotspot(`${currentRoom.id}-${sIdx}`)}
                  onClick={() => {
                    if (spot.productId) {
                      onQuickViewProduct(spot.productId);
                    }
                  }}
                >
                  <button className="hotspot-pulse-trigger" aria-label={`View ${spot.title}`}>
                    <Plus size={14} />
                  </button>

                  <div className="hotspot-reveal-popover animate-fade">
                    <span className="hotspot-tag-category">{spot.category || 'Atelier Selection'}</span>
                    <h4 className="hotspot-product-name font-serif">{spot.title}</h4>
                    <span className="hotspot-price-tag">{spot.price}</span>
                    {spot.productId && (
                      <span className="hotspot-action-hint">Click to Quick View →</span>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="visualizer-hint-badge">
              <Sparkles size={14} className="text-gold" />
              <span>Hover or tap golden hotspots to inspect curated pieces</span>
            </div>
          </div>

          {/* Room Summary & 3D Consultation Box */}
          <div className="room-visualizer-info">
            <div className="room-info-header">
              <span className="section-label text-gold">Architectural Spatial Blueprint</span>
              <h2 className="room-info-title font-serif">{currentRoom.name} Philosophy</h2>
              <p className="room-info-text">{currentRoom.desc}</p>
            </div>

            <div className="room-specs-list">
              <div className="room-spec-row">
                <span className="spec-title">Ideal Layout Scope:</span>
                <span className="spec-val">{currentRoom.dimensions}</span>
              </div>
              <div className="room-spec-row">
                <span className="spec-title">Signature Materials:</span>
                <span className="spec-val">{currentRoom.palette}</span>
              </div>
              <div className="room-spec-row">
                <span className="spec-title">Lead Time:</span>
                <span className="spec-val">Ready for Dispatch / 3 Weeks Bespoke Tailoring</span>
              </div>
            </div>

            <div className="room-consult-cta-box">
              <h4 className="font-serif text-white">Need a custom {currentRoom.name} 3D plan?</h4>
              <p className="text-muted text-sm mb-3">Our interior architects provide free spatial 3D renders tailored to your exact floor plan.</p>
              <button 
                className="btn-gold w-full"
                onClick={() => onNavigate('consultation')}
              >
                Book Free {currentRoom.name} Consultation <ArrowRight size={15} />
              </button>
            </div>
          </div>

        </div>

        {/* Shoppable Curated Pieces in this Room */}
        <div className="room-shoppable-section">
          
          <div className="section-header-split mb-4">
            <div>
              <span className="section-label text-gold">Curated Collection</span>
              <h2 className="editorial-heading-2">Shoppable Pieces for Your {currentRoom.name}</h2>
              <p className="text-muted">Handcrafted furniture pieces scaled and balanced for {currentRoom.name.toLowerCase()} layouts.</p>
            </div>

            <button 
              className="btn-secondary"
              onClick={() => onNavigate('furniture')}
            >
              View Full Furniture Catalog <ArrowRight size={15} />
            </button>
          </div>

          <div className="room-products-grid">
            {roomProducts.map((product) => {
              const inWishlist = isInWishlist(product.id);

              return (
                <div key={product.id} className="room-product-card motion-card-enter">
                  
                  <div className="room-prod-img-box image-zoom-container">
                    <img src={product.image} alt={product.name} loading="lazy" />

                    <div className="room-prod-badges">
                      {product.badge && <span className="badge-dark">{product.badge}</span>}
                      {product.discount > 0 && <span className="badge-gold">-{product.discount}%</span>}
                    </div>

                    <button 
                      className={`room-prod-wishlist-btn ${inWishlist ? 'wishlist-active' : ''}`}
                      onClick={() => toggleWishlist(product)}
                      aria-label="Wishlist"
                    >
                      <Heart size={16} fill={inWishlist ? '#A05A3C' : 'none'} color={inWishlist ? '#A05A3C' : '#1E1C1A'} />
                    </button>

                    <div className="room-prod-quick-bar">
                      <button 
                        className="room-quick-btn view-action"
                        onClick={() => onQuickViewProduct(product.id)}
                      >
                        <Eye size={14} /> Quick View
                      </button>
                      <button 
                        className="room-quick-btn add-action"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingBag size={14} /> Add to Bag
                      </button>
                    </div>
                  </div>

                  <div className="room-prod-meta">
                    <div className="room-prod-top">
                      <span className="room-prod-cat">{product.category}</span>
                      <div className="room-prod-rating">
                        <Star size={12} fill="#C29B38" color="#C29B38" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <h3 
                      className="room-prod-name font-serif"
                      onClick={() => onQuickViewProduct(product.id)}
                    >
                      {product.name}
                    </h3>

                    {product.finishes && (
                      <div className="room-prod-finishes">
                        <div className="room-swatches-dots">
                          {product.finishes.map((f, i) => (
                            <span 
                              key={i} 
                              className="room-swatch-dot" 
                              style={{ backgroundColor: f.color }}
                              title={f.name}
                            />
                          ))}
                        </div>
                        <span className="room-swatches-label">{product.finishes.length} Finishes</span>
                      </div>
                    )}

                    <div className="room-prod-price-row">
                      <div className="price-stack">
                        <span className="room-prod-price">{formatPrice(product.price)}</span>
                        {product.mrp && <span className="room-prod-mrp">{formatPrice(product.mrp)}</span>}
                      </div>
                      {product.emi && <span className="room-emi-tag">0% EMI</span>}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        .room-page-hero-banner {
          background-size: cover;
          background-position: center;
          padding: 5.5rem 0 4.5rem;
          color: #FFF;
          transition: background-image 0.6s ease-in-out;
        }

        .breadcrumb-trail {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #B5AFA8;
          margin-bottom: 0.85rem;
        }

        .breadcrumb-trail button {
          background: none;
          border: none;
          color: #B5AFA8;
          cursor: pointer;
        }

        .breadcrumb-trail button:hover {
          color: var(--accent-gold);
        }

        .room-hero-meta-strip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-gold);
          margin-bottom: 0.45rem;
          font-weight: 600;
        }

        .room-hero-headline {
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
        }

        .room-hero-desc {
          font-size: 1.05rem;
          color: #D5CEC6;
          max-width: 720px;
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }

        .room-hero-spec-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .spec-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          color: #F0ECE6;
        }

        /* 8-Room Navigation Tabs */
        .rooms-tab-navigation-bar {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-light);
        }

        .rooms-tab-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .rooms-pills-scroll-track {
          display: flex;
          gap: 0.65rem;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 0.2rem 0;
        }

        .rooms-pills-scroll-track::-webkit-scrollbar {
          display: none;
        }

        .room-pill-tab-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: all var(--transition-fast);
        }

        .room-pill-tab-btn:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
          border-color: var(--accent-gold);
        }

        .active-room-tab {
          background: var(--bg-dark) !important;
          color: #FFFFFF !important;
          border-color: var(--bg-dark) !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }

        .active-room-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-gold);
        }

        /* Room Visualizer Card */
        .room-visualizer-card {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 2.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 1.75rem;
          box-shadow: var(--shadow-subtle);
          margin-bottom: 4rem;
        }

        @media (max-width: 1024px) {
          .room-visualizer-card {
            grid-template-columns: 1fr;
          }
        }

        .room-visualizer-viewport {
          position: relative;
          min-height: 480px;
          height: 100%;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: #111;
        }

        .room-visualizer-viewport img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .room-visualizer-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 40%);
        }

        .visualizer-hint-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(22, 20, 18, 0.88);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #FFF;
          font-size: 0.72rem;
          padding: 0.35rem 0.75rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          z-index: 5;
        }

        /* Hotspot Pins */
        .room-hotspot-pin {
          position: absolute;
          z-index: 10;
          transform: translate(-50%, -50%);
        }

        .hotspot-pulse-trigger {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(22, 20, 18, 0.85);
          border: 2px solid #C29B38;
          color: #C29B38;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(194, 155, 56, 0.3);
          transition: all 0.3s ease;
          animation: hotspotPulse 2.5s infinite;
        }

        @keyframes hotspotPulse {
          0% { box-shadow: 0 0 0 0 rgba(194, 155, 56, 0.6); }
          70% { box-shadow: 0 0 0 12px rgba(194, 155, 56, 0); }
          100% { box-shadow: 0 0 0 0 rgba(194, 155, 56, 0); }
        }

        .room-hotspot-pin:hover .hotspot-pulse-trigger,
        .hotspot-pin-open .hotspot-pulse-trigger {
          background: #C29B38;
          color: #161412;
          transform: scale(1.15);
        }

        .hotspot-reveal-popover {
          position: absolute;
          bottom: 42px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(22, 20, 18, 0.96);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(194, 155, 56, 0.4);
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-sm);
          color: #FFF;
          width: 220px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease;
          z-index: 20;
        }

        .room-hotspot-pin:hover .hotspot-reveal-popover,
        .hotspot-pin-open .hotspot-reveal-popover {
          opacity: 1;
          visibility: visible;
          bottom: 46px;
        }

        .hotspot-tag-category {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 0.2rem;
        }

        .hotspot-product-name {
          font-size: 0.95rem;
          margin-bottom: 0.35rem;
          line-height: 1.3;
        }

        .hotspot-price-tag {
          font-size: 0.85rem;
          font-weight: 700;
          color: #FFF;
          display: block;
        }

        .hotspot-action-hint {
          font-size: 0.68rem;
          color: var(--accent-gold);
          margin-top: 0.4rem;
          display: block;
        }

        /* Room Visualizer Sidebar Info */
        .room-visualizer-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .room-info-title {
          font-size: 1.8rem;
          margin: 0.35rem 0 0.75rem;
          color: var(--text-primary);
        }

        .room-info-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .room-specs-list {
          border-top: 1px solid var(--border-light);
          padding-top: 1.25rem;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .room-spec-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          gap: 1rem;
        }

        .spec-title {
          color: var(--text-muted);
          font-weight: 600;
          white-space: nowrap;
        }

        .spec-val {
          color: var(--text-primary);
          text-align: right;
          font-weight: 500;
        }

        .room-consult-cta-box {
          background: var(--bg-dark);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          color: #FFF;
        }

        /* Shoppable Products Grid */
        .room-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        @media (max-width: 1100px) {
          .room-products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .room-products-grid {
            grid-template-columns: 1fr;
          }
        }

        .room-product-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-medium), box-shadow var(--transition-medium);
        }

        .room-product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-card);
        }

        .room-prod-img-box {
          position: relative;
          height: 260px;
          background: #F4EFE6;
          overflow: hidden;
        }

        .room-prod-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .room-prod-badges {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          z-index: 4;
        }

        .room-prod-wishlist-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 4;
          transition: all var(--transition-fast);
        }

        .room-prod-wishlist-btn:hover {
          background: #FFF;
          transform: scale(1.1);
        }

        .room-prod-quick-bar {
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

        .room-product-card:hover .room-prod-quick-bar {
          transform: translateY(0);
        }

        .room-quick-btn {
          padding: 0.75rem 0.5rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
        }

        .view-action {
          background: rgba(255, 255, 255, 0.96);
          color: var(--text-primary);
        }

        .add-action {
          background: var(--bg-dark);
          color: #FFF;
        }

        .add-action:hover {
          background: var(--accent-gold);
          color: var(--bg-dark);
        }

        /* Card Meta */
        .room-prod-meta {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .room-prod-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.35rem;
        }

        .room-prod-cat {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .room-prod-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.74rem;
          font-weight: 600;
        }

        .room-prod-name {
          font-size: 1.15rem;
          font-weight: 500;
          line-height: 1.35;
          margin-bottom: 0.65rem;
          cursor: pointer;
          min-height: 3.1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .room-prod-name:hover {
          color: var(--accent-gold);
        }

        .room-prod-finishes {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.85rem;
        }

        .room-swatches-dots {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .room-swatch-dot {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          border: 1px solid var(--border-medium);
        }

        .room-swatches-label {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .room-prod-price-row {
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-light);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .room-prod-price {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .room-prod-mrp {
          font-size: 0.8rem;
          text-decoration: line-through;
          color: var(--text-muted);
          margin-left: 0.4rem;
        }

        .room-emi-tag {
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--accent-bronze);
          background: var(--bg-secondary);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
        }
      `}</style>
    </div>
  );
}
