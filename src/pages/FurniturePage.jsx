import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, Star, Heart, ShoppingBag, Eye, ArrowRight, Check, X, Sparkles, Filter } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function FurniturePage({ onQuickViewProduct, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRoom, setSelectedRoom] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState(350000);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const categories = ['All', 'Sofas', 'Beds', 'Dining Sets', 'Chairs', 'Tables', 'Wardrobes', 'TV Units', 'Study Furniture'];
  const roomsList = ['All', 'Living Room', 'Bedroom', 'Dining', 'Home Office'];

  // Map subcategory from dropdown to primary category
  const mapSubcategoryToCategory = (sub) => {
    const s = sub.toLowerCase();
    if (s.includes('sofa') || s.includes('recliner')) return 'Sofas';
    if (s.includes('bed') || s.includes('mattress')) return 'Beds';
    if (s.includes('dining table') || s.includes('dining set') || s.includes('bar') || s.includes('crockery')) return 'Dining Sets';
    if (s.includes('chair')) return 'Chairs';
    if (s.includes('coffee table') || s.includes('side table') || s.includes('table')) return 'Tables';
    if (s.includes('wardrobe') || s.includes('dresser') || s.includes('chest') || s.includes('shoe') || s.includes('storage')) return 'Wardrobes';
    if (s.includes('tv') || s.includes('cabinet')) return 'TV Units';
    if (s.includes('study') || s.includes('desk') || s.includes('bookshelf') || s.includes('office')) return 'Study Furniture';
    return 'All';
  };

  const mapRoomTitle = (room) => {
    const r = room.toLowerCase();
    if (r.includes('living')) return 'Living Room';
    if (r.includes('bedroom')) return 'Bedroom';
    if (r.includes('dining')) return 'Dining';
    if (r.includes('office')) return 'Home Office';
    return 'All';
  };

  // Sync hash query parameters
  useEffect(() => {
    const parseUrl = () => {
      const hash = window.location.hash;
      if (hash.includes('filter=')) {
        const queryString = hash.substring(hash.indexOf('?'));
        const params = new URLSearchParams(queryString);
        const filterParam = params.get('filter');
        const roomParam = params.get('room');

        if (filterParam) {
          setSelectedSubcategory(filterParam);
          const mappedCat = mapSubcategoryToCategory(filterParam);
          if (mappedCat && mappedCat !== 'All') {
            setSelectedCategory(mappedCat);
          }
        }
        if (roomParam) {
          const mappedRoom = mapRoomTitle(roomParam);
          if (mappedRoom && mappedRoom !== 'All') {
            setSelectedRoom(mappedRoom);
          }
        }
      }
    };

    parseUrl();
    window.addEventListener('hashchange', parseUrl);
    return () => window.removeEventListener('hashchange', parseUrl);
  }, []);

  const clearSubcategory = () => {
    setSelectedSubcategory(null);
    window.location.hash = 'furniture';
  };

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setSelectedRoom('All');
    setSelectedSubcategory(null);
    setPriceRange(350000);
    window.location.hash = 'furniture';
  };

  const filteredProducts = products.filter(p => {
    // 1. If specific subcategory was selected from dropdown
    if (selectedSubcategory) {
      const subLower = selectedSubcategory.toLowerCase();
      const nameMatch = p.name.toLowerCase().includes(subLower) || p.subtitle.toLowerCase().includes(subLower);
      const catMatch = p.category.toLowerCase().includes(subLower) || subLower.includes(p.category.toLowerCase());
      
      // If we found name or direct category match
      if (nameMatch || catMatch) {
        return p.price <= priceRange;
      }
    }

    // 2. Standard filter matching
    const matchCat = selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchRoom = selectedRoom === 'All' || p.room.toLowerCase().includes(selectedRoom.toLowerCase());
    const matchPrice = p.price <= priceRange;
    return matchCat && matchRoom && matchPrice;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured default
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="page-wrapper animate-fade">
      {/* Page Header Banner */}
      <div className="page-hero-banner">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <button onClick={resetAllFilters}>Furniture Collection</button>
            {selectedCategory !== 'All' && (
              <>
                <span>/</span>
                <span className="text-gold">{selectedCategory}</span>
              </>
            )}
            {selectedSubcategory && (
              <>
                <span>/</span>
                <span className="text-gold">{selectedSubcategory}</span>
              </>
            )}
          </div>
          
          <span className="section-label text-gold">The Atelier Catalog</span>
          <h1 className="editorial-heading-1 text-white">
            {selectedSubcategory ? `${selectedSubcategory} Collection` : (selectedCategory !== 'All' ? `${selectedCategory} Collection` : 'Furniture Atelier')}
          </h1>
          <p className="page-hero-desc">
            Explore handcrafted sculptural silhouettes, seasoned kiln-dried European timbers, Italian quarried stone and textured bouclés tailored for modern living.
          </p>
        </div>
      </div>

      <div className="container section-padding">
        
        {/* Active Filter Pill Bar if subcategory or custom filter selected */}
        {(selectedSubcategory || selectedCategory !== 'All' || selectedRoom !== 'All' || priceRange < 350000) && (
          <div className="active-filters-pill-bar animate-fade">
            <span className="active-filters-label">Active Filters:</span>
            
            {selectedSubcategory && (
              <span className="active-filter-badge">
                Subcategory: <strong>{selectedSubcategory}</strong>
                <button onClick={clearSubcategory} aria-label="Clear subcategory"><X size={12} /></button>
              </span>
            )}

            {selectedCategory !== 'All' && !selectedSubcategory && (
              <span className="active-filter-badge">
                Category: <strong>{selectedCategory}</strong>
                <button onClick={() => setSelectedCategory('All')} aria-label="Clear category"><X size={12} /></button>
              </span>
            )}

            {selectedRoom !== 'All' && (
              <span className="active-filter-badge">
                Room: <strong>{selectedRoom}</strong>
                <button onClick={() => setSelectedRoom('All')} aria-label="Clear room"><X size={12} /></button>
              </span>
            )}

            {priceRange < 350000 && (
              <span className="active-filter-badge">
                Max: <strong>{formatPrice(priceRange)}</strong>
                <button onClick={() => setPriceRange(350000)} aria-label="Clear price"><X size={12} /></button>
              </span>
            )}

            <button className="reset-all-filters-link" onClick={resetAllFilters}>
              Reset All Filters
            </button>
          </div>
        )}

        <div className="catalog-layout-grid">
          
          {/* Left Filter Sidebar */}
          <aside className="filter-sidebar">
            <div className="filter-sidebar-header">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-gold" />
                <h3 className="font-serif">Filters</h3>
              </div>
              {(selectedCategory !== 'All' || selectedRoom !== 'All' || selectedSubcategory || priceRange < 350000) && (
                <button className="filter-reset-btn" onClick={resetAllFilters}>
                  Reset All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <h4 className="filter-group-title">Categories</h4>
              <div className="filter-list">
                {categories.map((cat) => {
                  const count = cat === 'All' ? products.length : products.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length;
                  const isActive = selectedCategory === cat && !selectedSubcategory;

                  return (
                    <button 
                      key={cat}
                      className={`filter-item-btn ${isActive ? 'active-filter-item' : ''}`}
                      onClick={() => {
                        setSelectedSubcategory(null);
                        setSelectedCategory(cat);
                      }}
                    >
                      <span>{cat}</span>
                      <span className="filter-count">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Room Filter */}
            <div className="filter-group">
              <h4 className="filter-group-title">Shop by Room</h4>
              <div className="filter-list">
                {roomsList.map((room) => {
                  const isActive = selectedRoom === room;

                  return (
                    <button 
                      key={room}
                      className={`filter-item-btn ${isActive ? 'active-filter-item' : ''}`}
                      onClick={() => setSelectedRoom(room)}
                    >
                      <span>{room}</span>
                      {isActive && <Check size={13} className="text-gold" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Filter */}
            <div className="filter-group">
              <div className="flex-between mb-2">
                <h4 className="filter-group-title mb-0">Max Budget</h4>
                <span className="price-filter-val">{formatPrice(priceRange)}</span>
              </div>
              <input 
                type="range" 
                min="30000" 
                max="350000" 
                step="10000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="price-range-slider"
              />
              <div className="flex-between price-slider-labels">
                <span>₹30k</span>
                <span>₹3.5L</span>
              </div>
            </div>

          </aside>

          {/* Right Product Grid Column */}
          <main className="catalog-main-content">
            
            {/* Top Toolbar */}
            <div className="catalog-toolbar">
              <span className="results-count">
                Showing <strong>{filteredProducts.length}</strong> handcrafted pieces {selectedSubcategory ? `in "${selectedSubcategory}"` : (selectedCategory !== 'All' ? `in ${selectedCategory}` : '')}
              </span>

              <div className="sort-box">
                <label>Sort By:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Featured Curations</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="products-catalog-grid">
                {filteredProducts.map((product) => {
                  const inWishlist = isInWishlist(product.id);

                  return (
                    <div key={product.id} className="catalog-product-card motion-card-enter">
                      
                      {/* Image Container with Fixed Proportions */}
                      <div className="catalog-img-box image-zoom-container">
                        <img src={product.image} alt={product.name} loading="lazy" />

                        <div className="catalog-badges">
                          {product.badge && <span className="badge-dark">{product.badge}</span>}
                          {product.discount > 0 && <span className="badge-gold">-{product.discount}%</span>}
                        </div>

                        <button 
                          className={`catalog-wishlist-btn ${inWishlist ? 'wishlist-active' : ''}`}
                          onClick={() => toggleWishlist(product)}
                          aria-label="Wishlist"
                        >
                          <Heart size={16} fill={inWishlist ? '#A05A3C' : 'none'} color={inWishlist ? '#A05A3C' : '#1E1C1A'} />
                        </button>

                        <div className="catalog-quick-bar">
                          <button 
                            className="catalog-quick-btn view-action"
                            onClick={() => onQuickViewProduct(product.id)}
                          >
                            <Eye size={14} /> Quick View
                          </button>
                          <button 
                            className="catalog-quick-btn add-action"
                            onClick={() => addToCart(product)}
                          >
                            <ShoppingBag size={14} /> Add to Bag
                          </button>
                        </div>
                      </div>

                      {/* Content Meta */}
                      <div className="catalog-card-meta">
                        <div className="catalog-top-row">
                          <span className="catalog-cat-tag">{product.category} • {product.room}</span>
                          <div className="catalog-rating">
                            <Star size={12} fill="#C29B38" color="#C29B38" />
                            <span>{product.rating}</span>
                          </div>
                        </div>

                        <h3 
                          className="catalog-item-title font-serif"
                          onClick={() => onQuickViewProduct(product.id)}
                          title={product.name}
                        >
                          {product.name}
                        </h3>

                        {/* Finishes */}
                        {product.finishes && (
                          <div className="catalog-finishes-row">
                            <div className="catalog-swatches-dots">
                              {product.finishes.map((f, i) => (
                                <span 
                                  key={i} 
                                  className="catalog-swatch-dot" 
                                  style={{ backgroundColor: f.color }}
                                  title={f.name}
                                />
                              ))}
                            </div>
                            <span className="catalog-swatches-count">{product.finishes.length} Finishes</span>
                          </div>
                        )}

                        {/* Price & EMI */}
                        <div className="catalog-price-footer">
                          <div className="catalog-price-stack">
                            <span className="catalog-price-main">{formatPrice(product.price)}</span>
                            {product.mrp && <span className="catalog-price-mrp">{formatPrice(product.mrp)}</span>}
                          </div>
                          {product.emi && <span className="catalog-emi-pill">0% EMI</span>}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="no-products-box">
                <h4 className="font-serif text-2xl mb-2">No pieces found matching your criteria</h4>
                <p className="text-muted">Try resetting your filters or adjusting your budget slider.</p>
                <button className="btn-secondary mt-4" onClick={resetAllFilters}>
                  Reset All Filters
                </button>
              </div>
            )}

          </main>

        </div>
      </div>

      <style>{`
        .page-hero-banner {
          background: linear-gradient(to right, rgba(22, 20, 18, 0.94), rgba(22, 20, 18, 0.72)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          padding: 5rem 0 4rem;
          color: #FFF;
        }

        .breadcrumb-trail {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #B5AFA8;
          margin-bottom: 0.75rem;
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

        .page-hero-desc {
          font-size: 1.05rem;
          color: #D5CEC6;
          max-width: 680px;
          margin-top: 0.75rem;
          line-height: 1.6;
        }

        /* Active Filters Pill Bar */
        .active-filters-pill-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding: 0.85rem 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
        }

        .active-filters-label {
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .active-filter-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-medium);
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-sm);
          font-size: 0.76rem;
          color: var(--text-primary);
        }

        .active-filter-badge button {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          padding: 0;
        }

        .active-filter-badge button:hover {
          color: var(--accent-clay);
        }

        .reset-all-filters-link {
          background: none;
          border: none;
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--accent-clay);
          cursor: pointer;
          margin-left: auto;
          text-decoration: underline;
        }

        .catalog-layout-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2.5rem;
        }

        @media (max-width: 960px) {
          .catalog-layout-grid {
            grid-template-columns: 1fr;
          }
        }

        .filter-sidebar {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          padding: 1.75rem;
          border-radius: var(--radius-sm);
          height: fit-content;
          box-shadow: var(--shadow-subtle);
        }

        .filter-sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 1.5rem;
        }

        .filter-reset-btn {
          background: none;
          border: none;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-clay);
          cursor: pointer;
        }

        .filter-group {
          margin-bottom: 1.75rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-light);
        }

        .filter-group:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .filter-group-title {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-bottom: 0.85rem;
        }

        .filter-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .filter-item-btn {
          background: none;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.45rem 0.6rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .filter-item-btn:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .active-filter-item {
          background: var(--bg-dark);
          color: #FFF !important;
          font-weight: 600;
        }

        .active-filter-item .filter-count {
          color: var(--accent-gold);
        }

        .filter-count {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .price-filter-val {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-bronze);
        }

        .price-range-slider {
          width: 100%;
          accent-color: var(--accent-gold);
          margin-top: 0.3rem;
        }

        .price-slider-labels {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 0.35rem;
        }

        .catalog-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-light);
        }

        .results-count {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .sort-box {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.82rem;
        }

        .sort-box select {
          padding: 0.45rem 0.85rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-card);
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--text-primary);
        }

        /* 3-Column Uniform Product Grid */
        .products-catalog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        @media (max-width: 1200px) {
          .products-catalog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .products-catalog-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Product Card */
        .catalog-product-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-medium), box-shadow var(--transition-medium), border-color var(--transition-medium);
        }

        .catalog-product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-card);
          border-color: var(--border-medium);
        }

        .catalog-img-box {
          position: relative;
          height: 270px;
          background: #F4EFE6;
          overflow: hidden;
        }

        .catalog-badges {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          z-index: 4;
        }

        .catalog-wishlist-btn {
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

        .catalog-wishlist-btn:hover {
          background: #FFF;
          transform: scale(1.1);
        }

        .catalog-quick-bar {
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

        .catalog-product-card:hover .catalog-quick-bar {
          transform: translateY(0);
        }

        .catalog-quick-btn {
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

        /* Card Meta */
        .catalog-card-meta {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .catalog-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.35rem;
        }

        .catalog-cat-tag {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .catalog-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .catalog-item-title {
          font-size: 1.18rem;
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

        .catalog-item-title:hover {
          color: var(--accent-gold);
        }

        .catalog-finishes-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.85rem;
        }

        .catalog-swatches-dots {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .catalog-swatch-dot {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          border: 1px solid var(--border-medium);
        }

        .catalog-swatches-count {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .catalog-price-footer {
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-light);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .catalog-price-stack {
          display: flex;
          align-items: baseline;
          gap: 0.45rem;
        }

        .catalog-price-main {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .catalog-price-mrp {
          font-size: 0.8rem;
          text-decoration: line-through;
          color: var(--text-muted);
        }

        .catalog-emi-pill {
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--accent-bronze);
          background: var(--bg-secondary);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
        }

        .no-products-box {
          text-align: center;
          padding: 5rem 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
        }
      `}</style>
    </div>
  );
}
