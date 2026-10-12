import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  CheckCircle2, 
  Truck, 
  AlertCircle,
  Sparkles,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useShop } from '../context/ShopContext';

export const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotalUSD,
    discountUSD,
    standardShippingUSD,
    cartTotalUSD,
    formatPrice,
    clearCart
  } = useShop();

  const [step, setStep] = useState(1); // 1: Shipping, 2: Delivery Method, 3: Payment, 4: Confirmed
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [formData, setFormData] = useState({
    firstName: 'Eleanor',
    lastName: 'Vance',
    email: 'eleanor.vance@example.com',
    phone: '+1 (555) 238-2400',
    address: '742 Evergreen Terrace',
    city: 'Beverly Hills',
    state: 'CA',
    zip: '90210',
    country: 'United States'
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderNumber, setOrderNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleDeliverySubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedOrder = `AEV-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);
      setStep(4);
      clearCart();

      // Trigger celebratory champagne confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#FAF1F2', '#E8C5C8', '#C59F28']
        });
      } catch (err) {
        console.error(err);
      }
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep(1);
  };

  const shippingCost = shippingMethod === 'express' ? 25 : standardShippingUSD;
  const finalTotal = Math.max(0, cartSubtotalUSD - discountUSD + shippingCost);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fade-in flex items-center justify-center">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full shadow-modal border border-gold-300 overflow-hidden relative">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-blush-200 bg-blush-50 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-gold-600" />
            <span className="text-xs uppercase tracking-widest font-semibold text-luxury-dark">
              Encrypted Boutique Checkout
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-luxury-muted hover:text-luxury-dark hover:bg-blush-100 transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Steps (1 to 3) */}
        {step < 4 && (
          <div className="px-6 py-3 bg-blush-100/50 border-b border-blush-200 flex items-center justify-between text-xs font-medium text-luxury-muted">
            <span className={step >= 1 ? 'text-gold-700 font-semibold' : ''}>1. Shipping Info</span>
            <span>&rarr;</span>
            <span className={step >= 2 ? 'text-gold-700 font-semibold' : ''}>2. Delivery Option</span>
            <span>&rarr;</span>
            <span className={step >= 3 ? 'text-gold-700 font-semibold' : ''}>3. Payment Verification</span>
          </div>
        )}

        {/* Body Content */}
        <div className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto">
          
          {/* STEP 1: Shipping Address */}
          {step === 1 && (
            <form onSubmit={handleShippingSubmit} className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-luxury-dark">
                Where should we send your precious parcel?
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-luxury-charcoal uppercase mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full text-xs p-2.5 rounded-xl border border-blush-300 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-luxury-charcoal uppercase mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full text-xs p-2.5 rounded-xl border border-blush-300 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-luxury-charcoal uppercase mb-1">Email (For Tracking)</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full text-xs p-2.5 rounded-xl border border-blush-300 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-luxury-charcoal uppercase mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full text-xs p-2.5 rounded-xl border border-blush-300 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-luxury-charcoal uppercase mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full text-xs p-2.5 rounded-xl border border-blush-300 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-luxury-charcoal uppercase mb-1">City</label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full text-xs p-2.5 rounded-xl border border-blush-300 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-luxury-charcoal uppercase mb-1">State / Prov</label>
                  <input
                    type="text"
                    required
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full text-xs p-2.5 rounded-xl border border-blush-300 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-luxury-charcoal uppercase mb-1">Postal Code</label>
                  <input
                    type="text"
                    required
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="w-full text-xs p-2.5 rounded-xl border border-blush-300 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-luxury-dark hover:bg-gold-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 mt-4"
              >
                <span>Continue to Delivery Method</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* STEP 2: Delivery Method */}
          {step === 2 && (
            <form onSubmit={handleDeliverySubmit} className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-luxury-dark">
                Select Insured Transit Method
              </h3>

              <div className="space-y-3">
                <label className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                  shippingMethod === 'standard' ? 'border-gold-500 bg-gold-50/50 ring-1 ring-gold-400' : 'border-blush-200 bg-white'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="delivery"
                        value="standard"
                        checked={shippingMethod === 'standard'}
                        onChange={() => setShippingMethod('standard')}
                        className="accent-gold-500"
                      />
                      <div>
                        <p className="text-xs font-semibold text-luxury-dark">Standard Insured Delivery (3-5 Days)</p>
                        <p className="text-[11px] text-luxury-muted">Includes velvet keepsake packaging & live tracking</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-luxury-dark">
                      {standardShippingUSD === 0 ? 'FREE' : formatPrice(standardShippingUSD)}
                    </span>
                  </div>
                </label>

                <label className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                  shippingMethod === 'express' ? 'border-gold-500 bg-gold-50/50 ring-1 ring-gold-400' : 'border-blush-200 bg-white'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="delivery"
                        value="express"
                        checked={shippingMethod === 'express'}
                        onChange={() => setShippingMethod('express')}
                        className="accent-gold-500"
                      />
                      <div>
                        <p className="text-xs font-semibold text-luxury-dark">Priority Express Courier (1-2 Days)</p>
                        <p className="text-[11px] text-luxury-muted">Signature required, high-value diamond transit insurance</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-luxury-dark">{formatPrice(25)}</span>
                  </div>
                </label>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3 px-5 rounded-xl border border-blush-300 text-xs font-semibold uppercase tracking-wider text-luxury-dark hover:bg-blush-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-xl bg-luxury-dark hover:bg-gold-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Continue to Payment Verification</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Payment Verification & Provider Gateway Notice */}
          {step === 3 && (
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-luxury-dark">
                Payment Verification
              </h3>

              {/* Explicit Honest Payment Gateway Disclaimer Required by Rule 8 */}
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs flex items-start space-x-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>Payment Provider Setup Notice:</strong> Live card charges will only occur once your Stripe, PayPal, or merchant gateway API keys are configured. You can test and inspect this order preview flow right now.
                </div>
              </div>

              {/* Payment Option Tabs */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                    paymentMethod === 'card' ? 'border-gold-500 bg-gold-50 text-luxury-dark font-semibold' : 'border-blush-200'
                  }`}
                >
                  Credit / Debit
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('applepay')}
                  className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                    paymentMethod === 'applepay' ? 'border-gold-500 bg-gold-50 text-luxury-dark font-semibold' : 'border-blush-200'
                  }`}
                >
                  Apple Pay
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                    paymentMethod === 'paypal' ? 'border-gold-500 bg-gold-50 text-luxury-dark font-semibold' : 'border-blush-200'
                  }`}
                >
                  PayPal
                </button>
              </div>

              {/* Simulated Card Inputs */}
              <div className="p-4 rounded-xl border border-blush-200 bg-blush-50/40 space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-luxury-muted uppercase mb-1">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      disabled
                      value="•••• •••• •••• 4242 (Preview Gateway)"
                      className="w-full text-xs p-2.5 rounded-xl border border-blush-300 bg-white text-luxury-charcoal"
                    />
                    <CreditCard className="w-4 h-4 text-gold-500 absolute right-3 top-3" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-luxury-muted uppercase mb-1">Expires</label>
                    <input
                      type="text"
                      disabled
                      value="12 / 28"
                      className="w-full text-xs p-2.5 rounded-xl border border-blush-300 bg-white text-luxury-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-luxury-muted uppercase mb-1">CVC</label>
                    <input
                      type="text"
                      disabled
                      value="•••"
                      className="w-full text-xs p-2.5 rounded-xl border border-blush-300 bg-white text-luxury-charcoal"
                    />
                  </div>
                </div>
              </div>

              {/* Order Breakdown */}
              <div className="p-3.5 rounded-xl bg-blush-50 border border-blush-200 space-y-1 text-xs text-luxury-muted">
                <div className="flex justify-between">
                  <span>Order Items:</span>
                  <span className="font-medium text-luxury-dark">{cart.length} pieces</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery to:</span>
                  <span className="font-medium text-luxury-dark">{formData.city}, {formData.state}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-luxury-dark pt-1 border-t border-blush-200">
                  <span>Grand Total:</span>
                  <span className="font-serif text-base text-gold-700">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-3 px-5 rounded-xl border border-blush-300 text-xs font-semibold uppercase tracking-wider text-luxury-dark hover:bg-blush-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 py-3.5 rounded-xl bg-luxury-dark hover:bg-gold-600 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-md"
                >
                  {isProcessing ? (
                    <span>Verifying Secure Order...</span>
                  ) : (
                    <span>Complete Order ({formatPrice(finalTotal)})</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Order Confirmed & Celebration */}
          {step === 4 && (
            <div className="text-center py-6 sm:py-8 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-gold-600 font-semibold">
                  Thank You For Your Trust
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-luxury-dark">
                  Your Adornment Is Reserved!
                </h3>
                <p className="text-xs text-luxury-muted">
                  Order Reference: <strong className="text-luxury-dark font-mono text-sm">{orderNumber}</strong>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blush-50 border border-gold-200 text-xs text-luxury-charcoal max-w-md mx-auto text-left space-y-2">
                <p>
                  A confirmation dispatch email has been sent to <strong>{formData.email}</strong>.
                </p>
                <p className="text-[11px] text-luxury-muted leading-relaxed">
                  Your genuine gemstones are now being hand-inspected, wrapped in signature blush velvet packaging, and prepared for insured transit to <strong>{formData.address}, {formData.city}</strong>.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-full bg-luxury-dark hover:bg-gold-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Return to Boutique
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
