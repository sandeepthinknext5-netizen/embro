import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, Search } from 'lucide-react';
import { faqItems } from '../data/stories';

export default function FAQSection({ onOpenConsultation }) {
  const [openIdx, setOpenIdx] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  const filteredFaqs = faqItems.filter(item => 
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section-padding faq-section" id="faq">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-centered text-center">
          <span className="section-label">Help & Clarity</span>
          <h2 className="editorial-heading-2">Frequently Asked Questions</h2>
          <p className="editorial-subheading mx-auto max-w-600">
            Everything you need to know about our handcrafted furniture, bespoke interior architecture and warranty.
          </p>
        </div>

        {/* Search FAQs */}
        <div className="faq-search-box">
          <Search size={17} className="faq-search-icon" />
          <input 
            type="text"
            placeholder="Search questions (e.g. warranty, customization, delivery)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-box">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div key={idx} className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <div className="faq-chevron-icon">
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-pane animate-fade">
                    <p>{faq.a}</p>
                    <span className="faq-category-tag">{faq.category}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Center Banner */}
        <div className="faq-footer-help">
          <p>Have an unlisted question about your floor plan or custom dimension?</p>
          <button className="btn-link" onClick={onOpenConsultation}>
            Speak to a Design Specialist →
          </button>
        </div>

      </div>

      <style>{`
        .faq-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .faq-search-box {
          max-width: 600px;
          margin: 0 auto 3rem;
          position: relative;
        }

        .faq-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .faq-search-box input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.8rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-card);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .faq-search-box input:focus {
          outline: none;
          border-color: var(--accent-gold);
        }

        .faq-accordion-box {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }

        .faq-item-open {
          border-color: var(--accent-gold);
          box-shadow: var(--shadow-subtle);
        }

        .faq-question-btn {
          width: 100%;
          background: none;
          border: none;
          padding: 1.4rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          gap: 1rem;
        }

        .faq-question-text {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .faq-chevron-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: transform var(--transition-fast), background var(--transition-fast);
          flex-shrink: 0;
        }

        .faq-item-open .faq-chevron-icon {
          transform: rotate(180deg);
          background: var(--bg-dark);
          color: #FFF;
        }

        .faq-answer-pane {
          padding: 0 1.75rem 1.5rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
          border-top: 1px solid var(--border-light);
          padding-top: 1.25rem;
        }

        .faq-category-tag {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-gold);
          display: inline-block;
          margin-top: 0.75rem;
        }

        .faq-footer-help {
          text-align: center;
          margin-top: 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .faq-footer-help p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
