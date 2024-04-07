"use strict"
// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
console.log("===============================================")
console.log("Задача 1")
console.log("===============================================")

// ----- Властивості ------
// назва компанії на час розробки (назву періодично змінюють)
// власник компанії
// споснсори (масив спонсорів)
//              * прізвище спонсора
//       * ім’я  спонсора
//       * сума вкладень спонсора
// рік випуску
// вартість сайту

const webSites = [
   {
      companyName: "Engeen",
      companyOwner: "Genrich",
      sponsors: {
         lastName: "Igo",
         firstName: "Eki",
         investments: 5000,
      },
      dateProduction: 2006,
      cost: 100,
   },
   {
      companyName: "Engeen",
      companyOwner: "Genrich",
      sponsors: {
         lastName: "Igo",
         firstName: "Eki",
         investments: 5000,
      },
      dateProduction: 2006,
      cost: 1000,
   },
   {
      companyName: "Engeen",
      companyOwner: "Genrich",
      sponsors: {
         lastName: "Igo",
         firstName: "Eki",
         investments: 5000,
      },
      dateProduction: 2006,
      cost: 130000,
   },
   {
      companyName: "Engeen",
      companyOwner: "Genrich",
      sponsors: {
         lastName: "Igo",
         firstName: "Eki",
         investments: 1000000,
      },
      dateProduction: 2006,
      cost: 9000000,
   },
   {
      companyName: "Engeen",
      companyOwner: "Genrich",
      sponsors: {
         lastName: "Lary",
         firstName: "Kan",
         investments: 5000,
      },
      dateProduction: 2010,
      cost: 1000,
   },
]

// Знайти:
// 1) загальну вартість усіх сайтів
console.log("1) загальну вартість усіх сайтів")
const allCost = webSites.reduce((prev, elem) => (prev += elem.cost), 0)
console.log(allCost)
console.log()
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// const specificValue = webSites.filter((elem) => elem.dateProduction > 2000 && elem.dateProduction < 2009)
// console.log(specificValue)
console.log("2) кількість сайтів, що було зроблено між 2000 та 2009 рр.")
const specificValue = webSites.reduce((prev, elem) => (elem.dateProduction > 2000 && elem.dateProduction < 2009 ? (prev += 1) : prev), 0)
console.log(specificValue)
console.log()
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// const investmentsMoreThan = webSites.filter((elem) => elem.sponsors > 2000 && elem.dateProduction < 2009)
// console.log(investmentsMoreThan)
console.log("3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000")
const investmentsMoreThan = webSites.reduce((prev, elem) => (elem.sponsors.investments > 100000 ? (prev += 1) : prev), 0)
console.log(investmentsMoreThan)
console.log()
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
console.log("4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)")
const sponsorsList = webSites.map((elem) => `${elem.sponsors.lastName} ${elem.sponsors.firstName}`)
console.log(sponsorsList)
console.log()
// 5) знайти рік, коли прибуток був найбільшим
console.log("5) знайти рік, коли прибуток був найбільшим")
const maxCost = webSites.reduce((max, elem) => (max > elem.cost ? max : (max = elem.cost)), 0)
console.log(maxCost)
console.log()
// 6) упорядкувати список за спаданням прибутку
console.log("6) упорядкувати список за спаданням прибутку")
const listOfCost = webSites.map((elem) => elem.cost)
listOfCost.sort((el1, el2) => el1 - el2)
console.log(listOfCost)
console.log()
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
console.log("7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000")

let costMoreThan1000 = []
let costLessThan1000 = []
webSites.forEach((elem) => {
   if (elem.cost > 10000) {
      costMoreThan1000.push({...elem})
   } else {
      costLessThan1000.push({...elem})
   }
})
console.log(costMoreThan1000)
console.log(costLessThan1000)

console.log()

// ===============================================
// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
// ===============================================
console.log("===============================================")
console.log("Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.")
console.log("===============================================")

