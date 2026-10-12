import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const SearchModal = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    formatPrice, 
    openProductDetail,
    setActiveCategory 
  } = useShop();

  const [term, setTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setTerm('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const popularTags = ['Ethiopian Opal', 'Rose Quartz', 'Amethyst', 'Rings', 'Moonstone', 'Aquamarine'];

  const results = term.trim() 
    ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(term.toLowerCase()) ||
        p.gemstone.toLowerCase().includes(term.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(term.toLowerCase()) ||
        p.description.toLowerCase().includes(term.toLowerCase())
      )
    : [];

  const handleSelectProduct = (product) => {
    setIsSearchOpen(false);
    openProductDetail(product);
  };

  const handleTagClick = (tag) => {
    setTerm(tag);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-modal border border-gold-300 overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-blush-200 flex items-center space-x-3 bg-blush-50/80">
          <Search className="w-5 h-5 text-gold-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search gems, rings, opals, rose quartz..."
            className="w-full bg-transparent text-sm sm:text-base text-luxury-dark placeholder-luxury-muted focus:outline-none"
          />
          {term && (
            <button
              onClick={() => setTerm('')}
              className="text-luxury-muted hover:text-luxury-dark p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-semibold uppercase tracking-wider text-luxury-muted hover:text-luxury-dark pl-2 border-l border-blush-300"
          >
            Esc
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="px-5 py-3 bg-white border-b border-blush-100 flex items-center space-x-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] uppercase font-semibold tracking-wider text-luxury-muted flex-shrink-0">
            Suggested:
          </span>
          {popularTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="text-xs px-2.5 py-1 rounded-full bg-blush-50 hover:bg-blush-100 text-luxury-charcoal border border-blush-200 flex-shrink-0 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
          {term.trim() ? (
            results.length > 0 ? (
              <div className="space-y-3">
                <p className="text-xs text-luxury-muted font-medium">Found {results.length} precious matches:</p>
                {results.map(prod => (
                  <div
                    key={prod.id}
                    onClick={() => handleSelectProduct(prod)}
                    className="flex items-center space-x-3.5 p-2.5 rounded-xl hover:bg-blush-50 cursor-pointer border border-transparent hover:border-gold-200 transition-all"
                  >
                    <img 
                      src={prod.images[0]} 
                      alt={prod.name} 
                      className="w-14 h-14 object-cover rounded-lg border border-gold-200 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm font-semibold text-luxury-dark truncate">{prod.name}</p>
                      <p className="text-[11px] text-gold-600 truncate">{prod.gemstone} • {prod.categoryName}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-luxury-dark">{formatPrice(prod.price)}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 text-luxury-muted space-y-2">
                <Sparkles className="w-8 h-8 text-gold-400 mx-auto" />
                <p className="text-sm font-medium text-luxury-dark">No pieces match "{term}"</p>
                <p className="text-xs max-w-xs mx-auto">Try searching for generic terms like "ring", "opal", "quartz", or "emerald".</p>
              </div>
            )
          ) : (
            <div className="py-6 text-center text-luxury-muted">
              <p className="text-xs">Type a keyword or select a suggested gemstone above.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
