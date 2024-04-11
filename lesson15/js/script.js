"use strict"

/*
Задача 0. Дано два об’єкта. Обидва містять масив цілих чисел. 
При цьому у одному з них є функція знаходження суми, а у іншому – 
функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
Використати обидва методи стосовно обидвох об’єктів (використати call, apply)
*/
console.log("Задача 0.")
let object1 = {
   arr: [2, 4, 3, 6, 7],
   getSum: function () {
      let result = this.arr.reduce((prev, elem) => prev + elem)
      return result
   },
}
console.log("Виклик методу для об'єкта 1")
console.log(object1.getSum())
let object2 = {
   arr: [2, 4, 3, 6, 7],
   getSumOfSlice: function (min, max) {
      let result = this.arr.reduce((prev, elem) => (elem > min && elem < max ? prev + elem : prev), 0)
      return result
   },
}
console.log("Виклик методу із об'єкта 1 для об'єкта 2 (call)")
let useOtherMethodCallForObj2 = object1.getSum.call(object2)
console.log(useOtherMethodCallForObj2)

console.log("Виклик методу із об'єкта 1 для об'єкта 2 (apply)")
let useOtherMethodApplyForObj2 = object1.getSum.apply(object2)
console.log(useOtherMethodApplyForObj2)

console.log("Виклик методу для об'єкта 2")
console.log(object2.getSumOfSlice(0, 4))

console.log("Виклик методу із об'єкта 2 для об'єкта 1 (call)")
let useOtherMethodCallForObj1 = object2.getSumOfSlice.call(object1, 0, 3)
console.log(useOtherMethodCallForObj1)

console.log("Виклик методу із об'єкта 2 для об'єкта 1 (apply)")
let useOtherMethodApplyForObj1 = object2.getSumOfSlice.apply(object1, [0, 3])
console.log(useOtherMethodApplyForObj1)

console.log()
// =================================================================

// Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Тир

// Поля(властивості)
// Масив, у якому зберігається поле з зайцями
// Методи (дії)
// Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля
console.log("Задача 1.")

let shootingRange = {
   fieldWithRabbits: [0, 0, 1, 0, 0, 0],
   shootingPosition: function (position) {
      return position
   },
   getField: function (position) {
      let shoot = this.shootingPosition(position)
      if (this.fieldWithRabbits[shoot] === 1) return `You win ${this.fieldWithRabbits}`
      return `You lose ${this.fieldWithRabbits}`
   },
}
console.log(shootingRange.getField(2))

console.log()
// =================================================================

// Задача 2. Створити об’єкт «Авто».
// Авто

// Поля(властивості)
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів

// Методи (дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів
console.log("Задача 2.")

let car = {
   mark: "Пікап",
   tankSize: 6,
   availableLiters: 2,
   numOfSeats: 6,
   numOfPassengers: 4,
   refueling: function () {
      return `Треба заправитись на ${this.tankSize - this.availableLiters} л.`
   },
   getPassengerNum: function () {
      // return `Кількість пасажирів: ${this.numOfPassengers}`
      return this.numOfPassengers
   },
   freeSeats: function () {
      return this.numOfSeats - this.numOfPassengers
   },
   addPassenges: function (num) {
      let freeSeat = this.freeSeats()
      if (freeSeat >= num) return "Ok, їдемо"
      return "На всіх місця не вистачить"
   },
   landingOfPassengers: function (num) {
      let passNum = this.getPassengerNum()
      if (passNum >= num) return "Ok, виходимо"
      return "Чувак, нас тут стількох немає"
   },
}

console.log(car.refueling())
console.log(`В авто стільки пасажирів: ${car.getPassengerNum()}`)
console.log(car.addPassenges(2))
console.log(car.landingOfPassengers(6))

console.log()
// =================================================================

// Задача 3. Розробити клас MultChecker для перевірки таблиці множення
// Поля
// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// Методи
// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран
console.log("Задача 3.")

class MultChecker {
   constructor(number) {
      this.number = number
      this.correctAnswer = 0
      this.incorrectAnswer = 0
   }
   generateExample() {
      let randomNum = 1 + Math.floor(Math.random() * 10)
      let exampleLine = `${this.number} * ${randomNum}`
      let example = this.number * randomNum
      return [example, exampleLine]
   }
   checkAnswer() {
      let fullExample = this.generateExample()
      let exampleValue = fullExample[0]
      let example = fullExample[1]

      let userAnswer = parseInt(prompt(`${example} = ?`))
      if (userAnswer === exampleValue) {
         this.correctAnswer++
         return "Відповідь правильна"
      }
      this.incorrectAnswer++
      return "Ти помилився(помилилася)"
   }
   render() {
      return `${this.checkAnswer()}. Правильних відповідей ${this.correctAnswer}, неправильних відповідей ${this.incorrectAnswer}`
   }
}
let user = new MultChecker(6)

let ren = user.render()
console.log(ren)
console.log()
// =================================================================

// ! Розв'язок в файлі HTML - це лише копія коду
// Задача 4. Розробити клас Baner
// Поля
// Масив об’єктів ( графічних зображень та посилань на сайти)

// методи
// Метод випадкового вибору об’єкта (графічного зображення та посилання)
// Метод виведення випадкового банера
// class Baner {
//    constructor(arr) {
//       this.arrSites = arr
//    }
//    getRandomObj() {
//       let randomIndex = Math.floor(Math.random() * this.arrSites.length)
//       return this.arrSites[randomIndex]
//    }
//    getBaner() {
//       let randomObject = this.getRandomObj()
//       let url = randomObject.url
//       let img = randomObject.img

//       let result = `
//          url for site ${url}
//          the img is ${img}
//       `
//       return result
//    }
// }
// let sites = [
//    {
//       url: "htts://google.com",
//       img: "../img/background.jpg",
//    },
//    {
//       url: "htts://google.com",
//       img: "../img/background.jpg",
//    },
//    {
//       url: "htts://google.com",
//       img: "../img/background.jpg",
//    },
//    {
//       url: "htts://google.com",
//       img: "../img/background.jpg",
//    },
// ]

// let newBaner = new Baner(sites)
// document.write(newBaner.getBaner())
// console.log(newBaner.getBaner())

// ====================================================================================

// Задача 5. Розробити клас «Керівник танців»
// Поля
// Масив імен хлопців
// Масив імен дівчат
// Методи
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
console.log("Задача 5.")

class DanceLeader {
   constructor(boys, girls) {
      this.boys = boys
      this.girls = girls
   }
   randomlySelectingBoyName() {
      let randomIndex = Math.floor(Math.random() * this.boys.length)
      return this.boys[randomIndex]
   }
   randomlySelectingGirlName() {
      let randomIndex = Math.floor(Math.random() * this.girls.length)
      return this.girls[randomIndex]
   }
   getDancePair() {
      return `${this.randomlySelectingBoyName()} і ${this.randomlySelectingGirlName()}`
   }
   run() {
      setInterval(() => {
         console.log(this.getDancePair())
      }, 5000)
   }
}
let boys = ["Ейван", "Кріс", "Патрік", "Джон", "Стівен", "Тоні"]
let girls = ["Марія", "Емілі", "Лайла", "Джудіт", "Крістен", "Ема"]

let pairForDance = new DanceLeader(boys, girls)
console.log(pairForDance.run())
