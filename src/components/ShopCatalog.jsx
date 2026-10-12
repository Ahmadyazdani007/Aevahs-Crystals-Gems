import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Sparkles, 
  SlidersHorizontal, 
  X, 
  RotateCcw,
  Search
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';

export const ShopCatalog = () => {
  const { 
    activeCategory, 
    setActiveCategory, 
    searchQuery, 
    setSearchQuery 
  } = useShop();

  const [selectedGemstone, setSelectedGemstone] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [maxPrice, setMaxPrice] = useState(250);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  // Gemstone options list
  const gemstoneList = [
    'All Gemstones',
    'Ethiopian Opal',
    'Rose Quartz',
    'Amethyst',
    'Rainbow Moonstone',
    'Blue Aquamarine',
    'Emerald',
    'Citrine',
    'Lapis Lazuli',
    'Clear Quartz',
    'Selenite',
    'Tourmaline'
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (activeCategory !== 'all') {
        if (activeCategory === 'new-arrivals' && !product.isNew) return false;
        if (activeCategory === 'bestsellers' && !product.isBestseller) return false;
        if (activeCategory !== 'new-arrivals' && activeCategory !== 'bestsellers' && product.category !== activeCategory) {
          return false;
        }
      }

      // Gemstone match
      if (selectedGemstone !== 'all' && selectedGemstone !== 'All Gemstones') {
        if (!product.gemstone.toLowerCase().includes(selectedGemstone.toLowerCase())) {
          return false;
        }
      }

      // Price filter
      if (product.price > maxPrice) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesGem = product.gemstone.toLowerCase().includes(query);
        const matchesCategory = product.categoryName.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        if (!matchesName && !matchesGem && !matchesCategory && !matchesDesc) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0; // 'featured' retains curated order
    });
  }, [activeCategory, selectedGemstone, maxPrice, searchQuery, sortBy]);

  const resetFilters = () => {
    setActiveCategory('all');
    setSelectedGemstone('all');
    setMaxPrice(250);
    setSortBy('featured');
    setSearchQuery('');
  };

  const hasActiveFilters = activeCategory !== 'all' || selectedGemstone !== 'all' || maxPrice < 250 || searchQuery !== '';

  return (
    <section className="py-14 sm:py-20 bg-white" id="shop-catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Catalog Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-2 text-gold-600 text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Full Atelier</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-luxury-dark font-medium tracking-tight">
            Explore All Crystals & Jewellery
          </h2>
          <p className="text-luxury-muted text-xs sm:text-sm">
            Ethically sourced minerals and artisanal gemstones crafted in 18k champagne gold vermeil.
          </p>
        </div>

        {/* Category Filter Pills (Horizontal scrollable bar) */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-luxury-dark text-white border border-luxury-dark shadow-sm'
                : 'bg-blush-50 text-luxury-charcoal hover:bg-blush-100 border border-gold-200'
            }`}
          >
            All Pieces ({PRODUCTS.length})
          </button>

          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-luxury-dark text-white border border-luxury-dark shadow-sm'
                    : 'bg-blush-50 text-luxury-charcoal hover:bg-blush-100 border border-gold-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Controls Bar: Gemstone dropdown, Price range, Sorting, Results count */}
        <div className="bg-blush-50/70 border border-blush-200/90 rounded-2xl p-3 sm:p-4 mb-8 flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Gemstone Filter & Price range */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            
            {/* Gemstone selector */}
            <div className="relative">
              <select
                value={selectedGemstone}
                onChange={(e) => setSelectedGemstone(e.target.value)}
                className="text-xs bg-white border border-gold-300 text-luxury-charcoal py-2 pl-3 pr-8 rounded-xl font-medium focus:outline-none focus:ring-1 focus:ring-gold-500 cursor-pointer shadow-xs"
              >
                {gemstoneList.map((gem) => (
                  <option key={gem} value={gem === 'All Gemstones' ? 'all' : gem}>
                    {gem}
                  </option>
                ))}
              </select>
            </div>

            {/* Price slider indicator */}
            <div className="hidden sm:flex items-center space-x-2 bg-white border border-gold-200 px-3 py-1.5 rounded-xl text-xs">
              <span className="text-luxury-muted font-medium">Max:</span>
              <span className="font-semibold text-luxury-dark">${maxPrice}</span>
              <input
                type="range"
                min="40"
                max="250"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-20 accent-gold-500 cursor-pointer"
              />
            </div>

            {/* Clear filters button */}
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center space-x-1 text-[11px] font-semibold text-gold-700 bg-gold-100/70 hover:bg-gold-200/80 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}

          </div>

          {/* Right: Sort By Dropdown & Count */}
          <div className="flex items-center space-x-3 ml-auto">
            <span className="text-xs text-luxury-muted">
              <strong className="text-luxury-dark font-semibold">{filteredProducts.length}</strong> items
            </span>

            <div className="relative flex items-center">
              <span className="hidden md:inline-block text-xs text-luxury-muted mr-1.5 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs bg-white border border-gold-300 text-luxury-charcoal py-2 pl-2.5 pr-7 rounded-xl font-medium focus:outline-none focus:ring-1 focus:ring-gold-500 cursor-pointer shadow-xs"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">New Arrivals First</option>
              </select>
            </div>
          </div>

        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-[11px] text-luxury-muted uppercase tracking-wider font-semibold">Active:</span>
            {activeCategory !== 'all' && (
              <span className="inline-flex items-center space-x-1 bg-blush-100 text-luxury-dark text-xs px-2.5 py-1 rounded-full border border-blush-300">
                <span>Category: {activeCategory}</span>
                <button onClick={() => setActiveCategory('all')} className="hover:text-red-500"><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedGemstone !== 'all' && (
              <span className="inline-flex items-center space-x-1 bg-blush-100 text-luxury-dark text-xs px-2.5 py-1 rounded-full border border-blush-300">
                <span>Gemstone: {selectedGemstone}</span>
                <button onClick={() => setSelectedGemstone('all')} className="hover:text-red-500"><X className="w-3 h-3" /></button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center space-x-1 bg-blush-100 text-luxury-dark text-xs px-2.5 py-1 rounded-full border border-blush-300">
                <span>"{searchQuery}"</span>
                <button onClick={() => setSearchQuery('')} className="hover:text-red-500"><X className="w-3 h-3" /></button>
              </span>
            )}
          </div>
        )}

        {/* Product Grid: 
            CRITICAL REQUIREMENT:
            On mobile screens, display exactly 2 product cards side by side in every product grid row.
            On tablets, show 3 products per row where appropriate.
            On desktop, show 4 products per row.
        */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-blush-50/50 rounded-2xl border border-blush-200">
            <Sparkles className="w-8 h-8 text-gold-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-medium text-luxury-dark mb-1">No gemstones match your selection</h3>
            <p className="text-xs text-luxury-muted max-w-md mx-auto mb-5">
              Try adjusting your gemstone filters, price range, or category filter to discover other radiant pieces.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-full bg-luxury-dark text-white text-xs font-semibold tracking-wider uppercase hover:bg-gold-600 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
