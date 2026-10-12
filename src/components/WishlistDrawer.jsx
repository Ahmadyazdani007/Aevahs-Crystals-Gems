import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const WishlistDrawer = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    formatPrice,
    openProductDetail
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  const handleMoveToBag = (product) => {
    addToCart(product, 1);
  };

  const handleProductClick = (product) => {
    setIsWishlistOpen(false);
    openProductDetail(product);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/45 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-gold-300 animate-slide-up">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-blush-200 flex items-center justify-between bg-blush-50/70">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-blush-500 fill-current" />
              <h2 className="font-serif text-lg font-medium text-luxury-dark">
                Saved Adornments ({wishlist.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 rounded-full text-luxury-muted hover:text-luxury-dark hover:bg-blush-100 transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {wishlistProducts.length > 0 ? (
              <div className="space-y-3">
                {wishlistProducts.map((product) => (
                  <div 
                    key={product.id}
                    className="flex space-x-3.5 p-3 rounded-2xl border border-blush-200 hover:border-gold-300 bg-white transition-all shadow-xs"
                  >
                    <div 
                      onClick={() => handleProductClick(product)}
                      className="w-20 h-20 rounded-xl overflow-hidden bg-blush-50 border border-gold-200 flex-shrink-0 cursor-pointer"
                    >
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 
                            onClick={() => handleProductClick(product)}
                            className="font-serif text-xs sm:text-sm font-semibold text-luxury-dark leading-tight line-clamp-1 cursor-pointer hover:text-gold-700"
                          >
                            {product.name}
                          </h4>
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className="text-luxury-muted hover:text-red-500 p-1"
                            aria-label="Remove from wishlist"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-gold-600 mt-0.5">{product.gemstone}</p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="font-semibold text-xs sm:text-sm text-luxury-dark">
                          {formatPrice(product.price)}
                        </span>

                        <button
                          onClick={() => handleMoveToBag(product)}
                          className="py-1.5 px-3 rounded-lg bg-blush-50 hover:bg-luxury-dark text-luxury-dark hover:text-white border border-gold-300 text-[10px] font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1"
                        >
                          <ShoppingBag className="w-3 h-3 text-gold-600" />
                          <span>Add to Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 space-y-3">
                <Heart className="w-12 h-12 text-blush-300 mx-auto" />
                <h3 className="font-serif text-xl font-medium text-luxury-dark">Your wishlist is empty</h3>
                <p className="text-xs text-luxury-muted max-w-xs mx-auto">
                  Save pieces you love while browsing by tapping the heart icon on any card.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="mt-3 px-6 py-2.5 rounded-full bg-luxury-dark text-white text-xs font-semibold tracking-wider uppercase hover:bg-gold-600 transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
