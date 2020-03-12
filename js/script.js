const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

function getExchangeRate() {

    const exchangeRates = fetch(`https://api.exchangeratesapi.io/latest?base=${currencyOne.value}`);
    exchangeRates.then(json => {
        json.json().then(data => {

            const currencyTwoRate = data.rates[currencyTwo.value];
            rateElement.textContent = `1 ${currencyOne.value} = ${currencyTwoRate} ${currencyTwo.value}`
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
swap.addEventListener('click', swapCurrency);