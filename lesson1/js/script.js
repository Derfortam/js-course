"use strict"
alert("Task 0. Exspression 1")
const taskZeroExspressionOneNumOne = parseFloat(prompt("Enter number 'a'"))
const taskZeroExspressionOneNumTwo = parseFloat(prompt("Enter number 'b'"))
let taskZeroExspressionOneResult =
  taskZeroExspressionOneNumOne + 12 + taskZeroExspressionOneNumTwo
document.write(
  `So, the Exspresion 1 is equal to ${taskZeroExspressionOneResult}`
)
alert(`So, the Exspresion 1 is equal to ${taskZeroExspressionOneResult}`)

alert("Task 0. Exspression 2")

const taskZeroExspressionTwoNumOne = parseFloat(prompt("Enter number 'a'"))
const taskZeroExspressionTwoNumTwo = parseFloat(prompt("Enter number 'b'"))

let taskZeroExspressionTwoResult = Math.cbrt(
  (taskZeroExspressionTwoNumOne + taskZeroExspressionTwoNumTwo) /
    (2 * taskZeroExspressionTwoNumOne)
)

alert(`So, the Exspresion 2 is equal to ${taskZeroExspressionTwoResult}`)

alert("Task 0. Exspression 3")

const taskZeroExspressionThreeNumOne = parseFloat(prompt("Enter number 'a'"))
const taskZeroExspressionThreeNumTwo = parseFloat(prompt("Enter number 'b'"))
const taskZeroExspressionThreeNumThree = parseFloat(prompt("Enter number 'c'"))

const taskZeroExspressionThreeResult = Math.pow(
  (taskZeroExspressionThreeNumOne + taskZeroExspressionThreeNumTwo) *
    taskZeroExspressionThreeNumThree,
  1 / 3
)

alert(`So, the Exspresion 3 is equal to ${taskZeroExspressionThreeResult}`)
