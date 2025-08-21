function suma (){
    const elemento1 = document.getElementById("Suma1");
    const elemento2 = document.getElementById("Suma2");
    const Resultado=document.getElementById("Resultadosuma");
    Resultado.innerHTML =parseInt(elemento1.value) + parseInt(elemento2.value);
}