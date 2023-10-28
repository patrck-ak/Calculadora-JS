function enviarNumero(nn) {
  var visor = document.getElementById("visor").value;
  if (visor == 0) {
    document.getElementById("visor").value = nn;
  } else {
    document.getElementById("visor").value =
      document.getElementById("visor").value + nn;
  }
  console.log(visor);
}

function limparVisor() {
  document.getElementById("visor").value = 0;
  console.log('visor limpo.');
}

function definirOperador(op) {
  if (op == "+") {
    document.getElementById("visor").value =
      document.getElementById("visor").value + "+";
  }  if (op == "-") {
    document.getElementById("visor").value =
      document.getElementById("visor").value + "-";
  }  if (op == "*") {
    document.getElementById("visor").value =
      document.getElementById("visor").value + "*";
  }  if (op == "/") {
    document.getElementById("visor").value =
      document.getElementById("visor").value + "/";
      
  }
}

function somar() {
  var calculo = eval(document.getElementById("visor").value.toString());
  (document.getElementById("visor").value = calculo), 2000;
}
