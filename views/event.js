var codeValue = document.getElementById("editor");
var runBtn = document.getElementById("runBtn");
runBtn.onclick = function func() {
  document.getElementById("hidden").value = codeValue.innerHTML;
};
