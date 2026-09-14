import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categoriesList } from '../data/products';

export default function FeaturedCategories({ onSelectCategory }) {
  return (
    <section className="section-padding featured-categories-section" id="furniture">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-split motion-slide-up">
          <div>
            <span className="section-label">Made for Modern Living</span>
            <h2 className="editorial-heading-2">Featured Categories</h2>
          </div>
          <p className="editorial-subheading max-w-400">
            From sculptural conversational seating to architectural bedroom sanctuaries, each piece is engineered for longevity.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {categoriesList.map((cat, idx) => (
            <div 
              key={idx} 
              className={`category-card group motion-card-enter stagger-${(idx % 4) + 1}`}
              onClick={() => onSelectCategory(cat.name)}
            >
              <div className="category-image-wrap image-zoom-container">
                <img src={cat.image} alt={cat.name} loading="lazy" />
                <div className="category-gradient"></div>
                <span className="category-item-count">{cat.count}</span>
              </div>

              <div className="category-info">
                <h3 className="category-title font-serif">{cat.name}</h3>
                <p className="category-desc">{cat.desc}</p>
                <span className="category-link">
                  Shop Now <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .featured-categories-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .section-header-split {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3.5rem;
          gap: 2rem;
        }

        .max-w-400 {
          max-width: 420px;
        }

        @media (max-width: 768px) {
          .section-header-split {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1100px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }
        }

        .category-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          cursor: pointer;
          transition: border-color var(--transition-medium), box-shadow var(--transition-medium), transform var(--transition-medium);
          display: flex;
          flex-direction: column;
        }

        .category-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-gold);
          box-shadow: var(--shadow-card);
        }

        .category-image-wrap {
          height: 200px;
          position: relative;
        }

        .category-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(18, 16, 14, 0.45) 0%, transparent 60%);
        }

        .category-item-count {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-primary);
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .category-info {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .category-title {
          font-size: 1.3rem;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .category-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.45;
          margin-bottom: 1rem;
          flex: 1;
        }

        .category-link {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-bronze);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: gap var(--transition-fast), color var(--transition-fast);
        }

        .category-card:hover .category-link {
          gap: 0.65rem;
          color: var(--accent-gold);
        }
      `}</style>
    </section>
  );
}
