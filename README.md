API Tabua Maré
=========================
[Eng]
> API for obtaining data from the Tide Table, using web scraping.

* Source: DHN (http://www.mar.mil.br/dhn/chm/box-previsao-mare/tabuas/)
* Note: Documented with JsDOC
* Developed with: Jquery and Ajax (js and PHP)

### Version
1.0
### How to use:

* Start the API

> Check the locale code in "arrLocations" (bdLocations.js) and pass it as a parameter to the "startAPI"

```sh
StartAPI (40118);
```

* Get the table of the day

> Access the table of the day, in JSON format, with "getTableOfWater".

```sh
var JSON = getTableOfWater ();
Console.log (JSON);
```

> Implement your logic in "APIready".

```sh
function APIready () {
     $ ("Body"). Html (getTableOfWater ());
}
```

[Pt-Br]
>API para obtenção de dados da Tábua de Maré, usando web scraping.

* Fonte: DHN (http://www.mar.mil.br/dhn/chm/box-previsao-mare/tabuas/)
* Nota: Documentado com JsDOC 
* Desenvolvido com: Jquery e Ajax (js e PHP)

### Versão
1.0
### Como Usar:

* Iniciar a API

>Verifique o código da localidade em "arrLocations" (bdLocations.js) e passa como parámetro para a função "startAPI"

```sh
startAPI(40118);
```
* Obtenha a tablea do dia

>Acesse a tabela do dia, em formato JSON, com "getTableOfWater".

```sh
var JSON = getTableOfWater();
console.log(JSON);
```
>Implemente sua lógica em "APIready".

```sh
function APIready(){
    $("body").html(getTableOfWater());
}
```
READE.md desenvolvido com http://dillinger.io/