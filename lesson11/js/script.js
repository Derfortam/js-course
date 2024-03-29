"use strict"

// Задача 1 Знайти суми елементів у вказаній області
// ==========
// 1. номери рядків від 0 до половини, стовпці від 0 до половини
// ==========
console.log("номери рядків від 0 до половини, стовпці від 0 до половини")

const cubeArr = [
   [0, 4, 2],
   [9, 8, 1],
   [3, 1, 6],
   // [3, 2, 4, 7],
   // [3, 3, 4, 7],
]
let rowHalf = Math.floor(cubeArr.length / 2)
let sumOfHalf = 0
for (let i = 0; i <= rowHalf; i++) {
   for (let j = 0; j < cubeArr[i].length / 2; j++) {
      // console.log(cubeArr[i][j])
      sumOfHalf += cubeArr[i][j]
   }
}
console.log(sumOfHalf)
console.log()

// ==========
// 2. номери рядків від 0 до половини, стовпці від половини до кінця
// ==========
console.log("номери рядків від 0 до половини, стовпці від половини до кінця")

// let rowHalf = Math.floor(cubeArr.length / 2)
let sumOfSecondChallenge = 0
for (let i = 0; i <= rowHalf; i++) {
   let colHalf = Math.floor(cubeArr[i].length / 2)
   for (let j = colHalf; j < cubeArr[i].length; j++) {
      sumOfSecondChallenge += cubeArr[i][j]
   }
}
console.log(sumOfSecondChallenge)
console.log()

// ==========
//3. номери рядків (від половини до кінця, стовпці від 0 до половини
// ==========
console.log("номери рядків (від половини до кінця, стовпці від 0 до половини")

// let rowHalf = Math.floor(cubeArr.length / 2)
let sumOfThirdChallenge = 0

for (let i = rowHalf; i < cubeArr.length; i++) {
   let colHalf = Math.floor(cubeArr[i].length / 2)
   for (let j = 0; j <= colHalf; j++) {
      sumOfThirdChallenge += cubeArr[i][j]
   }
}
console.log(sumOfThirdChallenge)
console.log()

// ==========
//4. номери рядків від половини до кінця , стовпці від половини до кінця
// ==========

// let rowHalf = Math.floor(cubeArr.length / 2)
console.log("номери рядків від половини до кінця , стовпці від половини до кінця")

let sumOfFourthChallenge = 0
for (let i = rowHalf; i < cubeArr.length; i++) {
   let colHalf = Math.floor(cubeArr[i].length / 2)
   for (let j = colHalf; j < cubeArr[i].length; j++) {
      sumOfFourthChallenge += cubeArr[i][j]
   }
}
console.log(sumOfFourthChallenge)
console.log()

// ==========
//5.  Суму парних рядків
// ==========

// let sumOfEvenNumbers = cubeArr.reduce((total, row) => {
//    return (
//       total +
//       row.reduce((rowTotal, elem) => {
//          return elem % 2 === 0 ? rowTotal + elem : rowTotal
//       }, 0)
//    )
// }, 0)

// console.log(sumOfEvenNumbers)
console.log(" Суму парних рядків")

let sumOfEvenRows = cubeArr.reduce((total, row, index) => {
   if (index % 2 === 0) {
      return total + row.reduce((colPrev, elem) => colPrev + elem, 0)
   } else {
      return total
   }
}, 0)

console.log(sumOfEvenRows)

console.log()
// =========
// Суму непарних стовпців
// =========
console.log(" Суму непарних стовпців")

let sumOfOddRows = cubeArr.reduce((total, row, index) => {
   if (index % 2 !== 0) {
      return total + row.reduce((colPrev, elem) => colPrev + elem, 0)
   } else {
      return total
   }
}, 0)

console.log(sumOfOddRows)
console.log()

// =========
// У парних рядках – непарні стовпці, у непарних – парні.
// =========

console.log("У парних рядках – непарні стовпці, у непарних – парні.")

let a = 0
for (let i = 0; i < cubeArr.length; i += 2) {
   for (let j = 1; j < cubeArr[i].length; j += 2) {
      a += cubeArr[i][j]
   }
}

for (let i = 1; i < cubeArr.length; i += 2) {
   for (let j = 0; j < cubeArr[i].length; j += 2) {
      a += cubeArr[i][j]
   }
}
console.log(a)
console.log()

// ==================================
// ===================
// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти:
console.log("Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти:")
const profit = [
   [3455, 4556, 1000, 4353, 5432, 1111, 7654],
   [1455, 2556, 6000, 5353, 5232, 111, 3454],
   [1455, 5556, 8000, 14353, 1432, 3411, 1654],
   [1455, 7556, 1000, 6353, 3432, 4711, 1654],
   [1455, 9556, 1000, 4353, 5452, 5431, 2654],
   [4455, 6556, 1000, 353, 542, 1451, 4654],
]
console.log()

// ===================
// ===================
// 1) загальний прибуток кожного масиву за тиждень;
console.log("1) загальний прибуток кожного масиву за тиждень;")

let profitForEveryWeek = []
let profitForOneWeek = 0
for (let i = 0; i < profit.length; i++) {
   profitForOneWeek = 0
   for (let j = 0; j < 7; j++) {
      profitForOneWeek += profit[i][j]
   }
   profitForEveryWeek.push(profitForOneWeek)
}
console.log(profitForEveryWeek)
console.log()

