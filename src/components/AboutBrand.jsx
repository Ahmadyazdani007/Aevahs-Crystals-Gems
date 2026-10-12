import React from 'react';
import { Sparkles, Gem, Compass, Shield, HeartHandshake } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const AboutBrand = () => {
  return (
    <section className="py-16 sm:py-24 bg-blush-100/60 border-b border-blush-200 relative overflow-hidden" id="about-brand">
      
      {/* Decorative aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blush-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Imagery Gallery */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury border-2 border-white">
              <SafeImage
                src="https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80"
                alt="Jeweller inspecting natural gemstones in atelier"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-gold-200 shadow-sm">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-600 block">
                  Artisan Atelier
                </span>
                <span className="font-serif text-xs sm:text-sm font-medium text-luxury-dark">
                  Hand-Selected Natural Minerals
                </span>
              </div>
            </div>

            {/* Split sub-images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-gold-200/70 shadow-xs h-28 sm:h-36">
                <SafeImage
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80"
                  alt="Raw crystal cluster texture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-gold-200/70 shadow-xs h-28 sm:h-36">
                <SafeImage
                  src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80"
                  alt="Gold vermeil setting detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Brand Story */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 bg-white/90 border border-gold-300 px-3.5 py-1 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-luxury-charcoal">
                Our Story & Philosophy
              </span>
            </div>

            {/* Required Section Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-luxury-dark font-medium tracking-tight leading-tight">
              A Little Sparkle, <br />
              <span className="italic font-serif text-gold-600 font-normal">A Lasting Impression</span>
            </h2>

            {/* Narrative Story (Honest, poetic, grounded, editable, no false claims) */}
            <div className="space-y-4 text-luxury-charcoal text-sm sm:text-base leading-relaxed font-light">
              <p>
                Welcome to <strong>Aevah's Crystals & Gems</strong>, an independent boutique born from a heartfelt reverence for the earth’s natural geological artistry. We curate authentic mineral specimens and handcrafted gemstone jewellery designed to bring radiant elegance and mindful serenity to your everyday wardrobe.
              </p>
              
              <p>
                Every natural crystal and faceted gemstone tells a million-year story written by pressure, heat, and time. From the kaleidoscopic play-of-color in Ethiopian opals to the gentle blush translucency of Madagascar rose quartz, our pieces celebrate pure unadorned beauty.
              </p>

              <p>
                We believe true luxury is grounded in transparency and respect. We partner with ethical lapidary artisans who honor sustainable mineral extraction and precision craftsmanship. Our rings, necklaces, and earrings are set in durable 18k champagne gold vermeil over nickel-free 925 sterling silver, ensuring your pieces stay lustrous for years to come.
              </p>
            </div>

            {/* Brand Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-blush-200">
              <div className="bg-white/80 p-3.5 rounded-xl border border-gold-200/80 shadow-xs">
                <Gem className="w-5 h-5 text-gold-600 mb-2" />
                <h3 className="font-serif text-sm font-semibold text-luxury-dark">Authentic Gems</h3>
                <p className="text-[11px] text-luxury-muted mt-0.5">100% natural stones with certified geological origins.</p>
              </div>

              <div className="bg-white/80 p-3.5 rounded-xl border border-gold-200/80 shadow-xs">
                <Compass className="w-5 h-5 text-gold-600 mb-2" />
                <h3 className="font-serif text-sm font-semibold text-luxury-dark">Mindful Sourcing</h3>
                <p className="text-[11px] text-luxury-muted mt-0.5">Ethical workshops prioritizing fair trade practices.</p>
              </div>

              <div className="bg-white/80 p-3.5 rounded-xl border border-gold-200/80 shadow-xs">
                <HeartHandshake className="w-5 h-5 text-gold-600 mb-2" />
                <h3 className="font-serif text-sm font-semibold text-luxury-dark">Fine Craft</h3>
                <p className="text-[11px] text-luxury-muted mt-0.5">Substantial 18k gold vermeil and hypoallergenic finishes.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
