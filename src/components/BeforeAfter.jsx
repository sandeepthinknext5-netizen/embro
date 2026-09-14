import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, ArrowRight } from 'lucide-react';
import { beforeAfterTransformations } from '../data/projects';

export default function BeforeAfter({ onOpenConsultation }) {
  const [activeTransformation, setActiveTransformation] = useState(beforeAfterTransformations[0]);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="section-padding before-after-section" id="transformations">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-centered text-center">
          <span className="section-label">Real Space Transformations</span>
          <h2 className="editorial-heading-2">From Ordinary to Extraordinary</h2>
          <p className="editorial-subheading mx-auto max-w-600">
            Slide the interactive divider to see how our architects reimagine layout, light and bespoke furnishings.
          </p>
        </div>

        {/* Room Category Filter Tabs */}
        <div className="trans-tabs-row">
          {beforeAfterTransformations.map((trans) => (
            <button 
              key={trans.id}
              className={`trans-tab-btn ${activeTransformation.id === trans.id ? 'trans-tab-active' : ''}`}
              onClick={() => {
                setActiveTransformation(trans);
                setSliderPosition(50);
              }}
            >
              {trans.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Widget */}
        <div className="transformation-widget-container">
          
          <div 
            className="comparison-viewer"
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full background) */}
            <img 
              src={activeTransformation.after} 
              alt="After Transformation" 
              className="comp-img after-img" 
            />
            <span className="comp-label label-after">AFTER • EMBROSHYAL</span>

            {/* Before Image (Clipped overlay) */}
            <div 
              className="before-image-clip" 
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={activeTransformation.before} 
                alt="Before Transformation" 
                className="comp-img before-img" 
              />
              <span className="comp-label label-before">BEFORE</span>
            </div>

            {/* Draggable Divider Handle */}
            <div 
              className="comparison-handle" 
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="handle-line"></div>
              <div className="handle-button">
                <MoveHorizontal size={18} />
              </div>
              <div className="handle-line"></div>
            </div>
          </div>

          {/* Transformation Meta Details */}
          <div className="trans-meta-card">
            <div className="trans-title-block">
              <span className="trans-loc-tag">{activeTransformation.location}</span>
              <h3 className="trans-heading font-serif">{activeTransformation.title}</h3>
            </div>

            <div className="trans-highlights-box">
              <h4>Key Spatial Upgrades:</h4>
              <ul>
                {activeTransformation.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={15} className="text-gold" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn-gold w-full mt-3" onClick={onOpenConsultation}>
              Transform Your Space <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>

      <style>{`
        .before-after-section {
          background-color: var(--bg-primary);
        }

        .trans-tabs-row {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .trans-tab-btn {
          padding: 0.65rem 1.5rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-card);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .trans-tab-btn:hover {
          border-color: var(--text-primary);
        }

        .trans-tab-active {
          background: var(--bg-dark);
          color: #FFF;
          border-color: var(--bg-dark);
        }

        .transformation-widget-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
          overflow: hidden;
        }

        @media (max-width: 1000px) {
          .transformation-widget-container {
            grid-template-columns: 1fr;
          }
        }

        .comparison-viewer {
          position: relative;
          min-height: 440px;
          height: 100%;
          overflow: hidden;
          cursor: ew-resize;
          user-select: none;
          background: #222;
        }

        .comp-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        .before-image-clip {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          overflow: hidden;
          border-right: 2px solid #FFF;
        }

        .before-image-clip .before-img {
          width: 100%;
          max-width: none;
        }

        .comp-label {
          position: absolute;
          bottom: 16px;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          z-index: 5;
        }

        .label-before {
          left: 16px;
          background: rgba(22, 20, 18, 0.85);
          color: #FFF;
        }

        .label-after {
          right: 16px;
          background: var(--accent-gold);
          color: #111;
        }

        .comparison-handle {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 40px;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 10;
        }

        .handle-line {
          width: 2px;
          flex: 1;
          background: #FFF;
          box-shadow: 0 0 8px rgba(0,0,0,0.5);
        }

        .handle-button {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #FFF;
          color: var(--bg-dark);
          box-shadow: 0 4px 15px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .trans-meta-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .trans-loc-tag {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 0.35rem;
        }

        .trans-heading {
          font-size: 1.7rem;
          color: var(--text-primary);
          line-height: 1.25;
          margin-bottom: 1.5rem;
        }

        .trans-highlights-box {
          background: var(--bg-primary);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          margin-bottom: 1.5rem;
        }

        .trans-highlights-box h4 {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.85rem;
          color: var(--text-primary);
        }

        .trans-highlights-box ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .trans-highlights-box li {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.84rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
