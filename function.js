var collapse1 = document.getElementById("button1");
var collapse2 = document.getElementById("button2");
var collapse3 = document.getElementById("button3");
var collapse4 = document.getElementById("button4");
var collapse5 = document.getElementById("button5");
var collapse6 = document.getElementById("button6");

var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");
var content6 = document.getElementById("content6");

collapse1.onclick = function(){
	this.classList.toggle('active');
	collapse2.classList.remove('active');
	collapse3.classList.remove('active');
	collapse4.classList.remove('active');
	collapse5.classList.remove('active');
	collapse6.classList.remove('active');

	if (content1.style.maxHeight) {
		content1.style.maxHeight = null;
	} else {
		content1.style.maxHeight = content1.scrollHeight + "px";
		content2.style.maxHeight = null;
		content3.style.maxHeight = null;
		content4.style.maxHeight = null;
		content5.style.maxHeight = null;
		content6.style.maxHeight = null;
	}
}

collapse2.onclick = function(){
	this.classList.toggle('active');
	collapse1.classList.remove('active');
	collapse3.classList.remove('active');
	collapse4.classList.remove('active');
	collapse5.classList.remove('active');
	collapse6.classList.remove('active');

	if (content2.style.maxHeight) {
		content2.style.maxHeight = null;
	} else {
		content2.style.maxHeight = content2.scrollHeight + "px";
		content1.style.maxHeight = null;
		content3.style.maxHeight = null;
		content4.style.maxHeight = null;
		content5.style.maxHeight = null;
		content6.style.maxHeight = null;
	}
}

collapse3.onclick = function(){
	this.classList.toggle('active');
	collapse1.classList.remove('active');
	collapse2.classList.remove('active');
	collapse4.classList.remove('active');
	collapse5.classList.remove('active');
	collapse6.classList.remove('active');

	if (content3.style.maxHeight) {
		content3.style.maxHeight = null;
	} else {
		content3.style.maxHeight = content3.scrollHeight + "px";
		content1.style.maxHeight = null;
		content2.style.maxHeight = null;
		content4.style.maxHeight = null;
		content5.style.maxHeight = null;
		content6.style.maxHeight = null;
	}
}

collapse4.onclick = function(){
	this.classList.toggle('active');
	collapse1.classList.remove('active');
	collapse2.classList.remove('active');
	collapse3.classList.remove('active');
	collapse5.classList.remove('active');
	collapse6.classList.remove('active');

	if (content4.style.maxHeight) {
		content4.style.maxHeight = null;
	} else {
		content4.style.maxHeight = content4.scrollHeight + "px";
		content1.style.maxHeight = null;
		content2.style.maxHeight = null;
		content3.style.maxHeight = null;
		content5.style.maxHeight = null;
		content6.style.maxHeight = null;
	}
}

collapse5.onclick = function(){
	this.classList.toggle('active');
	collapse1.classList.remove('active');
	collapse2.classList.remove('active');
	collapse3.classList.remove('active');
	collapse4.classList.remove('active');
	collapse6.classList.remove('active');

	if (content5.style.maxHeight) {
		content5.style.maxHeight = null;
	} else {
		content5.style.maxHeight = content5.scrollHeight + "px";
		content1.style.maxHeight = null;
		content2.style.maxHeight = null;
		content3.style.maxHeight = null;
		content4.style.maxHeight = null;
		content6.style.maxHeight = null;
	}
}

collapse6.onclick = function(){
	this.classList.toggle('active');
	collapse1.classList.remove('active');
	collapse2.classList.remove('active');
	collapse3.classList.remove('active');
	collapse4.classList.remove('active');
	collapse5.classList.remove('active');

	if (content6.style.maxHeight) {
		content6.style.maxHeight = null;
	} else {
		content6.style.maxHeight = content6.scrollHeight + "px";
		content1.style.maxHeight = null;
		content2.style.maxHeight = null;
		content3.style.maxHeight = null;
		content4.style.maxHeight = null;
		content5.style.maxHeight = null;
	}
}

/*var collapses = document.getElementsByClassName("collapse");

for (var i = 0; i < collapses.length; i++) {
	collapses[i].onclick = function () {

		this.classList.toggle('active');

		var content = this.nextElementSibling;

		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	}
}*/