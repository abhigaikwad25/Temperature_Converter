const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convert = document.querySelector("#button"); // Change from #convert to #button
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
  
  // This block will execute once when the window loads
  if (degree.value === "") {
    convert.setAttribute("disabled", "");
    setTimeout(() => {
      convert.removeAttribute('disabled');
    }, 4000);
  }
});

convert.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convert.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convert.innerHTML = "<span>Convert</span>"
  }, 1000);
});

function convertToCelsius() {
  let inputValue = degree.value;
  
  setTimeout(() => {
    if (tempType.value === "Fehrenheit") { // Correct the case here to match the select options
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C`;
    } else if (tempType.value === "Kelvin") { // Correct the case here to match the select options
      const KelvinToCelsius = inputValue - 273.15;
      celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;C`;
    }
  }, 1200)
}





