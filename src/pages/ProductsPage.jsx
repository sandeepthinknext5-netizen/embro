import React, { useState } from 'react';
import { 
  Search, SlidersHorizontal, ArrowRight, CheckCircle2, 
  Download, Eye, Sparkles, Filter, ShieldCheck, Heart, ShoppingBag, Check 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductsPage({ onNavigate, onOpenConsultation, onQuickViewProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [addedItem, setAddedItem] = useState(null);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const productCategories = [
    { id: 'all', label: 'All Products' },
    { id: 'desking', label: 'Workstations & Desking' },
    { id: 'seating', label: 'Ergonomic Task Chairs' },
    { id: 'conference', label: 'Conference & Meeting' },
    { id: 'acoustic', label: 'Acoustic Pods & Booths' },
    { id: 'storage', label: 'Lockers & Metal Storage' },
    { id: 'lounge', label: 'Lounge & Soft Seating' }
  ];

  const commercialCatalog = [
    {
      id: 101,
      name: 'Veloce Pro Ergonomic Mesh Chair',
      category: 'seating',
      price: 18500,
      formattedPrice: '₹18,500',
      specs: 'Dynamic lumbar support, 4D adjustable arms, Donati Italian synchro mechanism.',
      bifma: 'BIFMA X5.1 Certified',
      image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 102,
      name: 'Matrix Motorized Height-Adjustable Desk',
      category: 'desking',
      price: 34000,
      formattedPrice: '₹34,000',
      specs: 'Dual Bosch motors, digital memory preset, anti-collision sensor, solid oak veneer top.',
      bifma: '10-Yr Motor Warranty',
      image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 103,
      name: 'Silentium Solo Privacy Phone Booth',
      category: 'acoustic',
      price: 165000,
      formattedPrice: '₹1,65,000',
      specs: 'Sound insulation class 32dB, motion-activated ventilation & warm LED lighting.',
      bifma: 'Class-A Acoustic Damping',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 104,
      name: 'Elysium 12-Seater Boardroom Table',
      category: 'conference',
      price: 125000,
      formattedPrice: '₹1,25,000',
      specs: 'Italian smoked ash with brushed champagne brass inlay and motorized pop-up AV conduits.',
      bifma: 'Executive Series',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 105,
      name: 'AeroCluster 4-Person Linear Workstation',
      category: 'desking',
      price: 68000,
      formattedPrice: '₹68,000',
      specs: 'Continuous wireway power spine, PET felt pinnable acoustic divider, metal modesty.',
      bifma: 'Heavy Gauge CRCA Steel',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 106,
      name: 'VaultSmart RFID Electronic Locker Bank',
      category: 'storage',
      price: 48000,
      formattedPrice: '₹48,000',
      specs: '12-door modular steel locker unit with RFID badge access & master key override.',
      bifma: 'CRCA Powder Coated',
      image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 107,
      name: 'Arcadia Curved Modular Reception Lounge',
      category: 'lounge',
      price: 88000,
      formattedPrice: '₹88,000',
      specs: 'Commercial rub-count 100k Martindale fabric with high-resiliency mold foam.',
      bifma: 'Commercial High-Traffic',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 108,
      name: 'Kyoto High-Back Executive Leather Armchair',
      category: 'seating',
      price: 42000,
      formattedPrice: '₹42,000',
      specs: 'Full-grain top leather, aluminum 5-prong polished base, tilt lock mechanism.',
      bifma: 'Presidential Grade',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 109,
      name: 'Nexus Reconfigurable Training Flip-Top Table',
      category: 'conference',
      price: 22000,
      formattedPrice: '₹22,000',
      specs: 'One-touch flip release, nesting storage, locking polyurethane wheels.',
      bifma: 'Space-Saving Nesting',
      image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      images: [product.image],
      category: product.category
    });
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  const handleToggleWishlist = (product) => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      images: [product.image],
      category: product.category
    });
  };

  const filteredProducts = commercialCatalog
    .filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.specs.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="products-page animate-fade">
      
      {/* 1. Hero */}
      <section className="commercial-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Commercial & Institutional</span>
            <span>/</span>
            <span>Products</span>
          </div>

          <div className="hero-content-wrapper">
            <span className="section-label text-gold">Master Product Index</span>
            <h1 className="editorial-heading-1 text-white">
              Commercial & Architectural Furniture Catalog
            </h1>
            <p className="commercial-hero-sub">
              Engineered with precision for commercial, institutional, healthcare, and educational spaces. Certified for durability, ergonomic health, and sustainable building compliance.
            </p>

            <div className="hero-action-group">
              <button className="btn-gold" onClick={onOpenConsultation}>
                Request Full Master Spec Book (PDF) <Download size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="catalog-toolbar container">
        <div className="toolbar-top-row">
          <div className="toolbar-search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search by product name, specification, material, BIFMA standard..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="sort-dropdown-box">
            <SlidersHorizontal size={16} />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Product Name (A-Z)</option>
            </select>
          </div>
        </div>

        <div className="category-filter-pills" style={{ margin: '1.5rem 0 2.5rem' }}>
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Product Grid with Add to Cart & Wishlist */}
      <section className="container mb-5">
        <div className="b2b-product-grid">
          {filteredProducts.map((prod) => {
            const inWishlist = isInWishlist(prod.id);
            const isJustAdded = addedItem === prod.id;

            return (
              <div key={prod.id} className="b2b-product-card">
                <div className="b2b-card-image image-zoom-container">
                  <img src={prod.image} alt={prod.name} />
                  <span className="b2b-card-badge">{prod.bifma}</span>

                  <div className="card-quick-actions">
                    <button 
                      className={`card-action-circle ${inWishlist ? 'active-wish' : ''}`}
                      onClick={() => handleToggleWishlist(prod)}
                      title={inWishlist ? 'Remove from Saved' : 'Save to Wishlist'}
                    >
                      <Heart size={16} fill={inWishlist ? '#C29B38' : 'none'} color={inWishlist ? '#C29B38' : '#FFF'} />
                    </button>
                    {onQuickViewProduct && (
                      <button 
                        className="card-action-circle"
                        onClick={() => onQuickViewProduct(prod.id)}
                        title="Quick View"
                      >
                        <Eye size={16} color="#FFF" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="b2b-card-body">
                  <h3 className="b2b-card-title">{prod.name}</h3>
                  <p className="b2b-card-desc">{prod.specs}</p>

                  <div className="prod-price-strip">
                    <span className="prod-price-text">{prod.formattedPrice}</span>
                    <span className="prod-bulk-tag">Volume B2B Tiering</span>
                  </div>

                  <div className="b2b-card-actions-row">
                    <button 
                      className={`btn-add-cart-b2b ${isJustAdded ? 'btn-added' : ''}`}
                      onClick={() => handleAddToCart(prod)}
                    >
                      {isJustAdded ? (
                        <>
                          <Check size={16} /> Added to Bag
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={16} /> Add to Bag
                        </>
                      )}
                    </button>

                    <button 
                      className="btn-quote-b2b"
                      onClick={onOpenConsultation}
                      title="Request B2B Quotation / Spec Sheet"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-results-box text-center py-5">
            <h3>No products found matching your search.</h3>
            <button className="btn-primary mt-3" onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}>
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. CTA */}
      <section className="commercial-cta-banner container">
        <div className="cta-inner-box">
          <div className="cta-text">
            <h3 className="editorial-heading-2 text-white">Need Custom Finishes or Dimensions?</h3>
            <p>Our OEM manufacturing facility offers bespoke laminate finishes, solid woods, powder-coat colors, and customized dimensions for large project orders.</p>
          </div>
          <button className="btn-gold" onClick={onOpenConsultation}>
            Speak with B2B Product Specialist <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .commercial-hero {
          background: linear-gradient(135deg, rgba(20, 18, 16, 0.95) 0%, rgba(32, 28, 24, 0.84) 100%), url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          padding: 5.5rem 0 4.5rem;
          color: #FFF;
        }

        .hero-content-wrapper {
          max-width: 820px;
          margin-top: 1rem;
        }

        .commercial-hero-sub {
          font-size: 1.15rem;
          color: #D6CEC5;
          margin: 1.25rem 0 2rem;
          line-height: 1.7;
        }

        .hero-action-group {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .catalog-toolbar {
          margin-top: 3rem;
        }

        .toolbar-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .toolbar-search-box {
          position: relative;
          flex: 1;
          min-width: 280px;
        }

        .toolbar-search-box input {
          width: 100%;
          padding: 0.9rem 1.2rem 0.9rem 3rem;
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: 30px;
          font-size: 0.92rem;
          color: var(--text-primary);
          outline: none;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: border-color 0.2s ease;
        }

        .toolbar-search-box input:focus {
          border-color: var(--accent-gold);
        }

        .search-icon {
          position: absolute;
          top: 50%;
          left: 1.15rem;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .sort-dropdown-box {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          padding: 0.6rem 1.1rem;
          border-radius: 30px;
          color: var(--text-secondary);
        }

        .sort-dropdown-box select {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
        }

        .category-filter-pills {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .filter-pill-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          padding: 0.65rem 1.35rem;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filter-pill-btn:hover {
          border-color: var(--accent-gold);
          color: var(--text-primary);
        }

        .filter-pill-btn.active {
          background: #181512;
          color: var(--accent-gold);
          border-color: var(--accent-gold);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .b2b-product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 1050px) {
          .b2b-product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .b2b-product-grid {
            grid-template-columns: 1fr;
          }
        }

        .b2b-product-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .b2b-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
          border-color: var(--border-dark);
        }

        .b2b-card-image {
          height: 240px;
          position: relative;
        }

        .b2b-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .b2b-card-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(18, 16, 14, 0.88);
          color: var(--accent-gold);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid rgba(194, 155, 56, 0.4);
        }

        .card-quick-actions {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          opacity: 0;
          transform: translateX(6px);
          transition: all 0.25s ease;
        }

        .b2b-product-card:hover .card-quick-actions {
          opacity: 1;
          transform: translateX(0);
        }

        .card-action-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(18, 16, 14, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .card-action-circle:hover {
          background: #181512;
          border-color: var(--accent-gold);
          transform: scale(1.08);
        }

        .card-action-circle.active-wish {
          background: #181512;
          border-color: var(--accent-gold);
        }

        .b2b-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .b2b-card-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .b2b-card-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }

        .prod-price-strip {
          background: var(--bg-secondary);
          padding: 0.75rem 1rem;
          border-radius: 6px;
          margin-bottom: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid var(--border-light);
        }

        .prod-price-text {
          font-weight: 700;
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .prod-bulk-tag {
          font-size: 0.72rem;
          color: var(--accent-gold);
          font-weight: 600;
        }

        .b2b-card-actions-row {
          display: flex;
          gap: 0.6rem;
          margin-top: auto;
        }

        .btn-add-cart-b2b {
          flex: 1.4;
          background: #181512;
          color: #FFF;
          border: 1px solid #181512;
          padding: 0.75rem 0.85rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .btn-add-cart-b2b:hover {
          background: var(--accent-gold);
          color: #12100E;
          border-color: var(--accent-gold);
        }

        .btn-add-cart-b2b.btn-added {
          background: #2E7D32;
          border-color: #2E7D32;
          color: #FFF;
        }

        .btn-quote-b2b {
          flex: 1;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-medium);
          padding: 0.75rem 0.85rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-quote-b2b:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
        }

        .commercial-cta-banner {
          margin: 4.5rem auto 5rem;
        }

        .cta-inner-box {
          background: linear-gradient(135deg, #1A1714 0%, #29241F 100%);
          border: 1px solid rgba(194, 155, 56, 0.35);
          padding: 3.5rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 850px) {
          .cta-inner-box {
            flex-direction: column;
            text-align: center;
            padding: 2.5rem 1.5rem;
          }
        }

        .cta-text p {
          color: #D6CEC5;
          margin-top: 0.5rem;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
}
