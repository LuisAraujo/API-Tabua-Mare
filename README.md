API Tabua Maré
=========================
[Eng]

NOTE: This API is broken, 'cause the Marinha Brasileira deleted the table page. We are make a second 
version for obtaining data from new database using as base the project "pdftotext" of @hubgit.

NOTE2: Bug fixed, but arrLocation is incoplet. 


> API for obtaining data from the Tide Table, using web scraping.

* Source: DHN (http://www.mar.mil.br)
* Note: Documented with JsDOC
* Developed with: PdfToText of @hubgit.

### Version
2.0
### How to use:

* Start the API

> Check the locale code in "arrLocations" (bdLocations.js) and pass it as a parameter to the "startAPI"

```sh
StartAPI (10);
```

* Get the table of the day

> Access the table of the day, in Array format (data).

```sh
function APIready (data) {
   
}
```

> Implement your logic in "APIready".

```sh
function APIready (data) {
	for(i=0; i<data.length; i++)
    $ ("#body").append(data[i]);
}
```

[Pt-Br]
>API para obtenção de dados da Tábua de Maré, usando web scraping.

* Fonte: DHN (http://www.mar.mil.br)
* Desenvolvido com: PdfToText de @hubgit.

### Versão
3.0

> Nota: todos os PDF de 2021 estão na pasta tables2021 (fonte Marinha do Brasil).

> Nota 2: para acessar outros anos, basta criar a pasta tablesANO e modificar a variável folder em bdLocations.

### Como Usar:

* Iniciar a API

>Verifique o código da localidade em "arrLocations" (bdLocations.js) e passa como parámetro para a função "startAPI"

```sh
startAPI(10);
```

> Caso o script da API não esteja no mesmo nivel da sua aplicação, informe o prefíxo do diretório.

```sh
startAPI(10, "..");
```

* Obtenha a tabela do dia

>Acesse a tabela do dia, em formato de Array (data).

```sh
function APIready (data) {

}
```
>Implemente sua lógica em "APIready".

```sh
function APIready (data) {
	for(i=0; i<data.length; i++)
     $ ("#body").append(data[i]);
}
```

### Exemplo

Acesse a pasta "Example" para consultar exemplos:

*idfixed*: usa um codigo fixo para obter os dados e exibe na main

*idfromget*: usa o parâmetro cod via GET para obter os dados e exibe na main


READE.md desenvolvido com http://dillinger.io/