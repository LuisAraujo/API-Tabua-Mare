API Tabua Maré
=========================

API para obtenção de dados da Tábua de Maré.
Fonte: DHN (http://www.mar.mil.br/dhn/chm/box-previsao-mare/tabuas/)

Nota: Documentado com JsDOC -

Desenvolvido com:

* Jequery
* Ajax (js e PHP)

##Como Usar:

* Iniciar a API

~Verifique o código da localidade em "arrLocations" (bdLocations.js) e passa como parámetro para a função "startAPI"

Ex.:
startAPI(40118);

* Obtenha a tablea do dia

~Acesse a tabela do dia, em formato JSON, com "getTableOfWater".

Ex.:
var JSON = getTableOfWater();
console.log(JSON);

~Implemente sua lógica em "APIready".

Ex.:
function APIready(){

    $("body").html(getTableOfWater());
}

