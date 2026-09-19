import { Product, Doctor, ReviewItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'buffalo-bilona-ghee',
    name: '24 Karat Vedic Murrah Buffalo Bilona Desi Ghee (Traditional Danedar)',
    subtitle: 'Slow wood-fired bilona churned from grass-fed Murrah buffalo A2 curd in earthen clay pots',
    category: 'physical' as any, // mapping for categories
    rating: 4.96,
    reviewCount: 3420,
    mrp: 1999,
    price: 1499,
    discountLabel: 'SAVE ₹500 (25% OFF)',
    badge: 'BESTSELLER ★★★★★',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80'
    ],
    perks: 'Free Solid Brass Spoon + NABL Lab Purity Report with Every Jar',
    benefitsSummary: '100% authentic Bilona ghee handcrafted from Murrah buffalo A2 curd. Rich in natural CLA, butyric acid, and fat-soluble vitamins for immunity, digestive Agni, and joint lubrication.',
    description: 'Experience the pristine royal benchmark of Ayurvedic purity. 24 KARAT Buffalo Bilona Desi Ghee is prepared using the authentic 5-step Vedic Bilona method:\n\nFresh whole milk from free-grazing Murrah buffaloes is boiled in unglazed clay pots over slow wood fires, naturally fermented into probiotic curd overnight, two-way churned with a traditional wooden bilona to extract fresh white makkhan (butter), and clarified gently over low heat until exquisite golden danedar (granular) ghee emerges.\n\nFree from industrial cream separators, heating coils, chemical stabilizers, palm oil, or synthetic preservatives.',
    whyChoose: '32 Litres of Pure Milk per 1 Kg Jar — Unlike industrial ghee extracted directly from boiled cream (malai), our authentic Vedic bilona method requires 30 to 35 litres of whole Murrah buffalo A2 milk to make a single kilogram of pure bilona ghee, preserving all living bio-enzymes, fat-soluble nutrients, and gut-healing butyric acid.',
    benefitsList: [
      'Authentic Granular (Danedar) texture with intoxicating natural nutty aroma',
      'High Smoke Point (250°C / 482°F) — ideal for Indian cooking, tadka & roasting without oxidation',
      'Rich in Gut-Healing Butyric Acid — nourishes colon cells and soothes acidity and bloating',
      'Abundant in Conjugated Linoleic Acid (CLA) & Fat-Soluble Vitamins A, D, E & K2',
      'Natural Joint Lubricant — nourishes cartilage and pacifies aggravated Vata dosha',
      '100% Lactose & Casein Free — perfectly tolerated by sensitive digestions'
    ],
    ingredients: [
      { name: 'Pure Murrah Buffalo Milk Fat (Clarified Butter)', botanical: 'Bubalus bubalis (A2 Murrah Breed)', role: 'Slow wood-fired bilona clarified butter rich in short-chain fatty acids and natural fat-soluble vitamins' },
      { name: 'Natural Probiotic Curd Culture', botanical: 'Lactobacillus cultures', role: 'Traditional Vedic starter culture converting raw milk into digestible gut-friendly curd' }
    ],
    dosage: 'Consume 1-2 teaspoons daily with warm water or milk in the morning, or drizzle over piping hot rotis, dal, khichdi, and rice. For culinary use, replace regular cooking oil for rich flavor and superior thermal stability.',
    symptomsTargeted: ['Sluggish Digestion (Manda Agni)', 'Joint Stiffness & Pain', 'Low Immunity & Fatigue', 'Dry Skin & Brittle Hair', 'Acidity & Gut Inflammation'],
    packs: [
      { id: 'bilona-500ml', duration: '500 ml Glass Jar', bottles: 1, tablets: 500, mrp: 1099, price: 799, discount: 300, tag: 'TRIAL PACK' },
      { id: 'bilona-1l', duration: '1 Litre Glass Jar', bottles: 1, tablets: 1000, mrp: 1999, price: 1499, discount: 500, tag: 'MOST POPULAR' },
      { id: 'bilona-2l', duration: '2 Litres (2 x 1L Jars)', bottles: 2, tablets: 2000, mrp: 3899, price: 2799, discount: 1100, tag: 'FAMILY SAVINGS PACK' },
      { id: 'bilona-5l', duration: '5 Litres Vedic Tin', bottles: 1, tablets: 5000, mrp: 9499, price: 6799, discount: 2700, tag: 'VEDIC VALUE PACK' }
    ]
  },
  {
    id: 'swarna-bhasma-gold-ghee',
    name: '24 Karat Swarna Bhasma Reserve Buffalo Ghee (Infused with 24K Gold & Saffron)',
    subtitle: 'Royal Rasayana formulation enriched with certified 24-Karat Ayurvedic Swarna Bhasma and Kashmiri Mogra Kesar',
    category: 'emotional' as any,
    rating: 5.0,
    reviewCount: 1840,
    mrp: 3499,
    price: 2699,
    discountLabel: 'SAVE ₹800 (23% OFF)',
    badge: 'ROYAL GOLD RESERVE ★★★★★',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80'
    ],
    perks: 'Certified 24K Gold Assay Lab Certificate + Velvet Keepsake Box',
    benefitsSummary: 'The crown jewel of Ayurvedic Rasayana. Combines pure Murrah Buffalo Bilona Ghee with micro-purified 24-Karat Swarna Bhasma, wild forest saffron, and cardamom to awaken Ojas, radiant skin vitality, and sharp intellect.',
    description: 'Crafted for royalty and Ayurvedic wellness connoisseurs. Swarna (purified elemental gold) has been revered for millennia in Charaka Samhita as the premier Rasayana for longevity, radiant complexion (Varnya), cellular rejuvenation, and unmatched cellular vitality.\n\nOur Master Vaidyas gently infuse pure 24K Swarna Bhasma and Grade-1 Kashmiri Mogra Kesar into warm bilona ghee over 72 hours of low-heat Vedic Samskara.',
    whyChoose: 'Certified 99.9% 24 Karat Swarna Bhasma — Tested via ICP-OES spectroscopy to ensure complete elemental micro-absorption and total freedom from heavy metal toxicity. True royal rejuvenation.',
    benefitsList: [
      'Stimulates Ojas — deep vitality, cellular defense and immune resilience',
      'Enhances mental stamina, focus and memory retention (Medhya action)',
      'Promotes radiant, luminous dermal complexion from within',
      'Harmonizes all three doshas (Vata, Pitta, Kapha) in times of fatigue',
      'Supports healthy heart function and micro-vascular circulation'
    ],
    ingredients: [
      { name: '24-Karat Swarna Bhasma', botanical: 'Purified Elemental Gold Calcination', role: 'Potent Ayurvedic rejuvenator for vitality, cellular longevity, and cognitive sharpness' },
      { name: 'Kashmiri Mogra Saffron', botanical: 'Crocus sativus', role: 'Rich in crocin and safranal for radiant skin, mood elevation, and cellular repair' },
      { name: 'Green Cardamom (Chhoti Elaichi)', botanical: 'Elettaria cardamomum', role: 'Enhances digestion and imparts an exquisite aromatic finish' },
      { name: 'Pure Murrah Buffalo Bilona Ghee', botanical: 'Bubalus bubalis A2 Fat', role: 'The supreme bio-carrier (Yogavahi) transporting gold micro-particles directly into deep tissues' }
    ],
    dosage: 'Take half to one teaspoon every morning on an empty stomach with a cup of warm milk or warm water. Best consumed continuously for 60 to 90 days for peak Rasayana benefits.',
    symptomsTargeted: ['Chronic Fatigue & Low Energy', 'Dull Complexion & Premature Aging', 'Mental Exhaustion & Brain Fog', 'Weak Immunity', 'Post-Illness Recovery'],
    packs: [
      { id: 'gold-250ml', duration: '250 ml Royal Jar', bottles: 1, tablets: 250, mrp: 1999, price: 1499, discount: 500, tag: 'TRIAL RESERVE' },
      { id: 'gold-500ml', duration: '500 ml Royal Jar', bottles: 1, tablets: 500, mrp: 3499, price: 2699, discount: 800, tag: 'ROYAL FAVORITE' },
      { id: 'gold-1l', duration: '1 Litre Royal Vault', bottles: 1, tablets: 1000, mrp: 6499, price: 4999, discount: 1500, tag: 'ELIXIR VAULT' }
    ]
  },
  {
    id: 'medhya-herbal-ghee',
    name: '24 Karat Medhya Buffalo Ghrita (Ashwagandha, Brahmi & Shankhpushpi)',
    subtitle: 'Vedic brain & nervous system restorative formulated with certified organic nootropic herbs',
    category: 'uti' as any,
    rating: 4.9,
    reviewCount: 1215,
    mrp: 2199,
    price: 1599,
    discountLabel: 'SAVE ₹600 (27% OFF)',
    badge: 'AYURVEDIC VAIDYA CHOICE',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80'
    ],
    perks: 'Free Tele-Consultation with Senior Ayurvedic Vaidya',
    benefitsSummary: 'Ayurvedic medicated ghee (Ghrita) cooked with Medhya Rasayana herbs. Nourishes neurotransmitters, improves memory retention, calms stress hormones, and supports restorative deep sleep.',
    description: 'In Ayurveda, ghee is considered the ideal lipid carrier across the blood-brain barrier. 24 KARAT Medhya Ghrita is prepared by simmering unadulterated Murrah buffalo bilona ghee with decoctions of organic Brahmi, Shankhpushpi, Ashwagandha, and Jyotishmati.\n\nIdeal for students, professionals under high mental workload, elders facing memory lapse, and growing children.',
    whyChoose: 'Traditional Sneha Kalpana Preparation — Cooked meticulously through 3 stages (Mridu, Madhya, Khara Paka) to ensure complete fat-soluble infusion of botanical nootropics without water content.',
    benefitsList: [
      'Sharpens focus, memory retention, and cognitive processing speed',
      'Calms hyperactive nervous tension, stress, and anxiety triggers',
      'Promotes deep restful sleep without heavy morning grogginess',
      'Fortifies neural pathways in aging brains and growing children',
      'Pacifies aggravated Vata in the nervous system (Majja Dhatu)'
    ],
    ingredients: [
      { name: 'Brahmi Extract', botanical: 'Bacopa monnieri', role: 'Nootropic herb that revitalizes synaptic transmission and memory recall' },
      { name: 'Shankhpushpi', botanical: 'Convolvulus pluricaulis', role: 'Vedic tranquilizer reducing mental fatigue and emotional stress' },
      { name: 'Ashwagandha (KSM-66)', botanical: 'Withania somnifera', role: 'Adaptogen that stabilizes cortisol and repairs neural wear-and-tear' },
      { name: 'Jyotishmati (Malkangani)', botanical: 'Celastrus paniculatus', role: 'Known as the "Intellect Tree" herb for sharp concentration' }
    ],
    dosage: '1 teaspoon twice daily with warm milk or on an empty stomach in the morning. Safe for children above 4 years (half teaspoon) and adults.',
    symptomsTargeted: ['Brain Fog & Poor Memory', 'Exam & Work Stress', 'Restless Sleepless Nights', 'Nervous Anxiety & Tremors', 'Attention Deficit & Fatigue'],
    packs: [
      { id: 'medhya-500ml', duration: '500 ml Jar', bottles: 1, tablets: 500, mrp: 2199, price: 1599, discount: 600, tag: 'MOST POPULAR' },
      { id: 'medhya-1l', duration: '1 Litre Jar', bottles: 1, tablets: 1000, mrp: 3999, price: 2999, discount: 1000, tag: 'BEST VALUE' }
    ]
  },
  {
    id: 'claypot-cultured-bilona-ghee',
    name: '24 Karat Cultured Clay-Pot Churned A2 Buffalo Bilona Ghee (Raw Probiotic Batch)',
    subtitle: 'Slow wood-fired on Chulha in unglazed clay pots, aged with natural starter culture for maximum gut bio-availability',
    category: 'dermal' as any,
    rating: 4.92,
    reviewCount: 2150,
    mrp: 2299,
    price: 1649,
    discountLabel: 'SAVE ₹650 (28% OFF)',
    badge: 'CLAY POT HANDMADE',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80'
    ],
    perks: 'Handcrafted in Small 100-Jar Micro Batches with Batch Number on Lid',
    benefitsSummary: 'Made in authentic Mitti ke Bartan (earthen clay vessels). Clay naturally retains vital minerals like calcium, phosphorus, and iron while infusing a deep earthy sweetness to the ghee.',
    description: 'Every jar of 24 KARAT Clay-Pot Ghee is slow-crafted by generational artisans in Rajasthan and Haryana. Raw Murrah buffalo milk is gently boiled in thick earthen pots over dried cow-dung and neem wood cakes.\n\nThe clay pot porous walls allow gentle moisture evaporation while alkaline clay balances milk acidity, resulting in rich granular crystals with unparalleled aroma and digestive friendliness.',
    whyChoose: 'Earth-Infused Micro-Minerals — Laboratory tests show our clay-pot simmered ghee contains 18% higher alkaline minerals and beneficial butyric acid compared to stainless steel industrial boilers.',
    benefitsList: [
      'Deep, mesmerizing earthen fragrance (Mitti ki Sondhi Khushbu)',
      'Supreme golden granular crystals that melt on your tongue',
      'Stimulates digestive fire (Agni) without creating excess Pitta acid',
      'Nourishes joint synovial fluid and bone density with natural calcium',
      'Ideal for pregnant women, new mothers (Post-partum recovery) & seniors'
    ],
    ingredients: [
      { name: 'Earthen-Pot Murrah Buffalo A2 Milk Fat', botanical: 'Clay-simmered A2 Milk', role: 'Slow wood-fired clarified butter infused with natural earthen trace minerals' },
      { name: 'Generational Vedic Culture', botanical: 'Lactic starter culture', role: 'Enzymatically converts dairy sugars into easy-to-digest short chain fatty acids' }
    ],
    dosage: '1 to 2 tablespoons daily with hot meals or warm water before bedtime for gut motility and restful sleep.',
    symptomsTargeted: ['Constipation & Sluggish Bowels', 'Severe Acidity & Gastric Burns', 'Joint Stiffness in Knees & Spine', 'Post-Partum Nutrient Deficit'],
    packs: [
      { id: 'clay-500ml', duration: '500 ml Glass Jar', bottles: 1, tablets: 500, mrp: 1199, price: 879, discount: 320, tag: 'TRIAL PACK' },
      { id: 'clay-1l', duration: '1 Litre Glass Jar', bottles: 1, tablets: 1000, mrp: 2299, price: 1649, discount: 650, tag: 'AUTHENTIC BILONA' },
      { id: 'clay-2l', duration: '2 Litres (2 x 1L Jars)', bottles: 2, tablets: 2000, mrp: 4399, price: 3149, discount: 1250, tag: 'FAMILY PACK' }
    ]
  },
  {
    id: 'royal-heritage-gift-box',
    name: '24 Karat Royal Heritage Festive Gift Box (Bilona + Swarna Ghee + Solid Brass Diya)',
    subtitle: 'Auspicious luxury gift hamper featuring our finest Bilona ghee, pure Swarna Reserve & ceremonial brass accessories',
    category: 'combo' as any,
    rating: 5.0,
    reviewCount: 960,
    mrp: 4499,
    price: 3299,
    discountLabel: 'SAVE ₹1,200 (27% OFF)',
    badge: 'FESTIVE LUXURY EDITION',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80'
    ],
    perks: 'Includes Engraved Solid Brass Diya + Royal Velvet Keepsake Box',
    benefitsSummary: 'The ultimate gift of purity and auspicious health. Contains 1 Litre 24 KARAT Pure Buffalo Bilona Ghee, 250ml 24K Swarna Bhasma Reserve, hand-carved Sheesham spoon, and ceremonial heavy brass Diya.',
    description: 'In ancient India, gifting pure ghee represented the highest blessing of long life (Ayushya), abundance (Lakshmi), and divine health (Arogya).\n\nPresented in a magnetic velvet gold-foiled presentation box, this royal edition is the perfect gift for housewarmings, Diwali, weddings, and celebrating milestones with family and esteemed partners.',
    whyChoose: 'The Royal Standard of Thoughtful Gifting — 100% pure, natural, and unforgettable. No artificial sweets or generic gifts — only timeless Vedic health and handcrafted grandeur.',
    benefitsList: [
      '1 x 1 Litre 24 KARAT Murrah Buffalo Bilona Desi Ghee in premium glass jar',
      '1 x 250ml 24 KARAT Swarna Bhasma Gold Reserve Ghee with Kashmiri Kesar',
      '1 x Hand-Cast Heavy Pure Brass Diya for puja & sacred ceremonies',
      '1 x Hand-carved solid Sheesham wood ghee server spoon',
      'Deluxe magnetic rigid box with gold embossed royal foil work'
    ],
    ingredients: [
      { name: '24 Karat Murrah Buffalo Bilona Ghee (1L)', botanical: 'Pure A2 Clarified Butter', role: 'Vedic slow wood-fired bilona ghee' },
      { name: '24 Karat Swarna Bhasma Reserve Ghee (250ml)', botanical: '24K Gold & Saffron Infused', role: 'Royal rejuvenation elixir' }
    ],
    dosage: 'Enjoy daily as royal food and sacred prasad.',
    symptomsTargeted: ['Auspicious Celebrations', 'Immunity & Longevity', 'Royal Gastronomy', 'Luxury Wellness'],
    packs: [
      { id: 'gift-1box', duration: '1 Luxury Gift Box', bottles: 2, tablets: 1250, mrp: 4499, price: 3299, discount: 1200, tag: 'FESTIVE SPECIAL' },
      { id: 'gift-2box', duration: 'Set of 2 Gift Boxes', bottles: 4, tablets: 2500, mrp: 8999, price: 6199, discount: 2800, tag: 'CORPORATE & WEDDING' }
    ]
  },
  {
    id: 'shatavari-buffalo-ghrita',
    name: '24 Karat Shatavari & Ashoka Buffalo Ghrita (Women\'s Vitality & Hormonal Harmony)',
    subtitle: 'Infused with wild Himalayan Shatavari root, Ashoka bark and organic buffalo bilona ghee for reproductive wellness',
    category: 'hormonal' as any,
    rating: 4.95,
    reviewCount: 890,
    mrp: 2399,
    price: 1749,
    discountLabel: 'SAVE ₹650 (27% OFF)',
    badge: 'WOMEN\'S WELLNESS ★★★★★',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80'
    ],
    perks: 'Free Hormone & Diet Consultation with Senior Lady Vaidya',
    benefitsSummary: 'Classical Ayurvedic medicated ghee for women across life stages—from painful cycle relief and fertility nourishment to postpartum lactation and smooth menopause transition.',
    description: 'Shatavari (Asparagus racemosus) is known in Ayurveda as the "Queen of Herbs" for female hormonal balance. When simmered gently in authentic Murrah buffalo bilona ghee, its fat-soluble phytoestrogens and saponins are absorbed with supreme bio-availability.\n\nHelps soothe hot flashes, mood fluctuations, menstrual cramps, uterine tissue fatigue, and enhances natural breastmilk production in nursing mothers.',
    whyChoose: 'Traditional Murchhana & Sneha Kalpana — 72 hours of gentle decoction boiling ensures complete assimilation of herbal actives into the ghee core without bitter aftertaste.',
    benefitsList: [
      'Eases menstrual irregularities, severe cramps, and PMS mood shifts',
      'Naturally cools hot flashes, night sweats, and peri-menopausal dryness',
      'Supreme Galactagogue — boosts healthy, rich milk supply in lactating mothers',
      'Deeply nourishes Shukra and Artava Dhatu (reproductive vitality)',
      'Rich in natural calcium for bone density protection after age 35'
    ],
    ingredients: [
      { name: 'Organic Shatavari Root', botanical: 'Asparagus racemosus', role: 'Phytoestrogenic adaptogen soothing reproductive and endocrine systems' },
      { name: 'Ashoka Bark', botanical: 'Saraca asoca', role: 'Classical uterine tonic pacifying excess Pitta heat' },
      { name: 'Yashtimadhu (Licorice)', botanical: 'Glycyrrhiza glabra', role: 'Sweet demulcent balancing gastric mucous membranes and hormones' },
      { name: 'Pure Murrah Buffalo Bilona Ghee', botanical: 'Bubalus bubalis A2 Fat', role: 'Potent lipid carrier across endocrine cell membranes' }
    ],
    dosage: '1 to 2 teaspoons with a cup of warm milk (or warm water) twice daily, preferably morning on an empty stomach and evening.',
    symptomsTargeted: ['Menstrual Cramps & Irregularity', 'Hot Flashes & Night Sweats', 'Post-Partum Recovery & Lactation', 'Hormonal Mood Swings', 'Fatigue & Low Bone Density'],
    packs: [
      { id: 'shatavari-500ml', duration: '500 ml Glass Jar', bottles: 1, tablets: 500, mrp: 2399, price: 1749, discount: 650, tag: 'MOST POPULAR' },
      { id: 'shatavari-1l', duration: '1 Litre Glass Jar', bottles: 1, tablets: 1000, mrp: 4399, price: 3199, discount: 1200, tag: 'BEST VALUE' }
    ]
  },
  {
    id: 'triphala-buffalo-ghrita',
    name: '24 Karat Triphala Netra & Pachana Buffalo Ghrita (Eye Rejuvenation & Colon Cleanse)',
    subtitle: 'Simmered with Amalaki, Bibhitaki & Haritaki in wood-fired clay pots for digital eye strain and digestive motility',
    category: 'digestive' as any,
    rating: 4.91,
    reviewCount: 760,
    mrp: 2199,
    price: 1549,
    discountLabel: 'SAVE ₹650 (30% OFF)',
    badge: 'DIGITAL EYE & GUT CARE',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=80'
    ],
    perks: 'Free Ayurvedic Eye Care Guide & Netra Basti Instructions',
    benefitsSummary: 'Revered in Sushruta Samhita as the premier "Chakshushya" (vision-nourishing) formulation. Soothes dry burning screen eyes, reduces dark circles, and gently cleanses the colon lining.',
    description: 'Modern screen exposure places relentless strain on Netra Pitta (ocular heat). 24 KARAT Triphala Ghrita combines fresh Amla, Harad, and Baheda extracts infused into Murrah buffalo bilona ghee.\n\nBuffalo ghee provides cooling Snigdha properties that nourish delicate optic nerves, soothe corneal dryness, and normalize bowel motility without causing loose motions.',
    whyChoose: 'Classical Chakshushya Formulation — Triple-filtered through surgical muslin to ensure absolute zero residue, making it safe for oral intake and specialized eye oil therapies under Vaidya supervision.',
    benefitsList: [
      'Relieves digital eye strain, computer vision syndrome, and dryness',
      'Cools excess ocular and gastric Pitta (acid burns & red eyes)',
      'Gently tonifies peristalsis and resolves chronic stubborn constipation',
      'Abundant natural Vitamin C and bioflavonoids for cellular detox',
      'Deeply cleanses gut villi and promotes nutrient assimilation'
    ],
    ingredients: [
      { name: 'Fresh Amalaki (Indian Gooseberry)', botanical: 'Phyllanthus emblica', role: 'Potent natural antioxidant cooling ocular and liver heat' },
      { name: 'Haritaki (Chebulic Myrobalan)', botanical: 'Terminalia chebula', role: 'Revered for cleansing the gastrointestinal tract' },
      { name: 'Bibhitaki', botanical: 'Terminalia bellirica', role: 'Kapha pacifier clearing mucous and lubricating tissues' },
      { name: 'Pure Murrah Buffalo Bilona Ghee', botanical: 'Bubalus bubalis A2 Fat', role: 'Soothes inflamed nerves and carries bio-nutrients to retinal tissue' }
    ],
    dosage: '1 teaspoon with warm water before bedtime for gut cleansing, or half teaspoon in morning for vision support.',
    symptomsTargeted: ['Digital Screen Eye Fatigue', 'Chronic Constipation', 'Acidity & Heartburn', 'Dry Eyes & Burning Sensation', 'Sluggish Metabolism'],
    packs: [
      { id: 'triphala-500ml', duration: '500 ml Glass Jar', bottles: 1, tablets: 500, mrp: 2199, price: 1549, discount: 650, tag: 'MOST POPULAR' },
      { id: 'triphala-1l', duration: '1 Litre Glass Jar', bottles: 1, tablets: 1000, mrp: 3999, price: 2899, discount: 1100, tag: 'BEST VALUE' }
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-radhika-sharma',
    name: 'Vaidya Dr. Radhika Sharma',
    role: 'Senior Ayurvedic Physician & Rasayana Expert',
    qualifications: 'BAMS, MD (Ayurveda), Banaras Hindu University',
    experience: '18+ Years Clinical Practice',
    specialty: 'Gut Agni, Medicated Ghee (Ghrita) Therapy & Dosha Balancing',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    availableDays: ['Mon', 'Wed', 'Fri', 'Sat']
  },
  {
    id: 'dr-vikramaditya-joshi',
    name: 'Dr. Vikramaditya Joshi',
    role: 'Vedic Nutritionist & Panchakarma Acharya',
    qualifications: 'BAMS, PhD (Dravyaguna), National Institute of Ayurveda',
    experience: '22+ Years Clinical Practice',
    specialty: 'Joint Care, Snehan Therapy & Murrah Buffalo Milk Nutrition',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    availableDays: ['Tue', 'Thu', 'Sat', 'Sun']
  },
  {
    id: 'dr-meenakshi-sundaram',
    name: 'Dr. Meenakshi Sundaram',
    role: 'Pediatric & Maternal Ayurvedic Consultant',
    qualifications: 'BAMS, Fellowship in Kaumarbhritya (Pediatrics)',
    experience: '14+ Years Clinical Practice',
    specialty: 'Children Memory Development, Postpartum Recovery & Ojas',
    avatar: 'https://images.unsplash.com/photo-1594824813589-91395b211116?auto=format&fit=crop&w=400&q=80',
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri']
  },
  {
    id: 'dr-rajesh-kulkarni',
    name: 'Dr. Rajesh Kulkarni',
    role: 'Ayurvedic Metabolic & Cardiac Health Consultant',
    qualifications: 'BAMS, PGDCR (Clinical Research)',
    experience: '16+ Years Experience',
    specialty: 'Healthy Fats, Cholesterol Balance & Active Longevity',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    availableDays: ['Wed', 'Thu', 'Sat', 'Sun']
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    productId: 'buffalo-bilona-ghee',
    author: 'Col. Sanjeev Bakshi (Retd.)',
    rating: 5,
    title: 'The Real Danedar Texture of My Childhood!',
    comment: 'Having grown up on a dairy farm in Haryana, I haven’t tasted real buffalo bilona ghee in 30 years. Store brands just taste like melted paraffin. 24 KARAT has that genuine roasted nutty aroma, yellow-golden grainy crystals, and doesn’t leave a greasy film on the palate. Exceptional quality.',
    date: '3 days ago',
    verified: true,
    userLocation: 'Chandigarh'
  },
  {
    id: 'rev-2',
    productId: 'buffalo-bilona-ghee',
    author: 'Kavita Iyer',
    rating: 5,
    title: 'Cured my chronic acid reflux and bloating',
    comment: 'My Ayurvedic doctor advised me to take 1 spoon of 24 KARAT Buffalo Bilona Ghee with warm water first thing in the morning. Within 2 weeks, my morning acidity vanished and my gut feels so settled. Even my knee creaks have reduced noticeably.',
    date: '1 week ago',
    verified: true,
    userLocation: 'Mumbai'
  },
  {
    id: 'rev-3',
    productId: 'swarna-bhasma-gold-ghee',
    author: 'Dr. Aarav Singhania',
    rating: 5,
    title: 'Royal formulation — remarkable energy and glowing skin',
    comment: 'The 24K Swarna Bhasma Reserve is truly regal. The subtle saffron notes combined with pure bilona ghee melts immediately. My daily mental stamina has improved tremendously during 12-hour surgical shifts. Highly recommended!',
    date: '2 weeks ago',
    verified: true,
    userLocation: 'New Delhi'
  },
  {
    id: 'rev-4',
    productId: 'medhya-herbal-ghee',
    author: 'Pooja Bhattacharya',
    rating: 5,
    title: 'My daughter’s focus during exams improved so much',
    comment: 'I gave half a teaspoon of 24 KARAT Medhya Ghrita to my 12-year-old daughter with morning warm milk during her finals. Her memory retention and calm state of mind were amazing. No more morning anxiety.',
    date: '3 weeks ago',
    verified: true,
    userLocation: 'Kolkata'
  },
  {
    id: 'rev-5',
    productId: 'claypot-cultured-bilona-ghee',
    author: 'Rameshwar Patel',
    rating: 5,
    title: 'Authentic clay pot mitti aroma! Tadka smells heavenly',
    comment: 'When you open the glass jar, the whole kitchen is filled with that rustic chulha and clay pot fragrance. Made dal tadka with it and the whole family asked what secret ingredient I used. Ordering the 2 Litre pack now.',
    date: '1 month ago',
    verified: true,
    userLocation: 'Ahmedabad'
  }
];

