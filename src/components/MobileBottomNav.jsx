import React from 'react';
import { Home, Sparkles, Heart, ShoppingBag, Search } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const MobileBottomNav = () => {
  const { 
    totalCartItems, 
    wishlist, 
    setIsCartOpen, 
    setIsWishlistOpen, 
    setIsSearchOpen,
    setActiveCategory,
    closeProductDetail 
  } = useShop();

  const handleHome = () => {
    closeProductDetail();
    setActiveCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShop = () => {
    closeProductDetail();
    const catalog = document.getElementById('shop-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-gold-200/80 px-2 py-1.5 shadow-lg">
      <div className="flex items-center justify-around max-w-md mx-auto">
        
        {/* Home */}
        <button
          onClick={handleHome}
          className="flex flex-col items-center py-1 px-2.5 text-luxury-muted hover:text-gold-600 transition-colors"
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-0.5">Home</span>
        </button>

        {/* Shop */}
        <button
          onClick={handleShop}
          className="flex flex-col items-center py-1 px-2.5 text-luxury-muted hover:text-gold-600 transition-colors"
          aria-label="Shop"
        >
          <Sparkles className="w-5 h-5 text-gold-500" />
          <span className="text-[10px] font-medium mt-0.5">Shop</span>
        </button>

        {/* Search */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex flex-col items-center py-1 px-2.5 text-luxury-muted hover:text-gold-600 transition-colors"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-0.5">Search</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={() => setIsWishlistOpen(true)}
          className="relative flex flex-col items-center py-1 px-2.5 text-luxury-muted hover:text-gold-600 transition-colors"
          aria-label="Wishlist"
        >
          <Heart className="w-5 h-5" />
          {wishlist.length > 0 && (
            <span className="absolute top-0.5 right-2 bg-blush-500 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
          <span className="text-[10px] font-medium mt-0.5">Saved</span>
        </button>

        {/* Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center py-1 px-2.5 text-luxury-muted hover:text-gold-600 transition-colors"
          aria-label="Bag"
        >
          <ShoppingBag className="w-5 h-5" />
          {totalCartItems > 0 && (
            <span className="absolute top-0.5 right-2 bg-gold-500 text-luxury-dark text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {totalCartItems}
            </span>
          )}
          <span className="text-[10px] font-medium mt-0.5">Bag</span>
        </button>

      </div>
    </div>
  );
};
