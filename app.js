const milesInput = document.getElementById("miles");
const gallonsInput = document.getElementById("gallons");
const calculateButton = document.getElementById("calculate-mpg");
const mpgOutput = document.getElementById("mpg-output");
const clearButton = document.getElementById("clear");

calculateButton.addEventListener("click", () => {
  const miles = Number(milesInput.value);
  const gallons = Number(gallonsInput.value);
  const mpg = miles / gallons;
  mpgOutput.textContent = mpg;
});

clearButton.addEventListener("click", () => {
  milesInput.value = "";
  gallonsInput.value = "";
  mpgOutput.textContent = "";
});
