"use strict"

// Приклад. Дано перелік товарів у кошику. При зміні кількості одиниць товару збільшувати загальну
// вартість. Створити клас Product, що призначений для маніпуляцій товаром та клас ProductManager
// що оперує з усіма товарами (через подію передвати ідентифікатор товару та операцію, що зроблена

class Product {
   constructor(product) {
      this.product = product
      this.price = this.product.startPrice
      this.count = 1
      this.element = this.render()
   }
   createImageSection() {
      const img = document.createElement("img")
      img.setAttribute("src", this.product.image)
      img.setAttribute("alt", "product")
      img.className = "product__img"
      return img
   }
   createNameSection() {
      const name = document.createElement("h2")
      name.textContent = this.product.name
      name.className = "product__name"
      return name
   }
   createManipulateSection() {
      const section = document.createElement("div")
      section.className = "product__manipulate"

      const buttonSubtract = document.createElement("button")
      buttonSubtract.className = "product__button-manipulate"
      buttonSubtract.textContent = "-"
      buttonSubtract.addEventListener("click", this.subptractCount.bind(this))

      this.countSpan = document.createElement("span")
      this.countSpan.textContent = this.count

      const buttonAdd = document.createElement("button")
      buttonAdd.className = "product__button-manipulate"
      buttonAdd.textContent = "+"
      buttonAdd.addEventListener("click", this.addCount.bind(this))

      section.append(buttonSubtract)
      section.append(this.countSpan)
      section.append(buttonAdd)
      return section
   }
   createPriceSection() {
      const section = document.createElement("div")
      section.className = "product__section-price"

      const text = document.createElement("h3")
      text.className = "product__text"
      text.textContent = "Загальна сума:"

      this.priceSpan = document.createElement("span")
      this.priceSpan.textContent = this.product.startPrice

      section.append(text)
      section.append(this.priceSpan)
      return section
   }
   createDeleteSection() {
      const button = document.createElement("button")
      button.className = "product__delete"
      button.textContent = "X"
      button.addEventListener("click", this.removeElem.bind(this))
      return button
   }
   removeElem() {
      this.event("remove")
      this.productSection.remove()
   }
   addCount() {
      if (this.count < this.product.maxCount) {
         this.count++
         this.updateCounter()
         this.updateTotalSum()
         this.event("add")
      }
   }
   updateCounter() {
      this.countSpan.textContent = this.count
   }
   updateTotalSum() {
      if (this.count === 1) this.product.startPrice = this.price
      else this.product.startPrice = this.price * this.count

      this.priceSpan.textContent = this.product.startPrice
   }
   subptractCount() {
      if (this.count > 0) {
         this.count--
         this.updateCounter()
         this.updateTotalSum()
         this.event("subtract")
      }
   }

   event(eventName) {
      const event = new CustomEvent(eventName, {
         detail: {id: this.product.id},
         bubbles: true,
      })
      this.element.dispatchEvent(event)
   }

   render() {
      this.productSection = document.createElement("div")
      this.productSection.className = "product"
      this.productSection.append(this.createImageSection())
      this.productSection.append(this.createNameSection())
      this.productSection.append(this.createManipulateSection())
      this.productSection.append(this.createPriceSection())
      this.productSection.append(this.createDeleteSection())

      return this.productSection
   }
}

