import React, { useState } from 'react';
import { Search, X, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { products } from '../data/products';

export default function SearchDrawer({ isOpen, onClose, onSelectProduct, onSelectCategory }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trendingSearches = [
    'Solis Curved Sofa',
    'Aurelia Cane Bed',
    'Modular Kitchens',
    'Travertine Coffee Table',
    'Glass Wardrobe',
    'Italian Bouclé',
    'Dining Sets',
    'Home Office Desk'
  ];

  const matchedProducts = query.trim() === '' 
    ? [] 
    : products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.room.toLowerCase().includes(query.toLowerCase()) ||
        p.materials.toLowerCase().includes(query.toLowerCase())
      );

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="search-overlay-backdrop animate-fade">
      <div className="search-overlay-container">
        
        {/* Top Input Bar */}
        <div className="search-top-bar container">
          <Search size={24} className="search-lead-icon" />
          <input 
            type="text"
            autoFocus
            placeholder="Search furniture, rooms, collections or inspiration..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-close-btn" onClick={onClose} aria-label="Close search">
            <X size={26} />
          </button>
        </div>

        {/* Results / Suggestions Container */}
        <div className="search-body container">
          {query.trim() === '' ? (
            <div className="search-initial-state">
              
              <div className="trending-searches-block">
                <span className="search-section-title">
                  <TrendingUp size={15} className="text-gold" /> Trending Searches
                </span>
                <div className="trending-pills-row">
                  {trendingSearches.map((term, idx) => (
                    <button 
                      key={idx}
                      className="trending-pill"
                      onClick={() => setQuery(term)}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div className="search-featured-catalog">
                <span className="search-section-title">Popular Curations</span>
                <div className="search-catergory-grid">
                  {products.slice(0, 3).map((prod) => (
                    <div 
                      key={prod.id} 
                      className="search-curated-card"
                      onClick={() => {
                        onSelectProduct(prod.id);
                        onClose();
                      }}
                    >
                      <img src={prod.image} alt={prod.name} />
                      <div>
                        <h4 className="font-serif">{prod.name}</h4>
                        <span className="curated-price">{formatPrice(prod.price)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="search-live-results">
              <div className="results-count-bar">
                <span>Found <strong>{matchedProducts.length}</strong> matching luxury pieces for "{query}"</span>
              </div>

              {matchedProducts.length > 0 ? (
                <div className="search-results-grid">
                  {matchedProducts.map((prod) => (
                    <div 
                      key={prod.id} 
                      className="search-result-item"
                      onClick={() => {
                        onSelectProduct(prod.id);
                        onClose();
                      }}
                    >
                      <div className="search-result-img">
                        <img src={prod.image} alt={prod.name} />
                      </div>
                      <div className="search-result-meta">
                        <span className="result-cat">{prod.category} • {prod.room}</span>
                        <h4 className="result-name font-serif">{prod.name}</h4>
                        <span className="result-price">{formatPrice(prod.price)}</span>
                        <small className="result-materials">{prod.materials.slice(0, 50)}...</small>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="search-no-results">
                  <p>No exact pieces found for "{query}".</p>
                  <p className="no-res-sub">Try searching for "Sofa", "Marble", "Oak", "Table", or "Bed".</p>
                </div>
              )}
            </div>
          )}
        </div>

      </div>

      <style>{`
        .search-overlay-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(18, 16, 14, 0.75);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          flex-direction: column;
        }

        .search-overlay-container {
          background: var(--bg-card);
          width: 100%;
          max-height: 85vh;
          box-shadow: var(--shadow-dark);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .search-top-bar {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.75rem 2rem;
          border-bottom: 1px solid var(--border-light);
        }

        .search-lead-icon {
          color: var(--accent-gold);
        }

        .search-top-bar input {
          flex: 1;
          font-family: var(--font-serif);
          font-size: 1.6rem;
          border: none;
          background: none;
          color: var(--text-primary);
        }

        .search-top-bar input:focus {
          outline: none;
        }

        .search-close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.5rem;
          transition: color var(--transition-fast);
        }

        .search-close-btn:hover {
          color: var(--text-primary);
        }

        .search-body {
          padding: 2.5rem 2rem;
        }

        .search-section-title {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .trending-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2.5rem;
        }

        .trending-pill {
          background: var(--bg-primary);
          border: 1px solid var(--border-medium);
          padding: 0.55rem 1.1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .trending-pill:hover {
          border-color: var(--accent-gold);
          background: #FFF;
          color: var(--accent-gold);
        }

        .search-catergory-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .search-catergory-grid {
            grid-template-columns: 1fr;
          }
        }

        .search-curated-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: transform var(--transition-fast);
        }

        .search-curated-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent-gold);
        }

        .search-curated-card img {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: var(--radius-sm);
        }

        .search-curated-card h4 {
          font-size: 1.05rem;
          margin-bottom: 0.2rem;
        }

        .curated-price {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-bronze);
        }

        .results-count-bar {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .search-results-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 650px) {
          .search-results-grid {
            grid-template-columns: 1fr;
          }
        }

        .search-result-item {
          display: flex;
          gap: 1.25rem;
          padding: 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .search-result-item:hover {
          border-color: var(--accent-gold);
          box-shadow: var(--shadow-subtle);
        }

        .search-result-img {
          width: 100px;
          height: 100px;
          flex-shrink: 0;
          border-radius: var(--radius-sm);
          overflow: hidden;
        }

        .search-result-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .search-result-meta {
          display: flex;
          flex-direction: column;
        }

        .result-cat {
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .result-name {
          font-size: 1.15rem;
          margin: 0.15rem 0 0.35rem;
        }

        .result-price {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .result-materials {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .search-no-results {
          padding: 3rem 0;
          text-align: center;
          color: var(--text-secondary);
        }

        .no-res-sub {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.4rem;
        }
      `}</style>
    </div>
  );
}
