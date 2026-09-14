import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle, Shield, Eye } from 'lucide-react';

export default function Wardrobes({ onOpenConsultation }) {
  const wardrobeTypes = [
    {
      id: 'sliding',
      title: 'Sliding Wardrobes',
      tag: 'Whisper Glide Italian Tracks',
      desc: 'Floor-to-ceiling tinted bronze glass and matte lacquered panels that slide with zero clearance requirements.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
      features: ['Tinted bronze safety glass', 'Concealed bottom roller mechanism', 'Integrated perimeter warm LED strips']
    },
    {
      id: 'hinged',
      title: 'Hinged Wardrobes',
      tag: '110-Degree Soft-Close German Hinges',
      desc: 'Full-access opening doors with fluted wood textures, integrated vertical brass handle profiles, and vanity niches.',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
      features: ['Full 100% internal access', 'Fluted wood & super-matte finishes', 'Concealed magnetic lock options']
    },
    {
      id: 'walkin',
      title: 'Walk-in Wardrobes',
      tag: 'Boutique Dressing Sanctuaries',
      desc: 'Open-concept luxury closets with island watch/jewelry display vitrines, sensor lighting, and tailored shoe galleries.',
      image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
      features: ['Glass-topped central island drawers', 'Velvet-lined watch & jewelry organizers', 'Full-height illuminated shoe display']
    },
    {
      id: 'custom',
      title: 'Custom Modular Suites',
      tag: 'Millimeter-Accurate Space Planning',
      desc: 'Bespoke angled loft solutions, under-stair storage integration, and dual-sided walk-through room divider closets.',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
      features: ['Turnkey loft & alcove engineering', 'Pull-down ergonomic upper hanging lifts', 'Biometric secret safe compartments']
    }
  ];

  return (
    <section className="section-padding wardrobes-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-split">
          <div>
            <span className="section-label">Tailored Wardrobes</span>
            <h2 className="editorial-heading-2">Storage, Refined.</h2>
            <p className="editorial-subheading mt-1">Smart storage solutions designed around your space, your wardrobe and the way you live.</p>
          </div>

          <button className="btn-primary" onClick={onOpenConsultation}>
            Explore Wardrobe Systems <ArrowRight size={16} />
          </button>
        </div>

        {/* 4 Wardrobe Grid */}
        <div className="wardrobes-grid">
          {wardrobeTypes.map((item) => (
            <div key={item.id} className="wardrobe-card group" onClick={onOpenConsultation}>
              <div className="wardrobe-img-box image-zoom-container">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="wardrobe-overlay"></div>
                <span className="wardrobe-pill">{item.tag}</span>
              </div>

              <div className="wardrobe-card-content">
                <h3 className="wardrobe-card-title font-serif">{item.title}</h3>
                <p className="wardrobe-card-desc">{item.desc}</p>

                <ul className="wardrobe-features">
                  {item.features.map((feat, i) => (
                    <li key={i}>
                      <CheckCircle size={13} className="text-gold" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <span className="btn-link mt-2">
                  Customize Suite <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .wardrobes-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .wardrobes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
          margin-top: 3rem;
        }

        @media (max-width: 1100px) {
          .wardrobes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .wardrobes-grid {
            grid-template-columns: 1fr;
          }
        }

        .wardrobe-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-medium);
          display: flex;
          flex-direction: column;
        }

        .wardrobe-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-card);
          border-color: var(--accent-gold);
        }

        .wardrobe-img-box {
          height: 240px;
          position: relative;
          background: #E8E2D6;
        }

        .wardrobe-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(18, 16, 14, 0.5) 0%, transparent 60%);
        }

        .wardrobe-pill {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(22, 20, 18, 0.85);
          backdrop-filter: blur(6px);
          color: var(--accent-gold);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .wardrobe-card-content {
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .wardrobe-card-title {
          font-size: 1.35rem;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .wardrobe-card-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .wardrobe-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .wardrobe-features li {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
