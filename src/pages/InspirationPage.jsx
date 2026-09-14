import React from 'react';
import DesignInspiration from '../components/DesignInspiration';

export default function InspirationPage({ onNavigate }) {
  return (
    <div className="page-wrapper animate-fade">
      {/* Banner */}
      <div className="inspiration-page-hero">
        <div className="container">
          <div className="breadcrumb-trail">
            <button onClick={() => onNavigate('home')}>Home</button>
            <span>/</span>
            <span>Design Inspiration</span>
          </div>
          <span className="section-label text-gold">The Embroshyal Journal</span>
          <h1 className="editorial-heading-1 text-white">Ideas for Beautiful Living</h1>
          <p className="insp-page-sub">
            Essays on architectural proportion, material histories, lighting temperatures and the subtle nuances that turn interiors into timeless sanctuaries.
          </p>
        </div>
      </div>

      <DesignInspiration />

      <style>{`
        .inspiration-page-hero {
          background: linear-gradient(to right, rgba(22, 20, 18, 0.94), rgba(22, 20, 18, 0.75)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          padding: 6rem 0 5rem;
          color: #FFF;
        }

        .insp-page-sub {
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
