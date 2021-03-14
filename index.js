const ball = document.querySelector('.ball');
const btn = document.querySelector('button');

let controller = false;
let contador = 0;
let interval;

const propiedades = ['margin-left', 'margin-top', 'margin-right', 'margin-bottom'];

//Remueve los las propiedades de los estilos
const removePropertys = () => {
    for (const propiedad of propiedades) {
        ball.style.removeProperty(propiedad);
    }
}

btn.addEventListener('click', () => {
    controller = !controller;
    btn.innerText = !controller ? 'Start ' : 'Finish';

    if(controller){
        bucle();
    } else {
        clearInterval(interval);
    }
});

const bucle = () => {
    interval = setInterval(() => {
        if(contador < propiedades.length){
            if(contador === 3) removePropertys();
            moveBall(contador);
            contador++;
        } else {
            contador = 0;
        }
    }, 500);
}

const moveBall = (index) => {
    switch (propiedades[index]) {
        case propiedades[0]:
            ball.style.marginLeft = `${window.innerWidth-200}px`;
        break;

        case propiedades[1]:
            ball.style.marginTop = `${window.innerHeight-200}px`;
        break;

        case propiedades[2]:
            ball.style.marginLeft = '0px';
        break;

        case propiedades[3]:
            ball.style.marginBottom = `${window.innerHeight-200}px`;
        break;
        
        default:
            console.log('Algo salio mal');
        break;
    }
}