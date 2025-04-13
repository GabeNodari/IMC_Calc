function myFunc(event) {
    event.preventDefault(); //PREVINE O CARREGAMENTO
//CONSTANTES
    const PESO = Number(document.getElementById("peso").value);
    const ALTURA = Number(document.getElementById("altura").value) / 100;
//VALIDAÇÃO DO INPUT
    if (isNaN(PESO) || isNaN(ALTURA)) {
      alert("Por favor, insira valores válidos para peso e altura.");
      return;
    }
//VARIÁVEIS
    let imc = (PESO / (ALTURA ** 2)).toFixed(2);
    let resultado = "";
//ESTRUT. DE DECISÃO
    if (imc < 18.5) {
      resultado = "Classificação: Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado = "Classificação: Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
      resultado = "Classificação: Sobrepeso";
    } else if (imc >= 30 && imc < 34.5) {
      resultado = "Classificação: Obesidade";
    } else {
      resultado = "Classificação: Obesidade (grau elevado)";
    }
//ALERTA
    alert(`Seu IMC é: ${imc}\n${resultado}`);
}
