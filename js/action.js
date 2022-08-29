function rnd(){
	alert("11234212123\nPATH1,A,B,C,D,PATH2,E,F,G,H,I");
}
function get(){
	var mod1 = 0;
	var mod2 = 0;
	var xekes = '';
	var valor = 0;
	var trio1 = parseInt(document.getElementById("path1").value,10);
  var trio2 = parseInt(document.querySelector('input[name="A"]:checked').value,10);
	if (trio1 < 3)
		mod1 = 1;
	var trio3 = parseInt(document.querySelector('input[name="B"]:checked').value,10) + mod1;
	var trio4 = parseInt(document.querySelector('input[name="C"]:checked').value,10) + mod1;
	var trio5 = parseInt(document.querySelector('input[name="D"]:checked').value,10) + mod1;
	var trio6 = parseInt(document.getElementById("path2").value,10);
	if (trio6 < 3)
		mod2 = 1;
	var markedCheckbox = document.getElementsByName('xek');  
  for (var checkbox of markedCheckbox) {  
    if (checkbox.checked){
      valor	=	parseInt(checkbox.value,10) + mod2;
      xekes = xekes + valor.toString(16);
		}			
  }  	
	var trio9 = document.querySelector('input[name="G"]:checked').value;
	var trio10 = document.querySelector('input[name="H"]:checked').value;
	var trio11 = document.querySelector('input[name="I"]:checked').value;
  var res = "".concat(trio1,trio2.toString(16),trio3.toString(16),trio4.toString(16),trio5.toString(16),trio6,xekes,trio9,trio10,trio11);
	//var otp = '{"name":"'+document.getElementById("fname").value+'","hex":"'+res+'"}';
	alert(res);
	//document.getElementById("myForm").reset();
}

function generate(){
	var start = '{"items":[';
	var core = '{"items":[';
	var markedCheckbox = document.getElementsByName('start');  
  for (var checkbox of markedCheckbox) {  
    if (checkbox.checked){
      valor	=	parseInt(checkbox.value,10);
      start = start + '{"id":"' + valor + '","count":1},';
		}			
  }  
	var f1 = start.slice(0, -1)+'],"type":"Start"},';
	markedCheckbox = document.getElementsByName('core');  
  for (var checkbox of markedCheckbox) {  
    if (checkbox.checked){
      valor	=	parseInt(checkbox.value,10);
      core = core + '{"id":"' + valor + '","count":1},';
		}			
  }  
	var f2 = core.slice(0, -1)+'],"type":"Core"}';
	var extra = ',{"items":[{"id":"3181","count":1},{"id":"8001","count":1}],"type":"Extra"}]}';
	var el = document.getElementById('champions');
	var cname = el.options[el.selectedIndex].innerHTML;
	var cid = document.getElementById('champions').value;
	var result = '{"title":"'+cname+'","associatedMaps":[],"associatedChampions":['+cid+'],"blocks":['+f1+f2+extra;
	window.prompt("Copy to clipboard: Ctrl+C, Enter", result);
}

function get2(){
	var toexp = document.getElementById('code').value;
	window.prompt("Copy to clipboard: Ctrl+C, Enter", toexp);
}

function rnd(){
	var t1 = Math.floor(Math.random() * 6);
	var t2 = 5-t1;
	
		
	var test = t1.toString()+'15be'+t2.toString()+'5b146';
	if (t2 = '0')
		test =t1.toString()+'15be45b146';
	alert(test);
}