



window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // const values  = { amount: 11000, years: 4, rate: 11.9 };
  const values  = { amount: 1200, years: 1, rate: 12 };
  const inputAmount = document.getElementById("loan-amount");
  const inputYears = document.getElementById("loan-years");
  const inputRate = document.getElementById("loan-rate");

  inputAmount.value = values.amount
  inputYears.value = values.years
  inputRate.value = values.rate

 
  console.log()

  // console.log(inputAmount.value)
  // console.log(inputYears)
  // console.log(inputRate)
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentAmount = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(currentAmount));
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // const p = inputAmount.value
  const i = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  const answer = (i * values.amount ) / (1 - Math.pow((1 + i), -n))
  return answer.toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyCost = document.getElementById("monthly-payment");
  monthlyCost.innerText = monthly;
  console.log('hi')
}