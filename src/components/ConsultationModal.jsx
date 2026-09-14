import React, { useState } from 'react';
import { X, Sparkles, Calendar, CheckCircle2, ArrowRight, Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    roomType: 'Complete Home Interior',
    budget: '₹15L – ₹30L',
    preferredDate: '',
    preferredSlot: 'Morning (11:00 AM – 2:00 PM)',
    floorPlanNote: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="consult-modal-box animate-fade" onClick={(e) => e.stopPropagation()}>
        
        <button className="consult-close-btn" onClick={onClose} aria-label="Close consultation modal">
          <X size={24} />
        </button>

        {step === 1 ? (
          <form className="consult-modal-form" onSubmit={handleSubmit}>
            <div className="consult-modal-top">
              <span className="section-label">Complimentary 3D Consultation</span>
              <h2 className="editorial-heading-2">Design Your Dream Sanctuary</h2>
              <p className="editorial-subheading">
                Schedule a 1-on-1 session with our senior interior architects. Available in-studio, on-site or via 3D virtual meet.
              </p>
            </div>

            <div className="consult-grid-2">
              <div className="form-group">
                <label>Your Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Radhika Singhania"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Contact Number *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+91 98200 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="consult-grid-2">
              <div className="form-group">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="radhika@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

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
                  <option value="Goa">Goa</option>
                  <option value="Other">Other City</option>
                </select>
              </div>
            </div>

            <div className="consult-grid-2">
              <div className="form-group">
                <label>Scope of Design *</label>
                <select 
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                >
                  <option value="Complete Home Interior">Complete Home Interior (3BHK / 4BHK / Villa)</option>
                  <option value="Modular Kitchen Suite">Modular Kitchen Suite</option>
                  <option value="Living & Dining Lounge">Living & Dining Lounge</option>
                  <option value="Master Bedroom & Walk-in Closet">Master Bedroom & Walk-in Closet</option>
                  <option value="Commercial / Office Suite">Commercial / Executive Office</option>
                </select>
              </div>

              <div className="form-group">
                <label>Estimated Project Budget *</label>
                <select 
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option value="₹5L – ₹15L">₹5L – ₹15L (Room or Modular Kitchen)</option>
                  <option value="₹15L – ₹30L">₹15L – ₹30L (Complete 2BHK/3BHK)</option>
                  <option value="₹30L – ₹60L">₹30L – ₹60L (Luxury Penthouse)</option>
                  <option value="₹60L+">₹60L+ (Bespoke Villa / Estate)</option>
                </select>
              </div>
            </div>

            <div className="consult-grid-2">
              <div className="form-group">
                <label>Preferred Date</label>
                <input 
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Time Window</label>
                <select 
                  value={formData.preferredSlot}
                  onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                >
                  <option value="Morning (11:00 AM – 2:00 PM)">Morning (11:00 AM – 2:00 PM)</option>
                  <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                  <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-gold w-full mt-3">
              Confirm 3D Design Session <ArrowRight size={16} />
            </button>

            <div className="consult-trust-footer">
              <span>✓ Includes 3D VR renders</span>
              <span>•</span>
              <span>✓ Laser site measurement</span>
              <span>•</span>
              <span>✓ Zero consultation fees</span>
            </div>
          </form>
        ) : (
          <div className="consult-confirmation-pane animate-fade text-center">
            <div className="consult-success-badge">
              <Sparkles size={36} className="text-gold" />
            </div>

            <h2 className="confirmation-title font-serif">Consultation Booked Successfully</h2>
            <p className="confirmation-sub">
              Thank you, <strong>{formData.name}</strong>. Your appointment for <strong>{formData.roomType}</strong> in <strong>{formData.city}</strong> has been scheduled.
            </p>

            <div className="consult-summary-card">
              <div className="conf-row">
                <span>Selected Slot:</span>
                <strong>{formData.preferredDate || 'Upcoming Earliest'} • {formData.preferredSlot}</strong>
              </div>
              <div className="conf-row">
                <span>Assigned Architect:</span>
                <span>Senior Spatial Architect, Embroshyal Atelier</span>
              </div>
              <div className="conf-row">
                <span>Consultation Mode:</span>
                <span>Flagship Studio Gallery & 3D Interactive Virtual Deck</span>
              </div>
            </div>

            <button className="btn-primary mt-3" onClick={onClose}>
              Return to Website
            </button>
          </div>
        )}

      </div>

      <style>{`
        .consult-modal-box {
          background: #FFFFFF;
          width: 92%;
          max-width: 780px;
          max-height: 92vh;
          overflow-y: auto;
          border-radius: 8px;
          padding: 3.5rem 3.5rem;
          position: relative;
          box-shadow: 0 25px 60px rgba(18, 16, 14, 0.25);
          border: 1px solid rgba(194, 155, 56, 0.2);
        }

        @media (max-width: 700px) {
          .consult-modal-box {
            padding: 2.25rem 1.5rem;
          }
        }

        .consult-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(0, 0, 0, 0.04);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .consult-close-btn:hover {
          background: rgba(194, 155, 56, 0.15);
          color: var(--accent-gold);
          transform: rotate(90deg);
        }

        .consult-modal-top {
          margin-bottom: 2.25rem;
          text-align: left;
        }

        .consult-modal-top .section-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-gold, #C29B38);
          display: block;
          margin-bottom: 0.4rem;
        }

        .consult-modal-top .editorial-heading-2 {
          font-family: var(--font-serif);
          font-size: 2.1rem;
          color: var(--text-primary, #161412);
          margin-bottom: 0.6rem;
          line-height: 1.2;
        }

        .consult-modal-top .editorial-subheading {
          font-size: 0.95rem;
          color: var(--text-secondary, #5E5854);
          line-height: 1.6;
        }

        .consult-modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .consult-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 600px) {
          .consult-grid-2 {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-primary, #1E1C1A);
        }

        .form-group input,
        .form-group select {
          height: 52px;
          padding: 0 1.15rem;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-primary, #1E1C1A);
          background-color: var(--bg-primary, #FAF8F5);
          border: 1.5px solid var(--border-medium, #E2DBD2);
          border-radius: 4px;
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
        }

        .form-group input::placeholder {
          color: #A39D96;
        }

        .form-group input:focus,
        .form-group select:focus {
          background-color: #FFFFFF;
          border-color: var(--accent-gold, #C29B38);
          box-shadow: 0 0 0 3px rgba(194, 155, 56, 0.15);
        }

        .btn-gold.w-full {
          width: 100%;
          height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 4px;
          background: #C29B38;
          color: #12100E;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(194, 155, 56, 0.28);
          transition: all 0.25s ease;
          margin-top: 0.75rem;
        }

        .btn-gold.w-full:hover {
          background: #D4AB47;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(194, 155, 56, 0.38);
        }

        .consult-trust-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary, #5E5854);
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-light, #EDE7DE);
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }

        .consult-success-badge {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(194, 155, 56, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .consult-summary-card {
          background: var(--bg-primary, #FAF8F5);
          padding: 1.75rem;
          border-radius: 6px;
          border: 1px solid var(--border-light, #EDE7DE);
          text-align: left;
          font-size: 0.9rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin: 1.75rem 0;
        }

        .conf-row {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          padding-bottom: 0.5rem;
        }

        .conf-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