// ===================

// ===================
// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// ===================
console.log(" 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);")

let profitForEveryDay = []
let profitForOneDay = 0
for (let j = 0; j < 7; j++) {
   profitForOneDay = 0
   for (let i = 0; i < profit.length; i++) {
      profitForOneDay += profit[i][j]
      // console.log(profit[i][j])
   }
   profitForEveryDay.push(profitForOneDay)
}
console.log(profitForEveryDay)
console.log()

// ===================
// 3) загальний прибуток за робочі дні
// ===================
console.log("3) загальний прибуток за робочі дні")

let profitForWorkDay = []
let profitForOneWorkDay = 0
for (let j = 0; j < 5; j++) {
   profitForOneWorkDay = 0
   for (let i = 0; i < profit.length; i++) {
      profitForOneWorkDay += profit[i][j]
      // console.log(profit[i][j])
   }
   profitForWorkDay.push(profitForOneWorkDay)
}
console.log(profitForWorkDay)
console.log()

// ===================
// 4) загальний прибуток за вихідні дні
// ===================
console.log("4) загальний прибуток за вихідні дні")

let profitForWeekDay = []
let profitForOneWeekDay = 0
for (let j = 4; j < 7; j++) {
   profitForOneWeekDay = 0
   for (let i = 0; i < profit.length; i++) {
      profitForOneWeekDay += profit[i][j]
      // console.log(profit[i][j])
   }
   profitForWeekDay.push(profitForOneWeekDay)
}

console.log(profitForWeekDay)
console.log()

// ===================
// 5) максимальний прибуток за середу
// ===================
console.log("5) максимальний прибуток за середу")

let maxWedpesday = 0
let indexWed = 2
for (let i = 0; i < profit.length; i++) {
   profit[i][indexWed] > maxWedpesday ? (maxWedpesday = profit[i][indexWed]) : maxWedpesday
}

console.log(maxWedpesday)
console.log()

// ===================
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// ===================
console.log("6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200")

let allProfit = profit.flat()
let profitMoreThan200 = allProfit.filter((elem) => elem > 200)

console.log(profitMoreThan200)
console.log()

// ===================
// 7) відсортувати кожен тиждень за зростанням
// ===================
let sortArray = profit.map((row) =>
   row.sort((el1, el2) => {
      if (el1 > el2) return 1
      if (el1 < el2) return -1
      else return 0
   })
)
console.log("7) Відсортувати кожен тиждень за зростанням")
console.log(sortArray)
console.log()

// ===================
// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// ===================
// let sortArrayWeek = profit.map((row) => Math.max(...row))
// let sortArrayResult = sortArrayWeek.sort((el1, el2) => {
//    if (el1 > el2) return -1
//    if (el1 < el2) return 1
//    else return 0
// })
// console.log(sortArrayResult)
console.log(
   "8) Відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків"
)

let sortedMaxArray = profit.sort((a, b) => {
   const maxA = Math.max(...a)
   const maxB = Math.max(...b)
   if (maxA < maxB) return 1
   if (maxA > maxB) return -1
   return 0
})

console.log(sortedMaxArray)
console.log()

// ===================
// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
// ===================

// let sortArrayOfSum = profit.map((row) => row.reduce((prev, elem) => prev + elem, 0))
// let sortArrayOfSumResult = sortArrayOfSum.sort((el1, el2) => {
//    if (el1 > el2) return -1
//    if (el1 < el2) return 1
//    else return 0
// })
// console.log(sortArrayOfSumResult)
console.log(
   "9) Упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше)."
)

let sortedSumArray = profit.sort((a, b) => {
   const sumA = a.reduce((prev, val) => prev + val, 0)
   const sumB = b.reduce((prev, val) => prev + val, 0)
   return sumB - sumA
})

console.log(sortedSumArray)
console.log()
// ========================================
// ========================================
// ========================================
// Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6
// розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується
// поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
// ==============================
let startBattle = confirm("Start sea battle now?")

let field = []

for (let i = 0; i < 6; i++) {
   field.push([])
   for (let j = 0; j < 6; j++) {
      field[i].push(0)
   }
}
// рандомно заповнюємо кораблями
for (let i = 0; i < 5; i++) {
   let randomRow = Math.floor(Math.random() * 6)
   let randomCol = Math.floor(Math.random() * 6)
   field[randomRow][randomCol] = 1
}

console.log(field)

let shells = 10

if (startBattle) {
   let ships = alert(field)
   do {
      let userRow = parseInt(prompt("Enter row coordianate (1-6):"))
      if (userRow > 6) userRow = parseInt(prompt("Enter row coordianate (1-6):"))
      let userCol = parseInt(prompt("Enter column coordianate (1-6):"))
      if (userCol > 6) userCol = parseInt(prompt("Enter column coordianate (1-6):"))
      shells--
      if (field[userRow - 1][userCol - 1] === 1) {
         alert("Cool")
         ships--
      } else {
         alert(`You miss and you have ${shells} shells`)
      }
   } while (ships !== 0 || shells !== 0)
}
