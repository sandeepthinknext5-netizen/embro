import React, { useState } from 'react';
import { MapPin, Phone, Clock, Search, Navigation, Calendar, Check, ArrowRight } from 'lucide-react';
import { experienceCentres } from '../data/stories';

export default function StoreLocator({ onOpenConsultation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedStore, setSelectedStore] = useState(null);

  const cities = ['All', 'Mumbai', 'New Delhi', 'Bengaluru', 'Hyderabad'];

  const filteredStores = experienceCentres.filter((store) => {
    const matchesCity = selectedCity === 'All' || store.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesSearch = 
      store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.pincode.includes(searchQuery);
    return matchesCity && matchesSearch;
  });

  return (
    <section className="section-padding store-locator-section" id="stores">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-centered text-center">
          <span className="section-label">Immersive Touchpoints</span>
          <h2 className="editorial-heading-2">Experience Embroshyal in Person</h2>
          <p className="editorial-subheading mx-auto max-w-600">
            See the materials. Feel the finishes. Experience the comfort. Visit an Embroshyal flagship store near you.
          </p>
        </div>

        {/* Search & City Filter Bar */}
        <div className="store-filter-bar">
          <div className="store-search-input-box">
            <Search size={18} className="store-search-icon" />
            <input 
              type="text"
              placeholder="Search by city, pincode or landmark (e.g. 400018, Worli)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="city-buttons-row">
            {cities.map((c) => (
              <button 
                key={c}
                className={`city-pill ${selectedCity === c ? 'city-pill-active' : ''}`}
                onClick={() => setSelectedCity(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Store Cards Grid */}
        <div className="stores-grid">
          {filteredStores.length > 0 ? (
            filteredStores.map((store) => (
              <div key={store.id} className="store-card">
                <div className="store-img-box image-zoom-container">
                  <img src={store.image} alt={store.name} loading="lazy" />
                  <span className="store-city-badge">{store.city}</span>
                </div>

                <div className="store-card-body">
                  <h3 className="store-name font-serif">{store.name}</h3>

                  <div className="store-info-row">
                    <MapPin size={16} className="text-gold flex-shrink-0 mt-1" />
                    <p className="store-address">{store.address}</p>
                  </div>

                  <div className="store-info-row">
                    <Clock size={16} className="text-gold flex-shrink-0" />
                    <span>{store.hours}</span>
                  </div>

                  <div className="store-info-row">
                    <Phone size={16} className="text-gold flex-shrink-0" />
                    <span>{store.phone}</span>
                  </div>

                  <div className="store-features-tags">
                    {store.features.map((feat, i) => (
                      <span key={i} className="store-feat-pill">✓ {feat}</span>
                    ))}
                  </div>

                  <div className="store-card-actions">
                    <button 
                      className="btn-primary flex-1"
                      onClick={onOpenConsultation}
                    >
                      <Calendar size={14} /> Book Store Visit
                    </button>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(store.name + ' ' + store.address)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Navigation size={14} /> Directions
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-stores-found">
              <p>No flagship experience centre found matching "{searchQuery}".</p>
              <button className="btn-secondary mt-2" onClick={() => { setSearchQuery(''); setSelectedCity('All'); }}>
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>

      <style>{`
        .store-locator-section {
          background-color: var(--bg-primary);
        }

        .store-filter-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          max-width: 720px;
          margin: 0 auto 3.5rem;
        }

        .store-search-input-box {
          position: relative;
          width: 100%;
        }

        .store-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .store-search-input-box input {
          width: 100%;
          padding: 0.95rem 1rem 0.95rem 3rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-card);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          color: var(--text-primary);
          box-shadow: var(--shadow-subtle);
        }

        .store-search-input-box input:focus {
          outline: none;
          border-color: var(--accent-gold);
        }

        .city-buttons-row {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .city-pill {
          padding: 0.45rem 1.1rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-card);
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .city-pill:hover {
          border-color: var(--text-primary);
        }

        .city-pill-active {
          background: var(--bg-dark);
          color: #FFF;
          border-color: var(--bg-dark);
        }

        .stores-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        @media (max-width: 900px) {
          .stores-grid {
            grid-template-columns: 1fr;
          }
        }

        .store-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-subtle);
          display: flex;
          flex-direction: column;
        }

        .store-img-box {
          height: 230px;
          position: relative;
          background: #E8E2D6;
        }

        .store-city-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: var(--bg-dark);
          color: var(--text-light);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-sm);
        }

        .store-card-body {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .store-name {
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .store-info-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }

        .store-address {
          line-height: 1.5;
        }

        .store-features-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 1.25rem 0 1.75rem;
          padding: 1rem 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .store-feat-pill {
          font-size: 0.72rem;
          background: var(--bg-secondary);
          color: var(--text-primary);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .store-card-actions {
          display: flex;
          gap: 0.85rem;
          margin-top: auto;
        }

        .no-stores-found {
          grid-column: 1 / -1;
          text-align: center;
          padding: 3rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
