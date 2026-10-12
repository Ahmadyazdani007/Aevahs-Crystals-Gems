// Comprehensive products catalog for Aevah's Crystals & Gems
// Curated with 100% unique photography across all categories:
// Rings, Bracelets ("braclate"), Earrings ("air rings"), Tops/Studs ("tops"), Natural Crystals, Pendants, and Accessories.

export const PRODUCTS = [
  // ---------------- RINGS ----------------
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
      'https://images.unsplash.com/photo-1685970731194-e27b477e87ba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Mesmerizing flashes of neon green and peach fire in an 18k champagne gold vermeil cathedral setting.',
    description: 'The Celestial Opal Ring features a hand-selected natural Ethiopian Welo opal showcasing ethereal play-of-color. Accented with pavé stones on the shoulders and cradled in an 18k champagne gold vermeil band over 925 sterling silver, this ring radiates captivating warmth from every angle.',
    gemstoneDetails: {
      origin: 'Welo Region, Ethiopia',
      hardness: '5.5 - 6.5 Mohs',
      cut: 'Cabochon Oval (8x6mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9'],
    metals: ['18k Champagne Gold', '14k Rose Gold', '925 Sterling Silver'],
    careInstructions: 'Protect from prolonged water submersion, perfumes, and harsh chemicals. Polish gently with dry microfibre cloth.',
    shippingInfo: 'Complimentary insured worldwide shipping with velvet travel case included.',
    reviews: [
      { id: 'r1', author: 'Evelyn V.', rating: 5, date: 'Oct 2, 2026', title: 'The color play is breathtaking!', comment: 'In natural sunlight it sparkles with green and pink fire. Solid, weighty vermeil setting.', verified: true },
      { id: 'r2', author: 'Chloe M.', rating: 5, date: 'Sep 18, 2026', title: 'Perfect fit & beautiful packaging', comment: 'Came in the most gorgeous blush velvet box with a handwritten care note. I wear it everyday.', verified: true }
    ]
  },
  {
    id: 'prod-2',
    name: 'Emerald Cut Green Tourmaline Ring',
    slug: 'emerald-cut-green-tourmaline-ring',
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
      'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1713950920412-97799efdf870?auto=format&fit=crop&w=800&q=80',
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
    shippingInfo: 'Arrives in velvet keepsake box with certificate of authenticity.',
    reviews: [
      { id: 'r10', author: 'Victoria W.', rating: 5, date: 'Oct 8, 2026', title: 'Exceptional craftsmanship', comment: 'The step cut catches the light so elegantly. Looks like an antique family treasure.', verified: true }
    ]
  },
  {
    id: 'prod-3',
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
      'https://images.unsplash.com/photo-1705326455036-0fab8ecba04d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1629118639934-2b241503956c?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Natural rough ocean-blue aquamarine crystal nestled in organic textured prong setting.',
    description: 'A tribute to the untamed beauty of the sea. Each raw aquamarine crystal is hand-selected for its icy blue clarity and paired with an artisan organic hammered band in 18k champagne gold vermeil.',
    gemstoneDetails: {
      origin: 'Minas Gerais, Brazil',
      hardness: '7.5 - 8.0 Mohs',
      cut: 'Uncut Raw Crystal Gem',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
    metals: ['18k Champagne Gold', '925 Sterling Silver'],
    careInstructions: 'Aquamarine is durable for everyday wear. Clean with warm water and mild soap.',
    shippingInfo: 'Arrives in signature presentation box with certificate of authenticity.',
    reviews: [
      { id: 'r6', author: 'Maya K.', rating: 5, date: 'Sep 24, 2026', title: 'Pure coastal elegance', comment: 'The icy blue raw crystal is stunning! Everyone asks where I got it.', verified: true }
    ]
  },
  {
    id: 'prod-4',
    name: 'Golden Madeira Citrine Cocktail Ring',
    slug: 'golden-madeira-citrine-cocktail-ring',
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
      'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611107683227-e9060eccd846?auto=format&fit=crop&w=800&q=80',
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
      { id: 'r15', author: 'Leah M.', rating: 5, date: 'Sep 21, 2026', title: 'Showstopper ring', comment: 'Got so many compliments at a black-tie gala. Looks like fine 18k solid gold.', verified: true }
    ]
  },

  // ---------------- BRACELETS ("braclate wegere") ----------------
  {
    id: 'prod-5',
    name: 'Rose Quartz Radiant Energy Bead Bracelet',
    slug: 'rose-quartz-radiant-energy-bead-bracelet',
    category: 'bracelets',
    categoryName: 'Crystal Bracelets',
    gemstone: 'Madagascar Rose Quartz',
    price: 64,
    originalPrice: 80,
    rating: 4.9,
    reviewCount: 72,
    inStock: true,
    isBestseller: true,
    isNew: true,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1676291055501-286c48bb186f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1763029513623-37d488cb97b1?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: '8mm smooth polished rose quartz gemstone beads punctuated by 18k champagne gold vermeil beads.',
    description: 'Strung by hand with supreme intention, this bracelet features translucent natural Madagascar Rose Quartz sphere beads accented with brushed champagne gold rondelles. Designed on durable silicone elastic for effortless slip-on elegance.',
    gemstoneDetails: {
      origin: 'Madagascar',
      hardness: '7.0 Mohs',
      cut: 'Smooth Spherical Beads (8mm)',
      finish: '18k Champagne Gold Vermeil Accents'
    },
    sizes: ['Small (6.5 inch)', 'Medium (7.0 inch)', 'Large (7.5 inch)'],
    metals: ['18k Champagne Gold Vermeil Accents'],
    careInstructions: 'Roll gently over your wrist rather than stretching. Avoid wearing in hot tubs or pools.',
    shippingInfo: 'Arrives in signature blush velvet pouch with gemstone identity card.',
    reviews: [
      { id: 'rb1', author: 'Aria G.', rating: 5, date: 'Oct 3, 2026', title: 'Soothing and chic', comment: 'The rose quartz beads have such a soft, genuine pink translucency. Feels lovely against the skin.', verified: true }
    ]
  },
  {
    id: 'prod-6',
    name: 'Moonstone Gold Link Chain Bracelet',
    slug: 'moonstone-gold-link-chain-bracelet',
    category: 'bracelets',
    categoryName: 'Crystal Bracelets',
    gemstone: 'Sri Lankan Rainbow Moonstone',
    price: 110,
    originalPrice: 135,
    rating: 4.8,
    reviewCount: 56,
    inStock: true,
    isBestseller: false,
    isNew: true,
    badge: 'New Arrival',
    images: [
      'https://images.unsplash.com/photo-1775212429587-82779c6f8775?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1768569446356-e1c0013cc733?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Five bezel-set glowing rainbow moonstones spaced along an adjustable champagne gold paperclip chain.',
    description: 'A contemporary take on timeless adularescence. Five round cabochon moonstones catch every flicker of ambient light with their signature blue flash, set along an 18k champagne gold vermeil link chain with lobster clasp.',
    gemstoneDetails: {
      origin: 'Sri Lanka',
      hardness: '6.0 - 6.5 Mohs',
      cut: 'Round Bezel Cabochon (6mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['6.5 - 7.5 inch (Adjustable Extender)'],
    metals: ['18k Champagne Gold', '925 Sterling Silver'],
    careInstructions: 'Clean gently using a microfibre cloth. Store flat in your velvet pouch to avoid tangles.',
    shippingInfo: 'Complimentary insured shipping in signature keepsake box.',
    reviews: [
      { id: 'rb2', author: 'Kendra S.', rating: 5, date: 'Sep 25, 2026', title: 'The blue sheen is unreal!', comment: 'Delicate yet sturdy. Pairs effortlessly with my watch or worn on its own.', verified: true }
    ]
  },
  {
    id: 'prod-7',
    name: 'Raw Amethyst & Champagne Gold Bangle',
    slug: 'raw-amethyst-champagne-gold-bangle',
    category: 'bracelets',
    categoryName: 'Crystal Bracelets',
    gemstone: 'Uruguayan Amethyst',
    price: 98,
    originalPrice: 120,
    rating: 5.0,
    reviewCount: 41,
    inStock: true,
    isBestseller: true,
    isNew: false,
    badge: 'Popular',
    images: [
      'https://images.unsplash.com/photo-1776888820110-98e0b2cc519d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602751584581-2e0372975b46?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Sculpted raw deep purple amethyst points capping an open hammered cuff in champagne gold.',
    description: 'Architectural, organic, and striking. An open cuff forged with hammered artisanal texture in 18k champagne gold vermeil, crowned at each terminal with a raw crystal point of deep Uruguayan amethyst.',
    gemstoneDetails: {
      origin: 'Artigas, Uruguay',
      hardness: '7.0 Mohs',
      cut: 'Raw Natural Crystal Terminals',
      finish: '18k Champagne Gold Vermeil Cuff'
    },
    sizes: ['Flexible Open Fit (Fits wrists 6.0 - 7.5 inch)'],
    metals: ['18k Champagne Gold Vermeil'],
    careInstructions: 'Gently squeeze or open to adjust size once. Avoid excessive repeated bending.',
    shippingInfo: 'Gift ready in plush pink velvet keepsake box.',
    reviews: [
      { id: 'rb3', author: 'Nadia P.', rating: 5, date: 'Oct 6, 2026', title: 'A true conversation starter', comment: 'Everyone admires the raw violet crystals at the ends. The gold finish has a gorgeous satin lustre.', verified: true }
    ]
  },
  {
    id: 'prod-8',
    name: 'Lapis Lazuli Talisman Cuff Bracelet',
    slug: 'lapis-lazuli-talisman-cuff-bracelet',
    category: 'bracelets',
    categoryName: 'Crystal Bracelets',
    gemstone: 'Afghan Lapis Lazuli',
    price: 115,
    originalPrice: 140,
    rating: 4.8,
    reviewCount: 33,
    inStock: true,
    isBestseller: false,
    isNew: false,
    badge: 'Artisan',
    images: [
      'https://images.unsplash.com/photo-1722410180687-b05b50922362?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1633810543462-77c4a3b13f07?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Deep cobalt blue lapis with shimmering golden pyrite veins in a sculpted vermeil setting.',
    description: 'An ancient emblem of wisdom and royalty. Deep indigo lapis lazuli hand-inlaid into a polished champagne gold band, presenting mesmerizing natural constellations of golden pyrite.',
    gemstoneDetails: {
      origin: 'Badakhshan, Afghanistan',
      hardness: '5.0 - 5.5 Mohs',
      cut: 'Hand-Inlaid Bar Gemstone',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['Standard Cuff (Medium)'],
    metals: ['18k Champagne Gold'],
    careInstructions: 'Wipe with soft cotton after wearing. Keep away from harsh cosmetic chemicals.',
    shippingInfo: 'Insured worldwide delivery with tracking number.',
    reviews: [
      { id: 'rb4', author: 'Sabrina T.', rating: 5, date: 'Sep 19, 2026', title: 'Deep celestial blue', comment: 'The gold flecks inside the lapis match the vermeil perfectly. Very regal.', verified: true }
    ]
  },

  // ---------------- EARRINGS / AIR RINGS ("air rings") ----------------
  {
    id: 'prod-9',
    name: 'Starlight Moonstone Huggie Earrings',
    slug: 'starlight-moonstone-huggie-earrings',
    category: 'earrings',
    categoryName: 'Earrings & Drops',
    gemstone: 'Sri Lankan Rainbow Moonstone',
    price: 92,
    originalPrice: 115,
    rating: 4.9,
    reviewCount: 95,
    inStock: true,
    isBestseller: true,
    isNew: false,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1679669693237-74d556d6b5ba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1665783127064-a6dbb973853a?auto=format&fit=crop&w=800&q=80',
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
    id: 'prod-10',
    name: 'Raw Emerald Branch Drop Earrings',
    slug: 'raw-emerald-branch-drop-earrings',
    category: 'earrings',
    categoryName: 'Earrings & Drops',
    gemstone: 'Natural Colombian Raw Emerald',
    price: 145,
    originalPrice: 175,
    rating: 4.9,
    reviewCount: 43,
    inStock: true,
    isBestseller: false,
    isNew: true,
    badge: 'Limited',
    images: [
      'https://images.unsplash.com/photo-1751551683636-62d8a864b693?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1751551683757-9363ba2b7466?auto=format&fit=crop&w=800&q=80',
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
    careInstructions: 'Emeralds prefer gentle care. Avoid steam cleaners; wipe gently with microfiber.',
    shippingInfo: 'Includes insured tracked delivery in velvet gift packaging.',
    reviews: [
      { id: 'r17', author: 'Sienna K.', rating: 5, date: 'Oct 7, 2026', title: 'Royal green magic', comment: 'The rough emerald against the champagne gold looks like ancient royalty jewellery. Absolutely gorgeous.', verified: true }
    ]
  },
  {
    id: 'prod-11',
    name: 'Deep Tanzanite Chandelier Cascade Earrings',
    slug: 'deep-tanzanite-chandelier-cascade-earrings',
    category: 'earrings',
    categoryName: 'Earrings & Drops',
    gemstone: 'Natural Tanzanian Tanzanite',
    price: 178,
    originalPrice: 210,
    rating: 5.0,
    reviewCount: 29,
    inStock: true,
    isBestseller: true,
    isNew: false,
    badge: 'High Jewelry',
    images: [
      'https://images.unsplash.com/photo-1751551683580-c32a84e229a8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1751551683522-b6d3cebf77b2?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Cascading briolette cut tanzanite gems showing pleochroic violet-blue reflections.',
    description: 'A theatrical, high-elegance evening drop earring. Multiple multifaceted tanzanite briolettes swing with fluid movement from an open filigree champagne gold chandelier tier.',
    gemstoneDetails: {
      origin: 'Merelani Hills, Tanzania',
      hardness: '6.5 - 7.0 Mohs',
      cut: 'Faceted Pear Briolette Drops',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['Drop length: 42mm'],
    metals: ['18k Champagne Gold'],
    careInstructions: 'Store in padded velvet compartments. Wipe with microfibre after wearing.',
    shippingInfo: 'Packaged in deluxe presentation box.',
    reviews: [
      { id: 're3', author: 'Genevieve B.', rating: 5, date: 'Sep 28, 2026', title: 'Pure red carpet glamour', comment: 'Wore these to an opera gala and was stopped three times. The violet shimmer is hypnotizing.', verified: true }
    ]
  },
  {
    id: 'prod-12',
    name: 'Golden Citrine Teardrop Hoop Earrings',
    slug: 'golden-citrine-teardrop-hoop-earrings',
    category: 'earrings',
    categoryName: 'Earrings & Drops',
    gemstone: 'Natural Honey Citrine',
    price: 105,
    originalPrice: 130,
    rating: 4.8,
    reviewCount: 45,
    inStock: true,
    isBestseller: false,
    isNew: true,
    badge: 'Artisan',
    images: [
      'https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592317295760-5c1f677dfc78?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Graceful fine wire gold hoops suspending faceted golden honey citrine teardrops.',
    description: 'Effortless lightness and radiant sunlit warmth. Fine circular hoops in 18k champagne gold vermeil cradling precision faceted citrine drops that catch the morning breeze.',
    gemstoneDetails: {
      origin: 'Brazil',
      hardness: '7.0 Mohs',
      cut: 'Faceted Teardrop (9x6mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['20mm Hoop Diameter'],
    metals: ['18k Champagne Gold', '925 Sterling Silver'],
    careInstructions: 'Lightweight for daily wear. Clean with warm soapy water and a soft towel.',
    shippingInfo: 'Arrives in velvet pouch.',
    reviews: [
      { id: 're4', author: 'Tara M.', rating: 5, date: 'Oct 4, 2026', title: 'Golden sunshine', comment: 'Extremely lightweight, no pull on earlobes, and the citrine shines brilliantly in sunlight.', verified: true }
    ]
  },

  // ---------------- TOPS / STUDS ("tops wegara") ----------------
  {
    id: 'prod-13',
    name: 'Blush Rose Quartz Solitaire Tops',
    slug: 'blush-rose-quartz-solitaire-tops',
    category: 'tops',
    categoryName: 'Gemstone Tops & Studs',
    gemstone: 'Madagascar Rose Quartz',
    price: 78,
    originalPrice: 95,
    rating: 4.9,
    reviewCount: 88,
    inStock: true,
    isBestseller: true,
    isNew: false,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1588444650700-fd887f15a9e7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Faceted round cut rose quartz ear tops with champagne gold beaded milgrain border.',
    description: 'Gentle, romantic, and versatile daily tops. These dainty gemstone ear studs showcase pastel pink rose quartz encircled by a finely beaded milgrain border in champagne gold vermeil. Comfort-fit friction backings.',
    gemstoneDetails: {
      origin: 'Madagascar',
      hardness: '7.0 Mohs',
      cut: 'Brilliant Round Cut (7mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['Petite Stud (8mm overall)'],
    metals: ['18k Champagne Gold', '14k Rose Gold', '925 Sterling Silver'],
    careInstructions: 'Hypoallergenic and gentle for newly pierced or sensitive ears.',
    shippingInfo: 'Gift ready in plush pink velvet pouch.',
    reviews: [
      { id: 'r12', author: 'Jessica R.', rating: 5, date: 'Oct 6, 2026', title: 'Everyday staple tops', comment: 'I wear these almost daily to work. Subtle, elegant, and the blush matches everything.', verified: true }
    ]
  },
  {
    id: 'prod-14',
    name: 'Radiant Fire Opal Halo Tops',
    slug: 'radiant-fire-opal-halo-tops',
    category: 'tops',
    categoryName: 'Gemstone Tops & Studs',
    gemstone: 'Natural Ethiopian Opal',
    price: 128,
    originalPrice: 155,
    rating: 5.0,
    reviewCount: 62,
    inStock: true,
    isBestseller: true,
    isNew: true,
    badge: 'New Arrival',
    images: [
      'https://images.unsplash.com/photo-1638734205377-f21045bf6ebe?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1655328723829-3140909b335b?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Luminescent round opals framed by delicate micropavé crystal halos in champagne gold.',
    description: 'High-fire Ethiopian opal cabochons encased in sparkling pavé halos. These ear tops reflect neon green, peach, and golden fires with every movement of the head.',
    gemstoneDetails: {
      origin: 'Ethiopia',
      hardness: '6.0 Mohs',
      cut: 'Round Cabochon with Pavé Halo (9mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['Classic Tops (9mm diameter)'],
    metals: ['18k Champagne Gold', '925 Sterling Silver'],
    careInstructions: 'Avoid direct contact with perfumes or submerging in water.',
    shippingInfo: 'Includes velvet presentation box and certificate.',
    reviews: [
      { id: 'rt2', author: 'Ananya D.', rating: 5, date: 'Oct 5, 2026', title: 'Tiny fireworks on my ears', comment: 'The opal quality is astonishing! So much color flash in such a dainty pair of tops.', verified: true }
    ]
  },
  {
    id: 'prod-15',
    name: 'Royal Sapphire Micro-Crown Tops',
    slug: 'royal-sapphire-micro-crown-tops',
    category: 'tops',
    categoryName: 'Gemstone Tops & Studs',
    gemstone: 'Ceylon Royal Blue Sapphire',
    price: 135,
    originalPrice: 165,
    rating: 4.9,
    reviewCount: 37,
    inStock: true,
    isBestseller: false,
    isNew: false,
    badge: 'Fine Cut',
    images: [
      'https://images.unsplash.com/photo-1774504347388-3d01f7cac097?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1761479250428-f84d4522a9c8?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Deep royal blue faceted sapphires held in four-prong champagne gold crown baskets.',
    description: 'Regal and timeless. Precision round faceted Ceylon sapphires showcase pure cornflower-to-royal blue depth, mounted in minimal crown prongs allowing light to enter from all facets.',
    gemstoneDetails: {
      origin: 'Ratnapura, Sri Lanka',
      hardness: '9.0 Mohs (Ultra-Durable)',
      cut: 'Brilliant Round Cut (6mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['6mm Solitaire Tops'],
    metals: ['18k Champagne Gold', '925 Sterling Silver'],
    careInstructions: 'Sapphires are exceptionally hard and durable. Perfect for lifetime daily wear.',
    shippingInfo: 'Arrives in velvet keepsake box.',
    reviews: [
      { id: 'rt3', author: 'Catherine H.', rating: 5, date: 'Sep 17, 2026', title: 'Deepest blue ever', comment: 'The blue depth is magnificent. The gold crown prongs elevate the stones beautifully.', verified: true }
    ]
  },
  {
    id: 'prod-16',
    name: 'Honey Citrine Minimalist Bezel Tops',
    slug: 'honey-citrine-minimalist-bezel-tops',
    category: 'tops',
    categoryName: 'Gemstone Tops & Studs',
    gemstone: 'Natural Golden Citrine',
    price: 72,
    originalPrice: 90,
    rating: 4.8,
    reviewCount: 51,
    inStock: true,
    isBestseller: false,
    isNew: true,
    badge: 'Artisan',
    images: [
      'https://images.unsplash.com/photo-1761479271790-c7327d1bc5b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1663899940872-6dba376bbfdb?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Geometric hexagonal cut golden citrine tops encircled by sleek flush-set gold bezels.',
    description: 'Clean modern luxury. Custom geometric cut honey citrine stones secured in smooth bezel frames that will not snag on clothing or hair. Secure post backings.',
    gemstoneDetails: {
      origin: 'Brazil',
      hardness: '7.0 Mohs',
      cut: 'Geometric Hexagon (7mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['7mm Bezel Stud Tops'],
    metals: ['18k Champagne Gold', '14k Rose Gold'],
    careInstructions: 'Clean with warm soapy water and a soft cloth.',
    shippingInfo: 'Arrives in signature blush velvet pouch.',
    reviews: [
      { id: 'rt4', author: 'Mira K.', rating: 5, date: 'Oct 7, 2026', title: 'Zero snagging!', comment: 'The bezel is so smooth it never catches my hair. Love the golden honey warmth.', verified: true }
    ]
  },

  // ---------------- NATURAL CRYSTALS ----------------
  {
    id: 'prod-17',
    name: 'Madagascar Raw Rose Quartz Natural Geode',
    slug: 'madagascar-raw-rose-quartz-natural-geode',
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
      'https://images.unsplash.com/photo-1673782870460-80e736b30a99?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1785508822209-a2adde891a04?auto=format&fit=crop&w=800&q=80',
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
    careInstructions: 'Rinse under cool water and pat dry with a soft cloth. Keep away from prolonged harsh direct sunlight.',
    shippingInfo: 'Double-boxed with custom protective foam for safe delivery.',
    reviews: [
      { id: 'r3', author: 'Sophia L.', rating: 5, date: 'Sep 29, 2026', title: 'Sublime pink glow', comment: 'The quality of the pink saturation is exceptional. Heavy, cool to the touch, and brings such calmness.', verified: true }
    ]
  },
  {
    id: 'prod-18',
    name: 'Uruguayan Deep Royal Amethyst Cathedral',
    slug: 'uruguayan-deep-royal-amethyst-cathedral',
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
      'https://images.unsplash.com/photo-1682963135833-ee78c62672b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1761156254642-c89f937b1f1b?auto=format&fit=crop&w=800&q=80',
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
    careInstructions: 'Dust with soft makeup brush. Preserve color by avoiding excessive direct hot sun.',
    shippingInfo: 'Heavily cushioned for pristine transit.',
    reviews: [
      { id: 'r7', author: 'Danielle S.', rating: 5, date: 'Oct 3, 2026', title: 'Deepest violet I have seen', comment: 'The sparkle from these dark purple points in evening lamplight is stunning.', verified: true }
    ]
  },
  {
    id: 'prod-19',
    name: 'Clear Quartz Hexagonal Generator Tower',
    slug: 'clear-quartz-hexagonal-generator-tower',
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
      'https://images.unsplash.com/photo-1788035341827-8f4d987676e8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1783161603137-e08b0733b438?auto=format&fit=crop&w=800&q=80',
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
    id: 'prod-20',
    name: 'Honey Citrine Raw Formation Point',
    slug: 'honey-citrine-raw-formation-point',
    category: 'natural-crystals',
    categoryName: 'Natural Crystals',
    gemstone: 'Natural Honey Citrine',
    price: 62,
    originalPrice: 75,
    rating: 4.9,
    reviewCount: 39,
    inStock: true,
    isBestseller: false,
    isNew: true,
    badge: 'New Arrival',
    images: [
      'https://images.unsplash.com/photo-1788035341627-b76ccdfbaef9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1632088470623-8b0dc0a368c5?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Natural rough golden citrine cluster featuring glass-like terminated crystal terminations.',
    description: 'Pure solar warmth captured in stone. Natural, unheated golden citrine from Rio Grande do Sul showcasing amber root bases that taper into luminous honey-golden peaks.',
    gemstoneDetails: {
      origin: 'Rio Grande do Sul, Brazil',
      hardness: '7.0 Mohs',
      cut: 'Natural Terminated Point Cluster',
      finish: 'Natural Raw Formation (approx 200g)'
    },
    sizes: ['Classic (180-220g)'],
    metals: ['Natural Specimen (No Metal)'],
    careInstructions: 'Dust with soft brush. Avoid prolonged hot direct midday sunlight.',
    shippingInfo: 'Protective packaging with authentication certificate.',
    reviews: [
      { id: 'rc4', author: 'Liam W.', rating: 5, date: 'Oct 1, 2026', title: 'Warm glow on my desk', comment: 'The amber-gold transparency in natural morning light is so uplifted and peaceful.', verified: true }
    ]
  },

  // ---------------- PENDANTS ----------------
  {
    id: 'prod-21',
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
      'https://images.unsplash.com/photo-1685970735237-c8f8bfc5fab5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1769857879388-df93b4c96bca?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Hand-carved heart crystal suspended on an adjustable 18k gold vermeil rope chain.',
    description: 'An emblem of timeless grace, the Seraphina pendant showcases a faceted Brazilian Rose Quartz heart polished to perfection. Suspended from an elegant diamond-cut cable chain with an adjustable slider.',
    gemstoneDetails: {
      origin: 'Minas Gerais, Brazil',
      hardness: '7.0 Mohs',
      cut: 'Faceted Heart Cut (14mm)',
      finish: '18k Champagne Gold Vermeil'
    },
    sizes: ['16 - 18 inch (Adjustable)', '18 - 20 inch (Adjustable)'],
    metals: ['18k Champagne Gold', '14k Rose Gold', '925 Sterling Silver'],
    careInstructions: 'Clean gently using warm soapy water and a soft cloth. Store away from sharp jewelry items.',
    shippingInfo: 'Packaged in signature Aevah champagne gold embossed box with velvet ribbon.',
    reviews: [
      { id: 'r4', author: 'Audrey P.', rating: 5, date: 'Oct 5, 2026', title: 'The ultimate gift', comment: 'My husband surprised me with this for our anniversary. The soft pink tone complements every outfit.', verified: true }
    ]
  },
  {
    id: 'prod-22',
    name: 'Sunlit Citrine Prism Geometric Pendant',
    slug: 'sunlit-citrine-prism-geometric-pendant',
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
      'https://images.unsplash.com/photo-1642731797509-99a8faa9d701?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1625844225439-aad9a72213ae?auto=format&fit=crop&w=800&q=80',
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

  // ---------------- ACCESSORIES ----------------
  {
    id: 'prod-23',
    name: 'Rose Quartz Gua Sha & Facial Roller Set',
    slug: 'rose-quartz-gua-sha-facial-roller-set',
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
      'https://images.unsplash.com/photo-1678244660394-fa02a19ac24a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1627506584439-4365062a632a?auto=format&fit=crop&w=800&q=80',
    ],
    shortDescription: 'Sculpted from 100% genuine Grade-A rose quartz with champagne gold noise-free hardware.',
    description: 'Elevate your self-care ritual. Hand-sculpted from authentic, cooling Madagascar rose quartz. The dual-ended facial roller features noise-free silicone inner bearings and an integrated champagne gold frame, paired with a curved heart gua sha.',
    gemstoneDetails: {
      origin: 'Madagascar',
      hardness: '7.0 Mohs',
      cut: 'Hand-Carved & Polished Stone',
      finish: 'Champagne Gold Hardware with Silicone Dampeners'
    },
    sizes: ['2-Piece Deluxe Box Set'],
    metals: ['Champagne Gold Alloy Hardware'],
    careInstructions: 'Rinse with warm water and gentle cleanser after use. Pat dry thoroughly.',
    shippingInfo: 'Arrives in cushioned magnetic closure gift box with facial mapping guide.',
    reviews: [
      { id: 'r13', author: 'Mia H.', rating: 5, date: 'Sep 27, 2026', title: 'Silky smooth & so cooling', comment: 'You can tell it is 100% real quartz because it stays cool to the touch. The roller does not squeak at all!', verified: true }
    ]
  },
  {
    id: 'prod-24',
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
      'https://images.unsplash.com/photo-1679395283817-39f56e249ea6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1663899940839-06ff68bebd50?auto=format&fit=crop&w=800&q=80',
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
    careInstructions: 'Selenite is water soluble! DO NOT wash or submerge in water. Clean exclusively with dry dusting cloth.',
    shippingInfo: 'Carefully wrapped with extra protective cushioning.',
    reviews: [
      { id: 'r14', author: 'Claire P.', rating: 5, date: 'Oct 4, 2026', title: 'Stunning display dish for my rings', comment: 'Sits right on my nightstand. The pearly sheen is magical and my rings look gorgeous resting on it.', verified: true }
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
