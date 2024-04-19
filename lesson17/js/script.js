"use strict"

/*
Задача 1
Створити клас, що дозволяє виконувати такі операції над масивами: 
знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)
*/
class ArrOperation {
   static countOfPositiveNums(arr) {
      return arr.filter(elem => elem > 0)
   }
   static countOfNegativeNums(arr) {
      return arr.filter(elem => elem < 0)
   }
   static countOfOccurrencesNum(arr, num) {
      return arr.reduce((prev, elem) => (elem === num ? prev + 1 : prev), 0)
   }
   toString() {
      return "Array Operaition Class"
   }
}
const numbers = [1, -2, 3, -4, 5, -6, 5, 5]
console.log(ArrOperation.countOfPositiveNums(numbers))
console.log(ArrOperation.countOfPositiveNums(numbers))
console.log(ArrOperation.countOfOccurrencesNum(numbers, 5))

console.log()

// =================================================

/*
Задача 2
Створити службове авто (водій, марка, номер). 
Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.
*/

class Car {
   static driver
   static mark
   static number

   constructor(driver, mark, number) {
      if (Car.driver) {
         return Car.driver
      }
      if (Car.mark) {
         return Car.mark
      }
      if (Car.number) {
         return Car.number
      }

      this.driver = driver
      this.mark = mark
      this.number = number

      Car.driver = this
      Car.mark = this
      Car.number = this
   }

   toString() {
      return `${this.driver}'s car`
   }
}

let x1 = new Car("Duncan", "Toyota", "ABC123")
console.log(Car.driver)
console.log(Car.mark)
console.log(Car.number)
console.log(x1.toString())

let x2 = new Car("Lex", "Honda", "XYZ789")
console.log(Car.driver)
console.log(Car.mark)
console.log(Car.number)
console.log(x2.toString())

console.log()
console.log()

// =================================================
/*
Задача 3
Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) 
програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер 
скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька 
об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.
*/

