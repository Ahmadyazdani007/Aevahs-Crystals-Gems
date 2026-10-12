import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ToastContainer = () => {
  const { toasts } = useShop();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-16 lg:bottom-6 right-4 z-50 flex flex-col space-y-2 pointer-events-none max-w-sm w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-white/95 backdrop-blur-md border border-gold-300 shadow-luxury rounded-2xl p-3.5 flex items-center space-x-3 text-luxury-dark animate-slide-up"
        >
          <div className="w-7 h-7 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 flex-shrink-0">
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <Sparkles className="w-4 h-4 text-gold-600" />
            )}
          </div>
          <p className="text-xs font-medium flex-1 text-luxury-charcoal">
            {toast.message}
          </p>
        </div>
      ))}
    </div>
  );
};
