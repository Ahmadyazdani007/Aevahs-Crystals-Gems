import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductDetailView } from './ProductDetailView';

export const QuickViewModal = () => {
  const { selectedProduct, closeQuickView } = useShop();

  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fade-in flex items-center justify-center">
      <div className="w-full max-w-4xl max-h-[92vh] overflow-y-auto">
        <ProductDetailView 
          product={selectedProduct} 
          isModal={true} 
          onClose={closeQuickView} 
        />
      </div>
    </div>
  );
};
