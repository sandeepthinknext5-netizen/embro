import React, { useState } from 'react';
import { ArrowRight, MapPin, Maximize2, Calendar, X, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectsPortfolio({ onOpenConsultation }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Homes', 'Apartments', 'Villas', 'Offices', 'Hospitality'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.type === selectedFilter);

  return (
    <section className="section-padding projects-portfolio-section" id="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-split">
          <div>
            <span className="section-label">Completed Works</span>
            <h2 className="editorial-heading-2">Spaces We've Created</h2>
            <p className="editorial-subheading mt-1">Explore our portfolio of private residences, villas and executive commercial sanctuaries.</p>
          </div>

          {/* Filter Pills */}
          <div className="portfolio-filter-pills">
            {filters.map((f) => (
              <button 
                key={f}
                className={`filter-pill ${selectedFilter === f ? 'filter-pill-active' : ''}`}
                onClick={() => setSelectedFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-cover-box image-zoom-container">
                <img src={project.coverImage} alt={project.title} loading="lazy" />
                <div className="project-gradient-overlay"></div>
                <div className="project-top-tags">
                  <span className="project-type-tag">{project.type}</span>
                  <span className="project-city-tag"><MapPin size={11} /> {project.city}</span>
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title font-serif">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-meta-strip">
                  <span>{project.area}</span>
                  <span>•</span>
                  <span>{project.timeline}</span>
                </div>

                <span className="btn-link mt-2">
                  View Project Case Study <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="case-study-modal animate-fade" onClick={(e) => e.stopPropagation()}>
            <button className="case-study-close" onClick={() => setSelectedProject(null)}>
              <X size={22} />
            </button>

            <div className="case-study-header">
              <div className="case-study-type-pill">{selectedProject.type} • {selectedProject.city}</div>
              <h2 className="case-study-title font-serif">{selectedProject.title}</h2>
              <div className="case-study-stats">
                <span><strong>Area:</strong> {selectedProject.area}</span>
                <span><strong>Timeline:</strong> {selectedProject.timeline}</span>
                <span><strong>Location:</strong> {selectedProject.city}</span>
              </div>
            </div>

            <div className="case-study-image-box">
              <img src={selectedProject.coverImage} alt={selectedProject.title} />
            </div>

            <div className="case-study-content">
              <div className="case-study-left">
                <h3 className="font-serif">Design Narrative</h3>
                <p>{selectedProject.desc}</p>
                <div className="case-study-quote">
                  <p>"{selectedProject.testimonial}"</p>
                  <span>— Homeowner Testimonial</span>
                </div>
              </div>

              <div className="case-study-right">
                <h4>Project Scope & Inclusions</h4>
                <ul className="scope-list">
                  {selectedProject.scope.map((item, i) => (
                    <li key={i}>✓ {item}</li>
                  ))}
                </ul>

                <button 
                  className="btn-gold w-full mt-4"
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenConsultation();
                  }}
                >
                  Request Similar Design Plan
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        .projects-portfolio-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .portfolio-filter-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-pill {
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          padding: 0.5rem 1.1rem;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-pill:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }

        .filter-pill-active {
          background: var(--bg-dark);
          color: #FFF;
          border-color: var(--bg-dark);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        @media (max-width: 1000px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-medium);
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-floating);
          border-color: var(--accent-gold);
        }

        .project-cover-box {
          height: 260px;
          position: relative;
          background: #E8E2D6;
        }

        .project-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(18, 16, 14, 0.6) 0%, transparent 60%);
        }

        .project-top-tags {
          position: absolute;
          top: 14px;
          left: 14px;
          right: 14px;
          display: flex;
          justify-content: space-between;
          z-index: 2;
        }

        .project-type-tag {
          background: rgba(255, 255, 255, 0.95);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-primary);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
        }

        .project-city-tag {
          background: rgba(22, 20, 18, 0.85);
          color: #FFF;
          font-size: 0.7rem;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .project-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-title {
          font-size: 1.35rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .project-desc {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1rem;
          flex: 1;
        }

        .project-meta-strip {
          display: flex;
          gap: 0.6rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        /* Case Study Modal */
        .case-study-modal {
          background: var(--bg-card);
          width: 90%;
          max-width: 860px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: var(--radius-sm);
          position: relative;
          padding: 2.5rem;
          box-shadow: var(--shadow-dark);
        }

        .case-study-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
        }

        .case-study-type-pill {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-gold);
          margin-bottom: 0.4rem;
        }

        .case-study-title {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }

        .case-study-stats {
          display: flex;
          gap: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 1.5rem;
        }

        .case-study-image-box {
          height: 360px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .case-study-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .case-study-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2.5rem;
        }

        @media (max-width: 700px) {
          .case-study-content {
            grid-template-columns: 1fr;
          }
        }

        .case-study-quote {
          background: var(--bg-secondary);
          padding: 1.25rem;
          border-left: 3px solid var(--accent-gold);
          margin-top: 1.5rem;
          border-radius: var(--radius-sm);
        }

        .case-study-quote p {
          font-style: italic;
          font-size: 0.88rem;
          color: var(--text-primary);
        }

        .case-study-quote span {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
        }

        .scope-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
