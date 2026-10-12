import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/categories';

export const Navbar = () => {
  const { 
    totalCartItems, 
    cartSubtotalUSD,
    formatPrice,
    wishlist, 
    setIsCartOpen, 
    setIsWishlistOpen, 
    setIsSearchOpen,
    setActiveCategory,
    closeProductDetail
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (slug) => {
    setActiveCategory(slug);
    closeProductDetail();
    setMobileMenuOpen(false);
    const catalogElement = document.getElementById('shop-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    closeProductDetail();
    setActiveCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gold-200/60' 
            : 'bg-white/90 backdrop-blur-sm border-b border-blush-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            
            {/* Left: Mobile Menu Trigger & Desktop Search */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-luxury-charcoal hover:text-gold-600 transition-colors rounded-full hover:bg-blush-100"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden lg:flex items-center space-x-2 text-luxury-muted hover:text-luxury-dark bg-blush-50/80 hover:bg-blush-100/80 px-3.5 py-2 rounded-full border border-blush-200 transition-all text-xs tracking-wider"
              >
                <Search className="w-3.5 h-3.5 text-gold-500" />
                <span>Search crystals, rings, gems...</span>
                <kbd className="hidden xl:inline-block text-[10px] bg-white border border-blush-200 px-1.5 py-0.5 rounded text-luxury-muted">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Center: Brand Identity */}
            <div className="text-center cursor-pointer select-none" onClick={handleLogoClick}>
              <div className="flex items-center justify-center space-x-1.5 text-gold-500 mb-0.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[10px] tracking-[0.28em] uppercase font-medium text-luxury-muted">
                  Luxury Fine Minerals & Jewellery
                </span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-luxury-dark font-medium tracking-tight hover:opacity-95 transition-opacity">
                Aevah's <span className="italic font-serif text-gold-600 font-normal">Crystals & Gems</span>
              </h1>
            </div>

            {/* Right: Actions (Search on mobile, Wishlist, Bag) */}
            <div className="flex items-center space-x-1 sm:space-x-3">
              
              {/* Mobile Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="lg:hidden p-2 text-luxury-charcoal hover:text-gold-600 transition-colors rounded-full hover:bg-blush-100"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 text-luxury-charcoal hover:text-gold-600 transition-colors rounded-full hover:bg-blush-100"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 bg-blush-400 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center space-x-2 bg-luxury-dark text-white hover:bg-luxury-charcoal px-3.5 py-2 rounded-full transition-all duration-200 group border border-luxury-dark"
                aria-label="Shopping Bag"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-gold-300 group-hover:scale-110 transition-transform" />
                  {totalCartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gold-400 text-luxury-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {totalCartItems}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline-block text-xs font-medium tracking-wider text-blush-100">
                  {cartSubtotalUSD > 0 ? formatPrice(cartSubtotalUSD) : 'Bag'}
                </span>
              </button>

            </div>

          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 py-3 border-t border-blush-100 text-xs tracking-wider uppercase font-medium">
            <button
              onClick={() => handleCategoryClick('all')}
              className="text-luxury-charcoal hover:text-gold-600 transition-colors pb-0.5 hover:border-b hover:border-gold-400"
            >
              All Curations
            </button>
            <button
              onClick={() => handleCategoryClick('natural-crystals')}
              className="text-luxury-charcoal hover:text-gold-600 transition-colors pb-0.5 hover:border-b hover:border-gold-400"
            >
              Natural Crystals
            </button>
            <button
              onClick={() => handleCategoryClick('rings')}
              className="text-luxury-charcoal hover:text-gold-600 transition-colors pb-0.5 hover:border-b hover:border-gold-400"
            >
              Gemstone Rings
            </button>
            <button
              onClick={() => handleCategoryClick('jewellery')}
              className="text-luxury-charcoal hover:text-gold-600 transition-colors pb-0.5 hover:border-b hover:border-gold-400"
            >
              Crystal Jewellery
            </button>
            <button
              onClick={() => handleCategoryClick('earrings')}
              className="text-luxury-charcoal hover:text-gold-600 transition-colors pb-0.5 hover:border-b hover:border-gold-400"
            >
              Earrings
            </button>
            <button
              onClick={() => handleCategoryClick('pendants')}
              className="text-luxury-charcoal hover:text-gold-600 transition-colors pb-0.5 hover:border-b hover:border-gold-400"
            >
              Gemstone Pendants
            </button>
            <button
              onClick={() => handleCategoryClick('accessories')}
              className="text-luxury-charcoal hover:text-gold-600 transition-colors pb-0.5 hover:border-b hover:border-gold-400"
            >
              Crystal Accessories
            </button>
            <a
              href="#about-brand"
              className="text-gold-600 hover:text-gold-700 transition-colors pb-0.5 hover:border-b hover:border-gold-500 font-semibold"
            >
              Our Story
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-50 animate-fade-in border-r border-gold-200">
            {/* Drawer Header */}
            <div className="p-5 border-b border-blush-200 flex items-center justify-between bg-blush-50">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-gold-600 font-semibold">Boutique Menu</span>
                <p className="font-serif text-lg font-medium text-luxury-dark">Aevah's Crystals</p>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full text-luxury-muted hover:text-luxury-dark hover:bg-blush-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body - Category list */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              <div className="text-[11px] font-semibold text-luxury-muted uppercase tracking-wider px-3 py-2">
                Shop By Category
              </div>

              <button
                onClick={() => handleCategoryClick('all')}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-luxury-dark hover:bg-blush-50 rounded-lg text-left transition-colors font-medium"
              >
                <span>All Jewellery & Crystals</span>
                <ChevronRight className="w-4 h-4 text-gold-400" />
              </button>

              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.slug)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-luxury-dark hover:bg-blush-50 rounded-lg text-left transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-6 h-6 rounded-full object-cover border border-gold-200"
                    />
                    <span>{cat.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gold-400" />
                </button>
              ))}

              <div className="pt-4 mt-4 border-t border-blush-200">
                <div className="text-[11px] font-semibold text-luxury-muted uppercase tracking-wider px-3 py-2">
                  Boutique Experience
                </div>

                <a
                  href="#about-brand"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-sm text-luxury-dark hover:bg-blush-50 rounded-lg"
                >
                  <span>About Our Brand</span>
                  <ChevronRight className="w-4 h-4 text-gold-400" />
                </a>

                <a
                  href="#trust-faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-sm text-luxury-dark hover:bg-blush-50 rounded-lg"
                >
                  <span>Crystal Care & FAQs</span>
                  <ChevronRight className="w-4 h-4 text-gold-400" />
                </a>

                <a
                  href="https://wa.me/15552382400?text=Hello%20Aevah's%20Crystals,%20I%20have%20an%20inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-emerald-700 bg-emerald-50/60 rounded-lg mt-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 bg-blush-50 border-t border-blush-200 text-xs text-luxury-muted space-y-2">
              <div className="flex items-center space-x-2 text-[11px]">
                <ShieldCheck className="w-4 h-4 text-gold-500" />
                <span>100% Certified Natural Gemstones</span>
              </div>
              <p className="text-[11px] text-luxury-muted">
                Questions? Email us at <span className="text-luxury-dark font-medium">care@aevahscrystals.com</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
