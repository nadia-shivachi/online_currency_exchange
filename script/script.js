{
  const convertCurrency = (resultElement) => {
    const formElement = document.querySelector(".js-form");
    const plnElement = document.querySelector(".js-fieldPLN");
    const currencyElement = document.querySelector(".js-currency");

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const amount = plnElement.value;
      const currency = currencyElement.value;
      let result = amount / currency;

      resultElement.innerText = result.toFixed(2);
    });
  };

  const resetResult = (resultElement) => {
    const resetElement = document.querySelector(".js-reset");

    resetElement.addEventListener("click", () => {
      resultElement.innerText = "N/A";
    });
  };

  const init = () => {
    const resultElement = document.querySelector(".js-result");
    convertCurrency(resultElement);
    resetResult(resultElement);
  };

  init();
}
