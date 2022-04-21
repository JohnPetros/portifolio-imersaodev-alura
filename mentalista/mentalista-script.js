var numeroSecreto = parseInt(Math.random ()*10);



function Chutar() {
  var elementoresultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoresultado.innerHTML = "Você acertou"
  } else if (chute > 10 || chute < 0) {
    elementoresultado.innerHTML = "Você deve digitar um número de 0 a 10";
  }
  else {
    elementoresultado.innerHTML = "Errou";
  }
}