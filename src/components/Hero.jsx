import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Award, Compass } from 'lucide-react';

export default function Hero({ onExploreCollection, onDiscoverSpace, onOpenConsultation }) {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
      tag: 'The Atelier Collection 2026',
      headline: 'Designed for the Way You Live.',
      subtext: 'Thoughtfully designed furniture and bespoke interiors that bring together enduring comfort, artisanal character and timeless style.',
      highlight: 'Solis Bouclé Seating & Travertine Table Suite'
    },
    {
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85',
      tag: 'Architectural Sanctuary',
      headline: 'Spaces Crafted with Pure Purpose.',
      subtext: 'From solitary contemplation to grand dinner soirees, experience the tranquility of seasoned hardwoods, Italian marbles and woven cane.',
      highlight: 'Aurelia Cane & Fluted Oak Bedroom Master Suite'
    },
    {
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85',
      tag: 'Bespoke Turnkey Interiors',
      headline: 'Your Home, Your Defining Story.',
      subtext: 'End-to-end 3D architectural interior design, precision modular kitchens, and walk-in wardrobe suites tailored to your personal aesthetic.',
      highlight: 'Custom Island Modular Kitchen & Bronze Closets'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-section">
      {/* Background Slide */}
      <div 
        key={currentSlide} 
        className="hero-slide-bg motion-fade-scale"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="hero-overlay"></div>
      </div>

      {/* Main Content Area */}
      <div className="container hero-content-container">
        <div className="hero-text-block">
          
          <div key={`badge-${currentSlide}`} className="hero-badge motion-slide-up">
            <Sparkles size={14} className="text-gold" />
            <span>{slides[currentSlide].tag}</span>
          </div>

          <h1 key={`head-${currentSlide}`} className="hero-headline editorial-heading-1 motion-slide-up stagger-1">
            {slides[currentSlide].headline}
          </h1>

          <p key={`sub-${currentSlide}`} className="hero-subtext motion-slide-up stagger-2">
            {slides[currentSlide].subtext}
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group motion-slide-up stagger-3">
            <button 
              className="btn-gold hero-primary-btn hover-lift"
              onClick={onExploreCollection}
            >
              Explore Collection <ArrowRight size={16} />
            </button>

            <button 
              className="btn-secondary-light hover-lift"
              onClick={onDiscoverSpace}
            >
              Discover Your Space
            </button>

            <button 
              className="hero-consult-link"
              onClick={onOpenConsultation}
            >
              Book a Consultation →
            </button>
          </div>

          {/* Trust Highlights Strip */}
          <div className="hero-trust-strip motion-slide-up stagger-4">
            <div className="trust-item">
              <ShieldCheck size={18} className="text-gold" />
              <div>
                <strong>10-Year Warranty</strong>
                <span>Solid Timber Structure</span>
              </div>
            </div>

            <div className="trust-item">
              <Award size={18} className="text-gold" />
              <div>
                <strong>Artisanal Craft</strong>
                <span>100% Seasoned Hardwoods</span>
              </div>
            </div>

            <div className="trust-item">
              <Compass size={18} className="text-gold" />
              <div>
                <strong>Turnkey 3D Design</strong>
                <span>Over 15,000+ Homes Crafted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="hero-slide-controls">
          <div className="slide-dots">
            {slides.map((_, idx) => (
              <button 
                key={idx} 
                className={`dot-btn ${idx === currentSlide ? 'dot-active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className="dot-progress"></span>
              </button>
            ))}
          </div>
          <span key={`caption-${currentSlide}`} className="hero-slide-caption motion-slide-up">
            {slides[currentSlide].highlight}
          </span>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: calc(100vh - 110px);
          display: flex;
          align-items: center;
          background-color: var(--bg-dark);
          color: #FFF;
          overflow: hidden;
        }

        .hero-slide-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(18, 15, 13, 0.9) 0%,
            rgba(18, 15, 13, 0.68) 50%,
            rgba(18, 15, 13, 0.38) 100%
          );
        }

        .hero-content-container {
          position: relative;
          z-index: 2;
          padding-top: 4rem;
          padding-bottom: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 540px;
        }

        .hero-text-block {
          max-width: 680px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          padding: 0.35rem 1rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #FFF;
          margin-bottom: 1.5rem;
        }

        .hero-headline {
          color: #FFFFFF;
          margin-bottom: 1.25rem;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .hero-subtext {
          font-size: 1.15rem;
          font-weight: 300;
          line-height: 1.7;
          color: #E6E0D8;
          margin-bottom: 2.2rem;
          max-width: 580px;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }

        .hero-primary-btn {
          font-size: 0.88rem;
          padding: 1.05rem 2.4rem;
        }

        .hero-consult-link {
          background: none;
          border: none;
          color: var(--text-light);
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: color var(--transition-fast);
          padding: 0.5rem 0.75rem;
        }

        .hero-consult-link:hover {
          color: var(--accent-gold);
        }

        .hero-trust-strip {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .trust-item strong {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #FFF;
        }

        .trust-item span {
          display: block;
          font-size: 0.72rem;
          color: #B5AFA8;
        }

        .hero-slide-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
        }

        .slide-dots {
          display: flex;
          gap: 0.75rem;
        }

        .dot-btn {
          width: 48px;
          height: 3px;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background var(--transition-fast);
        }

        .dot-active {
          background: var(--accent-gold);
        }

        .hero-slide-caption {
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          color: #D8D2C9;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 80vh;
          }
          .hero-trust-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .hero-slide-controls {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
