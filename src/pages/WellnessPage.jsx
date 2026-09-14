import React, { useState } from 'react';
import { 
  Heart, Leaf, Sun, Wind, Sparkles, 
  CheckCircle2, ArrowRight, ShieldCheck, Activity, Brain 
} from 'lucide-react';

export default function WellnessPage({ onNavigate, onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('ergonomics');

  const pillars = [
    { id: 'ergonomics', label: 'Active Ergonomics' },
    { id: 'biophilia', label: 'Biophilic Interiors' },
    { id: 'circadian', label: 'Circadian Light & Air' },
    { id: 'mindfulness', label: 'Zen & Focus Zones' }
  ];

  const wellnessFeatures = {
    ergonomics: {
      title: 'Active Ergonomics & Movement at Work',
      subtitle: 'Counteracting sedentary fatigue with dynamic standing desks, active wobble stools, and weight-balanced task seating.',
      items: [
        {
          name: 'Dynamic Sit-to-Stand Linear Desk',
          desc: 'Automated posture reminders, whisper-quiet dual motors, and rounded anti-fatigue edge profiles.',
          img: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600&q=80'
        },
        {
          name: 'SpineAlign Kinetic Mesh Seating',
          desc: 'Self-adjusting lumbar curve tracking body micro-movements, reducing lower-back strain by up to 68%.',
          img: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    biophilia: {
      title: 'Biophilic Architecture & Living Workspaces',
      subtitle: 'Integrating natural woods, preserved acoustic moss walls, and air-purifying planter divider troughs.',
      items: [
        {
          name: 'Verdant Preserved Moss & Timber Partitions',
          desc: 'Zero-maintenance Scandinavian reindeer moss dividers absorbing high-frequency background speech chatter.',
          img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
        },
        {
          name: 'Botanical Desktop Planter Integrations',
          desc: 'Waterproof powder-coated aluminum planter channels housing NASA-approved air-purifying foliage.',
          img: 'https://images.unsplash.com/photo-1545083036-b175dd155a1d?auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    circadian: {
      title: 'Circadian Lighting & Indoor Air Quality',
      subtitle: 'Tunable white human-centric lighting synchronized to the natural sun cycle for boosted cognitive focus.',
      items: [
        {
          name: 'SolSync Dynamic Circadian Luminaires',
          desc: 'Smooth color temperature shifts from 2700K warm sunrise to 5000K daylight, maintaining natural sleep-wake rhythms.',
          img: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=600&q=80'
        },
        {
          name: 'Low-VOC Non-Toxic Material Standards',
          desc: 'All adhesives, laminates, and wood coatings certified Zero-Formaldehyde (E0 grade).',
          img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    mindfulness: {
      title: 'Zen Relaxation & Acoustic Recharge Nooks',
      subtitle: 'Dedicated retreat spaces allowing employees to recharge, practice mindfulness, or conduct private calls.',
      items: [
        {
          name: 'TranquilCocoon Meditation Pod',
          desc: 'Curved acoustic micro-alcove with sound dampening fabrics, dimmable ambient glow, and weighted seating.',
          img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80'
        },
        {
          name: 'Oasis Curved Modular Loungers',
          desc: 'High-back ergonomic modular wing units creating semi-private conversational islands.',
          img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80'
        }
      ]
    }
  };

  const currentPillarData = wellnessFeatures[activeTab];

  return (
    <div className="wellness-page animate-fade">
      
      {/* 1. Hero */}
      <section className="wellness-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Commercial & Institutional</span>
            <span>/</span>
            <span>Wellness at Work</span>
          </div>

          <div className="hero-content-wrapper">
            <span className="section-label text-gold">Human-Centric Workspace Design</span>
            <h1 className="editorial-heading-1 text-white">
              Workplaces That Elevate Health, Vitality & Happiness
            </h1>
            <p className="commercial-hero-sub">
              Transforming offices from places of strain into revitalizing environments. We design WELL-certified workplaces that combine kinetic ergonomics, biophilic living materials, circadian light, and acoustic serenity.
            </p>

            <div className="hero-action-group">
              <button className="btn-gold" onClick={onOpenConsultation}>
                Book Ergonomic & Wellness Audit <ArrowRight size={16} />
              </button>
              <button className="btn-secondary-white" onClick={() => onNavigate('workspace')}>
                Explore Workspace Systems
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="b2b-stats-bar">
        <div className="container stats-grid">
          <div className="stat-card">
            <span className="stat-number">+42%</span>
            <span className="stat-label">Reported Boost in Employee Focus</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">WELL v2</span>
            <span className="stat-label">Building Standard Aligned Design</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">0-VOC</span>
            <span className="stat-label">Non-Toxic Emission Materials</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">-60%</span>
            <span className="stat-label">Reduction in Musculoskeletal Complaints</span>
          </div>
        </div>
      </section>

      {/* 3. The 4 Wellness Pillars Interactive Section */}
      <section className="section-spacing container">
        <div className="section-header text-center">
          <span className="section-label">The 4 Foundations</span>
          <h2 className="editorial-heading-2">Holistic Workplace Health Architecture</h2>
          <p className="section-subtitle-wide">
            Healthy teams drive exceptional business performance. Discover how physical spaces shape employee vitality.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="category-filter-pills">
          {pillars.map((pil) => (
            <button
              key={pil.id}
              className={`filter-pill-btn ${activeTab === pil.id ? 'active' : ''}`}
              onClick={() => setActiveTab(pil.id)}
            >
              {pil.label}
            </button>
          ))}
        </div>

        {/* Tab Active Content */}
        <div className="wellness-content-panel">
          <div className="panel-header text-center">
            <h3 className="panel-title font-serif">{currentPillarData.title}</h3>
            <p className="panel-desc">{currentPillarData.subtitle}</p>
          </div>

          <div className="wellness-cards-grid">
            {currentPillarData.items.map((item, idx) => (
              <div key={idx} className="wellness-card">
                <div className="wellness-card-img image-zoom-container">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="wellness-card-body">
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <button className="btn-primary mt-3" onClick={onOpenConsultation}>
                    Request Wellness Specification
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Well-Building Certification Checklist */}
      <section className="b2b-process-section">
        <div className="container">
          <div className="section-header text-center text-white">
            <span className="section-label text-gold">Corporate Health Impact</span>
            <h2 className="editorial-heading-2 text-white">The Business Case for Workplace Wellness</h2>
          </div>

          <div className="process-steps-grid">
            <div className="process-step-item">
              <span className="step-num">01</span>
              <h4>Attract Top Tier Talent</h4>
              <p>Modern professionals demand healthy, human-conscious workplaces that care for their physical well-being.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">02</span>
              <h4>Drastic Drop in Sick Leaves</h4>
              <p>Ergonomic posture support and filtered air circulation lower repetitive strain injury (RSI) rates.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">03</span>
              <h4>LEED & WELL Points</h4>
              <p>Our sustainably sourced timbers and non-toxic lacquers earn direct credits for green building certifications.</p>
            </div>
            <div className="process-step-item">
              <span className="step-num">04</span>
              <h4>Custom Ergonomic Audits</h4>
              <p>Our ergonomists conduct on-site evaluations of desk heights, monitor sightlines, and lighting levels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="commercial-cta-banner container">
        <div className="cta-inner-box">
          <div className="cta-text">
            <h3 className="editorial-heading-2 text-white">Transform Your Office Into a Sanctuary of Energy</h3>
            <p>Book a free corporate ergonomic assessment and discover custom biophilic and sit-stand integration plans.</p>
          </div>
          <button className="btn-gold" onClick={onOpenConsultation}>
            Schedule Wellness Consultation <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .wellness-hero {
          background: linear-gradient(135deg, rgba(16, 22, 18, 0.95) 0%, rgba(22, 34, 26, 0.84) 100%), url('https://images.unsplash.com/photo-1545083036-b175dd155a1d?auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          padding: 5.5rem 0 4.5rem;
          color: #FFF;
        }

        .hero-content-wrapper {
          max-width: 820px;
          margin-top: 1rem;
        }

        .commercial-hero-sub {
          font-size: 1.15rem;
          color: #D6CEC5;
          margin: 1.25rem 0 2rem;
          line-height: 1.7;
        }

        .hero-action-group {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .btn-secondary-white {
          background: rgba(255, 255, 255, 0.1);
          color: #FFF;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.85rem 1.6rem;
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .b2b-stats-bar {
          background: #181512;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.2rem 0;
          color: #FFF;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        @media (max-width: 800px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        .stat-number {
          display: block;
          font-family: var(--font-serif);
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--accent-gold);
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #A8A29A;
        }

        .category-filter-pills {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin: 2.5rem 0 3rem;
        }

        .filter-pill-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          padding: 0.65rem 1.35rem;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filter-pill-btn:hover {
          border-color: var(--accent-gold);
          color: var(--text-primary);
        }

        .filter-pill-btn.active {
          background: #181512;
          color: var(--accent-gold);
          border-color: var(--accent-gold);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .wellness-content-panel {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 3rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        @media (max-width: 768px) {
          .wellness-content-panel {
            padding: 1.5rem;
          }
        }

        .panel-title {
          font-size: 1.8rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .panel-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 680px;
          margin: 0 auto 2.5rem;
        }

        .wellness-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        @media (max-width: 800px) {
          .wellness-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        .wellness-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .wellness-card-img {
          height: 250px;
        }

        .wellness-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .wellness-card-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .wellness-card-body h4 {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .wellness-card-body p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }

        .b2b-process-section {
          background: #141210;
          padding: 5.5rem 0;
          margin-top: 5rem;
        }

        .process-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
        }

        @media (max-width: 950px) {
          .process-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .process-steps-grid {
            grid-template-columns: 1fr;
          }
        }

        .process-step-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2rem 1.5rem;
          border-radius: var(--radius-sm);
        }

        .step-num {
          display: block;
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--accent-gold);
          margin-bottom: 1rem;
        }

        .process-step-item h4 {
          color: #FFF;
          font-size: 1.15rem;
          margin-bottom: 0.65rem;
        }

        .process-step-item p {
          color: #A8A29A;
          font-size: 0.85rem;
          line-height: 1.6;
        }

        .commercial-cta-banner {
          margin: 4.5rem auto 5rem;
        }

        .cta-inner-box {
          background: linear-gradient(135deg, #1A1714 0%, #29241F 100%);
          border: 1px solid rgba(194, 155, 56, 0.35);
          padding: 3.5rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 850px) {
          .cta-inner-box {
            flex-direction: column;
            text-align: center;
            padding: 2.5rem 1.5rem;
          }
        }

        .cta-text p {
          color: #D6CEC5;
          margin-top: 0.5rem;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
}
