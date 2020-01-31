document.getElementById("msg").addEventListener("click", buttonPress);

function buttonPress() {
  document.getElementById("msg").innerHTML = "YOU CLICKED ME!";
  Cookies.set("bool", "true");
  console.log(Cookies.get("bool"));
}