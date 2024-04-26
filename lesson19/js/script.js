"use strict"

// ========= Задача 1 ==============
/*
Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. 
При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.
*/
const collectionWrapper = document.querySelector(".collection")
if (collectionWrapper) {
   collectionWrapper.addEventListener("click", nextCollectionRed)
   function nextCollectionRed(e) {
      const target = e.target
      if (target.closest(".collection__item")) {
         const currentElement = target.closest(".collection__item")
         let item = currentElement
         while (item !== null) {
            item.style.backgroundColor = "red"
            item = item.nextElementSibling
         }
      }
   }
}
// =================================
// =================================

// ========= Задача 2 ==============
/*
Задача 2. Дано 5 елементів input. 
При введенні значення у якийсь із них необхідно автоматично заповнювати інші 
(усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), 
усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)
*/
const inputWrapper = document.querySelector("#input-wrapper")
if (inputWrapper) {
   inputWrapper.addEventListener("input", nextInput)
   function nextInput(e) {
      const target = e.target
      if (target.closest(".task-input")) {
         const targetValue = target.value

         // const currentElement = target.closest(".task-input")

         const currentLabel = target.closest(".tasks__label")

         let item = currentLabel
         let counter = parseInt(targetValue)
         while (item !== null) {
            item.firstElementChild.value = counter++
            item = item.nextElementSibling
         }
         item = currentLabel
         counter = parseInt(targetValue)
         while (item !== null) {
            item.firstElementChild.value = counter--
            item = item.previousElementSibling
         }
      }
   }
}
// =================================
// =================================

// ========= Задача 3 ==============
/*
Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами 
(кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). 
При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.
*/
const listWrapper = document.querySelector("#list-area")
if (listWrapper) {
   for (let i = 0; i < 5; i++) {
      const randomListLength = 1 + Math.floor(Math.random() * 10)
      const ul = document.createElement("ul")
      ul.className = "list-area__list"
      for (let j = 0; j < randomListLength; j++) {
         const randomNumber = 1 + Math.floor(Math.random() * 100)
         const li = document.createElement("li")
         li.className = "list-area__item"
         li.textContent = randomNumber
         ul.append(li)
      }
      listWrapper.append(ul)
   }
}

const listButton = document.querySelector("#checkList")
if (listButton) {
   listButton.addEventListener("click", fillColor)
   function fillColor() {
      const listCollection = document.querySelectorAll(".list-area__list")
      listCollection.forEach(elem => {
         if (elem.children.length % 2 === 0) elem.style.border = "1px solid green"
      })
   }
}

// =================================
// =================================

// ========= Задача 4 ==============
/*
Задача 4. Дано 3 таблиці розмірності 3*3 з випадковими числами. 
Якщо відбувається клік на якійсь із клітинок, то до відповідної 
таблиці додається червона рамка (спробуйте додати можливість відображення 
кількості кліків біля назви таблиці з використанням відповідно доданого для цього атрибута).
*/
const tablesWrapper = document.querySelector("#tables-wrapper")
if (tablesWrapper) {
   for (let j = 0; j < 3; j++) {
      const table = document.createElement("table")
      table.className = "tables__table"
      for (let l = 0; l < 3; l++) {
         const tr = document.createElement("tr")
         for (let o = 0; o < 3; o++) {
            const td = document.createElement("td")
            tr.append(td)
         }
         table.append(tr)
      }
      tablesWrapper.append(table)
   }

   const clickCount = document.querySelector("#clickCount")
   const tablesIn = document.querySelectorAll(".tables__table")
   function clearBorder(list) {
      if (list) {
         list.forEach(elem => (elem.style.border = "none"))
      }
   }

   tablesWrapper.addEventListener("click", reactOnTd)

   let countClick = 0
   function reactOnTd(e) {
      clearBorder(tablesIn)
      const targetElem = e.target
      if (targetElem.tagName === "TD") {
         const thisTd = targetElem
         const thisTable = thisTd.closest(".tables__table")
         thisTable.style.border = "5px solid red"
         countClick++
         clickCount.textContent = countClick
      }
   }
}
// =================================
// =================================

// ========= Задача 5 ==============
/*
Задача 5. Відображаємо картки товарів, які користувач може вибирати. 
Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)
*/
const productWrapper = document.querySelector(".prod")
if (productWrapper) {
   productWrapper.addEventListener("click", getBorder)

   function getBorder(e) {
      const targetElem = e.target
      if (targetElem.closest(".prod__block")) {
         const currentBlock = targetElem.closest(".prod__block")
         currentBlock.classList.toggle("active")
      }
   }
}
// =================================
// =================================

