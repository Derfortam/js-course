"use strict"

// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
console.log("Наш основний масив із цінами:")
let securitiesPrices = []
for (let i = 0; i < 10; i++) {
   let randomPrice = 1 + Math.floor(Math.random() * 10000)
   securitiesPrices.push(randomPrice)
}
console.log(securitiesPrices)
console.log()
// ============================================================================
// task 1
// Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
console.log("Task_1: Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.")
let arrayWithValueMoreThan1000 = securitiesPrices.filter((elem) => elem > 1000)
console.log(arrayWithValueMoreThan1000)
console.log()
// ============================================================================
// task 2
// Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
console.log("Task_2: Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.")

let arrayIndexesWithValueMoreThan1000 = securitiesPrices
   .map((elem, index) => {
      if (elem > 1000) return index
   })
   .filter((elem) => elem !== undefined)

console.log(arrayIndexesWithValueMoreThan1000)
console.log()
// ============================================================================
// task 3
// Сформувати список з тих цін, які більші за попереднє значення
console.log("Task_3: Сформувати список з тих цін, які більші за попереднє значення")
let arrayNextMoreThanPrev = securitiesPrices.filter((elem, index, base) => {
   if (index !== 0) {
      return elem > base[index - 1]
   }
   return false
})
console.log(arrayNextMoreThanPrev)
console.log()
// ============================================================================
// Task 4
// Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
console.log("Task_4: Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального")
let maxValueInOriginArray = Math.max(...securitiesPrices)

let percentFromMax = securitiesPrices.map((elem) => ((elem * 100) / maxValueInOriginArray).toFixed(2))
console.log(percentFromMax)
console.log()
// ============================================================================
// Task 5
// Підрахувати кількість змін цін
console.log("Task_5: Підрахувати кількість змін цін")

let countOfChanges = 0
securitiesPrices.forEach((elem, index, array) => {
   if (index !== array.length) {
      if (elem !== array[index + 1]) countOfChanges++
   }
})
console.log(countOfChanges)
console.log()
// ============================================================================
// Task 6
// Визначити, чи є ціна, що менше 1000
console.log("Task_6: Визначити, чи є ціна, що менше 1000")

// let priceLessThan100 = securitiesPrices.find((el) => el < 1000)
// or
let priceLessThan100 = securitiesPrices.some((el) => el < 1000)
if (priceLessThan100) console.log("Yes, we have")
else console.log("No, we do not have")
console.log()
// ============================================================================
// Task 7
// Визначати, чи усі ціни більше за 1000
console.log("Task_7: Визначати, чи усі ціни більше за 1000")

if (securitiesPrices.every((elem) => elem > 1000)) console.log("Yes, we have")
else console.log("No, we do not have")
console.log()
// ============================================================================
// Task 8
// Підрахувати кількість цін, що більше за 1000

console.log("Task_8: Підрахувати кількість цін, що більше за 1000")

let countOfValueMoreThan1000 = 0
securitiesPrices.forEach((elem) => {
   if (elem > 1000) countOfValueMoreThan1000++
})
console.log(countOfValueMoreThan1000)
console.log()
// ============================================================================
// Task 9
// Підрахувати суму цін, що більше за 1000
console.log("Task_9: Підрахувати суму цін, що більше за 1000")

let sumOfvalueMoreThan1000 = 0
securitiesPrices.forEach((elem) => {
   if (elem > 1000) sumOfvalueMoreThan1000 += elem
})
console.log(sumOfvalueMoreThan1000)
console.log()
// ============================================================================
// Task 10
// Знайти першу ціну, що більше за 1000
console.log("Task_10: Знайти першу ціну, що більше за 1000")

let firstNumMoreThan1000 = securitiesPrices.find((elem) => elem > 1000)
console.log(firstNumMoreThan1000)
console.log()
// ============================================================================
// Task 11
// Знайти індекс першої ціни, що більше за 1000
console.log("Task_11: Знайти індекс першої ціни, що більше за 1000")

let indexFirstNumMoreThan1000 = securitiesPrices.findIndex((elem) => elem > 1000)
console.log(indexFirstNumMoreThan1000)
console.log()
// ============================================================================
// Task 12
// Знайти останню ціну, що більше за 1000
console.log("Task_12: Знайти останню ціну, що більше за 1000")

let valueLastNumMoreThan1000 = securitiesPrices.findLast((elem) => elem > 1000)
console.log(valueLastNumMoreThan1000)
console.log()
// ============================================================================
// Task 13
// Знайти індекс останньої ціни, що більше за 1000
console.log("Task_13: Знайти індекс останньої ціни, що більше за 1000")

let indexLastNumMoreThan1000 = securitiesPrices.findLastIndex((elem) => elem > 1000)
console.log(indexLastNumMoreThan1000)
console.log()
