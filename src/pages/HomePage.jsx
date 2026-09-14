import React from 'react';
import Hero from '../components/Hero';
import PressRecognition from '../components/PressRecognition';
import ShopByRoom from '../components/ShopByRoom';
import FeaturedCategories from '../components/FeaturedCategories';
import NewArrivals from '../components/NewArrivals';
import Bestsellers from '../components/Bestsellers';
import SignatureCollections from '../components/SignatureCollections';
import ProductSpotlight from '../components/ProductSpotlight';
import HomeInteriors from '../components/HomeInteriors';
import ModularKitchens from '../components/ModularKitchens';
import Wardrobes from '../components/Wardrobes';
import WhyEmbroshyal from '../components/WhyEmbroshyal';
import Craftsmanship from '../components/Craftsmanship';
import CustomisationStudio from '../components/CustomisationStudio';
import DesignConsultation from '../components/DesignConsultation';
import ProjectsPortfolio from '../components/ProjectsPortfolio';
import BeforeAfter from '../components/BeforeAfter';
import DesignInspiration from '../components/DesignInspiration';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';

export default function HomePage({ onQuickViewProduct, onNavigate, onOpenConsultation }) {
  return (
    <div className="home-page-container animate-fade">
      {/* 3. Hero Section */}
      <Hero 
        onExploreCollection={() => onNavigate('furniture')}
        onDiscoverSpace={() => onNavigate('rooms')}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 3b. Global Architectural Press Recognition */}
      <PressRecognition />

      {/* 4. Shop By Room */}
      <ShopByRoom 
        onSelectRoom={() => onNavigate('rooms')}
        onQuickViewProduct={onQuickViewProduct}
      />

      {/* 5. Featured Categories */}
      <FeaturedCategories 
        onSelectCategory={() => onNavigate('furniture')}
      />

      {/* 6. New Arrivals */}
      <NewArrivals 
        onQuickViewProduct={onQuickViewProduct}
        onExploreAll={() => onNavigate('new-arrivals')}
      />

      {/* 7. Bestsellers */}
      <Bestsellers 
        onQuickViewProduct={onQuickViewProduct}
        onExploreBestsellers={() => onNavigate('furniture')}
      />

      {/* 8. Signature Collections ("The Embroshyal Edit") */}
      <SignatureCollections 
        onSelectCollection={() => onNavigate('collections')}
      />

      {/* 9. Product Spotlight */}
      <ProductSpotlight 
        onExploreProduct={onQuickViewProduct}
      />

      {/* 10. Home Interiors Flagship Suite */}
      <HomeInteriors 
        onOpenConsultation={onOpenConsultation}
        onExploreInteriors={() => onNavigate('interiors')}
      />

      {/* 11. Modular Kitchens */}
      <ModularKitchens 
        onOpenConsultation={onOpenConsultation}
      />

      {/* 12. Bespoke Wardrobes */}
      <Wardrobes 
        onOpenConsultation={onOpenConsultation}
      />

      {/* 13. Why Embroshyal */}
      <WhyEmbroshyal />

      {/* 14. Craftsmanship & Material Lab */}
      <Craftsmanship 
        onOpenConsultation={onOpenConsultation}
      />

      {/* 15. Customisation Studio */}
      <CustomisationStudio 
        onOpenConsultation={onOpenConsultation}
      />

      {/* 16. Design Consultation Section */}
      <DesignConsultation 
        onOpenModal={onOpenConsultation}
      />

      {/* 17. Projects Portfolio */}
      <ProjectsPortfolio 
        onOpenConsultation={onOpenConsultation}
      />

      {/* 18. Before & After Transformations */}
      <BeforeAfter 
        onOpenConsultation={onOpenConsultation}
      />

      {/* 20. Design Inspiration */}
      <DesignInspiration />

      {/* 23. FAQ Accordion */}
      <FAQSection 
        onOpenConsultation={onOpenConsultation}
      />

      {/* 24. Final CTA Banner */}
      <FinalCTA 
        onOpenConsultation={onOpenConsultation}
        onExploreFurniture={() => onNavigate('furniture')}
      />
    </div>
  );
}
