//Staring API
var urls = window.location.search.substring(1).split('&');
var cod = null;
var mode = null;

for(var i=0; i< urls.length; i++){
	
	parameter = urls[0].split("=");
	
	if(parameter[0] == "cod")
		cod = parameter[1];
	else if(parameter[0] == "mode")
		mode = parameter[1];
	
}
console.log(cod)
if(cod == "" || cod == null || cod == undefined)
	cod = 0;


startAPI(cod, "../../");

//Insert your logic here
function APIready(dados){


	$("#location").html(arrLocations[cod].name);
	for(var i =0; i< dados.length; i++){
		$("#list").append("<li>dia: "+dados[i].day+" - data: "+dados[i].date+" - medicao1: "+dados[i].hour1+" altua1: "+dados[i].height1+" - medicao2: "+dados[i].hour2+" altua2: "+dados[i].height2+" - medicao3: "+dados[i].hour3+" altua3: "+dados[i].height3+" - medicao4: "+dados[i].hour4+" altua4: "+dados[i].height4+"</li>");
	}
	console.log(dados);
	
}