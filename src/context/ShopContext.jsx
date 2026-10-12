import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  CAD: { symbol: 'CA$', rate: 1.36, label: 'CAD (CA$)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  AUD: { symbol: 'A$', rate: 1.52, label: 'AUD (A$)' },
};

export const ShopProvider = ({ children }) => {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('aevah_cart');
      return saved ? JSON.parse(saved) : [
        // Pre-populate with 1 lovely item so cart isn't completely empty upon first arrival
        {
          cartItemId: 'prod-1-US 7-18k Champagne Gold',
          product: PRODUCTS[0],
          quantity: 1,
          selectedSize: 'US 7',
          selectedMetal: '18k Champagne Gold'
        }
      ];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('aevah_wishlist');
      return saved ? JSON.parse(saved) : ['prod-1', 'prod-3'];
    } catch {
      return [];
    }
  });

  // Navigation and active views
  const [activeCategory, setActiveCategory] = useState('all');
  const [currency, setCurrency] = useState('USD');
  
  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // For Quick View
  const [viewingProduct, setViewingProduct] = useState(null); // For Full Product Detail Page
  const [activePolicyModal, setActivePolicyModal] = useState(null); // For shipping / returns / privacy
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Promo code & discounts
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    try {
      localStorage.setItem('aevah_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('aevah_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Toast dispatch
  const showToast = (message, type = 'gold') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Currency Formatter
  const formatPrice = (usdAmount) => {
    const curr = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = usdAmount * curr.rate;
    return `${curr.symbol}${converted.toFixed(2)}`;
  };

  // Add to Cart
  const addToCart = (product, quantity = 1, size = null, metal = null) => {
    const chosenSize = size || (product.sizes && product.sizes[0]) || 'Standard';
    const chosenMetal = metal || (product.metals && product.metals[0]) || '18k Champagne Gold';
    const cartItemId = `${product.id}-${chosenSize}-${chosenMetal}`;

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      } else {
        return [...prev, {
          cartItemId,
          product,
          quantity,
          selectedSize: chosenSize,
          selectedMetal: chosenMetal
        }];
      }
    });

    showToast(`Added ${product.name} to your bag`, 'success');
  };

  // Remove from Cart
  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
    showToast('Item removed from shopping bag');
  };

  // Update Cart Quantity
  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.cartItemId === cartItemId) {
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Wishlist actions
  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const isSaved = prev.includes(productId);
      if (isSaved) {
        showToast('Removed from your wishlist');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to your wishlist', 'gold');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Promo code validation
  const applyPromoCode = (code) => {
    const clean = code.trim().toUpperCase();
    setPromoError('');
    if (clean === 'AEVAH10') {
      setAppliedPromo({ code: clean, discountPercent: 10, label: '10% Off VIP Welcome' });
      showToast('Promo code AEVAH10 applied: 10% discount!', 'success');
      return true;
    } else if (clean === 'SPARKLE') {
      setAppliedPromo({ code: clean, fixedAmount: 15, label: '$15 Off Order' });
      showToast('Promo code SPARKLE applied: $15 off!', 'success');
      return true;
    } else if (clean === 'AEVAHGOLD') {
      setAppliedPromo({ code: clean, discountPercent: 15, label: '15% Off VIP Circle' });
      showToast('Promo code AEVAHGOLD applied: 15% discount!', 'success');
      return true;
    } else {
      setPromoError('Invalid promo code. Try AEVAH10 for 10% off.');
      return false;
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoError('');
    showToast('Promo code removed');
  };

  // Cart financial calculations
  const cartSubtotalUSD = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  let discountUSD = 0;
  if (appliedPromo) {
    if (appliedPromo.discountPercent) {
      discountUSD = (cartSubtotalUSD * appliedPromo.discountPercent) / 100;
    } else if (appliedPromo.fixedAmount) {
      discountUSD = Math.min(appliedPromo.fixedAmount, cartSubtotalUSD);
    }
  }

  const freeShippingThresholdUSD = 100;
  const isFreeShipping = cartSubtotalUSD >= freeShippingThresholdUSD || cartSubtotalUSD === 0;
  const standardShippingUSD = isFreeShipping ? 0 : 12;
  const cartTotalUSD = Math.max(0, cartSubtotalUSD - discountUSD + standardShippingUSD);
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Quick View helper
  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  // Full Product Detail helper
  const openProductDetail = (product) => {
    setViewingProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProductDetail = () => {
    setViewingProduct(null);
  };

  return (
    <ShopContext.Provider value={{
      // Data & Cart
      cart,
      wishlist,
      totalCartItems,
      cartSubtotalUSD,
      discountUSD,
      standardShippingUSD,
      cartTotalUSD,
      freeShippingThresholdUSD,
      isFreeShipping,
      appliedPromo,
      promoError,
      applyPromoCode,
      removePromoCode,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      // Wishlist
      toggleWishlist,
      isInWishlist,
      // Currencies
      currency,
      setCurrency,
      CURRENCIES,
      formatPrice,
      // Category & Search
      activeCategory,
      setActiveCategory,
      searchQuery,
      setSearchQuery,
      // UI Modals & Drawers
      isCartOpen,
      setIsCartOpen,
      isWishlistOpen,
      setIsWishlistOpen,
      isSearchOpen,
      setIsSearchOpen,
      isCheckoutOpen,
      setIsCheckoutOpen,
      selectedProduct,
      openQuickView,
      closeQuickView,
      viewingProduct,
      openProductDetail,
      closeProductDetail,
      activePolicyModal,
      setActivePolicyModal,
      // Toasts
      toasts,
      showToast
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
