import React from 'react';
import { Compass, ShieldCheck, UserCheck, Clock, HeartHandshake, Headphones } from 'lucide-react';

export default function WhyEmbroshyal() {
  const pillars = [
    {
      icon: Compass,
      title: 'Thoughtful Design',
      desc: 'Every contour, radius and joint is created with intentional purpose, ergonomic comfort and architectural proportion.'
    },
    {
      icon: ShieldCheck,
      title: 'Exceptional Quality',
      desc: 'Sustainably sourced kiln-dried hardwoods, Italian quarried marbles, and European nano-treated fabrics built for generations.'
    },
    {
      icon: UserCheck,
      title: 'Made for You',
      desc: 'Flexible custom sizing, 40+ fabric choices, and tailored modular layouts designed around your lifestyle rituals.'
    },
    {
      icon: Clock,
      title: 'Timeless Aesthetics',
      desc: 'Enduring design languages that transcend seasonal fast-furniture trends, maturing with an organic authentic patina.'
    },
    {
      icon: HeartHandshake,
      title: 'Seamless Experience',
      desc: 'From intuitive digital 3D space planning to white-glove inside placement and unboxing, every milestone is effortless.'
    },
    {
      icon: Headphones,
      title: 'Expert Guidance',
      desc: 'Dedicated interior architects and spatial consultants available for private 1-on-1 design sessions anytime.'
    }
  ];

  return (
    <section className="section-padding why-embroshyal-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-centered text-center motion-slide-up">
          <span className="section-label">The Embroshyal Distinction</span>
          <h2 className="editorial-heading-2">Why Embroshyal?</h2>
          <p className="editorial-subheading mx-auto max-w-600">
            We bridge the gap between high-fashion European atelier design and precision turnkey residential delivery.
          </p>
        </div>

        {/* 6 Feature Blocks */}
        <div className="why-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <div 
                key={idx} 
                className={`why-card motion-card-enter stagger-${(idx % 3) + 1}`}
              >
                <div className="why-icon-box">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="why-title font-serif">{pillar.title}</h3>
                <p className="why-desc">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .why-embroshyal-section {
          background-color: var(--bg-primary);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.2rem;
          margin-top: 3.5rem;
        }

        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }

        .why-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          padding: 2.2rem;
          border-radius: var(--radius-sm);
          transition: border-color var(--transition-medium), box-shadow var(--transition-medium), transform var(--transition-medium);
          display: flex;
          flex-direction: column;
        }

        .why-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-gold);
          box-shadow: var(--shadow-card);
        }

        .why-icon-box {
          width: 54px;
          height: 54px;
          background: var(--bg-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          border: 1px solid var(--border-medium);
        }

        .why-title {
          font-size: 1.35rem;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }

        .why-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
