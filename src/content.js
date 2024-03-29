import {
  inventory,
  kitchen_system,
  wifi,
  dashboard,
  app,
  cloud,
  email,
  gift,
  qrCode,
  restaurants,
  cafes,
  cafes2,
  from_cars,
  food_trucks,
  for_your_work,
} from "./assets";

export const SECTIONS = [
  {
    id: 1,
    title: "متابعة المخزون بشكل دائم",
    description: `تمكنك أداة متابعة المخزون من مراقبة الأصناف بشكل دائم، فإنك تضمن استمرار توفر المواد الضرورية في مخزونك دون انقطاع. بالإضافة إلى ذلك، يساعدك تتبع كميات المطبخ قبل النفاذ على تجنب المواقف المحرجة أو الأزمات.`,
    img: inventory,
  },
  {
    id: 2,
    title: "نظام المطبخ",
    description: `من خلال نظام المطبخ المُقدم من سكيل تاكس، يمكنك تحديد كميات معينة من المواد للتموين يوميًا أو وفقًا لتفضيلاتك الخاصة، مما يسهل عليك ضبط عمليات التوريد بشكل دقيق وفقًا لاحتياجاتك الفعلية. بفضل شاشة معلومات المطبخ`,
    img: kitchen_system,
  },
];

export const FEATURES = [
  {
    id: 1,
    icon: cloud,
    h4: "نظام سحابي",
    p: "يعمل دون توقف او إنقطاع والوصول الية من اي مكان",
  },
  {
    id: 2,
    icon: app,
    h4: "تطبيق للكاشير",
    p: "يمكنك من إدارة عمليات البيع ويدعم الايباد والتابلت",
  },
  {
    id: 3,
    icon: wifi,
    h4: "يعمل دون إنقطاع",
    p: "يمكنك الاستمرار في العمل اثناء ضعف الانترنت أو إنقطاعها",
  },
  {
    id: 4,
    icon: dashboard,
    h4: "لوحة تحكم",
    p: "متوافقه مع جميع الأجهزه لتمكنك من متابعة عملك بشكل مستمر",
  },
];

export const ALL_OPTIONS = [
  {
    id: 1,
    title: "المنيو الالكتروني",
    text: "دون عناء أو اشتراكات اخرى وفرنا المنيو الالكتروني الدائم مع باقات سكيل تاكس",
    icon: qrCode,
  },
  {
    id: 2,
    title: "الرسائل النصية",
    text: "أرسال العروض والخصومات للعملاء من خلال لوحة تحكم سكيل تاكس",
    icon: email,
  },
  {
    id: 3,
    title: "نظام الولاء",
    text: "عزز التواصل مع عملائك من خلال تقديم نقاط المكافآت . تعمل نقاط المكافآت كمزايا جذابة تحفز العملاء على المشتريات  وتعزز رضاهم عن خدماتك ومنتجاتك.",
    icon: gift,
  },
];

export const SOlUTIONS = [
  { id: 1, title: "المطاعم", img: restaurants },
  { id: 2, title: "الكافيهات", img: cafes },
  { id: 3, title: "المقاهي", img: cafes2 },
  { id: 4, title: "الشراء من السيارة", img: from_cars },
  { id: 5, title: "عربات الطعام", img: food_trucks },
  { id: 6, title: "نسخة خاصة لنشاطك", img: for_your_work },
];
