import React from 'react';
import StoreLocator from '../components/StoreLocator';

export default function StoresPage({ onNavigate, onOpenConsultation }) {
  return (
    <div className="page-wrapper animate-fade">
      <div className="stores-page-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Experience Centres</span>
          </div>
          <span className="section-label text-gold">Physical Touchpoints</span>
          <h1 className="editorial-heading-1 text-white">Experience Embroshyal in Person</h1>
          <p className="stores-page-sub">
            Touch genuine Italian leathers, test the comfort of ergonomic seating and review marble slabs at our flagship galleries across India.
          </p>
        </div>
      </div>

      <StoreLocator onOpenConsultation={onOpenConsultation} />

      <style>{`
        .stores-page-hero {
          background: linear-gradient(to right, rgba(22, 20, 18, 0.94), rgba(22, 20, 18, 0.75)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          padding: 6rem 0 5rem;
          color: #FFF;
        }

        .stores-page-sub {
          font-size: 1.15rem;
          color: #D5CEC6;
          max-width: 700px;
          margin-top: 1rem;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}
