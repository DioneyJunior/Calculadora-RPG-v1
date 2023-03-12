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

const character = {
  str: strInput,
  dex: dexInput,
  cons: constInput,
  int: intInput,
  wis: wisInput,
  char: charInput,
  pof: profInput,
};

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

