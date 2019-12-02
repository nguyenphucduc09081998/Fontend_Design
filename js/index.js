function changeImage() {
	var container = document.querySelectorAll(".block-img div img");
	var container_blk = document.querySelectorAll(".block-img div");
	container.forEach(myFunction);
	function myFunction(item, index) {
		item.addEventListener('click', () => {
			document.querySelector(".active img").src = item.src;
			
			for (i = 0; i < container_blk.length; i++) 
			{
				container_blk[i].style.background = '#fff';
			}
			item.parentElement.style.background="#cdcdcd";
		});
	}
}


// For DateTimePicker
var calendar = new dhx.Calendar("calendar1", {
	css: "dhx_widget--bordered"
});
var calendar2 = new dhx.Calendar("calendar2", {
	css: "dhx_widget--bordered"
});

calendar.link(calendar2);

calendar.events.on("change", function (date) {
	document.querySelector("#resultFrom").innerHTML = "Date from: " + calendar.getValue() + "</br>";
});

calendar2.events.on("change", function (date) {
	document.querySelector("#resultTo").innerHTML = "Date to: " + calendar2.getValue() + "</br>";
});
