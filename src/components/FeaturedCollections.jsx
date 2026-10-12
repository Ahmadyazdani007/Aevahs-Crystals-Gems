import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';

export const FeaturedCollections = () => {
  const { setActiveCategory } = useShop();
  const [activeTab, setActiveTab] = useState('new-arrivals');

  // Filter collections
  const newArrivals = PRODUCTS.filter(p => p.isNew);
  const bestsellers = PRODUCTS.filter(p => p.isBestseller);
  const elegantRings = PRODUCTS.filter(p => p.category === 'rings');
  const uniqueJewellery = PRODUCTS.filter(p => p.category === 'jewellery' || p.category === 'pendants' || p.category === 'earrings');

  const tabs = [
    { id: 'new-arrivals', label: 'New Arrivals', items: newArrivals.slice(0, 4), categorySlug: 'new-arrivals' },
    { id: 'bestselling-crystals', label: 'Bestselling Crystals', items: bestsellers.slice(0, 4), categorySlug: 'bestsellers' },
    { id: 'elegant-rings', label: 'Elegant Rings', items: elegantRings.slice(0, 4), categorySlug: 'rings' },
    { id: 'unique-jewellery', label: 'Unique Gemstone Jewellery', items: uniqueJewellery.slice(0, 4), categorySlug: 'jewellery' },
  ];

  const currentCollection = tabs.find(t => t.id === activeTab) || tabs[0];

  const handleViewAllCollection = (slug) => {
    setActiveCategory(slug);
    const catalog = document.getElementById('shop-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-blush-50/50 border-b border-blush-200" id="featured-collections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 text-gold-600 text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handpicked Highlights</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-luxury-dark font-medium tracking-tight">
            Featured Collections
          </h2>
          <p className="text-luxury-muted text-xs sm:text-sm">
            Explore our curated edits of ethereal gems, artisan ring settings, and timeless mineral treasures.
          </p>
        </div>

        {/* Collection Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar space-x-2 pb-4 mb-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-luxury-dark text-white shadow-sm border border-luxury-dark'
                    : 'bg-white text-luxury-charcoal hover:bg-blush-100 hover:text-gold-700 border border-gold-200/70'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid: 
            CRITICAL REQUIREMENT: Exactly 2 product cards side-by-side on mobile, 3 on tablet, 4 on desktop.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {currentCollection.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button
            onClick={() => handleViewAllCollection(currentCollection.categorySlug)}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white hover:bg-blush-100 text-luxury-dark border border-gold-400 text-xs font-semibold tracking-wider uppercase transition-all shadow-xs group"
          >
            <span>View All {currentCollection.label}</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
