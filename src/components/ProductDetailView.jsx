import React, { useState } from 'react';
import { 
  Heart, 
  ShoppingBag, 
  Star, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Ruler, 
  Sparkles, 
  ChevronLeft,
  Share2,
  Check,
  Plus,
  Minus,
  X
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { RingSizeGuideModal } from './RingSizeGuideModal';

export const ProductDetailView = ({ product, isModal = false, onClose = null }) => {
  const { 
    formatPrice, 
    addToCart, 
    isInWishlist, 
    toggleWishlist, 
    setIsCheckoutOpen,
    closeProductDetail,
    showToast 
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : 'Standard');
  const [selectedMetal, setSelectedMetal] = useState(product.metals ? product.metals[0] : '18k Champagne Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  
  // Review form state
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [localReviews, setLocalReviews] = useState(product.reviews || []);

  const isSaved = isInWishlist(product.id);

  // Related products from the same category or bestsellers
  const relatedProducts = PRODUCTS.filter(
    p => p.id !== product.id && (p.category === product.category || p.isBestseller)
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedMetal);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize, selectedMetal);
    setIsCheckoutOpen(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Discover ${product.name} at Aevah's Crystals & Gems`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard!', 'gold');
    }
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: newReviewAuthor.trim(),
      rating: newReviewRating,
      date: 'Just now',
      title: 'Customer Review',
      comment: newReviewComment.trim(),
      verified: true
    };

    setLocalReviews([newRev, ...localReviews]);
    setNewReviewAuthor('');
    setNewReviewComment('');
    setShowReviewForm(false);
    showToast('Thank you for sharing your review!', 'success');
  };

  return (
    <div className={`bg-white ${isModal ? 'max-w-4xl mx-auto rounded-2xl shadow-modal overflow-hidden border border-gold-300' : 'min-h-screen py-6 sm:py-10'}`}>
      
      {/* Top Bar / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={isModal ? onClose : closeProductDetail}
            className="inline-flex items-center space-x-1.5 text-xs text-luxury-muted hover:text-luxury-dark font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Curated Collection</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full text-luxury-muted hover:text-luxury-dark hover:bg-blush-100 transition-colors"
              aria-label="Share product"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {isModal && (
              <button
                onClick={onClose}
                className="p-2 rounded-full text-luxury-muted hover:text-luxury-dark hover:bg-blush-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Product Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          
          {/* Left Column: Interactive Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Primary Main Image Frame */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-blush-50 border border-gold-200/80 shadow-sm">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {product.badge && (
                <span className="absolute top-3 left-3 bg-white/95 text-luxury-dark text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-gold-200 shadow-xs">
                  {product.badge}
                </span>
              )}

              {/* Wishlist button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-xs ${
                  isSaved
                    ? 'bg-blush-500 text-white'
                    : 'bg-white/90 text-luxury-charcoal hover:bg-white hover:text-blush-500'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeImageIndex === idx 
                        ? 'border-gold-500 shadow-sm scale-105 ring-1 ring-gold-400' 
                        : 'border-blush-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View angle ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Mineral Specs Card */}
            {product.gemstoneDetails && (
              <div className="bg-blush-50/60 border border-gold-200/80 rounded-2xl p-4 text-xs space-y-2 mt-4">
                <div className="flex items-center space-x-2 text-gold-600 font-semibold uppercase tracking-wider text-[10px]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Gemological Specifications</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-luxury-charcoal pt-1">
                  <div>
                    <span className="text-luxury-muted block text-[11px]">Mineral Origin:</span>
                    <span className="font-medium">{product.gemstoneDetails.origin}</span>
                  </div>
                  <div>
                    <span className="text-luxury-muted block text-[11px]">Hardness:</span>
                    <span className="font-medium">{product.gemstoneDetails.hardness}</span>
                  </div>
                  <div>
                    <span className="text-luxury-muted block text-[11px]">Lapidary Cut:</span>
                    <span className="font-medium">{product.gemstoneDetails.cut}</span>
                  </div>
                  <div>
                    <span className="text-luxury-muted block text-[11px]">Precious Setting:</span>
                    <span className="font-medium">{product.gemstoneDetails.finish}</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Pricing, Variations, Cart Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-600 block mb-1">
                {product.categoryName} • {product.gemstone}
              </span>

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-luxury-dark font-medium leading-tight">
                {product.name}
              </h1>

              {/* Rating stars & review link */}
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-luxury-muted">
                  <strong>{product.rating}</strong> ({localReviews.length} collector reviews)
                </span>
                <span className="text-blush-300">•</span>
                <span className="text-xs text-emerald-700 font-medium">In Stock & Ready to Ship</span>
              </div>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline space-x-3 py-3 border-y border-blush-100">
              <span className="font-serif text-3xl font-semibold text-luxury-dark">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-base text-luxury-muted line-through font-light">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-blush-100 text-blush-600 text-xs px-2 py-0.5 rounded-full font-semibold">
                  Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-luxury-muted font-light leading-relaxed">
              {product.shortDescription || product.description}
            </p>

            {/* Variations: Metal Finish Selector */}
            {product.metals && product.metals.length > 1 && (
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-luxury-dark uppercase tracking-wider">
                  Precious Metal Finish: <span className="text-gold-700 font-normal">{selectedMetal}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.metals.map((metal) => (
                    <button
                      key={metal}
                      onClick={() => setSelectedMetal(metal)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        selectedMetal === metal
                          ? 'border-gold-500 bg-gold-50 text-luxury-dark ring-1 ring-gold-400 font-semibold'
                          : 'border-blush-200 bg-white text-luxury-charcoal hover:border-gold-300'
                      }`}
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Variations: Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-luxury-dark uppercase tracking-wider">
                    Select Size: <span className="text-gold-700 font-normal">{selectedSize}</span>
                  </label>
                  {product.category === 'rings' && (
                    <button
                      onClick={() => setIsSizeGuideOpen(true)}
                      className="inline-flex items-center space-x-1 text-xs text-gold-600 hover:text-gold-700 underline font-medium"
                    >
                      <Ruler className="w-3.5 h-3.5" />
                      <span>Ring Size Guide</span>
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                        selectedSize === size
                          ? 'border-luxury-dark bg-luxury-dark text-white font-semibold'
                          : 'border-blush-200 bg-white text-luxury-charcoal hover:border-gold-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector + Add to Cart + Buy Now */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3">
                
                {/* Quantity incrementor */}
                <div className="flex items-center border border-gold-300 rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 rounded-lg hover:bg-blush-50 text-luxury-muted hover:text-luxury-dark"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-semibold text-luxury-dark">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 rounded-lg hover:bg-blush-50 text-luxury-muted hover:text-luxury-dark"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-6 rounded-xl bg-luxury-dark hover:bg-luxury-charcoal text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm border border-luxury-dark"
                >
                  <ShoppingBag className="w-4 h-4 text-gold-300" />
                  <span>Add to Bag</span>
                </button>

                {/* Wishlist toggle */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3 rounded-xl border transition-all ${
                    isSaved
                      ? 'border-blush-400 bg-blush-50 text-blush-600'
                      : 'border-gold-300 bg-white text-luxury-muted hover:text-blush-500'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-luxury-dark text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-xs"
              >
                Instant Checkout
              </button>
            </div>

            {/* Value Guarantees Strip */}
            <div className="pt-4 border-t border-blush-100 grid grid-cols-3 gap-2 text-center text-[10px] sm:text-[11px] text-luxury-muted">
              <div className="p-2 rounded-lg bg-blush-50/50">
                <Truck className="w-4 h-4 text-gold-600 mx-auto mb-1" />
                <span>Insured Global Shipping</span>
              </div>
              <div className="p-2 rounded-lg bg-blush-50/50">
                <RotateCcw className="w-4 h-4 text-gold-600 mx-auto mb-1" />
                <span>30-Day Easy Returns</span>
              </div>
              <div className="p-2 rounded-lg bg-blush-50/50">
                <ShieldCheck className="w-4 h-4 text-gold-600 mx-auto mb-1" />
                <span>Certified Natural Mineral</span>
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Tabs: Description, Care, Shipping, Reviews */}
        <div className="mt-14 sm:mt-20 border-t border-blush-200 pt-8">
          
          <div className="flex items-center space-x-6 border-b border-blush-200 overflow-x-auto no-scrollbar mb-6">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
                activeTab === 'description'
                  ? 'border-b-2 border-gold-500 text-luxury-dark'
                  : 'text-luxury-muted hover:text-luxury-dark'
              }`}
            >
              Stone & Description
            </button>

            <button
              onClick={() => setActiveTab('care')}
              className={`pb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
                activeTab === 'care'
                  ? 'border-b-2 border-gold-500 text-luxury-dark'
                  : 'text-luxury-muted hover:text-luxury-dark'
              }`}
            >
              Care Instructions
            </button>

            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
                activeTab === 'shipping'
                  ? 'border-b-2 border-gold-500 text-luxury-dark'
                  : 'text-luxury-muted hover:text-luxury-dark'
              }`}
            >
              Packaging & Shipping
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-gold-500 text-luxury-dark'
                  : 'text-luxury-muted hover:text-luxury-dark'
              }`}
            >
              Collector Reviews ({localReviews.length})
            </button>
          </div>

          {/* Tab 1: Description */}
          {activeTab === 'description' && (
            <div className="space-y-4 max-w-3xl text-xs sm:text-sm text-luxury-charcoal font-light leading-relaxed animate-fade-in">
              <p>{product.description}</p>
              <div className="bg-blush-50 p-4 rounded-xl border border-blush-200 mt-4">
                <h4 className="font-serif text-sm font-semibold text-luxury-dark mb-1">Artisan Sourcing & Craftsmanship</h4>
                <p className="text-xs text-luxury-muted">
                  Every gem is individually evaluated for color saturation, purity of inclusion, and structural integrity. Our metals are 100% nickel-free and hypoallergenic.
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Care Instructions */}
          {activeTab === 'care' && (
            <div className="space-y-4 max-w-3xl text-xs sm:text-sm text-luxury-charcoal font-light leading-relaxed animate-fade-in">
              <p>{product.careInstructions}</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-luxury-muted pt-2">
                <li>Put jewellery on after applying cosmetics, perfumes, and lotions.</li>
                <li>Store in your individual Aevah velvet pouch to prevent metal or gemstone abrasion.</li>
                <li>Avoid wearing during heavy workouts, swimming in chlorinated pools, or domestic cleaning.</li>
              </ul>
            </div>
          )}

          {/* Tab 3: Shipping */}
          {activeTab === 'shipping' && (
            <div className="space-y-4 max-w-3xl text-xs sm:text-sm text-luxury-charcoal font-light leading-relaxed animate-fade-in">
              <p>{product.shippingInfo}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 bg-blush-50 rounded-xl border border-blush-200">
                  <h4 className="font-serif text-sm font-semibold text-luxury-dark">Complimentary Gift Packaging</h4>
                  <p className="text-xs text-luxury-muted mt-1">
                    Every order includes our signature blush pink velvet keepsake box, champagne ribbon, and personal gemstone authenticity card.
                  </p>
                </div>
                <div className="p-3.5 bg-blush-50 rounded-xl border border-blush-200">
                  <h4 className="font-serif text-sm font-semibold text-luxury-dark">30-Day Happiness Guarantee</h4>
                  <p className="text-xs text-luxury-muted mt-1">
                    If your chosen piece does not spark joy, return it within 30 days in its original condition for a courteous exchange or refund.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-6 max-w-3xl animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-medium text-luxury-dark">Collector Testimonials</h3>
                  <p className="text-xs text-luxury-muted">Verified buyer reflections for {product.name}</p>
                </div>
                <button
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="px-4 py-2 rounded-xl bg-blush-100 hover:bg-blush-200 text-luxury-dark text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  {showReviewForm ? 'Cancel' : 'Write a Review'}
                </button>
              </div>

              {/* Review writing form */}
              {showReviewForm && (
                <form onSubmit={handleAddReview} className="bg-blush-50 p-4 rounded-xl border border-gold-300 space-y-3">
                  <h4 className="font-serif text-sm font-semibold text-luxury-dark">Share Your Experience</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-luxury-muted mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={newReviewAuthor}
                        onChange={(e) => setNewReviewAuthor(e.target.value)}
                        placeholder="e.g. Olivia R."
                        className="w-full text-xs p-2 rounded-lg border border-blush-200 focus:outline-none focus:border-gold-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-luxury-muted mb-1">Rating</label>
                      <select
                        value={newReviewRating}
                        onChange={(e) => setNewReviewRating(Number(e.target.value))}
                        className="w-full text-xs p-2 rounded-lg border border-blush-200 focus:outline-none focus:border-gold-500"
                      >
                        <option value="5">5 Stars - Extraordinary</option>
                        <option value="4">4 Stars - Very Beautiful</option>
                        <option value="3">3 Stars - Good</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] text-luxury-muted mb-1">Review Comments</label>
                    <textarea
                      required
                      rows={3}
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      placeholder="Describe the gemstone, fit, and elegance..."
                      className="w-full text-xs p-2 rounded-lg border border-blush-200 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-2 px-5 rounded-lg bg-luxury-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold-600 transition-colors"
                  >
                    Submit Review
                  </button>
                </form>
              )}

              {/* Reviews List */}
              <div className="space-y-4">
                {localReviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-xl border border-blush-200 bg-white space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-amber-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-luxury-muted">{rev.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-serif text-sm font-semibold text-luxury-dark">{rev.author}</span>
                      {rev.verified && (
                        <span className="text-[10px] text-gold-700 bg-gold-100 px-1.5 py-0.2 rounded font-medium">
                          Verified Buyer
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-luxury-charcoal font-light leading-relaxed">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* You May Also Love (Related items) */}
        {/* CRITICAL REQUIREMENT: Strictly 2-columns on mobile! */}
        <div className="mt-16 sm:mt-24 border-t border-blush-200 pt-10">
          <div className="text-center max-w-md mx-auto mb-8">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-600 block">Complementary Adornments</span>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-luxury-dark">You May Also Adore</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>

      {/* Ring Size Guide Modal */}
      <RingSizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

    </div>
  );
};
