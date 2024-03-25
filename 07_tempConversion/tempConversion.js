const convertToCelsius = function(number) {
  celsius = (number - 32) / (9/5);
  roundCelsius = Math.round(celsius * 10);
  return roundCelsius / 10;
};

const convertToFahrenheit = function(number) {
  fahren = (number * (9/5) + 32);
  roundFahren = Math.round(fahren * 10);
  return roundFahren / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
