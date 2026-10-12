import React, { useState } from 'react';
import { 
  Sparkles, 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Heart, 
  Check, 
  ArrowRight,
  Instagram,
  Facebook,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/categories';

export const Footer = () => {
  const { setActiveCategory, closeProductDetail, setActivePolicyModal, showToast } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleCategoryClick = (slug) => {
    closeProductDetail();
    setActiveCategory(slug);
    const catalog = document.getElementById('shop-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    showToast('Welcome to the VIP Circle! Use code AEVAH10 for 10% off', 'success');
  };

  return (
    <footer className="bg-luxury-dark text-white pt-16 sm:pt-20 pb-24 sm:pb-12 border-t-2 border-gold-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Strip */}
        <div className="bg-luxury-charcoal rounded-3xl p-6 sm:p-10 border border-gold-300/40 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7 space-y-2">
              <div className="flex items-center space-x-2 text-gold-400 text-xs uppercase tracking-widest font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>The Aevah Collector's Circle</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                Receive 10% Off Your First Gemstone Adornment
              </h3>
              <p className="text-xs sm:text-sm text-blush-200/80 font-light leading-relaxed max-w-xl">
                Subscribe for exclusive private mineral releases, bespoke ring allocations, and seasonal gemstone styling guides.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-blush-100/10 border border-gold-400 p-4 rounded-2xl flex items-center space-x-3 text-gold-300">
                  <Check className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                  <div className="text-xs">
                    <p className="font-semibold text-white">You're on the VIP list!</p>
                    <p className="text-blush-200">Your exclusive discount code is <strong className="text-gold-300 font-mono text-sm">AEVAH10</strong></p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 px-4 py-3 rounded-full bg-luxury-dark border border-gold-300/60 text-white placeholder-luxury-muted text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-luxury-dark font-semibold text-xs tracking-wider uppercase transition-colors whitespace-nowrap shadow-sm"
                  >
                    Join Circle
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-luxury-charcoal">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-tight">
              Aevah's <span className="italic text-gold-400">Crystals & Gems</span>
            </h2>
            <p className="text-xs sm:text-sm text-blush-200/80 font-light leading-relaxed max-w-sm">
              A luxury atelier celebrating natural crystals, ethically mined gemstones, and timeless jewellery crafted in 18k champagne gold vermeil.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-luxury-charcoal hover:bg-gold-500 hover:text-luxury-dark text-gold-300 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-luxury-charcoal hover:bg-gold-500 hover:text-luxury-dark text-gold-300 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/15552382400" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-luxury-charcoal hover:bg-emerald-600 hover:text-white text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Categories Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gold-400">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-blush-200/90 font-light">
              <li>
                <button onClick={() => handleCategoryClick('natural-crystals')} className="hover:text-gold-300 transition-colors">
                  Natural Crystals
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('rings')} className="hover:text-gold-300 transition-colors">
                  Gemstone Rings
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('jewellery')} className="hover:text-gold-300 transition-colors">
                  Crystal Jewellery
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('earrings')} className="hover:text-gold-300 transition-colors">
                  Earrings
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('pendants')} className="hover:text-gold-300 transition-colors">
                  Gemstone Pendants
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('accessories')} className="hover:text-gold-300 transition-colors">
                  Crystal Accessories
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links & Policies Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gold-400">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-blush-200/90 font-light">
              <li>
                <a href="#about-brand" className="hover:text-gold-300 transition-colors">
                  About Our Brand
                </a>
              </li>
              <li>
                <a href="#trust-faq" className="hover:text-gold-300 transition-colors">
                  Crystal Care & FAQs
                </a>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('shipping')} className="hover:text-gold-300 transition-colors">
                  Shipping & Packaging
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('returns')} className="hover:text-gold-300 transition-colors">
                  30-Day Returns Policy
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('privacy')} className="hover:text-gold-300 transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Atelier Contact Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gold-400">
              Atelier Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-blush-200/90 font-light">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Fine Gem Atelier, 450 Rodeo Drive, Beverly Hills, CA</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>concierge@aevahscrystals.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>+1 (555) 238-2400</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: Mon - Sat 9am to 7pm</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-luxury-muted space-y-4 sm:space-y-0">
          <p className="text-[11px] text-blush-200/60">
            © {new Date().getFullYear()} Aevah's Crystals & Gems. All rights reserved. Handcrafted natural mineral fine jewellery.
          </p>

          <div className="flex items-center space-x-4 text-[10px] text-blush-200/80">
            <div className="flex items-center space-x-1">
              <Lock className="w-3.5 h-3.5 text-gold-400" />
              <span>256-Bit SSL Encrypted</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Certified Natural Gems</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
