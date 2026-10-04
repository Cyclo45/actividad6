document.getElementById("calcular").addEventListener("click", function() {
    let peso = Number(document.getElementById("Peso").value);
    let altura = Number(document.getElementById("Altura").value);

    let imc = peso / (altura * altura);

    if (imc >= 23.5 && imc <= 32.9) {
        document.getElementById("mensaje").textContent = "Tiene un IMC normal herby";
        alert("Tiene un IMC normal");
    } else if (imc < 23.5) {
        document.getElementById("mensaje").textContent = "Tiene un IMC bajo herby";
        alert("Tiene un IMC bajo");
    } else if (imc >= 32.9) {
        document.getElementById("mensaje").textContent = "Tiene un IMC alto herby";
        alert("Tiene un IMC alto");
    } else {
        document.getElementById("mensaje").textContent = "Ingrese valores válidos pe yerbi";
        alert("Ingrese valores válidos");
    }
});