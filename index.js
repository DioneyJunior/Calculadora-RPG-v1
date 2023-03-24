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
var popoverContent = document.querySelectorAll('[data-bs-content="popover"]');
let result;
let bonus;
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

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
  var selectedDice = document.querySelector('input[name="dice"]:checked').value;
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  switch (selectedDice) {
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
  var output = document.getElementById("output");
  var popover = bootstrap.Popover.getInstance(output);
  if (popover) {
    popover.dispose();
  }

  var attribute = document.getElementById("attribute").value;
  var proficiencyCheckbox = document.getElementById("proftrue");

  var character = {
    str: parseInt(document.getElementById("strInput").value) || 0,
    dex: parseInt(document.getElementById("dexInput").value) || 0,
    cons: parseInt(document.getElementById("constInput").value) || 0,
    int: parseInt(document.getElementById("intInput").value) || 0,
    wis: parseInt(document.getElementById("wisInput").value) || 0,
    char: parseInt(document.getElementById("charInput").value) || 0,
    prof: parseInt(document.getElementById("profInput").value) || 0,
  };

  var diceValue = rollDice();
  var bonusValue;
  var bonusText = "";

  switch (attribute) {
    case "str":
      bonusValue = character.str;
      bonusText = "Força";
      break;

    case "cons":
      bonusValue = character.cons;
      bonusText = "Constituição";
      break;

    case "dex":
      bonusValue = character.dex;
      bonusText = "Destreza";
      break;

    case "int":
      bonusValue = character.int;
      bonusText = "Inteligência";
      break;

    case "wis":
      bonusValue = character.wis;
      bonusText = "Sabedoria";
      break;

    case "char":
      bonusValue = character.char;
      bonusText = "Carisma";
      break;

    default:
      bonusValue = undefined;
      break;
  }

  if (!isNaN(bonusValue)) {
    bonusText = `${bonusText} (${bonusValue})`;
  }

  var result = diceValue;
  if (!isNaN(bonusValue)) {
    result += bonusValue;
  }
  if (proficiencyCheckbox.checked) {
    result += character.prof;
  }

  var outputText = result;
  if (!isNaN(bonusValue) || proficiencyCheckbox.checked) {
    outputText = `Dado (${diceValue})`;

    if (!isNaN(bonusValue)) {
      outputText += `, ${bonusText}`;
    }

    if (proficiencyCheckbox.checked) {
      outputText += `, Proficiência (${character.prof})`;
    }
  }

  output.setAttribute("data-bs-content", outputText);
  output.innerHTML = result + '&nbsp;<i class="bi bi-info-circle"></i>';

  document.getElementById("result-box").style.display = "block";

  new bootstrap.Popover(output);
}

function btnRollClick() {
  rollDice();
  addAttribute();
}

btnRoll.addEventListener("click", btnRollClick);
