"use strict"

// ========================================================================================================
// ========================================================================================================

// Задача 1. Виводити на екран скільки хвилин користувач вже на сайті
const getTimeOnSiteButton = document.getElementById("getTimeOnSite")
const dateNow = Date.now()
getTimeOnSiteButton.addEventListener("click", () => {
   const getTimeOnSiteButton = document.getElementById("timeOnSite")
   const dateClick = Date.now()
   const totalTime = new Date(dateClick - dateNow)
   const hours = totalTime.getUTCHours()
   const minutes = totalTime.getUTCMinutes()
   const seconds = totalTime.getUTCSeconds()

   const result = `${hours} : ${minutes} : ${seconds}`
   getTimeOnSiteButton.textContent = result
})
// або

const timeOnSiteSecond = document.getElementById("timeOnSiteSecond")
setInterval(() => {
   const dateClick = Date.now()
   const totalTime = new Date(dateClick - dateNow)
   const hours = totalTime.getUTCHours()
   const minutes = totalTime.getUTCMinutes()
   const seconds = totalTime.getUTCSeconds()

   let result
   if (hours < 10) {
      result = `0${hours} : ${minutes} : ${seconds}`
      if (minutes < 10) {
         result = `0${hours} : 0${minutes} : ${seconds}`
         if (seconds < 10) {
            result = `0${hours} : 0${minutes} : 0${seconds}`
         }
      }
   } else result = `${hours} : ${minutes} : ${seconds}`
   timeOnSiteSecond.textContent = result
})

// ========================================================================================================
// ========================================================================================================

// Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває.

const getUserTime = document.getElementById("getUserTime")

const userHours = document.getElementById("userHours")
const userMinutes = document.getElementById("userMinutes")

const isProcedureContinueButton = document.getElementById("isProcedureContinue")
const isProcedureContinueResult = document.getElementById("isProcedureContinueResult")

isProcedureContinueButton.addEventListener("click", () => {
   const timeNow = new Date()

   const userdateFull = new Date(
      timeNow.getFullYear(),
      timeNow.getMonth(),
      timeNow.getDate(),
      parseInt(userHours.value),
      parseInt(userMinutes.value),
      0
   )
   let diff = timeNow - userdateFull
   if (diff < 0 || userdateFull.getTime() > timeNow.getTime()) {
      isProcedureContinueResult.textContent = "Некоректний час"
   } else {
      let res = Math.floor(diff / 60000)
      res = 30 - res
      let answer
      if (res <= 30 && res > 0) answer = `Ще потрібно зачекати ${res} хвилин`
      else answer = "Процедура запершена"

      isProcedureContinueResult.textContent = answer
   }
})

// ========================================================================================================
// ========================================================================================================

// Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00)

// ========================================================================================================
// ========================================================================================================

// Задача 4. Створити функцію, яка дозволяє визначити,
// чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)

// ========================================================================================================
// ========================================================================================================

// Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,
// скільки хвилин залишилось до початку робочого дня (початок о 8.00).

// ========================================================================================================
// ========================================================================================================

// Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.

// ========================================================================================================
// ========================================================================================================

// Задача 7. Дано список студентів
// (ім’я і дата народження: у формі тексту (день.місяць.рік).
// Знайти найстаршого студента
const studentList = [
   {
      name: "Paul",
      dataBirthday: {
         year: 2005,
         month: 12,
         day: 6,
      },
   },
   {
      name: "Xavi",
      dataBirthday: {
         year: 2003,
         month: 6,
         day: 19,
      },
   },
   {
      name: "Alonzo",
      dataBirthday: {
         year: 2008,
         month: 8,
         day: 2,
      },
   },
   {
      name: "Leo",
      dataBirthday: {
         year: 2005,
         month: 12,
         day: 8,
      },
   },
]

const tasksList = document.querySelector(".tasks__list")
for (let i = 0; i < studentList.length; i++) {
   const li = document.createElement("li")
   li.className = "tasks__item"
   let result = `${studentList[i].name}. ${studentList[i].dataBirthday.year}р - ${studentList[i].dataBirthday.month}м - ${studentList[i].dataBirthday.day}д `
   li.append(result)
   tasksList.append(li)
}

let datesList = []
for (let i = 0; i < studentList.length; i++) {
   let result = {
      name: studentList[i].name,
      dataBirthday: new Date(studentList[i].dataBirthday.year, studentList[i].dataBirthday.month, studentList[i].dataBirthday.day),
   }
   datesList.push(result)
}
console.log(datesList)

