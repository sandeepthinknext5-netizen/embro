import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function WishlistDrawer({ onQuickViewProduct, onExploreFurniture }) {
  const { wishlistItems, isWishlistOpen, setIsWishlistOpen, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isWishlistOpen) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  const handleMoveAllToCart = () => {
    wishlistItems.forEach(item => {
      addToCart(item);
      removeFromWishlist(item.id);
    });
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsWishlistOpen(false)}>
      <div className="drawer-container wishlist-drawer animate-fade" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <Heart size={20} className="text-clay" fill="#A05A3C" />
            <h3 className="font-serif">Saved Pieces ({wishlistItems.length})</h3>
          </div>
          <button className="drawer-close-btn" onClick={() => setIsWishlistOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="cart-items-scroll">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <div className="cart-item-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-item-info">
                  <div className="flex-between">
                    <h4 className="cart-item-name font-serif">{item.name}</h4>
                    <button 
                      className="cart-remove-btn"
                      onClick={() => removeFromWishlist(item.id)}
                      title="Remove from saved"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <span className="cart-item-finish">{item.category} • {item.room}</span>
                  <span className="cart-item-price">{formatPrice(item.price)}</span>

                  <div className="wishlist-item-actions mt-2">
                    <button 
                      className="btn-primary wishlist-add-cart-btn"
                      onClick={() => {
                        addToCart(item);
                        removeFromWishlist(item.id);
                      }}
                    >
                      <ShoppingBag size={14} /> Move to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="cart-empty-state">
              <Heart size={48} className="empty-cart-icon text-clay" />
              <h4 className="font-serif">Your wishlist is empty</h4>
              <p>Save your favorite furniture silhouettes and materials for later reflection.</p>
              <button 
                className="btn-primary mt-3"
                onClick={() => {
                  setIsWishlistOpen(false);
                  onExploreFurniture();
                }}
              >
                Browse Catalog
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlistItems.length > 0 && (
          <div className="cart-drawer-footer">
            <button className="btn-gold w-full" onClick={handleMoveAllToCart}>
              Move All to Shopping Bag <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>

      <style>{`
        .text-clay {
          color: var(--accent-clay);
        }

        .wishlist-item-actions {
          display: flex;
          gap: 0.5rem;
        }

        .wishlist-add-cart-btn {
          padding: 0.45rem 0.9rem;
          font-size: 0.75rem;
        }
      `}</style>
    </div>
  );
}
