"use strict"
/*
Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
*/
let strArray = ["text something", "text something with numbers", "text something with 20", "1 text something", "text_1 something"]
let redexForStrArray = /[0-9]/
strArray.forEach(element => {
   if (redexForStrArray.test(element)) console.log(element)
})

console.log()
console.log()

// =========================================================================================
// =========================================================================================
/*
Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
*/
let strArray2 = ["text something", "text something with numbers", "text something with 20", "1 text something", "text_1 something"]
let redexForStrArray2 = /^\D*$/

strArray2.forEach(element => {
   if (redexForStrArray2.test(element)) console.log(element)
})
console.log()
console.log()
// =========================================================================================
// =========================================================================================
/*
Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
*/

let strArray3 = ["text something", "text something with numbers", "text something with 20", "1 text something", "text_1 something", "hht"]
let redexForStrArray3 = /[aoueiy]/
strArray3.forEach(element => {
   if (redexForStrArray3.test(element)) console.log(element)
})
console.log()
console.log()
// =========================================================================================
// =========================================================================================
/*
Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
*/
let strArray4 = ["tng", "text something with numbers", "text something with 20", "1 text something", "text_1 something", "hht"]

let redexForStrArray4 = /^[^aoueiy]*$/i

strArray4.forEach(element => {
   if (redexForStrArray4.test(element)) console.log(element)
})
console.log()
console.log()
// =========================================================================================
// =========================================================================================
/*
Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
*/

let strArray5 = ["tng", "tex3t something with numbers", "text s4omething with 20", "1 text something", "text_1 something", "hht"]
let redexForStrArray5 = /(1)|(3)/
// знову не розумію чому не працює /[^aoueiy]/g
strArray5.forEach(element => {
   if (redexForStrArray5.test(element)) console.log(element)
})
console.log()
console.log()
// =========================================================================================
// =========================================================================================
/*
Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
*/
let strArray6 = ["tng", "tex3t something with numbers", "text s4omething with 20", "1 text something", "text_1 something", "hht"]
let redexForStrArray6 = /\d/g
strArray6.forEach(element => {
   if (element.match(redexForStrArray6)) console.log(element.match(redexForStrArray6))
})
console.log()
console.log()
// =========================================================================================
// =========================================================================================
/*
Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
*/
let anyString = "lorem ipsum text? Is thes acidus - faleo loredo. Indis abiticus alibfa."
let punctuationRegex = /[^\p{L}\p{N}\s]/gu
let punctuationMatches = anyString.match(punctuationRegex)
console.log(punctuationMatches)

console.log()
console.log()

// =========================================================================================
// =========================================================================================
/*
Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
*/
let anyString2 = "lorem ipsum text? Is thes acidus - faleo loredo. Indis abiticus alibfa."
let changedString2 = anyString2.split(" ")
console.log(changedString2)

console.log()
console.log()

// =========================================================================================
// =========================================================================================
/*
Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
*/

const dateString = "14.12.2022"
// нехай для початку усі розділювачі - це крапки
function isStrDate(item) {
   const regex = /\d{2}\.\d{2}\.\d{4}/
   return regex.test(item)
}
console.log(isStrDate(dateString))

const dateString2 = "14.12.024"
console.log(isStrDate(dateString2))

console.log()
console.log()

// =========================================================================================
// =========================================================================================
/*
Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
*/

const textRandom =
   "Lorem Ipsum is simply dummy text 20 of 40 the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
function findCountSpecifiedNumbers(str, num) {
   const regex = new RegExp(`\\d{${num}}`, "g")
   const result = str.match(regex)

   return result.length
}
console.log(findCountSpecifiedNumbers(textRandom, 2))
console.log(findCountSpecifiedNumbers(textRandom, 4))

console.log()
console.log()

// =========================================================================================
// =========================================================================================
/*
Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
*/

const bankNum = "4142-3433-2323-3434"
function isBankNumber(item) {
   const regex = /\d{4}.\d{4}.\d{4}.\d{4}/
   const result = regex.test(item)
   return result
}
console.log(isBankNumber(bankNum))

