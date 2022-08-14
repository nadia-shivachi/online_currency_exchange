{
  const currencyConverter = () => {
    const formElement = document.querySelector(".js-form");
    const plnElement = document.querySelector(".js-fieldPLN");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      let amount = plnElement.value;
      let currency = currencyElement.value;
      let result = amount / currency;

      resultElement.innerText = result.toFixed(2);
    });
  };

  const resetResult = () => {
    const resetElement = document.querySelector(".js-reset");
    const resultElement = document.querySelector(".js-result");

    resetElement.addEventListener("click", () => {
      resultElement.innerText = "N/A";
    });
  };

  const init = () => {
    currencyConverter();
    resetResult();
  };

  init();
}
