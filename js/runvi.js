const rupre = math.matrix([[8005,8008,8021,8010],[9101,9111,8009,0],[9104,9105,9103,0],[8014,8017,8299,0]]);
const rudom = math.matrix([[8112,8124,8128,9923],[8126,8139,8143,0],[8136,8120,8138,0],[8135,8134,8105,8106]]);
const rusor = math.matrix([[ 8214,8229,8230,0],[8224,8226,8275,0],[8210,8234,8233,0],[8237,8232,8236,0]]);
const rudet = math.matrix([[ 8437,8439,8465,0],[8446,8463,8401,0],[8429,8444,8473,0],[8451,8453,8242,0]]);
const ruins = math.matrix([[ 8351,8360,8369,0],[8306,8304,8313,0],[8321,8316,8345,0],[8347,8410,8352,0]]);
let nome = "custom";
let prist = 8000;
let subst = 8100;
let passar = [8229,8226,8210,8237,8139,8106,5007,5008,5003];
function fixvalues(){
	prist = document.getElementById("path1").value;
	subst = document.getElementById("path2").value;
	let matrix = rupre;
	let matrix2 = rudom;
	switch(prist) {
  	case "8000":
    	document.getElementById("a3").value = matrix.subset(math.index(0,3));
    	break;
  	case "8100":
    	document.getElementById("a3").value = matrix.subset(math.index(0,3));
    	document.getElementById("d3").value = matrix.subset(math.index(2,3));	
    	break;	
    case "8200":
    	matrix = rusor;
    	break;
    case "8300":
    	matrix = ruins;
    	break;
    case "8400":
    	matrix = rudet;
    	break;
	}
	switch(subst) {
  	case "8000":
    	matrix2 = rudom;
    	break;
  	case "8100":
    	matrix2 = rupre;
    	document.getElementById("edu3").value = matrix2.subset(math.index(3,3));	
    	break;	
    case "8200":
    	matrix2 = rusor;
    	break;
    case "8300":
    	matrix2 = ruins;
    	break;
    case "8400":
    	matrix2 = rudet;
    	break;
	}
	for (let i = 0; i < 4; i++) {
  	document.getElementById("a"+i).value = matrix.subset(math.index(0,i));
  	document.getElementById("b"+i).value = matrix.subset(math.index(1,i));
  	document.getElementById("c"+i).value = matrix.subset(math.index(2,i));
  	document.getElementById("d"+i).value = matrix.subset(math.index(3,i));
  	document.getElementById("du"+i).value = matrix2.subset(math.index(1,i));
  	document.getElementById("dudu"+i).value = matrix2.subset(math.index(2,i));
  	document.getElementById("edu"+i).value = matrix2.subset(math.index(3,i));
	}
}
function get(){
	var count = 5;
  passar[0] = document.querySelector('input[name="A"]:checked').value;
	passar[1] = document.querySelector('input[name="B"]:checked').value;
	passar[2] = document.querySelector('input[name="C"]:checked').value;
	passar[3] = document.querySelector('input[name="D"]:checked').value;
	var markedCheckbox = document.getElementsByName('xek');  
  for (var checkbox of markedCheckbox) {  
    if (checkbox.checked){
			passar[count] = checkbox.value;
      count++;
		}			
  }  
	passar[6] = document.querySelector('input[name="G"]:checked').value;
	passar[7] = document.querySelector('input[name="H"]:checked').value;
	passar[8] = document.querySelector('input[name="I"]:checked').value;
	runa = '"name":"' + nome + '","primaryStyleId":' + prist + 
	',"selectedPerkIds":[' + passar + '],"subStyleId":' + subst + '};';
	if (count == 7)
		document.getElementById("resultado").textContent = runa;
	else
		alert('precisa 2 secund');
	document.getElementById("myForm").reset();
}
function genlist() {
	for (var i = 0; i < lista.length; i++) {
		$("ol").append('<li>'+JSON.stringify(lista[i].name) + " ");
		var avengers = lista[i].selectedPerkIds;
		avengers.forEach((item, index)=>{
			$("ol").append('<img src="img/runas/'+item+'.png">')
		})
		$("ol").append('</li>');
	}
}
function selchamp(){
	var x = document.getElementById("mySelect").value;
	for (var i = 0; i < imprunas.length; i++) {
		if (imprunas[i].name == x){
      let str = JSON.stringify(imprunas[i], null, 4);
      document.getElementById('demo').textContent = str;
    }
	}
}
$(document).ready(function(){
	fixvalues();
});			