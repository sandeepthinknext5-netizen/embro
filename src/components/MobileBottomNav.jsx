import React from 'react';
import { Home, Grid, Search, Heart, ShoppingBag, Calendar } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function MobileBottomNav({ onNavigate, onOpenSearch, onOpenConsultation }) {
  const { totalCount, setIsCartOpen } = useCart();
  const { wishlistCount, setIsWishlistOpen } = useWishlist();

  return (
    <>
      {/* Floating Book Consultation Pill for Mobile */}
      <button 
        className="mobile-floating-consult-btn" 
        onClick={onOpenConsultation}
        aria-label="Book a free consultation"
      >
        <Calendar size={15} />
        <span>Book Consultation</span>
      </button>

      {/* Sticky Bottom Navigation Bar */}
      <nav className="mobile-bottom-navbar">
        <button className="mobile-bottom-tab" onClick={() => onNavigate('hero')}>
          <Home size={19} />
          <span>Home</span>
        </button>

        <button className="mobile-bottom-tab" onClick={() => onNavigate('furniture')}>
          <Grid size={19} />
          <span>Catalog</span>
        </button>

        <button className="mobile-bottom-tab" onClick={onOpenSearch}>
          <Search size={19} />
          <span>Search</span>
        </button>

        <button className="mobile-bottom-tab" onClick={() => setIsWishlistOpen(true)}>
          <div className="mobile-tab-icon-wrap">
            <Heart size={19} />
            {wishlistCount > 0 && <span className="mobile-tab-badge">{wishlistCount}</span>}
          </div>
          <span>Wishlist</span>
        </button>

        <button className="mobile-bottom-tab" onClick={() => setIsCartOpen(true)}>
          <div className="mobile-tab-icon-wrap">
            <ShoppingBag size={19} />
            {totalCount > 0 && <span className="mobile-tab-badge">{totalCount}</span>}
          </div>
          <span>Cart</span>
        </button>
      </nav>

      <style>{`
        .mobile-floating-consult-btn {
          display: none;
          position: fixed;
          bottom: 74px;
          right: 16px;
          background: var(--accent-gold);
          color: #111;
          border: none;
          padding: 0.65rem 1.1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          z-index: 850;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
        }

        .mobile-bottom-navbar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 62px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid var(--border-light);
          z-index: 860;
          grid-template-columns: repeat(5, 1fr);
          align-items: center;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.05);
        }

        @media (max-width: 900px) {
          .mobile-bottom-navbar {
            display: grid;
          }
          .mobile-floating-consult-btn {
            display: inline-flex;
          }
        }

        .mobile-bottom-tab {
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          color: var(--text-secondary);
          font-size: 0.65rem;
          font-weight: 500;
          cursor: pointer;
        }

        .mobile-bottom-tab:hover {
          color: var(--accent-gold);
        }

        .mobile-tab-icon-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-tab-badge {
          position: absolute;
          top: -4px;
          right: -8px;
          background: var(--accent-clay);
          color: #FFF;
          font-size: 0.58rem;
          font-weight: 700;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
