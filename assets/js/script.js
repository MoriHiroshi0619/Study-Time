const hora = document.querySelector('#hora');
const minuto = document.querySelector('#minuto');
const segundo = document.querySelector('#segundo');
const cronoHr = document.querySelector('#cronoHr');
const cronoMin = document.querySelector('#cronoMin');
const cronoSeg = document.querySelector('#cronoSeg');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const continuar = document.querySelector('#continuar');
const zerar = document.querySelector('#zerar');


let segundos = 0;
let minutos = 0;
let horas = 0;


const loop = setInterval(()=> {
    let date = new Date();
    
    if(parseInt(date.getHours(), 10) < 10){
        hora.innerText = `${date.getHours()}`;
    }else{
        hora.innerText = `${date.getHours()}`;
    }
    
    if(parseInt(date.getMinutes(), 10) < 10){
        minuto.innerText = `0${date.getMinutes()}`;
    }else{
        minuto.innerText = `${date.getMinutes()}`;
    }

    if(parseInt(date.getSeconds(), 10) < 10){
        segundo.innerText = `0${date.getSeconds()}`;
    }else{
        segundo.innerText = `${date.getSeconds()}`;
    }
}, 1000);

function cronometro(){
    iniciar.removeEventListener('click', cronometro);
    iniciar.style.display = 'none';
    pausar.style.display = 'block';

    function parar(){
        clearInterval(loop);
        pausar.style.display = 'none';
        continuar.style.display = 'block';
        zerar.style.display = 'block';
        console.log("apertado");
    }

    const loop = setInterval(()=>{
        segundos++;

        if(horas < 10){
            cronoHr.innerText = `0${horas}`;
        }else{
            cronoHr.innerText = `${horas}`;
        }

        if(minutos < 10){
            cronoMin.innerText = `0${minutos}`;
        }else{
            cronoMin.innerText = `${minutos}`;
        }

        if(segundos < 10){
            cronoSeg.innerText = `0${segundos}`;
        }else{
            cronoSeg.innerText = `${segundos}`;
        }

        if(segundos == 60){
            segundos = 0;
            minutos++;
        }

        if(minutos == 60){
            minutos = 0;
            horas++;
        }

    },1000);
    pausar.addEventListener('click', parar);
} 

function parar(){
    clearInterval(loop);
    console.log("apertado");
}


iniciar.addEventListener('click', cronometro);

