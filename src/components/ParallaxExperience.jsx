import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Award, Compass, ShieldCheck, Play, Pause } from 'lucide-react';

export default function ParallaxExperience({ onOpenConsultation, onExploreFurniture }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="parallax-master-section">
      
      {/* Fixed Parallax Background Layer */}
      <div 
        className="parallax-bg-layer"
        style={{
          transform: `translate3d(0, ${scrollY * 0.12}px, 0)`
        }}
      ></div>

      {/* Cinematic Vignette Overlays */}
      <div className="parallax-dark-vignette"></div>
      <div className="parallax-noise-overlay"></div>

      <div className="container parallax-content-container">
        
        {/* Top Accolade Ribbon */}
        <div className="parallax-pill-badge animate-fade">
          <Award size={15} className="text-gold" />
          <span>Architectural Living Masterpiece • Autumn 2026</span>
        </div>

        {/* Big Editorial Quote */}
        <div className="parallax-quote-box">
          <p className="parallax-quote-eyebrow">The Atelier Manifesto</p>
          <blockquote className="parallax-quote-text font-serif">
            “We do not merely furnish rooms; we compose <span className="text-gold italic">emotional landscapes</span> where light, grain, and proportion converse in silence.”
          </blockquote>
          <div className="parallax-quote-author">
            <span className="author-name">— Jean-Philippe Laurent & Maya Kulkarni</span>
            <span className="author-role">Principal Architects & Atelier Founders</span>
          </div>
        </div>

        {/* 4 Interactive Glassmorphic Live Metrics */}
        <div className="parallax-metrics-grid">
          
          <div className="parallax-metric-card">
            <div className="metric-icon-wrap">
              <Compass size={20} className="text-gold" />
            </div>
            <div className="metric-number-stack">
              <span className="metric-num">2,450+</span>
              <span className="metric-lbl">Homes Curated Worldwide</span>
            </div>
          </div>

          <div className="parallax-metric-card">
            <div className="metric-icon-wrap">
              <ShieldCheck size={20} className="text-gold" />
            </div>
            <div className="metric-number-stack">
              <span className="metric-num">10-Year</span>
              <span className="metric-lbl">Structural Frame Guarantee</span>
            </div>
          </div>

          <div className="parallax-metric-card">
            <div className="metric-icon-wrap">
              <Sparkles size={20} className="text-gold" />
            </div>
            <div className="metric-number-stack">
              <span className="metric-num">40+</span>
              <span className="metric-lbl">Master Joinery Artisans</span>
            </div>
          </div>

          <div className="parallax-metric-card">
            <div className="metric-icon-wrap">
              <Award size={20} className="text-gold" />
            </div>
            <div className="metric-number-stack">
              <span className="metric-num">4.96 ★</span>
              <span className="metric-lbl">Client Review Score</span>
            </div>
          </div>

        </div>

        {/* Action Button Cluster */}
        <div className="parallax-actions-row">
          <button 
            className="btn-gold parallax-cta-btn"
            onClick={onOpenConsultation}
          >
            Schedule Private 3D Spatial Consultation <ArrowRight size={16} />
          </button>
          
          <button 
            className="parallax-ghost-btn"
            onClick={onExploreFurniture}
          >
            Explore Handcrafted Catalog
          </button>
        </div>

      </div>

      <style>{`
        .parallax-master-section {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 8rem 0;
          background-color: #0E0D0C;
          color: #FFF;
        }

        .parallax-bg-layer {
          position: absolute;
          top: -20%;
          left: 0;
          width: 100%;
          height: 140%;
          background-image: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85');
          background-size: cover;
          background-position: center;
          will-change: transform;
          z-index: 1;
          filter: brightness(0.65) saturate(1.1);
        }

        .parallax-dark-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(14, 13, 12, 0.4) 0%, rgba(14, 13, 12, 0.92) 85%);
          z-index: 2;
          pointer-events: none;
        }

        .parallax-noise-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(22, 20, 18, 0.8) 0%, rgba(22, 20, 18, 0.3) 50%, rgba(22, 20, 18, 0.85) 100%);
          z-index: 3;
          pointer-events: none;
        }

        .parallax-content-container {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 1000px;
        }

        .parallax-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(22, 20, 18, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(194, 155, 56, 0.4);
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FFF;
          margin-bottom: 2.25rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }

        .parallax-quote-box {
          margin-bottom: 3.5rem;
        }

        .parallax-quote-eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-gold);
          margin-bottom: 1rem;
        }

        .parallax-quote-text {
          font-size: clamp(1.8rem, 4vw, 3.2rem);
          font-weight: 300;
          line-height: 1.35;
          color: #FAF7F2;
          max-width: 900px;
          margin: 0 auto 1.5rem;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
        }

        .parallax-quote-author {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .author-name {
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #E8E1D5;
        }

        .author-role {
          font-size: 0.75rem;
          color: var(--accent-gold);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* Metrics Grid */
        .parallax-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          width: 100%;
          margin-bottom: 3.5rem;
        }

        @media (max-width: 900px) {
          .parallax-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .parallax-metrics-grid {
            grid-template-columns: 1fr;
          }
        }

        .parallax-metric-card {
          background: rgba(22, 20, 18, 0.7);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-sm);
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          transition: all var(--transition-medium);
        }

        .parallax-metric-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-gold);
          background: rgba(22, 20, 18, 0.88);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .metric-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(194, 155, 56, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(194, 155, 56, 0.25);
        }

        .metric-number-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }

        .metric-num {
          font-family: var(--font-serif);
          font-size: 1.9rem;
          font-weight: 600;
          color: #FFF;
          line-height: 1;
        }

        .metric-lbl {
          font-size: 0.72rem;
          color: #B5AFA8;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        /* Action Buttons */
        .parallax-actions-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem;
        }

        .parallax-cta-btn {
          height: 48px;
          padding: 0 2rem;
          font-size: 0.8rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 8px 25px rgba(194, 155, 56, 0.35);
        }

        .parallax-ghost-btn {
          height: 48px;
          padding: 0 1.75rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #FFF;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .parallax-ghost-btn:hover {
          background: rgba(255, 255, 255, 0.18);
          border-color: #FFF;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
