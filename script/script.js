let plnElement = document.querySelector(".js-fieldPLN")
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result")
let formElement = document.querySelector(".js-form")
let resetElement = document.querySelector(".js-reset")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = plnElement.value;
    let currency = currencyElement.value;

    let result = amount / currency;

    resultElement.innerText = result.toFixed(2);
});

resetElement.addEventListener("click", () => {

    resultElement.innerText = "N/A";
});