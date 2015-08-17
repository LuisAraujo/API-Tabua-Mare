API Tabua Maré
=========================

>API para obtenção de dados da Tábua de Maré.

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