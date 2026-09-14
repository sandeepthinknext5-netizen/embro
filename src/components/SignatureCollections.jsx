import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { signatureCollections } from '../data/products';

export default function SignatureCollections({ onSelectCollection }) {
  return (
    <section className="section-padding signature-collections-section" id="collections">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-centered text-center motion-slide-up">
          <span className="section-label">Editorial Perspectives</span>
          <h2 className="editorial-heading-2">The Embroshyal Edit</h2>
          <p className="editorial-subheading mx-auto max-w-600">
            Four distinct design philosophies, meticulously curated for architectural residences.
          </p>
        </div>

        {/* Collections 2x2 Editorial Showcase */}
        <div className="collections-editorial-grid">
          {signatureCollections.map((collection, idx) => (
            <div 
              key={collection.id} 
              className={`collection-card motion-card-enter stagger-${idx + 1} ${idx % 2 === 1 ? 'collection-card-offset' : ''}`}
              onClick={() => onSelectCollection(collection.id)}
            >
              <div className="collection-img-box image-zoom-container">
                <img src={collection.image} alt={collection.title} loading="lazy" />
                <div className="collection-img-gradient"></div>
                <span className="collection-badge">{collection.piecesCount}</span>
              </div>

              <div className="collection-info-card">
                <span className="collection-number">0{idx + 1} //</span>
                <h3 className="collection-title font-serif">{collection.title}</h3>
                <h4 className="collection-subtitle">{collection.subtitle}</h4>
                <p className="collection-desc">{collection.description}</p>
                <span className="btn-link mt-3">
                  Explore Collection <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .signature-collections-section {
          background-color: var(--bg-primary);
        }

        .collections-editorial-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3.5rem 2.5rem;
          margin-top: 3.5rem;
        }

        @media (max-width: 860px) {
          .collections-editorial-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .collection-card-offset {
            margin-top: 0;
          }
        }

        .collection-card-offset {
          margin-top: 2rem;
        }

        .collection-card {
          cursor: pointer;
          transition: transform var(--transition-medium);
        }

        .collection-card:hover {
          transform: translateY(-6px);
        }

        .collection-img-box {
          height: 380px;
          position: relative;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: #EBE5DC;
        }

        .collection-img-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(18, 16, 14, 0.45) 0%, transparent 50%);
        }

        .collection-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-primary);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
        }

        .collection-info-card {
          padding-top: 1.5rem;
        }

        .collection-number {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 0.35rem;
        }

        .collection-title {
          font-size: 1.8rem;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 0.25rem;
        }

        .collection-subtitle {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--accent-bronze);
          margin-bottom: 0.65rem;
        }

        .collection-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 520px;
        }
      `}</style>
    </section>
  );
}
