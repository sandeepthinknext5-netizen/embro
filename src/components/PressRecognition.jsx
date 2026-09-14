import React from 'react';
import { Star, Award, Quote } from 'lucide-react';

export default function PressRecognition() {
  const pressItems = [
    {
      pub: 'ARCHITECTURAL DIGEST',
      quote: '“Embroshyal has redefined contemporary Indian living with sculptural, timeless furniture that rivals the greatest Milanese ateliers.”'
    },
    {
      pub: 'ELLE DECOR',
      quote: '“A rare masterclass in honest materiality — from raw Roman travertine to hand-woven cane joinery.”'
    },
    {
      pub: 'VOGUE LIVING',
      quote: '“The new benchmark for quiet luxury and bespoke turnkey Indian residences.”'
    },
    {
      pub: 'WALLPAPER*',
      quote: '“Organic contours meet rigorous Scandinavian-Japanese minimalism.”'
    }
  ];

  return (
    <section className="press-recognition-section">
      <div className="container">
        
        <div className="press-header">
          <span className="press-tag">Critically Acclaimed</span>
          <h3 className="font-serif text-2xl text-white">Recognized by Global Design Authorities</h3>
        </div>

        <div className="press-grid">
          {pressItems.map((item, idx) => (
            <div key={idx} className="press-card">
              <Quote size={20} className="text-gold mb-3 opacity-80" />
              <p className="press-quote-text font-serif font-light">{item.quote}</p>
              <span className="press-pub-name font-bold tracking-widest text-xs uppercase">{item.pub}</span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .press-recognition-section {
          background-color: #3a300dd1;
          padding: 5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          color: #FFF;
        }

        .press-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .press-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 0.35rem;
        }

        .press-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }

        @media (max-width: 1024px) {
          .press-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .press-grid {
            grid-template-columns: 1fr;
          }
        }

        .press-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-sm);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all var(--transition-medium);
        }

        .press-card:hover {
          transform: translateY(-4px);
          border-color: rgba(194, 155, 56, 0.4);
          background: rgba(255, 255, 255, 0.06);
        }

        .press-quote-text {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #E5DFD7;
          margin-bottom: 1.5rem;
        }

        .press-pub-name {
          color: var(--accent-gold);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 0.75rem;
        }
      `}</style>
    </section>
  );
}
