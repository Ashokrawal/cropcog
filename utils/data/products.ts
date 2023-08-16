export const category = [
  "Mushrooms",
  "Vegetables",
  "Millets",
  "Pulses",
  "Cereals",
  "Flowers",
  "Fruits",
  "Fish",
  "Honey",
  "Leafy-Veggies",
];

export const AllProducts = [
  {
    id: "milky_mushrooms",
    title: "Milky Mushrooms",

    width: 200,
    height: 200,

    price: 40,
    quantity: 100,

    cartHeight: 120,
    cartWidth: 120,

    discount: "20%",
    category: "Mushrooms",
    currentPrice: 30,

    trendingDeals: false,
    bestSellerDeals: true,
    RecommendedProducts: true,

    image: "/bestSellers/milky-mushrooms-T.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper.",
  },
  {
    id: "oyster-mushrooms",
    title: "Oyster Mushrooms",
    price: 40,
    quantity: 100,
    height: 180,
    width: 180,
    trendingDeals: true,
    bestSellerDeals: false,
    image: "/Items/osyter.png",
    currentPrice: 30,
    category: "Mushrooms",
    cartHeight: 120,
    cartWidth: 120,
    RecommendedProducts: false,
    discount: "25%",
    description: "Vitamin B, Phosphorus, Selenium, Copper.",
  },
  {
    id: "natural-honey",
    title: "Natural Honey",
    price: 40,
    cartHeight: 100,
    trendingDeals: false,
    cartWidth: 100,
    category: "Honey",
    quantity: 100,
    height: 170,
    bestSellerDeals: true,
    width: 170,
    RecommendedProducts: true,
    discount: "10%",
    currentPrice: 30,
    image: "/bestSellers/honey-best-seller-t.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "spinach",
    title: "Spinach (Palak)",
    price: 40,
    height: 200,
    cartHeight: 120,
    trendingDeals: false,
    cartWidth: 120,
    width: 200,
    quantity: 100,
    category: "Leafy-Veggies",
    currentPrice: 30,
    bestSellerDeals: true,

    RecommendedProducts: true,
    discount: "30%",
    image: "/Items/spinach-t.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "tomato",
    title: "Tomato",
    price: 40,
    discount: "15%",
    cartHeight: 120,
    cartWidth: 120,
    quantity: 100,
    height: 160,
    bestSellerDeals: false,
    trendingDeals: false,
    RecommendedProducts: false,
    width: 160,
    category: "Vegetables",
    currentPrice: 30,
    description: "Vitamin B, Phosphorus, Selenium, Copper",
    image: "/Items/tomato-isolated.jpg",
  },
  {
    id: "kashmeri-chilli",
    title: "Kashmeri Chilli",
    price: 40,
    quantity: 100,
    discount: "30%",
    height: 200,
    bestSellerDeals: false,
    cartHeight: 120,
    cartWidth: 120,
    trendingDeals: false,
    width: 200,
    category: "Vegetables",
    RecommendedProducts: false,
    currentPrice: 30,
    image: "/Items/chilli.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "green-peas",
    title: "Green Peas",
    price: 40,
    quantity: 100,
    discount: "20%",
    height: 170,
    trendingDeals: false,
    bestSellerDeals: false,
    RecommendedProducts: false,
    cartHeight: 100,
    cartWidth: 100,
    width: 170,
    category: "Vegetables",
    currentPrice: 30,
    image: "/Items/natural-peas.jpg",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "potato",
    title: "Potato",
    price: 40,
    discount: "10%",
    height: 200,
    quantity: 100,
    width: 200,
    bestSellerDeals: false,
    cartHeight: 120,
    RecommendedProducts: false,
    trendingDeals: false,
    cartWidth: 120,
    category: "Vegetables",
    currentPrice: 30,
    image: "/Items/potato-t.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "onion",
    title: "Onion",
    price: 40,
    height: 200,
    quantity: 100,
    width: 200,
    discount: "20%",
    bestSellerDeals: false,
    RecommendedProducts: false,
    trendingDeals: true,
    cartHeight: 120,
    cartWidth: 120,
    category: "Vegetables",
    currentPrice: 30,
    image: "/Items/onion-T.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "button-mushrooms",
    title: "Button Mushrooms",
    price: 40,
    height: 200,
    width: 200,
    quantity: 100,
    discount: "20%",
    cartHeight: 120,
    bestSellerDeals: false,
    cartWidth: 120,
    RecommendedProducts: false,
    trendingDeals: false,
    category: "Mushrooms",
    currentPrice: 30,
    image: "/Items/mushrooms-T.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "orange",
    title: "Orange",
    price: 40,
    height: 200,
    width: 200,
    discount: "20%",
    cartHeight: 120,
    trendingDeals: true,
    bestSellerDeals: false,
    RecommendedProducts: true,
    cartWidth: 120,
    category: "Fruits",
    quantity: 100,
    currentPrice: 30,
    image: "/Items/oranges-T.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "capsicum",
    title: "Capsicum",
    price: 40,
    height: 200,
    width: 200,
    cartHeight: 120,
    cartWidth: 120,
    RecommendedProducts: false,
    discount: "30",
    trendingDeals: false,
    bestSellerDeals: false,
    quantity: 100,
    category: "Vegetables",
    currentPrice: 30,
    image: "/Items/capsicum-t.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "coriander",
    title: "Coriander",
    price: 40,
    height: 200,
    quantity: 100,
    width: 200,
    cartHeight: 120,
    trendingDeals: false,
    bestSellerDeals: true,
    RecommendedProducts: true,
    cartWidth: 120,
    discount: "10%",
    category: "Leafy-veggies",
    currentPrice: 30,
    image: "/Items/coriander-t.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "cauliflower",
    title: "Cauliflower",
    price: 40,
    discount: "10%",
    height: 160,
    width: 160,
    cartHeight: 120,
    bestSellerDeals: false,
    RecommendedProducts: false,
    trendingDeals: false,
    cartWidth: 120,
    quantity: 100,
    category: "Vegetables",
    currentPrice: 30,
    image: "/Items/cauliflower-t.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "broccoli",
    height: 170,
    width: 170,
    cartHeight: 120,
    bestSellerDeals: false,
    trendingDeals: true,
    RecommendedProducts: true,
    cartWidth: 120,
    quantity: 100,
    title: "Broccoli",
    price: 40,
    discount: "20%",
    category: "Vegetables",
    currentPrice: 30,
    image: "/Items/fresh-broccoli-t.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "lemon",
    title: "Lemon",
    cartHeight: 120,
    cartWidth: 120,
    trendingDeals: false,
    RecommendedProducts: false,
    bestSellerDeals: false,
    height: 200,
    quantity: 100,
    width: 200,
    price: 40,
    discount: "20",
    category: "Vegetables",
    currentPrice: 30,
    image: "/Items/mockup-graphics-Nvc_xOMiZoE-unsplash.jpg",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "radish",
    title: "Radish",
    height: 200,
    width: 200,
    cartHeight: 120,
    cartWidth: 120,
    price: 40,
    bestSellerDeals: false,
    trendingDeals: false,
    RecommendedProducts: false,
    discount: "20",
    quantity: 100,
    category: "Vegetables",
    currentPrice: 30,
    image: "/Items/reddish-T.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "sweet-potato",
    height: 200,
    width: 200,
    cartHeight: 120,
    cartWidth: 120,
    bestSellerDeals: false,
    trendingDeals: false,
    RecommendedProducts: false,
    title: "Sweet Potato",
    quantity: 100,
    price: 40,
    discount: "20%",
    category: "Vegetables",
    currentPrice: 30,
    image: "/Items/sweet-potato.jpg",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
  {
    id: "lettuce",
    title: "Lettuce",
    height: 200,
    cartHeight: 120,
    cartWidth: 120,
    quantity: 100,
    width: 200,
    bestSellerDeals: true,
    RecommendedProducts: true,
    trendingDeals: false,
    price: 40,
    discount: "20",
    category: "Vegetables",
    currentPrice: 30,
    image: "/Items/lettuce-t.png",
    description: "Vitamin B, Phosphorus, Selenium, Copper",
  },
];