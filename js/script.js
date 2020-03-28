const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const swap = document.getElementById('swap');
const quantityOne = document.getElementById('input');
const quantityTwo = document.getElementById('quantity-two');

function getExchangeRate() {

    const exchangeRates = fetch(`https://api.exchangeratesapi.io/latest?base=${currencyOne.value}`);
    exchangeRates.then(json => {
        json.json().then(data => {

            const currencyTwoRate = data.rates[currencyTwo.value];
            quantityTwo.textContent = (quantityOne.value * currencyTwoRate).toFixed(2);
        })
    }).catch(e => console.log(e));

}

function swapCurrency() {
    let temp = currencyOne.value;

    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    getExchangeRate();
}

currencyOne.addEventListener('change', getExchangeRate);
currencyTwo.addEventListener('change', getExchangeRate);
quantityOne.addEventListener('change', getExchangeRate);
swap.addEventListener('click', swapCurrency);
getExchangeRate();