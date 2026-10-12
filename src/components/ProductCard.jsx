import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { SafeImage } from './SafeImage';

export const ProductCard = ({ product }) => {
  const { 
    formatPrice, 
    addToCart, 
    isInWishlist, 
    toggleWishlist, 
    openQuickView,
    openProductDetail 
  } = useShop();

  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const isSaved = isInWishlist(product.id);

  const handleCardClick = (e) => {
    e.preventDefault();
    openProductDetail(product);
  };

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => {
        setIsHovered(true);
        if (product.images.length > 1) setImageIndex(1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setImageIndex(0);
      }}
      className="group relative flex flex-col bg-white rounded-xl sm:rounded-2xl border border-gold-200/60 hover:border-gold-400 transition-all duration-300 shadow-sm hover:shadow-luxury cursor-pointer overflow-hidden h-full product-card-mobile"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-blush-50/70 overflow-hidden">
        
        {/* Main Product Image with SafeImage fallback */}
        <SafeImage
          src={product.images[imageIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Badge (Bestseller, New, etc.) */}
        {product.badge && (
          <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-10">
            <span className={`inline-block px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase rounded-full shadow-xs ${
              product.badge === 'Bestseller'
                ? 'bg-gold-500 text-luxury-dark'
                : product.badge === 'New Arrival'
                ? 'bg-blush-500 text-white'
                : 'bg-white/95 text-luxury-dark border border-gold-300'
            }`}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button (Always accessible top right) */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-xs ${
            isSaved
              ? 'bg-blush-500 text-white'
              : 'bg-white/90 text-luxury-charcoal hover:bg-white hover:text-blush-500'
          }`}
          aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Desktop Quick View Overlay Button */}
        <div className="hidden sm:flex absolute inset-x-0 bottom-3 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 px-3">
          <button
            onClick={handleQuickView}
            className="w-full py-1.5 px-3 bg-white/95 backdrop-blur-sm hover:bg-gold-500 hover:text-white text-luxury-dark text-xs font-medium rounded-full shadow-md border border-gold-200 flex items-center justify-center space-x-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>

      </div>

      {/* Product Content Details */}
      <div className="p-2.5 sm:p-4 flex flex-col flex-1 justify-between bg-white">
        
        <div>
          {/* Gemstone Tag */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-gold-600 font-medium mb-1 truncate">
            <span className="truncate">{product.gemstone}</span>
            <div className="hidden xs:flex items-center space-x-0.5 text-amber-500 flex-shrink-0 ml-1">
              <Star className="w-2.5 h-2.5 fill-current" />
              <span className="text-[10px] text-luxury-muted font-normal">{product.rating}</span>
            </div>
          </div>

          {/* Product Name (Clean 2-line clamp on mobile & desktop) */}
          <h3 className="font-serif text-xs sm:text-base font-medium text-luxury-dark line-clamp-2 leading-tight min-h-[2rem] sm:min-h-[2.5rem] group-hover:text-gold-700 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Price & Action Row */}
        <div className="pt-2 sm:pt-3 mt-1 sm:mt-2 border-t border-blush-100 flex flex-col gap-1.5 sm:gap-2">
          
          {/* Price display */}
          <div className="flex items-baseline space-x-1.5 flex-wrap">
            <span className="font-semibold text-xs sm:text-base text-luxury-dark">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs text-luxury-muted line-through font-normal">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Add to Bag Button (Compact, accessible, never wraps clumsily) */}
          <button
            onClick={handleQuickAdd}
            className="w-full py-1.5 sm:py-2 px-2 rounded-lg sm:rounded-xl bg-blush-50 hover:bg-luxury-dark text-luxury-dark hover:text-white border border-gold-300 hover:border-luxury-dark transition-all duration-200 flex items-center justify-center space-x-1 sm:space-x-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase active:scale-97"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-600 group-hover:text-gold-300" />
            <span>Add to Bag</span>
          </button>

        </div>

      </div>
    </div>
  );
};
