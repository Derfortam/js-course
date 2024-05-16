"use strict"
// практикувався, але досі не розумію, чому значення із wearmap не зникло, коли я змінив змінну
let is = {name: "David"}
let visit = new WeakMap()
visit.set(is, "line")
console.log(visit)
is = null
console.log(visit)
is = 15
console.log(visit)

console.log()
console.log()
// =============================================================
// ==========================  ДЗ  =============================

/*
Задача 5. Дано список URL адрес. 
Підрахувати кількість адрес, що відносяться до кожного із доменів (edu, com, org,...).
*/
const urlAdresses = [
   "http://example1.org",
   "https://example2.org",
   "http://example3.com",
   "https://example4.gov",
   "http://example5.com",
   "https://example6.com",
   "http://example7.edu",
   "https://example8.edu",
   "http://example9.org",
   "https://example10.edu",
   "http://example11.gov",
   "https://example12.com",
   "http://example13.com",
   "https://example14.gov",
   "http://example15.com",
   "https://example16.edu",
   "http://example17.gov",
   "https://example18.com",
   "http://example19.edu",
   "https://example20.com",
]
// можна зробити так

// function findRegexFor(item, sufix) {
//    const regex = new RegExp(`${sufix}`, "gi")
//    let count = 0
//    item.forEach(element => {
//       if (element.match(regex)) count++
//    })
//    return count
// }

// console.log("Знайдених сайтів із доменом gov: " + findRegexFor(urlAdresses, "gov"))
// console.log("Знайдених сайтів із доменом org: " + findRegexFor(urlAdresses, "org"))
// console.log("Знайдених сайтів із доменом edu: " + findRegexFor(urlAdresses, "edu"))
// console.log("Знайдених сайтів із доменом com: " + findRegexFor(urlAdresses, "com"))

// або так

const webSitesMap = new Map()
for (const item of urlAdresses) {
   let sufix = webSitesMap.get(item.slice(-3)) ?? 0
   webSitesMap.set(item.slice(-3), sufix + 1)
}
console.log(webSitesMap)

console.log()
console.log()
// =============================================================================
/*
Задача 6.  Дано масив книг (назва, рік видання, автор, ціна). 
Підрахувати загальну вартість книг для кожного із авторів.
*/

// const booksArr = [
//    ["Lord Of the Rings", 1959, "John Ruel Tolkin", 1200],
//    ["Dune", 1953, "Frank Herbert", 800],
//    ["Chronicle of Narnia", 1962, "Claiv Luis", 1000],
//    ["Space Triology", 1968, "Claiv Luis", 3000],
//    ["The name Of the Wind", 2014, "Patrick Roffus", 600],
//    ["The afraid of...", 2017, "Patrick Roffus", 1000],
//    ["Voise from desert", 2025, "Alan Elerd", 2000],
//    ["Richer", 1979, "Stiven King", 700],
//    ["It", 1999, "Stiven King", 1100],
// ]
// const mapOfBook = new Map()
// for (const item of booksArr) {
//    let price = mapOfBook.get(item[2]) ?? 0
//    mapOfBook.set(item[2], price + item[3])
// }
// console.log(mapOfBook)

// ================ або =============

const booksArr = [
   {bookName: "Lord Of the Rings", year: 1959, artour: "John Ruel Tolkin", price: 1200},
   {bookName: "Dune", year: 1953, artour: "Frank Herbert", price: 800},
   {bookName: "Chronicle of Narnia", year: 1962, artour: "Claiv Luis", price: 1000},
   {bookName: "Space Triology", year: 1968, artour: "Claiv Luis", price: 3000},
   {bookName: "The name Of the Wind", year: 2014, artour: "Patrick Roffus", price: 600},
   {bookName: "The afraid of...", year: 2017, artour: "Patrick Roffus", price: 1000},
   {bookName: "Voise from desert", year: 2025, artour: "Alan Elerd", price: 2000},
   {bookName: "Richer", year: 1979, artour: "Stiven King", price: 700},
   {bookName: "It", year: 1999, artour: "Stiven King", price: 1100},
]
const mapOfBook = new Map()
for (const item of booksArr) {
   let price = mapOfBook.get(item.artour) ?? 0
   mapOfBook.set(item.artour, price + item.price)
}
console.log(mapOfBook)

console.log()
console.log()
// =============================================================================
/*
Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). 
Підрахувати для кожного клієнта кількість відвідувань.
*/
const webSiteVisiters = ["Ocie", "Alan_S", "Wizard-", "Angello20", "Ocie", "Frank-El", "Alan_I", "Alan_S", "Wizard", "Wizard-"]
const mapOfSiteVisiters = new Map()
for (const item of webSiteVisiters) {
   let count = mapOfSiteVisiters.get(item) ?? 0
   mapOfSiteVisiters.set(item, count + 1)
}
console.log(mapOfSiteVisiters)

