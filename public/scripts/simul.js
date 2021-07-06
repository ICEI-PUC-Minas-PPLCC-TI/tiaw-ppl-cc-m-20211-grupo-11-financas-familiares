
/*'use strict';
var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=9OQJCDZZ9INIVFGA';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
});

*/


function calcular(oper) {
    var valor1 = document.calcform.valor1.value;
    var valor2 = document.calcform.valor2.value;
 
    if (oper == "cdb") {
       var res = parseFloat(valor1);
    } else {
       if (oper == "subtrair") {
          var res = parseFloat(valor1 - valor2);
       } else {
          if (oper == "multiplicar") {
             var res = valor1*valor2;
          } else {
             var res = valor1/valor2;
          }
       }
    }
    var arredondado = "R$ " + parseFloat(res.toFixed(2));
    document.calcform.res.value = arredondado;
 }