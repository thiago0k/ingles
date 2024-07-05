const formulario = document.querySelector('.contenedor-form');
const botonMas = document.querySelector('.btn-mas');
const inputs = document.querySelectorAll('.nombre-mazo, .español-mazo, .ingles-mazo');


botonMas.addEventListener('click', function() {
    formulario.style.display = formulario.style.display === 'none' || formulario.style.display === '' ? 'block' : 'none';
});

inputs.forEach(input => {
    input.addEventListener('click', function() {
        botonMas.style.display = 'none';
  
    });
});

const botonFinalizar = document.querySelector('.btn-finalizar')
botonFinalizar.addEventListener('click', function() {
    formulario.style.display = 'none';
      botonMas.style.display = 'block';
});

function AgregarPalabras(){
    const contenedor = document.querySelector('.padre1')
    const Padre = document.createElement('div');
    Padre.className = 'padre'
    const inputNombre = document.querySelector('.nombre-mazo').value;
    const inputEspañol = document.querySelector('.español-mazo').value;
    const inputIngles = document.querySelector('.ingles-mazo').value;
    
    if(inputs !== ''){
        let Titulo = document.createElement('h1');
        Titulo.className = 'tile'
        Titulo.textContent = inputNombre;

        let español = document.createElement('p');
        español.className =  'spanish'
        español.textContent = inputEspañol;

        let ingles = document.createElement('p');
        ingles.className = 'inglish'
        ingles.textContent = inputIngles;


        Padre.addEventListener('click',function(){
            ingles.style.display = 'block';
            // ingles.style.display = 'none'


        });
        Padre.appendChild(Titulo);
        Padre.appendChild(español);
        Padre.appendChild(ingles);
        contenedor.appendChild(Padre)
        document.body.appendChild(contenedor);
    }
}
