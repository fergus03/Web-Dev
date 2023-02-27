export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  like: number;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 11',
    price: 296322,
    rating: '4.8/5',
    link: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
    description: "Смартфон Apple iPhone 11 128Gb Slim Box черный",
    category: 1,
    like: 0
  },
  {
    id: 2,
    name: 'iPhone 11 Pro',
    price: 599500,
    rating: '4.9/5',
    link: "https://kaspi.kz/shop/p/apple-iphone-11-pro-64gb-seryi-1005129/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hbd/32284847439902/apple-iphone-11-pro-64gb-seryj-1005129-1-Container.jpg",
    description: "Смартфон Apple iPhone 11 Pro 64Gb серый",
    category: 1,
    like: 0
  },
  {
    id: 3,
    name: 'iPhone 12',
    price: 323670,
    rating: '5/5',
    link:"https://kaspi.kz/shop/p/apple-iphone-12-64gb-chernyi-100656839/?c=750000000#!/item",
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h97/33279114575902/apple-iphone-12-64gb-cernyj-100656839-1-Container.jpg',
    description: 'Смартфон Apple iPhone 12 64Gb черный',
    category: 1,
    like: 0
  },
  {
    id: 4,
    name: 'iPhone 12 Pro',
    price: 551000,
    rating: '4.8/5',
    link:'https://kaspi.kz/shop/p/apple-iphone-12-pro-128gb-sinii-100657202/?c=750000000#!/item',
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h78/33276489170974/apple-iphone-12-pro-128gb-sinij-100657202-1-Container.jpg',
    description: 'Смартфон Apple iPhone 12 Pro 128Gb синий',
    category: 1,
    like: 0
  },
  {
    id: 5,
    name: 'iPhone 12 Pro Max',
    price: 666666,
    rating: '4.9/5',
    link: "https://kaspi.kz/shop/p/apple-iphone-12-pro-max-128gb-sinii-100658112/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h8c/32680476966942/apple-iphone-12-pro-max-128gb-sinij-100658112-1-Container.jpg",
    description: "Смартфон Apple iPhone 12 Pro Max 128Gb синий",
    category: 1,
    like: 0
  },
  {
    id: 6,
    name: 'Тональная сыворотка Loreal',
    price: 6970,
    rating: '4.5/5',
    link:"https://kaspi.kz/shop/p/loreal-professionnel-paris-alliance-perfect-nude-tonal-naja-syvorotka-0-5-2-30-ml-105110293/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/he6/51197296410654/l-oreal-syvorotka-tonalnaa-alliance-perfect-0-5-2-105110293-1.jpg",
    description: 'Loreal Professionnel Paris Alliance Perfect Nude тональная сыворотка №0.5-2 30 мл',
    category: 2,
    like: 0
  },
  {
    id: 7,
    name: 'Блеск для губ',
    price: 25900,
    rating: '5/5',
    link: "https://kaspi.kz/shop/p/dior-addict-lip-maximizer-blesk-dlja-gub-rozovyi-010-106250822/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h74/62085382438942/dior-addict-lip-maximizer-blesk-dla-gub-rozovyj-010010-rozovyj-golograficeskij-106250822-1.jpg",
    description: "Dior Addict Lip Maximizer блеск для губ розовый 010",
    category: 2,
    like: 0
  },
  {
    id: 8,
    name: 'Румяна',
    price: 4490,
    rating: '5/5',
    link:"https://kaspi.kz/shop/p/shik-perfect-liquid-blush-rumjana-02-102258965/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4a/hdd/45412101586974/shik-perfect-liquid-blush-02-new-102258965-1-Container.jpg",
    description: "Shik Perfect Liquid Blush румяна 02",
    category: 2,
    like: 0
  },
  {
    id: 9,
    name: 'Консилер',
    price: 10000,
    rating: '5/5',
    link:"https://kaspi.kz/shop/p/tarte-konsiler-shape-tape-concealer-fair-beige-12b-103348921/?c=750000000#!/item",
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h14/48068314955806/tarte-shape-tape-concealer-fair-beige-103348921-1.jpg',
    description: 'Tarte консилер Shape Tape Concealer Fair Beige 12B',
    category: 2,
    like: 0
  },
  {
    id: 10,
    name: 'Спонж',
    price: 2500,
    rating: '4/5',
    link: "https://kaspi.kz/shop/p/shik-belyi-sponzh-1-sht-100206674/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/h03/66804573929502/shik-belyi-sponzh-1-sht-100206674-1.jpg",
    description: "Shik белый спонж 1 шт",
    category: 2,
    like: 0
  },
  {
    id: 11,
    name: 'Скраб для тела',
    price: 5300,
    rating: '5/5',
    link: "https://kaspi.kz/shop/p/the-act-detoks-antitselljulitnyi-skrab-dlja-tela-s-gimalaiskoi-sol-ju-300-ml-104104028/?c=750000000#!/item",
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4e/h8a/49353615704094/detoks-anticellulitnyj-skrab-dla-tela-s-gimalajskoj-solu-104104028-1.jpg",
    description: "The Act Детокс антицеллюлитный скраб для тела с гималайской солью 300 мл",
    category: 3,
    like: 0
  },
  {
    id: 11,
    name: 'Масло для тела',
    price: 7500,
    rating: '5/5',
    link: "https://kaspi.kz/shop/p/the-act-coconut-body-butter-maslo-dlja-tela-170-g-104403423/?c=750000000#!/item",
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/h09/49907897827358/krem-batter-dla-tela-kokos-104403423-1.jpg",
    description: "The Act coconut body butter масло для тела 170 г",
    category: 3,
    like: 0
  },
  {
    id: 11,
    name: 'Крем для тела',
    price: 16500,
    rating: '5/5',
    link: "https://kaspi.kz/shop/p/hempz-original-krem-dlja-tela-500-ml-101346239/?c=750000000#!/item",
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h94/63040642809886/hempz-body-cream-original-500-ml-101346239-1-Container.jpg",
    description: "Hempz Original крем для тела 500 мл",
    category: 3,
    like: 0
  },
  {
    id: 11,
    name: 'Мист для тела',
    price: 12998,
    rating: '5/5',
    link: "https://kaspi.kz/shop/p/victoria-s-secret-bare-vanilla-mist-dlja-tela-250-ml-104992551/?c=750000000#!/item",
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/hae/65226952179742/victoria-s-secret-bare-vanilla-parfyumirovannyi-sprei-dlya-tela-250-ml-104992551-1.jpg",
    description: "Victoria’s Secret Bare vanilla мист для тела 250 мл",
    category: 3,
    like: 0
  },
  {
    id: 11,
    name: 'Масло для волос',
    price: 11990,
    rating: '5/5',
    link: "https://kaspi.kz/shop/p/zere-pure-beauty-dlja-rosta-i-gustoty-volos-maslo-100-ml-100791124/?c=750000000#!/item",
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hcf/49877927067678/zere-pure-beauty-dla-rosta-i-gustoty-volos-100-ml-100791124-1-Container.jpg",
    description: "ZERE PURE BEAUTY Для роста и густоты волос масло 100 мл",
    category: 3,
    like: 0
  },
  {
    id: 11,
    name: 'Ноутбук Apple MacBook Pro',
    price: 697630,
    rating: '5/5',
    link: "https://kaspi.kz/shop/p/apple-macbook-pro-13-mneh3-seryi-105514238/?c=750000000#!/item",
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/h17/51918242742302/apple-macbook-pro-13-mneh3-seryi-105514238-4.jpg",
    description: "Ноутбук Apple MacBook Pro 13 MNEH3 серый",
    category: 4,
    like: 0
  },
  {
    id: 11,
    name: 'Apple Watch',
    price: 228700,
    rating: '5/5',
    link: "https://kaspi.kz/shop/p/apple-watch-series-8-41-mm-aluminum-zolotistyi-106585035/?c=750000000#!/item",
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/hfa/63158666461214/apple-watch-series-8-41-mm-aluminum-zolotistyj-106585035-1.jpg",
    description: "Смарт-часы Apple Watch Series 8 41 мм Aluminum золотистый",
    category: 4,
    like: 0
  },
  {
    id: 11,
    name: 'Apple AirPods Max',
    price: 361279,
    rating: '5/5',
    link: "https://kaspi.kz/shop/p/apple-airpods-max-sinii-101180956/?c=750000000#!/item",
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/h99/46659800530974/apple-airpods-max-sinij-101180956-1-Container.jpg",
    description: "Наушники Apple AirPods Max синий",
    category: 4,
    like: 0
  },
  {
    id: 11,
    name: 'Фотокамера',
    price: 779990,
    rating: '4/5',
    link: "https://kaspi.kz/shop/p/fujifilm-x100v-chernyi-serebristyi-101610518/?c=750000000#!/item",
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h13/34163167559710/fujifilm-x100v-cernyj-serebristyj-101610518-1.jpg",
    description: "Фотокамера Fujifilm X100V черный-серебристый",
    category: 4,
    like: 0
  },
  {
    id: 11,
    name: 'Яндекс станция',
    price: 44460,
    rating: '5/5',
    link: "https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-sinii-103877977/?c=750000000#!/item",
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h85/h07/49342277910558/yandeks-mini-2-yndx-00020-sinii-103877977-1.jpg",
    description: "Умная колонка Яндекс Станция Мини 2 с часами синий",
    category: 4,
    like: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
