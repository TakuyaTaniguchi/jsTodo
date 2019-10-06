import { App } from "./src/App.js"
const app = new App();
app.mount();


const formElement = document.querySelector("#js-form");

formElement.addEventListener("submit",(event)=>{

})

const inputElement = document.querySelector("#js-form-input");
console.log(inputElement.value);