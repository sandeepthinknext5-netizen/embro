import React, { useState } from 'react';
import { CheckCircle2, Phone, Calendar, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function DesignConsultation({ onOpenModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    requirement: 'Complete Home Interiors',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    'Personalised 1-on-1 consultation with senior interior architect',
    'Laser site measurement & ergonomic space planning',
    '3D photorealistic virtual reality visualization',
    'Curated material palette & tactile swatch box',
    'Transparent itemized quote with zero hidden charges',
    '10-Year structural warranty & white-glove installation'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding consultation-section" id="consultation">
      <div className="container">
        
        <div className="consultation-split-card">
          
          {/* Left: Value Proposition */}
          <div className="consultation-info-pane">
            <span className="section-label">Complimentary Design Service</span>
            <h2 className="editorial-heading-2 text-white">Have a Space in Mind? Let's Design It.</h2>
            <p className="consultation-copy">
              Speak with an Embroshyal design expert and turn your ideas into a beautifully planned space with architectural precision and timeless craftsmanship.
            </p>

            <ul className="consultation-benefits-list">
              {benefits.map((benefit, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="consultation-hotline">
              <Phone size={18} className="text-gold" />
              <div>
                <span>Prefer to speak immediately?</span>
                <strong>Call Design Concierge: +91 (022) 8492-3000</strong>
              </div>
            </div>
          </div>

          {/* Right: Conversion Form */}
          <div className="consultation-form-pane">
            {submitted ? (
              <div className="consultation-success-box animate-fade">
                <div className="success-icon-circle">
                  <Sparkles size={28} />
                </div>
                <h3 className="font-serif">Your Consultation is Confirmed!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Our senior spatial architect in <strong>{formData.city}</strong> will contact you at <strong>{formData.phone}</strong> within 2 business hours with a preliminary 3D concept deck.
                </p>
                <button 
                  className="btn-primary mt-3"
                  onClick={() => setSubmitted(false)}
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form className="consultation-form" onSubmit={handleSubmit}>
                <h3 className="form-title font-serif">Book a Free Design Consultation</h3>
                <p className="form-subtitle">Fill in your details below and an architect will reach out.</p>

                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Ananya Singhania"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>City *</label>
                    <select 
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    >
                      <option value="Mumbai">Mumbai</option>
                      <option value="New Delhi">New Delhi & NCR</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Pune">Pune</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Goa">Goa</option>
                      <option value="Other">Other City</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>What are you looking for? *</label>
                    <select 
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    >
                      <option value="Complete Home Interiors">Complete Home Interiors</option>
                      <option value="Modular Kitchen Design">Modular Kitchen Design</option>
                      <option value="Wardrobe & Storage Suites">Wardrobe & Storage Suites</option>
                      <option value="Living & Dining Furniture">Living & Dining Furniture</option>
                      <option value="Master Bedroom Suite">Master Bedroom Suite</option>
                      <option value="Commercial / Office Space">Commercial / Office Space</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-gold w-full mt-2">
                  Get Started • Book Free Session <ArrowRight size={16} />
                </button>

                <p className="form-privacy-note">
                  🔒 100% Confidential. Zero spam. We never share your personal information.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        .consultation-section {
          background-color: var(--bg-primary);
        }

        .consultation-split-card {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          background: var(--bg-dark);
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-dark);
        }

        @media (max-width: 980px) {
          .consultation-split-card {
            grid-template-columns: 1fr;
          }
        }

        .consultation-info-pane {
          padding: 3.5rem;
          display: flex;
          flex-direction: column;
          background: radial-gradient(circle at top left, #28221D 0%, #161412 100%);
        }

        .text-white {
          color: #FFF;
        }

        .consultation-copy {
          font-size: 1.05rem;
          color: #D5CEC6;
          line-height: 1.65;
          margin: 1.25rem 0 2rem;
        }

        .consultation-benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2.5rem;
        }

        .consultation-benefits-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: #E6E0D8;
        }

        .consultation-hotline {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-sm);
        }

        .consultation-hotline span {
          display: block;
          font-size: 0.75rem;
          color: #B5AFA8;
        }

        .consultation-hotline strong {
          font-size: 0.95rem;
          color: #FFF;
        }

        .consultation-form-pane {
          background: var(--bg-card);
          padding: 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 600px) {
          .consultation-info-pane, .consultation-form-pane {
            padding: 2rem 1.5rem;
          }
        }

        .form-title {
          font-size: 1.6rem;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .form-subtitle {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
        }

        .form-group {
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--text-primary);
        }

        .form-group input, .form-group select {
          padding: 0.85rem 1rem;
          border: 1px solid var(--border-medium);
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          color: var(--text-primary);
          transition: border-color var(--transition-fast);
        }

        .form-group input:focus, .form-group select:focus {
          outline: none;
          border-color: var(--accent-gold);
          background: #FFF;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 500px) {
          .form-grid-2 {
            grid-template-columns: 1fr;
          }
        }

        .w-full {
          width: 100%;
        }

        .form-privacy-note {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-align: center;
          margin-top: 1rem;
        }

        .consultation-success-box {
          text-align: center;
          padding: 2rem 1rem;
        }

        .success-icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(194, 155, 56, 0.15);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
        }

        .consultation-success-box h3 {
          font-size: 1.6rem;
          margin-bottom: 0.75rem;
        }

        .consultation-success-box p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
