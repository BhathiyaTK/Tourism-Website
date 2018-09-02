var Item1 = getElementById("item1");
var Item2 = getElementById("item2");
var Item3 = getElementById("item3");

Item1.addEventListener('click', item1Click_function());
Item2.addEventListener('click', item2Click_function());
Item3.addEventListener('click', item3Click_function());

function item1Click_function(){
	getElementById("para1").css("display","block");
	getElementById("para2").css.display = "none";
	getElementById("para3").css.display = "none";
	getElementById("i1").removeClass("fas fa-plus open");
	getElementById("i1").addClass("fas fa-minus close");
	getElementById("i2").removeClass("fas fa-minus close");
	getElementById("i2").addClass("fas fa-plus open");
	getElementById("i3").removeClass("fas fa-minus close");
	getElementById("i3").addClass("fas fa-plus open");
}