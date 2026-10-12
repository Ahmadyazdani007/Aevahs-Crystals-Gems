import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Sparkles, 
  ArrowRight, 
  Gift, 
  CheckCircle,
  Tag
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    totalCartItems,
    cartSubtotalUSD,
    discountUSD,
    standardShippingUSD,
    cartTotalUSD,
    freeShippingThresholdUSD,
    isFreeShipping,
    appliedPromo,
    promoError,
    applyPromoCode,
    removePromoCode,
    updateQuantity,
    removeFromCart,
    formatPrice,
    setIsCheckoutOpen,
    closeProductDetail,
    setActiveCategory
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [includeGiftBox, setIncludeGiftBox] = useState(true);
  const [giftNote, setGiftNote] = useState('');
  const [showGiftInput, setShowGiftInput] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const ok = applyPromoCode(promoInput);
    if (ok) setPromoInput('');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleContinueShopping = () => {
    setIsCartOpen(false);
  };

  const amountNeededForFreeShipping = Math.max(0, freeShippingThresholdUSD - cartSubtotalUSD);
  const progressPercent = Math.min(100, Math.round((cartSubtotalUSD / freeShippingThresholdUSD) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/45 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-gold-300 animate-slide-up">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-blush-200 flex items-center justify-between bg-blush-50/70">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-gold-600" />
              <h2 className="font-serif text-lg font-medium text-luxury-dark">
                Your Shopping Bag ({totalCartItems})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-luxury-muted hover:text-luxury-dark hover:bg-blush-100 transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-blush-100/70 p-3.5 border-b border-blush-200">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-medium text-luxury-charcoal">
                {isFreeShipping ? (
                  <span className="text-emerald-700 flex items-center space-x-1 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 mr-1" />
                    Complimentary Insured Delivery Unlocked!
                  </span>
                ) : (
                  <span>
                    Add <strong>{formatPrice(amountNeededForFreeShipping)}</strong> more for Free Insured Delivery
                  </span>
                )}
              </span>
              <span className="text-[11px] text-luxury-muted font-semibold">{progressPercent}%</span>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden border border-blush-300">
              <div 
                className="bg-gradient-to-r from-gold-400 to-gold-500 h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Drawer Body - Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length > 0 ? (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div 
                    key={item.cartItemId}
                    className="flex space-x-3.5 pb-4 border-b border-blush-100 bg-white"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-blush-50 border border-gold-200 flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-serif text-xs sm:text-sm font-semibold text-luxury-dark leading-tight line-clamp-1">
                            {item.product.name}
                          </h4>
                          <p className="text-[11px] text-luxury-muted mt-0.5">
                            {item.selectedSize} • {item.selectedMetal}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-luxury-muted hover:text-red-500 p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Quantity & Item Total */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-blush-300 rounded-lg bg-blush-50/50">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1 text-luxury-muted hover:text-luxury-dark"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-semibold text-luxury-dark">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1 text-luxury-muted hover:text-luxury-dark"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-semibold text-xs sm:text-sm text-luxury-dark">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Gift packaging option */}
                <div className="bg-blush-50/70 p-3 rounded-xl border border-gold-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-xs text-luxury-charcoal cursor-pointer">
                      <Gift className="w-4 h-4 text-gold-600" />
                      <span className="font-medium">Complimentary Velvet Gift Packaging</span>
                    </label>
                    <input 
                      type="checkbox"
                      checked={includeGiftBox}
                      onChange={(e) => setIncludeGiftBox(e.target.checked)}
                      className="accent-gold-500 rounded cursor-pointer"
                    />
                  </div>
                  {includeGiftBox && (
                    <div>
                      {!showGiftInput ? (
                        <button 
                          onClick={() => setShowGiftInput(true)}
                          className="text-[11px] text-gold-700 underline font-medium"
                        >
                          + Add a handwritten gift message
                        </button>
                      ) : (
                        <textarea
                          rows={2}
                          value={giftNote}
                          onChange={(e) => setGiftNote(e.target.value)}
                          placeholder="Write your personal gift message to be handwritten on luxury parchment..."
                          className="w-full text-xs p-2 rounded-lg border border-blush-300 focus:outline-none focus:border-gold-500 mt-1"
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* Promo Voucher Form */}
                <div className="pt-2">
                  {appliedPromo ? (
                    <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800">
                      <div className="flex items-center space-x-1.5">
                        <Tag className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="font-semibold">{appliedPromo.code}</span>
                        <span className="text-[11px] text-emerald-700">({appliedPromo.label})</span>
                      </div>
                      <button 
                        onClick={removePromoCode}
                        className="text-red-500 hover:text-red-700 text-xs font-semibold underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyPromo} className="space-y-1">
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={promoInput}
                          onChange={(e) => setPromoInput(e.target.value)}
                          placeholder="Voucher code (try AEVAH10)"
                          className="flex-1 text-xs p-2 rounded-xl border border-blush-300 focus:outline-none focus:border-gold-500 uppercase tracking-wider"
                        />
                        <button
                          type="submit"
                          className="px-3.5 py-2 bg-blush-100 hover:bg-blush-200 text-luxury-dark text-xs font-semibold rounded-xl uppercase tracking-wider transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                      {promoError && (
                        <p className="text-[11px] text-red-500 mt-1">{promoError}</p>
                      )}
                    </form>
                  )}
                </div>

              </div>
            ) : (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-gold-300 mx-auto" />
                <h3 className="font-serif text-xl font-medium text-luxury-dark">Your bag is empty</h3>
                <p className="text-xs text-luxury-muted max-w-xs mx-auto">
                  Your personal jewelry sanctuary awaits. Explore our natural crystals and fine rings to find your match.
                </p>
                <button
                  onClick={handleContinueShopping}
                  className="mt-3 px-6 py-2.5 rounded-full bg-luxury-dark text-white text-xs font-semibold tracking-wider uppercase hover:bg-gold-600 transition-colors"
                >
                  Start Exploring
                </button>
              </div>
            )}
          </div>

          {/* Drawer Footer - Calculations & Checkout */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-blush-200 bg-blush-50/50 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-luxury-muted">
                  <span>Subtotal</span>
                  <span className="font-medium text-luxury-dark">{formatPrice(cartSubtotalUSD)}</span>
                </div>
                {discountUSD > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount</span>
                    <span>-{formatPrice(discountUSD)}</span>
                  </div>
                )}
                <div className="flex justify-between text-luxury-muted">
                  <span>Insured Shipping</span>
                  <span>{isFreeShipping ? 'FREE' : formatPrice(standardShippingUSD)}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-semibold text-luxury-dark pt-2 border-t border-blush-200">
                  <span className="font-serif">Estimated Total</span>
                  <span className="font-serif text-lg text-gold-700">{formatPrice(cartTotalUSD)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 px-6 rounded-xl bg-luxury-dark hover:bg-gold-600 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-md group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-center text-luxury-muted">
                Taxes calculated at checkout • Insured tracked delivery
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
