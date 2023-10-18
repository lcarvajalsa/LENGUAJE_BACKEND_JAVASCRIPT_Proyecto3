const deg = 6;

const hora = document.querySelector('hora');
const minutos = document.querySelector('minutos');
const segundos = document.querySelector('segundos');

setInterval(()=>{
    let tiempo = new Date();

    let hr =tiempo.getHours() * 30;
    let min =tiempo.getMinutes() * seg;
    let seg =tiempo.getSeconds() * seg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;
})