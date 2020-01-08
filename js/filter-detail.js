$(document).ready(function(){
	
	$('#price-range-submit').hide();

	$("#min_price,#max_price").on('change', function () {

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());

	  if (min_price_range > max_price_range) {
		$('#max_price').val(min_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });
	  
	});


	$("#min_price,#max_price").on("paste keyup", function () {                                        

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());
	  
	  if(min_price_range == max_price_range){

			max_price_range = min_price_range + 100000;
			
			$("#min_price").val(min_price_range);		
			$("#max_price").val(max_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });

	});


	$(function () {
	  $("#slider-range").slider({
		range: true,
		orientation: "horizontal",
		min: 0,
		max: 5000000,
		values: [500000, 2500000],
		step: 100,

		slide: function (event, ui) {
		  if (ui.values[0] == ui.values[1]) {
			  return false;
		  }
		  
		  $("#min_price").val(ui.values[0].toLocaleString('en-US')+'đ');
		  $("#max_price").val(ui.values[1].toLocaleString('en-US')+'đ');
		}
	  });

	  $("#min_price").val($("#slider-range").slider("values", 0).toLocaleString('en-US')+'đ');
	  $("#max_price").val($("#slider-range").slider("values", 1).toLocaleString('en-US')+'đ');

	});

	$( "#filtering-room").change(function() {
		if(parseInt($(this).val()) === 1)
		{
			$(".info-box").css('display', 'flex');
			$(".info-box").css('flex-wrap', 'wrap');
			$(".info-box-2").css('display', 'none');
		} 
		else 
		{
			$(".info-box").css('display', 'none');
			$(".info-box-2").css('display', 'flex');
			$(".info-box-2").css('flex-wrap', 'wrap');
		}

	});
	

});