"use strict"

// ========= Задача 1 ==============
/*
Задача 1. 
Створити клас Client
Властивості
ID
ПІБ
Кількість грошей на рахунку

Методи
Додавання грошей
Зняття грошей
ToString

На основі цього класу створити клас GoldenClient

Властивості
ID
ПІБ
Кількість грошей на рахунку
Ліміт кредитних коштів
Відсоток за використання кредитних коштів

Методи
Додавання грошей
Зняття грошей
Визначення пені за використання кредитних коштів
ToString
*/

class Client {
   #moneyCount
   #id
   get MoneyCount() {
      return this.#moneyCount
   }
   set ID(value) {
      if (value < 0 || isNaN(value)) throw new Error("Неправильний ідентифікатор")
      this.#id = value
   }
   set MoneyCount(value) {
      if (value < 0 || isNaN(value)) throw new Error("Неправильна кількість грошей")
      this.#moneyCount = value
   }
   constructor(id, moneyCount, {firstName, secondName}, status) {
      this.ID = id
      this.name = {
         firstName: firstName,
         secondName: secondName,
      }
      this.MoneyCount = moneyCount
      this.status = status
   }
   addMoney(value) {
      if (value < 0 || isNaN(value)) throw new Error("Неправильна кількість грошей")
      this.#moneyCount += value
   }
   getMoney(value) {
      if (value < 0 || isNaN(value) || this.#moneyCount < value) throw new Error("Неправильна кількість грошей або ви ввели завелику суму")
      this.#moneyCount -= value
   }
   toString() {
      return `${this.name.firstName} - ${this.#id} - ${this.#moneyCount}$ - ${this.status}`
   }
}

let x = new Client(
   0,
   3000,
   {
      firstName: "Ivar",
      secondName: "Ragnar",
   },
   "simple"
)
console.log(x.toString())
x.addMoney(20)
console.log(x.toString())
x.getMoney(200)
console.log(x.toString())

class GoldenClient extends Client {
   constructor(id, moneyCount, {firstName, secondName}, status, limit, permit) {
      super(id, moneyCount, {firstName, secondName}, status)
      this.limit = limit
      this.permit = permit
   }
   addMoney(value) {
      super.addMoney(value)
   }
   getMoney(value) {
      super.getMoney(value)
   }
   getPenny() {
      // не знаю чи правильно визначаю пенні і дужки самі додаються постійно
      return (this.MoneyCount * this.permit) / 100
   }
   toString() {
      return super.toString()
   }
}

let y = new GoldenClient(
   13,
   3000,
   {
      firstName: "Lex",
      secondName: "Alek",
   },
   "golden",
   3,
   5
)
console.log(y.toString())
y.addMoney(300)
console.log(y.getPenny())
console.log(y.toString())

// window.onload = function () {
//    const simpleClientID = document.getElementById("simpleClientID")
//    const simpleClientSum = document.getElementById("simpleClientSum")
//    const simpleClientName = document.getElementById("simpleClientName")
//    const simpleClientLastName = document.getElementById("simpleClientLastName")

//    function getValue(item) {
//       return item.value
//    }

//    function renderList() {
//       const simlpeList = document.getElementById("simlpeList")
//       let res = new Client(
//          getValue(simpleClientID),
//          getValue(simpleClientSum),
//          {firstName: getValue(simpleClientName), secondName: getValue(simpleClientLastName)},
//          "simple"
//       )

//       simlpeList.append(`
//          <ul class="tasks__list">
//          <li>${res.toString()}</li>
//        </ul>
//          `)
//    }

//    const createSimpleList = document.getElementById("createSimpleList")
//    createSimpleList.addEventListener("click", renderList)
// }
// =========================================================
// =========================================================

// ========= Задача 2 ==============
/*
Задача 2. Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
Вивести всіх простих клієнтів;
Вивести всіх клієнтів GoldenClient;
Знайти сумарну кількість грошей на рахунку;
*/

const dataList = [
   new Client(
      1,
      3000,
      {
         firstName: "Vladislav",
         secondName: "Ostapchuk",
      },
      "simple"
   ),
   new Client(
      2,
      100,
      {
         firstName: "Governer",
         secondName: "Dickson",
      },
      "simple"
   ),
   new GoldenClient(
      7,
      300000,
      {
         firstName: "Ivar",
         secondName: "Aleon",
      },
      "golden",
      20000,
      12
   ),
   new Client(
      3,
      60000,
      {
         firstName: "Rick",
         secondName: "Graimes",
      },
      "simple"
   ),
   new GoldenClient(
      3,
      3000,
      {
         firstName: "Ivar",
         secondName: "Darril",
      },
      "golden",
      2000,
      30
   ),
   new Client(
      4,
      3000,
      {
         firstName: "Vladislav",
         secondName: "Ostapchuk",
      },
      "simple"
   ),
]

class Bank {
   constructor(list) {
      this.dataList = list
   }
   getSImpleClients() {
      return this.dataList.filter(elem => elem.status === "simple")
   }
   getGoldenClients() {
      return this.dataList.filter(elem => elem.status === "golden")
   }
   getTotalMoney() {
      return this.dataList.reduce((prev, elem) => prev + elem.MoneyCount, 0)
   }
}
let r = new Bank(dataList)
console.log(r.getSImpleClients())
console.log(r.getGoldenClients())
console.log(r.getTotalMoney())

// =========================================================
// =========================================================

// ========= Задача 3 ==============
/*
Задача 3. Розробити Класи

House
--- властивості ---
Координата Х
Координата У
шлях до зображення
інтервал оновлення
--- методи ---
генерування елемента розмітки
оновлення через вказаний інтервал (збільшення або зменшення масштабу (об’єкт не рухається)

Dog
--- властивості ---
Координата Х
Координата У
шлях до зображення
інтервал оновлення
--- методи ---
генерування елемента розмітки
оновлення через вказаний інтервал
(випадкове зміщення по горизонталі (зміна координати Х))


Bird
--- властивості ---
Координата Х
Координата У
шлях до зображення
інтервал оновлення
--- методи ---
генерування елемента розмітки
оновлення через вказаний інтервал (випадкове переміщення у довільному напрямку)

Подумайте яким має бути спільний клас предок.
*/

class Object {
   constructor(axisX, axisY, imgSrc, updateInterval, mode) {
      this.axisX = axisX
      this.axisY = axisY
      this.imgSrc = imgSrc
      this.updateInterval = updateInterval

      this.elem = this.render()
      this.interval(mode)
   }
   render() {
      const img = document.createElement("img")
      img.setAttribute("alt", "Image")
      img.setAttribute("src", this.imgSrc)
      img.className = "object__obj"
      img.style.top = this.axisY + "px"
      img.style.left = this.axisX + "px"
      return img
   }
   interval(mode) {
      if (mode === 1) {
         const el = this.elem
         setInterval(() => {
            const randomSize = 0.5 + Math.random()
            el.style.transform = `scale(${randomSize})`
         }, this.updateInterval)
      } else if (mode === 2) {
         const el = this.elem
         setInterval(() => {
            const randomPos = 0 + Math.floor(Math.random() * 250)
            el.style.left = randomPos + "px"
         }, this.updateInterval)
      } else if (mode === 3) {
         const el = this.elem
         setInterval(() => {
            const randomLeft = 0 + Math.floor(Math.random() * 250)
            const randomTop = 0 + Math.floor(Math.random() * 250)

            el.style.left = randomLeft + "px"
            el.style.top = randomTop + "px"
         }, this.updateInterval)
      }
   }
}

class House extends Object {
   constructor(axisX, axisY, imgSrc, updateInterval, mode = 1) {
      super(axisX, axisY, imgSrc, updateInterval, mode)
   }
   render() {
      return super.render()
   }
   interval(mode) {
      return super.interval(mode)
   }
}

const objectContainer1 = document.querySelector("#obj1")
const object1 = new House(3, 40, "img/img3.jpg", 1000)
objectContainer1.append(object1.elem)

class Dog extends Object {
   constructor(axisX, axisY, imgSrc, updateInterval, mode = 2) {
      super(axisX, axisY, imgSrc, updateInterval, mode)
   }
   render() {
      return super.render()
   }
   interval(mode) {
      return super.interval(mode)
   }
}
const objectContainer2 = document.querySelector("#obj2")
const object2 = new Dog(3, 40, "img/img3.jpg", 100)
objectContainer2.append(object2.elem)

class Bird extends Object {
   constructor(axisX, axisY, imgSrc, updateInterval, mode = 3) {
      super(axisX, axisY, imgSrc, updateInterval, mode)
   }
   render() {
      return super.render()
   }
   interval(mode) {
      return super.interval(mode)
   }
}

const objectContainer3 = document.querySelector("#obj3")
const object3 = new Bird(3, 40, "img/img3.jpg", 100)
objectContainer3.append(object3.elem)

// ==============================================================
// ==============================================================

// ========= Задача 4 ==============

/*
Задача 4. Користувач задає місяць навчання учня 
(перевіряти чи є числом, чи від 1 до 12, чи не канікули) 
та оцінку (перевіряти чи є числом, чи від 1 до 100).
 Вивести чи зможе він виправити оцінку 
 (якщо оцінка погана і це не останній місяць у семестрі) .
  Обробку усіх помилок зробити з використанням відповідних класів.
*/

class IsWeekend extends Error {
   constructor() {
      super()
      this.message = "Зараз канікули"
      this.name = "IsWeekend"
   }
}
class RightWeekend extends Error {
   constructor() {
      super()
      this.message = "Неправильний місяць"
      this.name = "RightWeekend"
   }
}
class RightScore extends Error {
   constructor() {
      super()
      this.message = "Неправильна кількість балів"
      this.name = "RightScore"
   }
}

class Student {
   constructor(month, score) {
      this.month = month
      this.score = score
   }
   check() {
      try {
         if (this.month > 5 && this.month < 9) throw new IsWeekend()
         if (this.score < 0 || this.score > 100) throw new RightScore()
         return true
      } catch (error) {
         return [error.message, false]
      }
   }
   render() {
      let checker = this.check()
      if (checker[1] !== false) {
         if (this.score < 60) {
            if (this.month !== 12 && this.month !== 5) return "Можна виправити оцінку"
            return "Не можна виправити оцінку"
         } else {
            return "Все чудово. Оцінку виправляти не потрібно"
         }
      }
      return `Виникла помилка при валідації "${checker[0]}". Перевірте правильність введених даних`
   }
   toString() {
      return `${this.render()}`
   }
}

let patrick = new Student(5, 50)
console.log(patrick.toString())
