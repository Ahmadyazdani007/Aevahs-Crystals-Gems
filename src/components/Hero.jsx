import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Gem, Package, HeartHandshake } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Hero = () => {
  const { setActiveCategory, closeProductDetail } = useShop();

  const handleShopCollection = () => {
    closeProductDetail();
    setActiveCategory('all');
    const catalog = document.getElementById('shop-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreBestsellers = () => {
    closeProductDetail();
    setActiveCategory('bestsellers');
    const catalog = document.getElementById('shop-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush-100/70 via-blush-50 to-white pt-6 pb-12 sm:pt-10 sm:pb-20 border-b border-blush-200/70">
      
      {/* Delicate background aura ornaments */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blush-200/40 via-gold-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-gold-200/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Editorial Typography + Curated Luxury Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6 pt-2">
            
            {/* Fine Luxury Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 border border-gold-300/80 px-4 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-luxury-charcoal">
                Fine Mineral Specimen & Artisan Jewellery
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-luxury-dark font-medium tracking-tight leading-[1.12]">
              Discover the Beauty <br className="hidden sm:inline" />
              <span className="italic font-serif text-gold-600 font-normal">Within Every Gem.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-luxury-muted text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore a beautiful collection of crystals, gemstones, and timeless jewellery chosen to add elegance to your everyday style.
            </p>

            {/* Two Required CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={handleShopCollection}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-luxury-dark text-white font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-gold-600 transition-all duration-300 shadow-md group border border-luxury-dark hover:border-gold-600"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-gold-300" />
              </button>

              <button
                onClick={handleExploreBestsellers}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-luxury-dark font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-blush-100 hover:text-gold-700 transition-all duration-300 border border-gold-300/90 shadow-sm"
              >
                <span>Explore Bestsellers</span>
              </button>
            </div>

            {/* Editorial Gemstone Note */}
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-6 text-xs text-luxury-muted">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                <span className="tracking-wide">Ethically Mined Stones</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blush-400"></span>
                <span className="tracking-wide">18k Champagne Vermeil</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Gemstone Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Main Feature Image (Opal & Gold Ring) */}
              <div className="relative rounded-2xl overflow-hidden shadow-luxury border-2 border-white/80 group">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85"
                  alt="Sparkling Ethiopian Opal in 18k Champagne Gold"
                  className="w-full h-[360px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-gold-200/90 shadow-soft max-w-xs">
                  <div className="flex items-center space-x-2 text-gold-600 text-xs font-semibold uppercase tracking-wider mb-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Signature Showcase</span>
                  </div>
                  <p className="font-serif text-sm sm:text-base font-semibold text-luxury-dark">Celestial Ethiopian Opal Ring</p>
                  <p className="text-[11px] text-luxury-muted">Hand-set in 18k Champagne Gold Vermeil</p>
                </div>
              </div>

              {/* Secondary Floating Accent Card (Raw Rose Quartz) */}
              <div className="hidden sm:block absolute -top-4 -left-6 w-36 sm:w-44 rounded-xl overflow-hidden shadow-luxury border-2 border-white bg-white p-1.5 animate-slide-up">
                <img
                  src="https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=400&q=80"
                  alt="Natural Madagascar Rose Quartz"
                  className="w-full h-24 sm:h-28 object-cover rounded-lg"
                />
                <p className="text-[10px] text-center font-medium text-luxury-charcoal mt-1 tracking-wider uppercase">
                  Raw Rose Quartz
                </p>
              </div>

              {/* Third Floating Accent Card (Moonstone Earrings) */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-36 sm:w-44 rounded-xl overflow-hidden shadow-luxury border-2 border-white bg-white p-1.5 animate-slide-up">
                <img
                  src="https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80"
                  alt="Starlight Moonstone Huggies"
                  className="w-full h-24 sm:h-28 object-cover rounded-lg"
                />
                <p className="text-[10px] text-center font-medium text-luxury-charcoal mt-1 tracking-wider uppercase">
                  Rainbow Moonstone
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Boutique Reassurance Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-blush-200/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/70 border border-blush-200/60 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center text-gold-600 flex-shrink-0">
              <Gem className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-luxury-dark tracking-wide">100% Genuine Gems</p>
              <p className="text-[11px] text-luxury-muted">Certified authentic natural stones</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/70 border border-blush-200/60 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center text-gold-600 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-luxury-dark tracking-wide">18k Gold Vermeil</p>
              <p className="text-[11px] text-luxury-muted">Heavy micron gold over 925 silver</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/70 border border-blush-200/60 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center text-gold-600 flex-shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-luxury-dark tracking-wide">Velvet Keepsake Box</p>
              <p className="text-[11px] text-luxury-muted">Complimentary luxury packaging</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/70 border border-blush-200/60 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center text-gold-600 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-luxury-dark tracking-wide">Insured Delivery</p>
              <p className="text-[11px] text-luxury-muted">Free shipping on orders over $100</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
