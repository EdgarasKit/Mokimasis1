document.querySelector("#skaiciuok1").addEventListener("click", e => {
  let x = Number(e.path[1].children.nr1.value);
  //let x = document.querySelector("#nr1").value;
  let y = e.path[1].children.nr2.valueAsNumber;
  let veiksmas = e.path[1].children.veiksmas.value;
  let ats = e.path[1].children.skaic1Ats;
  console.dir(e);

  if (veiksmas == "sudetis") {
    ats.innerHTML = x + y;
  } else if (veiksmas == "atimtis") {
    ats.innerHTML = x - y;
  } else if (veiksmas == "daugyba") {
    ats.innerHTML = x * y;
  } else if (veiksmas == "dalyba") {
    ats.innerHTML = x / y;
  } else if (veiksmas == "liekana") {
    ats.innerHTML = x % y;
  } else if (veiksmas == "laipsnis") {
    ats.innerHTML = x ** y;
  } else if (veiksmas == "saknis") {
    ats.innerHTML = x ** (1 / y);
  } else {
    ats.innerHTML = "Prašome pasirinkti veiksmą.";
  }
  /*switch (veiksmas) {
    case "sudetis":
      ats.innerHTML = x + y;
      break;
    case "sudetis":
      ats.innerHTML = x + y;
      break;
    case "sudetis":
      ats.innerHTML = x + y;
      break;
    case "sudetis":
      ats.innerHTML = x + y;
      break;
    case "sudetis":
      ats.innerHTML = x + y;
      break;
  }*/
});


//  SKAIČIUOTUVAS 2

let ekranoSkaicius = null;
let atmintiesSkaicius = null;
let veiksmas = null;
let ekranoVaizdas = document.querySelector("#ekranas");

document.querySelector("#clear").addEventListener("click", clearScreen); // CE - išvalyti tai kas parašyta ekrane
function clearScreen(){
  ekranoSkaicius = null;
  atvaizduoti();
}
document.querySelector("#reset").addEventListener("click", resetCalculator); // perkrauti skaičiuotuva
function resetCalculator(){
  ekranoSkaicius = null;
  atmintiesSkaicius = null;
  veiksmas = null;
  atvaizduoti();
}
document.querySelector("#zenklas").addEventListener("click", changeSign); // keisti teigiama / neigiama
function changeSign(){
  if(ekranoSkaicius !== null){
    ekranoSkaicius = ekranoSkaicius.toString();
    if(ekranoSkaicius.charAt(0) == "-"){
      ekranoSkaicius = ekranoSkaicius.slice(1, ekranoSkaicius.length);
    } else {
     ekranoSkaicius = "-".concat(ekranoSkaicius);
    }
  }
  atvaizduoti();
}

document.querySelector("#lygu").addEventListener("click", calculate); // suskaičiuoti
function calculate(){
  if(ekranoSkaicius !== null && atmintiesSkaicius !== null){
    ekranoSkaicius = Number(ekranoSkaicius);
    atmintiesSkaicius = Number(atmintiesSkaicius);
    if (veiksmas == "sudėti") {
      ekranoSkaicius = atmintiesSkaicius + ekranoSkaicius;
    } else if (veiksmas == "atimti") {
      ekranoSkaicius = atmintiesSkaicius - ekranoSkaicius;
    } else if (veiksmas == "dauginti") {
      ats.innerHTML = x * y;
    } else if (veiksmas == "dalinti") {
      ats.innerHTML = x / y;
    } else if (veiksmas == "gautiLiekaną") {
      ats.innerHTML = x % y;
    } else if (veiksmas == "pakeltiLaipsniu") {
      ats.innerHTML = x ** y;
    } else if (veiksmas == "ištrauktiŠaknį") {
      ats.innerHTML = x ** (1 / y);
    }
    atmintiesSkaicius = null;
    veiksmas = null;
    atvaizduoti();
  }
}

document.querySelector("#sudetis").addEventListener("click", sudeti);
function sudeti(){
  if(ekranoSkaicius !== null || atmintiesSkaicius !== null){
    if(veiksmas === null || veiksmas !== null && ekranoSkaicius === null){
      veiksmas = "sudėti";
      if(ekranoSkaicius !== null){
        atmintiesSkaicius = ekranoSkaicius;
        ekranoSkaicius = null;
      }
    }
  }
}
document.querySelector("#atimtis").addEventListener("click", atimti);
function atimti(){
  if(ekranoSkaicius !== null || atmintiesSkaicius !== null){
    if(veiksmas === null || veiksmas !== null && ekranoSkaicius === null){
      veiksmas = "atimti";
      if(ekranoSkaicius !== null){
        atmintiesSkaicius = ekranoSkaicius;
        ekranoSkaicius = null;
      }
    }
  }
}
/*document.querySelector("#daugyba").addEventListener("click", dauginti);
document.querySelector("#dalyba").addEventListener("click", dalinti);
document.querySelector("#liekana").addEventListener("click", gautiLiekana);
document.querySelector("#laipsnis").addEventListener("click", pakeltiLaipsniu);
document.querySelector("#saknis").addEventListener("click", istrauktiSakni);
*/
document.querySelector("#sk9").addEventListener("click", write9);
function write9(){
  if(ekranoSkaicius == null){
    ekranoSkaicius = "9";
  } else {
    ekranoSkaicius += "9";
  }
  atvaizduoti();
}
/*
document.querySelector("#sk8").addEventListener("click", write8);
document.querySelector("#sk7").addEventListener("click", write7);
document.querySelector("#sk6").addEventListener("click", write6);
document.querySelector("#sk5").addEventListener("click", write5);
document.querySelector("#sk4").addEventListener("click", write4);
document.querySelector("#sk3").addEventListener("click", write3);
document.querySelector("#sk2").addEventListener("click", write2);
document.querySelector("#sk1").addEventListener("click", write1);
document.querySelector("#sk0").addEventListener("click", write0);
*/
document.querySelector("#skTask").addEventListener("click", writeTaskas);
function writeTaskas(){
  if(ekranoSkaicius == null){
    ekranoSkaicius = "0.";
  } else {
    ekranoSkaicius = ekranoSkaicius.toString();
    if(!ekranoSkaicius.includes(".")){
      ekranoSkaicius += ".";
    } else if(ekranoSkaicius.charAt(ekranoSkaicius.length-1) == "."){
      ekranoSkaicius = ekranoSkaicius.slice(0, ekranoSkaicius.length-1);
    }
  }
  atvaizduoti();
}

function atvaizduoti(){
  document.querySelector("#ekranas").innerHTML = ekranoSkaicius;
}