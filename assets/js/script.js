let hora = document.querySelector('#hora');
let minuto = document.querySelector('#minuto');
let segundo = document.querySelector('#segundo');

let horario = new Date().toLocaleDateString;


setInterval(()=> {
    let h = horario.getHours();
    let m = horario.getMinutes();
    let s = horario.getSeconds();
    hora.document.innerText = `${h}`;
    minuto.innerText = `${m}`;
    segundo.innerText = `${s}`;
    console.log(h)
}, 500);

