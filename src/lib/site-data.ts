export type Locale = "en" | "zh";

export const locales: Locale[] = ["en", "zh"];

export const dictionary = {
  en: {
    nav: {
      products: "Products",
      solutions: "Solutions",
      quality: "Quality",
      news: "News",
      about: "About",
      contact: "Contact",
      admin: "Admin"
    },
    cta: {
      inquiry: "Request quote",
      catalog: "Download catalog",
      viewProducts: "View products"
    },
    home: {
      title: "MTYSUN Auto Parts",
      subtitle:
        "Modern replacement parts, stable supply, and export-ready service for global distributors.",
      proof: "10+ years online, now rebuilt for a faster global buying journey."
    }
  },
  zh: {
    nav: {
      products: "产品中心",
      solutions: "解决方案",
      quality: "质量体系",
      news: "新闻资讯",
      about: "关于我们",
      contact: "联系我们",
      admin: "后台"
    },
    cta: {
      inquiry: "获取报价",
      catalog: "下载目录",
      viewProducts: "查看产品"
    },
    home: {
      title: "MTYSUN 汽车零部件",
      subtitle: "面向全球经销商的现代化汽配供应、稳定交付与外贸服务。",
      proof: "官网运营超过 10 年，现在升级为更快、更清晰的全球采购入口。"
    }
  }
};

export const categories = [
  "Brake System",
  "Suspension",
  "Engine Parts",
  "Electrical",
  "Cooling System",
  "Filters"
];

export const products = [
  {
    id: "brake-pad-mt-8801",
    name: "Ceramic Brake Pad Set MT-8801",
    category: "Brake System",
    brand: "MTYSUN",
    vehicle: "Toyota / Honda / Nissan",
    oem: "04465-0K290",
    status: "Published",
    featured: true,
    description:
      "Low-noise ceramic brake pad set for daily replacement programs and distributor stock planning."
  },
  {
    id: "control-arm-mt-4210",
    name: "Front Lower Control Arm MT-4210",
    category: "Suspension",
    brand: "MTYSUN",
    vehicle: "Ford / Chevrolet",
    oem: "CK620065",
    status: "Published",
    featured: true,
    description:
      "Heavy-duty stamped control arm with bushings installed, designed for export aftermarket channels."
  },
  {
    id: "oxygen-sensor-mt-1128",
    name: "Oxygen Sensor MT-1128",
    category: "Electrical",
    brand: "MTYSUN",
    vehicle: "Hyundai / Kia",
    oem: "39210-2B000",
    status: "Draft",
    featured: false,
    description:
      "Direct-fit sensor for emission repair demand with barcode-ready packaging options."
  },
  {
    id: "water-pump-mt-3022",
    name: "Water Pump Assembly MT-3022",
    category: "Cooling System",
    brand: "MTYSUN",
    vehicle: "Volkswagen / Audi",
    oem: "06H121026",
    status: "Published",
    featured: true,
    description:
      "Aluminum water pump assembly with tested seal performance and stable batch availability."
  }
];

export const news = [
  {
    id: "site-upgrade-roadmap",
    title: "MTYSUN starts a new global website upgrade plan",
    date: "2026-05-22",
    tag: "Company",
    excerpt:
      "The new platform will improve product search, multilingual content, SEO, and distributor inquiries."
  },
  {
    id: "brake-program-guide",
    title: "How distributors can build a faster brake parts program",
    date: "2026-04-16",
    tag: "Insight",
    excerpt:
      "A practical guide to product grouping, MOQ planning, packaging, and fast-moving SKU selection."
  },
  {
    id: "quality-control-export",
    title: "Quality control points for export aftermarket parts",
    date: "2026-03-28",
    tag: "Quality",
    excerpt:
      "From incoming inspection to carton labeling, consistent documentation reduces buyer friction."
  }
];

export const capabilities = [
  "Product sourcing and fast SKU matching",
  "Private label packaging and barcode support",
  "OE number cross-reference",
  "Export documentation and shipment coordination",
  "Sample approval and pre-shipment inspection",
  "Multilingual distributor support"
];

export const seoPages = [
  {
    path: "/en",
    title: "MTYSUN Auto Parts | Global Aftermarket Parts Supplier",
    description:
      "Modern aftermarket auto parts supplier with brake, suspension, engine, electrical and cooling system products for global distributors."
  },
  {
    path: "/en/products",
    title: "Auto Parts Catalog | MTYSUN",
    description:
      "Search MTYSUN product categories, OEM numbers, vehicle applications and export-ready aftermarket parts."
  },
  {
    path: "/en/news",
    title: "Auto Parts News and Distributor Insights | MTYSUN",
    description:
      "Company updates, product programs, quality notes and practical aftermarket distribution insights."
  }
];

export const contentPlan = [
  {
    phase: "Weeks 1-2",
    title: "Content audit and shooting list",
    actions: [
      "Audit all legacy pages and classify content as keep, rewrite, merge, or remove.",
      "Create a product photo list: white-background product shots, packaging, factory, inspection and team scenes.",
      "Define product naming rules, OEM number format, category hierarchy and multilingual glossary."
    ]
  },
  {
    phase: "Weeks 3-6",
    title: "Core page rebuild",
    actions: [
      "Rewrite homepage, about, product category, quality, downloads and contact pages.",
      "Publish 30-50 priority product pages with SEO titles, OEM references and inquiry calls to action.",
      "Create 8-12 news or insight articles around fast-moving product categories."
    ]
  },
  {
    phase: "Weeks 7-12",
    title: "SEO growth and conversion tuning",
    actions: [
      "Publish weekly product guides and category articles.",
      "Track search terms, inquiry source, product page conversion and missing catalog keywords.",
      "Add buyer FAQ, certificates, catalog downloads and market-specific landing pages."
    ]
  }
];
