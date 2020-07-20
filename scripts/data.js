"use strict";
var data = {
  buttonText: 'ЗАМОВИТИ',
  header: {
    menu: [
      {
        id: "mainPage",
        name: "Головна"
      },
      {
        id: "aboutUs",
        name: "Про нас"
      },
      {
        id: "BusinessTypes",
        name: "Типи бізнесу"
      },
      {
        id: "Users",
        name: "Користувачі"
      },
      {
        id: "Prices",
        name: "Ціни"
      },
      {
        id: "Customers",
        name: "Клієнти"
      },
    ],
    language: ['UA', 'RU', 'EN'],
  },
  main: {
    h1: "Чатбот для закладу",
    text: "Зручніше, легше та дешевше за звичайний додаток.",
    cloud1: "Замовляй зараз",
    cloud2: "Реально зручно",
    cloud3: "Безкоштовно"
  },
  aboutUs: {
    topText: "Чатбот – це простіша версія додатка, яка працює прямо в Telegram, Viber чи у Facebook Messenger.",
    middleHeading: "Його не треба завантажувати,",
    middleText: "працює у звичних для клієнта месенджерах",
    bottomHeadingBold: "Чатбот зручніше,",
    bottomHeadingRegular: "легше та дешевше за звичайний додаток.",
    bottomText: "Залиште свій номер телефону і ми протягом години безкоштовно розробимо чатбота для вашого бізнесу."
  },
  businessTypes: {
    heading: "Типи бізнесу",
    items: [
      {
        title: "Салони краси",
        image: "images/b-type-1.svg",
        class: "business-types__beauty-salon"
      },
      {
        title: "Кав’ярні та ресторани",
        image: "images/b-type-2.svg",
        class: "business-types__cafe"
      },
      {
        title: "Стоматологічні клініки",
        status: "скоро"
      },
      {
        title: "Квіткові магазини",
        status: "скоро"
      },
      {
        title: "Автомийки",
        status: "скоро"
      },
      {
        title: "Парковки",
        status: "скоро"
      }
    ]
  },
  users: {
    title: "Демо бот",
    text1: "Перевірте самі, як працюе чатбот і переконойтесь що це дійсно зручно.",
    text2: "Натисніть щоб спробувати",
    subtitle: "True Barbershop",
    sliderText: "Бот допоможе клієнту зробити замовлення онлайн і там же сплатити його, якщо у вас кав’ярня або квітковий магазин"
  },
  prices: {
    title: "Переваги чатбота між додатком",
    chatbot: {
      name: "Чатбот",
      price: "Безкоштовно",
      maintance: "Підтримка",
      maintancePrice: "безкоштовно/6міс потім 10$/міс",
    },
    app: {
      name: "Додаток",
      price: "3000$",
      maintance: "Підтримка",
      maintancePrice: "100$/міс",
      maintanceText: "Блок с логотипа компаний которые уже имеют бот на платформе. И количество пользователей бота",
    },
  },
  customers: {
    title: "Наші клієнти",
    text: "Блок с логотипа компаний которые уже имеют бот на платформе. И количество пользователей бота",
    customersAmount: "+128",
    customersAmountDescription: "кількість користувачів бота",
  },
  footer: {
    text: "© 2020. Корпорація BOTcommerce, Україна. Все права защищены."
  },
  lightbox: {
    title: "Спробуйте, перші 6 місяців безкоштовно",
    form: [
      {
        id: "name",
        label: "Ім’я",
        placeholder: "Ваше ім’я"
      },
      {
        id: "phone",
        label: "Телефон",
        placeholder: "+380"
      }
    ],
    buttonText: "Зателефонуйте мені",
    feedback: {
      textLg: "Дякуємо!",
      textMd: "Наш менеджер зв’яжеться з Вами протягом години"
    }
  }
};