document.getElementById("msg").addEventListener("click", buttonPress);

function setBackground(img) {
	document.getElementById("backgroundFrame").src="images/"+img;
}

function buttonPress() {
  document.getElementById("msg").innerHTML = "YOU CLICKED ME!";
  setBackground("woodTextBackground.png");
}