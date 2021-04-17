var cod = 1;

startAPI(cod, "../../");

//Insert your logic here
function APIready(dados){

	$("#location").html(arrLocations[cod].name);
	for(var i =0; i< dados.length; i++){
		$("#list").append("<li>dia: "+dados[i].day+" - data: "+dados[i].date+" - medicao1: "+dados[i].hour1+" altua1: "+dados[i].height1+" - medicao2: "+dados[i].hour2+" altua2: "+dados[i].height2+" - medicao3: "+dados[i].hour3+" altua3: "+dados[i].height3+" - medicao4: "+dados[i].hour4+" altua4: "+dados[i].height4+"</li>");
	}
	console.log(dados);
	
}