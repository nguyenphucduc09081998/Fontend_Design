$(document).ready(function(){
	var day = $(".input_type_number_1");
	for (var i = 1; i <= 31; i++) {
	  day.append("<option value='"+i+"'>" + i + "</option>");
	}

	var month = $(".input_type_number_2");
	for (var i = 1; i <= 12; i++) {
	  month.append("<option value='"+i+"'>" + i + "</option>");
	}

	var year = $(".input_type_number_3");
	for (var i = 1900; i <= 2030; i++) {
	  year.append("<option value='"+i+"'>" + i + "</option>");
	}

	$( ".input_type_number_1" ).change(function() {
        
        var testDay = parseInt($(this).val());
        switch(testDay)
    	{
    		case 31:
    			var months = [1,3,5,7,8,10,12];
    			month.empty();
    			for (var i = 0; i < months.length; i++) {
				  	month.append("<option value='"+months[i]+"'>" + months[i] + "</option>");
				}
				break;
			case 30:
    			var months = [4,6,9,11];
    			month.empty();
    			for (var i = 0; i < months.length; i++) {
				  	month.append("<option value='"+months[i]+"'>" + months[i] + "</option>");
				}
				break;
			default:
				month.empty();
				for (var i = 1; i <= 12; i++) {
				  	month.append("<option value='"+i+"'>" + i + "</option>");
				}
    	}
    });
});