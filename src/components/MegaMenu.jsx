import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Coffee } from 'lucide-react';

export default function MegaMenu({ activeKey, onClose, onNavigate }) {
  
  // 1. Living Room Menu
  const livingRoomMenu = {
    columns: [
      {
        title: 'Sofas & Sectionals',
        items: ['L-Shape Sectionals', 'Curved Bouclé Sofas', '3-Seater Sofas', 'Recliner Loungers', 'Ottomans & Poufs']
      },
      {
        title: 'Tables & Media',
        items: ['Coffee Tables', 'Nesting Side Tables', 'TV Media Consoles', 'Bar Cabinets', 'Credenzas']
      },
      {
        title: 'Accent Seating',
        items: ['Lounge Armchairs', 'Velvet Accent Chairs', 'Chaise Lounges', 'Daybeds', 'Entryway Benches']
      }
    ],
    featured: {
      tag: 'Living Room Highlight',
      title: 'The Solis Curved Collection',
      desc: 'Organic continuous contours wrapped in Italian textured bouclé.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
      actionText: 'Explore Living Room'
    }
  };

  // 2. Bedroom Menu
  const bedroomMenu = {
    columns: [
      {
        title: 'Beds & Headboards',
        items: ['King Size Beds', 'Queen Platform Beds', 'Hydraulic Storage Beds', 'Upholstered Headboards', 'Canopy Beds']
      },
      {
        title: 'Bedroom Storage',
        items: ['Bedside Tables', 'Dressers & Mirrors', 'Chests of Drawers', 'Wardrobes & Armoires', 'Shoe Cabinets']
      },
      {
        title: 'Mattresses & Linens',
        items: ['Orthopedic Memory Foam', 'Pocket Spring Mattresses', 'Pure Belgian Linen', 'Silk Duvet Covers', 'Pillows']
      }
    ],
    featured: {
      tag: 'Bedroom Edit',
      title: 'The Somnus Floating Platform Bed',
      desc: 'Italian Canaletto Walnut with integrated ambient warm LED under-glow.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
      actionText: 'Explore Bedroom Suites'
    }
  };

  // 3. Dining Room Menu
  const diningRoomMenu = {
    columns: [
      {
        title: 'Dining Tables',
        items: ['6-Seater Tables', '8-Seater Solid Wood', 'Extendable Dining Tables', 'Round Marble Tables', 'Breakfast Counters']
      },
      {
        title: 'Dining Seating',
        items: ['Upholstered Dining Chairs', 'Solid Wood Chairs', 'Dining Benches', 'Bar & Counter Stools']
      },
      {
        title: 'Storage & Bars',
        items: ['Crockery Units', 'Bar Cabinets', 'Buffet Sideboards', 'Wine Display Consoles']
      }
    ],
    featured: {
      tag: 'Dining Atelier',
      title: 'The Aurelia Calacatta Dining Ensemble',
      desc: 'Hand-selected Italian marble paired with fluted solid teak base pedestals.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80',
      actionText: 'Explore Dining Range'
    }
  };

  // 4. Office and Study Menu
  const studyMenu = {
    columns: [
      {
        title: 'Work Desks',
        items: ['Executive Writing Desks', 'Solid Oak Study Tables', 'Compact Home Workstations', 'Corner L-Desks']
      },
      {
        title: 'Study Seating',
        items: ['High-Back Leather Chairs', 'Mesh Ergonomic Task Chairs', 'Swivel Armchairs', 'Stools']
      },
      {
        title: 'Library Storage',
        items: ['Bookshelves & Etageres', 'Filing Cabinets', 'Desk Organizers', 'Storage Credenzas']
      }
    ],
    featured: {
      tag: 'Home Office Atelier',
      title: 'The Minimalist Executive Desk',
      desc: 'Matte oak finish with concealed wireless charging pad and soft leather modesty panel.',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80',
      actionText: 'Explore Study Furniture'
    }
  };

  // 5. Modular Kitchens & Turnkey Interiors Menu
  const interiorsMenu = {
    columns: [
      {
        title: 'Turnkey Services',
        items: ['Complete Home Interiors', 'Modular Kitchens', 'Wardrobes & Walk-ins', 'Living Room Interiors', 'Master Bedroom Suites', 'Home Office Setups']
      },
      {
        title: 'Modular Kitchens',
        items: ['Island Kitchens', 'L-Shaped Kitchens', 'Parallel Kitchens', 'Straight Kitchens', 'U-Shaped Kitchens', 'Pantry Units']
      },
      {
        title: 'Wardrobes & Closets',
        items: ['Sliding Glass Wardrobes', 'Hinged Lacquered Closets', 'Walk-in Wardrobes', 'Dressing Units', 'Shoe Galleries']
      }
    ],
    featured: {
      tag: 'Design Studio',
      title: 'Free 3D Home Consultation',
      desc: 'Collaborate with senior interior architects to visualize your dream space.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
      actionText: 'Book 3D Design Session'
    }
  };

  // 6. Nook Magazine / Editorial
  const nookMenu = {
    columns: [
      {
        title: 'Journal & Stories',
        items: ['Spring Lookbook 2026', 'Material Buying Guides', 'Architectural Profiles', 'Color Forecasts']
      },
      {
        title: 'Real Home Tours',
        items: ['Mumbai Seaface Villa', 'Bengaluru Courtyard Home', 'Delhi Heritage Suite', 'Goa Coastal Villa']
      },
      {
        title: 'Design Masterclasses',
        items: ['Lighting & Ambience', 'Small Space Styling', 'Artisanal Woodworking', 'Sustainable Living']
      }
    ],
    featured: {
      tag: 'Embroshyal Journal',
      title: 'Nook Magazine — Spring Edition',
      desc: 'Curated essays on architecture, slow craftsmanship, and living with art.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
      actionText: 'Read Nook Magazine'
    }
  };

  // 7. Workspace (B2B)
  const workspaceMenu = {
    columns: [
      {
        title: 'Desking & Clusters',
        items: ['Linear Workstations', '120-Degree Clusters', 'Motorized Height-Adjustable', 'Managerial Cabins', 'Bench Desking']
      },
      {
        title: 'Meeting & Privacy',
        items: ['Executive Boardrooms', 'Acoustic Phone Booths', 'Huddle Rooms', 'Discussion Pods', 'Town Hall Seating']
      },
      {
        title: 'Storage & Utilities',
        items: ['Mobile Pedestals', 'RFID Metal Lockers', 'Credenzas', 'Filing Cabinets', 'Cable Trays']
      }
    ],
    featured: {
      tag: 'Enterprise Workspace',
      title: 'AeroLine Workstation System',
      desc: 'Engineered for agile teams with integrated cable wireways & acoustic felt screens.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      actionText: 'Explore Workspace Solutions'
    }
  };

  // 8. Education (B2B)
  const educationMenu = {
    columns: [
      {
        title: 'Classrooms & Tiered',
        items: ['Tiered Lecture Seating', 'Modular Nesting Desks', 'Student Ergonomic Chairs', 'Whiteboard Movable Dividers']
      },
      {
        title: 'Campus & Labs',
        items: ['Library Book Stacks & Carrels', 'STEM & Robotics Benches', 'Auditorium Tip-up Chairs', 'Faculty Desking']
      },
      {
        title: 'Living & Dining',
        items: ['Hostel Bunk Pods', 'High-Traffic Cafeteria Tables', 'Recreation Loungers', 'Student Lockers']
      }
    ],
    featured: {
      tag: 'Institutional Solutions',
      title: 'ErgoLearn Academic System',
      desc: 'Tested for 15+ years of continuous classroom and university lecture use.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
      actionText: 'Explore Education Range'
    }
  };

  // 9. Healthcare (B2B)
  const healthcareMenu = {
    columns: [
      {
        title: 'OPD & Lounges',
        items: ['Bariatric Beam Seating', 'Anti-Microbial Waiting Sofas', 'Wall-Saver Lounge Chairs', 'Reception Desks']
      },
      {
        title: 'Clinical & Patient',
        items: ['Doctor Consultation Suites', 'Patient Attendant Recliners', 'Exam Couches', 'Overbed Tables']
      },
      {
        title: 'Sterile & Support',
        items: ['Corian Nurse Stations', 'Mobile Medication Carts', 'Cleanroom Storage Cabinets', 'Chart Holders']
      }
    ],
    featured: {
      tag: 'Clinical Grade',
      title: 'Aegis Medical Grade Vinyls',
      desc: 'NABH-compliant bleach-cleanable and silver-ion antibacterial surfaces.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
      actionText: 'Explore Healthcare Range'
    }
  };

  // 10. Laboratory (B2B)
  const laboratoryMenu = {
    columns: [
      {
        title: 'Workbenches & Casework',
        items: ['Trespa TopLab Island Benches', 'Epoxy Resin Worktops', 'Heavy C-Frame Steel Tables', 'Reagent Racks']
      },
      {
        title: 'Fume Hoods & Safety',
        items: ['Bypass Chemical Fume Hoods', 'Flammable Storage Lockers', 'Emergency Eye-Wash Stations', 'Ductless Hoods']
      },
      {
        title: 'Cleanroom & ESD',
        items: ['316-Stainless Cleanroom Tables', 'ESD Anti-Static Benches', 'Granite Balance Tables', 'Cleanroom Stools']
      }
    ],
    featured: {
      tag: 'SEFA 8 Certified',
      title: 'Titan Research Bench Casework',
      desc: 'Tested against 49+ aggressive acids, alkalis, and thermal shock.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      actionText: 'Explore Laboratory Systems'
    }
  };

  // 11. SME (B2B)
  const smeMenu = {
    columns: [
      {
        title: 'Turnkey Packages',
        items: ['10-Seater Startup Kit', '25-Seater Growth Pack', '50-Seater ScaleUp Hub', 'Rapid 7-Day Dispatch']
      },
      {
        title: 'Financing & Support',
        items: ['0% Interest B2B EMI', 'Furniture Rental / Leasing', 'Free 3D Space Planning', 'GST Input Credit Invoice']
      },
      {
        title: 'Modular Expansion',
        items: ['Click-In Extra Desks', 'Meeting Room Pods', 'Pantry & Breakout', 'Reception Counters']
      }
    ],
    featured: {
      tag: 'Agile Startup Kits',
      title: '7-Day Fast Track Office',
      desc: 'Pre-configured turnkey packs with desks, chairs, and power management.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      actionText: 'Explore SME Packages'
    }
  };

  // 12. AV Solutions (B2B)
  const avMenu = {
    columns: [
      {
        title: 'Boardrooms & VC',
        items: ['Smart 4K Video Conferencing', 'Ceiling Beamforming Mic Grids', 'Touch-Screen Controllers', 'Motorized Pop-Up Hubs']
      },
      {
        title: 'LED Walls & Displays',
        items: ['MicroLED Seamless Video Walls', 'Interactive Touch Displays', 'Wireless BYOD Presentation', 'Town Hall Audio']
      },
      {
        title: 'Acoustics & Privacy',
        items: ['Fabric Acoustic Wall Panels', 'Sound Masking Emitters', 'Acoustic Ceiling Baffles', 'RT60 Room Tuning']
      }
    ],
    featured: {
      tag: 'Unified Collaboration',
      title: 'AeroVue Smart Boardroom',
      desc: 'One-touch Zoom & MS Teams video conferencing with AI optical speaker tracking.',
      image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=600&q=80',
      actionText: 'Explore AV Solutions'
    }
  };

  // 13. Wellness at Work (B2B)
  const wellnessMenu = {
    columns: [
      {
        title: 'Active Ergonomics',
        items: ['Motorized Sit-to-Stand Desks', 'Dynamic Mesh Task Seating', 'Active Balance Stools', 'Monitor Arms']
      },
      {
        title: 'Biophilic Interiors',
        items: ['Preserved Moss Partitions', 'Desktop Planter Troughs', 'Natural Wood Finishes', 'Air Purifying Screens']
      },
      {
        title: 'Circadian & Mindfulness',
        items: ['Tunable Circadian Lighting', 'Acoustic Zen Focus Pods', 'Low-VOC Non-Toxic Finishes', 'Meditation Alcoves']
      }
    ],
    featured: {
      tag: 'WELL v2 Aligned',
      title: 'Human-Centric Workspace',
      desc: 'Boost focus by 42% and reduce physical fatigue with kinetic posture ergonomics.',
      image: 'https://images.unsplash.com/photo-1545083036-b175dd155a1d?auto=format&fit=crop&w=600&q=80',
      actionText: 'Explore Wellness at Work'
    }
  };

  const render3ColMenu = (menuData, targetKey) => (
    <div className="mega-menu-grid">
      <div className="mega-menu-columns" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {menuData.columns.map((col, idx) => (
          <div key={idx} className="mega-col">
            <h4 className="mega-col-title">{col.title}</h4>
            <ul className="mega-col-list">
              {col.items.map((item, i) => (
                <li key={i}>
                  <button 
                    className="mega-item-btn" 
                    onClick={() => onNavigate(targetKey)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mega-featured-card">
        <span className="section-label">{menuData.featured.tag}</span>
        <h3 className="mega-featured-title font-serif">{menuData.featured.title}</h3>
        <p className="mega-featured-desc">{menuData.featured.desc}</p>
        <div className="mega-featured-image image-zoom-container">
          <img src={menuData.featured.image} alt={menuData.featured.title} />
        </div>
        <button 
          className="btn-gold w-full mt-3" 
          onClick={() => onNavigate(targetKey)}
        >
          {menuData.featured.actionText} <ArrowRight size={14} className="ml-1" />
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeKey) {
      /* Residential Menus */
      case 'living-room':
        return render3ColMenu(livingRoomMenu, 'furniture?room=Living Room');

      case 'bedroom':
        return render3ColMenu(bedroomMenu, 'furniture?room=Bedroom');

      case 'dining-room':
        return render3ColMenu(diningRoomMenu, 'furniture?room=Dining');

      case 'office-and-study':
        return render3ColMenu(studyMenu, 'furniture?filter=study');

      case 'modular-kitchen':
      case 'kitchens':
      case 'interiors':
        return render3ColMenu(interiorsMenu, 'modular-kitchen');

      case 'nook':
      case 'inspiration':
        return render3ColMenu(nookMenu, 'inspiration');

      /* Commercial & B2B Menus */
      case 'workspace':
        return render3ColMenu(workspaceMenu, 'workspace');

      case 'education':
        return render3ColMenu(educationMenu, 'education');

      case 'healthcare':
        return render3ColMenu(healthcareMenu, 'healthcare');

      case 'laboratory':
        return render3ColMenu(laboratoryMenu, 'laboratory');

      case 'sme':
        return render3ColMenu(smeMenu, 'sme');

      case 'products':
      case 'all-products':
        return render3ColMenu(workspaceMenu, 'products');

      case 'av-solutions':
        return render3ColMenu(avMenu, 'av-solutions');

      case 'wellness':
      case 'wellness-at-work':
        return render3ColMenu(wellnessMenu, 'wellness');

      default:
        // Do not render any unwanted fallback box
        return null;
    }
  };

  const content = renderContent();
  if (!content) return null;

  return (
    <div className="mega-menu-wrapper" onMouseLeave={onClose}>
      <div className="container mega-content-box">
        {content}
      </div>

      <style>{`
        .mega-menu-wrapper {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--bg-card);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-top: 1px solid var(--border-light);
          border-bottom: 2px solid var(--accent-gold);
          z-index: 899;
          animation: fadeIn 0.25s ease;
        }

        .mega-content-box {
          padding: 2.2rem 2rem;
        }

        .mega-menu-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 2.5rem;
        }

        .mega-menu-columns {
          display: grid;
          gap: 1.5rem;
        }

        .mega-col-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.85rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.4rem;
        }

        .mega-col-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          padding: 0;
          margin: 0;
        }

        .mega-item-btn {
          background: none;
          border: none;
          text-align: left;
          font-size: 0.85rem;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.15rem 0;
          transition: color var(--transition-fast), transform var(--transition-fast);
        }

        .mega-item-btn:hover {
          color: var(--accent-gold);
          transform: translateX(3px);
        }

        .mega-featured-card {
          background-color: var(--bg-secondary);
          padding: 1.5rem;
          border: 1px solid var(--border-medium);
          display: flex;
          flex-direction: column;
        }

        .mega-featured-title {
          font-size: 1.35rem;
          color: var(--text-primary);
          margin: 0.25rem 0 0.5rem;
        }

        .mega-featured-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .mega-featured-image {
          width: 100%;
          height: 140px;
          border-radius: var(--radius-sm);
        }

        .mega-featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--radius-sm);
        }
      `}</style>
    </div>
  );
}
