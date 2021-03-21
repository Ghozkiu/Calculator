//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init() {
    //variables 
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var procedimiento = document.getElementById('procedimiento');
}

function botonNumero(element) {
    resultado.textContent = resultado.textContent + element.innerHTML;
}

function operador(element) {
    operandoa = resultado.textContent;
    operacion = element.innerHTML;
    procedimiento.textContent = operandoa + " " + operacion + " ";
    limpiar();
}
reset.onclick = function(e) {
    procedimiento.textContent = "_";
    resetear();
}

igual.onclick = function(e) {
    operandob = resultado.textContent;
    if (operandoa != undefined && operandob != undefined) {
        procedimiento.textContent += operandob + ' =';
        igual.disabled = true;
        resolver();
    }

}

function limpiar() {
    resultado.textContent = "";
    igual.disabled = false;
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}