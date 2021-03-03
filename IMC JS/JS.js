
/*
function bmiCalculator() {
    var weight = Number(document.getElementById("weight").value);
    var height = Number(document.getElementById("height").value);
    var finalWeight = weight * .45;
    var finalHeight = height * .025;

    var BMI = (finalWeight / Math.pow(finalHeight, 2));

    document.getElementById("output").innerHTML = BMI;
}
*/
function calculadora() {
    
    var peso = Number(document.getElementById('peso').value);
    var altura = Number(document.getElementById('altura').value);
    var IMC1 = (peso/Math.pow(altura, 2));
    var IMC2=(IMC1.toFixed(2));
    document.getElementById("IMC").innerHTML = "Tu Indice de Masa Corporal es:" + IMC2;
}