// ========= Задача 6 ==============
/*
Задача 6. Дано список спортсменів. 
Потрібно сформувати список тих, які будуть брати участь у змаганні.
 При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. 
 При натисканні на зелену стрілку спортсмен переміщається у список для змагань. 
 При натисканні на червону стрілку спортсмен переміщається у загальний список.
*/

const allSportmansWrapper = document.querySelector("#allSportmans")
if (allSportmansWrapper) {
   allSportmansWrapper.addEventListener("click", chooseSportsman)

   function chooseSportsman(e) {
      const target = e.target
      if (target.closest(".sportsman__item")) {
         const thisSportsman = target.closest(".sportsman__item")
         thisSportsman.remove()
         const chosenSportsmanList = document.querySelector("#chosenList")
         chosenSportsmanList.append(thisSportsman)
         thisSportsman.classList.add("chosen")
      }
   }

   const chosenList = document.querySelector("#chosenList")
   chosenList.addEventListener("click", casyOutSportsman)

   function casyOutSportsman(e) {
      const target = e.target
      if (target.closest(".sportsman__item")) {
         const thisSportsman = target.closest(".sportsman__item")
         thisSportsman.remove()
         const allSportmansList = document.querySelector("#allSportmans")
         thisSportsman.classList.remove("chosen")

         allSportmansList.append(thisSportsman)
      }
   }
}
// =================================
// =================================

// ========= Задача 7.1 ==============
/*
7. Задача 1. 
Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану (top =0) і 
з випадковою швидкістю рухається вниз (у setInterval викликати метод, у якому додавати крок до top). 
Як тільки сніжинка досягає нижньої частини екрану (top>maxTop) вона знову повинна з’явитись у верхній частині екрану (top=0).
*/
const fallElem = document.querySelector("#fallElem")
if (fallElem) {
   const windowHeight = window.innerHeight
   let topPosition = -30

   setInterval(() => {
      if (topPosition <= windowHeight) {
         topPosition++
      } else topPosition = -30
      fallElem.style.top = topPosition + "px"
   }, 10)
}

// =================================
// =================================

// ========= Задача 7.2 ==============
/*
Задача. Ловля тараканів. Зображення тараканів з’являються в центрі 
контейнера і випадковим чином «розбігаються» у випадкових напрямках. 
При кліку на зображенні таракана його рух припиняється і виводиться зображення сплячого таракана.
*/
const gameFieldBags = document.querySelectorAll(".game-field__bag")

if (gameFieldBags.length > 0) {
   const button = document.querySelector(".game-field__button")
   button.addEventListener("click", startGame)

   function startGame() {
      const gameFieldName = document.querySelector(".game-field")
      gameFieldName.classList.remove("active")
      let intervals = []

      gameFieldBags.forEach(elem => {
         const randomPosition = Math.floor(Math.random() * 580)
         const randomPositionTop = Math.floor(Math.random() * 580)

         let thisPosition = 300
         let thisTopPosition = 300

         const interval = setInterval(() => {
            if (thisPosition > randomPosition) {
               thisPosition -= 5
               elem.style.left = Math.max(thisPosition, randomPosition) + "px"
            } else if (thisPosition < randomPosition) {
               thisPosition += 5
               elem.style.left = Math.min(thisPosition, randomPosition) + "px"
            }

            if (thisTopPosition > randomPositionTop) {
               thisTopPosition -= 5
               elem.style.top = Math.max(thisTopPosition, randomPositionTop) + "px"
            } else if (thisTopPosition < randomPositionTop) {
               thisTopPosition += 5
               elem.style.top = Math.min(thisTopPosition, randomPositionTop) + "px"
            }

            if (thisPosition === randomPosition && thisTopPosition === randomPositionTop) {
               clearInterval(interval)
            }
         }, 1)

         intervals.push(interval)
      })

      const gameField = document.querySelector(".game-field")
      gameField.addEventListener("mouseover", catchBag)

      function catchBag(e) {
         const target = e.target

         if (target.closest(".game-field__bag")) {
            // const gameField = document.querySelector(".game-field")
            gameFieldName.classList.add("active")
            intervals.forEach(interval => clearInterval(interval))
         }
      }
   }
}

// =================================
// =================================
