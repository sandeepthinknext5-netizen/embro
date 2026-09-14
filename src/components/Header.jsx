import React, { useState, useEffect } from 'react';
import { 
  Search, Heart, ShoppingBag, User, Phone, MapPin, 
  ChevronDown, Menu, X, Sparkles, Home, Briefcase, 
  ArrowRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import MegaMenu from './MegaMenu';

export default function Header({ onOpenSearch, onOpenConsultation, onOpenAuth, onNavigateSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAudienceMode, setActiveAudienceMode] = useState('home'); // 'home' | 'business'
  
  const { totalCount, setIsCartOpen } = useCart();
  const { wishlistCount, setIsWishlistOpen } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. For Home Category Navigation
  const homeNavLinks = [
    { label: 'Living room', key: 'living-room', urlSlug: 'living-room' },
    { label: 'Bedroom', key: 'bedroom', urlSlug: 'bedroom' },
    { label: 'Dining room', key: 'dining-room', urlSlug: 'dining-room' },
    { label: 'Office and Study', key: 'office-and-study', urlSlug: 'office-and-study' },
    { label: 'Modular Kitchens', key: 'modular-kitchen', urlSlug: 'modular-kitchen', isPopular: true },
    { label: 'All Products', key: 'all-products', urlSlug: 'all-products' },
    { label: 'Nook Magazine', key: 'nook', urlSlug: 'nook', badge: 'Journal', isEditorial: true }
  ];

  // 2. For Business Category Navigation (Exact categories requested by user)
  const businessNavLinks = [
    { label: 'Workspace', key: 'workspace', urlSlug: 'workspace' },
    { label: 'Education', key: 'education', urlSlug: 'education' },
    { label: 'Healthcare', key: 'healthcare', urlSlug: 'healthcare' },
    { label: 'Laboratory', key: 'laboratory', urlSlug: 'laboratory' },
    { label: 'SME', key: 'sme', urlSlug: 'sme' },
    { label: 'Products', key: 'products', urlSlug: 'products' },
    { label: 'Projects', key: 'projects', urlSlug: 'projects' },
    { label: 'AV Solutions', key: 'av-solutions', urlSlug: 'av-solutions' },
    { label: 'Wellness at Work', key: 'wellness', urlSlug: 'wellness' }
  ];

  const currentNavLinks = activeAudienceMode === 'home' ? homeNavLinks : businessNavLinks;

  const handleNavClick = (key) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    onNavigateSection(key);
  };

  const handleModeSwitch = (mode) => {
    setActiveAudienceMode(mode);
    setActiveMegaMenu(null);
  };

  return (
    <header className="header-wrapper" onMouseLeave={() => setActiveMegaMenu(null)}>
      
      {/* Top Luxury Utility Bar */}
      <div className={`top-utility-bar ${isScrolled ? 'utility-bar-hidden' : ''}`}>
        <div className="utility-container">
          
          <div className="utility-left">
            {/* High-End Mode Segment Switcher */}
            <div className="mode-segmented-pill">
              <button 
                className={`mode-seg-btn ${activeAudienceMode === 'home' ? 'active-mode' : ''}`}
                onClick={() => handleModeSwitch('home')}
                title="Shop Residential Interiors & Furniture"
              >
                <Home size={14} className="mode-seg-icon" />
                <span>RESIDENTIAL</span>
              </button>
              <button 
                className={`mode-seg-btn ${activeAudienceMode === 'business' ? 'active-mode' : ''}`}
                onClick={() => handleModeSwitch('business')}
                title="Shop Commercial, Workspace & Institutional Solutions"
              >
                <Briefcase size={14} className="mode-seg-icon" />
                <span>COMMERCIAL</span>
              </button>
            </div>

            <span className="utility-divider">•</span>
            <span className="utility-tag">
              <Sparkles size={11} className="text-gold" /> 
              {activeAudienceMode === 'home' 
                ? 'Free White-Glove Installation Above ₹50,000' 
                : 'Turnkey Enterprise Execution & B2B GST Invoicing'}
            </span>
            <span className="utility-divider">•</span>
            <span>{activeAudienceMode === 'home' ? '15-Day Trial' : 'BIS & BIFMA Certified'}</span>
            <span className="utility-divider">•</span>
            <span>10-Year Warranty</span>
          </div>

          <div className="utility-right">
            <button className="utility-link" onClick={() => onNavigateSection('faq')}>Track Order</button>
            <span className="utility-divider">|</span>
            <button className="utility-link" onClick={() => onNavigateSection('stores')}>
              <MapPin size={11} /> Store Locator
            </button>
            <span className="utility-divider">|</span>
            <button className="utility-link" onClick={() => onNavigateSection('consultation')}>
              <Phone size={11} /> Concierge
            </button>
          </div>

        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav className={`main-navbar ${isScrolled ? 'scrolled-navbar' : ''}`}>
        <div className="navbar-grid-wrapper">
          
          {/* 1. Left Column: Logo & Mobile Toggle */}
          <div className="nav-left-col">
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <a 
              href="#" 
              className="brand-logo" 
              onClick={(e) => { e.preventDefault(); onNavigateSection('home'); }}
            >
              <img 
                src="images/logo.png" 
                alt="EMBROSHYAL — We Are Exceptions" 
                className="h-10 sm:h-14 md:h-[65px] w-auto object-contain py-0.5" 
              />
            </a>
          </div>

          {/* 2. Center Column: Dynamic Category Navigation Links */}
          <div className="nav-center-col">
            <ul className="nav-links-list">
              {currentNavLinks.map((item) => (
                <li 
                  key={item.key + activeAudienceMode} 
                  className={`nav-item ${activeMegaMenu === item.key ? 'active-nav-item' : ''}`}
                  onMouseEnter={() => setActiveMegaMenu(item.key)}
                >
                  <button 
                    className={`nav-btn ${item.isEditorial ? 'nav-btn-editorial' : ''}`}
                    onClick={() => handleNavClick(item.key)}
                  >
                    <span className="nav-btn-label">{item.label}</span>
                    
                    {item.badge && (
                      <span className="nav-link-badge badge-subtle">
                        {item.badge}
                      </span>
                    )}

                    <ChevronDown size={10} className="nav-chevron" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Right Column: Actions & Consultation CTA */}
          <div className="nav-right-col">
            <button 
              className="action-icon-btn" 
              onClick={onOpenSearch} 
              aria-label="Search" 
              title="Search catalog"
            >
              <Search size={17} />
            </button>

            <button 
              className="action-icon-btn" 
              onClick={() => setIsWishlistOpen(true)} 
              aria-label="Wishlist"
              title="Saved pieces"
            >
              <Heart size={17} />
              {wishlistCount > 0 && <span className="action-badge">{wishlistCount}</span>}
            </button>

            <button 
              className="action-icon-btn" 
              onClick={onOpenAuth} 
              aria-label="Account"
              title="Account & Orders"
            >
              <User size={17} />
            </button>

            <button 
              className="action-icon-btn cart-btn-icon" 
              onClick={() => setIsCartOpen(true)} 
              aria-label="Cart"
              title="Shopping Bag"
            >
              <ShoppingBag size={17} />
              {totalCount > 0 && <span className="action-badge cart-badge">{totalCount}</span>}
            </button>
          </div>

        </div>

        {/* Mega Menu Dropdown Overlay */}
        {activeMegaMenu && (
          <MegaMenu 
            activeKey={activeMegaMenu} 
            onClose={() => setActiveMegaMenu(null)}
            onNavigate={(section) => {
              setActiveMegaMenu(null);
              onNavigateSection(section);
            }}
          />
        )}
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-header">
            <span 
              className="brand-wordmark" 
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection('home');
              }}
            >
              EMBROSHYAL
            </span>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu"><X size={22} /></button>
          </div>

          {/* Mode Switcher inside Mobile Drawer */}
          <div className="mobile-mode-tabs">
            <button 
              className={`mobile-mode-tab ${activeAudienceMode === 'home' ? 'active' : ''}`}
              onClick={() => setActiveAudienceMode('home')}
            >
              <Home size={15} />
              <span>RESIDENTIAL</span>
            </button>
            <button 
              className={`mobile-mode-tab ${activeAudienceMode === 'business' ? 'active' : ''}`}
              onClick={() => setActiveAudienceMode('business')}
            >
              <Briefcase size={15} />
              <span>COMMERCIAL</span>
            </button>
          </div>

          <ul className="mobile-nav-list">
            {currentNavLinks.map((item) => (
              <li key={item.key}>
                <button 
                  className="mobile-nav-link"
                  onClick={() => handleNavClick(item.key)}
                >
                  <span className="mobile-link-text">
                    {item.label}
                    {item.badge && <span className="mobile-link-badge">{item.badge}</span>}
                  </span>
                  <ArrowRight size={15} className="text-gold" />
                </button>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <button 
              className="btn-gold w-full mb-3"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
            >
              {activeAudienceMode === 'home' ? 'Request 3D Design Session' : 'Request Corporate Consultation'}
            </button>
            <div className="mobile-utility-links">
              <button onClick={() => { setMobileMenuOpen(false); onNavigateSection('stores'); }}>Store Locator</button>
              <button onClick={() => { setMobileMenuOpen(false); onNavigateSection('faq'); }}>Track Order</button>
              <button onClick={() => { setMobileMenuOpen(false); onNavigateSection('faq'); }}>Concierge Support</button>
            </div>
          </div>
        </div>
      )}

      {/* Header Inline Styles */}
      <style>{`
        .header-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 900;
          background: var(--bg-primary);
        }

        .top-utility-bar {
          background-color: #12100E;
          color: #B8B0A5;
          font-size: 0.70rem;
          padding: 0.32rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .utility-bar-hidden {
          height: 0;
          padding: 0;
          opacity: 0;
          border-bottom: none;
        }

        .utility-container {
          max-width: 1680px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          white-space: nowrap;
        }

        .utility-left {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        /* Mode Segmented Pill */
        .mode-segmented-pill {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(194, 155, 56, 0.35);
          border-radius: 20px;
          padding: 2px 3px;
          gap: 2px;
        }

        .mode-seg-btn {
          background: transparent;
          border: none;
          color: #D6CEC5;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 3px 10px;
          border-radius: 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
        }

        .mode-seg-btn:hover {
          color: #FFF;
        }

        .mode-seg-btn.active-mode {
          background: #C29B38;
          color: #12100E;
          box-shadow: 0 2px 8px rgba(194, 155, 56, 0.4);
        }

        .mode-seg-icon {
          flex-shrink: 0;
        }

        .text-gold {
          color: var(--accent-gold);
        }

        .utility-tag {
          color: #FAF8F5;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-weight: 500;
        }

        .utility-divider {
          color: rgba(255, 255, 255, 0.18);
        }

        .utility-right {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .utility-link {
          background: none;
          border: none;
          color: #B8B0A5;
          font-size: 0.70rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: color var(--transition-fast);
        }

        .utility-link:hover {
          color: var(--accent-gold);
        }

        /* 3-Column Balanced Layout Navbar */
        .main-navbar {
          background-color: rgba(250, 248, 245, 0.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-light);
          transition: all var(--transition-medium);
          position: relative;
        }

        .scrolled-navbar {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          background-color: rgba(255, 255, 255, 0.99);
        }

        .navbar-grid-wrapper {
          max-width: 1680px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
          gap: 0.65rem;
        }

        .scrolled-navbar .navbar-grid-wrapper {
          height: 60px;
        }

        /* 1. Left Col */
        .nav-left-col {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .brand-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-decoration: none;
        }

        .brand-wordmark {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          letter-spacing: 0.20em;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1;
        }

        .brand-tagline {
          font-size: 0.46rem;
          letter-spacing: 0.26em;
          font-weight: 600;
          color: var(--accent-gold);
          margin-top: 2px;
          text-transform: uppercase;
        }

        /* 2. Center Col: Nav Links */
        .nav-center-col {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          min-width: 0;
          padding: 0 0.25rem;
        }

        .nav-links-list {
          display: flex;
          align-items: center;
          justify-content: center;
          list-style: none;
          gap: clamp(0.15rem, 0.65vw, 0.85rem);
          margin: 0;
          padding: 0;
          flex-wrap: nowrap;
        }

        .nav-item {
          position: relative;
          flex-shrink: 0;
        }

        .nav-btn {
          background: none;
          border: none;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.45rem 0.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: color var(--transition-fast);
          white-space: nowrap;
          position: relative;
        }

        .nav-btn-label {
          white-space: nowrap;
        }

        .nav-link-badge {
          font-size: 0.52rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 1px 4px;
          border-radius: 3px;
          line-height: 1.1;
          margin-left: 1px;
        }

        .badge-subtle {
          background-color: rgba(0, 0, 0, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-light);
        }

        .nav-chevron {
          transition: transform var(--transition-fast);
          opacity: 0.4;
          flex-shrink: 0;
        }

        .nav-item:hover .nav-btn,
        .active-nav-item .nav-btn {
          color: var(--accent-gold);
        }

        .nav-item:hover .nav-chevron,
        .active-nav-item .nav-chevron {
          transform: rotate(180deg);
          opacity: 1;
          color: var(--accent-gold);
        }

        /* 3. Right Col: Action Icons & Unified CTA */
        .nav-right-col {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.45rem;
          flex-shrink: 0;
        }

        .action-icon-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          position: relative;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          transition: all var(--transition-fast);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .action-icon-btn:hover {
          color: var(--accent-gold);
          background-color: var(--bg-secondary);
        }

        .action-badge {
          position: absolute;
          top: -1px;
          right: -1px;
          background-color: var(--accent-clay);
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

        .cart-badge {
          background-color: var(--bg-dark);
        }

        .header-cta-btn {
          height: 34px;
          padding: 0 0.9rem;
          background-color: #C29B38;
          color: #161412;
          border: 1px solid #C29B38;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          margin-left: 0.2rem;
          box-shadow: 0 4px 12px rgba(194, 155, 56, 0.22);
          transition: all var(--transition-medium);
        }

        .header-cta-btn:hover {
          background-color: #D4AB47;
          border-color: #D4AB47;
          color: #161412;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(194, 155, 56, 0.35);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 4px;
        }

        @media (max-width: 1360px) {
          .navbar-grid-wrapper {
            padding: 0 0.8rem;
            gap: 0.4rem;
          }
          .nav-links-list {
            gap: 0.25rem;
          }
          .nav-btn {
            font-size: 13.5px;
            padding: 0.35rem 0.15rem;
          }
          .header-cta-btn {
            padding: 0 0.7rem;
            font-size: 0.65rem;
          }
        }

        @media (max-width: 1120px) {
          .nav-center-col {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .header-cta-btn {
            display: none;
          }
          .top-utility-bar {
            display: none;
          }
          .navbar-grid-wrapper {
            justify-content: space-between;
          }
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 88%;
          max-width: 375px;
          height: 100vh;
          background: var(--bg-card);
          z-index: 9999;
          box-shadow: var(--shadow-dark);
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1.25rem;
          animation: slideInRight 0.3s ease;
          overflow-y: auto;
        }

        .mobile-drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-light);
        }

        .mobile-mode-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          background: var(--bg-secondary);
          padding: 4px;
          border-radius: 8px;
          margin-top: 1rem;
        }

        .mobile-mode-tab {
          background: none;
          border: none;
          padding: 0.6rem 0.5rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mobile-mode-tab.active {
          background: #C29B38;
          color: #12100E;
          box-shadow: 0 2px 8px rgba(194, 155, 56, 0.3);
        }

        .mobile-nav-list {
          list-style: none;
          padding: 1rem 0;
          flex: 1;
        }

        .mobile-nav-link {
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          padding: 0.85rem 0;
          font-size: 0.98rem;
          font-weight: 500;
          color: var(--text-primary);
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-light);
          cursor: pointer;
        }

        .mobile-link-text {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .mobile-link-badge {
          font-size: 0.58rem;
          background: rgba(194, 155, 56, 0.18);
          color: #94711D;
          border: 1px solid rgba(194, 155, 56, 0.4);
          padding: 1px 5px;
          border-radius: 4px;
          font-weight: 700;
        }

        .mobile-drawer-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }

        .mobile-utility-links {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
        }

        .mobile-utility-links button {
          background: none;
          border: none;
          font-size: 0.75rem;
          color: var(--text-secondary);
          cursor: pointer;
        }
      `}</style>
    </header>
  );
}