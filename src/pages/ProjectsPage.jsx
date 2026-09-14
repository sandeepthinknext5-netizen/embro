import React, { useState } from 'react';
import { 
  Building2, Sparkles, CheckCircle2, ArrowRight, 
  MapPin, Calendar, Ruler, Award 
} from 'lucide-react';
import ProjectsPortfolio from '../components/ProjectsPortfolio';
import BeforeAfter from '../components/BeforeAfter';

export default function ProjectsPage({ onNavigate, onOpenConsultation }) {
  const [projectTab, setProjectTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'corporate', label: 'Corporate & Tech HQs' },
    { id: 'institutional', label: 'Universities & Labs' },
    { id: 'healthcare', label: 'Healthcare & Clinical' },
    { id: 'residential', label: 'Luxury Residences' }
  ];

  const commercialCaseStudies = [
    {
      id: 1,
      type: 'corporate',
      title: 'NexGen FinTech Headquarters',
      location: 'BKC, Mumbai',
      area: '45,000 Sq. Ft.',
      timeline: '60 Days Turnkey',
      desc: 'Turnkey agile workspace featuring 450+ motorized height-adjustable desks, 6 acoustic phone booths, and an automated 18-seater boardroom with 4K PTZ telepresence.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      badge: 'Enterprise Gold Award'
    },
    {
      id: 2,
      type: 'institutional',
      title: 'Aura Institute of Technology & AI Lab',
      location: 'Electronic City, Bengaluru',
      area: '32,000 Sq. Ft.',
      timeline: '45 Days Handover',
      desc: 'Tiered 300-seat amphitheater lecture hall with tip-up acoustic seating, modular robotics maker tables, and high-density library book carrels.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      badge: 'Educational Infrastructure'
    },
    {
      id: 3,
      type: 'healthcare',
      title: 'Asteria Super-Speciality Hospital',
      location: 'Gurugram, Delhi NCR',
      area: '28,000 Sq. Ft.',
      timeline: '40 Days Phased',
      desc: 'NABH-compliant seamless Corian nurse stations, 120 bariatric anti-microbial waiting lounge seats, and private patient room motorized attendants.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      badge: 'Healthcare Excellence'
    },
    {
      id: 4,
      type: 'corporate',
      title: 'Starlight Global Co-Working Hub',
      location: 'Cyber City, Hyderabad',
      area: '60,000 Sq. Ft.',
      timeline: '75 Days Delivery',
      desc: 'Dynamic hybrid workspace with 120-degree collaborative desking clusters, biophilic planter dividers, and centralized smart meeting room control.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      badge: 'LEED Platinum Project'
    },
    {
      id: 5,
      type: 'institutional',
      title: 'BioPharm National Research Labs',
      location: 'Genome Valley, Hyderabad',
      area: '18,500 Sq. Ft.',
      timeline: '35 Days Delivery',
      desc: 'SEFA 8 certified heavy-load C-frame epoxy resin workbenches, bypass aerodynamic fume hoods, and 316-grade cleanroom stainless casework.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      badge: 'SEFA 8 Certified Lab'
    },
    {
      id: 6,
      type: 'residential',
      title: 'The Solitaire Penthouse',
      location: 'Worli Sea Face, Mumbai',
      area: '6,200 Sq. Ft.',
      timeline: '90 Days Turnkey',
      desc: 'Custom Italian Calacatta marble kitchen island, curved bouclé bespoke living suites, and motorized fluted glass walk-in wardrobe galleries.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      badge: 'Luxury Private Residence'
    }
  ];

  const filteredProjects = projectTab === 'all'
    ? commercialCaseStudies
    : commercialCaseStudies.filter(p => p.type === projectTab);

  return (
    <div className="projects-page animate-fade">
      
      {/* 1. Hero */}
      <section className="projects-page-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Completed Works</span>
            <span>/</span>
            <span>Project Portfolio</span>
          </div>
          <span className="section-label text-gold">Commercial & Residential Portfolio</span>
          <h1 className="editorial-heading-1 text-white">Spaces We've Designed & Transformed</h1>
          <p className="proj-page-sub">
            Explore our landmark architectural projects across India — from Fortune 500 tech headquarters and research institutions to seaface penthouses and private estates.
          </p>

          <div className="hero-action-group mt-4">
            <button className="btn-gold" onClick={onOpenConsultation}>
              Schedule Project Feasibility Audit <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Project Category Filters */}
      <section className="section-spacing container">
        <div className="section-header text-center">
          <span className="section-label">Case Studies</span>
          <h2 className="editorial-heading-2">Featured Turnkey Installations</h2>
          <p className="section-subtitle-wide">
            Delivered on time, within budget, and built with obsessive craftsmanship.
          </p>
        </div>

        <div className="category-filter-pills">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-pill-btn ${projectTab === tab.id ? 'active' : ''}`}
              onClick={() => setProjectTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="case-studies-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="case-study-card">
              <div className="case-study-image image-zoom-container">
                <img src={proj.image} alt={proj.title} />
                <span className="case-badge">{proj.badge}</span>
              </div>
              <div className="case-study-body">
                <div className="case-meta-row">
                  <span className="case-meta-item"><MapPin size={13} /> {proj.location}</span>
                  <span className="case-meta-item"><Ruler size={13} /> {proj.area}</span>
                  <span className="case-meta-item"><Calendar size={13} /> {proj.timeline}</span>
                </div>

                <h3 className="case-title">{proj.title}</h3>
                <p className="case-desc">{proj.desc}</p>

                <button className="btn-primary w-full mt-auto" onClick={onOpenConsultation}>
                  Request Case Study & BoQ Breakdown
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Before & After Showcase */}
      <BeforeAfter onOpenConsultation={onOpenConsultation} />

      {/* 4. Residential Gallery Grid */}
      <ProjectsPortfolio onOpenConsultation={onOpenConsultation} />

      {/* 5. CTA */}
      <section className="commercial-cta-banner container">
        <div className="cta-inner-box">
          <div className="cta-text">
            <h3 className="editorial-heading-2 text-white">Have an Upcoming Project or RFP?</h3>
            <p>Our dedicated enterprise project managers provide turnkey estimating, architectural 3D mockups, and milestone delivery schedules.</p>
          </div>
          <button className="btn-gold" onClick={onOpenConsultation}>
            Submit RFP / Project Inquiry <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .projects-page-hero {
          background: linear-gradient(135deg, rgba(18, 16, 14, 0.95) 0%, rgba(28, 24, 20, 0.82) 100%), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          padding: 5.5rem 0 4.5rem;
          color: #FFF;
        }

        .proj-page-sub {
          font-size: 1.15rem;
          color: #D5CEC6;
          max-width: 760px;
          margin-top: 1rem;
          line-height: 1.7;
        }

        .hero-action-group {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
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

        .case-studies-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.2rem;
          margin-bottom: 4rem;
        }

        @media (max-width: 1050px) {
          .case-studies-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .case-studies-grid {
            grid-template-columns: 1fr;
          }
        }

        .case-study-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .case-study-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
          border-color: var(--accent-gold);
        }

        .case-study-image {
          height: 240px;
          position: relative;
        }

        .case-study-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .case-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(18, 16, 14, 0.88);
          color: var(--accent-gold);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid rgba(194, 155, 56, 0.4);
        }

        .case-study-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .case-meta-row {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
        }

        .case-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--accent-gold);
          font-weight: 600;
        }

        .case-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .case-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.5rem;
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
