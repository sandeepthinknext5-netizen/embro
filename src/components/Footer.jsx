import React, { useState } from 'react';
import { ArrowRight, Send, Sparkles, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigateSection, onOpenConsultation }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="luxury-footer">
      
      {/* Top Newsletter & Brand Bar */}
      <div className="footer-top-strip">
        <div className="container footer-top-container">
          
          <div className="footer-brand-side">
            <span className="brand-wordmark text-white">EMBROSHYAL</span>
            <p className="footer-brand-mission">
              “Beautifully designed products for beautifully lived spaces.”
            </p>
          </div>

          <div className="footer-newsletter-side">
            <h4 className="font-serif text-white">Join the Embroshyal Private Journal</h4>
            <p className="newsletter-sub">Receive seasonal lookbooks, preview invitations, and interior architectural insights.</p>

            {subscribed ? (
              <div className="newsletter-success animate-fade">
                <Sparkles size={16} className="text-gold" />
                <span>Thank you for joining our private circle.</span>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Main Multi-Column Links Section */}
      <div className="container footer-main-columns">
        
        {/* Col 1: Shop */}
        <div className="footer-col">
          <h4 className="footer-col-title">Shop Furniture</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => onNavigateSection('furniture?room=Living Room')}>Living Room Furniture</button></li>
            <li><button onClick={() => onNavigateSection('furniture?room=Bedroom')}>Bedroom Suites</button></li>
            <li><button onClick={() => onNavigateSection('furniture?room=Dining')}>Dining Tables & Chairs</button></li>
            <li><button onClick={() => onNavigateSection('furniture?filter=study')}>Home Office Desks</button></li>
            <li><button onClick={() => onNavigateSection('furniture?room=Bedroom')}>Kids Room Furniture</button></li>
            <li><button onClick={() => onNavigateSection('furniture')}>Outdoor & Balcony</button></li>
            <li><button onClick={() => onNavigateSection('furniture?filter=storage')}>Storage & Consoles</button></li>
            <li><button onClick={() => onNavigateSection('new-arrivals')}>New Arrivals</button></li>
            <li><button onClick={() => onNavigateSection('furniture?filter=bestsellers')}>Bestsellers</button></li>
            <li><button onClick={() => onNavigateSection('offers')}>Exclusive Offers</button></li>
          </ul>
        </div>

        {/* Col 2: Interiors */}
        <div className="footer-col">
          <h4 className="footer-col-title">Turnkey Interiors</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => onNavigateSection('interiors')}>Complete Home Interiors</button></li>
            <li><button onClick={() => onNavigateSection('interiors')}>Modular Kitchens</button></li>
            <li><button onClick={() => onNavigateSection('interiors')}>Bespoke Wardrobes</button></li>
            <li><button onClick={() => onNavigateSection('rooms')}>Living Room Design</button></li>
            <li><button onClick={() => onNavigateSection('rooms')}>Master Bedroom Suites</button></li>
            <li><button onClick={() => onNavigateSection('interiors')}>Custom Space Solutions</button></li>
            <li><button onClick={onOpenConsultation}>Book 3D Design Session</button></li>
            <li><button onClick={() => onNavigateSection('projects')}>Before & After Gallery</button></li>
          </ul>
        </div>

        {/* Col 3: Inspiration */}
        <div className="footer-col">
          <h4 className="footer-col-title">Inspiration & Ideas</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => onNavigateSection('inspiration')}>Design Trends 2026</button></li>
            <li><button onClick={() => onNavigateSection('inspiration')}>Material Buying Guides</button></li>
            <li><button onClick={() => onNavigateSection('inspiration')}>Living Room Styling Tips</button></li>
            <li><button onClick={() => onNavigateSection('inspiration')}>Space-Saving Solutions</button></li>
            <li><button onClick={() => onNavigateSection('projects')}>Completed Home Projects</button></li>
            <li><button onClick={() => onNavigateSection('inspiration')}>Customer Stories</button></li>
            <li><button onClick={() => onNavigateSection('faq')}>Furniture Care Guide</button></li>
          </ul>
        </div>

        {/* Col 4: Business & Trade */}
        <div className="footer-col">
          <h4 className="footer-col-title">Business & Trade</h4>
          <ul className="footer-links-list">
            <li><button onClick={onOpenConsultation}>Architect & Designer Program</button></li>
            <li><button onClick={onOpenConsultation}>Commercial Office Projects</button></li>
            <li><button onClick={onOpenConsultation}>Luxury Hospitality Solutions</button></li>
            <li><button onClick={onOpenConsultation}>Bulk & Real Estate Projects</button></li>
            <li><button onClick={onOpenConsultation}>Corporate Gifting</button></li>
            <li><button onClick={onOpenConsultation}>Custom Fabrication</button></li>
          </ul>
        </div>

        {/* Col 5: Help & Support */}
        <div className="footer-col">
          <h4 className="footer-col-title">Help & Support</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => onNavigateSection('faq')}>Order Tracking</button></li>
            <li><button onClick={() => onNavigateSection('faq')}>Frequently Asked Questions</button></li>
            <li><button onClick={() => onNavigateSection('faq')}>Delivery Timelines</button></li>
            <li><button onClick={() => onNavigateSection('faq')}>15-Day Return Policy</button></li>
            <li><button onClick={() => onNavigateSection('faq')}>10-Year Warranty Terms</button></li>
            <li><button onClick={() => onNavigateSection('faq')}>White-Glove Installation</button></li>
            <li><button onClick={onOpenConsultation}>Contact Support</button></li>
          </ul>
        </div>

        {/* Col 6: About Embroshyal */}
        <div className="footer-col">
          <h4 className="footer-col-title">About Embroshyal</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => onNavigateSection('collections')}>Our Atelier Story</button></li>
            <li><button onClick={() => onNavigateSection('inspiration')}>Artisanal Craftsmanship</button></li>
            <li><button onClick={() => onNavigateSection('inspiration')}>Sustainable Sourcing</button></li>
            <li><button onClick={() => onNavigateSection('stores')}>Experience Centres</button></li>
            <li><button onClick={() => onNavigateSection('faq')}>Press & Media</button></li>
            <li><button onClick={() => onNavigateSection('faq')}>Careers</button></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          
          <div className="footer-copyright">
            © 2026 EMBROSHYAL Atelier & Living Ltd. All Rights Reserved.
          </div>

          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span className="legal-dot">•</span>
            <a href="#">Terms & Conditions</a>
            <span className="legal-dot">•</span>
            <a href="#">Shipping Policy</a>
            <span className="legal-dot">•</span>
            <a href="#">Return Policy</a>
            <span className="legal-dot">•</span>
            <a href="#">Cookie Policy</a>
          </div>

          <div className="footer-social-icons">
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>

        </div>
      </div>

      <style>{`
        .luxury-footer {
          background-color: var(--bg-dark);
          color: var(--text-light);
          border-top: 1px solid var(--border-dark);
        }

        .footer-top-strip {
          padding: 4.5rem 0 3.5rem;
          border-bottom: 1px solid var(--border-dark);
        }

        .footer-top-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .footer-top-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .text-white {
          color: #FFF;
        }

        .footer-brand-mission {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: #D2CCC4;
          font-style: italic;
          margin-top: 0.75rem;
          max-width: 480px;
          line-height: 1.4;
        }

        .newsletter-sub {
          font-size: 0.85rem;
          color: #A8A29A;
          margin: 0.35rem 0 1.25rem;
        }

        .newsletter-form {
          display: flex;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-sm);
          overflow: hidden;
          max-width: 460px;
        }

        .newsletter-form input {
          flex: 1;
          background: none;
          border: none;
          padding: 0.85rem 1.2rem;
          color: #FFF;
          font-size: 0.88rem;
        }

        .newsletter-form input:focus {
          outline: none;
        }

        .newsletter-submit-btn {
          background: var(--accent-gold);
          color: #111;
          border: none;
          padding: 0 1.4rem;
          cursor: pointer;
          transition: background var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .newsletter-submit-btn:hover {
          background: var(--accent-gold-hover);
        }

        .newsletter-success {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: var(--accent-gold);
          padding: 0.75rem 0;
        }

        .footer-main-columns {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 2rem;
          padding: 4.5rem 0 3.5rem;
        }

        @media (max-width: 1200px) {
          .footer-main-columns {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }
        }

        @media (max-width: 650px) {
          .footer-main-columns {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        .footer-col-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: #FFF;
          margin-bottom: 1.25rem;
          font-weight: 500;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links-list button {
          background: none;
          border: none;
          padding: 0;
          text-align: left;
          font-size: 0.82rem;
          color: #A8A29A;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .footer-links-list button:hover {
          color: var(--accent-gold);
        }

        .footer-bottom-bar {
          background: #110F0E;
          padding: 1.75rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.78rem;
          color: #88827A;
        }

        .footer-bottom-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .footer-legal-links a {
          color: var(--accent-gold, #C29B38);
          transition: all var(--transition-fast);
        }

        .footer-legal-links a:hover {
          color: var(--accent-gold-hover, #D4AB47);
          text-decoration: underline;
        }

        .legal-dot {
          color: var(--accent-gold, #C29B38);
          opacity: 0.7;
        }

        .footer-social-icons {
          display: flex;
          gap: 1rem;
        }

        .footer-social-icons a {
          color: #A8A29A;
          transition: color var(--transition-fast);
        }

        .footer-social-icons a:hover {
          color: var(--accent-gold);
        }
      `}</style>
    </footer>
  );
}