export const CLINICAL_TRIAL_STATS = [
  { value: '100%', label: 'Free from Palm Oil & Adulterants (NABL Certified)' },
  { value: '31.8', label: 'Reichert-Meissl (RM) Purity Value (Standard > 28)' },
  { value: '250°C', label: 'Ultra-High Smoke Point for Safe Toxin-Free Cooking' },
  { value: '32 L', label: 'Fresh Murrah Buffalo A2 Milk Churned per 1 Kg Jar' },
  { value: '100%', label: 'Lactose & Casein Free for Smooth Digestion' },
  { value: '0 g', label: 'Trans-Fat & Zero Added Chemical Preservatives' },
  { value: '89%', label: 'Users Reported Noticeable Joint & Gut Comfort' },
  { value: '4.96★', label: 'Average Customer Rating Across 15,000+ Jars Delivered' }
];

export const COMMUNITY_STORIES = [
  {
    id: 'story-1',
    name: 'Smt. Sunita Verma',
    age: '54 Yrs',
    city: 'Rohtak, Haryana',
    headline: 'Why This Grandmother Swears 24 KARAT is as Pure as Her Own Village Bilona',
    thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    quote: '"I was convinced that genuine wooden bilona ghee from Murrah buffaloes was lost in cities. 24 KARAT brought the authentic golden aroma and danedar texture back to my kitchen."'
  },
  {
    id: 'story-2',
    name: 'Chef Raghavendra Mathur',
    age: '42 Yrs',
    city: 'Jaipur, Rajasthan',
    headline: 'Why Heritage Royal Kitchens Rely Exclusively on 24 KARAT Buffalo Ghee',
    thumbnail: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    quote: '"For authentic royal biryanis and slow-roasted halwa, no modern cooking oil or industrial ghee compares to the smoke point and rich nutty depth of 24 KARAT."'
  },
  {
    id: 'story-3',
    name: 'Dr. Preeti Deshmukh',
    age: '48 Yrs',
    city: 'Pune, Maharashtra',
    headline: 'An Ayurvedic Vaidya Explains Why Buffalo Bilona Ghee is Supreme for Joint Lubrication',
    thumbnail: 'https://images.unsplash.com/photo-1594824813589-91395b211116?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    quote: '"Murrah buffalo A2 ghee has the ideal balance of heavy, unctuous (Snigdha) qualities that pacify severe Vata joint dryness and nourish synovial fluid."'
  },
  {
    id: 'story-4',
    name: 'Rohit Khurana',
    age: '31 Yrs',
    city: 'New Delhi',
    headline: 'National Powerlifter on Fueling Heavy Squats with 24 KARAT Buffalo Ghee',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    quote: '"Two tablespoons in my pre-workout black coffee gives me sustained energy without blood sugar spikes, and my joints feel bulletproof during 200kg squats."'
  }
];