class Reminder {
   static #timeInterval
   static text
   static #counter
   intervalID
   constructor(text, timeInterval) {
      if (Reminder.text) return Reminder.text
      if (Reminder.#timeInterval) return Reminder.#timeInterval
      Reminder.text = text
      this.TimeInterval = timeInterval
      this.Counter = 1
   }
   set TimeInterval(value) {
      if (value < 0 || isNaN(value)) throw new Error("Некоректно заданий інтервал")
      Reminder.#timeInterval = value
   }
   set Counter(value) {
      if (value < 0 || isNaN(value)) throw new Error("Некоректно задана швидкість")
      Reminder.#counter = value
   }
   render() {
      this.intervalID = setInterval(() => {
         console.log(`${Reminder.text} - ${Reminder.#counter}`)
         Reminder.#counter++
      }, Reminder.#timeInterval)
   }
   get stopTimer() {
      clearInterval(this.intervalID)
   }
   toString() {
      return "Reminder"
   }
}
let y = new Reminder("Hello", 2000)
console.log(y.render())
console.log(y.stopTimer)

let y2 = new Reminder("New Text", 1000)
console.log(y2.render())
console.log(y.stopTimer)

// console.log()
console.log()
console.log()

// =================================================
/*
Задача 4
Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник
(назва, реєстраційний номер).
Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми
*/

// тут у нас база, де ми отримуємо масив із продуктами і можемо маніпулювати ними

class ProductBase {
   constructor(arr) {
      this.arr = arr
   }
   filterForName(name) {
      let prodName = name.toUpperCase()
      return this.arr.filter(elem => elem.nameProduct.toUpperCase() === prodName)
   }
   filterForFimName(name) {
      let firmName = name.toUpperCase()
      return this.arr.filter(elem => elem.firm.manufacturerName.toUpperCase() === firmName)
   }
   getIndexOfName(name) {
      let firmName = name.toUpperCase()
      return this.arr.findIndex(elem => elem.nameProduct.toUpperCase() === firmName)
   }
   spipment(name) {
      let index = this.getIndexOfName(name)
      return this.arr.splice(index, 1)
   }
   get toString() {
      return `${JSON.stringify(this.arr)}`
   }
}

// тут ми створюємо продукт від фірми
class Firm {
   #manufacturerNumber
   constructor(manufacturerName, manufacturerNumber) {
      this.manufacturerName = manufacturerName
      this.ManufacturerNumber = manufacturerNumber
   }
   set ManufacturerNumber(value) {
      if (value < 0 || isNaN(value) || value.length > 10) throw new Error("Некоректно заданий реєстраційний номер")
      this.#manufacturerNumber = value
   }
   get toString() {
      return `
      {
         "manufacturer name": ${this.manufacturerName},
         "manufacturer number": ${this.#manufacturerNumber}
      }
      `
   }
}

let firmProd1 = new Firm("Engeens", 23823927)
console.log(firmProd1)

// тут ми створюємо готовий продукт
class ProductRegistration {
   #quantity
   constructor(nameProduct, unitMeasurement, quantity, manufacturerName, manufacturerNumber) {
      this.nameProduct = nameProduct
      this.unitMeasurement = unitMeasurement
      this.Quantity = quantity
      this.firm = new Firm(manufacturerName, manufacturerNumber)
   }

   set Quantity(value) {
      if (value < 0 || isNaN(value)) throw new Error("Некоректно задана кількість")
      this.#quantity = value
   }
   get toString() {
      return `
{
   "name of Product": ${this.nameProduct}, 
   "unit of measurement": ${this.unitMeasurement}, 
   "quantity": ${this.#quantity}, 
   "firm": ${JSON.stringify(this.firm)}
}`
   }
}

// тут ми створюємо масив продуктів
let products = [
   new ProductRegistration("Prod1", "tonn", 23, "Engeens", 233927),
   new ProductRegistration("Prod2", "kg", 54, "XSpece", 124535),
   new ProductRegistration("Prod3", "tonn", 223, "Aleon", 4355455),
]
console.log(products)

// маніпуляції

let registration = new ProductRegistration("Prod1", "tonn", 23, "Engeens", 233927)
console.log(registration.toString)

let manipulationsWithProducts = new ProductBase(products)
console.log(manipulationsWithProducts.filterForName("Prod1"))
console.log(manipulationsWithProducts.filterForFimName("XSpece"))
console.log(manipulationsWithProducts.getIndexOfName("Prod2"))
console.log(manipulationsWithProducts.spipment("Prod3"))
console.log(manipulationsWithProducts.toString)

console.log(products)
console.log()
console.log()

// =================================================
/*
Задача 5
Особиста бібліотека. 
Картотека домашньої бібліотеки: 

дані книги 
   (автори (піб, рік народження, короткий опис), 
   назва книги, 
   жанр, 
   видавництво (назва, реєстраційний номер, рік засування)).

Реалізувати розділи бібліотеки (спеціальна література, хобі, домашнє господарство і т.д.), 
походження книги і наявність на даний час.

Організувати додавання/вилучення книг
та  вибір книг за назвою, 
за ПІБ автора, за видавництвом.
*/

class Book {
   constructor(autors, bookName, bookGenre, bookPublisher, origin) {
      this.autors = autors
      this.bookName = bookName
      this.bookGenre = bookGenre
      this.bookPublisher = bookPublisher
      this.origin = origin
   }
   get toString() {
      return `
      {
         autors: ${JSON.stringify(this.autors)},
         bookName: ${this.bookName},
         bookGenre: ${this.bookGenre},
         bookPublisher: ${this.bookPublisher},
         origin & avaible: ${JSON.stringify(this.origin)}
      }
      `
   }
}
class Artour {
   constructor(name, lastName, yearBirth, about) {
      this.name = name
      this.lastName = lastName
      this.yearBirth = yearBirth
      this.about = about
   }
   get toString() {
      return `
      {
         name: ${this.name},
         lastName: ${this.lastName},
         yearBirth: ${this.yearBirth},
         about: ${this.about}
      }
      `
   }
}

class Origin {
   constructor(originOfBook, currentAvailability) {
      this.originOfBook = originOfBook
      this.currentAvailability = currentAvailability
   }
   toString() {
      return `{
         originOfBook: ${this.originOfBook},
         currentAvailability:  ${this.currentAvailability}
      }`
   }
}

class PersonalLibrary {
   constructor() {
      this.chapters = {
         hobby: [],
         homeBooks: [],
         special: [],
         epic: [],
      }
      this.originOfBook = []
      this.currentAvailability = []
   }
   addBookToChapter(value, chapter) {
      if (this.chapters[chapter]) {
         this.chapters[chapter].push(value)
      } else {
         throw new Error("Не має такого розділу, введіть інший")
      }
   }
   removeBook(name, chapter) {
      if (this.chapters[chapter]) {
         const index = this.chapters[chapter].indexOf(name)
         this.chapters[chapter].splice(index, 1)
      } else {
         throw new Error("Не має такого розділу, введіть інший")
      }
   }

   searchBook(name, chapter, param) {
      if (param === "name") {
         const booksName = name.toUpperCase()
         return this.chapters[chapter].filter(elem => elem.bookName.toUpperCase() === booksName)
      } else if (param === "artour") {
         const artourName = name.toUpperCase()
         return this.chapters[chapter].filter(elem => elem.autors.name.toUpperCase() === artourName)
      } else if (param === "publisher") {
         const publisherName = name.toUpperCase()
         return this.chapters[chapter].filter(elem => elem.bookPublisher.toUpperCase() === publisherName)
      } else {
         throw new Error("Не має таких даних, введіть інші")
      }
   }
   get toString() {
      return `
      chapters
      {
         hobby: ${JSON.stringify(this.chapters.hobby)},
         homeBooks: ${JSON.stringify(this.chapters.homeBooks)},
         special: ${JSON.stringify(this.chapters.special)}
      }

      originOfBook
      [
         ${JSON.stringify(this.originOfBook)}
      ]
      `
   }
}

let artour1 = new Artour("Frank", "Herbert", "14/03/1933", "This is an America's fiction artuor")
let artour2 = new Artour("Jonh", "Tolkin", "23/08/1930", "This is an British's fantasy artuor")

let USAOrigin = new Origin("USA", "Avaible")
let BritishOrigin = new Origin("British", "Avaible")

console.log(artour1.toString)
let book = new Book(artour1, "Dune", "Fiction", "USA", USAOrigin)
let book2 = new Book(artour2, "Lord Of the Rings", "Fantasy", "British", BritishOrigin)

console.log(book.toString)
console.log(book2.toString)

let myLibrary = new PersonalLibrary()
myLibrary.addBookToChapter(book, "hobby")
console.log(myLibrary.toString)

myLibrary.addBookToChapter(book2, "homeBooks")
// myLibrary.addBookToChapter(book, "homeBooks")

console.log(myLibrary.toString)
console.log(myLibrary.searchBook("British", "homeBooks", "publisher"))

console.log()
console.log()

// =================================================
/*
Задача 6
Дано два класи MultChecker 
(клас для перевірки таблиці множення - 
   рандомно генеруються числа, які треба перемножати),
   
AddChecker 
(клас для перевірки додавання - 
рандомно генеруються числа у заданому діапазоні, які треба додавати).

Обидва класи надсилають результати тестування об'єкту класу Hystory,
який зберігає історію тестування у масиві у вигляді об'єктів  
Приклад.
testsList= [
   {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
   {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
]
Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля. 

Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично 
генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. 
Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було створити
 тільки один. Коли зроблено ці N задач вивести усю історію на екран.

*/
class TestManager {
   static userAnswer = 0
   static correctUserAnswer = 0
   constructor(interval, min, max, count) {
      if (min > max) {
         let tmp = max
         max = min
         min = tmp
      }
      this.min = min
      this.max = max
      this.interval = interval
      this.counter = 0
      this.edgeCount = count
      this.timeID

      this.history = new History()
   }
   start() {
      const num1 = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      const num2 = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min

      let whichElem = Math.floor(Math.random() * 2)
      let example = whichElem > 0.5 ? new AddChecker(this.history) : new MultChecker(this.history)

      example.checkAnswer(num1, num2)
      this.timeID = setTimeout(() => {
         this.counter++
         this.start()
      }, this.interval)
      if (this.counter === this.edgeCount) {
         this.stop()
         console.log(this.getHistory())
      }
   }
   stop() {
      clearInterval(this.timeID)
   }
   getHistory() {
      return JSON.stringify(this.history)
   }
}
class History {
   constructor() {
      this.data = []
   }
   addTest(test) {
      this.data.push(test)
   }
   precessMult(data1, data2) {
      const result = new MultChecker(data1, data2)
      this.data.push(result)
   }
   precessSum(data1, data2) {
      const result = new AddChecker(data1, data2)
      this.data.push(result)
   }
   get toString() {
      return `${JSON.stringify(this.data)}`
   }
}

class TestData {
   constructor(firstNum, secondNum, char, correctAnser, userAnswer) {
      this.firstNum = firstNum
      this.secondNum = secondNum
      this.char = char
      this.correctAnser = correctAnser
      this.userAnswer = userAnswer
   }
}
class MultChecker {
   constructor(history) {
      this.history = history
   }
   generateExample(min, max) {
      if (min > max) {
         let tmp = max
         max = min
         min = tmp
      }
      const firstNum = Math.floor(Math.random() * (max - min + 1)) + min
      const secondNum = Math.floor(Math.random() * (max - min + 1)) + min
      return {firstNum, secondNum}
   }
   checkAnswer(min, max) {
      const {firstNum, secondNum} = this.generateExample(min, max)
      const correctAnswer = firstNum * secondNum

      let ask = parseInt(prompt(`${firstNum} * ${secondNum} = ?`))
      if (ask === correctAnswer) TestManager.correctUserAnswer++
      TestManager.userAnswer++

      const test = new TestData(firstNum, secondNum, "*", TestManager.correctUserAnswer, TestManager.userAnswer)
      this.history.addTest(test)
      // return this.history.toString
   }
   check() {}
   get toString() {
      return `${this.firstNum} * ${this.seconstNum}, "*"`
   }
}

class AddChecker {
   constructor(history) {
      this.history = history
   }
   generateExample(min, max) {
      if (min > max) {
         let tmp = max
         max = min
         min = tmp
      }
      const firstNum = Math.floor(Math.random() * (max - min + 1)) + min
      const secondNum = Math.floor(Math.random() * (max - min + 1)) + min
      return {firstNum, secondNum}
   }
   checkAnswer(min, max) {
      const {firstNum, secondNum} = this.generateExample(min, max)
      const correctAnser = firstNum + secondNum

      let ask = parseInt(prompt(`${firstNum} + ${secondNum} = ?`))
      if (ask === correctAnser) TestManager.correctUserAnswer++
      TestManager.userAnswer++

      const test = new TestData(firstNum, secondNum, "+", TestManager.correctUserAnswer, TestManager.userAnswer)
      this.history.addTest(test)
      // return this.history.toString
   }
   check() {}
   get toString() {
      return `${this.firstNum} * ${this.seconstNum}, "+"`
   }
}

// let test = new TestManager(500, 1, 10, 3)
// test.start()

// Задача 4. Створити клас Bankomat, який моделює роботу банкомата.
//  Клас повинен містити поля для зберігання кількості купюр кожного із
// номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної
//  та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
//--- купюра ----
// class Note {
//   constructor(noteValue, noteNumber) {
//     // noteValue -  номінал, noteNumber - кількість штук купюр
//     this.value = noteValue
//     this.number = noteNumber
//   }
//   get totalValue() {
//     return this.value * this.number
//   }
//   toString() {
//     return `${this.value} : ${this.number}`
//   }
// }

// class Bankomat {
//   constructor(notesList) {
//     this.notesList = notesList
//   }
//   get minSum() {
//     let minNote = this.notesList.reduce(
//       (prevNoteValue, note) =>
//         note.number > 0 && note.value < prevNoteValue
//           ? note.value
//           : prevNoteValue,
//       Infinity
//     )
//     return isFinite(minNote) ? minNote : 0
//   }
//   get maxSum() {
//     let sum = this.notesList.reduce(
//       (prevSum, note) => prevSum + note.totalValue,
//       0
//     )
//     return sum
//   }
//   //----- метод визначення чи можна видати потрібну суму ---
//   getPossibleNotesList(userMoney) {
//     let possibleNotes = []
//     for (let i = 0; i < this.notesList.length && userMoney > 0; i++) {
//       let note = this.notesList[i]
//       if (userMoney >= note.value && note.number > 0) {
//         let notesNum = Math.floor(userMoney / note.value)
//         let notesToGive = Math.min(notesNum, note.number)
//         possibleNotes.push({
//           note,
//           notesToGive,
//         })
//         userMoney -= notesToGive * note.value
//       }
//     }
//     if (userMoney > 0) return false
//     return possibleNotes
//   }
//   //----- метод зняття деякої суми ---
//   getMoney(userMoney) {
//     if (userMoney > this.maxSum) {
//       document.write('У банкоматі немає такої суми ')
//       return
//     }
//     let possibleNotes = this.getPossibleNotesList(userMoney)
//     console.log(possibleNotes)
//     if (possibleNotes) {
//       for (const { note, notesToGive } of possibleNotes) {
//         document.write(`${note.value} : ${notesToGive}<br>`)
//         note.number -= notesToGive
//       }
//       document.write('Заберіть Ваші гроші!')
//     } else {
//       document.write('Не можна видати таку суму бо немає таких купюр ')
//     }
//   }
// }

// let notesList = [
//   new Note(200, 1),
//   new Note(100, 40),
//   new Note(50, 12),
//   new Note(20, 19),
//   new Note(10, 9),
//   new Note(5, 0),
// ]

// let bankomat = new Bankomat(notesList)
// bankomat.getMoney(51)
//=====================================================
//       Задача. Команда. Дано список студентів (ім"я, кількість балів). По черзі випадковим чином вибирають дві команди. Виграє той, у кого середній бал менше
// class Student {
//   constructor(initData) {
//     Object.assign(this, initData)
//   }
//   // constructor({ name, score }) {
//   //   this.name = name
//   //   this.score = score
//   // }
//   toString() {
//     return ` ${this.name} - ${this.score}`
//   }
// }

// class Team {
//   constructor(title, studentsList, membersNumber) {
//     this.title = title
//     //----- АГРЕГАЦІЯ -----------
//     this.members = this.selectMembers([...studentsList], membersNumber)
//   }
//   selectMembers(studentsList, membersNumber) {
//     let arr = []
//     for (let i = 0; i < membersNumber; i++) {
//       let randIndex = Math.floor(Math.random() * studentsList.length)
//       arr.push(studentsList[randIndex])
//       studentsList.splice(randIndex, 1)
//     }
//     return arr
//   }
//   get averageScore() {
//     let sum = this.members.reduce(
//       (prevSum, stud) => prevSum + stud.score,
//       0
//     )
//     return sum / this.members.length
//   }
//   toString() {
//     let str = `${this.title} <br>`
//     this.members.forEach((stud) => {
//       str += `${stud} <br>`
//     })
//     return str
//   }
// }
// class Game {
//   constructor(studentsList, membersNumber) {
//     //------- Композиція -------------------
//     this.team1 = new Team('Team1', studentsList, membersNumber)
//     this.team2 = new Team('Team2', studentsList, membersNumber)
//   }
//   getWinner() {
//     if (this.team1.averageScore > this.team2.averageScore)
//       return this.team1.title
//     else if (this.team1.averageScore < this.team2.averageScore)
//       return this.team2.title
//     else return 'Нічия'
//   }
// }
// //----------------

// let studentsList = [
//   new Student({ name: 'Ivan1', score: 10 }),
//   new Student({ name: 'Ivan2', score: 11 }),
//   new Student({ name: 'Ivan3', score: 9 }),
//   new Student({ name: 'Ivan4', score: 6 }),
//   new Student({ name: 'Ivan5', score: 8 }),
//   new Student({ name: 'Ivan6', score: 12 }),
// ]

// let game = new Game(studentsList, 3)
// document.write(game.getWinner())
//=====================================================

// Задача. Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник
// (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару,
// фільтрація за назвою фірми.

//=====================================================
//       Задача 2. Створити клас Product, що представляє товар на складі
// поля:
// 	Назва товару
// 	Кількість одиниць
// 	Ціна одиниці
// методи:
// 	зменшення кількості товару
// 	збільшення кількості товару
// 	визначення вартості вказаної кількості товару
// 	нарахування вказаної знижки (у відсотках)
// 	визначення загальної вартості товару

//=====================================================
// Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.
//----- TMoney
//--- Властивості
// сума в доларах
// курс долара
//--- Методи1
// додвання суми
// вилучення суми
// курсу долара, при якому сума у гривнях збільшиться на 100
//=====================================================

// Задача.  Описати клієнта банку
// ----- Властивості ------
// ПІБ
//       * прізвище
//       * ім’я
// адреса
//       * код
//       * місто
//       * вулиця
//       * номер будинку
// номер рахунку
// кількість грошей
//-----------------------------

//============================================= static
// class Test {
//   //статичне поле (для всіх об"єктів єдине)
//   static statField = 10

//   static counter = 0 //кількість створених об"єктів

//   constructor(value) {
//     // звичайне поле (у кожного об"єкта своє)
//     this.field2 = value
//     Test.counter++
//   }
//   toString() {
//     return `${this.field2} - ${Test.statField} <br>`
//   }
// }

// let t1 = new Test(77)
// let t2 = new Test(88)
// let t3 = new Test(88)
// let t4 = new Test(88)

// document.write(Test.counter)
//=============================================
// Задача. Реалізувати конвертер валют. Курси валют та методи перетвоення повинні бути статичними
// class Converter {
//   static rate = 32 //курс валюти
//   static grnToDollar(grn) {
//     return grn / Converter.rate
//   }
//   static dollarToGrn(dollarSum) {
//     return dollarSum * Converter.rate
//   }
// }
// //----
// // document.write(Converter.grnToDollar(3200))
// Converter.rate = 37
// document.write(Converter.grnToDollar(3200))

//=============================================
//   Задача. Розробити "Рекламний агент". Випадковим чином у зададному діапазоні задається інтервал,
//   і через згенеровану кількість секунд виводиться деяка реклама. Після цього знову генерується випадковий інтервал.
//   У процесі роботи для усіх раніше створених об"єктів - рекламних агентів мінімальне/максимальне значення інтевалу можуть змінюватись.
//Мінмальне і максимальне значення інтервалу - статичні

//=============================================
//Задача. Статистика методів.Дано клас Масив, який зберігає масив і має методи для знаходження суми, добутку, максимального.
// Користувач може створити довільну кількість об’єктів даного класу. Підрахувати загальну кількість викликів
// кожного із  методів (незалежно від об’єкта)
//Потрібно описати статичні каунтери для кожного метода

//=============================================
//Задача. Черговий. Дано список студентів одного курсу (ПІБ). Розробити менеджер чергових, який
// дозволяє випадковим чином обирати і запам’ятовувати обраного чергового студента (один раз обрали і не змінюємо)

// class OnDutyPerson {

//   static onDutyPersonRef //поле, де будемо збрерігати адресу створеного об"єкта

//   constructor(studentsList) {

//     //спочатку перевіряємо чи вже не було створено об"єктів
//     if (OnDutyPerson.onDutyPersonRef)
//       //якщо об"єкт вже було створено
//       return OnDutyPerson.onDutyPersonRef // то повертаємо його адресу (а не створюємо новий об"єкт)

//     this.name = this.getDutyPerson(studentsList)
//     OnDutyPerson.onDutyPersonRef = this
//   }
//   getDutyPerson(studentsList) {
//     let randIndex = Math.floor(Math.random() * studentsList.length)
//     return studentsList[randIndex]
//   }
//   toString() {
//     return this.name
//   }
// }
// //-----
// let studentsList = ['Olga', 'Piter', 'Sem', 'Ivan']
// let d1 = new OnDutyPerson(studentsList)
// document.write(d1)
// document.write('<br>')
// let d2 = new OnDutyPerson(studentsList)
// document.write(d2)
// document.write('<br>')
// document.write(d1 === d2)

//=============================================

//=============================================

//Команда. Дано список студентів (ім"я, кількість балів). По черзі випадковим чином вибирають дві команди. Виграє той, у кого середній бал менше
//Порівняння статичний метод

//================

//=============================================
//   Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, філтрація за назвою товару, фільтрація за назвою фірми

//=============================================
//Особиста бібліотека. Картотека домашньої бібліотеки: дані книги (автори (піб, рік народження, короткий опис), назва книги, жанр, видавництво (назва, реєстраційний номер, рік засування)). Реалізувати розділи бібліотеки (спеціальна література, хобі, домашнє господарство і т.д.), походження книги і наявність на даний час. Організувати додавання/вилучення книг та  вибір книг за назвою, за ПІБ автора, за видавництвом.
//=============================================
// Задача. Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.
//=============================================
