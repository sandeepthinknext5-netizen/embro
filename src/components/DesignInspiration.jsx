import React, { useState } from 'react';
import { ArrowRight, Clock, BookOpen, X, Sparkles } from 'lucide-react';
import { editorialArticles } from '../data/stories';

export default function DesignInspiration() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const guides = [
    { title: 'Interior Design Ideas', count: '45 Articles' },
    { title: 'Living Room Inspiration', count: '38 Articles' },
    { title: 'Bedroom Sanctuary Ideas', count: '29 Articles' },
    { title: 'Modular Kitchen Guides', count: '24 Articles' },
    { title: 'Wardrobe Organization', count: '19 Articles' },
    { title: 'Space-Saving Hacks', count: '31 Articles' },
    { title: 'Furniture Care & Maintenance', count: '16 Articles' },
    { title: 'Material Buying Guides', count: '22 Articles' }
  ];

  return (
    <section className="section-padding inspiration-section" id="inspiration">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-split">
          <div>
            <span className="section-label">Editorial Journal</span>
            <h2 className="editorial-heading-2">Ideas for Beautiful Living</h2>
            <p className="editorial-subheading mt-1">
              Curated essays on architecture, textural aesthetics, and the art of intentional living spaces.
            </p>
          </div>

          <button className="btn-secondary" onClick={() => setSelectedArticle(editorialArticles[0])}>
            Explore All Guides <ArrowRight size={15} />
          </button>
        </div>

        {/* Editorial Articles Grid */}
        <div className="articles-grid">
          {editorialArticles.map((art) => (
            <div 
              key={art.id} 
              className="article-card group"
              onClick={() => setSelectedArticle(art)}
            >
              <div className="article-img-box image-zoom-container">
                <img src={art.image} alt={art.title} loading="lazy" />
                <span className="article-cat-pill">{art.category}</span>
              </div>

              <div className="article-meta-body">
                <div className="article-time-strip">
                  <span>{art.date}</span>
                  <span>•</span>
                  <span><Clock size={12} /> {art.readTime}</span>
                </div>

                <h3 className="article-title font-serif">{art.title}</h3>
                <p className="article-excerpt">{art.excerpt}</p>

                <span className="btn-link mt-2">
                  Read Article <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Topic Guides Row */}
        <div className="topic-guides-cloud">
          <span className="topic-cloud-title">Popular Inspiration Topics:</span>
          <div className="topics-pills-list">
            {guides.map((g, idx) => (
              <button 
                key={idx} 
                className="topic-pill-btn"
                onClick={() => setSelectedArticle(editorialArticles[idx % editorialArticles.length])}
              >
                <span>{g.title}</span>
                <small>({g.count})</small>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="modal-backdrop" onClick={() => setSelectedArticle(null)}>
          <div className="article-modal animate-fade" onClick={(e) => e.stopPropagation()}>
            <button className="article-modal-close" onClick={() => setSelectedArticle(null)}>
              <X size={22} />
            </button>

            <span className="article-cat-pill mb-2">{selectedArticle.category}</span>
            <h2 className="article-modal-title font-serif">{selectedArticle.title}</h2>
            <div className="article-time-strip mb-4">
              <span>Published {selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="article-modal-img">
              <img src={selectedArticle.image} alt={selectedArticle.title} />
            </div>

            <div className="article-modal-text">
              <p className="lead-paragraph">{selectedArticle.excerpt}</p>
              <p>
                In an era dominated by rapid synthetic production, the return to organic tactility represents more than just a passing decorative trend — it is a conscious psychological shift toward spaces that restore and ground us.
              </p>
              <h3 className="font-serif mt-4 mb-2">1. The Role of Continuous Curvature</h3>
              <p>
                Softened silhouettes and organic radii promote uninterrupted sightlines and fluid spatial movement. When paired with textured weaves like Italian bouclé or hand-loomed linens, furniture becomes an invitation to pause and engage all senses.
              </p>
              <h3 className="font-serif mt-4 mb-2">2. Respecting Raw Material Authenticity</h3>
              <p>
                Every grain pattern in seasoned European oak and every burgundy fissure in quarried Calacatta Viola tells an geological narrative centuries in the making. Our philosophy is to highlight these organic variations rather than conceal them under heavy artificial lacquers.
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .inspiration-section {
          background-color: var(--bg-primary);
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
          margin-top: 3rem;
        }

        @media (max-width: 1100px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }
        }

        .article-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-medium);
          display: flex;
          flex-direction: column;
        }

        .article-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-card);
          border-color: var(--accent-gold);
        }

        .article-img-box {
          height: 200px;
          position: relative;
        }

        .article-cat-pill {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(22, 20, 18, 0.85);
          backdrop-filter: blur(6px);
          color: var(--accent-gold);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .article-meta-body {
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .article-time-strip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .article-title {
          font-size: 1.22rem;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.65rem;
        }

        .article-excerpt {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .topic-guides-cloud {
          margin-top: 3.5rem;
          padding: 2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
        }

        .topic-cloud-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          display: block;
        }

        .topics-pills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .topic-pill-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          padding: 0.45rem 0.9rem;
          border-radius: 50px;
          font-size: 0.78rem;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          transition: all var(--transition-fast);
        }

        .topic-pill-btn:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }

        .topic-pill-btn small {
          color: var(--text-muted);
        }

        /* Article Modal */
        .article-modal {
          background: var(--bg-card);
          width: 90%;
          max-width: 740px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 3rem;
          border-radius: var(--radius-sm);
          position: relative;
        }

        @media (max-width: 600px) {
          .article-modal {
            padding: 2rem 1.5rem;
          }
        }

        .article-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .article-modal-title {
          font-size: 2rem;
          line-height: 1.2;
          margin-top: 0.5rem;
        }

        .article-modal-img {
          height: 320px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          margin: 1.5rem 0;
        }

        .article-modal-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .article-modal-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .lead-paragraph {
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 500;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
}
