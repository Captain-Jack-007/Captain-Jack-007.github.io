import champion from './images/champion.jpg';
import seagull from './images/seagull.jpg';
import e2 from './images/e2.jpg';
export const PageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'Asosiy',
  },
  {
    id: 2,
    href: '#about',
    text: 'Biz haqimizda',
  },
  {
    id: 3,
    href: '#services',
    text: "To'lov turlari",
  },
  {
    id: 4,
    href: '#tours',
    text: 'Elektromobillar',
  },
];
export const SocialLinks = [
  {
    id: 1,
    href: 'https://t.me/hlbmotors2023',
    icon: 'fab fa-telegram',
  },
  {
    id: 2,
    href: 'https://www.instagram.com/hlb_motors2023/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==',
    icon: 'fab fa-instagram',
  },
];
export const PaymentLink = [
  {
    id: 1,
    title: 'Naqd',
    description:
      'Siz istagan har qanday elektromobilni naqd pul asosida xarid qiling!',
    className: 'fas fa-wallet fa-fw',
  },
  {
    id: 2,
    title: "Pul o'tkazish",
    description:
      "O'zingizga ma'qul bo'lgan har qanday bank orqali pul o'tkazib, mashina xarid qiling!",
    className: 'fas fa-tree fa-fw',
  },
  {
    id: 3,
    title: 'Kredit',
    description: 'Elektromobillarni qulay kredit asosida xarid qiling!',
    className: 'fas fa-socks fa-fw',
  },
];
export const ProductLink = [
  {
    id: 1,
    img: seagull,
    price: '16 700 USD',
    title: 'BYD Seagull fly edition',
    description:
      "BYD ning elektr harakatlanish chegaralarini kengaytirishga sodiqligining ajoyib tasdig'i sifatida Seagull Fly Edition ilg'or texnologiyalar va zamonaviy dizaynning uyg'unligini o'zida mujassam etgan ajoyib shedevr avtomobil.",
    className: 'fas fa-wallet fa-fw',
    subTitle: 'Manzil:',
    address: 'Toshkent',
    status: 'Mavjud',
  },
  {
    id: 2,
    img: e2,
    price: '19 200 USD',
    title: 'BYD e2 luxury edition',
    description:
      "Bu shunchaki mashina emas, bu nafislikning ifodasi bo‘lib, ekologik ongli haydash va murosasiz nafislikka to‘g‘ri keladigan kelajakka qarash imkonini beradi. BYD e2 Luxury Edition bilan hashamat va barqarorlikning uzluksiz uyg'unligidan zavqlanishga tayyorlaning.",
    className: 'fas fa-wallet fa-fw',
    subTitle: 'Manzil:',
    address: 'Toshkent',
    status: 'Mavjud',
  },
  {
    id: 3,
    img: champion,
    price: '32 900 USD',
    title: 'BYD Song Champion 605km',
    description:
      "BYD kompaniyasining ushbu ajoyib elektr avtomobili bir zaryadda hayratlanarli 605 kilometr masofani bosib o'ta oladi. Song Plus Champion Edition - bu chidamlilik, chaqqonlik va ekologik ustunlik ramzi. Uning nafis dizaynidan tortib, ta'sirchan elektr diapazonigacha, har bir detal sayohatingizni yuqori darajaga ko'tarish uchun yaratilgan.",
    className: 'fas fa-wallet fa-fw',
    subTitle: 'Manzil:',
    address: 'Toshkent',
    status: 'Mavjud',
  },
];
