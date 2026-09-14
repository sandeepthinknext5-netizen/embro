import React, { useState } from 'react';
import { Sparkles, Layers, ArrowRight, Check } from 'lucide-react';

export default function Craftsmanship({ onOpenConsultation }) {
  const materials = [
    {
      name: 'Seasoned FSC Hardwoods',
      origin: 'European White Oak & Grade-A Teak',
      desc: 'Kiln-dried down to 8–10% moisture content for lifelong stability against warping, splitting and humidity.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Italian Bouclé & Linen Weaves',
      origin: 'Biella, Northern Italy',
      desc: 'High-density multi-ply tactile textures treated with hydrophobic nano-barrier against red wine and everyday stains.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Quarried Natural Marble',
      origin: 'Carrara & Viola, Tuscany',
      desc: '20mm solid cut slabs hand-honed to a velvet matte finish, penetrating-sealed to resist acidity and scratches.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Antiqued Champagne Brass',
      origin: 'Artisanal Metal Foundry',
      desc: 'Solid heavy brass hand-rubbed with organic waxes, developing a rich nuanced depth over decades of touch.',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="section-padding craftsmanship-section">
      <div className="container">
        
        {/* Split Section Narrative */}
        <div className="craft-hero-split">
          <div className="craft-text-side">
            <span className="section-label">Artisanal Mastery</span>
            <h2 className="editorial-heading-1">Where Craft Meets Character</h2>
            <p className="craft-copy">
              Beautiful design begins with beautiful details. From carefully selected sustainable timbers to precision German joinery, every Embroshyal piece is created to be touched, lived with and treasured for generations.
            </p>
            <div className="craft-stats-grid">
              <div className="craft-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Kiln-Seasoned Timbers</span>
              </div>
              <div className="craft-stat">
                <span className="stat-number">40+</span>
                <span className="stat-label">Artisan Material Swatches</span>
              </div>
              <div className="craft-stat">
                <span className="stat-number">10 Yr</span>
                <span className="stat-label">Structural Guarantee</span>
              </div>
            </div>
            <button className="btn-primary mt-4" onClick={onOpenConsultation}>
              Discover Our Craft <ArrowRight size={16} />
            </button>
          </div>

          <div className="craft-gallery-side">
            <div className="craft-materials-grid">
              {materials.map((mat, idx) => (
                <div key={idx} className="craft-material-card">
                  <div className="craft-mat-img image-zoom-container">
                    <img src={mat.image} alt={mat.name} loading="lazy" />
                  </div>
                  <div className="craft-mat-info">
                    <span className="craft-mat-origin">{mat.origin}</span>
                    <h4 className="craft-mat-name font-serif">{mat.name}</h4>
                    <p className="craft-mat-desc">{mat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .craftsmanship-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .craft-hero-split {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 4.5rem;
          align-items: center;
        }

        @media (max-width: 1000px) {
          .craft-hero-split {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .craft-copy {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 1.25rem 0 2rem;
        }

        .craft-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding: 1.5rem 0;
          border-top: 1px solid var(--border-medium);
          border-bottom: 1px solid var(--border-medium);
        }

        .stat-number {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 600;
          color: var(--accent-bronze);
          display: block;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.35rem;
          display: block;
        }

        .craft-materials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 580px) {
          .craft-materials-grid {
            grid-template-columns: 1fr;
          }
        }

        .craft-material-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: all var(--transition-medium);
        }

        .craft-material-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-gold);
          box-shadow: var(--shadow-card);
        }

        .craft-mat-img {
          height: 140px;
        }

        .craft-mat-info {
          padding: 1.2rem;
        }

        .craft-mat-origin {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 0.25rem;
        }

        .craft-mat-name {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .craft-mat-desc {
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
