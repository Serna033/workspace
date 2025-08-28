function positivo(){
    const numero = document.getElementById("numero");
    const numeroInt = parseInt(numero.value);
    if(numeroInt>=0){
        alert("El número es positivo");
    }else{
        alert("El número es negativo");
    }
}
function par(){
     const numero = document.getElementById("par");
    const numeroInt = parseInt(numero.value);
    if(numeroInt %2 == 0){
        alert("El número es par");
    }else{
        alert("El número es impar");
    }
}