console.log()
console.log()
// =========================================================================================
// =========================================================================================
/*
Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
*/
const webLink = "www.fealoredex.gov.ua"
function isWebLink(item) {
   const regex = /\.gov\./
   const result = regex.test(item)
   return result
}
console.log(isWebLink(webLink))

console.log()
console.log()
// =========================================================================================
// =========================================================================================
/*
Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
*/

const textWithYears = "2020, 2022, 2059, 2000, 2004, 2008, 2021, 2008, 2023, 2033, 2099"

function findYears(str) {
   const regex = /\b((202[2-9]|[3-9])|((203[0-9])|(20[4-9][0-9])))\b/g

   const result = str.match(regex)
   return result
}
console.log(findYears(textWithYears))

console.log()
console.log()
// =========================================================================================
// =========================================================================================
/*
Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
*/

const telRedgex = /^\+38|38/

const userNumberButton = document.querySelector("#userNumberButton")

userNumberButton.addEventListener("click", checkUserNumber)
function checkUserNumber(e) {
   const userNumber = document.querySelector("#userNumber")
   const number = userNumber.value

   const output = document.querySelector("#isThatUkraineNumber")
   if (telRedgex.test(number)) output.textContent = "Український номер"
   else output.textContent = "Не український номер"
}
// =========================================================================================
// =========================================================================================
/*
Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл. Замінити пробіл на дефіс.
*/

const showUserNameAndLastName = document.querySelector("#showUserNameAndLastName")
showUserNameAndLastName.addEventListener("click", returnUserName)
function returnUserName(e) {
   const userNameAndLastName = document.querySelector("#userNameAndLastName")
   let userNameAndLastNameValue = userNameAndLastName.value

   const newUserNameAndLastName = document.querySelector("#newUserNameAndLastName")
   userNameAndLastNameValue = userNameAndLastNameValue.trim()
   userNameAndLastNameValue = userNameAndLastNameValue.replace(" ", "-")
   newUserNameAndLastName.textContent = userNameAndLastNameValue
}
// =========================================================================================
// =========================================================================================
/*
Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
*/
const getStrTime = document.querySelector("#getStrTime")

getStrTime.addEventListener("click", setTimeStr)
function setTimeStr() {
   const userStrYear = document.querySelector("#userStrYear")
   const userStrMonth = document.querySelector("#userStrMonth")
   const userStrDay = document.querySelector("#userStrDay")

   const year = userStrYear.value
   const month = userStrMonth.value
   const day = userStrDay.value

   const strTime = document.querySelector("#strTime")
   if (year < 0 || month > 12 || month < 0 || day < 0 || day > 31) {
      strTime.textContent = "Неправильно введена дата"
      throw new Error("Неправильно введена дата")
   } else {
      let result = `${year}Y - ${month.padStart(2, "0")}M - ${day.padStart(2, "0")}D`
      strTime.textContent = result
   }
}
// =========================================================================================
// =========================================================================================
/*
Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
*/
function isWeekend(day) {
   day = day.toLowerCase()
   if (day !== "sun" && day !== "mon" && day !== "tue" && day !== "wed" && day !== "thu" && day !== "fri" && day !== "sat")
      throw new Error("Error. Name of day must be: sun, mon, tue, wed, thu, fri, sat")
   const regex = /(sun)|(sat)/
   if (regex.test(day)) return "Weekend"
   return "Work Day"
}

const getDayName = document.querySelector("#getDayName")

getDayName.addEventListener("click", returnWeekDay)

function returnWeekDay() {
   const dayName = document.querySelector("#dayName")
   const dayNameValue = dayName.value
   const displayElement = document.querySelector("#isWeekend")
   displayElement.textContent = ""
   if (dayNameValue.length > 3) {
      displayElement.textContent = "Неправильно введений день"
   } else {
      displayElement.textContent = isWeekend(dayNameValue)
   }
}
