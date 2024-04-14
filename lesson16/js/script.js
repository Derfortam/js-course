"use strict"

// Самі вирішуйте які поля треба захищати і які коректні значення.
// В усіх задача повинен бути toString!!!
// =================================================================================
/*
Задача 1. Створити клас TDate для роботи із датами у форматі
 “день.місяць.рік”. Дата представляється структурою із трьома полями.
  Реалізувати методи збільшення/зменшення дати на певну кількість днів, 
  місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.
*/
console.log(
   "Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів,  місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString."
)
console.log()

class TDate {
   #day
   #month
   #year
   constructor(day, month, year) {
      this.Day = day
      this.Month = month
      this.Year = year
   }
   // ----- сеттери
   set Day(value) {
      if (value < 0 || value > 31) throw new Error("Некоректні дані")
      this.#day = value
   }
   set Month(value) {
      if (value < 0 || value > 12) throw new Error("Некоректні дані")
      this.#month = value
   }
   set Year(value) {
      if (value < 0 || value > 2024) throw new Error("Некоректні дані")
      this.#year = value
   }
   correctLeepDate() {
      if ((this.#year % 4 === 0 && this.#year % 100 !== 0) || this.#year % 400 === 0) {
         if (this.#day > 29 && this.#month === 2) {
            let diff = this.#day - 29
            this.#month++
            this.#day = diff
         }
      } else {
         if (this.#day > 28 && this.#month === 2) {
            let diff = this.#day - 28
            this.#month++
            this.#day = diff
         }
      }
   }
   correctDay() {
      while (this.#day > 31) {
         if (this.#month % 2 === 1) {
            this.#month++
            this.#day -= 31
         } else if (this.#month % 2 === 0 && this.#month !== 2) {
            this.#month++
            this.#day -= 30
         } else if ((this.#month === 2 && this.#year % 4 === 0 && this.#year % 100 !== 0) || (this.#month === 2 && this.#year % 400 === 0)) {
            this.#month++
            this.#day -= 29
         } else if (this.#month % 2 === 2) {
            this.#month++
            this.#day -= 28
         }
      }
   }
   correctMonth() {
      while (this.#month > 12) {
         this.#month -= 12
         this.#year++
      }
   }
   // --------
   increaseDay(value) {
      if (value < 0 || isNaN(value)) throw new Error("День не може бути пустим чи від'ємним")
      this.#day += value
      this.correctDay()
      return this.#day
   }
   increaseMonth(value) {
      if (value < 0 || isNaN(value)) throw new Error("Місяць не може бути пустим чи від'ємним")
      this.#month += value
      this.correctMonth()
      return this.#month
   }
   increaseYear(value) {
      if (value < 0 || isNaN(value)) throw new Error("Рік не може бути пустим чи від'ємним")
      this.#year += value
      return this.#year
   }
   // --------
   toString() {
      this.correctLeepDate()
      return `${this.#day} - ${this.#month} - ${this.#year}`
   }
}

let obj1 = new TDate(29, 2, 2013)
console.log("Поточна дата")
console.log(obj1.toString())
console.log("Додаємо 183 дні")
obj1.increaseDay(183)
console.log(obj1.toString())
console.log("Додаємо 20 місяців")
obj1.increaseMonth(20)
console.log(obj1.toString())
console.log("Додаємо 20 років")
obj1.increaseYear(20)
console.log(obj1.toString())
// =================================================================================
// =================================================================================
console.log()
console.log()

/*
Задача 2. 
  Створити клас TMoney для роботи з грошовими сумами.
  Сума повинна зберігатися у вигляді доларового еквіваленту.
  Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у 
  гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100.
  Курс долара зберігати в окремому полі. 
*/
console.log(
   "Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі."
)

class TMoney {
   #moneySum
   #dolarCurs
   constructor(moneySum, dolarCurs) {
      this.MoneySum = moneySum
      this.DolarCurs = dolarCurs
   }

   set MoneySum(value) {
      if (value < 0) throw new Error("Гроші не можуть бути від'ємними")
      this.#moneySum = value
   }
   set DolarCurs(value) {
      if (value < 0) throw new Error("Курс не може бути від'ємним")
      this.#dolarCurs = value
   }

   // -------methods

   addSum(value) {
      if (value < 0 || isNaN(value)) throw new Error("Некоректні дані")
      let grnTODolar = value / this.#dolarCurs
      this.#moneySum += grnTODolar
   }
   takeAwaySum(value) {
      if (this.#moneySum < value) throw new Error("Ви збираєтесь зняти більшу суму, ніж маєте")
      else if (value < 0 || isNaN(value)) throw new Error("Некоректні дані")
      let grnTODolar = value / this.#dolarCurs
      this.#moneySum -= grnTODolar
   }
   determiningDollarExchangeUAH100() {
      let diff = this.#moneySum * this.#dolarCurs + 100
      let newCurs = diff / this.#moneySum
      return newCurs
   }

   toString() {
      return `${this.#moneySum.toFixed(2)} - ${this.#dolarCurs.toFixed(2)}`
   }
}

let s = new TMoney(300, 37.9)
console.log(s.toString())
s.addSum(3790)
console.log(s.toString())
s.takeAwaySum(300)
console.log(s.toString())
console.log(s.determiningDollarExchangeUAH100().toFixed(2) + "$")

// =================================================================================
// =================================================================================
console.log()
console.log()

/*
Задача 3. Об’єкт “Фірма” (використати члени-класи)

поля
назва фірми;
дата заснування (рік, місяць);
послуги (назва послуги, вартість, термін виконання);
адреси філіалів (країна, місто, вулиця, номер будинку);

методи
визначення кількості років існування фірми;
виведення всіх філіалів фірми у вказаному місті;
виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
*/
console.log("Об’єкт “Фірма” (використати члени-класи)")
console.log(
   "Поля: назва фірми; дата заснування (рік, місяць); послуги (назва послуги, вартість, термін виконання); адреси філіалів (країна, місто, вулиця, номер будинку);"
)
console.log(
   "Методи: визначення кількості років існування фірми; виведення всіх філіалів фірми у вказаному місті; виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;"
)

class Services {
   #cost
   #termPerformance
   constructor(serviceName, cost, termPerformance) {
      this.serviceName = serviceName
      this.Cost = cost
      this.TermPerformance = termPerformance
   }

   // ------сеттери
   set Cost(value) {
      if (value < 0) throw new Error("Не може бути менше 0")
      this.#cost = value
   }
   set TermPerformance(value) {
      if (value < 0) throw new Error("Не може бути менше 0")
      this.#termPerformance = value
   }
   toString() {
      return `${this.#termPerformance}, ${this.#cost}`
   }
   render() {
      return {
         name: this.serviceName,
         cost: this.#cost,
         termPerformance: this.#termPerformance,
      }
   }
   toString() {
      return `${this.serviceName}, ${this.#cost}, ${this.#termPerformance}`
   }
}

let servise1 = new Services("IT", 13000, "31 days")
let servise2 = new Services("Managment", 2000, "12 days")
let servise3 = new Services("IT", 130000, "20 days")
let servise4 = new Services("Copyright", 3000, "10 days")

let allServices = [servise1.render(), servise2.render(), servise3.render(), servise4.render()]

class Branches {
   #houseNumber
   constructor(country, city, street, houseNumber) {
      this.country = country
      this.city = city
      this.street = street
      this.HouseNumber = houseNumber
   }
   set HouseNumber(value) {
      if (value < 0) throw new Error("Не може бути менше 0")
      this.#houseNumber = value
   }
   render() {
      return {
         country: this.country,
         city: this.city,
         street: this.street,
         houseNumber: this.#houseNumber,
      }
   }
   toString() {
      return `${this.country}, ${this.city}, ${this.street}, ${this.#houseNumber}`
   }
}

let branche1 = new Branches("Ukraine", "Kyiv", "Shevchenka", 13)
let branche2 = new Branches("USA", "LA", "Franklin", 88)
let branche3 = new Branches("Japan", "Tokio", "Sakura", 2)
let branche4 = new Branches("USA", "New York", "Linkoln", 233)
let branche5 = new Branches("Canada", "Ottava", "Valassa", 11)

let allBranches = [branche1.render(), branche2.render(), branche3.render(), branche4.render(), branche5.render()]

class Firm {
   #dateEstablishment
   #services
   #adresses
   constructor(firmName, dataEstablishment, services, adresses) {
      this.firmName = firmName
      this.DateEstablishment = dataEstablishment
      this.Services = services
      this.Adresses = adresses
   }

   // ----------

   set DateEstablishment(value) {
      if (value.length === 0) throw new Error("Невірна дата")
      this.#dateEstablishment = value
   }
   set Services(value) {
      if (value.length === 0) throw new Error("У нас немає сервісів")
      this.#services = value
   }
   set Adresses(value) {
      if (value.length === 0) throw new Error("У нас немає адрес")
      this.#adresses = value
   }

   // ------
   outputBranches(city) {
      return this.#adresses.filter(elem => elem.city === city)
   }
   customServices(cost, term) {
      return this.#services.filter(elem => elem.cost <= cost && parseFloat(elem.termPerformance) <= term)
   }
   toString() {
      return `${this.firmName}, ${this.#dateEstablishment}.
Services: ${JSON.stringify(this.#services)}.
Adresses: ${JSON.stringify(this.#adresses)}`
   }
}
let w = new Firm("Filaos", "13.02", allServices, allBranches)
console.log(w.outputBranches("Kyiv"))
console.log(w.customServices(20000, 20))
console.log(w.toString())

// =================================================================================
// =================================================================================
console.log()
console.log()

/*
Задача 4. 
  Створити клас TBankomat, який моделює роботу банкомата. 
  Клас повинен містити поля для зберігання кількості купюр кожного із
  номіналів від 5 до 200 гривень. 
  Реалізувати методи знаходження максимальної та мінімальної сум,
  які може видати банкомат, та метод зняття деякої суми.
*/

console.log(
   "Задача 4. Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми."
)

class TBankomat {
   #faceValue5
   #faceValue10
   #faceValue20
   #faceValue50
   #faceValue100
   #faceValue200
   #fullSum
   constructor(faceValue5, faceValue10, faceValue20, faceValue50, faceValue100, faceValue200) {
      this.bills = {
         5: (this.FaceValue5 = faceValue5),
         10: (this.FaceValue10 = faceValue10),
         20: (this.FaceValue20 = faceValue20),
         50: (this.FaceValue50 = faceValue50),
         100: (this.FaceValue100 = faceValue100),
         200: (this.FaceValue200 = faceValue200),
      }
   }
   get Bills() {
      return this.bills
   }
   //--------
   set FaceValue5(value) {
      if (value < 0 || isNaN(value)) throw new Error("Некоректний ввід даних (менше нуля або пусте поле)")
      this.#faceValue5 = value
   }
   set FaceValue5(value) {
      if (value < 0 || isNaN(value)) throw new Error("Некоректний ввід даних (менше нуля або пусте поле)")
      this.#faceValue5 = value
   }
   set FaceValue10(value) {
      if (value < 0 || isNaN(value)) throw new Error("Некоректний ввід даних (менше нуля або пусте поле)")
      this.#faceValue10 = value
   }
   set FaceValue20(value) {
      if (value < 0 || isNaN(value)) throw new Error("Некоректний ввід даних (менше нуля або пусте поле)")
      this.#faceValue20 = value
   }
   set FaceValue50(value) {
      if (value < 0 || isNaN(value)) throw new Error("Некоректний ввід даних (менше нуля або пусте поле)")
      this.#faceValue50 = value
   }
   set FaceValue100(value) {
      if (value < 0 || isNaN(value)) throw new Error("Некоректний ввід даних (менше нуля або пусте поле)")
      this.#faceValue100 = value
   }
   set FaceValue200(value) {
      if (value < 0 || isNaN(value)) throw new Error("Некоректний ввід даних (менше нуля або пусте поле)")
      this.#faceValue200 = value
   }
   // ---- methods
   getMinSum() {
      for (let bill in this.bills) {
         if (this.bills[bill] > 0) {
            return Number(bill)
         }
      }
      return 0
   }
   getMaxSum() {
      let result = 0
      for (let bill in this.bills) {
         if (this.bills[bill] !== 0) {
            result += this.bills[bill] * bill
         }
      }
      return result
   }

   withdrawingSum(value) {
      let fullSum = this.getMaxSum()
      if (value > fullSum) throw new Error("У банкоматі не має такої суми")
      return "Суму знято"
   }
   toString() {
      return `We have: ${this.getMaxSum()} grn`
   }
}

let y = new TBankomat(0, 0, 0, 0, 0, 2)
console.log(y.Bills)
console.log(y.getMinSum())
console.log(y.getMaxSum())
console.log(y.withdrawingSum(300))
console.log(y.toString())
