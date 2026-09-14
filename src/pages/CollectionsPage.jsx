import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Eye, 
  ShoppingBag, 
  Heart, 
  Check, 
  Compass, 
  Award, 
  Star, 
  Calendar,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { signatureCollections, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function CollectionsPage({ onQuickViewProduct, onNavigate }) {
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  const collectionStories = {
    'The Contemporary Edit': {
      designerNote: 'Curated by Atelier Master Architect Julian Vane',
      mood: 'Curved silhouettes, textured bouclés, honed Roman travertine, and softened geometric balance.',
      materials: ['Solid White Oak', 'Italian Slub Bouclé', 'Honed Travertine', 'Champagne Brass'],
      palette: ['#FAF7F2', '#E8E1D5', '#544436', '#C29B38'],
      lifestyleImg: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85'
    },
    'The Heritage Edit': {
      designerNote: 'Curated by Master Woodworker Devendra Rao',
      mood: 'Seasoned Burmese teak, hand-woven natural rattan cane, mortise & tenon joinery, and colonial warmth.',
      materials: ['Old-Growth Burmese Teak', 'Hand-Woven Rattan Cane', 'Aniline Saddle Leather', 'Cast Bronze'],
      palette: ['#F3EFE8', '#885834', '#3A2E26', '#7E5233'],
      lifestyleImg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85'
    },
    'The Minimal Edit': {
      designerNote: 'Curated by Architectural Studio Lead Elena Rossi',
      mood: 'Quiet architectural discipline, handleless smoked oak facades, concealed soft-close mechanics, and monolithic stone.',
      materials: ['Smoked European Ash', 'Sintered Basalt Stone', 'Matte Gunmetal Black', 'Belgian Raw Linen'],
      palette: ['#EBE5DC', '#262320', '#635D57', '#C8BEAF'],
      lifestyleImg: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85'
    },
    'The Luxe Edit': {
      designerNote: 'Curated by Principal Designer Marcus Sterling',
      mood: 'Deep cabernet-veined Calacatta Viola marble, antiqued hand-brushed brass plinths, and bespoke cashmere lacquers.',
      materials: ['Calacatta Viola Monoliths', 'Hand-Cast Virgin Brass', 'Italian Nubuck Leather', 'Smoked Bronze Glass'],
      palette: ['#1C1917', '#9E5B42', '#C29B38', '#D4AF37'],
      lifestyleImg: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85'
    }
  };

  const displayedCollections = selectedCollection === 'all' 
    ? signatureCollections 
    : signatureCollections.filter(c => c.id === selectedCollection);

  const categories = ['all', 'Sofas', 'Beds', 'Dining Sets', 'Chairs', 'Tables', 'Wardrobes', 'TV Units', 'Study Furniture'];

  return (
    <div className="collections-master-page animate-fade">
      
      {/* 1. Hero Banner with Editorial Typography */}
      <section className="collections-page-hero">
        <div className="container">
          
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')} className="crumb-link">Home</button>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Signature Collections</span>
          </div>

          <div className="hero-badge-pill">
            <Sparkles size={14} className="text-gold" />
            <span>The Embroshyal Atelier Anthology 2026</span>
          </div>

          <h1 className="editorial-heading-1 text-white collections-hero-title">
            Curated Design <span className="italic font-normal text-gold">Philosophies.</span>
          </h1>

          <p className="collections-hero-sub">
            Four distinct spatial narratives celebrating architectural minimalism, enduring heritage forms, organic modern warmth, and bespoke monolithic luxury. Handcrafted from certified sustainable hardwoods, Italian marbles, and artisanal textiles.
          </p>

          {/* Key Metrics Strip */}
          <div className="collections-hero-metrics">
            <div className="hero-metric-box">
              <strong>4 Design Narratives</strong>
              <span>Contemporary • Heritage • Minimal • Luxe</span>
            </div>
            <div className="metric-divider"></div>
            <div className="hero-metric-box">
              <strong>120 Bespoke Silhouettes</strong>
              <span>Living • Bedroom • Dining • Storage</span>
            </div>
            <div className="metric-divider"></div>
            <div className="hero-metric-box">
              <strong>10-Year Timber Warranty</strong>
              <span>Kiln-Dried Hardwood Construction</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Interactive Collection Filter Tabs */}
      <section className="collections-tab-bar-strip sticky-top-strip">
        <div className="container">
          <div className="tabs-navigation-track">
            
            <button 
              className={`coll-tab-btn ${selectedCollection === 'all' ? 'active-coll-tab' : ''}`}
              onClick={() => setSelectedCollection('all')}
            >
              <span>All 4 Collections</span>
              <span className="tab-pill-count">120 Pieces</span>
            </button>

            {signatureCollections.map((coll, idx) => (
              <button 
                key={coll.id}
                className={`coll-tab-btn ${selectedCollection === coll.id ? 'active-coll-tab' : ''}`}
                onClick={() => setSelectedCollection(coll.id)}
              >
                <span>0{idx + 1}. {coll.title.replace('The ', '')}</span>
                <span className="tab-pill-count">30 Pieces</span>
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* 3. Main Collections Showcase Stream */}
      <main className="container section-padding">
        <div className="collections-stream-wrapper">
          
          {displayedCollections.map((coll, collIdx) => {
            const story = collectionStories[coll.title] || collectionStories['The Contemporary Edit'];
            let collProducts = products.filter(p => p.collection === coll.title);
            
            if (selectedCategoryFilter !== 'all') {
              collProducts = collProducts.filter(p => p.category.toLowerCase() === selectedCategoryFilter.toLowerCase());
            }

            return (
              <article key={coll.id} className="collection-master-chapter" id={`chapter-${coll.id}`}>
                
                {/* A. Editorial Chapter Header & Lifestyle Vignette */}
                <div className="chapter-editorial-card">
                  
                  <div className="chapter-media-pane image-zoom-container">
                    <img 
                      src={story.lifestyleImg || coll.image} 
                      alt={`${coll.title} In-Situ Architecture`} 
                      className="chapter-lifestyle-img"
                    />
                    <div className="chapter-img-overlay"></div>
                    <span className="chapter-index-badge">Chapter 0{collIdx + 1}</span>
                    
                    <div className="chapter-palette-strip">
                      <span className="palette-label">Curated Palette:</span>
                      <div className="palette-swatches">
                        {story.palette.map((colorHex, cIdx) => (
                          <span 
                            key={cIdx} 
                            className="palette-swatch-dot" 
                            style={{ backgroundColor: colorHex }}
                            title={colorHex}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="chapter-narrative-pane">
                    <div className="chapter-meta-top">
                      <span className="section-label">{coll.piecesCount}</span>
                      <span className="designer-tagline"><Compass size={13} className="text-gold" /> {story.designerNote}</span>
                    </div>

                    <h2 className="chapter-title font-serif">{coll.title}</h2>
                    <h3 className="chapter-subtitle">{coll.subtitle}</h3>

                    <p className="chapter-desc-copy">{coll.description}</p>
                    
                    <div className="chapter-mood-box">
                      <strong>Design Aesthetic:</strong>
                      <p>{story.mood}</p>
                    </div>

                    {/* Material Spec Pills */}
                    <div className="chapter-materials-list">
                      {story.materials.map((mat, mIdx) => (
                        <div key={mIdx} className="material-pill-item">
                          <Check size={12} className="text-gold" />
                          <span>{mat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="chapter-action-cluster">
                      <button 
                        className="btn-gold hover-lift"
                        onClick={() => onNavigate('furniture')}
                      >
                        Explore All {coll.title.replace('The ', '')} Pieces <ArrowRight size={15} />
                      </button>
                      <button 
                        className="btn-secondary hover-lift"
                        onClick={() => onNavigate('consultation')}
                      >
                        Request Bespoke Customisation
                      </button>
                    </div>
                  </div>

                </div>

                {/* B. Curated Products Showcase Grid for this Collection */}
                <div className="chapter-products-section">
                  <div className="chapter-section-header">
                    <div>
                      <h4 className="font-serif chapter-products-title">Signature Pieces in {coll.title}</h4>
                      <p className="chapter-products-sub">Individually numbered atelier furniture engineered for high-durability residential and contract spaces.</p>
                    </div>

                    <button 
                      className="btn-link"
                      onClick={() => onNavigate('furniture')}
                    >
                      View All 30 Pieces in Catalog →
                    </button>
                  </div>

                  <div className="collection-products-grid">
                    {collProducts.slice(0, 6).map((product, pIdx) => {
                      const inWishlist = isInWishlist(product.id);

                      return (
                        <div 
                          key={product.id} 
                          className={`coll-product-card motion-card-enter stagger-${(pIdx % 3) + 1}`}
                        >
                          {/* Image Wrap */}
                          <div className="coll-product-img-box image-zoom-container">
                            <img src={product.image} alt={product.name} loading="lazy" />
                            
                            {/* Badges */}
                            <div className="coll-product-badges">
                              <span className="rating-pill">★ {product.rating}</span>
                              {product.discount > 0 && (
                                <span className="discount-pill">-{product.discount}%</span>
                              )}
                            </div>

                            {/* Wishlist Button */}
                            <button 
                              className={`coll-wishlist-btn ${inWishlist ? 'wishlist-active' : ''}`}
                              onClick={() => toggleWishlist(product)}
                              aria-label="Wishlist"
                            >
                              <Heart size={16} fill={inWishlist ? '#A05A3C' : 'none'} color={inWishlist ? '#A05A3C' : '#1E1C1A'} />
                            </button>

                            {/* Hover Quick Actions */}
                            <div className="coll-quick-bar">
                              <button 
                                className="coll-action-btn view-action"
                                onClick={() => onQuickViewProduct(product.id)}
                              >
                                <Eye size={14} /> Quick View
                              </button>
                              <button 
                                className="coll-action-btn add-action"
                                onClick={() => addToCart(product)}
                              >
                                <ShoppingBag size={14} /> Add to Cart
                              </button>
                            </div>
                          </div>

                          {/* Meta Body */}
                          <div className="coll-product-meta">
                            <div className="meta-category-line">
                              <span>{product.category} • {product.room}</span>
                              <span className="reviews-tag">{product.reviewsCount} Reviews</span>
                            </div>

                            <h5 
                              className="coll-product-title font-serif"
                              onClick={() => onQuickViewProduct(product.id)}
                              title={product.name}
                            >
                              {product.name}
                            </h5>

                            {/* Finish Dots */}
                            {product.finishes && (
                              <div className="coll-swatches-row">
                                <div className="swatch-dots-cluster">
                                  {product.finishes.map((f, fIdx) => (
                                    <span 
                                      key={fIdx} 
                                      className="swatch-dot-pill" 
                                      style={{ backgroundColor: f.color }} 
                                      title={f.name}
                                    />
                                  ))}
                                </div>
                                <span className="swatches-count-label">{product.finishes.length} Finishes</span>
                              </div>
                            )}

                            {/* Pricing Row */}
                            <div className="coll-price-footer">
                              <div className="price-stack">
                                <span className="price-current">{formatPrice(product.price)}</span>
                                {product.mrp && (
                                  <span className="price-mrp">{formatPrice(product.mrp)}</span>
                                )}
                              </div>
                              <span className="emi-tag">0% EMI Available</span>
                            </div>
                          </div>

                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* C. Architectural Pairing Lookbook Box */}
                <div className="collection-pairing-banner">
                  <div className="pairing-content">
                    <span className="section-label text-gold">Architectural Harmony</span>
                    <h4 className="font-serif pairing-title">How to Style {coll.title}</h4>
                    <p className="pairing-copy">
                      Pair sculptural curved seating with natural travertine coffee tables and warm ambient fluted lighting for a layered, serene atmosphere.
                    </p>
                    <div className="pairing-features">
                      <div className="p-feat">
                        <Award size={16} className="text-gold" />
                        <span>Certified FSC Sustainable Hardwood</span>
                      </div>
                      <div className="p-feat">
                        <ShieldCheck size={16} className="text-gold" />
                        <span>10-Year Timber Structural Guarantee</span>
                      </div>
                    </div>
                  </div>

                  <div className="pairing-cta-box">
                    <button 
                      className="btn-primary"
                      onClick={() => onNavigate('consultation')}
                    >
                      Book 3D Room Styling Session <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

              </article>
            );
          })}

        </div>
      </main>

      {/* 4. Atelier Customisation Banner */}
      <section className="collections-custom-cta-strip">
        <div className="container">
          <div className="custom-cta-card">
            <div className="custom-cta-text">
              <span className="section-label text-gold">Made to Order</span>
              <h2 className="editorial-heading-2 text-white">Require Custom Dimensions or Rare Finishes?</h2>
              <p className="text-neutral-300 max-w-600 mt-2">
                Our master artisans fabricate custom dimensions, bespoke upholstery grains, and tailored room packages to your exact architectural blueprints.
              </p>
            </div>
            <div className="custom-cta-buttons">
              <button 
                className="btn-gold hover-lift"
                onClick={() => onNavigate('customisation')}
              >
                Launch 3D Custom Studio <ArrowRight size={16} />
              </button>
              <button 
                className="btn-secondary-light hover-lift"
                onClick={() => onNavigate('consultation')}
              >
                Schedule Architect Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .collections-master-page {
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        /* 1. Hero Section */
        .collections-page-hero {
          background: linear-gradient(135deg, rgba(22, 20, 18, 0.96) 0%, rgba(22, 20, 18, 0.82) 100%), 
                      url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85');
          background-size: cover;
          background-position: center;
          padding: 5.5rem 0 4.5rem;
          color: #FFF;
          border-bottom: 1px solid var(--border-dark);
        }

        .breadcrumb-trail {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: #A8A29A;
          margin-bottom: 1.5rem;
        }

        .crumb-link {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .crumb-link:hover {
          color: var(--accent-gold);
        }

        .crumb-sep {
          color: #666;
        }

        .crumb-current {
          color: #FFF;
          font-weight: 600;
        }

        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(194, 155, 56, 0.15);
          border: 1px solid rgba(194, 155, 56, 0.4);
          padding: 0.35rem 0.95rem;
          border-radius: 50px;
          color: var(--accent-gold);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        .collections-hero-title {
          max-width: 900px;
          margin-bottom: 1.25rem;
        }

        .collections-hero-sub {
          font-size: 1.12rem;
          font-weight: 300;
          line-height: 1.7;
          color: #D5CEC6;
          max-width: 780px;
          margin-bottom: 2.75rem;
        }

        .collections-hero-metrics {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          flex-wrap: wrap;
        }

        .hero-metric-box strong {
          display: block;
          font-size: 1.05rem;
          font-weight: 600;
          color: #FFF;
        }

        .hero-metric-box span {
          display: block;
          font-size: 0.78rem;
          color: #B5AFA8;
          margin-top: 0.15rem;
        }

        .metric-divider {
          width: 1px;
          height: 36px;
          background: rgba(255, 255, 255, 0.18);
        }

        @media (max-width: 768px) {
          .metric-divider {
            display: none;
          }
          .collections-hero-metrics {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
          }
        }

        /* 2. Sticky Tab Strip */
        .collections-tab-bar-strip {
          background: rgba(250, 248, 245, 0.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-light);
          padding: 0.85rem 0;
          position: sticky;
          top: 70px;
          z-index: 30;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .tabs-navigation-track {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 0.25rem 0;
        }

        .tabs-navigation-track::-webkit-scrollbar {
          display: none;
        }

        .coll-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 1.25rem;
          border-radius: 50px;
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .coll-tab-btn:hover {
          border-color: var(--accent-gold);
          color: var(--text-primary);
        }

        .active-coll-tab {
          background: var(--bg-dark);
          color: #FFF !important;
          border-color: var(--bg-dark);
          box-shadow: 0 4px 14px rgba(22, 20, 18, 0.25);
        }

        .tab-pill-count {
          font-size: 0.7rem;
          opacity: 0.75;
          padding: 0.15rem 0.45rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.15);
        }

        .active-coll-tab .tab-pill-count {
          background: var(--accent-gold);
          color: #161412;
          font-weight: 700;
          opacity: 1;
        }

        /* 3. Stream & Chapters */
        .collections-stream-wrapper {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        .collection-master-chapter {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .chapter-editorial-card {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }

        @media (max-width: 1024px) {
          .chapter-editorial-card {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .chapter-media-pane {
          position: relative;
          min-height: 480px;
          background: #EBE5DC;
          overflow: hidden;
        }

        @media (max-width: 600px) {
          .chapter-media-pane {
            min-height: 320px;
          }
        }

        .chapter-lifestyle-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .chapter-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(22, 20, 18, 0.7) 0%, transparent 50%);
        }

        .chapter-index-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(22, 20, 18, 0.9);
          backdrop-filter: blur(8px);
          color: var(--accent-gold);
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(194, 155, 56, 0.35);
        }

        .chapter-palette-strip {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: rgba(22, 20, 18, 0.88);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .palette-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #DDD;
        }

        .palette-swatches {
          display: flex;
          gap: 0.45rem;
        }

        .palette-swatch-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.4);
          display: inline-block;
        }

        .chapter-narrative-pane {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .chapter-narrative-pane {
            padding: 1.75rem;
          }
        }

        .chapter-meta-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .designer-tagline {
          font-size: 0.75rem;
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-style: italic;
        }

        .chapter-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          line-height: 1.15;
          margin-bottom: 0.45rem;
          color: var(--text-primary);
        }

        .chapter-subtitle {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--accent-bronze);
          margin-bottom: 1.25rem;
        }

        .chapter-desc-copy {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .chapter-mood-box {
          background: var(--bg-secondary);
          border-left: 3px solid var(--accent-gold);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .chapter-mood-box strong {
          display: block;
          color: var(--text-primary);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.25rem;
        }

        .chapter-materials-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.65rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 500px) {
          .chapter-materials-list {
            grid-template-columns: 1fr;
          }
        }

        .material-pill-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .chapter-action-cluster {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Products Grid Inside Chapter */
        .chapter-products-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .chapter-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .chapter-products-title {
          font-size: 1.6rem;
          color: var(--text-primary);
        }

        .chapter-products-sub {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .collection-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        @media (max-width: 1100px) {
          .collection-products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .collection-products-grid {
            grid-template-columns: 1fr;
          }
        }

        .coll-product-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-medium), box-shadow var(--transition-medium), border-color var(--transition-medium);
        }

        .coll-product-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-card);
          border-color: var(--border-medium);
        }

        .coll-product-img-box {
          position: relative;
          height: 280px;
          background: #F4EFE6;
          overflow: hidden;
        }

        .coll-product-badges {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          gap: 0.4rem;
          z-index: 4;
        }

        .rating-pill {
          background: var(--bg-dark);
          color: var(--accent-gold);
          font-size: 0.68rem;
          font-weight: 700;
          padding: 0.28rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .discount-pill {
          background: var(--accent-clay);
          color: #FFF;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.28rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .coll-wishlist-btn {
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

        .coll-wishlist-btn:hover {
          background: #FFF;
          transform: scale(1.1);
        }

        .wishlist-active {
          background: #FFF;
          border-color: var(--accent-clay);
        }

        .coll-quick-bar {
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

        .coll-product-card:hover .coll-quick-bar {
          transform: translateY(0);
        }

        .coll-action-btn {
          padding: 0.8rem 0.5rem;
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

        .view-action:hover {
          background: var(--bg-secondary);
        }

        .add-action {
          background: var(--bg-dark);
          color: #FFF;
        }

        .add-action:hover {
          background: var(--accent-gold);
          color: var(--bg-dark);
        }

        .coll-product-meta {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .meta-category-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.4rem;
        }

        .reviews-tag {
          color: var(--text-secondary);
        }

        .coll-product-title {
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.65rem;
          cursor: pointer;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 3.1rem;
        }

        .coll-product-title:hover {
          color: var(--accent-gold);
        }

        .coll-swatches-row {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.85rem;
        }

        .swatch-dots-cluster {
          display: flex;
          gap: 0.3rem;
        }

        .swatch-dot-pill {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          border: 1px solid var(--border-medium);
        }

        .swatches-count-label {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .coll-price-footer {
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-light);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .price-stack {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .price-current {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .price-mrp {
          font-size: 0.82rem;
          text-decoration: line-through;
          color: var(--text-muted);
        }

        .emi-tag {
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--accent-bronze);
          background: var(--bg-secondary);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        /* Pairing Lookbook Card */
        .collection-pairing-banner {
          background: linear-gradient(135deg, rgba(22, 20, 18, 0.97) 0%, rgba(34, 30, 27, 0.95) 100%);
          color: #FFF;
          border-radius: var(--radius-sm);
          padding: 2.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          border: 1px solid rgba(194, 155, 56, 0.3);
          box-shadow: var(--shadow-dark);
        }

        @media (max-width: 900px) {
          .collection-pairing-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 2rem 1.5rem;
          }
        }

        .pairing-title {
          font-size: 1.6rem;
          margin: 0.35rem 0 0.65rem;
          color: #FFF;
        }

        .pairing-copy {
          font-size: 0.9rem;
          color: #D5CEC6;
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .pairing-features {
          display: flex;
          gap: 1.75rem;
          flex-wrap: wrap;
        }

        .p-feat {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: #E6E0D8;
        }

        /* 4. Bottom Custom CTA Strip */
        .collections-custom-cta-strip {
          background: var(--bg-dark);
          padding: 5rem 0;
          border-top: 1px solid var(--border-dark);
        }

        .custom-cta-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 3rem;
        }

        @media (max-width: 900px) {
          .custom-cta-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
        }

        .custom-cta-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .max-w-600 {
          max-width: 600px;
        }
      `}</style>

    </div>
  );
}
