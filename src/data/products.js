// Product catalog for Aevah's Crystals & Gems
// Curated photography of natural crystals, fine gemstone rings, pendants, earrings, and crystal accessories

export const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Celestial Ethiopian Opal Ring',
    slug: 'celestial-ethiopian-opal-ring',
    category: 'rings',
    categoryName: 'Gemstone Rings',
    gemstone: 'Natural Ethiopian Opal',
    price: 148,
    originalPrice: 185,
    rating: 4.9,
    reviewCount: 84,
    inStock: true,
    isBestseller: true,
    isNew: false,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Mesmerizing flashes of neon green and peach fire in an 18k champagne gold vermeil cathedral setting.',
    description: 'The Celestial Opal Ring features a hand-selected, ethically sourced natural Ethiopian Welo opal showcasing ethereal play-of-color. Accented with pavé cubic zirconia on the shoulders and cradled in an 18k champagne gold vermeil band over 925 sterling silver, this ring radiates captivating warmth from every angle.',
    gemstoneDetails: {
      origin: 'Welo Region, Ethiopia',
      hardness: '5.5 - 6.5 Mohs',
      cut: 'Cabochon Oval (8x6mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9'],
    metals: ['18k Champagne Gold', '14k Rose Gold', '925 Sterling Silver'],
    careInstructions: 'Hydrophane opals absorb liquids; protect from prolonged water submersion, perfumes, lotions, and harsh cleansers. Polish gently with a dry microfibre cloth.',
    shippingInfo: 'Complimentary insured worldwide shipping with velvet travel case included. Ships within 24-48 hours.',
    reviews: [
      { id: 'r1', author: 'Evelyn V.', rating: 5, date: 'Oct 2, 2026', title: 'The color play is breathtaking!', comment: 'Photos do not do this justice. In natural sunlight it sparkles with green and pink fires. The gold setting feels solid and luxurious.', verified: true },
      { id: 'r2', author: 'Chloe M.', rating: 5, date: 'Sep 18, 2026', title: 'Perfect fit & beautiful packaging', comment: 'Came in the most gorgeous blush velvet box with a handwritten care note. I wear it everyday and get endless compliments.', verified: true }
    ]
  },
  {
    id: 'prod-2',
    name: 'Madagascar Raw Rose Quartz Cluster',
    slug: 'madagascar-raw-rose-quartz-cluster',
    category: 'natural-crystals',
    categoryName: 'Natural Crystals',
    gemstone: 'Madagascar Rose Quartz',
    price: 68,
    originalPrice: 80,
    rating: 5.0,
    reviewCount: 112,
    inStock: true,
    isBestseller: true,
    isNew: false,
    badge: 'Popular',
    images: [
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Unpolished natural specimen displaying soft blush pink tones and crystalline translucency.',
    description: 'Sourced from the high-altitude pegmatites of Madagascar, this raw Rose Quartz cluster preserves its natural organic formations and serene pink blush color. Perfect as a decorative sanctuary centerpiece for your vanity or bedside table.',
    gemstoneDetails: {
      origin: 'Madagascar',
      hardness: '7.0 Mohs',
      cut: 'Natural Raw Mineral Specimen',
      finish: 'Unaltered Natural Formation (Approx. 280-350g)'
    },
    sizes: ['Petite (150-200g)', 'Classic (280-350g)', 'Statement (500-600g)'],
    metals: ['Natural Specimen (No Metal)'],
    careInstructions: 'Rinse under cool water and pat dry with a soft cloth. Keep away from prolonged direct harsh sunlight to retain its delicate pink hue.',
    shippingInfo: 'Double-boxed with custom protective foam to guarantee zero transit damage.',
    reviews: [
      { id: 'r3', author: 'Sophia L.', rating: 5, date: 'Sep 29, 2026', title: 'Sublime pink glow', comment: 'The quality of the pink saturation is exceptional. Heavy, cool to the touch, and brings such calmness to my room.', verified: true }
    ]
  },
  {
    id: 'prod-3',
    name: 'Seraphina Rose Quartz Heart Pendant',
    slug: 'seraphina-rose-quartz-heart-pendant',
    category: 'pendants',
    categoryName: 'Gemstone Pendants',
    gemstone: 'Brazilian Rose Quartz',
    price: 118,
    originalPrice: 140,
    rating: 4.8,
    reviewCount: 63,
    inStock: true,
    isBestseller: true,
    isNew: true,
    badge: 'New Arrival',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611591475811-131c77f0a7ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Hand-carved heart crystal suspended on an adjustable 18k gold vermeil rope chain.',
    description: 'An emblem of timeless grace, the Seraphina pendant showcases a faceted Brazilian Rose Quartz heart polished to perfection. Suspended from an elegant diamond-cut cable chain with an adjustable slider, this piece rests gracefully against the collarbone.',
    gemstoneDetails: {
      origin: 'Minas Gerais, Brazil',
      hardness: '7.0 Mohs',
      cut: 'Faceted Heart Cut (14mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['16 - 18 inch (Adjustable)', '18 - 20 inch (Adjustable)'],
    metals: ['18k Champagne Gold', '14k Rose Gold', '925 Sterling Silver'],
    careInstructions: 'Clean gently using warm soapy water and a soft-bristled brush. Store away from sharp jewelry items.',
    shippingInfo: 'Packaged in signature Aevah champagne gold embossed box with velvet ribbon.',
    reviews: [
      { id: 'r4', author: 'Audrey P.', rating: 5, date: 'Oct 5, 2026', title: 'The ultimate gift', comment: 'My husband surprised me with this for our anniversary. The soft pink tone complements every outfit.', verified: true }
    ]
  },
  {
    id: 'prod-4',
    name: 'Starlight Moonstone Huggie Earrings',
    slug: 'starlight-moonstone-huggie-earrings',
    category: 'earrings',
    categoryName: 'Earrings',
    gemstone: 'Sri Lankan Rainbow Moonstone',
    price: 92,
    originalPrice: 115,
    rating: 4.9,
    reviewCount: 95,
    inStock: true,
    isBestseller: false,
    isNew: true,
    badge: 'Trending',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Delicate mini hoop earrings featuring glowing blue adularescent moonstone drops.',
    description: 'Designed for effortless everyday luxury, our Starlight Huggies combine secure snap-bar closures with dainty bezel-set teardrop rainbow moonstones that dance with blue shimmer in changing light.',
    gemstoneDetails: {
      origin: 'Meetiyagoda, Sri Lanka',
      hardness: '6.0 - 6.5 Mohs',
      cut: 'Teardrop Cabochon (7x5mm)',
      finish: '18k Champagne Gold Vermeil on Sterling Silver'
    },
    sizes: ['Standard Huggie (12mm hoop)'],
    metals: ['18k Champagne Gold', '925 Sterling Silver'],
    careInstructions: 'Hypoallergenic and nickel-free. Avoid contact with hairspray or perfumes before putting on.',
    shippingInfo: 'Complimentary shipping with velvet jewelry pouch.',
    reviews: [
      { id: 'r5', author: 'Isabella N.', rating: 5, date: 'Oct 1, 2026', title: 'Lightweight and magical', comment: 'I have sensitive ears and can sleep in these with zero irritation. The blue glow is enchanting!', verified: true }
    ]
  },
  {
    id: 'prod-5',
    name: 'Raw Aquamarine Crown Ring',
    slug: 'raw-aquamarine-crown-ring',
    category: 'rings',
    categoryName: 'Gemstone Rings',
    gemstone: 'Natural Blue Aquamarine',
    price: 135,
    originalPrice: 160,
    rating: 4.8,
    reviewCount: 47,
    inStock: true,
    isBestseller: false,
    isNew: true,
    badge: 'Artisan',
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Natural rough ocean-blue aquamarine crystal nestled in organic textured prong setting.',
    description: 'A tribute to the untamed beauty of the sea. Each raw aquamarine crystal is hand-selected for its icy blue clarity and paired with an artisan organic hammered band in 18k champagne gold vermeil. No two rings are identical.',
    gemstoneDetails: {
      origin: 'Minas Gerais, Brazil',
      hardness: '7.5 - 8.0 Mohs',
      cut: 'Uncut Raw Crystal Gem',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
    metals: ['18k Champagne Gold', '925 Sterling Silver'],
    careInstructions: 'Aquamarine is durable for everyday wear. Clean with warm water and mild dish soap.',
    shippingInfo: 'Arrives in signature presentation box with certificate of authenticity.',
    reviews: [
      { id: 'r6', author: 'Maya K.', rating: 5, date: 'Sep 24, 2026', title: 'Pure coastal elegance', comment: 'The icy blue raw crystal is stunning! Everyone asks where I got it.', verified: true }
    ]
  },
  {
    id: 'prod-6',
    name: 'Uruguay Deep Purple Amethyst Geode',
    slug: 'uruguay-deep-purple-amethyst-geode',
    category: 'natural-crystals',
    categoryName: 'Natural Crystals',
    gemstone: 'Uruguayan Amethyst',
    price: 95,
    originalPrice: 120,
    rating: 5.0,
    reviewCount: 78,
    inStock: true,
    isBestseller: true,
    isNew: false,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Deep royal purple crystal points clustered naturally within volcanic basalt rock.',
    description: 'Renowned as the highest quality amethyst in the world, Uruguayan specimens feature saturated, velvet-deep violet crystal formations. Each free-standing geode cut base allows graceful display on shelves, mantels, or work desks.',
    gemstoneDetails: {
      origin: 'Artigas, Uruguay',
      hardness: '7.0 Mohs',
      cut: 'Natural Cut-Base Geode',
      finish: 'Polished Agate Border Rim (approx 350-450g)'
    },
    sizes: ['Medium (350-450g)', 'Large (600-750g)', 'Collector (1.2kg)'],
    metals: ['Natural Specimen (No Metal)'],
    careInstructions: 'Dust with soft makeup brush or rinse gently. Amethyst is resilient but preserve color by avoiding excessive sunlight.',
    shippingInfo: 'Heavily cushioned for pristine delivery.',
    reviews: [
      { id: 'r7', author: 'Danielle S.', rating: 5, date: 'Oct 3, 2026', title: 'Deepest violet I have seen', comment: 'The sparkle from these dark purple points in evening lamplight is stunning.', verified: true }
    ]
  },
  {
    id: 'prod-7',
    name: 'Aura Clear Quartz Manifestation Tower',
    slug: 'aura-clear-quartz-manifestation-tower',
    category: 'natural-crystals',
    categoryName: 'Natural Crystals',
    gemstone: 'Optical Clear Quartz',
    price: 54,
    originalPrice: 65,
    rating: 4.9,
    reviewCount: 52,
    inStock: true,
    isBestseller: false,
    isNew: false,
    badge: 'Collector',
    images: [
      'https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Six-sided precision cut quartz generator tower with rainbow internal veining.',
    description: 'A timeless staple for every crystal admirer. Master-cut with six faceted facets converging into a razor-sharp apex. Captures indoor light and reveals fascinating natural phantom inclusions and inner rainbows.',
    gemstoneDetails: {
      origin: 'Corinto, Brazil',
      hardness: '7.0 Mohs',
      cut: '6-Sided Generator Point (90mm tall)',
      finish: 'Mirror Polished Natural Quartz'
    },
    sizes: ['Compact (70-80mm)', 'Classic (90-100mm)', 'Grand (120-130mm)'],
    metals: ['Natural Specimen (No Metal)'],
    careInstructions: 'Wipe with damp microfibre cloth. Clean with gentle warm water.',
    shippingInfo: 'Carefully wrapped in velvet pouch and luxury gift box.',
    reviews: [
      { id: 'r8', author: 'Grace T.', rating: 5, date: 'Sep 12, 2026', title: 'Flawless clarity', comment: 'Contains a tiny internal rainbow when sunlight hits it. A truly majestic piece.', verified: true }
    ]
  },
  {
    id: 'prod-8',
    name: 'Royal Lapis Lazuli Gold Chain Necklace',
    slug: 'royal-lapis-lazuli-gold-chain-necklace',
    category: 'jewellery',
    categoryName: 'Crystal Jewellery',
    gemstone: 'Afghan Lapis Lazuli',
    price: 125,
    originalPrice: 155,
    rating: 4.8,
    reviewCount: 39,
    inStock: true,
    isBestseller: false,
    isNew: true,
    badge: 'New Arrival',
    images: [
      'https://images.unsplash.com/photo-1611591475811-131c77f0a7ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Deep cobalt blue lapis with shimmering golden pyrite specks set in bezel gold.',
    description: 'Prized by royalty for millennia, our Afghan Lapis Lazuli necklace showcases intense ultramarine blue marbled with natural sparkling golden pyrite flecks. Encased in a minimal champagne gold bezel on a dainty satellite chain.',
    gemstoneDetails: {
      origin: 'Badakhshan, Afghanistan',
      hardness: '5.0 - 5.5 Mohs',
      cut: 'Cushion Cut (12mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['16 - 18 inch (Adjustable)', '20 inch (Stationary)'],
    metals: ['18k Champagne Gold', '925 Sterling Silver'],
    careInstructions: 'Protect from acidic chemicals, perfumes and steam cleaners. Store flat in your velvet pouch.',
    shippingInfo: 'Insured worldwide delivery with tracking number.',
    reviews: [
      { id: 'r9', author: 'Elena R.', rating: 5, date: 'Sep 30, 2026', title: 'Stunning contrast of blue and gold', comment: 'The gold pyrite flecks make each stone like a starry night sky. Gorgeous quality.', verified: true }
    ]
  },
  {
    id: 'prod-9',
    name: 'Emerald Cut Green Tourmaline Solitaire Ring',
    slug: 'emerald-cut-green-tourmaline-solitaire-ring',
    category: 'rings',
    categoryName: 'Gemstone Rings',
    gemstone: 'Verdelite Green Tourmaline',
    price: 165,
    originalPrice: 195,
    rating: 5.0,
    reviewCount: 34,
    inStock: true,
    isBestseller: true,
    isNew: false,
    badge: 'Limited',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Deep forest green precision emerald-cut tourmaline with tapered baguette shoulders.',
    description: 'An architectural heirloom piece. Features a richly saturated moss-green Brazilian tourmaline gemstone, cut in classic emerald step facets to maximize clarity and depth. Crafted in substantial 18k champagne gold vermeil.',
    gemstoneDetails: {
      origin: 'Cruzeiro Mine, Brazil',
      hardness: '7.0 - 7.5 Mohs',
      cut: 'Emerald Step Cut (9x7mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9'],
    metals: ['18k Champagne Gold', '14k Rose Gold', '925 Sterling Silver'],
    careInstructions: 'Resilient and suitable for daily wear. Clean with mild soapy water and microfibre buffing.',
    shippingInfo: 'Arrives in velvet box with certificate of authenticity.',
    reviews: [
      { id: 'r10', author: 'Victoria W.', rating: 5, date: 'Oct 8, 2026', title: 'Exceptional craftsmanship', comment: 'The step cut catches the light so elegantly. Looks like an antique family treasure.', verified: true }
    ]
  },
  {
    id: 'prod-10',
    name: 'Sunlit Citrine Prism Pendant',
    slug: 'sunlit-citrine-prism-pendant',
    category: 'pendants',
    categoryName: 'Gemstone Pendants',
    gemstone: 'Natural Golden Citrine',
    price: 110,
    originalPrice: 135,
    rating: 4.9,
    reviewCount: 41,
    inStock: true,
    isBestseller: false,
    isNew: false,
    badge: 'Handcrafted',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611591475811-131c77f0a7ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Golden honey citrine prism cut crystal captured in a delicate champagne gold basket.',
    description: 'Reminiscent of afternoon sunshine, this pure natural golden citrine is custom-cut with prism facets that cast radiant reflections. Suspended on a fluid Singapore twist chain in 18k champagne gold.',
    gemstoneDetails: {
      origin: 'Rio Grande do Sul, Brazil',
      hardness: '7.0 Mohs',
      cut: 'Elongated Prism Hexagon (16x8mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['18 inch (with 2 inch extender)'],
    metals: ['18k Champagne Gold', '14k Rose Gold'],
    careInstructions: 'Protect from high heat or extended sunlight exposure to preserve golden warmth.',
    shippingInfo: 'Complimentary insured shipping in velvet keepsake box.',
    reviews: [
      { id: 'r11', author: 'Hannah B.', rating: 5, date: 'Sep 15, 2026', title: 'Liquid sunshine', comment: 'The honey hue of this citrine is magnificent. It sits at the perfect height on the chest.', verified: true }
    ]
  },
  {
    id: 'prod-11',
    name: 'Blush Rose Quartz Teardrop Studs',
    slug: 'blush-rose-quartz-teardrop-studs',
    category: 'earrings',
    categoryName: 'Earrings',
    gemstone: 'Rose Quartz',
    price: 78,
    originalPrice: 95,
    rating: 4.8,
    reviewCount: 88,
    inStock: true,
    isBestseller: true,
    isNew: false,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Faceted pear cut rose quartz studs with champagne gold beaded halos.',
    description: 'Gentle, romantic, and versatile. These delicate teardrop studs showcase pastel pink rose quartz encircled by a finely beaded milgrain border in champagne gold vermeil. Finished with secure comfort-fit butterfly backings.',
    gemstoneDetails: {
      origin: 'Madagascar',
      hardness: '7.0 Mohs',
      cut: 'Pear Cut (8x6mm)',
      finish: '18k Champagne Gold Vermeil on Sterling Silver'
    },
    sizes: ['Petite Stud (10x8mm overall)'],
    metals: ['18k Champagne Gold', '14k Rose Gold', '925 Sterling Silver'],
    careInstructions: 'Remove before showering and swimming. Clean with soft cotton pad.',
    shippingInfo: 'Gift ready in plush pink velvet pouch.',
    reviews: [
      { id: 'r12', author: 'Jessica R.', rating: 5, date: 'Oct 6, 2026', title: 'Everyday staple', comment: 'I wear these almost daily to work. Subtle, elegant, and the blush matches everything.', verified: true }
    ]
  },
  {
    id: 'prod-12',
    name: 'Hand-Carved Rose Quartz Gua Sha & Roller Set',
    slug: 'hand-carved-rose-quartz-gua-sha-roller-set',
    category: 'accessories',
    categoryName: 'Crystal Accessories',
    gemstone: 'Grade-A Natural Rose Quartz',
    price: 58,
    originalPrice: 72,
    rating: 5.0,
    reviewCount: 142,
    inStock: true,
    isBestseller: true,
    isNew: false,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Sculpted from 100% genuine Grade-A rose quartz with champagne gold noise-free hardware.',
    description: 'Elevate your self-care ritual. Hand-sculpted from authentic, cooling Madagascar rose quartz. The dual-ended facial roller features noise-free silicone inner bearings and an integrated champagne gold frame, paired with a curved heart gua sha designed to follow the natural contours of cheekbones and jawline.',
    gemstoneDetails: {
      origin: 'Madagascar',
      hardness: '7.0 Mohs',
      cut: 'Hand-Carved & Polished Stone',
      finish: 'Champagne Gold Hardware with Silicone Dampeners'
    },
    sizes: ['2-Piece Deluxe Box Set'],
    metals: ['Champagne Gold Alloy Hardware'],
    careInstructions: 'Rinse with warm water and gentle facial cleanser after use. Pat dry thoroughly.',
    shippingInfo: 'Arrives in cushioned magnetic closure gift box with step-by-step facial mapping guide.',
    reviews: [
      { id: 'r13', author: 'Mia H.', rating: 5, date: 'Sep 27, 2026', title: 'Silky smooth & so cooling', comment: 'You can tell it is 100% real quartz because it stays cool to the touch. The roller does not squeak at all!', verified: true }
    ]
  },
  {
    id: 'prod-13',
    name: 'Moroccan Selenite Satin Spar Cleansing Plate',
    slug: 'moroccan-selenite-satin-spar-cleansing-plate',
    category: 'accessories',
    categoryName: 'Crystal Accessories',
    gemstone: 'Natural Selenite (Gypsum)',
    price: 45,
    originalPrice: 55,
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    isBestseller: false,
    isNew: true,
    badge: 'New Arrival',
    images: [
      'https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Round hand-polished selenite slab for resting your rings and gemstone jewelry pieces.',
    description: 'A luminous, silky white crystal platform carved from Moroccan satin spar. Carved with a shallow recessed rim to safely cradle your rings, pendants, and earrings overnight while serving as a chic vanity accent.',
    gemstoneDetails: {
      origin: 'Atlas Mountains, Morocco',
      hardness: '2.0 Mohs (Delicate & Silky)',
      cut: 'Hand-Carved Circular Plate (10cm diameter)',
      finish: 'Polished Top with Raw Textured Edge'
    },
    sizes: ['10cm Diameter x 1.5cm Thick'],
    metals: ['Natural Specimen (No Metal)'],
    careInstructions: 'Selenite is water soluble! DO NOT wash or submerge in water. Clean exclusively with a dry dusting cloth.',
    shippingInfo: 'Carefully wrapped with extra protective bubble wrap.',
    reviews: [
      { id: 'r14', author: 'Claire P.', rating: 5, date: 'Oct 4, 2026', title: 'Stunning display dish for my rings', comment: 'Sits right on my nightstand. The pearly sheen is magical and my opal rings look gorgeous resting on it.', verified: true }
    ]
  },
  {
    id: 'prod-14',
    name: 'Golden Citrine Halo Cocktail Ring',
    slug: 'golden-citrine-halo-cocktail-ring',
    category: 'rings',
    categoryName: 'Gemstone Rings',
    gemstone: 'Natural Madeira Citrine',
    price: 155,
    originalPrice: 190,
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
    isBestseller: false,
    isNew: false,
    badge: 'Collector',
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Radiant cushion-cut Madeira citrine framed by a shimmering pavé halo.',
    description: 'Capturing the fiery warmth of amber sunsets, this cocktail ring features a 10mm cushion-cut Madeira Citrine encircled by micropavé cubic zirconia. Forged in heavy 18k champagne gold vermeil with under-gallery filigree.',
    gemstoneDetails: {
      origin: 'Rio Grande do Sul, Brazil',
      hardness: '7.0 Mohs',
      cut: 'Cushion Brilliant Cut (10mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9'],
    metals: ['18k Champagne Gold', '14k Rose Gold', '925 Sterling Silver'],
    careInstructions: 'Clean with warm water and soft lint-free cloth. Safe for daily wear.',
    shippingInfo: 'Shipped in velvet keepsake presentation box.',
    reviews: [
      { id: 'r15', author: 'Leah M.', rating: 5, date: 'Sep 21, 2026', title: 'Showstopper ring', comment: 'Got so many compliments at a black-tie gala. Looks like fine 18k solid gold fine jewelry.', verified: true }
    ]
  },
  {
    id: 'prod-15',
    name: 'Raw Herkimer Diamond Pendant Necklace',
    slug: 'raw-herkimer-diamond-pendant-necklace',
    category: 'jewellery',
    categoryName: 'Crystal Jewellery',
    gemstone: 'Double-Terminated Herkimer Quartz',
    price: 130,
    originalPrice: 160,
    rating: 5.0,
    reviewCount: 51,
    inStock: true,
    isBestseller: false,
    isNew: true,
    badge: 'Artisan Cut',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611591475811-131c77f0a7ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Naturally faceted, glass-clear double-terminated quartz point prong-set in champagne gold.',
    description: 'Naturally formed millions of years ago in Herkimer County, New York, these double-terminated quartz crystals emerge from the earth already sparkling with 18 natural diamond-like facets. Set in four claw prongs on an 18-inch diamond cut chain.',
    gemstoneDetails: {
      origin: 'Herkimer County, New York, USA',
      hardness: '7.5 Mohs',
      cut: 'Naturally Formed 18-Faceted Double Point',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['16 - 18 inch (Adjustable)'],
    metals: ['18k Champagne Gold', '925 Sterling Silver'],
    careInstructions: 'Very high hardness and durable. Clean with warm water and gentle soap.',
    shippingInfo: 'Packaged in signature Aevah luxury gift box.',
    reviews: [
      { id: 'r16', author: 'Brooke A.', rating: 5, date: 'Sep 19, 2026', title: 'Pure natural wonder', comment: 'The fact that nature cut this gem without human lapidary tools is unbelievable. Pure glass brilliance.', verified: true }
    ]
  },
  {
    id: 'prod-16',
    name: 'Raw Emerald & Gold Branch Drop Earrings',
    slug: 'raw-emerald-gold-branch-drop-earrings',
    category: 'earrings',
    categoryName: 'Earrings',
    gemstone: 'Natural Colombian Raw Emerald',
    price: 145,
    originalPrice: 175,
    rating: 4.9,
    reviewCount: 43,
    inStock: true,
    isBestseller: true,
    isNew: false,
    badge: 'Limited',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Organic raw emerald nuggets dangling from sculpted champagne gold vine branches.',
    description: 'Inspired by mythical woodland aesthetics, delicate 18k champagne gold vermeil branch motifs support uncut Colombian emerald nuggets with vivid botanical green tones. Designed with secure lever-back ear wires.',
    gemstoneDetails: {
      origin: 'Muzo Mine, Colombia',
      hardness: '7.5 - 8.0 Mohs',
      cut: 'Raw Uncut Emerald Crystals',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['Drop length: 28mm'],
    metals: ['18k Champagne Gold'],
    careInstructions: 'Emeralds prefer gentle care. Avoid steam or ultrasonic cleaners; wipe gently with microfiber.',
    shippingInfo: 'Includes insured tracked delivery in velvet gift packaging.',
    reviews: [
      { id: 'r17', author: 'Sienna K.', rating: 5, date: 'Oct 7, 2026', title: 'Royal green magic', comment: 'The rough emerald against the champagne gold looks like ancient royalty jewellery. Absolutely gorgeous.', verified: true }
    ]
  }
];

// Helper to filter products
export const getProductsByCategory = (categorySlug) => {
  if (!categorySlug || categorySlug === 'all') return PRODUCTS;
  if (categorySlug === 'new-arrivals') return PRODUCTS.filter(p => p.isNew);
  if (categorySlug === 'bestsellers') return PRODUCTS.filter(p => p.isBestseller);
  return PRODUCTS.filter(p => p.category === categorySlug);
};

export const getProductBySlug = (slug) => {
  return PRODUCTS.find(p => p.slug === slug) || null;
};
