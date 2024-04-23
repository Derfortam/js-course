"use strict"

// ========= Задача 1 ==============
/*
Розробити калькулятор
*/

const firstNum = document.getElementById("first-num")
const secondNum = document.getElementById("second-num")

const numResult = document.getElementById("task1Result")

function getValue(item) {
   return parseFloat(item.value)
}

function calculate(param) {
   let firstInputValue = getValue(firstNum)
   let secondInputValue = getValue(secondNum)

   let result
   switch (param) {
      case "sum":
         result = firstInputValue + secondInputValue
         break
      case "minus":
         result = firstInputValue - secondInputValue
         break
      case "multi":
         result = firstInputValue * secondInputValue
         break
      case "divis":
         if (secondInputValue === 0) result = "Ділення на нуль"
         else result = firstInputValue / secondInputValue
         break
   }
   numResult.textContent = result
}

// ===================================================
// ===================================================
// ========= Задача 2 ==============
/*
Зробити конвертер валют (курси валют – константи у скрипті)
*/

let grn = document.getElementById("sumInGrn")

const grnInEuro = 39.79
const grnInDolar = 42.39

const dollarResult = document.getElementById("sumInDolar")
const euroResult = document.getElementById("sumInEuro")

function convertMoney() {
   let sumGrn = getValue(grn)
   let dollars = sumGrn / grnInDolar
   dollarResult.textContent = dollars.toFixed(2)

   let euros = sumGrn / grnInEuro
   euroResult.textContent = euros.toFixed(2)
}
// ===================================================
// ===================================================
// ========= Задача 3 ==============
/*
Користувач задає рік народження. Визначити кількість років користувача.
*/

const yourYear = document.getElementById("yearBirth")

const outputYear = document.getElementById("yearResult")
function findYear() {
   const yearNow = 2024
   if (yourYear) {
      const userYearValue = getValue(yourYear)
      let resultDiff = yearNow - userYearValue
      if (userYearValue > yearNow) outputYear.textContent = "Невірно введені дані"
      else outputYear.textContent = resultDiff
   }
}
// ===================================================
// ===================================================
// ========= Задача 4 ==============
/*
Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки 
випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)
*/

let wishList = ["Тур на Еверест", "Відпочинок на Мальдівах", "Купити каделак (рожевий)", "Бомбити русню", "Зняти фільм", "Отримати сертифікат пілота"]

const list = document.querySelector(".tasks__list")
let indexArr = []
for (let i = 0; i < 3; i++) {
   let randomIndex = Math.floor(Math.random() * wishList.length)
   if (!indexArr.includes(randomIndex)) indexArr.push(randomIndex)
}

for (let i = 0; i < 3; i++) {
   let res = `<div>${i + 1}) ${wishList[indexArr[i]]}</div>`
   list.innerHTML += res
}
// ===================================================
// ===================================================
// ========= Задача 5 ==============
/*
Відобразити таблицю 3*4 з 
випадковими числами (її треба динамічно створити і вставити на сторінку)
*/
const newTable = document.getElementById("newTable")
let resultForTable = ""
resultForTable += '<table class="taks__table">'
for (let i = 0; i < 4; i++) {
   resultForTable += "<tr>"
   for (let j = 0; j < 3; j++) {
      let randomNumber = Math.floor(Math.random() * 100)
      resultForTable += `<td>${randomNumber}</td>`
   }
   resultForTable += "</tr>"
}
resultForTable += "</table>"
newTable.innerHTML = resultForTable

// ===================================================
// ===================================================
// ========= Задача 6 ==============
/*
Користувач задає кількість оцінок і натискає 
на кнопку «get table». В результаті формується 
таблиця з input, куди користувач вводить оцінки. 
Після цього натискає на кнопку “get sum” і знаходить середнє значення.
*/

function getTable() {
   const scoresNum = document.querySelector("#scoresNum")
   const tableWrapper = document.querySelector("#scoresTable")
   const count = getValue(scoresNum)
   if (count > 0 && !isNaN(count)) {
      let tables = ""
      for (let i = 0; i < count; i++) {
         tables += `
         <tr>
            <td>
               <input type="number" class="tasks__number scores">
            </td>
         </tr>`
      }
      let result = `
      <table class="taks__table">
         ${tables}
      </table>
      `
      tableWrapper.innerHTML = result
   }
}

function getTableAverage() {
   const tableScores = document.querySelectorAll(".scores")
   const resultForTsk6 = document.querySelector("#task6Result")
   if (tableScores && resultForTsk6) {
      let fullSum = 0
      tableScores.forEach(elem => {
         fullSum += getValue(elem)
      })
      let result = fullSum / tableScores.length
      resultForTsk6.textContent = result.toFixed(1)
   }
}
// ===================================================
// ===================================================
// ========= Задача 7 ==============
/*
Подорож складається з 3 етапів. На кожному етапі 
користувач може вибрати один з видів транспорту 
(авто, автобус, автобус - випадаючий список), харчування 
(сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). 
Ціни визначте самі. Підрахувати загальну вартість.
*/

const checkboxEat = document.querySelectorAll(".eat")
const radioGuid = document.querySelectorAll(".guid")
const transportSelect = document.querySelector(".tasks__select")
const task7Res = document.querySelector("#task7Result")
function getTravelSum() {
   let totalSum = 0
   if (checkboxEat.length > 0) {
      checkboxEat.forEach(elem => {
         if (elem.checked) totalSum += getValue(elem)
      })
   }
   if (radioGuid.length > 0) {
      radioGuid.forEach(elem => {
         if (elem.checked) totalSum += getValue(elem)
      })
   }
   if (transportSelect) totalSum += getValue(transportSelect)

   task7Res.textContent = totalSum
}
