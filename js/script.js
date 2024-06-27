let contadorVisitas = document.getElementById("contadorVisitas");
console.log(contadorVisitas.innerHTML, typeof(contadorVisitas.innerHTML)); // 0 string

let contador = localStorage.getItem('contadorVisitas');

if (contador){
    parseFloat.contador;
    contador ++;
    localStorage.setItem('contadorVisitas', contador);
    contadorVisitas.innerHTML = contador;
} else {
    localStorage.setItem('contadorVisitas', '0');
}
console.log(localStorage);

// Creo un div para añadir los gifs (y lo añado al DOM con appendChild)
let gifContainer = document.createElement('div');
gifContainer.id = 'gifContainer';
document.body.appendChild(gifContainer);

// Creo la función que voy a pasar en cada gif. He puesto que los argumentos sean la URL de la imagen y su id para llamarlo en el CSS. 
// Lo añado al DOM (dentro del div que creé antes) con appendChild.
function mostrarGifCelebracion(url, id) {
    let gifElement = document.createElement('img');
    gifElement.src = url;
    gifElement.className = `gifCelebracion`;
    gifContainer.appendChild(gifElement);
    gifElement.id = id; 
}
for (let i = 10; i <= contador; i += 10) {
    if (i === 10) {
        mostrarGifCelebracion('https://i.gifer.com/3sjq.gif', `gifCelebracion${i}`);
    } else if (i === 20) {
        mostrarGifCelebracion('https://i.gifer.com/ZIb4.gif',  `gifCelebracion${i}`);
    } else if (i === 30) {
        mostrarGifCelebracion('https://i.gifer.com/xz.gif', `gifCelebracion${i}`);
    } else if (i === 40) {
        mostrarGifCelebracion('https://i.gifer.com/bf6.gif', `gifCelebracion${i}`);
    } else if (i === 50) {
        mostrarGifCelebracion('https://i.gifer.com/6md.gif', `gifCelebracion${i}`);
    } else if (i === 60) {
        mostrarGifCelebracion('https://i.gifer.com/4SHX.gif', `gifCelebracion${i}`);
    } else if (i === 70) {
        mostrarGifCelebracion('https://i.gifer.com/XOsX.gif', `gifCelebracion${i}`);
    } else if (i === 80) {
        mostrarGifCelebracion('https://i.gifer.com/WG8Q.gif', `gifCelebracion${i}`);
    } else if (i === 90) {
        mostrarGifCelebracion('https://i.gifer.com/bfX.gif', `gifCelebracion${i}`);
    } else if (i === 100) {
        mostrarGifCelebracion('https://i.gifer.com/yC.gif', `gifCelebracion${i}`);
    } else if (i === 110) {
        mostrarGifCelebracion('https://i.gifer.com/6oa.gif', `gifCelebracion${i}`);
    } else if (i === 120) {
        mostrarGifCelebracion('https://i.gifer.com/14Um.gif', `gifCelebracion${i}`);
    } else if (i === 130) {
        mostrarGifCelebracion('https://i.gifer.com/bfR.gif', `gifCelebracion${i}`);
    } else if (i === 140) {
        mostrarGifCelebracion('https://i.gifer.com/3nRK.gif', `gifCelebracion${i}`);
    } else if (i === 150) {
        mostrarGifCelebracion('https://i.gifer.com/xw.gif', `gifCelebracion${i}`);
    } else if (i === 160) {
        mostrarGifCelebracion('https://i.gifer.com/4Jnt.gif', `gifCelebracion${i}`);
    } else if (i === 170) {
        mostrarGifCelebracion('https://i.gifer.com/6kc.gif', `gifCelebracion${i}`);
    } else if (i === 180) {
        mostrarGifCelebracion('https://i.gifer.com/47tv.gif', `gifCelebracion${i}`);
    } else if (i === 190) {
        mostrarGifCelebracion('https://i.gifer.com/xy.gif', `gifCelebracion${i}`);
    } else if (i === 200) {
        mostrarGifCelebracion('https://i.gifer.com/6mb.gif', `gifCelebracion${i}`);
    }
}



const btn = document.getElementById("btnReestablecer");
btn.addEventListener('click', function(){
    // localStorage.removeItem('contadorVisitas'); // no funciona en la primera visita, porque tarda una visita en crearse
    localStorage.setItem('contadorVisitas', '0'); // así sí 
    contadorVisitas.innerHTML = 0;
    gifContainer.innerHTML=''; 
})
