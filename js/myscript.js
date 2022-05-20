function myFunction(who) {
  var x = document.getElementById(who);
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}