export const BLOGS = [
  {
    id: 'blog-1',
    category: 'VEDIC SCIENCE',
    title: 'The Truth About Buffalo Bilona Ghee: Why Murrah A2 Milk Makes Superior Golden Ghee',
    readTime: '5 min read',
    date: 'Sep 15, 2026',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Explore why grass-fed Murrah buffalo A2 milk has higher natural fat density, superior CLA, and richer butyric acid than ordinary commercial hybrid cow milk.'
  },
  {
    id: 'blog-2',
    category: 'PURITY GUIDE',
    title: '4 Simple Home Tests to Detect Palm Oil and Vanaspati Adulteration in Desi Ghee',
    readTime: '6 min read',
    date: 'Sep 08, 2026',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Learn how to perform the Palm heat test, Iodine starch test, and Furfural test to ensure your family is consuming 100% pure authentic bilona ghee.'
  },
  {
    id: 'blog-3',
    category: 'GUT HEALTH',
    title: 'How 1 Spoon of Bilona Ghee on an Empty Stomach Heals Leaky Gut and Digestive Agni',
    readTime: '4 min read',
    date: 'Aug 30, 2026',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Discover the gastroenterological and Ayurvedic science of short-chain butyrate fatty acids lining your stomach mucosa and balancing acid reflux.'
  }
];

