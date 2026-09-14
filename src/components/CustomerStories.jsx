import React from 'react';
import { Star, ShieldCheck, Quote, ArrowRight } from 'lucide-react';
import { customerStories } from '../data/stories';

export default function CustomerStories({ onOpenConsultation }) {
  return (
    <section className="section-padding customer-stories-section" id="stories">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-centered text-center">
          <span className="section-label">Homeowner Reflections</span>
          <h2 className="editorial-heading-2">Loved by Our Customers</h2>
          <p className="editorial-subheading mx-auto max-w-600">
            Over 15,000 discerning families across India live with Embroshyal craftsmanship every single day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="stories-grid">
          {customerStories.map((story) => (
            <div key={story.id} className="story-card">
              
              <div className="story-header-row">
                <div className="stars-row">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#C29B38" color="#C29B38" />
                  ))}
                </div>
                {story.verified && (
                  <span className="verified-buyer-badge">
                    <ShieldCheck size={12} /> Verified Homeowner
                  </span>
                )}
              </div>

              <p className="story-quote">"{story.quote}"</p>

              <div className="story-author-box">
                <img src={story.avatar} alt={story.name} className="story-avatar" />
                <div className="story-author-details">
                  <strong className="author-name">{story.name}</strong>
                  <span className="author-city">{story.city} • {story.project}</span>
                  <small className="author-product">{story.product}</small>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="stories-trust-banner">
          <div className="banner-item">
            <span className="banner-num font-serif">4.94 / 5</span>
            <span className="banner-sub">Overall Brand Rating (2,840+ Reviews)</span>
          </div>
          <div className="banner-divider"></div>
          <div className="banner-item">
            <span className="banner-num font-serif">99.2%</span>
            <span className="banner-sub">On-Time Turnkey Delivery Record</span>
          </div>
          <div className="banner-divider"></div>
          <div className="banner-item">
            <span className="banner-num font-serif">10 Years</span>
            <span className="banner-sub">Comprehensive Frame & Core Guarantee</span>
          </div>
        </div>

      </div>

      <style>{`
        .customer-stories-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .stories-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
        }

        @media (max-width: 860px) {
          .stories-grid {
            grid-template-columns: 1fr;
          }
        }

        .story-card {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 2.5rem;
          box-shadow: var(--shadow-subtle);
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-medium);
        }

        .story-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
          border-color: var(--accent-gold);
        }

        .story-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .stars-row {
          display: flex;
          gap: 0.25rem;
        }

        .verified-buyer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 600;
          color: #2E6F40;
          background: #EAF5ED;
          padding: 0.25rem 0.6rem;
          border-radius: 50px;
        }

        .story-quote {
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.65;
          margin-bottom: 2rem;
          flex: 1;
          font-style: italic;
        }

        .story-author-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-light);
        }

        .story-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--accent-gold);
        }

        .story-author-details {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .author-city {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .author-product {
          font-size: 0.72rem;
          color: var(--accent-bronze);
          margin-top: 0.15rem;
        }

        .stories-trust-banner {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: var(--bg-dark);
          color: #FFF;
          padding: 2rem;
          border-radius: var(--radius-sm);
          margin-top: 3.5rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .banner-item {
          text-align: center;
        }

        .banner-num {
          font-size: 2.2rem;
          color: var(--accent-gold);
          display: block;
          line-height: 1;
        }

        .banner-sub {
          font-size: 0.8rem;
          color: #C8C2BA;
          margin-top: 0.4rem;
          display: block;
        }

        .banner-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 640px) {
          .banner-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
