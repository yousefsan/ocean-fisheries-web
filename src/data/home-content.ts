/** Static copy & config for the home page — edit here for content changes */

export type RevealDelay = "reveal-delay-1" | "reveal-delay-2" | "reveal-delay-3" | "reveal-delay-4" | "";

export type AboutPillar = {
  iconSrc: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
};

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    iconSrc: "/about-icons/vision.png",
    titleAr: "رؤيتنا",
    titleEn: "Our Vision",
    bodyAr: "أن نكون المرجع الأول في صناعة الأسماك بالمملكة العربية السعودية.",
    bodyEn: "To be the premier reference in the seafood industry across Saudi Arabia.",
  },
  {
    iconSrc: "/about-icons/mission.png",
    titleAr: "مهمتنا",
    titleEn: "Our Mission",
    bodyAr: "تقديم منتجات بحرية طازجة وعالية الجودة بأسعار منافسة تلبي احتياجات السوق المحلي.",
    bodyEn: "Delivering fresh, high-quality seafood at competitive prices that meet local market needs.",
  },
  {
    iconSrc: "/about-icons/values.png",
    titleAr: "قيمنا",
    titleEn: "Our Values",
    bodyAr: "الجودة، الأمانة، الاستدامة، وخدمة العميل في صميم كل ما نفعل.",
    bodyEn: "Quality, integrity, sustainability, and customer service at the heart of everything we do.",
  },
];

export type ServiceCard = {
  num: string;
  iconMask: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
  tagAr: string;
  tagEn: string;
  revealClass: string;
};

export const SERVICE_CARDS: ServiceCard[] = [
  {
    num: "01",
    iconMask: "url(/twemoji/1f3ed.svg)",
    titleAr: "تصنيع ومعالجة الجمبري والأسماك",
    titleEn: "Shrimp & Fish Manufacturing & Processing",
    bodyAr:
      "نمتلك خط إنتاج متكامل يضمن معالجة الجمبري والأسماك وفق أعلى معايير النظافة والجودة الغذائية المعتمدة محلياً ودولياً.",
    bodyEn:
      "Our fully integrated production line ensures shrimp and fish processing meets the highest hygiene and food quality standards, certified locally and internationally.",
    tagAr: "إنتاج متكامل",
    tagEn: "Integrated Production",
    revealClass: "reveal reveal-delay-1",
  },
  {
    num: "02",
    iconMask: "url(/service-icons/cold-freeze.png)",
    titleAr: "التخزين المبرد والتجميد",
    titleEn: "Cold Storage & Freezing",
    bodyAr:
      "مرافق تبريد وتجميد متطورة تحافظ على نضارة المنتجات البحرية وطازجيتها من لحظة الصيد حتى وصولها لعملائنا.",
    bodyEn:
      "Advanced cold storage and freezing facilities preserve the freshness of seafood products from catch to customer delivery.",
    tagAr: "سلسلة تبريد متكاملة",
    tagEn: "Full Cold Chain",
    revealClass: "reveal reveal-delay-2",
  },
  {
    num: "03",
    iconMask: "url(/twemoji/1f69a.svg)",
    titleAr: "التغليف والتوزيع",
    titleEn: "Packaging & Distribution",
    bodyAr:
      "خدمات تغليف احترافية مصممة للحفاظ على جودة المنتج، مع شبكة توزيع تغطي جميع مناطق المملكة العربية السعودية.",
    bodyEn:
      "Professional packaging services designed to preserve product quality, backed by a distribution network covering all regions of Saudi Arabia.",
    tagAr: "توزيع وطني",
    tagEn: "National Distribution",
    revealClass: "reveal reveal-delay-3",
  },
  {
    num: "04",
    iconMask: "url(/service-icons/quality-safety.png)",
    titleAr: "مراقبة الجودة والسلامة",
    titleEn: "Quality Control & Safety",
    bodyAr:
      "فريق متخصص لضبط الجودة يُجري اختبارات دقيقة على كل دفعة إنتاج لضمان سلامة المستهلك والامتثال للمعايير الدولية.",
    bodyEn:
      "A dedicated quality control team conducts precise tests on every production batch to ensure consumer safety and international standards compliance.",
    tagAr: "معايير دولية",
    tagEn: "International Standards",
    revealClass: "reveal reveal-delay-1",
  },
  {
    num: "05",
    iconMask: "url(/service-icons/import-export.png)",
    titleAr: "الاستيراد والتصدير",
    titleEn: "Import & Export",
    bodyAr:
      "نمتلك خبرة واسعة في استيراد الأسماك والمأكولات البحرية من أفضل المصادر العالمية، مع القدرة على التصدير للأسواق الإقليمية.",
    bodyEn:
      "Extensive experience importing fish and seafood from the world's best sources, with regional export capabilities.",
    tagAr: "تجارة دولية",
    tagEn: "Global Trade",
    revealClass: "reveal reveal-delay-2",
  },
  {
    num: "06",
    iconMask: "url(/twemoji/1f4bc.svg)",
    titleAr: "خدمات B2B المتخصصة",
    titleEn: "Specialized B2B Services",
    bodyAr:
      "حلول مخصصة للمطاعم والفنادق وشركات الأغذية والتجزئة — بما يشمل التوريد المنتظم والتغليف الخاص بالعلامة التجارية.",
    bodyEn:
      "Custom solutions for restaurants, hotels, food companies, and retailers — including regular supply and private label packaging.",
    tagAr: "حلول مخصصة",
    tagEn: "Custom Solutions",
    revealClass: "reveal reveal-delay-3",
  },
];

