import React, { useState } from 'react';
import { 
  Sparkles, 
  ChevronDown, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  ShieldCheck, 
  PackageCheck, 
  Clock, 
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CustomerTrustSection = () => {
  const { setActivePolicyModal } = useShop();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      question: "Are your crystals and gemstones 100% natural?",
      answer: "Yes, absolutely. Every gemstone and mineral specimen at Aevah's Crystals & Gems is 100% natural and earth-formed. We do not sell synthetic or lab-created substitutes. Because each stone is natural, subtle variations in hue, inclusion patterns, and organic crystal formations are inherent characteristics that make every piece unique."
    },
    {
      question: "What is 18k Champagne Gold Vermeil?",
      answer: "Gold vermeil (pronounced ver-may) is a premium jewelry technique requiring a thick, substantial layer of genuine 18-karat gold electroplated over solid 925 sterling silver (at least 2.5 microns thick). Unlike standard gold flash-plating, vermeil provides lasting brilliance, hypoallergenic wear, and enduring durability for daily enjoyment."
    },
    {
      question: "How do I care for and clean my natural gemstone jewellery?",
      answer: "We recommend storing each piece in the provided Aevah velvet keepsake pouch to prevent scratching. Gently wipe with the included soft microfiber polishing cloth after wear. For soft or hydrous gemstones like Opal and Selenite, avoid harsh liquids, prolonged water soaking, perfumes, and ultrasonic cleaning baths."
    },
    {
      question: "What is your shipping and delivery timeframe?",
      answer: "We package and dispatch all orders within 24 to 48 business hours from our boutique studio. Standard insured domestic shipping typically takes 3 to 5 business days, while express courier options arrive in 1 to 2 business days. Orders over $100 receive complimentary insured delivery with tracking."
    },
    {
      question: "What is your return & exchange policy?",
      answer: "We want you to be completely enchanted with your chosen piece. We gladly accept returns and exchanges on unworn jewellery in its original packaging within 30 days of delivery. Custom-sized items and final sale mineral specimens may have specific return conditions."
    }
  ];

  // Authentic customer reviews
  const reviews = [
    {
      id: 'rev-1',
      author: 'Sophia L.',
      location: 'San Francisco, CA',
      date: 'October 2026',
      rating: 5,
      item: 'Celestial Ethiopian Opal Ring',
      comment: 'The fire inside this opal is hypnotic! It sparkles with glowing neon greens and peach tones. Arrived in the most elegant blush velvet box with a personal care note.'
    },
    {
      id: 'rev-2',
      author: 'Evelyn V.',
      location: 'London, UK',
      date: 'September 2026',
      rating: 5,
      item: 'Raw Madagascar Rose Quartz Cluster',
      comment: 'Substantial weight and gorgeous natural pink hue. You can immediately feel the quality of raw unpolished stone. It graces my bedside table with serene elegance.'
    },
    {
      id: 'rev-3',
      author: 'Elena R.',
      location: 'Toronto, Canada',
      date: 'September 2026',
      rating: 5,
      item: 'Starlight Moonstone Huggie Earrings',
      comment: 'I have very sensitive skin and these earrings have been a dream. The blue adularescence under natural light is breathtaking. Customer support was also incredibly kind!'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-blush-200" id="trust-faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Top: Customer Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center space-x-2 text-gold-600 text-xs uppercase tracking-[0.25em] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Collector Testimonials</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-luxury-dark font-medium tracking-tight">
              Words from Our Collectors
            </h2>
            <p className="text-luxury-muted text-xs sm:text-sm">
              Discover real experiences from collectors who welcome our natural gems into their everyday style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div 
                key={rev.id}
                className="bg-blush-50/70 border border-gold-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-luxury transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-luxury-muted">{rev.date}</span>
                  </div>

                  <p className="text-luxury-charcoal text-xs sm:text-sm leading-relaxed italic mb-4 font-light">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-blush-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-luxury-dark">{rev.author}</h4>
                    <p className="text-[11px] text-luxury-muted">{rev.location}</p>
                  </div>
                  <span className="text-[10px] text-gold-700 bg-gold-100/80 px-2 py-0.5 rounded-full font-medium">
                    Verified Buyer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Frequently Asked Questions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 text-gold-600 text-xs uppercase tracking-[0.25em] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Care & Clarity</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-luxury-dark font-medium tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-luxury-muted text-xs sm:text-sm leading-relaxed">
              Have a question about gemstone provenance, ring sizing, or crystal care? Explore our answers or reach out directly to our gem concierge.
            </p>

            {/* Direct WhatsApp Concierge Card */}
            <div className="bg-gradient-to-br from-blush-50 to-white border border-gold-300 rounded-2xl p-5 shadow-sm space-y-3 mt-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-luxury-dark">Direct WhatsApp Concierge</h4>
                  <p className="text-[11px] text-luxury-muted">Get personal guidance on sizes & gemstones</p>
                </div>
              </div>
              <p className="text-xs text-luxury-charcoal font-light">
                Speak directly with our team regarding custom ring inquiries, gift recommendations, or expedited dispatch.
              </p>
              <a
                href="https://wa.me/15552382400?text=Hello%20Aevah's%20Crystals,%20I%20have%20an%20inquiry%20regarding%20your%20jewellery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Editable Policy Links */}
            <div className="flex items-center space-x-4 pt-2 text-xs text-gold-700 font-medium">
              <button onClick={() => setActivePolicyModal('shipping')} className="hover:underline">
                Shipping Policy &rarr;
              </button>
              <button onClick={() => setActivePolicyModal('returns')} className="hover:underline">
                Return Policy &rarr;
              </button>
              <button onClick={() => setActivePolicyModal('privacy')} className="hover:underline">
                Privacy Policy &rarr;
              </button>
            </div>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-blush-200 overflow-hidden bg-white shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between space-x-4 hover:bg-blush-50/50 transition-colors"
                  >
                    <span className="font-serif text-sm sm:text-base font-semibold text-luxury-dark">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gold-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-luxury-muted font-light leading-relaxed border-t border-blush-100 bg-blush-50/30 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
