// What is a call back function?

// a callback function is a function that is passed into another function as an argument

// there are two types of callbacks
// Synchronous and asynchronous callbacks

// Synchronous callbacks are executed immediately
// Asynchronous callbacks are executed at a later time
// example of synchronous

// function myFunction(name, callBack){
//     console.log(`My name is :${name}`)
//     callBack()
// }

// myFunction('Bright', callBack)

// callbackfunction

// function callBack(){
//     console.log('I am a callback function')
// }

// callback functions using the arrow functions

// const myFunction = (name, callBack) => {
//     console.log("My name is " + name)
// callBack(name)
// }

// const callBack = (name)=>{
//     console.log("I am a callBack FUnction initiated by " + name)
// }

// myFunction("Bright", callBack)

// Asynchronous callbacks

// function myFunction(fn){
//     console.log("I am a higher order function")
// }

// myFunction(callBack)
// function callBack(){
//     console.log("I am a callback function for the button element!!!")
// }

// setTimeout(callBack, 3000)

const addBtn = document.querySelector("#myBtn")
addBtn.addEventListener("click", ()=>{
    console.log("I am a callback function for the button element!!!")
})


// Thank you!!!