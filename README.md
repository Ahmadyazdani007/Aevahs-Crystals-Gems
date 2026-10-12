# Aevah's Crystals & Gems 💎

A luxury, elegant, fully responsive ecommerce web application for **Aevah's Crystals & Gems**, an independent crystal and gemstone jewelry atelier.

![Brand Visual](https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80)

## ✨ Brand Identity & Aesthetic
- **Colors**: Soft blush pinks, pure white, and champagne gold accents.
- **Typography**: Cormorant Garamond serif headings & Plus Jakarta Sans clean luxury body.
- **Atmosphere**: Feminine, mystical, sophisticated, grounded in earth geology.

---

## 🌟 Key Features

### 1. Mobile-First 2-Column Product Grid
- **Strict Mobile Architecture**: Displays **exactly 2 product cards side by side per row** on all mobile devices (tested at 320px, 375px, 390px, 430px), never dropping to a single-column layout.
- **Responsive Layout**:
  - Mobile: `grid-cols-2`
  - Tablet: `grid-cols-3`
  - Desktop: `grid-cols-4`

### 2. Curated Boutique Categories
- Natural Crystals
- Gemstone Rings
- Crystal Jewellery
- Earrings
- Gemstone Pendants
- Crystal Accessories
- New Arrivals
- Bestsellers

### 3. Rich Product Detail View
- Interactive multi-image gallery with hover/click angle selector.
- Detailed gemological specifications (Origin, Mohs hardness, Cut, Metal finish).
- Ring size selector (US 5 - 10) with an interactive **Ring Size Reference Guide**.
- Metal finish picker (18k Champagne Gold, 14k Rose Gold, 925 Sterling Silver).
- Care instructions & shipping info.
- Collector reviews & review submission form.

### 4. Full Ecommerce Functionality
- **Slide-out Shopping Bag**:
  - Live quantity adjustment & removal
  - Free Insured Shipping thermometer progress bar
  - Promo code discounts (`AEVAH10` for 10% off, `SPARKLE` for $15 off)
  - Handwritten gift message toggle
- **Live Search Modal**: Real-time filtering by gem, category, or title.
- **Multi-Currency Switcher**: Real-time conversions across USD, CAD, GBP, EUR, AUD.
- **Multi-Step Checkout**:
  - Shipping address collection
  - Delivery method selection
  - Secure payment simulation with payment provider configuration notice
  - Order confirmation with order ID and celebratory confetti

### 5. Customer Trust
- Verified buyer testimonials.
- Care & Sizing FAQ accordion.
- Direct WhatsApp concierge inquiry link.
- Shipping, 30-Day Returns, and Privacy policies.

---

## 🛠️ Tech Stack
- **Framework**: [React 18](https://reactjs.org/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Celebrations**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/orbicpk/Aevahs-Crystals-Gems.git

# Navigate to project directory
cd Aevahs-Crystals-Gems

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build
```bash
npm run build
```

---

## 📜 License
MIT License. © Aevah's Crystals & Gems.
