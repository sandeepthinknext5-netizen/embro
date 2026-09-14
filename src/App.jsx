import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

import Header from './components/Header';
import Footer from './components/Footer';

/* Dedicated Separate Pages */
import HomePage from './pages/HomePage';
import FurniturePage from './pages/FurniturePage';
import InteriorsPage from './pages/InteriorsPage';
import RoomsPage from './pages/RoomsPage';
import CollectionsPage from './pages/CollectionsPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import InspirationPage from './pages/InspirationPage';
import OffersPage from './pages/OffersPage';
import ProjectsPage from './pages/ProjectsPage';
import StoresPage from './pages/StoresPage';
import FAQPage from './pages/FAQPage';
import ModularKitchensPage from './pages/ModularKitchensPage';

/* Commercial & Institutional B2B Dedicated Pages */
import WorkspacePage from './pages/WorkspacePage';
import EducationPage from './pages/EducationPage';
import HealthcarePage from './pages/HealthcarePage';
import LaboratoryPage from './pages/LaboratoryPage';
import SMEPage from './pages/SMEPage';
import ProductsPage from './pages/ProductsPage';
import AVSolutionsPage from './pages/AVSolutionsPage';
import WellnessPage from './pages/WellnessPage';

/* Drawers & Modals */
import SearchDrawer from './components/SearchDrawer';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import CheckoutModal from './components/CheckoutModal';
import ConsultationModal from './components/ConsultationModal';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (pageKey) => {
    window.location.hash = pageKey;
    setCurrentPage(pageKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (id) => {
    setSelectedProductId(id);
  };

  const renderActivePage = () => {
    const basePage = currentPage.split('?')[0];
    switch (basePage) {
      /* Commercial & B2B Institutional Pages */
      case 'workspace':
        return (
          <WorkspacePage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );

      case 'education':
        return (
          <EducationPage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );

      case 'healthcare':
        return (
          <HealthcarePage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );

      case 'laboratory':
        return (
          <LaboratoryPage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );

      case 'sme':
        return (
          <SMEPage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );

      case 'products':
      case 'all-products':
        return (
          <ProductsPage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onQuickViewProduct={handleSelectProduct}
          />
        );

      case 'projects':
        return (
          <ProjectsPage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );

      case 'av-solutions':
      case 'avsolutions':
        return (
          <AVSolutionsPage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );

      case 'wellness':
      case 'wellness-at-work':
        return (
          <WellnessPage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );

      case 'modular-kitchen':
      case 'kitchens':
        return (
          <ModularKitchensPage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );

      /* Residential Home Pages */
      case 'living-room':
      case 'bedroom':
      case 'dining-room':
      case 'office-and-study':
      case 'furniture':
        return (
          <FurniturePage 
            onQuickViewProduct={handleSelectProduct}
            onNavigate={navigateToPage}
          />
        );

      case 'interiors':
        return (
          <InteriorsPage 
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onNavigate={navigateToPage}
          />
        );

      case 'rooms':
        return (
          <RoomsPage 
            onQuickViewProduct={handleSelectProduct}
            onNavigate={navigateToPage}
          />
        );

      case 'collections':
        return (
          <CollectionsPage 
            onQuickViewProduct={handleSelectProduct}
            onNavigate={navigateToPage}
          />
        );

      case 'new-arrivals':
        return (
          <NewArrivalsPage 
            onQuickViewProduct={handleSelectProduct}
            onNavigate={navigateToPage}
          />
        );

      case 'inspiration':
      case 'nook':
        return (
          <InspirationPage 
            onNavigate={navigateToPage}
          />
        );

      case 'offers':
        return (
          <OffersPage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );

      case 'stores':
        return (
          <StoresPage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );

      case 'faq':
        return (
          <FAQPage 
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );

      default:
        return (
          <HomePage 
            onQuickViewProduct={handleSelectProduct}
            onNavigate={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        );
    }
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="embroshyal-app">
          
          {/* Header & Sticky Utility Bar */}
          <Header 
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenAuth={() => setIsConsultationOpen(true)}
            onNavigateSection={navigateToPage}
          />

          {/* Animated Page Transitions via Motion Frame CSS */}
          <main key={currentPage} className="page-motion-frame">
            {renderActivePage()}
          </main>

          {/* Luxury Multi-Column Footer */}
          <Footer 
            onNavigateSection={navigateToPage}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />

          {/* Drawers & Modals */}
          <SearchDrawer 
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onSelectProduct={handleSelectProduct}
            onSelectCategory={() => navigateToPage('furniture')}
          />

          {selectedProductId && (
            <ProductDetailModal 
              productId={selectedProductId}
              onClose={() => setSelectedProductId(null)}
              onOpenConsultation={() => {
                setSelectedProductId(null);
                setIsConsultationOpen(true);
              }}
            />
          )}

          <CartDrawer 
            onExploreFurniture={() => navigateToPage('furniture')}
          />

          <WishlistDrawer 
            onQuickViewProduct={handleSelectProduct}
            onExploreFurniture={() => navigateToPage('furniture')}
          />

          <CheckoutModal />

          <ConsultationModal 
            isOpen={isConsultationOpen}
            onClose={() => setIsConsultationOpen(false)}
          />

          {/* Mobile Bottom Navigation */}
          <MobileBottomNav 
            onNavigate={navigateToPage}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />

        </div>
      </WishlistProvider>
    </CartProvider>
  );
}