export type WhyCard = {
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
  delay: RevealDelay;
};

export const WHY_CARDS: WhyCard[] = [
  {
    titleAr: "جودة لا تُضاهى",
    titleEn: "Unmatched Quality",
    bodyAr: "كل منتج يمر بمراحل فحص دقيقة لضمان أعلى مستويات الجودة والطازجية.",
    bodyEn: "Every product undergoes rigorous inspection stages to guarantee the highest levels of quality and freshness.",
    delay: "reveal-delay-1",
  },
  {
    titleAr: "سرعة التوريد",
    titleEn: "Rapid Supply Chain",
    bodyAr: "شبكة لوجستية متطورة تضمن وصول المنتجات في الوقت المحدد وبأفضل حالة ممكنة.",
    bodyEn: "An advanced logistics network ensures products arrive on time and in peak condition.",
    delay: "reveal-delay-2",
  },
  {
    titleAr: "الاستدامة البيئية",
    titleEn: "Environmental Sustainability",
    bodyAr:
      "ملتزمون بالحفاظ على النظم البيئية البحرية من خلال التعامل مع صيادين محليين وشركات الاستزراع المحلية.",
    bodyEn:
      "We are committed to protecting marine ecosystems by working with local fishers and local aquaculture companies.",
    delay: "reveal-delay-3",
  },
  {
    titleAr: "شهادات معتمدة",
    titleEn: "Certified Standards",
    bodyAr: "حاصلون على شهادات الجودة الدولية وموافقة هيئة الغذاء والدواء السعودية.",
    bodyEn: "Certified with international quality standards and approved by the Saudi Food and Drug Authority.",
    delay: "reveal-delay-4",
  },
  {
    titleAr: "أسعار تنافسية",
    titleEn: "Competitive Pricing",
    bodyAr: "نقدم أفضل قيمة مقابل السعر دون المساومة على الجودة.",
    bodyEn: "We deliver the best value for money without compromising on quality.",
    delay: "reveal-delay-1",
  },
  {
    titleAr: "خدمة عملاء متميزة",
    titleEn: "Outstanding Customer Service",
    bodyAr: "فريق دعم متخصص متاح لمساعدتك في كل ما تحتاجه قبل وبعد الشراء.",
    bodyEn: "A dedicated support team available to assist you with everything you need, before and after purchase.",
    delay: "reveal-delay-2",
  },
];