const oldest = datesList.reduce(
   (prev, elem) => {
      if (elem.dataBirthday.getTime() < prev.date) {
         prev.name = elem.name
         prev.date = elem.dataBirthday.getTime()
      }
      return prev
   },
   {name: "", date: Infinity}
)
const whoIsOlderButton = document.getElementById("whoIsOlder")

whoIsOlderButton.addEventListener("click", () => {
   const olderOutput = document.getElementById("olderOutput")
   olderOutput.textContent = oldest.name
})

// ========================================================================================================
// ========================================================================================================

// Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.

// ========================================================================================================
// ========================================================================================================

// Задача  9. Користувачка планувала оформила дектретну відпустку на 200 днів
// (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.
function getValue(item) {
   return parseInt(item.value)
}

const getHolidayTime = document.getElementById("getHolidayTime")
getHolidayTime.addEventListener("click", () =>
   getIsTimeEnd("holidayYear", "holidayMonth", "holidayDay", "holidayDayCount", "isHolidayEnd", "Закінчилась", "Ще триває")
)
// ========================================================================================================
// ========================================================================================================

// Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день)
// та кількість днів придатності. Визначити чи є він придатним на даний момент.

function getIsTimeEnd(yearID, monthID, dayID, userDayID, outputID, lostMessage, succesMessage) {
   const productYear = document.getElementById(yearID)
   const productMonth = document.getElementById(monthID)
   const productDay = document.getElementById(dayID)
   const productDayFit = document.getElementById(userDayID)

   const output = document.getElementById(outputID)

   const year = getValue(productYear)
   const month = getValue(productMonth)
   const day = getValue(productDay)

   const expiryDate = getValue(productDayFit)

   const timeNow = new Date()
   output.classList.remove("error")
   try {
      if (isNaN(year) || year < 0 || year > timeNow.getFullYear() || isNaN(month) || month < 1 || month > 12 || isNaN(day) || day < 1 || day > 31) {
         throw new Error("Неправильно введена дата")
      }

      const productCreationTime = new Date(year, month - 1, day)
      if (productCreationTime > timeNow) throw new Error("Введена дата більша за реальну")

      productCreationTime.setDate(productCreationTime.getDate() + expiryDate)

      if (productCreationTime <= timeNow) {
         output.textContent = lostMessage
      } else {
         output.textContent = succesMessage
      }
   } catch (error) {
      output.classList.add("error")
      output.textContent = error.message
   }
}

const getProductTime = document.getElementById("getProductTime")
getProductTime.addEventListener("click", () =>
   getIsTimeEnd("productYear", "productMonth", "productDay", "productDayFit", "isFit", "Дата придатності вийшла", "Ще можна споживати")
)

// ========================================================================================================
// ========================================================================================================

// Задача 12. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.

let array = []
for (let i = 0; i < 1000; i++) {
   const randomNum = 1 + Math.floor(Math.random() * 800)
   array.push(randomNum)
}

function sortTime(arr, method = 1) {
   const timeStart = Date.now()
   if (method === 1) {
      let changed
      do {
         changed = false
         for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
               let tmp = arr[i - 1]
               arr[i - 1] = arr[i]
               arr[i] = tmp
               changed = true
            }
         }
      } while (changed)

      // console.log(arr)
      const timeEnd = Date.now()
      const result = timeEnd - timeStart
      return result
   } else {
      for (let k = 0; k < arr.length; k++) {
         const currentElement = arr[k]
         let i = k - 1
         while (i >= 0 && arr[k] > currentElement) {
            arr[i + 1] = arr[i]
            i = i - 1
         }
         arr[i + 1] = currentElement
      }
      const timeEnd = Date.now()
      const result = timeEnd - timeStart
      // console.log(arr)
      return result
   }
}

const arrOutput = document.querySelector(".tasks__arr")
arrOutput.textContent = array

const bubleMethod = document.querySelector("#bubleMethod")
const insertionMethod = document.querySelector("#insertionMethod")
bubleMethod.textContent = `Час сортування бульбашкою: ${sortTime(array)}c.`
insertionMethod.textContent = `Час сортування вставкою: ${sortTime(array, 2)}c.`

console.log("Час сортування бульбашкою " + sortTime(array))
console.log("Час сортування вставкою " + sortTime(array, 2))
