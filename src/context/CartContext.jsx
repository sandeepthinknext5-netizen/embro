import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('embroshyal_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // in percent
  const [couponMessage, setCouponMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('embroshyal_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const addToCart = (product, selectedFinish = null, qty = 1) => {
    const finish = selectedFinish || (product.finishes && product.finishes[0] ? product.finishes[0].name : 'Standard');
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id && item.selectedFinish === finish);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += qty;
        return updated;
      } else {
        return [...prev, { ...product, selectedFinish: finish, quantity: qty }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id, finish) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedFinish === finish)));
  };

  const updateQuantity = (id, finish, delta) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id && item.selectedFinish === finish) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedDiscount(0);
    setCouponCode('');
  };

  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'EMBROLUXE10' || clean === 'LUXE10') {
      setAppliedDiscount(10);
      setCouponCode(clean);
      setCouponMessage('Exclusive 10% Luxury Welcome Privilege applied!');
      return { success: true, message: '10% privilege applied successfully!' };
    } else if (clean === 'FIRST15') {
      setAppliedDiscount(15);
      setCouponCode(clean);
      setCouponMessage('15% First Home Furnishing privilege applied!');
      return { success: true, message: '15% privilege applied!' };
    } else {
      return { success: false, message: 'Invalid or expired privilege code.' };
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const freeShippingThreshold = 50000;
  const shipping = subtotal > freeShippingThreshold || subtotal === 0 ? 0 : 2500;
  const total = subtotal - discountAmount + shipping;
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      isCheckoutOpen,
      setIsCheckoutOpen,
      couponCode,
      appliedDiscount,
      couponMessage,
      applyCoupon,
      subtotal,
      discountAmount,
      shipping,
      total,
      totalCount,
      freeShippingThreshold
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