console.log()
console.log()
// =============================================================================
/*
Задача 8. Дано масив студентів (піб, курс, факультет). 
Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.
*/
const studentsList = [
   {
      fullName: {
         name: "John",
         lastName: "Wilson",
      },
      course: 2,
      faculty: "Computer Science",
   },
   {
      fullName: {
         name: "Alan",
         lastName: "Piterson",
      },
      course: 1,
      faculty: "Social Science",
   },
   {
      fullName: {
         name: "Michael",
         lastName: "Kasanski",
      },
      course: 4,
      faculty: "Computer Science",
   },
   {
      fullName: {
         name: "Tom",
         lastName: "Wither",
      },
      course: 3,
      faculty: "Psychology",
   },
   {
      fullName: {
         name: "Harris",
         lastName: "Betrechson",
      },
      course: 2,
      faculty: "Ecology",
   },
   {
      fullName: {
         name: "Alia",
         lastName: "Milanowich",
      },
      course: 1,
      faculty: "Journalism",
   },
]
const differntFaculty = new Set()
for (const item of studentsList) {
   differntFaculty.add(item.faculty)
}
console.log(differntFaculty)
console.log(differntFaculty.size)

const studentsOfEachCourse = new Map()
for (const item of studentsList) {
   const count = studentsOfEachCourse.get(item.course) ?? 0
   studentsOfEachCourse.set(item.course, count + 1)
}
console.log(studentsOfEachCourse)

console.log()
console.log()
// =============================================================================
/* 
Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
Заокруглити вверх значення та підрахувати кількість різних показів.
*/
let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
const temperatureUnits = new Map()
for (const item of temperatures) {
   const count = temperatureUnits.get(item) ?? 0
   temperatureUnits.set(item, count + 1)
}
console.log(temperatureUnits)

const changesTemperatures = temperatures.map(el => Math.ceil(el))

const newTemperatureUnits = new Set()
for (const item of changesTemperatures) {
   newTemperatureUnits.add(item)
}
console.log(newTemperatureUnits)

console.log()
console.log()
// =============================================================================
/*
Задача 10 
Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. 
Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. 
Також підрахувати скільки всього студентів відвідують хоча б один гурток. 
*/
const historyClub = [
   "Alan",
   "Isabella",
   "Charlotte",
   "Amelia",
   "Mia",
   "Harper",
   "Evelyn",
   "Liam",
   "Noah",
   "William",
   "James",
   "Oliver",
   "Lucas",
   "Mason",
   "Logan",
]
const mathClub = ["Alan", "Olivia", "Emma", "Ava", "Sophia", "Isabella", "James", "Oliver", "Benjamin", "Elijah", "Lucas", "Mason"]

const historyAndMathClubs = new Map()
for (const item of historyClub) {
   if (mathClub.includes(item)) historyAndMathClubs.set(item, "В обох")
}
console.log(historyAndMathClubs)

const onlyOneClub = new Set()
for (const item of historyClub) {
   if (!mathClub.includes(item)) onlyOneClub.add(item, "В одному")
}
for (const item of mathClub) {
   if (!historyClub.includes(item)) onlyOneClub.add(item, "В одному")
}
console.log(onlyOneClub)

console.log()
console.log()
// =============================================================================
/*
Задача 12. 
Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). 
Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). 
Якщо користувач натискає на «Ок», то видаляти цю задачу.
*/

const addToStorage = document.querySelector("#addToStorage")
let objectiveList = JSON.parse(localStorage.getItem("objective")) ?? []
addToStorage.addEventListener("click", objectiveActions)
function objectiveActions(e) {
   const objective = document.querySelector("#objective")
   const objectiveValue = objective.value
   objectiveList.push(objectiveValue)
   localStorage.setItem("objective", JSON.stringify(objectiveList))
   objective.value = ""
}
function askObjective() {
   if (objectiveList.length > 0) {
      setTimeout(() => {
         let objectiveCollection = JSON.parse(localStorage.getItem("objective"))
         const randomTask = Math.floor(Math.random() * objectiveList.length)

         const doesUserDoneObjective = confirm(`Have you completed this task? -> ${objectiveCollection[randomTask]}`)
         if (doesUserDoneObjective) {
            objectiveList = objectiveList.filter(el => el !== objectiveCollection[randomTask])
            objectiveCollection = objectiveCollection.filter(el => el !== objectiveCollection[randomTask])
            localStorage.setItem("objective", JSON.stringify(objectiveCollection))
         }
         askObjective()
      }, 3000)
   } else {
      setTimeout(() => {
         askObjective()
      }, 1000)
   }
}

askObjective()
// const doesUserDoneObjective = confirm("Does you done this task?")
