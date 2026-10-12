import React, { useState } from 'react';

// Luxury SVG placeholder when network or image link fails
const FALLBACK_JEWELRY_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23FAF1F2"/><stop offset="50%" stop-color="%23F5DEE1"/><stop offset="100%" stop-color="%23EBBEC5"/></linearGradient><linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23D4AF37"/><stop offset="100%" stop-color="%23C59F2A"/></linearGradient></defs><rect width="600" height="600" fill="url(%23g)"/><g transform="translate(180, 180)"><path d="M120 20 L220 90 L120 220 L20 90 Z" fill="none" stroke="url(%23gold)" stroke-width="6"/><path d="M120 20 L70 90 L120 220 L170 90 Z" fill="none" stroke="url(%23gold)" stroke-width="4"/><path d="M20 90 L220 90" fill="none" stroke="url(%23gold)" stroke-width="4"/><circle cx="120" cy="120" r="12" fill="%23D4AF37"/></g><text x="50%" y="450" font-family="serif" font-size="22" fill="%232D2526" text-anchor="middle" letter-spacing="3">AEVAH'S CRYSTALS</text><text x="50%" y="480" font-family="sans-serif" font-size="12" fill="%23856612" text-anchor="middle" letter-spacing="2">FINE GEMSTONE ADORNMENT</text></svg>`;

export const SafeImage = ({ src, alt, className = '', ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Update source if prop changes
  React.useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(FALLBACK_JEWELRY_SVG);
    }
  };

  return (
    <img
      src={imgSrc || FALLBACK_JEWELRY_SVG}
      alt={alt || "Aevah's Crystals & Gems"}
      onError={handleError}
      className={className}
      {...props}
    />
  );
};
