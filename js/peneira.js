function calcula() {
  var day = 0;
  var k = 6 * document.getElementById("kill").value;
  var d = -5 * document.getElementById("death").value;
  var a = 4 * document.getElementById("assist").value;
  var win = 50 * document.getElementById("vit").value;
  var tower = 2 * document.getElementById("torre").value;
  var t = document.getElementById("tempo").value;
  var farm = 0.1 * document.getElementById("tropa").value;
  var dchamp = 0.0005 * document.getElementById("danoc").value;
  var dauto = 0.0003 * document.getElementById("danoa").value;
  var cc = 0.5 * document.getElementById("grupo").value;
  var dobj = 0.0002 * document.getElementById("danoo").value;
  total = k+d+a+win+tower+farm+dchamp+dauto+cc+dobj;
  switch (t) {
  case (t<20):
    day = "35";
    break;
  case (t<30):
    day = "20";
    break;
  case (t>40):
    day = "-40";
    break;
  case (t>50):
    day = "-60";
    break;
  case (t>60):
    day = "-80";
  }
  total = total + day;
  document.getElementById("demo").innerHTML = "Pontos: " + total;
  alert(total);
}