export interface FAQItem {
  q: string;
  a: string;
  category: 'buffalo_vs_cow' | 'bilona_process' | 'health_ayurveda' | 'cooking_culinary' | 'storage_shipping';
}

export const FAQS: FAQItem[] = [
  {
    category: 'bilona_process',
    q: 'What is the difference between "Cream Ghee" and 24 KARAT Vedic Buffalo Bilona Ghee?',
    a: '95% of commercial supermarket ghee is made by separating industrial raw cream (malai) with high-speed centrifuges and boiling it directly with artificial flavoring. In contrast, 24 KARAT uses the sacred 5-step Vedic Bilona method: Murrah buffalo milk is boiled in clay pots, cultured into probiotic curd overnight, two-way churned with wooden bilona to extract white makkhan, and then slow wood-fired on a traditional chulha. This preserves living enzymes, natural vitamins, and gut-healing butyric acid.'
  },
  {
    category: 'buffalo_vs_cow',
    q: 'Why choose Buffalo Bilona Ghee over ordinary cow ghee?',
    a: 'Murrah buffalo milk is celebrated in Ayurvedic texts (Charaka Samhita) for its rich Snigdha (nourishing) and Guru (strengthening) qualities. It provides higher natural calcium, protein density, and healthy fats that are supreme for joint lubrication, deep sleep, muscle recovery, and robust bone strength. Its high smoke point (250°C) also makes it far more thermally stable for high-heat Indian cooking without burning.'
  },
  {
    category: 'bilona_process',
    q: 'How many litres of milk are required to make 1 kg of 24 KARAT Bilona Ghee?',
    a: 'It takes approximately 30 to 35 litres of pure, unadulterated whole Murrah buffalo A2 milk to make just 1 kilogram (1000ml) of 24 KARAT Bilona Ghee. Because we churn curd rather than extracting industrial cream, the yield is naturally lower, but the nutritional concentration and aroma are tenfold richer.'
  },
  {
    category: 'health_ayurveda',
    q: 'Is 24 KARAT Buffalo Bilona Ghee suitable for lactose intolerant individuals?',
    a: 'Yes! The slow wood-fire clarification process completely precipitates and removes all milk solids, lactose sugars, and casein proteins, leaving only pure, crystalline clarified butterfat. It is easily digested even by individuals who cannot drink regular milk.'
  },
  {
    category: 'storage_shipping',
    q: 'How should I store 24 KARAT Ghee and what is its shelf life?',
    a: 'Pure bilona ghee does not require refrigeration. Store your glass jar in a cool, dry pantry away from direct sunlight and moisture. Always use a clean, dry spoon. Because 24 KARAT is properly clarified with zero residual moisture (<0.15%), it naturally stays fresh, golden, and aromatic for 12 months or longer.'
  },
  {
    category: 'bilona_process',
    q: 'Is 24 KARAT certified and lab-tested for purity?',
    a: 'Every single batch of 24 KARAT Buffalo Bilona Ghee is tested at NABL-accredited laboratories for Reichert-Meissl (RM) value (consistently above 31.5), moisture levels, and total absence of palm oil, mineral oils, animal fats, or synthetic preservatives. A QR code on each jar lid lets you view the batch purity certificate.'
  },
  {
    category: 'health_ayurveda',
    q: 'How should I take 24 KARAT Bilona Ghee on an empty stomach in the morning?',
    a: 'Take 1 level tablespoon of warm 24 KARAT Bilona Ghee first thing in the morning with a cup of warm water or herbal infusion. Wait 30 minutes before having breakfast. This Ayurvedic ritual (Snehana) lines the stomach mucosa, lubricates colon villi, stimulates bile acid secretion, and neutralizes morning hyperacidity.'
  },
  {
    category: 'buffalo_vs_cow',
    q: 'Will consuming Buffalo Bilona Ghee increase bad cholesterol (LDL)?',
    a: 'No. Clinical and biochemical research proves that pure curd-churned bilona ghee is rich in short- and medium-chain fatty acids (MCFAs) and Conjugated Linoleic Acid (CLA). These metabolize directly in the liver for clean cellular energy rather than circulating as arterial plaque. Unlike trans fats and heated vegetable oils, pure bilona ghee supports healthy HDL cholesterol.'
  },
  {
    category: 'cooking_culinary',
    q: 'What is the smoke point of 24 KARAT Buffalo Bilona Ghee?',
    a: '24 KARAT Buffalo Bilona Ghee has an extraordinarily high smoke point of 250°C (482°F)—one of the highest among all cooking mediums in the world. It does not break down into toxic free radicals or acrolein during deep frying, sautéing, baking, or searing.'
  },
  {
    category: 'storage_shipping',
    q: 'Why does the texture look solid in winter and semi-liquid in summer?',
    a: 'Pure unadulterated ghee changes state naturally with ambient temperature because it contains zero hydrogenated stabilizers or artificial thickeners. In winter, natural crystalline granules (Danedar) settle beautifully; in warm summer, it softens into liquid gold. Both states retain 100% of their nutrients.'
  },
  {
    category: 'health_ayurveda',
    q: 'Can pregnant and breastfeeding mothers consume this ghee?',
    a: 'In Ayurveda, Murrah buffalo bilona ghee is considered the ultimate Rasayana for Garbhini (pregnant women) and Sutika (postpartum recovery). It delivers essential bio-available calcium for fetal bone development, natural lubricity for smooth labor, and enriches mother\'s breast milk quality.'
  },
  {
    category: 'storage_shipping',
    q: 'How is the heavy glass jar protected during transit?',
    a: 'We pack every jar in shock-absorbent multi-layer biodegradable air-cushion jackets inside rigid wooden-grain presentation boxes. We offer a 100% Free Instant Replacement guarantee in the rare event of transit breakage.'
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    productId: 'buffalo-bilona-ghee',
    author: 'Rajeshwari Sharma',
    userLocation: 'Jaipur, Rajasthan',
    rating: 5,
    title: 'Divine Danedar Grain & Authentic Village Chulha Aroma',
    comment: 'The fragrance filled our entire kitchen the moment I broke the seal! It immediately took me back to my grandmother’s home in rural Haryana. The grainy danedar texture over steaming hot rotis and khichdi is incomparable. 100% authentic bilona.',
    date: 'Sep 12, 2026',
    verified: true
  },
  {
    id: 'rev-2',
    productId: 'buffalo-bilona-ghee',
    author: 'Vikramaditya Singh',
    userLocation: 'New Delhi',
    rating: 5,
    title: 'Cured my chronic morning hyperacidity in 3 weeks',
    comment: 'I started taking 1 tablespoon of 24 Karat ghee with warm water on an empty stomach every morning as advised by their Vaidya. My chronic heartburn and acid reflux have vanished, and my digestion feels light and clean. Truly liquid gold!',
    date: 'Sep 08, 2026',
    verified: true
  },
  {
    id: 'rev-3',
    productId: 'buffalo-bilona-ghee',
    author: 'Sunita Mehta',
    userLocation: 'Mumbai, Maharashtra',
    rating: 5,
    title: 'Verified Lab Report — 32.1 RM Value!',
    comment: 'I scanned the batch QR code on the jar lid and verified the independent NABL test. With an RM value of 32.1 and zero vegetable fats, this is the purest buffalo ghee on the Indian market. My children love it on their dal chawal.',
    date: 'Aug 29, 2026',
    verified: true
  },
  {
    id: 'rev-4',
    productId: 'swarna-bhasma-gold-ghee',
    author: 'Dr. Amitav Banerjee',
    userLocation: 'Kolkata, West Bengal',
    rating: 5,
    title: 'Supreme Rasayana for Joint Mobility & Vitality',
    comment: 'Ordered the 24 Karat Swarna Bhasma Reserve for my elderly parents. My father had morning knee joint stiffness and cracking sounds. Within one month of consuming half a spoon daily with warm saffron milk, his mobility has improved substantially.',
    date: 'Sep 15, 2026',
    verified: true
  },
  {
    id: 'rev-5',
    productId: 'medhya-herbal-ghee',
    author: 'Kavita Patel',
    userLocation: 'Ahmedabad, Gujarat',
    rating: 5,
    title: 'Best natural memory & sleep tonic',
    comment: 'My daughter was preparing for university entrance exams and suffered from late-night restlessness and brain fog. Half a teaspoon of Medhya Ghrita at night has provided restful deep sleep and sharp recall during study sessions.',
    date: 'Sep 03, 2026',
    verified: true
  },
  {
    id: 'rev-6',
    productId: 'claypot-cultured-bilona-ghee',
    author: 'Sardar Gurpreet Singh',
    userLocation: 'Chandigarh, Punjab',
    rating: 5,
    title: 'Mitti ki Sondhi Khushbu — Real Heritage Taste',
    comment: 'You can immediately tell this was made in earthen clay pots over slow cow-dung firewood. The taste is remarkably distinct from commercial metal cooker ghee. Rich, sweet, and soothing to the stomach.',
    date: 'Aug 25, 2026',
    verified: true
  }
];

