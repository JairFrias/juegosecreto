
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosGenerados = [];
let numeroMaximo = 3

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;
}

function generarNumeroSecreto() {
    
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    console.log(numeroGenerado)
    console.log(listaNumerosGenerados);
    if(listaNumerosGenerados.length == numeroMaximo)
    {
        asignarTexto('p','Ya se sortearon todos los números posibles');

    }
    else
    {
        if(listaNumerosGenerados.includes(numeroGenerado))
         {
            return generarNumeroSecreto();
         }
         else
         {
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

    

    
}

function verificarIntento(){
   
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto)
    {
        asignarTexto('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        
        if(numeroDeUsuario<numeroSecreto)
        {
            asignarTexto('p','El número secreto es mayor');
        }
        else
        {
            asignarTexto('p','El número secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}
function limpiarCaja()
{
    document.querySelector('#valorUsuario').value='';
}
function condicionesIniciales()
{   
    asignarTexto('h1','Juego del número secreto');
    asignarTexto('p','Ingresa un número del 1 al 10');
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    return;
}

function reiniciarJuego(){
    condicionesIniciales();
    limpiarCaja();
    document.getElementById('reiniciar').setAttribute('disabled','true');
    return;
}

condicionesIniciales();