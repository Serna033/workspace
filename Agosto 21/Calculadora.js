function suma (){
    const elemento1 = document.getElementById("Suma1");
    const elemento2 = document.getElementById("Suma2");
    const Resultado=document.getElementById("Resultadosuma");
    Resultado.innerHTML =parseInt(elemento1.value) + parseInt(elemento2.value);
}
function Multiplicación (){
    const elemento1 = document.getElementById("Multiplicación1");
    const elemento2 = document.getElementById("Multiplicación2");
    const Resultado=document.getElementById("Resultadomultiplicación");
    Resultado.innerHTML =parseInt(elemento1.value) * parseInt(elemento2.value);
}
function Restar (){
    const elemento1 = document.getElementById("Resta1");
    const elemento2 = document.getElementById("Resta2");
    const Resultado=document.getElementById("Resultadoresta");
    Resultado.innerHTML =parseInt(elemento1.value) - parseInt(elemento2.value);
}
function Dividir (){
    const elemento1 = document.getElementById("División1");
    const elemento2 = document.getElementById("División2");
    const Resultado=document.getElementById("Resultadodivisión");
    Resultado.innerHTML =parseInt(elemento1.value) / parseInt(elemento2.value);
}
