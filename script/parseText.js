//01 SEG 0054 0.2 0647 5.1 1309 0.4 1854 5.3 02 
function parseText(text){
	var arrayDay = [];
	month = 1;
	year = null;
	
	for(var i=0; i< text.length; i++){
		
		if( (year == null) && (text[i]!= " ") && (!isNaN(parseInt(text[i]+text[i+1]+text[i+2]+text[i+3])) ) )
			 year =  text[i]+text[i+1]+text[i+2]+text[i+3];
		
		if( !isNaN(parseInt(text[i]+text[i+1])) && (isDayName(text[i+3]+text[i+4]+text[i+5]) )){
			var temp_day =new TableDay();
			
			if(arrayDay.length){
				var priorday = arrayDay[arrayDay.length-1].date;
				//console.log(parent(text[i]+text[i+1]) , parseInt(priorday[0]+priorday[1]))
				if(parseInt(text[i]+text[i+1]) < parseInt(priorday[0]+priorday[1])) 
					month++;
				
			}
			
			curi = i;
			if(month<10)
				temp_day.date = text[curi++]+text[curi++]+"/0"+month+"/"+year;
			else
				temp_day.date = text[curi++]+text[curi++]+"/"+month+"/"+year;
			curi++;
			temp_day.day = text[curi++]+text[curi++]+text[curi++]; 
			curi++;
			temp_day.hour1= text[curi++]+text[curi++]+":"+text[curi++]+text[curi++];
			curi++;
			
			if(text[curi] == "-")
				temp_day.height1= text[curi++]+text[curi++]+text[curi++]+text[curi++];
			else
				temp_day.height1= text[curi++]+text[curi++]+text[curi++];
			curi++;	
			
			temp_day.hour2= text[curi++]+text[curi++]+":"+text[curi++]+text[curi++];
			curi++;
			
			if(text[curi] == "-")
				temp_day.height2= text[curi++]+text[curi++]+text[curi++]+text[curi++];
			else
				temp_day.height2= text[curi++]+text[curi++]+text[curi++];
			
			curi++;
			temp_day.hour3= text[curi++]+text[curi++]+":"+text[curi++]+text[curi++];
			curi++;
			if(text[curi] == "-")
				temp_day.height3= text[curi++]+text[curi++]+text[curi++]+text[curi++];
			else
				temp_day.height3= text[curi++]+text[curi++]+text[curi++];
			curi++;
			
			temp_day.hour4= text[curi++]+text[curi++]+":"+text[curi++]+text[curi++];
			curi++;
			if(text[curi] == "-")
				temp_day.height4= text[curi++]+text[curi++]+text[curi++]+text[curi++];
			else
				temp_day.height4= text[curi++]+text[curi++]+text[curi++];
			
			
			
			curi++;
			
			//i= i+41;
			
			arrayDay.push(temp_day);
			
		}
		
	}

	return arrayDay;
}


function isDayName(text){
	if ( (text == "SEG") || (text == "TER")|| (text == "QUA") || (text == "QUI") || (text == "SEX") ||  (text == "SAB") || (text == "DOM"))
		return true;
}