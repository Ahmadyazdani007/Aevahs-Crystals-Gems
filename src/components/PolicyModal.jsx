import React from 'react';
import { X, ShieldCheck, Truck, RotateCcw, Lock } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const PolicyModal = () => {
  const { activePolicyModal, setActivePolicyModal } = useShop();

  if (!activePolicyModal) return null;

  const content = {
    shipping: {
      title: 'Shipping & Insured Delivery Policy',
      icon: <Truck className="w-5 h-5 text-gold-600" />,
      body: (
        <div className="space-y-3 text-xs sm:text-sm text-luxury-charcoal font-light leading-relaxed">
          <p>
            At <strong>Aevah's Crystals & Gems</strong>, every order is treated as a high-value parcel of natural art. All jewelry and crystal specimens are shipped with full transit insurance and tamper-evident packaging.
          </p>
          <h4 className="font-serif text-sm font-semibold text-luxury-dark pt-2">Domestic Shipping (USA & Canada)</h4>
          <p>
            Standard Insured Shipping (3-5 business days) is complimentary on all orders over $100. For orders under $100, standard insured shipping is $12. Priority Courier (1-2 business days) is available at checkout for $25.
          </p>
          <h4 className="font-serif text-sm font-semibold text-luxury-dark pt-2">Worldwide Insured Delivery</h4>
          <p>
            We proudly ship worldwide with DHL Express and FedEx International. International orders arrive within 4 to 8 business days with live GPS tracking. Customs duties and import VAT may apply depending on your destination country.
          </p>
          <h4 className="font-serif text-sm font-semibold text-luxury-dark pt-2">Dispatch & Packaging</h4>
          <p>
            Orders are dispatched within 24 to 48 business hours from our studio. Every piece is presented inside our bespoke blush pink velvet keepsake box, wrapped in ribbon, with a microfiber cloth and gemstone certificate.
          </p>
        </div>
      )
    },
    returns: {
      title: '30-Day Happiness & Return Policy',
      icon: <RotateCcw className="w-5 h-5 text-gold-600" />,
      body: (
        <div className="space-y-3 text-xs sm:text-sm text-luxury-charcoal font-light leading-relaxed">
          <p>
            We want you to be completely enchanted with every gemstone you welcome into your collection. If for any reason your piece does not meet your expectations, we offer a 30-day return or exchange window.
          </p>
          <h4 className="font-serif text-sm font-semibold text-luxury-dark pt-2">Eligibility Criteria</h4>
          <ul className="list-disc pl-5 space-y-1 text-xs text-luxury-muted">
            <li>Items must be unworn, undamaged, and in pristine original condition.</li>
            <li>Pieces must be returned with all original packaging, velvet pouches, and authenticity certificates.</li>
            <li>Custom engraved or bespoke resized items are final sale.</li>
          </ul>
          <h4 className="font-serif text-sm font-semibold text-luxury-dark pt-2">How to Initiate a Return</h4>
          <p>
            Simply email our concierge team at <span className="font-medium text-luxury-dark">returns@aevahscrystals.com</span> with your order number. We will provide a prepaid insured return label within 24 hours. Refunds are credited to your original payment method within 3 to 5 business days of inspection.
          </p>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy & Data Security',
      icon: <Lock className="w-5 h-5 text-gold-600" />,
      body: (
        <div className="space-y-3 text-xs sm:text-sm text-luxury-charcoal font-light leading-relaxed">
          <p>
            Aevah's Crystals & Gems respects your privacy and is dedicated to safeguarding your personal data. We never sell, rent, or trade your personal information to third parties.
          </p>
          <h4 className="font-serif text-sm font-semibold text-luxury-dark pt-2">Information We Collect</h4>
          <p>
            We collect personal details necessary to fulfill your orders and deliver your parcels safely, including your name, shipping address, email address, and phone number.
          </p>
          <h4 className="font-serif text-sm font-semibold text-luxury-dark pt-2">Payment Security</h4>
          <p>
            Payment information is encrypted using 256-bit SSL encryption. We do not store credit card numbers on our servers; payments are processed securely through certified PCI-DSS compliant providers.
          </p>
        </div>
      )
    }
  };

  const current = content[activePolicyModal] || content.shipping;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in flex items-center justify-center">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-modal border border-gold-300 p-6 relative space-y-4">
        
        <button
          onClick={() => setActivePolicyModal(null)}
          className="absolute top-4 right-4 p-1.5 rounded-full text-luxury-muted hover:text-luxury-dark hover:bg-blush-100 transition-colors"
          aria-label="Close policy"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-gold-600 text-xs font-semibold uppercase tracking-wider">
          {current.icon}
          <span>Boutique Policy</span>
        </div>

        <h3 className="font-serif text-2xl font-medium text-luxury-dark">
          {current.title}
        </h3>

        <div className="max-h-[60vh] overflow-y-auto pr-2 border-t border-blush-200 pt-3">
          {current.body}
        </div>

        <div className="pt-2 border-t border-blush-200">
          <button
            onClick={() => setActivePolicyModal(null)}
            className="w-full py-2.5 rounded-xl bg-luxury-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold-600 transition-colors"
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
};
