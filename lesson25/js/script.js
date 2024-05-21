"use strict"
/*
Задача 1. Дано клас PhoneNumber.
Створити функцію перетворення до string, 
при якому на основі номера виводиться оператор (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)
*/
class PhoneNumber {
   constructor(number) {
      this.number = number
   }
   indetifyNumber(number) {
      let result
      const mtc = /\b050/
      const kyivstar = /\b096/
      if (mtc.test(number)) result = "MTC"
      else if (kyivstar.test(number)) result = "Kyivstar"
      else result = "Something new)"
      return result
   }
   [Symbol.toPrimitive](hint) {
      let result
      switch (hint) {
         case "string":
            result = `${this.number} -> ${this.indetifyNumber(this.number)}`
            break
         default:
            result = null
            break
      }
      return result
   }
}

const randomNumber = new PhoneNumber("05043443235")
console.log(String(randomNumber))

console.log()
console.log()

// ================================================================================================================
/*
Задача 2. Дано Shop  -- клас, що містить список товарів 
(масив об’єктів класу Product (назва, ціна, кількість одиниць). 
Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»
*/
class Product {
   constructor(name, price, value) {
      this.name = name
      this.price = price
      this.value = value
   }
   [Symbol.toPrimitive](hint) {
      let result
      switch (hint) {
         case "string":
            result = this.name
            break
         case "number":
            result = this.price
            break
         default:
            result = null
            break
      }
      return result
   }
}
const listOfProducts = [
   new Product("PC-34", 13000, 32),
   new Product("Aiphone", 45000, 102),
   new Product("Audi", 390000, 19),
   new Product("Rolex", 500000, 32),
   new Product("Asus Laptop", 18000, 100),
]
class Shop {
   constructor(listProduct) {
      this.listProduct = listProduct
   }
   [Symbol.iterator]() {
      this.currentIndex = 0
      return this
   }
   next() {
      if (this.currentIndex < this.listProduct.length) {
         let product = this.listProduct[this.currentIndex]
         let sum = product.price * product.value
         this.currentIndex++
         return {
            done: false,
            value: {
               productName: product.name,
               totalSum: sum,
            },
         }
      }
      return {done: true}
   }
}

const shop = new Shop(listOfProducts)

for (const item of shop) {
   console.log(item)
}
console.log()
console.log()

// ================================================================================================================
/*
Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.
*/

function* generateRandomNumbers(length, border) {
   let result = []
   while (result.length < length) {
      const randomNumber = Math.floor(Math.random() * border)
      if (randomNumber % 2 === 0) result.push(randomNumber)
   }
   yield result
}
const generator = generateRandomNumbers(5, 100)
for (let num of generator) {
   console.log(num)
}
console.log()
console.log()

// ================================================================================================================
/*
Задача 4. Використовуючи один з АРІ 
https://github.com/public-apis/public-apis#animals
та функцію fetch організувати завантаження та відображення даних
*/

fetch("https://api.thecatapi.com/v1/images/search?limit=10")
   .then(response => response.json())
   .then(data => {
      const image = document.querySelector("#image")
      data.forEach(elem => {
         const img = document.createElement("img")
         img.setAttribute("src", elem.url)
         image.append(img)
      })
   })
   .catch(err => {
      const image = document.querySelector("#image")
      image.innerHTML = "Error! Не вдалося завантажити дані"
   })
   .finally(() => {
      alert("Дякуємо за користування")
   })
