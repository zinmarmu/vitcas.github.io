function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swMágico it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
let roles = ["TOP", "JG", "MID", "ADC", "SUP"];
let xampions = [
{nome:"Aatrox" ,dano:"Físico", classe1:"Lutador", classe2:"Tanque", dif:"$$$"},
{nome:"Ahri" ,dano:"Mágico", classe1:"Assassino", classe2:"Mago", dif:"$"},
{nome:"Akali" ,dano:"Mágico", classe1:"Assassino", classe2:"nt", dif:"$$$"},
{nome:"Akshan" ,dano:"Físico", classe1:"Atirador", classe2:"Assassino", dif:"$$"},
{nome:"Alistar" ,dano:"Mágico", classe1:"Suporte", classe2:"Tanque", dif:"$$"},
{nome:"Amumu" ,dano:"Mágico", classe1:"Tanque", classe2:"Mago", dif:"$"},
{nome:"Anivia" ,dano:"Mágico", classe1:"Mago", classe2:"Suporte", dif:"$$"},
{nome:"Annie" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$"},
{nome:"Aphelios" ,dano:"Físico", classe1:"Atirador", classe2:"nt", dif:"$$$"},
{nome:"Ashe" ,dano:"Físico", classe1:"Atirador", classe2:"Suporte", dif:"$"},
{nome:"AurelionSol" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$$$$"},
{nome:"Azir" ,dano:"Mágico", classe1:"Mago", classe2:"Atirador", dif:"$$$"},
{nome:"Bardo" ,dano:"Mágico", classe1:"Suporte", classe2:"Mago", dif:"$$$$"},
{nome:"Belveth" ,dano:"Físico", classe1:"Lutador", classe2:"nt", dif:"$$"},
{nome:"Blitzcrank" ,dano:"Mágico", classe1:"Lutador", classe2:"Tanque", dif:"$"},
{nome:"Brand" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$"},
{nome:"Braum" ,dano:"Mágico", classe1:"Suporte", classe2:"Tanque", dif:"$"},
{nome:"Caitlyn" ,dano:"AD", classe1:"Atirador", classe2:"nt", dif:"$$$"},
{nome:"Camille" ,dano:"Mágico", classe1:"Lutador", classe2:"Tanque", dif:"$$$"},
{nome:"Cassiopeia" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$$"},
{nome:"Chogath" ,dano:"Mágico", classe1:"Tanque", classe2:"Mago", dif:"$"},
{nome:"Corki" ,dano:"Mágico", classe1:"Atirador", classe2:"nt", dif:"$$"},
{nome:"Darius" ,dano:"Físico", classe1:"Lutador", classe2:"Tanque", dif:"$"},
{nome:"Diana" ,dano:"Mágico", classe1:"Lutador", classe2:"Mago", dif:"$"},
{nome:"Draven" ,dano:"Físico", classe1:"Atirador", classe2:"nt", dif:"$$"},
{nome:"DrMundo" ,dano:"Mágico", classe1:"Lutador", classe2:"Tanque", dif:"$"},
{nome:"Ekko" ,dano:"Mágico", classe1:"Assassino", classe2:"Mago", dif:"$"},
{nome:"Elise" ,dano:"Mágico", classe1:"Assassino", classe2:"Mago", dif:"$$$"},
{nome:"Evelynn" ,dano:"Mágico", classe1:"Assassino", classe2:"Mago", dif:"$$$"},
{nome:"Ezreal" ,dano:"Misto", classe1:"Atirador", classe2:"Mago", dif:"$$"},
{nome:"Fiddlesticks" ,dano:"Mágico", classe1:"Mago", classe2:"Suporte", dif:"$"},
{nome:"Fiora" ,dano:"Físico", classe1:"Lutador", classe2:"Duelista", dif:"$$"},
{nome:"Fizz" ,dano:"Mágico", classe1:"Assassino", classe2:"Lutador", dif:"$"},
{nome:"Galio" ,dano:"Mágico", classe1:"Tanque", classe2:"Mago", dif:"$$"},
{nome:"Gangplank" ,dano:"Físico", classe1:"Lutador", classe2:"nt", dif:"$$$"},
{nome:"Garen" ,dano:"Físico", classe1:"Lutador", classe2:"Tanque", dif:"$"},
{nome:"Gnar" ,dano:"Físico", classe1:"Lutador", classe2:"Tanque", dif:"$$$"},
{nome:"Gragas" ,dano:"Mágico", classe1:"Mago", classe2:"Lutador", dif:"$"},
{nome:"Graves" ,dano:"Físico", classe1:"Atirador", classe2:"nt", dif:"$"},
{nome:"Gwen" ,dano:"Mágico", classe1:"Lutador", classe2:"Mago", dif:"$$"},
{nome:"Hecarim" ,dano:"Físico", classe1:"Lutador", classe2:"Tanque", dif:"$"},
{nome:"Heimerdinger" ,dano:"Mágico", classe1:"Mago", classe2:"Suporte", dif:"$$$"},
{nome:"Illaoi" ,dano:"Físico", classe1:"Lutador", classe2:"Tanque", dif:"$"},
{nome:"Irelia" ,dano:"Físico", classe1:"Lutador", classe2:"Duelista", dif:"$$"},
{nome:"Ivern" ,dano:"Mágico", classe1:"Suporte", classe2:"Mago", dif:"$$$$"},
{nome:"Janna" ,dano:"Mágico", classe1:"Suporte", classe2:"Mago", dif:"$"},
{nome:"JarvanIV" ,dano:"Físico", classe1:"Lutador", classe2:"Tanque", dif:"$"},
{nome:"Jax" ,dano:"Misto", classe1:"Lutador", classe2:"Duelista", dif:"$"},
{nome:"Jayce" ,dano:"Físico", classe1:"Lutador", classe2:"Atirador", dif:"$$$"},
{nome:"Jhin" ,dano:"Misto", classe1:"Atirador", classe2:"Mago", dif:"$"},
{nome:"Jinx" ,dano:"Físico", classe1:"Atirador", classe2:"nt", dif:"$"},
{nome:"Kaisa" ,dano:"Misto", classe1:"Atirador", classe2:"nt", dif:"$$"},
{nome:"Kalista" ,dano:"Físico", classe1:"Atirador", classe2:"nt", dif:"$$$"},
{nome:"Karma" ,dano:"Mágico", classe1:"Suporte", classe2:"Mago", dif:"$$"},
{nome:"Karthus" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$"},
{nome:"Kassadin" ,dano:"Mágico", classe1:"Assassino", classe2:"Mago", dif:"$"},
{nome:"Katarina" ,dano:"Misto", classe1:"Assassino", classe2:"Mago", dif:"$$"},
{nome:"Kayle" ,dano:"Misto", classe1:"Lutador", classe2:"Suporte", dif:"$$"},
{nome:"Kayn" ,dano:"Físico", classe1:"Assassino", classe2:"Lutador", dif:"$$"},
{nome:"Kennen" ,dano:"Mágico", classe1:"Mago", classe2:"Atirador", dif:"$"},
{nome:"Khazix" ,dano:"Físico", classe1:"Assassino", classe2:"nt", dif:"$$$"},
{nome:"Kindred" ,dano:"Físico", classe1:"Atirador", classe2:"nt", dif:"$$$"},
{nome:"Kled" ,dano:"Físico", classe1:"Lutador", classe2:"Tanque", dif:"$$"},
{nome:"KogMaw" ,dano:"Misto", classe1:"Atirador", classe2:"Mago", dif:"$$"},
{nome:"KSante" ,dano:"Físico", classe1:"Lutador", classe2:"Tanque", dif:"$"},
{nome:"Leblanc" ,dano:"Mágico", classe1:"Assassino", classe2:"Mago", dif:"$$$"},
{nome:"LeeSin" ,dano:"Físico", classe1:"Lutador", classe2:"Assassino", dif:"$$$"},
{nome:"Leona" ,dano:"Mágico", classe1:"Suporte", classe2:"Tanque", dif:"$"},
{nome:"Lillia" ,dano:"Mágico", classe1:"Lutador", classe2:"Mago", dif:"$$"},
{nome:"Lissandra" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$"},
{nome:"Lucian" ,dano:"Misto", classe1:"Atirador", classe2:"nt", dif:"$"},
{nome:"Lulu" ,dano:"Mágico", classe1:"Suporte", classe2:"Mago", dif:"$"},
{nome:"Lux" ,dano:"Mágico", classe1:"Mago", classe2:"Suporte", dif:"$"},
{nome:"Malphite" ,dano:"Mágico", classe1:"Lutador", classe2:"Tanque", dif:"$"},
{nome:"Malzahar" ,dano:"Mágico", classe1:"Mago", classe2:"Assassino", dif:"$"},
{nome:"Maokai" ,dano:"Mágico", classe1:"Tanque", classe2:"Mago", dif:"$"},
{nome:"MasterYi" ,dano:"Físico", classe1:"Lutador", classe2:"Assassino", dif:"$"},
{nome:"MissFortune" ,dano:"Misto", classe1:"Atirador", classe2:"nt", dif:"$$"},
{nome:"MonkeyKing" ,dano:"Físico", classe1:"Assassino", classe2:"Lutador", dif:"$"},
{nome:"Mordekaiser" ,dano:"Mágico", classe1:"Lutador", classe2:"Mago", dif:"$"},
{nome:"Morgana" ,dano:"Mágico", classe1:"Suporte", classe2:"Mago", dif:"$"},
{nome:"Nami" ,dano:"Mágico", classe1:"Suporte", classe2:"Mago", dif:"$$"},
{nome:"Nasus" ,dano:"Mágico", classe1:"Tanque", classe2:"Lutador", dif:"$$"},
{nome:"Nautilus" ,dano:"Mágico", classe1:"Suporte", classe2:"Tanque", dif:"$"},
{nome:"Neeko" ,dano:"Mágico", classe1:"Mago", classe2:"Suporte", dif:"$"},
{nome:"Nidalee" ,dano:"Mágico", classe1:"Assassino", classe2:"Mago", dif:"$$$"},
{nome:"Nilah" ,dano:"Físico", classe1:"Lutador", classe2:"Assassino", dif:"$$$"},
{nome:"Nocturne" ,dano:"Físico", classe1:"Assassino", classe2:"Lutador", dif:"$"},
{nome:"Nunu" ,dano:"Mágico", classe1:"Tanque", classe2:"Mago", dif:"$"},
{nome:"Olaf" ,dano:"Físico", classe1:"Tanque", classe2:"Lutador", dif:"$$"},
{nome:"Orianna" ,dano:"Mágico", classe1:"Mago", classe2:"Suporte", dif:"$$"},
{nome:"Ornn" ,dano:"Mágico", classe1:"Tanque", classe2:"nt", dif:"$"},
{nome:"Pantheon" ,dano:"Físico", classe1:"Assassino", classe2:"Lutador", dif:"$$"},
{nome:"Poppy" ,dano:"Físico", classe1:"Tanque", classe2:"Lutador", dif:"$"},
{nome:"Pyke" ,dano:"Físico", classe1:"Assassino", classe2:"Suporte", dif:"$$"},
{nome:"Qiyana" ,dano:"Físico", classe1:"Assassino", classe2:"Lutador", dif:"$$$"},
{nome:"Quinn" ,dano:"Físico", classe1:"Atirador", classe2:"Assassino", dif:"$$$"},
{nome:"Rakan" ,dano:"Mágico", classe1:"Suporte", classe2:"nt", dif:"$$"},
{nome:"Rammus" ,dano:"Mágico", classe1:"Tanque", classe2:"Lutador", dif:"$"},
{nome:"RekSai" ,dano:"Físico", classe1:"Lutador", classe2:"nt", dif:"$$$"},
{nome:"Rell" ,dano:"Mágico", classe1:"Suporte", classe2:"Tanque", dif:"$$"},
{nome:"Renata" ,dano:"Mágico", classe1:"Suporte", classe2:"Mago", dif:"$"},
{nome:"Renekton" ,dano:"Físico", classe1:"Lutador", classe2:"Tanque", dif:"$"},
{nome:"Rengar" ,dano:"Físico", classe1:"Assassino", classe2:"Lutador", dif:"$$$"},
{nome:"Riven" ,dano:"Físico", classe1:"Lutador", classe2:"Assassino", dif:"$$$"},
{nome:"Rumble" ,dano:"Mágico", classe1:"Mago", classe2:"Lutador", dif:"$"},
{nome:"Ryze" ,dano:"Mágico", classe1:"Mago", classe2:"Lutador", dif:"$$"},
{nome:"Samira" ,dano:"Físico", classe1:"Atirador", classe2:"nt", dif:"$$"},
{nome:"Sejuani" ,dano:"Mágico", classe1:"Tanque", classe2:"nt", dif:"$"},
{nome:"Senna" ,dano:"Misto", classe1:"Atirador", classe2:"Suporte", dif:"$$"},
{nome:"Seraphine" ,dano:"Mágico", classe1:"Suporte", classe2:"Mago", dif:"$"},
{nome:"Sett" ,dano:"Físico", classe1:"Lutador", classe2:"Tanque", dif:"$"},
{nome:"Shaco" ,dano:"Misto", classe1:"Assassino", classe2:"Mago", dif:"$$$"},
{nome:"Shen" ,dano:"Misto", classe1:"Tanque", classe2:"nt", dif:"$$"},
{nome:"Shyvana" ,dano:"Misto", classe1:"Tanque", classe2:"Lutador", dif:"$$$"},
{nome:"Singed" ,dano:"Mágico", classe1:"Tanque", classe2:"Mago", dif:"$"},
{nome:"Sion" ,dano:"Físico", classe1:"Tanque", classe2:"Lutador", dif:"$"},
{nome:"Sivir" ,dano:"Físico", classe1:"Atirador", classe2:"nt", dif:"$"},
{nome:"Skarner" ,dano:"Físico", classe1:"Tanque", classe2:"Lutador", dif:"$$"},
{nome:"Sona" ,dano:"Mágico", classe1:"Suporte", classe2:"Mago", dif:"$"},
{nome:"Soraka" ,dano:"Mágico", classe1:"Suporte", classe2:"Mago", dif:"$"},
{nome:"Swain" ,dano:"Mágico", classe1:"Mago", classe2:"Lutador", dif:"$"},
{nome:"Sylas" ,dano:"Mágico", classe1:"Mago", classe2:"Assassino", dif:"$$"},
{nome:"Syndra" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$"},
{nome:"TahmKench" ,dano:"Mágico", classe1:"Suporte", classe2:"Tanque", dif:"$"},
{nome:"Taliyah" ,dano:"Mágico", classe1:"Mago", classe2:"Suporte", dif:"$$$"},
{nome:"Talon" ,dano:"Físico", classe1:"Assassino", classe2:"nt", dif:"$$"},
{nome:"Taric" ,dano:"Mágico", classe1:"Suporte", classe2:"nt", dif:"$"},
{nome:"Teemo" ,dano:"Mágico", classe1:"Atirador", classe2:"Mago", dif:"$"},
{nome:"Thresh" ,dano:"Mágico", classe1:"Suporte", classe2:"nt", dif:"$$$"},
{nome:"Tristana" ,dano:"Físico", classe1:"Atirador", classe2:"Assassino", dif:"$"},
{nome:"Trundle" ,dano:"Físico", classe1:"Tanque", classe2:"Lutador", dif:"$"},
{nome:"Tryndamere" ,dano:"Físico", classe1:"Assassino", classe2:"nt", dif:"$"},
{nome:"TwistedFate" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$$$"},
{nome:"Twitch" ,dano:"Misto", classe1:"Atirador", classe2:"Assassino", dif:"$$"},
{nome:"Udyr" ,dano:"Misto", classe1:"Tanque", classe2:"Lutador", dif:"$$"},
{nome:"Urgot" ,dano:"Físico", classe1:"Tanque", classe2:"Lutador", dif:"$$"},
{nome:"Varus" ,dano:"Misto", classe1:"Atirador", classe2:"Mago", dif:"$"},
{nome:"Vayne" ,dano:"Físico", classe1:"Atirador", classe2:"nt", dif:"$$"},
{nome:"Veigar" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$"},
{nome:"Velkoz" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$"},
{nome:"Vex" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$$"},
{nome:"Vi" ,dano:"Físico", classe1:"Assassino", classe2:"Lutador", dif:"$"},
{nome:"Viego" ,dano:"Físico", classe1:"Assassino", classe2:"Lutador", dif:"$$"},
{nome:"Viktor" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$$"},
{nome:"Vladimir" ,dano:"Mágico", classe1:"Mago", classe2:"nt", dif:"$$$"},
{nome:"Volibear" ,dano:"Misto", classe1:"Tanque", classe2:"nt", dif:"$"},
{nome:"Warwick" ,dano:"Misto", classe1:"Tanque", classe2:"Lutador", dif:"$"},
{nome:"Xayah" ,dano:"Físico", classe1:"Atirador", classe2:"nt", dif:"$"},
{nome:"Xerath" ,dano:"Mágico", classe1:"Mago", classe2:"Suporte", dif:"$$"},
{nome:"XinZhao" ,dano:"Físico", classe1:"Lutador", classe2:"Assassino", dif:"$"},
{nome:"Yasuo" ,dano:"Físico", classe1:"Lutador", classe2:"Duelista", dif:"$$$"},
{nome:"Yone" ,dano:"Misto", classe1:"Lutador", classe2:"Duelista", dif:"$$"},
{nome:"Yorick" ,dano:"Físico", classe1:"Tanque", classe2:"Lutador", dif:"$"},
{nome:"Yuumi" ,dano:"Mágico", classe1:"Suporte", classe2:"Mago", dif:"$"},
{nome:"Zac" ,dano:"Mágico", classe1:"Tanque", classe2:"nt", dif:"$$"},
{nome:"Zed" ,dano:"Físico", classe1:"Assassino", classe2:"nt", dif:"$"},
{nome:"Zeri" ,dano:"Misto", classe1:"Atirador", classe2:"nt", dif:"$$$"},
{nome:"Ziggs" ,dano:"Mágico", classe1:"Assassino", classe2:"nt", dif:"$"},
{nome:"Zilean" ,dano:"Mágico", classe1:"Mago", classe2:"Suporte", dif:"$"},
{nome:"Zoe" ,dano:"Mágico", classe1:"Mago", classe2:"Suporte", dif:"$$$"},
{nome:"Zyra" ,dano:"Mágico", classe1:"Mago", classe2:"Suporte", dif:"$"}
];
function myFunction() {
	count = 0;
	shuffle(roles);
  $("#roles1").append('<li>' + roles[0] + '</li>');
	$("#roles1").append('<li>' + roles[1] + '</li>');
	$("#roles1").append('<li>' + roles[2] + '</li>');
	$("#roles1").append('<li>' + roles[3] + '</li>');
	$("#roles1").append('<li>' + roles[4] + '</li>');
	shuffle(roles);
  $("#roles2").append('<li>' + roles[0] + '</li>');
	$("#roles2").append('<li>' + roles[1] + '</li>');
	$("#roles2").append('<li>' + roles[2] + '</li>');
	$("#roles2").append('<li>' + roles[3] + '</li>');
	$("#roles2").append('<li>' + roles[4] + '</li>');
	document.getElementById("botao1").disabled = true;
}
function clearDraft(){

	$("#ally1").attr('src','img/dummy.png'); 
	$("#ally2").attr('src','img/dummy.png'); 
	$("#ally3").attr('src','img/dummy.png'); 
	$("#ally4").attr('src','img/dummy.png'); 
	$("#ally5").attr('src','img/dummy.png'); 
	$("#enemy1").attr('src','img/dummy.png'); 
	$("#enemy2").attr('src','img/dummy.png'); 
	$("#enemy3").attr('src','img/dummy.png'); 
	$("#enemy4").attr('src','img/dummy.png'); 
	$("#enemy5").attr('src','img/dummy.png'); 
}
function pickDraft(){
	
	let text1 = "img/square/";
	let text2 = ".png"
	$("#ally1").attr('src',text1.concat('oi', text2)); 
	$("#ally2").attr('src',text1.concat($(this).attr('name'), text2)); 
	$("#ally3").attr('src',text1.concat($(this).attr('name'), text2)); 
	$("#ally4").attr('src',text1.concat($(this).attr('name'), text2)); 
	$("#ally5").attr('src',text1.concat($(this).attr('name'), text2)); 
	$("#enemy1").attr('src',text1.concat($(this).attr('name'), text2)); 
	$("#enemy2").attr('src',text1.concat($(this).attr('name'), text2)); 
	$("#enemy3").attr('src',text1.concat($(this).attr('name'), text2)); 
	$("#enemy4").attr('src',text1.concat($(this).attr('name'), text2)); 
	$("#enemy5").attr('src',text1.concat($(this).attr('name'), text2)); 
}
function selectTeam(x,y){
	switch (x) {
  case 0:
    $("#lista1").append('<li>' + y + '</li>');
    break;
  case 1:
    $("#lista2").append('<li>' + y + '</li>');
    break;
  case 2:
     $("#lista2").append('<li>' + y + '</li>');
    break;
  case 3:
    $("#lista1").append('<li>' + y + '</li>');
    break;
  case 4:
    $("#lista1").append('<li>' + y + '</li>');
    break;
  case 5:
    $("#lista2").append('<li>' + y + '</li>');
    break;
	case 6:
    $("#lista2").append('<li>' + y + '</li>');
    break;
	case 7:
    $("#lista1").append('<li>' + y + '</li>');
    break;
	case 8:
    $("#lista1").append('<li>' + y + '</li>');
    break;
  case 9:
    $("#lista2").append('<li>' + y + '</li>');
	}
	count++;
}