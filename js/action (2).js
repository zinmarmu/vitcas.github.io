const fruits = [8000,8100,8200,8300,8400];
const pre = [ [8005,8008,8021,8010],[9101,9111,8009],[9104,9105,9103],[8014,8017,8299] ];
const dom = [ [8112,8124,8128,9923],[8126,8139,8143],[8136,8120,8138],[8135,8134,8105,8106] ];
const sor = [ [8214,8229,8230],[8224,8226,8275],[8210,8234,8233],[8237,8232,8236] ];
const ins = [ [8351,8360,8369],[8306,8304,8313],[8321,8316,8345],[8347,8410,8352] ];
const res = [ [8437,8439,8465],[8446,8463,8401],[8429,8444,8473],[8451,8453,8242] ];
const aux = [1,2,3];
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
function magic(path){
	switch (path) {
  case 8000:
    return pre;
    break;
  case 8100:
    return dom;
    break;
  case 8200:
    return sor;
    break;
  case 8300:
    return ins;
    break;
  case 8400:
    return res;
	}
}
// Used like so
var arr = [2, 11, 37, 42];
shuffle(arr);
shuffle(aux);

console.log(arr);