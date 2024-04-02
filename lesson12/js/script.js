"use strict"
// =====================================================================================================
// Елементів зробив не 30, а менше, щоб зекономити часу на перевірку.
// =====================================================================================================

// =====================================================================================================
// Завдання 1
// =====================================================================================================
console.log("Завдання 1")
let scores = [56, 22, -78, 252, 23, -122, 356, 0, 122, 436, -111, 0, 344, 21, 3, -356, 342]
console.log(scores)
console.log()

let changes
let itterationsBuble = 0
do {
   changes = false
   for (let i = 1; i < scores.length; i++) {
      if (scores[i - 1] > scores[i]) {
         let tmp = scores[i - 1]
         scores[i - 1] = scores[i]
         scores[i] = tmp
         changes = true
         // itterationsBuble++ // ОСЬ ТУТ
         // console.log(`Ітерація номер ${itterationsBuble}. Масив: ${scores}`)
      }
      itterationsBuble++ // ОСЬ ТУТ
      console.log(`Ітерація номер ${itterationsBuble}. Масив: ${scores}`)
   }
} while (changes)

console.log()
console.log(scores)
console.log(itterationsBuble)
console.log()
// do {
//    changes = false
//    for (let i = 1; i < scores.length; i++) {
//       if (scores[i - 1] < scores[i]) {
//          let tmp = scores[i - 1]
//          scores[i - 1] = scores[i]
//          scores[i] = tmp
//          changes = true
//       }
//    }
// } while (changes)

// =====================================================================================================
// Завдання 2
// =====================================================================================================
console.log("Завдання 2")

let scores2 = [56, 22, -78, 252, 23, -122, 356, 0, 122, 436, -111, 0, 344, 21, 3, -356, 342]
console.log(scores2)
console.log()
let itterations2 = 0
let leftIndex = 0
let rightIndex = scores2.length - 1

while (leftIndex < rightIndex) {
   for (let i = leftIndex; i < rightIndex; i++) {
      if (scores2[i] > scores2[i + 1]) {
         let tmp = scores2[i + 1]
         scores2[i + 1] = scores2[i]
         scores2[i] = tmp
      }
      itterations2++
      console.log(scores2)
   }
   rightIndex--
   for (let i = rightIndex; i > leftIndex; i--) {
      if (scores2[i] < scores2[i - 1]) {
         let tmp = scores2[i - 1]
         scores2[i - 1] = scores2[i]
         scores2[i] = tmp
      }
      itterations2++
      console.log(scores2)
   }
}
console.log()
console.log(scores2)
console.log(itterations2)

console.log()
// =====================================================================================================
// Завдання 3
// =====================================================================================================
console.log("Завдання 3")

let scores3 = [56, 22, -78, 252, 23, -122, 356, 0, 122, 436, -111, 0, 344, 21, 3, -356, 342]
console.log(scores3)
console.log()

let key, i
let itterationsScores = 0
for (let k = 1; k < scores3.length; k++) {
   key = scores3[k]
   i = k - 1
   while (i >= 0 && scores3[i] > key) {
      scores3[i + 1] = scores3[i]
      i = i - 1
   }
   scores3[i + 1] = key
   itterationsScores++
   console.log(`Ітерація номер ${itterationsScores}. Масив: ${scores3}`)
}

console.log()
console.log(scores3)
console.log(itterationsScores)
console.log()
// =====================================================================================================
// Завдання 4. В кожному вже вивів
// =====================================================================================================

// =====================================================================================================
// Завдання 5
// =====================================================================================================
console.log("Завдання 5")

let names = ["John", "Paul", "Olga", "Oder", "Olaf", "Andrew", "Abrams", "Peter", "Tina", "Jack", "Peter"]

let x = names.sort()

console.log(names)

function includeInArr(a, elem) {
   let start = 0
   let end = a.length
   while (start <= end) {
      const middle = Math.floor((start + end) / 2)
      if (a[middle] === elem) {
         return middle
      }
      if (a[middle] < elem) start = middle + 1
      if (a[middle] > elem) end = middle - 1
   }
}

console.log(`The index of Olga is ${includeInArr(x, "Olga")}`)
console.log()

// =====================================================================================================
// Завдання 6
// =====================================================================================================
console.log("Завдання 6")

let duneNames = [
   "Paul",
   "Stilgar",
   "Leto",
   "Duncan",
   "Gurney",
   "Chani",
   "Rabban",
   "Fayd-Rauta",
   "Baron Harkonen",
   "Liet",
   "Shadam IV",
   "Irulan",
   "Alia",
]

let sortedDuneNames = duneNames.sort((el1, el2) => {
   return el1.length - el2.length
})
console.log(sortedDuneNames)
let findName = includeLenInArr(sortedDuneNames, 5)
if (findName) console.log(`The index of this name is ${findName}`)
else console.log("We do not have")

function includeLenInArr(a, len) {
   let start = 0
   let end = a.length
   while (start <= end) {
      const middle = Math.floor((start + end) / 2)
      if (a[middle].length === len) {
         return middle
      }
      if (a[middle].length < len) start = middle + 1
      if (a[middle].length > len) end = middle - 1
   }
}