export type ProcessStep = {
  n: number;
  icon: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
  delay: RevealDelay;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    n: 1,
    icon: "/process-icons/step-2.png",
    titleAr: "الاستقبال والفرز",
    titleEn: "Reception & Sorting",
    bodyAr:
      "يتم استقبال الأسماك الطازجة مباشرة من قوارب الصيد أو الموردين المعتمدين، ثم فرزها وتصنيفها حسب النوع والحجم والجودة.",
    bodyEn:
      "Fresh fish are received directly from fishing boats or certified suppliers, then sorted and classified by type, size, and quality.",
    delay: "",
  },
  {
    n: 2,
    icon: "/process-icons/step-1.png",
    titleAr: "فحص الجودة والمعالجة",
    titleEn: "Quality Inspection & Processing",
    bodyAr:
      "تخضع جميع المنتجات لاختبارات جودة صارمة قبل عمليات التنظيف والتشريح والتعبئة الأولية في بيئة معقمة.",
    bodyEn:
      "All products undergo strict quality tests before cleaning, filleting, and initial packaging in a sterile environment.",
    delay: "reveal-delay-1",
  },
  {
    n: 3,
    icon: "/process-icons/step-4.png",
    titleAr: "التجميد والتخزين",
    titleEn: "Freezing & Storage",
    bodyAr:
      "يتم التجميد السريع للمنتجات بتقنية IQF للحفاظ على القيمة الغذائية والطازجية، ثم تخزينها في غرف تبريد بدرجات حرارة مناسبة.",
    bodyEn:
      "Products are flash-frozen using IQF technology to preserve nutritional value and freshness, then stored in cold rooms at suitable temperatures.",
    delay: "reveal-delay-2",
  },
  {
    n: 4,
    icon: "/process-icons/step-3.png",
    titleAr: "التغليف والتسليم",
    titleEn: "Packaging & Delivery",
    bodyAr:
      "تُعبّأ المنتجات بتغليف احترافي يحمل كل بيانات المنتج، ثم تُوزَّع عبر شبكتنا اللوجستية المبردة لضمان وصولها بأفضل حالة.",
    bodyEn:
      "Products are packaged with professional labeling carrying all product data, then distributed via our refrigerated logistics network to ensure optimal delivery.",
    delay: "reveal-delay-3",
  },
];

export type ClientSector = {
  iconSrc: string;
  titleAr: string;
  titleEn: string;
  delay: RevealDelay;
};

export const CLIENT_SECTORS: ClientSector[] = [
  { iconSrc: "/client-icons/restaurants.png", titleAr: "المطاعم والمطابخ", titleEn: "Restaurants & Kitchens", delay: "reveal-delay-1" },
  { iconSrc: "/client-icons/hotels.png", titleAr: "الفنادق والمنتجعات", titleEn: "Hotels & Resorts", delay: "reveal-delay-2" },
  { iconSrc: "/client-icons/retail.png", titleAr: "سلاسل التجزئة", titleEn: "Retail Chains", delay: "reveal-delay-3" },
  { iconSrc: "/client-icons/manufacturers.png", titleAr: "شركات التصنيع الغذائي", titleEn: "Food Manufacturers", delay: "reveal-delay-4" },
  { iconSrc: "/client-icons/aviation-port.png", titleAr: "خدمات الطيران والموانئ", titleEn: "Aviation & Port Services", delay: "reveal-delay-1" },
  { iconSrc: "/client-icons/hospitals.png", titleAr: "المستشفيات والمجمعات الصحية", titleEn: "Hospitals & Health Complexes", delay: "reveal-delay-2" },
  {
    iconSrc: "/client-icons/education.png",
    titleAr: "مراكز التعليم والمطاعم المؤسسية",
    titleEn: "Education & Institutional Catering",
    delay: "reveal-delay-3",
  },
  {
    iconSrc: "/client-icons/catering.png",
    titleAr: "شركات التموين والإعاشة",
    titleEn: "Catering & Food Service Companies",
    delay: "reveal-delay-4",
  },
  { iconSrc: "/client-icons/exporters.png", titleAr: "المصدّرون الإقليميون", titleEn: "Regional Exporters", delay: "reveal-delay-1" },
];
