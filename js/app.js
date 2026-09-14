/**
 * EMBROSHYAL LUXURY ATELIER & LIVING
 * Unified Client-Side Application Framework (Vanilla JavaScript)
 * Provides state management, cart/wishlist persistence, modals, drawers,
 * search, interactive filters, hotspots, and consultation booking.
 */

(function () {
  'use strict';

  // ==========================================
  // 1. GLOBAL PRODUCT & ROOM DATA REPOSITORY
  // ==========================================
  const PRODUCTS_DATA = [
    {
      id: 'emb-01',
      name: 'Solis Curved Bouclé 3-Seater Sofa',
      cat: 'Sofas',
      room: 'Living Room',
      collection: 'Kinfolk Minimalist',
      price: 148000,
      originalPrice: 165000,
      rating: 4.95,
      reviewsCount: 48,
      inStock: true,
      tag: 'Bestseller',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80'
      ],
      finishes: ['Ivory Bouclé', 'Oatmeal Wool', 'Charcoal Bouclé'],
      dimensions: 'W: 240cm × D: 105cm × H: 78cm',
      material: 'Kiln-Dried Teak Frame • High-Resilience Foam • Belgian Bouclé',
      warranty: '10 Years Structural Warranty',
      desc: 'The Solis Sofa balances monumental scale with organic, embracing curves. Hand-upholstered in premium textured bouclé over a solid seasoned teak timber frame.'
    },
    {
      id: 'emb-02',
      name: 'Aurelia Cane & Fluted Oak King Bed',
      cat: 'Beds',
      room: 'Bedroom',
      collection: 'Botanical Heritage',
      price: 165000,
      originalPrice: 180000,
      rating: 4.98,
      reviewsCount: 36,
      inStock: true,
      tag: 'Signature',
      img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80'
      ],
      finishes: ['Natural Cane / Honey Oak', 'Smoked Cane / Dark Walnut'],
      dimensions: 'W: 195cm × L: 215cm × H: 120cm',
      material: 'Solid White Oak • Handwoven Natural Cane • Brass Accents',
      warranty: '10 Years Structural Warranty',
      desc: 'Hand-woven octagonal rattan cane work set within architectural fluted American white oak framing. Includes heavy-duty sprung slat foundation.'
    },
    {
      id: 'emb-03',
      name: 'Verona Fluted Marble Dining Table',
      cat: 'Dining Sets',
      room: 'Dining',
      collection: 'Milanese Monolith',
      price: 210000,
      originalPrice: 235000,
      rating: 5.0,
      reviewsCount: 29,
      inStock: true,
      tag: 'Limited Edition',
      img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1000&q=80'
      ],
      finishes: ['Honed Arabescato Marble', 'Roman Travertine', 'Nero Marquina'],
      dimensions: 'L: 220cm × W: 100cm × H: 76cm (Seats 8)',
      material: 'Continuous Slab Italian Marble • Fluted Pedestal Columns',
      warranty: '5 Years Stone Care Assurance',
      desc: 'A sculptural centerpiece anchored by twin fluted monolithic stone pedestals and a bullnose chamfered marble slab surface.'
    },
    {
      id: 'emb-04',
      name: 'Kyoto Minimalist Teak Study Desk',
      cat: 'Study Furniture',
      room: 'Home Office',
      collection: 'Japandi Quietude',
      price: 88000,
      originalPrice: 95000,
      rating: 4.88,
      reviewsCount: 22,
      inStock: true,
      tag: 'New',
      img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80'
      ],
      finishes: ['Natural Teak', 'Ebony Smoked Teak'],
      dimensions: 'W: 160cm × D: 75cm × H: 75cm',
      material: 'Burmese Plantation Teak • Concealed Cable Raceway • Leather Inlay',
      warranty: '10 Years Structural Warranty',
      desc: 'Clean joinery inspired by traditional Japanese woodworking. Features soft-closing flush drawers and integrated wire management ports.'
    },
    {
      id: 'emb-05',
      name: 'Elysian Sliding Bronze Glass Wardrobe',
      cat: 'Wardrobes',
      room: 'Bedroom',
      collection: 'Turnkey Luxury',
      price: 320000,
      originalPrice: 350000,
      rating: 4.98,
      reviewsCount: 19,
      inStock: true,
      tag: 'Custom Bespoke',
      img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80'
      ],
      finishes: ['Bronze Tint Glass / Dark Walnut', 'Fluted Glass / Smoked Ash'],
      dimensions: 'Custom Built-to-Site (Standard: W: 240cm × H: 260cm)',
      material: 'Italian Anodized Aluminum • Integrated PIR LED Lighting • Velvet Drawers',
      warranty: '12 Years Mechanism Warranty',
      desc: 'Floor-to-ceiling modular wardrobe suite with whisper-quiet sliding hardware, warm integrated illumination, and micro-suede accessory organizers.'
    },
    {
      id: 'emb-06',
      name: 'Palermo Swivel Lounge Chair & Ottoman',
      cat: 'Chairs',
      room: 'Living Room',
      collection: 'Milanese Monolith',
      price: 92000,
      originalPrice: 105000,
      rating: 4.92,
      reviewsCount: 41,
      inStock: true,
      tag: 'Bestseller',
      img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80'
      ],
      finishes: ['Cognac Semi-Aniline Leather', 'Oatmeal Bouclé', 'Forest Velvet'],
      dimensions: 'Chair: W: 88cm × D: 92cm × H: 82cm | Ottoman: W: 60cm × D: 45cm',
      material: 'Italian Top-Grain Leather • Brushed Brass 360° Swivel Base',
      warranty: '8 Years Foam & Frame Warranty',
      desc: 'Ergonomic embrace with continuous 360-degree silent swivel. Reclined posture crafted for reading sanctuaries and penthouse lounges.'
    },
    {
      id: 'emb-07',
      name: 'Zephyr Floating Oak Acoustic TV Console',
      cat: 'TV Units',
      room: 'Living Room',
      collection: 'Japandi Quietude',
      price: 74000,
      originalPrice: 82000,
      rating: 4.87,
      reviewsCount: 27,
      inStock: true,
      tag: 'Popular',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
      ],
      finishes: ['Smoked Ash / Charcoal Slats', 'Natural White Oak / Brass'],
      dimensions: 'W: 220cm × D: 42cm × H: 45cm',
      material: 'Acoustic Slat Fronts • IR-Remote Pass-Through • Concealed Power Bay',
      warranty: '10 Years Structural Warranty',
      desc: 'Wall-mounted or low-profile media console with acoustic fabric backing that allows soundbar and infrared signals to pass through effortlessly.'
    },
    {
      id: 'emb-08',
      name: 'Atlas Monolithic Travertine Coffee Table',
      cat: 'Tables',
      room: 'Living Room',
      collection: 'Milanese Monolith',
      price: 68000,
      originalPrice: 78000,
      rating: 4.93,
      reviewsCount: 33,
      inStock: true,
      tag: 'Architects Pick',
      img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80'
      ],
      finishes: ['Raw Roman Travertine', 'Honed Black Marquina'],
      dimensions: 'W: 120cm × D: 80cm × H: 36cm',
      material: 'Solid Quarried Travertine Stone • Matte Nano-Sealed Finish',
      warranty: '5 Years Natural Stone Guarantee',
      desc: 'Carved from single-quarry Roman travertine blocks. Features open organic pores, chamfered pillowed corners, and grounding monolithic weight.'
    },
    {
      id: 'emb-09',
      name: 'Astrid Deep Modular Belgian Linen Sofa',
      cat: 'Sofas',
      room: 'Living Room',
      collection: 'Kinfolk Minimalist',
      price: 185000,
      originalPrice: 205000,
      rating: 4.92,
      reviewsCount: 25,
      inStock: true,
      tag: 'New Edition',
      img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80'
      ],
      finishes: ['Belgian Flax Linen', 'Chalk Bouclé', 'Sand Chenille'],
      dimensions: 'W: 280cm × D: 115cm × H: 72cm',
      material: '100% Belgian Washed Linen (Removable Covers) • Feather-Down Topper',
      warranty: '10 Years Frame Warranty',
      desc: 'Extra-deep low lounge seating with feather-down pillow tops and removable, dry-cleanable pure Belgian flax covers.'
    },
    {
      id: 'emb-10',
      name: 'Monolith Upholstered Floating Bed Suite',
      cat: 'Beds',
      room: 'Bedroom',
      collection: 'Kinfolk Minimalist',
      price: 192000,
      originalPrice: 215000,
      rating: 4.96,
      reviewsCount: 30,
      inStock: true,
      tag: 'Luxury',
      img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80'
      ],
      finishes: ['Sand Upholstery / Smoked Walnut', 'Charcoal Wool / Natural Oak'],
      dimensions: 'W: 220cm × L: 225cm × H: 95cm (with Integrated Side Shelves)',
      material: 'Recessed Floating Plinth • Concealed Nightstand Charging Ports',
      warranty: '10 Years Structural Warranty',
      desc: 'Cantilevered architectural floating bed with wraparound padded headboard wings and integrated floating solid timber nightstands.'
    },
    {
      id: 'emb-11',
      name: 'Varenna Fluted Dining Suite & 6 Chairs',
      cat: 'Dining Sets',
      room: 'Dining',
      collection: 'Milanese Monolith',
      price: 175000,
      originalPrice: 195000,
      rating: 4.9,
      reviewsCount: 18,
      inStock: true,
      tag: 'Complete Suite',
      img: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1000&q=80'
      ],
      finishes: ['Smoked Ash / Bouclé Chairs', 'Honey Oak / Leather Chairs'],
      dimensions: 'Table: 200cm × 95cm | 6 Padded Ergonomic Dining Chairs',
      material: 'Solid American Walnut • Fluted Base • Stain-Resistant Fabric',
      warranty: '8 Years Furniture Assurance',
      desc: 'Complete turnkey dining arrangement featuring an architectural fluted oval table paired with six tailored dining chairs.'
    },
    {
      id: 'emb-12',
      name: 'Siena Bouclé Ergonomic Reading Armchair',
      cat: 'Chairs',
      room: 'Living Room',
      collection: 'Botanical Heritage',
      price: 58000,
      originalPrice: 65000,
      rating: 4.94,
      reviewsCount: 38,
      inStock: true,
      tag: 'Best Comfort',
      img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80'
      ],
      finishes: ['Oatmeal Bouclé', 'Terracotta Velvet', 'Sage Chenille'],
      dimensions: 'W: 82cm × D: 85cm × H: 80cm',
      material: 'Hand-Carved Solid Oak Legs • High-Density Ergonomic Core',
      warranty: '8 Years Frame Warranty',
      desc: 'Designed for hours of effortless reading comfort with sculpted lumbar contouring and hand-finished solid oak tapered legs.'
    }
  ];

  // ==========================================
  // 2. STATE MANAGEMENT & STORAGE (Cart/Wishlist)
  // ==========================================
  const State = {
    cart: [],
    wishlist: [],
    promoCode: null,
    discountPercent: 0,

    init() {
      try {
        const storedCart = localStorage.getItem('embroshyal_cart');
        const storedWishlist = localStorage.getItem('embroshyal_wishlist');
        if (storedCart) this.cart = JSON.parse(storedCart);
        if (storedWishlist) this.wishlist = JSON.parse(storedWishlist);
      } catch (e) {
        console.warn('Storage initialisation error:', e);
      }
      this.updateBadges();
    },

    save() {
      try {
        localStorage.setItem('embroshyal_cart', JSON.stringify(this.cart));
        localStorage.setItem('embroshyal_wishlist', JSON.stringify(this.wishlist));
      } catch (e) {
        console.warn('Storage save error:', e);
      }
      this.updateBadges();
    },

    addToCart(productId, qty = 1, finish = null) {
      const prod = PRODUCTS_DATA.find(p => p.id === productId);
      if (!prod) return;

      const selectedFinish = finish || (prod.finishes && prod.finishes[0]) || 'Standard';
      const existingIdx = this.cart.findIndex(item => item.id === productId && item.finish === selectedFinish);

      if (existingIdx > -1) {
        this.cart[existingIdx].qty += qty;
      } else {
        this.cart.push({
          id: prod.id,
          name: prod.name,
          cat: prod.cat,
          price: prod.price,
          img: prod.img,
          finish: selectedFinish,
          qty: qty
        });
      }

      this.save();
      UI.renderCartDrawer();
      UI.openDrawer('cartDrawer');
      UI.showToast(`“${prod.name}” added to shopping bag.`);
    },

    removeFromCart(index) {
      if (this.cart[index]) {
        const name = this.cart[index].name;
        this.cart.splice(index, 1);
        this.save();
        UI.renderCartDrawer();
        UI.showToast(`Removed “${name}” from bag.`, 'info');
      }
    },

    updateCartQty(index, delta) {
      if (!this.cart[index]) return;
      this.cart[index].qty += delta;
      if (this.cart[index].qty <= 0) {
        this.removeFromCart(index);
      } else {
        this.save();
        UI.renderCartDrawer();
      }
    },

    toggleWishlist(productId) {
      const prod = PRODUCTS_DATA.find(p => p.id === productId);
      if (!prod) return;

      const idx = this.wishlist.indexOf(productId);
      if (idx > -1) {
        this.wishlist.splice(idx, 1);
        UI.showToast(`Removed “${prod.name}” from wishlist.`, 'info');
      } else {
        this.wishlist.push(productId);
        UI.showToast(`Saved “${prod.name}” to your wishlist!`);
      }

      this.save();
      UI.renderWishlistDrawer();
      // Re-render any product cards on page to update heart icons
      if (typeof window.renderProducts === 'function') window.renderProducts();
      if (typeof window.renderGrid === 'function') window.renderGrid();
    },

    applyPromo(code) {
      const clean = (code || '').trim().toUpperCase();
      if (clean === 'LUXURY10') {
        this.promoCode = 'LUXURY10';
        this.discountPercent = 0.10;
        UI.showToast('Promo applied: 10% Inaugural Atelier Discount!');
      } else if (clean === 'WELCOME5') {
        this.promoCode = 'WELCOME5';
        this.discountPercent = 0.05;
        UI.showToast('Promo applied: 5% Welcome Privilege!');
      } else {
        UI.showToast('Invalid promo code. Try "LUXURY10" for 10% off.', 'error');
        return false;
      }
      UI.renderCartDrawer();
      return true;
    },

    updateBadges() {
      const totalItems = this.cart.reduce((acc, item) => acc + item.qty, 0);
      const wishlistCount = this.wishlist.length;

      document.querySelectorAll('#cartBadge, #navCartBadge, #topCartBadge, #cart-badge, .cart-badge').forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'inline-flex' : 'none';
      });

      document.querySelectorAll('#wishlistBadge, #navWishlistBadge, #wishlist-badge, .wishlist-badge').forEach(el => {
        el.textContent = wishlistCount;
        el.style.display = wishlistCount > 0 ? 'inline-flex' : 'none';
      });

      const countEl = document.getElementById('cartCount');
      if (countEl) countEl.textContent = totalItems;
    },

    getCartTotals() {
      const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      const discount = Math.round(subtotal * this.discountPercent);
      const tax = Math.round((subtotal - discount) * 0.18); // 18% GST standard luxury furniture
      const total = subtotal - discount + tax;
      return { subtotal, discount, tax, total };
    }
  };

  // ==========================================
  // 3. DYNAMIC UI MODALS & DRAWERS INJECTION
  // ==========================================
  const UI = {
    init() {
      this.injectGlobalModals();
      this.bindGlobalEvents();
      State.init();
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    },

    injectGlobalModals() {
      if (!document.getElementById('site-footer-css')) {
        const link = document.createElement('link');
        link.id = 'site-footer-css';
        link.rel = 'stylesheet';
        link.href = 'css/footer.css';
        document.head.appendChild(link);
      }

      if (document.getElementById('embroshyal-global-ui')) return;

      const container = document.createElement('div');
      container.id = 'embroshyal-global-ui';
      container.innerHTML = `
        <!-- TOAST CONTAINER -->
        <div id="toastContainer" class="fixed top-6 right-6 z-[10000] flex flex-col gap-2 pointer-events-none"></div>

        <!-- CART DRAWER -->
        <div id="cartDrawer" class="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm hidden transition-opacity">
          <div class="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col justify-between transform transition-transform duration-300">
            <!-- Header -->
            <div class="p-6 border-b border-brand-border flex items-center justify-between bg-brand-sand/40">
              <div class="flex items-center gap-2">
                <i data-lucide="shopping-bag" class="w-5 h-5 text-brand-gold"></i>
                <h3 class="font-serif text-xl font-medium text-brand-dark">Shopping Bag (<span id="cartDrawerCount">0</span>)</h3>
              </div>
              <button onclick="window.embroshyal.closeDrawer('cartDrawer')" class="p-2 hover:bg-neutral-200 rounded-full text-neutral-500 hover:text-brand-dark transition-colors">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>

            <!-- Items List -->
            <div id="cartDrawerItemsList" class="p-6 overflow-y-auto flex-grow space-y-4">
              <!-- Dynamically populated -->
            </div>

            <!-- Footer / Checkout -->
            <div class="p-6 border-t border-brand-border bg-brand-sand/30 space-y-4">
              <!-- Promo code box -->
              <div class="flex gap-2">
                <input id="cartPromoInput" type="text" placeholder="Promo code (e.g. LUXURY10)" class="flex-grow text-xs px-3 py-2 border border-brand-border rounded focus:outline-none focus:border-brand-gold uppercase tracking-wider">
                <button onclick="window.embroshyal.applyPromoCode()" class="px-4 py-2 bg-brand-dark text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-brand-charcoal">Apply</button>
              </div>

              <!-- Calculation breakdown -->
              <div class="space-y-1.5 text-xs text-neutral-600">
                <div class="flex justify-between">
                  <span>Subtotal</span>
                  <span id="cartSubtotalVal" class="font-semibold text-brand-dark">₹0</span>
                </div>
                <div id="cartDiscountRow" class="flex justify-between text-emerald-700 hidden">
                  <span>Privilege Discount</span>
                  <span id="cartDiscountVal">-₹0</span>
                </div>
                <div class="flex justify-between">
                  <span>GST (18% Included)</span>
                  <span id="cartTaxVal">₹0</span>
                </div>
                <div class="flex justify-between text-neutral-500">
                  <span>White-Glove Shipping & Assembly</span>
                  <span class="text-emerald-700 font-bold uppercase tracking-wider text-[10px]">Complimentary</span>
                </div>
                <div class="flex justify-between text-base font-bold text-brand-dark pt-2 border-t border-brand-border">
                  <span>Total Amount</span>
                  <span id="cartTotalVal" class="text-brand-gold">₹0</span>
                </div>
              </div>

              <button onclick="window.embroshyal.openCheckoutModal()" class="w-full py-3.5 bg-[#C29B38] hover:bg-[#D4AB47] text-brand-dark font-bold text-xs uppercase tracking-widest rounded shadow-lg transition-all flex items-center justify-center gap-2">
                Proceed to Checkout <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- WISHLIST DRAWER -->
        <div id="wishlistDrawer" class="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm hidden transition-opacity">
          <div class="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col justify-between transform transition-transform duration-300">
            <div class="p-6 border-b border-brand-border flex items-center justify-between bg-brand-sand/40">
              <div class="flex items-center gap-2">
                <i data-lucide="heart" class="w-5 h-5 text-brand-terracotta"></i>
                <h3 class="font-serif text-xl font-medium text-brand-dark">Saved Pieces</h3>
              </div>
              <button onclick="window.embroshyal.closeDrawer('wishlistDrawer')" class="p-2 hover:bg-neutral-200 rounded-full text-neutral-500 hover:text-brand-dark">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>
            <div id="wishlistDrawerItemsList" class="p-6 overflow-y-auto flex-grow space-y-4"></div>
          </div>
        </div>

        <!-- QUICK VIEW / PRODUCT DETAIL MODAL -->
        <div id="quickViewModal" class="fixed inset-0 z-[9995] bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
          <div class="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl relative animate-fade max-h-[90vh] flex flex-col md:flex-row">
            <button onclick="window.embroshyal.closeModal('quickViewModal')" class="absolute top-4 right-4 z-20 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-neutral-600 hover:text-brand-dark">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
            <div class="md:w-1/2 bg-brand-sand relative min-h-[300px]">
              <img id="qvImg" src="" alt="Product" class="w-full h-full object-cover">
              <span id="qvTag" class="absolute top-4 left-4 bg-brand-dark text-brand-gold text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded"></span>
            </div>
            <div class="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span id="qvCat" class="text-brand-gold text-xs uppercase tracking-widest font-semibold block mb-1"></span>
                <h3 id="qvTitle" class="font-serif text-2xl text-brand-dark font-medium leading-snug mb-2"></h3>
                <div class="flex items-center gap-3 mb-4">
                  <span id="qvPrice" class="text-xl font-bold text-brand-dark"></span>
                  <span id="qvOrigPrice" class="text-xs text-neutral-400 line-through"></span>
                  <span class="text-[11px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">In Stock • White-Glove</span>
                </div>
                <p id="qvDesc" class="text-neutral-600 text-xs leading-relaxed mb-4"></p>
                
                <!-- Finishes selection -->
                <div class="mb-4">
                  <label class="text-[11px] uppercase tracking-wider font-bold text-neutral-500 block mb-1.5">Material & Finish Option</label>
                  <select id="qvFinishSelect" class="w-full text-xs p-2.5 border border-brand-border rounded bg-brand-cream focus:outline-none focus:border-brand-gold"></select>
                </div>

                <!-- Specs -->
                <div class="space-y-1.5 py-3 border-y border-brand-border text-[11px] text-neutral-500 mb-6">
                  <div><strong>Dimensions:</strong> <span id="qvDimensions"></span></div>
                  <div><strong>Craftsmanship:</strong> <span id="qvMaterial"></span></div>
                  <div><strong>Assurance:</strong> <span id="qvWarranty"></span></div>
                </div>
              </div>

              <div class="flex gap-3 pt-2">
                <button onclick="window.embroshyal.closeModal('quickViewModal'); window.open('https://wa.me/919812387456?text=' + encodeURIComponent('Hello Embroshyal Team, I would like to inquire about: ' + (document.getElementById('qvTitle') ? document.getElementById('qvTitle').textContent : 'Custom Interior Piece')), '_blank');" class="flex-grow py-3 bg-[#C29B38] hover:bg-[#D4AB47] text-brand-dark font-bold text-xs uppercase tracking-widest rounded shadow-md transition-all flex items-center justify-center gap-2">
                  <i data-lucide="phone" class="w-3.5 h-3.5"></i> Inquire on WhatsApp (+91 9812387456)
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- SEARCH OVERLAY MODAL -->
        <div id="searchModal" class="fixed inset-0 z-[9995] bg-black/75 backdrop-blur-md hidden flex flex-col p-4 md:p-12 items-center">
          <div class="max-w-2xl w-full">
            <div class="flex justify-between items-center mb-6">
              <span class="text-brand-gold text-xs uppercase tracking-widest font-bold">Embroshyal Atelier Catalog Search</span>
              <button onclick="window.embroshyal.closeModal('searchModal')" class="text-white hover:text-brand-gold p-2">
                <i data-lucide="x" class="w-6 h-6"></i>
              </button>
            </div>
            <div class="relative mb-6">
              <input 
                id="globalSearchInput" 
                type="text" 
                placeholder="Search sofas, marble dining, beds, oak desks, wardrobes..."
                class="w-full text-base md:text-lg bg-white/10 border-2 border-brand-gold/60 text-white rounded-lg px-5 py-4 pl-12 focus:outline-none focus:border-brand-gold placeholder-white/40"
                oninput="window.embroshyal.handleLiveSearch(this.value)"
              >
              <i data-lucide="search" class="w-5 h-5 text-brand-gold absolute left-4 top-1/2 -translate-y-1/2"></i>
            </div>
            <div id="searchResultsBox" class="bg-brand-darkCard border border-white/10 rounded-lg max-h-[60vh] overflow-y-auto p-4 space-y-3 hidden">
              <!-- Live Search Results -->
            </div>
          </div>
        </div>

        <!-- 3D DESIGN CONSULTATION MODAL -->
        <div id="consultationModal" onclick="if(event.target === this) window.embroshyal.closeModal('consultationModal')" class="fixed inset-0 z-[9995] bg-black/75 backdrop-blur-sm hidden flex items-center justify-center p-4">
          <div class="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-fade" onclick="event.stopPropagation()">
            <div class="p-6 bg-[#161412] text-white border-b border-white/10 flex justify-between items-center">
              <div>
                <span class="text-[#DFAC36] text-[10px] uppercase tracking-widest font-bold block mb-1">Complimentary Service</span>
                <h3 class="font-serif text-2xl font-light">Book 3D Design Session</h3>
              </div>
              <button type="button" formnovalidate onclick="event.stopPropagation(); window.embroshyal.closeModal('consultationModal')" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer" aria-label="Close modal" title="Close">
                <svg class="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <form onsubmit="window.embroshyal.submitConsultation(event)" class="p-6 space-y-4">
              <div>
                <label class="text-[11px] uppercase tracking-wider font-bold text-neutral-600 block mb-1">Full Name</label>
                <input required type="text" placeholder="e.g. Rohini Singhania" class="w-full text-xs p-3 border border-brand-border rounded focus:outline-none focus:border-brand-gold">
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="text-[11px] uppercase tracking-wider font-bold text-neutral-600 block mb-1">Phone Number</label>
                  <input required type="tel" placeholder="+91 98200 XXXXX" class="w-full text-xs p-3 border border-brand-border rounded focus:outline-none focus:border-brand-gold">
                </div>
                <div>
                  <label class="text-[11px] uppercase tracking-wider font-bold text-neutral-600 block mb-1">City / Region</label>
                  <select class="w-full text-xs p-3 border border-brand-border rounded focus:outline-none focus:border-brand-gold bg-white">
                    <option>Chandigarh Tricity (Panchkula / Chandigarh / Mohali)</option>
                    <option>Punjab & Haryana Region</option>
                    <option>Delhi NCR</option>
                    <option>Other / Pan-India</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="text-[11px] uppercase tracking-wider font-bold text-neutral-600 block mb-1">Scope of Project</label>
                <select class="w-full text-xs p-3 border border-brand-border rounded focus:outline-none focus:border-brand-gold bg-white">
                  <option>Modular Kitchens & Wardrobes</option>
                  <option>Aluminium & UPVC Doors & Windows</option>
                  <option>False Ceilings & Drywall Solutions</option>
                  <option>Flooring Solutions (Vinyl / SPC / Wood / Gym / Raised)</option>
                  <option>Toilet Cubicles & Washroom Solutions</option>
                  <option>Acoustic Panels & Sound Engineering</option>
                  <option>Full Turnkey Residential / Commercial Project</option>
                </select>
              </div>
              <div class="flex items-center gap-3 pt-2">
                <button type="button" formnovalidate onclick="event.stopPropagation(); window.embroshyal.closeModal('consultationModal')" class="w-1/3 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer text-center">
                  Close
                </button>
                <button type="submit" class="w-2/3 py-3.5 bg-[#C29B38] hover:bg-[#D4AB47] text-brand-dark font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-all cursor-pointer">
                  Confirm Request
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- MULTI-STEP CHECKOUT MODAL -->
        <div id="checkoutModal" class="fixed inset-0 z-[9998] bg-black/75 backdrop-blur-sm hidden flex items-center justify-center p-4">
          <div class="bg-white rounded-lg max-w-xl w-full overflow-hidden shadow-2xl relative max-h-[95vh] flex flex-col">
            <div class="p-6 bg-brand-dark text-white border-b border-white/10 flex justify-between items-center">
              <div>
                <span class="text-brand-gold text-[10px] uppercase tracking-widest font-bold block mb-0.5">Secure White-Glove Checkout</span>
                <h3 class="font-serif text-2xl font-light">Order Finalization</h3>
              </div>
              <button onclick="window.embroshyal.closeModal('checkoutModal')" class="text-neutral-400 hover:text-white p-2">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>
            <form onsubmit="window.embroshyal.finalizeOrder(event)" class="p-6 overflow-y-auto space-y-4">
              <div>
                <h4 class="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-2">1. Delivery Address</h4>
                <div class="grid grid-cols-2 gap-3 mb-3">
                  <input required type="text" placeholder="First Name" class="text-xs p-2.5 border border-brand-border rounded">
                  <input required type="text" placeholder="Last Name" class="text-xs p-2.5 border border-brand-border rounded">
                </div>
                <input required type="text" placeholder="Street Address / Residence / Apt No." class="w-full text-xs p-2.5 border border-brand-border rounded mb-3">
                <div class="grid grid-cols-3 gap-3">
                  <input required type="text" placeholder="City" class="text-xs p-2.5 border border-brand-border rounded">
                  <input required type="text" placeholder="State" class="text-xs p-2.5 border border-brand-border rounded">
                  <input required type="text" placeholder="PIN Code" class="text-xs p-2.5 border border-brand-border rounded">
                </div>
              </div>

              <div class="pt-4 border-t border-brand-border">
                <h4 class="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-2">2. Payment Method</h4>
                <div class="space-y-2 text-xs">
                  <label class="flex items-center gap-2 p-3 border border-brand-border rounded cursor-pointer hover:bg-brand-sand/50">
                    <input type="radio" name="payMethod" value="card" checked>
                    <span class="font-semibold">Credit / Debit Card (0% No-Cost EMI Available)</span>
                  </label>
                  <label class="flex items-center gap-2 p-3 border border-brand-border rounded cursor-pointer hover:bg-brand-sand/50">
                    <input type="radio" name="payMethod" value="upi">
                    <span class="font-semibold">UPI / Net Banking (Instant Concierge Confirmation)</span>
                  </label>
                  <label class="flex items-center gap-2 p-3 border border-brand-border rounded cursor-pointer hover:bg-brand-sand/50">
                    <input type="radio" name="payMethod" value="concierge">
                    <span class="font-semibold">Private Client Relationship Manager Invoicing</span>
                  </label>
                </div>
              </div>

              <div class="pt-4 border-t border-brand-border bg-brand-sand/40 p-4 rounded text-xs space-y-1.5">
                <div class="flex justify-between font-bold text-sm text-brand-dark">
                  <span>Grand Total to Pay:</span>
                  <span id="checkoutTotalAmount" class="text-brand-gold">₹0</span>
                </div>
                <p class="text-[10px] text-neutral-500">Includes white-glove inside delivery, room placement & professional packaging clearance.</p>
              </div>

              <button type="submit" class="w-full py-4 bg-[#C29B38] hover:bg-[#D4AB47] text-brand-dark font-bold text-xs uppercase tracking-widest rounded shadow-xl transition-all">
                Authorize & Place Order
              </button>
            </form>
          </div>
        </div>
      `;

      document.body.appendChild(container);
    },

    bindGlobalEvents() {
      // Connect all trigger buttons across standard headers
      document.addEventListener('click', (e) => {
        const target = e.target.closest('a, button');
        
        // Handle trigger buttons if present
        if (target) {
          const onClickAttr = target.getAttribute('onclick') || '';

          // NEVER intercept close triggers
          if (onClickAttr.includes('closeModal') || onClickAttr.includes('closeDrawer') || target.hasAttribute('data-close-modal') || target.getAttribute('aria-label')?.includes('Close')) {
            return;
          }

          // Wishlist button trigger
          if (target.title === 'Wishlist' || target.classList.contains('wishlist-btn') || onClickAttr.includes('toggleWishlist')) {
            e.preventDefault();
            this.toggleDrawer('wishlistDrawer');
            return;
          }

          // Cart button trigger
          if (target.title === 'Shopping Bag' || target.title === 'Cart' || target.classList.contains('cart-btn') || onClickAttr.includes('toggleCart')) {
            e.preventDefault();
            this.toggleDrawer('cartDrawer');
            return;
          }

          // Search trigger
          if (target.title === 'Search catalog' || target.classList.contains('search-trigger-btn')) {
            e.preventDefault();
            this.openModal('searchModal');
            const input = document.getElementById('globalSearchInput');
            if (input) setTimeout(() => input.focus(), 150);
            return;
          }

          // Consultation trigger (only when explicitly an open action and NOT a close action)
          if ((onClickAttr.includes('openModal') && onClickAttr.includes('consultationModal')) || 
              target.classList.contains('consultation-trigger-btn')) {
            if (!onClickAttr) {
              e.preventDefault();
              this.openModal('consultationModal');
            }
            return;
          }
        }

        // Backdrop click to close modals & drawers
        const backdropTarget = e.target;
        if (backdropTarget && backdropTarget.id && !backdropTarget.classList.contains('hidden')) {
          if (backdropTarget.id.endsWith('Modal')) {
            this.closeModal(backdropTarget.id);
          } else if (backdropTarget.id.endsWith('Drawer')) {
            this.closeDrawer(backdropTarget.id);
          }
        }
      });

      // Escape key handler to close any active modal or drawer
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
          ['consultationModal', 'quickViewModal', 'searchModal', 'checkoutModal'].forEach(id => {
            this.closeModal(id);
          });
          ['cartDrawer', 'wishlistDrawer'].forEach(id => {
            this.closeDrawer(id);
          });
        }
      });
    },

    showToast(message, type = 'success') {
      const container = document.getElementById('toastContainer');
      if (!container) return;

      const toast = document.createElement('div');
      const bgClass = type === 'error' ? 'bg-rose-900 border-rose-700 text-white' : (type === 'info' ? 'bg-brand-dark border-brand-gold text-white' : 'bg-brand-dark text-white border-brand-gold');
      
      toast.className = `pointer-events-auto px-4 py-3 rounded-lg shadow-2xl border ${bgClass} text-xs font-medium flex items-center gap-3 transition-all duration-300 transform translate-y-2 opacity-0`;
      toast.innerHTML = `
        <span class="w-2 h-2 rounded-full ${type === 'error' ? 'bg-rose-400' : 'bg-brand-gold'}"></span>
        <span>${message}</span>
      `;

      container.appendChild(toast);
      setTimeout(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
      }, 20);

      setTimeout(() => {
        toast.classList.add('opacity-0', '-translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    },

    openDrawer(drawerId) {
      const drawer = document.getElementById(drawerId);
      if (!drawer) return;
      drawer.classList.remove('hidden');
      if (drawerId === 'cartDrawer') this.renderCartDrawer();
      if (drawerId === 'wishlistDrawer') this.renderWishlistDrawer();
      if (window.lucide) window.lucide.createIcons();
    },

    closeDrawer(drawerId) {
      const drawer = document.getElementById(drawerId);
      if (drawer) drawer.classList.add('hidden');
    },

    toggleDrawer(drawerId) {
      const drawer = document.getElementById(drawerId);
      if (!drawer) return;
      if (drawer.classList.contains('hidden')) {
        this.openDrawer(drawerId);
      } else {
        this.closeDrawer(drawerId);
      }
    },

    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    },

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('hidden');
        const form = modal.querySelector('form');
        if (form) form.reset();
      }
    },

    renderCartDrawer() {
      const list = document.getElementById('cartDrawerItemsList');
      const countEl = document.getElementById('cartDrawerCount');
      if (!list) return;

      const { subtotal, discount, tax, total } = State.getCartTotals();
      if (countEl) countEl.textContent = State.cart.reduce((s, x) => s + x.qty, 0);

      if (State.cart.length === 0) {
        list.innerHTML = `
          <div class="py-16 text-center text-neutral-400 flex flex-col items-center">
            <i data-lucide="shopping-bag" class="w-12 h-12 stroke-1 text-neutral-300 mb-3"></i>
            <p class="font-serif text-lg text-brand-dark mb-1">Your bag is empty</p>
            <p class="text-xs text-neutral-500 mb-4">Discover our curated architectural pieces to begin living beautifully.</p>
            <a href="furniture.html" onclick="window.embroshyal.closeDrawer('cartDrawer')" class="px-5 py-2.5 bg-brand-dark text-brand-gold text-xs font-bold uppercase tracking-widest rounded hover:bg-brand-charcoal">
              Explore Furniture
            </a>
          </div>
        `;
      } else {
        list.innerHTML = State.cart.map((item, idx) => `
          <div class="flex gap-3 items-center border-b border-brand-border pb-3">
            <img src="${item.img}" class="w-16 h-16 object-cover rounded bg-brand-sand flex-shrink-0">
            <div class="flex-grow min-w-0">
              <h5 class="font-serif text-xs font-medium text-brand-dark line-clamp-1">${item.name}</h5>
              <span class="text-[10px] text-neutral-500 block mb-1">Finish: ${item.finish}</span>
              <div class="flex items-center gap-2">
                <span class="font-bold text-xs text-brand-dark">₹${item.price.toLocaleString('en-IN')}</span>
                <div class="flex items-center border border-brand-border rounded ml-auto">
                  <button onclick="window.embroshyal.updateCartQty(${idx}, -1)" class="px-2 py-0.5 text-neutral-500 hover:bg-neutral-100 text-xs">-</button>
                  <span class="px-2 text-xs font-bold">${item.qty}</span>
                  <button onclick="window.embroshyal.updateCartQty(${idx}, 1)" class="px-2 py-0.5 text-neutral-500 hover:bg-neutral-100 text-xs">+</button>
                </div>
              </div>
            </div>
            <button onclick="window.embroshyal.removeFromCart(${idx})" class="p-1 text-neutral-400 hover:text-brand-terracotta text-sm">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        `).join('');
      }

      document.getElementById('cartSubtotalVal').textContent = '₹' + subtotal.toLocaleString('en-IN');
      document.getElementById('cartTaxVal').textContent = '₹' + tax.toLocaleString('en-IN');
      document.getElementById('cartTotalVal').textContent = '₹' + total.toLocaleString('en-IN');

      const discountRow = document.getElementById('cartDiscountRow');
      if (discount > 0 && discountRow) {
        discountRow.classList.remove('hidden');
        document.getElementById('cartDiscountVal').textContent = '-₹' + discount.toLocaleString('en-IN');
      } else if (discountRow) {
        discountRow.classList.add('hidden');
      }

      if (window.lucide) window.lucide.createIcons();
    },

    renderWishlistDrawer() {
      const list = document.getElementById('wishlistDrawerItemsList');
      if (!list) return;

      const items = PRODUCTS_DATA.filter(p => State.wishlist.includes(p.id));

      if (items.length === 0) {
        list.innerHTML = `
          <div class="py-16 text-center text-neutral-400 flex flex-col items-center">
            <i data-lucide="heart" class="w-12 h-12 stroke-1 text-neutral-300 mb-3"></i>
            <p class="font-serif text-lg text-brand-dark mb-1">No saved items yet</p>
            <p class="text-xs text-neutral-500">Tap the heart on any product to curate your bespoke dream interior.</p>
          </div>
        `;
      } else {
        list.innerHTML = items.map(p => `
          <div class="flex gap-3 items-center border-b border-brand-border pb-3">
            <img src="${p.img}" class="w-16 h-16 object-cover rounded bg-brand-sand flex-shrink-0">
            <div class="flex-grow">
              <h5 class="font-serif text-xs font-medium text-brand-dark line-clamp-1">${p.name}</h5>
              <span class="font-bold text-xs text-brand-dark block mb-2">₹${p.price.toLocaleString('en-IN')}</span>
              <button onclick="window.embroshyal.addToCart('${p.id}'); window.embroshyal.toggleWishlist('${p.id}')" class="px-3 py-1 bg-[#C29B38] text-brand-dark text-[10px] font-bold uppercase tracking-wider rounded">
                Move to Bag
              </button>
            </div>
            <button onclick="window.embroshyal.toggleWishlist('${p.id}')" class="text-neutral-400 hover:text-brand-terracotta text-sm">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        `).join('');
      }

      if (window.lucide) window.lucide.createIcons();
    },

    openQuickView(productId) {
      const p = PRODUCTS_DATA.find(x => x.id === productId);
      if (!p) return;

      let currentQty = 1;
      document.getElementById('qvImg').src = p.img;
      document.getElementById('qvTag').textContent = p.tag || 'Atelier Collection';
      document.getElementById('qvCat').textContent = `${p.cat} • ${p.room}`;
      document.getElementById('qvTitle').textContent = p.name;
      document.getElementById('qvPrice').textContent = 'Custom Built to Order';
      document.getElementById('qvOrigPrice').textContent = '';
      document.getElementById('qvDesc').textContent = p.desc;
      document.getElementById('qvDimensions').textContent = p.dimensions;
      document.getElementById('qvMaterial').textContent = p.material;
      document.getElementById('qvWarranty').textContent = p.warranty;
      document.getElementById('qvQtyVal').textContent = '1';

      const finishSelect = document.getElementById('qvFinishSelect');
      if (p.finishes && p.finishes.length) {
        finishSelect.innerHTML = p.finishes.map(f => `<option value="${f}">${f}</option>`).join('');
        finishSelect.parentElement.style.display = 'block';
      } else {
        finishSelect.parentElement.style.display = 'none';
      }

      document.getElementById('qvAddToCartBtn').onclick = () => {
        const qty = parseInt(document.getElementById('qvQtyVal').textContent, 10) || 1;
        const finish = finishSelect.value;
        State.addToCart(p.id, qty, finish);
        this.closeModal('quickViewModal');
      };

      this.openModal('quickViewModal');
    }
  };

  // ==========================================
  // 4. GLOBAL NAMESPACE EXPORT
  // ==========================================
  window.embroshyal = {
    products: PRODUCTS_DATA,
    state: State,
    ui: UI,
    addToCart: (id, qty, finish) => State.addToCart(id, qty, finish),
    removeFromCart: (idx) => State.removeFromCart(idx),
    updateCartQty: (idx, delta) => State.updateCartQty(idx, delta),
    toggleWishlist: (id) => State.toggleWishlist(id),
    openQuickView: (id) => UI.openQuickView(id),
    openDrawer: (id) => UI.openDrawer(id),
    closeDrawer: (id) => UI.closeDrawer(id),
    openModal: (id) => UI.openModal(id),
    closeModal: (id) => UI.closeModal(id),
    showToast: (msg, type) => UI.showToast(msg, type),
    qvChangeQty: (delta) => {
      const el = document.getElementById('qvQtyVal');
      let val = Math.max(1, (parseInt(el.textContent, 10) || 1) + delta);
      el.textContent = val;
    },
    applyPromoCode: () => {
      const input = document.getElementById('cartPromoInput');
      if (input) State.applyPromo(input.value);
    },
    openCheckoutModal: () => {
      if (State.cart.length === 0) {
        UI.showToast('Your shopping bag is empty!', 'error');
        return;
      }
      const { total } = State.getCartTotals();
      document.getElementById('checkoutTotalAmount').textContent = '₹' + total.toLocaleString('en-IN');
      UI.closeDrawer('cartDrawer');
      UI.openModal('checkoutModal');
    },
    finalizeOrder: (e) => {
      e.preventDefault();
      State.cart = [];
      State.save();
      UI.closeModal('checkoutModal');
      UI.showToast('✨ Order successfully placed! A luxury delivery concierge will call you within 2 business hours.', 'success');
      UI.renderCartDrawer();
    },
    submitConsultation: (e) => {
      e.preventDefault();
      UI.closeModal('consultationModal');
      UI.showToast('✨ Thank you! Your 3D Architectural consultation request has been confirmed.', 'success');
    },
    handleLiveSearch: (query) => {
      const q = (query || '').trim().toLowerCase();
      const box = document.getElementById('searchResultsBox');
      if (!box) return;

      if (!q) {
        box.classList.add('hidden');
        return;
      }

      const results = PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.cat.toLowerCase().includes(q) ||
        p.room.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );

      if (results.length === 0) {
        box.innerHTML = `<p class="text-neutral-400 text-xs py-4 text-center">No pieces found matching “${query}”.</p>`;
      } else {
        box.innerHTML = results.map(p => `
          <div onclick="window.embroshyal.closeModal('searchModal'); window.embroshyal.openQuickView('${p.id}')" class="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer transition-colors">
            <img src="${p.img}" class="w-12 h-12 object-cover rounded bg-neutral-800">
            <div class="flex-grow">
              <h5 class="font-serif text-sm text-white font-medium">${p.name}</h5>
              <span class="text-[10px] text-brand-gold uppercase tracking-widest">${p.cat} • ${p.room}</span>
            </div>
            <span class="text-xs font-bold text-white">₹${p.price.toLocaleString('en-IN')}</span>
          </div>
        `).join('');
      }

      box.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    }
  };

  // Navigation State Management (Logo Home Overview vs For Home vs For Business)
  window.currentNavMode = 'logo_home';

  window.showLogoHomeMenu = function(event) {
    const isHomePage = window.location.pathname.endsWith('index.html') || 
                       window.location.pathname === '/' || 
                       window.location.pathname.endsWith('/');
    
    if (isHomePage) {
      if (event) event.preventDefault();

      const navDefaultHome = document.getElementById('navDefaultHomeLinks') || document.getElementById('navHomeLinks');
      const navForHome = document.getElementById('navForHomeLinks');
      const navBusiness = document.getElementById('navBusinessLinks');
      const btnHome = document.getElementById('btnToggleHome');
      const btnBusiness = document.getElementById('btnToggleBusiness');
      const mobileDefaultHome = document.getElementById('mobileDefaultHomeLinks');
      const mobileForHome = document.getElementById('mobileForHomeLinks');
      const mobileBusiness = document.getElementById('mobileBusinessLinks');
      const mobileBtnHome = document.getElementById('mobileBtnToggleHome');
      const mobileBtnBusiness = document.getElementById('mobileBtnToggleBusiness');

      const inactiveDarkClass = 'px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-[13px] font-bold transition-all cursor-pointer bg-[#141414] hover:bg-neutral-800 text-white shadow-none';
      const mobileInactiveDark = 'flex-1 py-2 text-center rounded-full text-xs font-bold uppercase tracking-wider transition-all bg-[#141414] text-white hover:bg-neutral-800';

      if (navDefaultHome) { navDefaultHome.classList.remove('hidden'); navDefaultHome.classList.add('lg:flex'); }
      if (navForHome) { navForHome.classList.remove('lg:flex'); navForHome.classList.add('hidden'); }
      if (navBusiness) { navBusiness.classList.remove('lg:flex'); navBusiness.classList.add('hidden'); }

      if (btnHome) btnHome.className = inactiveDarkClass;
      if (btnBusiness) btnBusiness.className = inactiveDarkClass;

      if (mobileBtnHome) mobileBtnHome.className = mobileInactiveDark;
      if (mobileBtnBusiness) mobileBtnBusiness.className = mobileInactiveDark;
      if (mobileDefaultHome) mobileDefaultHome.classList.remove('hidden');
      if (mobileForHome) mobileForHome.classList.add('hidden');
      if (mobileBusiness) mobileBusiness.classList.add('hidden');

      window.currentNavMode = 'logo_home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.lucide) window.lucide.createIcons();
    }
  };

  window.toggleNavMode = function(mode) {
    const btnHome = document.getElementById('btnToggleHome');
    const btnBusiness = document.getElementById('btnToggleBusiness');
    const navDefaultHome = document.getElementById('navDefaultHomeLinks') || document.getElementById('navHomeLinks');
    const navForHome = document.getElementById('navForHomeLinks');
    const navBusiness = document.getElementById('navBusinessLinks');
    const mobileDefaultHome = document.getElementById('mobileDefaultHomeLinks');
    const mobileForHome = document.getElementById('mobileForHomeLinks');
    const mobileBusiness = document.getElementById('mobileBusinessLinks');
    const mobileBtnHome = document.getElementById('mobileBtnToggleHome');
    const mobileBtnBusiness = document.getElementById('mobileBtnToggleBusiness');

    const activeGoldClass = 'px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-[13px] font-bold transition-all cursor-pointer bg-gradient-to-r from-[#DFAC36] via-[#C29B38] to-[#A87B1D] text-neutral-950 shadow-[0_2px_8px_rgba(194,155,56,0.35)]';
    const inactiveDarkClass = 'px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-[13px] font-bold transition-all cursor-pointer bg-[#141414] hover:bg-neutral-800 text-white shadow-none';
    const mobileActiveGold = 'flex-1 py-2 text-center rounded-full text-xs font-bold uppercase tracking-wider transition-all bg-gradient-to-r from-[#DFAC36] via-[#C29B38] to-[#A87B1D] text-neutral-950 shadow-sm';
    const mobileInactiveDark = 'flex-1 py-2 text-center rounded-full text-xs font-bold uppercase tracking-wider transition-all bg-[#141414] text-white hover:bg-neutral-800';

    // Keep the chosen mode active - do not revert to home menu on double click!
    window.currentNavMode = mode;

    if (mode === 'business') {
      window.currentNavMode = 'business';
      if (btnBusiness) btnBusiness.className = activeGoldClass;
      if (btnHome) btnHome.className = inactiveDarkClass;
      if (mobileBtnBusiness) mobileBtnBusiness.className = mobileActiveGold;
      if (mobileBtnHome) mobileBtnHome.className = mobileInactiveDark;

      if (navDefaultHome) { navDefaultHome.classList.remove('lg:flex'); navDefaultHome.classList.add('hidden'); }
      if (navForHome) { navForHome.classList.remove('lg:flex'); navForHome.classList.add('hidden'); }
      if (navBusiness) { navBusiness.classList.remove('hidden'); navBusiness.classList.add('lg:flex'); }

      if (mobileDefaultHome) mobileDefaultHome.classList.add('hidden');
      if (mobileForHome) mobileForHome.classList.add('hidden');
      if (mobileBusiness) mobileBusiness.classList.remove('hidden');

    } else if (mode === 'for_home' || mode === 'home') {
      const isCommercialPage = window.location.pathname.includes('workspace.html') || 
                               window.location.pathname.includes('education.html') ||
                               window.location.pathname.includes('healthcare.html') ||
                               window.location.pathname.includes('laboratory.html') ||
                               window.location.pathname.includes('sme.html') ||
                               window.location.pathname.includes('products.html') ||
                               window.location.pathname.includes('av-solutions.html') ||
                               window.location.pathname.includes('wellness.html');

      if (isCommercialPage) {
        window.location.href = 'furniture.html';
        return;
      }
      window.currentNavMode = 'for_home';
      if (btnHome) btnHome.className = activeGoldClass;
      if (btnBusiness) btnBusiness.className = inactiveDarkClass;
      if (mobileBtnHome) mobileBtnHome.className = mobileActiveGold;
      if (mobileBtnBusiness) mobileBtnBusiness.className = mobileInactiveDark;

      if (navDefaultHome) { navDefaultHome.classList.remove('lg:flex'); navDefaultHome.classList.add('hidden'); }
      if (navForHome) { navForHome.classList.remove('hidden'); navForHome.classList.add('lg:flex'); }
      if (navBusiness) { navBusiness.classList.remove('lg:flex'); navBusiness.classList.add('hidden'); }

      if (mobileDefaultHome) mobileDefaultHome.classList.add('hidden');
      if (mobileForHome) mobileForHome.classList.remove('hidden');
      if (mobileBusiness) mobileBusiness.classList.add('hidden');
    }

    // Auto-open mobile menu if user switches mode while on mobile (< 1024px)
    if (window.innerWidth < 1024) {
      const menu = document.getElementById('mobileNavMenu') || document.getElementById('mobileNavDrawer');
      if (menu && menu.classList.contains('hidden')) {
        window.toggleMobileNav();
      }
    }

    if (window.lucide) window.lucide.createIcons();
  };

  let justToggled = false;

  window.toggleMobileNav = function(e) {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }
    justToggled = true;
    setTimeout(() => { justToggled = false; }, 250);

    const menu = document.getElementById('mobileNavMenu') || document.getElementById('mobileNavDrawer');
    if (!menu) return;

    const isCurrentlyHidden = menu.classList.contains('hidden');
    if (isCurrentlyHidden) {
      menu.classList.remove('hidden');
      document.body.classList.add('mobile-nav-open');
    } else {
      menu.classList.add('hidden');
      document.body.classList.remove('mobile-nav-open');
    }

    const isOpen = !menu.classList.contains('hidden');
    const buttons = document.querySelectorAll('button[onclick*="toggleMobileNav"]');
    buttons.forEach(b => {
      b.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      b.innerHTML = isOpen
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>';
    });
  };

  window.closeMobileNav = function() {
    const menu = document.getElementById('mobileNavMenu') || document.getElementById('mobileNavDrawer');
    if (menu && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      document.body.classList.remove('mobile-nav-open');
      const buttons = document.querySelectorAll('button[onclick*="toggleMobileNav"]');
      buttons.forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>';
      });
    }
  };

  function checkUrlNavMode() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const mode = urlParams.get('mode');
      if (mode === 'for_home') {
        window.toggleNavMode('for_home');
      } else if (mode === 'business') {
        window.toggleNavMode('business');
      }
    } catch (e) {}
  }

  function setupMobileNavInteractions() {
    try {
      const menu = document.getElementById('mobileNavMenu') || document.getElementById('mobileNavDrawer');
      if (!menu) return;

      // Close when clicking any nav link inside mobile menu
      menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          window.closeMobileNav();
        });
      });

      // Close when clicking outside of mobile menu or on the backdrop
      document.addEventListener('click', (e) => {
        if (justToggled) return;
        if (menu.classList.contains('hidden')) return;

        const isClickInsideMenu = menu.contains(e.target);
        const isClickOnToggle = e.target.closest && (
          e.target.closest('button[onclick*="toggleMobileNav"]') ||
          e.target.closest('#btnToggleHome') ||
          e.target.closest('#btnToggleBusiness')
        );

        if (!isClickInsideMenu && !isClickOnToggle) {
          window.closeMobileNav();
        }
      });
    } catch (err) {}
  }

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      UI.init();
      checkUrlNavMode();
      setupMobileNavInteractions();
    });
  } else {
    UI.init();
    checkUrlNavMode();
    setupMobileNavInteractions();
  }

})();
