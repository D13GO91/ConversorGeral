function ConverterMoedas() {
  lista01.innerHTML = "";
  lista02.innerHTML = "";

  var opt1 = document.createElement("option");
  opt1.value = "real";
  opt1.text = "R$";
  lista01.add(opt1, lista01.options[0]);

  var opt2 = document.createElement("option");
  opt2.value = "dolar";
  opt2.text = "U$";
  lista01.add(opt2, lista01.options[1]);

  var opt3 = document.createElement("option");
  opt3.value = "euro";
  opt3.text = "€";
  lista01.add(opt3, lista01.options[2]);

  var opt3 = document.createElement("option");
  opt3.value = "bitCoin";
  opt3.text = "BTC";
  lista01.add(opt3, lista01.options[3]);

  // Valores da lista 2

  var opt1 = document.createElement("option");
  opt1.value = "dolar";
  opt1.text = "U$";
  lista02.add(opt1, lista02.options[0]);

  var opt2 = document.createElement("option");
  opt2.value = "real";
  opt2.text = "R$";
  lista02.add(opt2, lista02.options[1]);

  var opt3 = document.createElement("option");
  opt3.value = "euro";
  opt3.text = "€";
  lista02.add(opt3, lista02.options[2]);

  var opt3 = document.createElement("option");
  opt3.value = "bitCoin";
  opt3.text = "BTC";
  lista02.add(opt3, lista02.options[3]);
}

function ConverterTemperatura() {
  lista01.innerHTML = "";
  lista02.innerHTML = "";

  var opt1 = document.createElement("option");
  opt1.value = "celsius";
  opt1.text = "°C";
  lista01.add(opt1, lista01.options[0]);

  var opt2 = document.createElement("option");
  opt2.value = "fahrenheit";
  opt2.text = "°F";
  lista01.add(opt2, lista01.options[1]);

  var opt3 = document.createElement("option");
  opt3.value = "kelvin";
  opt3.text = "K";
  lista01.add(opt3, lista01.options[2]);

  // Valores da lista 2

  var opt1 = document.createElement("option");
  opt1.value = "fahrenheit";
  opt1.text = "°F";
  lista02.add(opt1, lista02.options[0]);

  var opt2 = document.createElement("option");
  opt2.value = "celsius";
  opt2.text = "°C";
  lista02.add(opt2, lista02.options[1]);

  var opt3 = document.createElement("option");
  opt3.value = "kelvin";
  opt3.text = "K";
  lista02.add(opt3, lista02.options[2]);
}

function ConverterDistancia() {
  lista01.innerHTML = "";
  lista02.innerHTML = "";

  var opt1 = document.createElement("option");
  opt1.value = "km";
  opt1.text = "KM";
  lista01.add(opt1, lista01.options[0]);

  var opt2 = document.createElement("option");
  opt2.value = "anoLuz";
  opt2.text = "Ano-Luz";
  lista01.add(opt2, lista01.options[1]);

  // segunda lista

  var opt1 = document.createElement("option");
  opt1.value = "anoLuz";
  opt1.text = "Ano-Luz";
  lista02.add(opt1, lista02.options[0]);

  var opt2 = document.createElement("option");
  opt2.value = "km";
  opt2.text = "KM";
  lista02.add(opt2, lista02.options[1]);
}

function Converter() {
  var lista1 = document.getElementById("lista01").value;
  var lista2 = document.getElementById("lista02").value;
  var valor = document.getElementById("valor01").value;
  var resultado = 0;
  
  
  const vDolar = 5.0088;
  const vEuro = 5.5312;
  const vBit = 209921.03;
  

  if (lista1 == "real" && lista2 == "dolar") {
    resultado = parseFloat(valor) / vDolar;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "real" && lista2 == "real") {
    resultado = valor;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "real" && lista2 == "euro") {
    resultado = parseFloat(valor) / vEuro;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "real" && lista2 == "bitCoin") {
    resultado = parseFloat(valor) / vBit;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "dolar" && lista2 == "dolar") {
    resultado = valor;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "dolar" && lista2 == "real") {
    resultado = parseFloat(valor) * vDolar;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "dolar" && lista2 == "euro") {
    resultado = parseFloat(valor) * (vDolar / vEuro);

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "dolar" && lista2 == "bitCoin") {
    resultado = parseFloat(valor) / (vDolar / vBit);

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "euro" && lista2 == "dolar") {
    resultado = parseFloat(valor) / (vEuro / vDolar);

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "euro" && lista2 == "real") {
    resultado = parseFloat(valor) * vEuro;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "euro" && lista2 == "real") {
    resultado = valor;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "euro" && lista2 == "bitCoin") {
    resultado = parseFloat(valor) / (vEuro / vBit);

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "bitCoin" && lista2 == "dolar") {
    resultado = parseFloat(valor) * (vBit / vDolar);

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "bitCoin" && lista2 == "real") {
    resultado = parseFloat(valor) * vBit;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "bitCoin" && lista2 == "euro") {
    resultado = parseFloat(valor) (vBit / vEuro);

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "bitCoin" && lista2 == "bitCoin") {
    resultado = valor;

    var resFix = resultado;

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "celsius" && lista2 == "fahrenheit") {
    resultado = parseFloat(valor) * 1.8 + 32;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "celsius" && lista2 == "celsius") {
    resultado = parseFloat(valor);

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "celsius" && lista2 == "kelvin") {
    resultado = parseFloat(valor) + 273.15;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "fahrenheit" && lista2 == "fahrenheit") {
    resultado = parseFloat(valor);

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "fahrenheit" && lista2 == "celsius") {
    resultado = (parseFloat(valor) - 32) / 1.8;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "fahrenheit" && lista2 == "kelvin") {
    resultado = (parseFloat(valor) - 32) / 1.8 + 273.15;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "kelvin" && lista2 == "fahrenheit") {
    resultado = (parseFloat(valor) - 273.15) * 1.8 + 32;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "kelvin" && lista2 == "celsius") {
    resultado = parseFloat(valor) - 273.15;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "kelvin" && lista2 == "kelvin") {
    resultado = parseFloat(valor);

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "km" && lista2 == "anoLuz") {
    resultado = parseFloat(valor) / 9460800000000;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "km" && lista2 == "km") {
    resultado = parseFloat(valor);

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "anoLuz" && lista2 == "km") {
    resultado = parseFloat(valor) * 9460800000000;

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  } else if (lista1 == "anoLuz" && lista2 == "anoLuz") {
    resultado = parseFloat(valor);

    var resFix = resultado.toFixed(2);

    valor02.innerHTML = "";
    document.getElementById("valor02").setAttribute("value", resFix);
  }
}