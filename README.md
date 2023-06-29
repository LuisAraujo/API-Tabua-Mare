API Tabua Maré
=========================
[Eng]

> API for obtaining data from the Tide Table, using web scraping.

* Source: DHN (http://www.mar.mil.br)
* Note: Documented with JsDOC
* Developed with: PdfToText of @hubgit.

### Version
2.0
### How to use:

* Start the API

> Check the locale code in locais section and pass it as a parameter to the "startAPI"

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
2.0

> Nota: todos os PDF de 2021 estão na pasta tables2021 (fonte Marinha do Brasil).

> Nota 2: para acessar outros anos, basta criar a pasta tablesANO e modificar a variável 'folder' em 'bdLocations'.

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

# Locais

> 0 | "FUNDEADOURO DE SALINÓPOLIS"
> 1 | "ILHA DO MOSQUEIRO"
> 2 | "PORTO DE VILA DO CONDE"
> 3 | "ILHA DOS GUARÁS" 
> 4 | "ATRACADOURO DE BREVES"
> 5 | "PORTO DE BELÉM"
> 6 | "PORTO DE CABEDELO"
> 7 | "BARRA DE PARANAGUÁ - CANAL DA GALHETA"
> 8 | "PORTO DE PARANAGUÁ - CAIS OESTE"
> 9 | "BARRA DE PARANAGUÁ - CANAL SUESTE"
> 10| "TERMINAL PORTUÁRIO DA PONTA DO FÉLIX"
> 11| "PORTO DE SUAPE"
> 12| "PORTO DO RECIFE"
> 13| "ILHA DE FERNANDO DE NORONHA - BAÍA DE SANTO ANTÔNIO"
> 14| "PORTO DE LUÍS CORREIA"
> 15| "PORTO DO RIO DE JANEIRO-ILHA FISCAL"
> 16|"PORTO DE ANGRA DOS REIS"
> 17|"PORTO DO FORNO"
> 18|"PORTO DE ITAGUAÍ"
> 19|TERMINAL DA ILHA GUAÍBA"
> 20|"TERMINAL MARÍTIMO DE IMBETIBA"
> 21|"PORTO DE GUAMARÉ"
> 22|"PORTO DE MACAU"
> 23|"PORTO DE NATAL-CAPITANIA DOS PORTOS DO RN"
> 24|"PORTO DE MACEIÓ"
> 25|"PORTO DO RIO GRANDE"
> 26|"PORTO DE SÃO FRANCISCO DO SUL-DELEGACIA DA CPSFS"
> 27|"PORTO DE FLORIANÓPOLIS"
> 28|"PORTO DE IMBITUBA"
> 29|"PORTO DE ITAJAÍ"
> 30|"PORTO DE SANTOS-TORRE GRANDE"
> 31|"PORTO DE SÃO SEBASTIÃO"
> 32|"TERMINAL MARÍTIMO INÁCIO BARBOSA"
> 33|"CAPITANIA DOS PORTOS DE SERGIPE"
> 34|"PORTO DE SANTANA-CIA DOCAS DE SANTANA"
> 35|"BARRA NORTE DO RIO AMAZONAS-PONTA DO CÉU"
> 36|"PORTO DE ARATU - BASE NAVAL"
> 37|"PORTO DE MADRE DE DEUS"
> 38|"PORTO DE SALVADOR"
> 39|"PORTO DE ILHÉUS"
> 40|"PORTO DE MUCURIPE"
> 41|"TERMINAL PORTUÁRIO DO PECÉM"
> 42|"TERMINAL DA PONTA DO UBU"
> 43|"PORTO DE VITÓRIA-CAPITANIA DOS PORTOS DO ES"
> 43|"PORTO DE VITÓRIA-CAPITANIA DOS PORTOS DO ES"
> 44|"PORTO DE TUBARÃO"
> 45|"TERMINAL DE BARRA DO RIACHO"
> 46|"PORTO DE ITAQUI"
> 47|"SÃO LUÍS"
> 48|"TERMINAL DA ALUMAR"
> 49|"TERMINAL DA PONTA DA MADEIRA"
> 50|"PORTO DE TUTÓIA"
> 51|"FUNDEADOURO DA ESTAÇÃO ANTÁRTICA COMANDANTE FERRAZ"
> 52|"ILHA DA TRINDADE"
> 53|"PORTO DE AREIA BRANCA"


READE.md desenvolvido com http://dillinger.io/

