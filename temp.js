function TemperatureReset() {
  if (confirm("Are you sure want to reset the converter?")) {
    document.getElementById("inputTemperature").value = "";
    document.getElementById("toUnit").value = "Kelvin";
    document.getElementById("fromUnit").value = "Celsius";
    document.getElementById("outputTemperature").value = "";

    var inputField = document.getElementById("inputTemperature");
  }
}

function TemperatureCalculate() {
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  var inputTemperature = document.getElementById("inputTemperature").value;
  var outputTemperature = document.getElementById("outputTemperature");

  ShowFormula(fromUnit, toUnit);

  var result = ConverterTemperature(inputTemperature, fromUnit, toUnit);
  outputTemperature.value = result.toFixed(2);
}

function ConverterTemperature(inputTemperature, fromUnit, toUnit) {
  fromUnit = fromUnit.toLowerCase();
  toUnit = toUnit.toLowerCase();
  inputTemperature = Number(inputTemperature);
  var outputTemperature;

  if (fromUnit == "celsius") {
    if (toUnit == "kelvin") {
      outputTemperature = inputTemperature + 273.15;
    } else if (toUnit == "fahrenheit") {
      outputTemperature = inputTemperature * (9 / 5) + 32;
    } else if (toUnit == "rankine") {
      outputTemperature = (inputTemperature * 9) / 5 + 491.67;
    } else {
      outputTemperature = inputTemperature;
    }
  } else if (fromUnit == "kelvin") {
    if (inputTemperature < 0) {
      alert("Kelvin temperature should not be less than zero.");
      return;
    }
    if (toUnit == "celsius") {
      outputTemperature = inputTemperature - 273.15;
    } else if (toUnit == "fahrenheit") {
      outputTemperature = ((inputTemperature - 273.15) * 9) / 5 + 32;
    } else if (toUnit == "rankine") {
      outputTemperature = (inputTemperature * 9) / 5 + 491.67;
    } else {
      outputTemperature = inputTemperature;
    }
  } else if (fromUnit == "fahrenheit") {
    if (toUnit == "celsius") {
      outputTemperature = ((inputTemperature - 32) * 5) / 9;
    } else if (toUnit == "kelvin") {
      outputTemperature = ((inputTemperature + 459.67) * 5) / 9;
    } else if (toUnit == "rankine") {
      outputTemperature = inputTemperature + 459.67;
    } else {
      outputTemperature = inputTemperature;
    }
  } else if (fromUnit == "rankine") {
    if (inputTemperature < 0) {
      alert("Rankine temperature should not be less than zero.");
      return;
    }
    if (toUnit == "celsius") {
      outputTemperature = ((inputTemperature - 491.67) * 5) / 9;
    } else if (toUnit == "kelvin") {
      outputTemperature = (inputTemperature * 5) / 9;
    } else if (toUnit == "fahrenheit") {
      outputTemperature = inputTemperature - 459.67;
    } else {
      outputTemperature = inputTemperature;
    }
  }
  return outputTemperature;
}

function ShowFormula(fromUnit, toUnit) {
  var formulaText = "";

  if (fromUnit == "Celsius" && toUnit == "Kelvin") {
    formulaText = "K = C + 273.15";
  } else if (fromUnit == "Celsius" && toUnit == "Fahrenheit") {
    formulaText = "F = (9/5)C + 32";
  } else if (fromUnit == "Celsius" && toUnit == "Rankine") {
    formulaText = "R = (9/5)C + 491.67";
  } else if (fromUnit == "Kelvin" && toUnit == "Celsius") {
    formulaText = "C = K - 273.15";
  } else if (fromUnit == "Kelvin" && toUnit == "Fahrenheit") {
    formulaText = "F = (K - 273.15) * 9/5 + 32";
  } else if (fromUnit == "Kelvin" && toUnit == "Rankine") {
    formulaText = "R = K * 1.8";
  } else if (fromUnit == "Fahrenheit" && toUnit == "Celsius") {
    formulaText = "C = (F - 32) * 5/9";
  } else if (fromUnit == "Fahrenheit" && toUnit == "Kelvin") {
    formulaText = "K = (F + 459.67) * 5/9";
  } else if (fromUnit == "Fahrenheit" && toUnit == "Rankine") {
    formulaText = "R = F + 459.67";
  } else if (fromUnit == "Rankine" && toUnit == "Celsius") {
    formulaText = "C = (R - 491.67) * 5/9";
  } else if (fromUnit == "Rankine" && toUnit == "Kelvin") {
    formulaText = "K = R * 5/9";
  } else if (fromUnit == "Rankine" && toUnit == "Fahrenheit") {
    formulaText = "F = R - 459.67";
  } else {
    formulaText = "Formula not available";
  }

  function formatResult(inputTemperature, outputTemperature, fromUnit, toUnit) {
    if (fromUnit.toLowerCase() == "celsius") {
      fromUnit = "℃";
    } else if (fromUnit.toLowerCase() == "kelvin") {
      fromUnit = "K";
    } else if (fromUnit.toLowerCase() == "fahrenheit") {
      fromUnit = "℉";
    } else if (fromUnit.toLowerCase() == "rankine") {
      fromUnit = "°R";
    }

    if (toUnit.toLowerCase() == "celsius") {
      toUnit = "℃";
    } else if (toUnit.toLowerCase() == "kelvin") {
      toUnit = "K";
    } else if (toUnit.toLowerCase() == "fahrenheit") {
      toUnit = "℉";
    } else if (toUnit.toLowerCase() == "rankine") {
      toUnit = "°R";
    }

    return inputTemperature + fromUnit + " = " + outputTemperature + toUnit;
  }
}