class ProductManager {
   constructor(productList, id) {
      this.id = id
      this.productList = productList
      this.el = this.render()
   }
   createTitle() {
      const title = document.createElement("h1")
      title.className = "item__title"
      title.textContent = "Продукт-менеджер (кошик)"
      return title
   }
   createProductSection() {
      const productContainer = document.createElement("div")
      productContainer.className = "item__products"
      if (this.productList.length > 0) {
         for (const productData of this.productList) {
            const product = new Product(productData)
            console.log(product.element)
            productContainer.append(product.element)
         }
      } else {
         productContainer.textContent = "Список порожній"
      }

      productContainer.addEventListener("add", event => {
         console.log("Подія 'add' спрацювала для продукту:")
         // this.updateFullSum()
         this.updateFullSum()
      })
      productContainer.addEventListener("subtract", event => {
         this.updateFullSum()
         console.log("Подія 'subtract' спрацювала для продукту:")
      })
      productContainer.addEventListener("remove", event => {
         console.log("Подія 'remove' спрацювала для продукту:" + this.productList.length)
         const productId = event.detail.id
         console.log(productId)
         this.productList = this.productList.filter(product => product.id !== productId)
         this.updateFullSum()
      })
      return productContainer
   }
   getFullSum() {
      this.fullSum = this.productList.reduce((prev, elem) => {
         return prev + elem.startPrice
      }, 0)
      return this.fullSum
   }
   updateFullSum() {
      this.totalSumSpan.textContent = this.getFullSum() + " ₴"
   }
   createTotalSumSection() {
      const totalSumSection = document.createElement("div")
      totalSumSection.className = "item__total-sum-section"
      totalSumSection.textContent = "Загальна сума: "
      this.totalSumSpan = document.createElement("span")
      this.totalSumSpan.textContent = this.getFullSum() + " ₴"
      totalSumSection.append(this.totalSumSpan)
      return totalSumSection
   }
   render() {
      const wrapper = document.createElement("div")
      wrapper.className = "item"
      wrapper.append(this.createTitle())
      wrapper.append(this.createProductSection())
      wrapper.append(this.createTotalSumSection())

      this.id.append(wrapper)
      return wrapper
   }
}

const productList = [
   {
      id: 1,
      image: "img/ball.webp",
      name: "Wilson GST Prime FB Official College SS19",
      startPrice: 3959,
      maxCount: 10,
   },
   {
      id: 2,
      image: "img/boots.webp",
      name: "Adidas Adizero Impact Cleats Grey IF2487",
      startPrice: 6490,
      maxCount: 3,
   },
   {
      id: 3,
      image: "img/gloves.webp",
      name: "WILSON NFL Receivers Gloves",
      startPrice: 2040,
      maxCount: 3,
   },
]

const root = document.getElementById("root")

new ProductManager(productList, root)

// =======================================================================================================
// =======================================================================================================

// Задача 2.
// Байрактар. З верхньої частини екрану у випадковій позиції
// по горизонталі з’являються танки, які їдуть вниз.
// При кліку на танк він вибухає і зникає з екрану.

// змінив вісь із гоизонтальної на виртикальну
class Tanks {
   constructor(time, end) {
      this.end = end
      this.time = time
      this.interval = null
      this.el = this.render()
   }
   createTank() {
      this.img = document.createElement("img")
      this.img.className = "filed__tank"
      this.img.setAttribute("src", "img/tank.svg")
      this.img.setAttribute("alt", "tank")
      this.img.addEventListener("click", this.boomEvent.bind(this))
      return this.img
   }
   boomEvent() {
      clearInterval(this.interval)
      this.img.setAttribute("src", "img/skull.svg")
      this.event("boom")
   }
   event(eventName) {
      const event = new CustomEvent(eventName, {
         bubbles: true,
      })
      this.el.dispatchEvent(event)
   }
   render() {
      const randomAxisY = 1 + Math.floor(Math.random() * 600)

      const tank = this.createTank()
      tank.style.width = "34px"
      tank.style.height = "34px"
      tank.style.position = "absolute"
      tank.style.right = 0

      tank.style.top = randomAxisY + "px"
      let i = 0
      this.interval = setInterval(() => {
         i++
         tank.style.right = i + "px"
         if (i > this.end) {
            clearInterval(this.interval)
         }
      }, this.time)
      this.el = tank
      return tank
   }
}
const field = document.getElementById("field")

class Field {
   constructor(number, position) {
      this.position = position
      this.number = number
      this.el = this.render()
   }

   render() {
      const section = document.createElement("div")
      section.className = "field"
      section.addEventListener("boom", event => {
         // this.updateFullSum()
         console.log("Подія 'boom' спрацювала для продукту:")
      })

      let j = 0
      while (j < this.number) {
         const randomTime = 1 + Math.floor(Math.random() * 20)

         section.append(new Tanks(randomTime, 600).el)
         j++
      }
      document.querySelector(this.position).append(section)
      // тут щоразу створюється нове поле, не знаю, як краще зробити, щоб заміняти поточне

      return section
   }
}

// new Field(12, "#field")

const startGameButton = document.querySelector("#startGame")
startGameButton.addEventListener("click", e => {
   const randomTanks = 1 + Math.floor(Math.random() * 13)
   new Field(randomTanks, "#field")
})
