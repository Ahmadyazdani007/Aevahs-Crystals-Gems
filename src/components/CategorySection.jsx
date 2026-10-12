import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { useShop } from '../context/ShopContext';
import { SafeImage } from './SafeImage';

export const CategorySection = () => {
  const { setActiveCategory, closeProductDetail } = useShop();

  const handleSelectCategory = (slug) => {
    closeProductDetail();
    setActiveCategory(slug);
    const catalog = document.getElementById('shop-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-blush-200" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center space-x-2 text-gold-600 text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Collections</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-luxury-dark font-medium tracking-tight">
            Shop by Category
          </h2>
          <p className="text-luxury-muted text-xs sm:text-sm font-normal">
            Immerse yourself in nature’s finest creations. Each specimen and jewellery piece is thoughtfully selected for clarity, character, and enduring luxury.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5 lg:gap-6">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => handleSelectCategory(category.slug)}
              className="group relative overflow-hidden rounded-2xl bg-blush-50 border border-gold-200/80 hover:border-gold-400 transition-all duration-500 shadow-sm hover:shadow-luxury text-left flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              {/* Category Image Box */}
              <div className="relative aspect-square w-full overflow-hidden bg-blush-100">
                <SafeImage
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 via-luxury-dark/15 to-transparent transition-opacity" />

                {/* Badge top-left */}
                <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-luxury-dark text-[10px] font-semibold px-2 py-0.5 rounded-full border border-gold-200 shadow-xs tracking-wider">
                  {category.badge}
                </span>

                {/* Floating arrow top-right */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/80 group-hover:bg-gold-500 text-luxury-dark group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Bottom title inside image for sleek mobile look */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <h3 className="font-serif text-sm sm:text-lg font-medium leading-tight group-hover:text-gold-200 transition-colors drop-shadow-sm">
                    {category.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-blush-100/90 truncate mt-0.5 font-light">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Lower bar: Item count */}
              <div className="py-2 px-3 bg-white flex items-center justify-between text-[11px] text-luxury-muted border-t border-blush-100">
                <span className="font-medium text-luxury-charcoal">{category.count}</span>
                <span className="text-gold-600 font-medium group-hover:underline">Explore &rarr;</span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
