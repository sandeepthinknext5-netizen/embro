import React, { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { rooms } from '../data/rooms';

export default function ShopByRoom({ onSelectRoom, onQuickViewProduct }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <section className="section-padding shop-by-room-section" id="rooms">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-centered text-center motion-slide-up">
          <span className="section-label">Find Your Space</span>
          <h2 className="editorial-heading-2">Discover pieces designed to make every room feel more like you.</h2>
          <p className="editorial-subheading mx-auto max-w-600">
            Explore curated room settings where architecture, natural materials and fluid proportions harmonize.
          </p>
        </div>

        {/* Room Tiles Grid */}
        <div className="rooms-grid">
          {rooms.map((room, idx) => (
            <div 
              key={room.id} 
              className={`room-card group motion-card-enter stagger-${(idx % 4) + 1}`}
            >
              <div className="room-image-container image-zoom-container">
                <img src={room.image} alt={room.name} loading="lazy" />
                <div className="room-overlay"></div>

                {/* Interactive Hotspots */}
                {room.hotspots && room.hotspots.map((spot, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="room-hotspot"
                    style={{ top: spot.top, left: spot.left }}
                    onMouseEnter={() => setActiveHotspot(`${room.id}-${sIdx}`)}
                    onMouseLeave={() => setActiveHotspot(null)}
                    onClick={() => spot.productId && onQuickViewProduct(spot.productId)}
                  >
                    <button className="hotspot-pulse-btn" aria-label={`View ${spot.title}`}>
                      <Plus size={12} />
                    </button>

                    {activeHotspot === `${room.id}-${sIdx}` && (
                      <div className="hotspot-popover animate-fade">
                        <span className="hotspot-title">{spot.title}</span>
                        <span className="hotspot-price">{spot.price}</span>
                        {spot.productId && <span className="hotspot-action">Quick View →</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Room Card Meta */}
              <div className="room-meta">
                <div className="room-title-row">
                  <h3 className="room-name font-serif">{room.name}</h3>
                  <span className="room-count-badge">{room.itemCount}</span>
                </div>
                <p className="room-desc">{room.desc}</p>
                <button 
                  className="room-explore-btn btn-link"
                  onClick={() => onSelectRoom(room.id)}
                >
                  Explore Room <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .shop-by-room-section {
          background-color: var(--bg-primary);
        }

        .section-header-centered {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .max-w-600 {
          max-width: 600px;
          margin: 0.75rem auto 0;
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }

        @media (max-width: 1200px) {
          .rooms-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .rooms-grid {
            grid-template-columns: 1fr;
          }
        }

        .room-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color var(--transition-medium), box-shadow var(--transition-medium), transform var(--transition-medium);
        }

        .room-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-floating);
          border-color: var(--border-medium);
        }

        .room-image-container {
          position: relative;
          height: 260px;
          width: 100%;
        }

        .room-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(18, 16, 14, 0.4) 0%, transparent 60%);
        }

        .room-hotspot {
          position: absolute;
          z-index: 10;
          transform: translate(-50%, -50%);
        }

        .hotspot-pulse-btn {
          width: 26px;
          height: 26px;
          background: rgba(255, 255, 255, 0.95);
          color: var(--bg-dark);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: transform var(--transition-fast), background var(--transition-fast);
        }

        .hotspot-pulse-btn:hover {
          background: var(--accent-gold);
          transform: scale(1.2);
        }

        .hotspot-popover {
          position: absolute;
          bottom: 125%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(22, 20, 18, 0.95);
          color: #FFF;
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-sm);
          white-space: nowrap;
          box-shadow: var(--shadow-dark);
          z-index: 20;
          font-size: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .hotspot-title {
          font-weight: 600;
          color: #FFF;
        }

        .hotspot-price {
          color: var(--accent-gold);
          font-weight: 500;
        }

        .hotspot-action {
          color: #DDD;
          font-size: 0.7rem;
          text-decoration: underline;
        }

        .room-meta {
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .room-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .room-name {
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .room-count-badge {
          font-size: 0.72rem;
          color: var(--text-muted);
          background: var(--bg-secondary);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .room-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .room-explore-btn {
          align-self: flex-start;
          color: var(--accent-bronze);
        }
      `}</style>
    </section>
  );
}
