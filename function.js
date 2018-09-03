var collapses = document.getElementsByClassName("collapse");

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
}