function defineYear(currentDate, userMonth) {
   let currentMonth = currentDate.month
   let currentYear = currentDate.year
   let sumOfTheMonth = currentMonth + userMonth
   let partOfTheYear = Math.floor(sumOfTheMonth / 12)
   return currentYear + partOfTheYear
}

let date = {
   month: 4,
   year: 2024,
}
let NMonth = 19
let customMonth = defineYear(date, NMonth)
console.log(`Якщо ми додамо ${NMonth} місяців, то отримаємо рік ${customMonth}`)
console.log()
// ===============================================
// Задача 3. Ось приклад відповіді з одного з сайтів (масив об’єктів з інформацією про товари)
// ===============================================
console.log("===============================================")
console.log("Задача 3. Ось приклад відповіді з одного з сайтів (масив об’єктів з інформацією про товари)")
console.log("===============================================")
console.log()

let dataList = [
   {
      id: 344277463,
      old_price: 1395,
      old_usd_price: "37.70",
      price: 1099,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "29.70",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 363766641,
      old_price: 0,
      old_usd_price: "0.00",
      price: 90,
      min_month_price: 0,
      sell_status: "unavailable",
      status: "active",
      usd_price: "2.43",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 339273715,
      old_price: 38,
      old_usd_price: "1.03",
      price: 25,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "0.68",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 330746665,
      old_price: 3087,
      old_usd_price: "83.43",
      price: 2548,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "68.86",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 344972806,
      old_price: 699,
      old_usd_price: "18.89",
      price: 549,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "14.84",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 318302299,
      old_price: 0,
      old_usd_price: "0.00",
      price: 8500,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "229.73",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 361430565,
      old_price: 3500,
      old_usd_price: "94.59",
      price: 1999,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "54.03",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 14429030,
      old_price: 3339,
      old_usd_price: "90.24",
      price: 2999,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "81.05",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 56340912,
      old_price: 2094,
      old_usd_price: "56.59",
      price: 1776,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "48.00",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 315292225,
      old_price: 1799,
      old_usd_price: "48.62",
      price: 1499,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "40.51",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 28437961,
      old_price: 42999,
      old_usd_price: "1162.14",
      price: 33999,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "918.89",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 339896833,
      old_price: 6399,
      old_usd_price: "172.95",
      price: 5899,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "159.43",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 364354149,
      old_price: 1600,
      old_usd_price: "43.24",
      price: 1500,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "40.54",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: {
         id: 106,
         discount_price: 1300,
         title: "ціна по промокоду діє з 22.03 по 28.03",
         price_show_in_site_id: 5151,
         show_in_details: 1,
         show_in_catalog: 1,
         is_description: 1,
         description:
            '<body>\r<style>.popup-addprice-description h2 {display: none;}</style>\r<div class="cat-promo-i clearfix">\r<h4 class="cat-promo-title">Промокод на знижку</h4>\r<h2 style="font-size: 30px; color: #FB515D; display: inline-block; padding: 8px 16px; line-height: 35px; border: 2px dashed; border-radius: 5px;">CYCC-MRKT-STRS-2245</h2>\r<div>\r<span class="btn-link btn-link-green"><a href="https://rozetka.com.ua/ua/promo/allgalaxies/" class="btn-link-i" style="padding: 8px 16px; font-size: 17px; line-height: 20px;">Більше товарів зі знижками</a></span>\r</div>\r</div>\r<div class="cat-promo-g-i-wrapper clearfix">\r<div class="cat-promo-i clearfix">\r<div class="cat-promo-desc">\r<h4 class="cat-promo-title-small">Як активувати промокод:</h4>\r<p> 1. Скопіюйте промокод.</p>\r<p>2. Додайте товар у кошик і перейдіть до оформлення товару. У вікні оформлення під сумою замовлення ви побачите посилання «Ввести промокод».</p>\r<p>3. Введіть промокод у полі, що з’явиться, і натисніть кнопку «Застосувати».</p><span></span>\r</div>\r</div>\r<div class="cat-promo-i clearfix">\r<div class="cat-promo-desc">\r<h4 class="cat-promo-title-small">Під час застосування промокоду:</h4>\r<p>1. «Оплата частинами» та «Кредит 0%» без страхування не діють.</p>\r<p>2. Подарунки не входять у вартість і доступні лише при купівлі за ціною, що на сайті.</p><span></span>\r</div>\r</div>\r</div>\r\r</body>',
         promo_code: "",
         url_for_image: "https://rozetka.com.ua/ua/promo/allgalaxies/",
         images: "",
         images_mobile: "",
         hide_price: 0,
      },
   },
   {
      id: 363184995,
      old_price: 0,
      old_usd_price: "0.00",
      price: 4499,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "121.59",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 98077846,
      old_price: 0,
      old_usd_price: "0.00",
      price: 3113,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "84.14",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 310694668,
      old_price: 0,
      old_usd_price: "0.00",
      price: 3000,
      min_month_price: 0,
      sell_status: "unavailable",
      status: "active",
      usd_price: "81.08",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 362812029,
      old_price: 0,
      old_usd_price: "0.00",
      price: 21700,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "586.49",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 361422708,
      old_price: 4100,
      old_usd_price: "110.81",
      price: 2699,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "72.95",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 318302257,
      old_price: 0,
      old_usd_price: "0.00",
      price: 8500,
      min_month_price: 0,
      sell_status: "unavailable",
      status: "active",
      usd_price: "229.73",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 310694498,
      old_price: 0,
      old_usd_price: "0.00",
      price: 2963,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "80.08",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 363651273,
      old_price: 5199,
      old_usd_price: "140.51",
      price: 4890,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "132.16",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 330747022,
      old_price: 3087,
      old_usd_price: "83.43",
      price: 2606,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "70.43",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 362617635,
      old_price: 4872,
      old_usd_price: "131.68",
      price: 2436,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "65.84",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
   {
      id: 363614439,
      old_price: 5199,
      old_usd_price: "140.51",
      price: 4890,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "132.16",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
   },
]

// 1) Загальну вартість (нові ціни - price)
console.log("1) Загальну вартість (нові ціни - price)")
const summaryPrice = dataList.reduce((prev, elem) => (prev += elem.price), 0)
console.log(summaryPrice)
console.log()

// 2)Знайти кількість товарів, у яких ціна зменшилась (price < old_price).
console.log("2) Знайти кількість товарів, у яких ціна зменшилась (price < old_price).")
const countOfChangePrice = dataList.reduce((prev, elem, ind, base) => (elem.price < base[ind].old_price ? (prev += 1) : prev), 0)
console.log(countOfChangePrice)
console.log()
// 3) Товари, які доступні (sell_status:"available")
console.log('3) Товари, які доступні (sell_status:"available")')
let availableProducts = dataList.filter((elem) => elem.sell_status === "available")
console.log(availableProducts)
console.log()
// 4) сформувати новий список об”єктів тільки доступних
//  для продажу товарів, які міститимуть тільки ідентифікатор товару (id), нову ціну
//  (price), стару ціну (old_price), та ціну у доларах (usd_price)
console.log(
   "4) Сформувати новий список об`єктів тільки доступних для продажу товарів, які міститимуть тільки ідентифікатор товару (id), нову ціну(price), стару ціну (old_price), та ціну у доларах (usd_price)"
)
let availableProductsForSell = dataList.filter((elem) => elem.sell_status === "available")
let newDataList = []
// console.log(availableProductsForSell)

for (let i = 0; i < availableProductsForSell.length; i++) {
   for (let param in availableProductsForSell[i]) {
      if (param !== "id" && param !== "price" && param !== "old_price" && param !== "usd_price") delete availableProductsForSell[i][param]
   }
   newDataList.push(availableProductsForSell[i])
}
console.log(newDataList)

// min + Math.floor(Math.random() * (max - min + 1))
