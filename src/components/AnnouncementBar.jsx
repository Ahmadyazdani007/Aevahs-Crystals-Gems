import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, Globe, ChevronDown } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AnnouncementBar = () => {
  const { currency, setCurrency, CURRENCIES } = useShop();
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const messages = [
    "✨ Complimentary Luxury Velvet Keepsake Box & Insured Shipping over $100",
    "💎 Spring Celestial Release: Handcrafted 18k Vermeil & Rare Ethiopian Opals",
    "🌸 Welcome to the Circle: Use code AEVAH10 for 10% off your order"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex(prev => (prev + 1) % messages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="bg-blush-100/90 border-b border-blush-200 text-xs text-luxury-dark py-2 px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Concierge / WhatsApp */}
        <div className="hidden md:flex items-center space-x-2 text-luxury-muted hover:text-gold-600 transition-colors">
          <MessageCircle className="w-3.5 h-3.5 text-gold-500" />
          <a 
            href="https://wa.me/15552382400?text=Hello%20Aevah's%20Crystals,%20I%20have%20an%20inquiry%20regarding%20your%20fine%20gemstones" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline tracking-wider font-light"
          >
            Concierge Inquiry
          </a>
        </div>

        {/* Center: Rotating Announcement */}
        <div className="flex-1 text-center font-medium tracking-wide text-luxury-charcoal text-[11px] sm:text-xs truncate px-2">
          <span className="inline-block transition-all duration-500">
            {messages[announcementIndex]}
          </span>
        </div>

        {/* Right: Currency Selector */}
        <div className="relative">
          <button
            onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
            className="flex items-center space-x-1.5 text-luxury-muted hover:text-luxury-dark transition-colors px-2 py-0.5 rounded border border-transparent hover:border-blush-300"
            aria-label="Currency Selector"
          >
            <Globe className="w-3.5 h-3.5 text-gold-500" />
            <span className="font-semibold text-[11px]">{currency}</span>
            <ChevronDown className={`w-3 h-3 text-luxury-muted transition-transform duration-200 ${currencyDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {currencyDropdownOpen && (
            <div 
              className="absolute right-0 mt-1.5 w-32 bg-white border border-gold-200 rounded-md shadow-luxury py-1 z-50 text-left animate-fade-in"
              onMouseLeave={() => setCurrencyDropdownOpen(false)}
            >
              {Object.keys(CURRENCIES).map((currKey) => (
                <button
                  key={currKey}
                  onClick={() => {
                    setCurrency(currKey);
                    setCurrencyDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs transition-colors flex items-center justify-between ${
                    currency === currKey 
                      ? 'bg-blush-100 text-gold-600 font-semibold' 
                      : 'text-luxury-charcoal hover:bg-blush-50'
                  }`}
                >
                  <span>{CURRENCIES[currKey].label}</span>
                  {currency === currKey && <span className="text-gold-500 text-[10px]">●</span>}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
