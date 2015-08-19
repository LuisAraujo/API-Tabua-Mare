/**
* Data os table day
* @namespace
* @type {JSON}
*/
var tableOfWaterJSON;

/**
* Cod of location
* @namespace
* @type {int}
*/
var cod;

/**
* Date today
* @namespace
* @type {Date}
*/
var today = new Date();

/**
* Array of Locations
* @namespace
* @type {Array}
*/
var targetLocation;

/**
* This method start API
*@function
* @name startAPI
* @param cod {int} cod of target location
*/
function startAPI(cod){

    //Setting of cod of location
    setCod(cod);

    //setDate
    setDate(today);

    //Start getData
    getData(setTableOfWater);

    return tableOfWaterJSON;

}

/**
 * Method get Date and format name of days
 * @function
 * @name setData
 * @param {function} param - Variable global of date
 */
function setDate(param){
    if(param.getDate()<10)
        param.day = "0"+param.getDate();
    else
        param.day = today.getDate();

    if(today.getMonth()<10)
        param.mes = "0"+(param.getMonth()+1);
    else
        param.mes = param.getMonth()+1;

    param.ano = param.getFullYear();

    param.data_ext = param.day+"/"+param.mes+"/"+param.ano;

    if(param.getDay()==0)
        param.dia_ext = "Domindo";
    else if(param.getDay()==1)
        param.dia_ext = "Segunda";
    else if(param.getDay()==2)
        param.dia_ext = "Terça";
    else if(param.getDay()==3)
        param.dia_ext = "Quarta";
    else if(param.getDay()==4)
        param.dia_ext = "Quinta";
    else if(param.getDay()==5)
        param.dia_ext = "Sexta";
    else if(param.getDay()==6)
        param.dia_ext = "Sábado";
}

/**
* Method get data of PHP page with Ajax
* @function
* @name getData
* @exemplo
* getData();
* @param {function} cd - The callback has data of page
*/
function getData(cb){
    var dados;
    $.ajax({
        type: "POST",
        url: "getSite.php?cod="+cod+"&dia="+today.getDate()+"&mes="+today.getMonth()+"&ano="+today.getFullYear(),
        dataType: "html",
        data:dados,
        contentType: "charset=UTF-8",
        success:cb
    });
}

/**
 * Set value in variable tableOfWaterJSON and call APIready
 * @function
 * @name setTableOfWater
 * @param {html} param - data of page
 */
function setTableOfWater(param){
    tableOfWaterJSON = parser(param);
    //call when ready
    APIready();
}

/**
* Set cod of Location - See in table 'CodOfTableLocations'
* @function
* name setCod
* @param {int} param - cod of location
*/
function setCod(param){
    cod = param;
    targetLocation = arrLocations[cod];
}
/**
 * Print JSON in page html
 * @function
 * @name printScreen
 */
function printScreen(){
    $("body").html( getTableOfWater());
}

/**
 * Get value in tableOfWaterJSON
 * @function
 * @name getTableOfWater
 * @return {JSON} data of table of water of today of target location
 */
function getTableOfWater(){
    return tableOfWaterJSON;
}

/**
*Get data of table of water of today of target location in HTML and save in tableOfWaterJSON
* @function
* @name parser
* @return {JSON}  data of table of water of today of target location
*/
function parser(html){

    //get all elements of table
    allTable = $(html).find("table").find("tr");
    a = null;
    for(i = 0; i < allTable.length; i++){
        //get each 'tr' of table
        element = allTable[i];

        // //get each 'td' of table
        tdInTable = $(element).find("td");

        //get all tds
        for(j= 0; j< $(tdInTable).length; j++){

            textNo = $(tdInTable)[j].outerText;
            if(trim(textNo) != ""){

                textSplit = textNo.split(" ");
                for(l=0; l< textSplit.length; l++){
                   // console.log(l);
                    if( (textSplit[l]!="") && (textSplit[l]!= "") )

                        if( textSplit[l] == today.data_ext ){
                            a = new TableDay();
                            a.date = textSplit[l];
                            a.day = today.dia_ext;

                        }else if(a != null){
                            if (a.hour1==""){
                                a.hour1 = textSplit[l];
                            }else if (a.height1==""){
                                a.height1 = textSplit[l];
                            }else if (a.hour2==""){
                                a.hour2 = textSplit[l];
                            }else if (a.height2==""){
                                a.height2 = textSplit[l];
                            }else if (a.hour3==""){
                                a.hour3 = textSplit[l];
                            }else if (a.height3==""){
                                a.height3 = textSplit[l];
                            }else if ( (a.hour4=="") && (valitadeHour(textSplit[l])) ){
                                a.hour4 = textSplit[l];
                            }else if ( (a.hour4!="") && (a.height4=="") ){
                                a.height4 = textSplit[l];
                            }else{
                                //formating JSON
                                strReturn = "{'apiVersion':'1.0', 'data':{ 'location':'"+targetLocation+"', 'day':'"+a.day+"', 'date':'"+ a.date+"', " +
                                    "'hour1':'"+ a.hour1+"', 'height1':'"+ a.height1+"', 'hour2':'"+ a.hour2+"', 'height2':'"+ a.height2+"' " +
                                    "'hour3':'"+ a.hour3+"', 'height3':'"+ a.height3+"', 'hour4':'"+ a.hour4+"', 'height4':'"+ a.height4+"' " +
                                    "}}";

                                return strReturn;

                            }

                        }
                }
            }
        }
    }
};


/**
 * Delete empty spaces
 * @function
 * @name trim
 * @param str {String}
 * @returns {XML|string|void|*}
 */
function trim(str) {
    return str.replace(/^\s+|\s+$/g,"");
}


function valitadeHour(hour){
     hour = trim(hour);
    if((  isInteger(hour[0])) && ( isInteger(hour[1])) && (hour[2]==':') && (isInteger(hour[3]))&& (isInteger(hour[4]))){
        return true;
     }

    return false;
}

function isInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}