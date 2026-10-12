import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { FeaturedCollections } from './components/FeaturedCollections';
import { ShopCatalog } from './components/ShopCatalog';
import { AboutBrand } from './components/AboutBrand';
import { CustomerTrustSection } from './components/CustomerTrustSection';
import { ProductDetailView } from './components/ProductDetailView';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { PolicyModal } from './components/PolicyModal';
import { QuickViewModal } from './components/QuickViewModal';
import { ToastContainer } from './components/ToastContainer';

function StorefrontContent() {
  const { viewingProduct } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-blush-50/40 text-luxury-dark selection:bg-gold-200">
      
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Luxury Header */}
      <Navbar />

      {/* Body: Dedicated Product Detail Page or Boutique Homepage */}
      <main className="flex-1">
        {viewingProduct ? (
          <ProductDetailView product={viewingProduct} />
        ) : (
          <>
            {/* 2. Homepage Hero Section */}
            <Hero />

            {/* 3. Shop by Category */}
            <CategorySection />

            {/* 5. Featured Collections */}
            <FeaturedCollections />

            {/* 4 & 8. Product Grid & Mobile Layout Catalog */}
            <ShopCatalog />

            {/* 6. About the Brand */}
            <AboutBrand />

            {/* 9. Customer Trust & FAQs & WhatsApp */}
            <CustomerTrustSection />
          </>
        )}
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Mobile Sticky Navigation Dock */}
      <MobileBottomNav />

      {/* Slide-out & Modal Drawers */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <CheckoutModal />
      <PolicyModal />
      <QuickViewModal />
      <ToastContainer />

    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <StorefrontContent />
    </ShopProvider>
  );
}
