import React from 'react';
import { X, Sparkles, Ruler } from 'lucide-react';

export const RingSizeGuideModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizeChart = [
    { us: 'US 5', insideDiam: '15.7 mm', circumference: '49.3 mm' },
    { us: 'US 6', insideDiam: '16.5 mm', circumference: '51.9 mm' },
    { us: 'US 7', insideDiam: '17.3 mm', circumference: '54.4 mm' },
    { us: 'US 8', insideDiam: '18.1 mm', circumference: '57.0 mm' },
    { us: 'US 9', insideDiam: '18.9 mm', circumference: '59.5 mm' },
    { us: 'US 10', insideDiam: '19.8 mm', circumference: '62.1 mm' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-modal border border-gold-300 relative space-y-4 max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-luxury-muted hover:text-luxury-dark hover:bg-blush-100 transition-colors"
          aria-label="Close ring size guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-gold-600 text-xs font-semibold uppercase tracking-wider">
          <Ruler className="w-4 h-4" />
          <span>Fitting Guide</span>
        </div>

        <h3 className="font-serif text-2xl font-medium text-luxury-dark">
          Ring Size Reference Chart
        </h3>

        <p className="text-xs text-luxury-muted leading-relaxed">
          For the most comfortable fit, measure the inner diameter of a ring that fits you well, or wrap a strip of paper around your knuckle and measure the circumference in millimeters.
        </p>

        {/* Table */}
        <div className="overflow-x-auto border border-blush-200 rounded-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-blush-100 text-luxury-charcoal uppercase tracking-wider font-semibold text-[10px]">
              <tr>
                <th className="py-2.5 px-3">US Size</th>
                <th className="py-2.5 px-3">Inner Diameter</th>
                <th className="py-2.5 px-3">Circumference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blush-100">
              {sizeChart.map((row) => (
                <tr key={row.us} className="hover:bg-blush-50/60">
                  <td className="py-2.5 px-3 font-semibold text-luxury-dark">{row.us}</td>
                  <td className="py-2.5 px-3 text-luxury-muted">{row.insideDiam}</td>
                  <td className="py-2.5 px-3 text-luxury-muted">{row.circumference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pro Tip */}
        <div className="p-3 bg-blush-50 rounded-xl border border-blush-200 text-xs text-luxury-charcoal flex items-start space-x-2">
          <Sparkles className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed">
            <strong>Boutique Tip:</strong> Wide-band rings feel snugger than dainty solitaires. If you are between sizes, we recommend selecting the half size up for comfort.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-luxury-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold-600 transition-colors"
        >
          Got It, Continue Shopping
        </button>
      </div>
    </div>
  );
};
