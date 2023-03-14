var nameInput = document.getElementById("name").value;
var strInput = document.getElementById("strInput").value;
var dexInput = document.getElementById("dexInput").value;
var constInput = document.getElementById("constInput").value;
var intInput = document.getElementById("intInput").value;
var wisInput = document.getElementById("wisInput").value;
var charInput = document.getElementById("charInput").value;
var profInput = document.getElementById("profInput").value;
var btnRoll = document.getElementById("btnRoll");
var output = document.getElementById("output");
let result;
let bonus;

function save() {
  var nameInput = document.getElementById("name").value;
  var strInput = document.getElementById("strInput").value;
  var dexInput = document.getElementById("dexInput").value;
  var constInput = document.getElementById("constInput").value;
  var intInput = document.getElementById("intInput").value;
  var wisInput = document.getElementById("wisInput").value;
  var charInput = document.getElementById("charInput").value;
  var profInput = document.getElementById("profInput").value;

  localStorage.setItem("name", nameInput);
  localStorage.setItem("strength", strInput);
  localStorage.setItem("dexterity", dexInput);
  localStorage.setItem("constitution", constInput);
  localStorage.setItem("intelligence", intInput);
  localStorage.setItem("wisdom", wisInput);
  localStorage.setItem("charisma", charInput);
  localStorage.setItem("proficiency", profInput);
}

function loadData() {
  var nameInput = document.getElementById("name");
  var strInput = document.getElementById("strInput");
  var dexInput = document.getElementById("dexInput");
  var constInput = document.getElementById("constInput");
  var intInput = document.getElementById("intInput");
  var wisInput = document.getElementById("wisInput");
  var charInput = document.getElementById("charInput");
  var profInput = document.getElementById("profInput");

  nameInput.value = localStorage.getItem("name");
  strInput.value = localStorage.getItem("strength");
  dexInput.value = localStorage.getItem("dexterity");
  constInput.value = localStorage.getItem("constitution");
  intInput.value = localStorage.getItem("intelligence");
  wisInput.value = localStorage.getItem("wisdom");
  charInput.value = localStorage.getItem("charisma");
  profInput.value = localStorage.getItem("proficiency");
}
window.onload = loadData;

function rollDice() {
  let result;
  var dices = document.getElementById("dices").value;
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  switch (dices) {
    case "d4":
      result = random(1, 4);
      output.innerHTML = `${result}`;
      break;

    case "d6":
      result = random(1, 6);
      output.innerHTML = `${result}`;
      break;

    case "d8":
      result = random(1, 8);
      output.innerHTML = `${result}`;
      break;

    case "d10":
      result = random(1, 10);
      output.innerHTML = `${result}`;
      break;

    case "d12":
      result = random(1, 12);
      output.innerHTML = `${result}`;
      break;

    case "d20":
      result = random(1, 20);
      output.innerHTML = `${result}`;
      break;

    case "d100":
      result = random(1, 100);
      output.innerHTML = `${result}`;
      break;

    default:
      break;
  }
  return result;
}

function addAttribute() {
  var attribute = document.getElementById("attribute").value;
  var bonus;
  var rollResult = rollDice();
  var newresult;
  var checkbox = document.getElementById("proftrue");
  var character = {
    str: parseInt(document.getElementById("strInput").value),
    dex: parseInt(document.getElementById("dexInput").value),
    cons: parseInt(document.getElementById("constInput").value),
    int: parseInt(document.getElementById("intInput").value),
    wis: parseInt(document.getElementById("wisInput").value),
    char: parseInt(document.getElementById("charInput").value),
    prof: parseInt(document.getElementById("profInput").value)
  };
  switch (attribute) {
    case "str":
      bonus = character.str;
      break;

    case "cons":
      bonus = character.cons;
      break;

    case "dex":
      bonus = character.dex;
      break;

    case "int":
      bonus = character.int;
      break;

    case "wis":
      bonus = character.wis;
      break;

    case "char":
      bonus = character.char;
      break;

    default:
      bonus = 0;
      break;
  }

  if (checkbox.checked && bonus !== undefined) {
    newresult = rollResult + bonus + character.prof;
    output.innerHTML = `${rollResult} + ${bonus} + ${character.prof} = ${newresult} `;
  }
    else if(bonus === 0){
    output.innerHTML = `${rollResult}`
  }
  else if (bonus !== undefined) {
    newresult = rollResult + bonus;
    output.innerHTML = `${rollResult} + ${bonus} = ${newresult} `;
  } 
  else {
    newresult = rollResult + character.prof;
    output.innerHTML = `${rollResult} + ${character.prof} = ${newresult} `;
  }
  
}



function btnRollClick() {
  rollDice();
  save();
  addAttribute()
}
btnRoll.addEventListener("click", btnRollClick);
