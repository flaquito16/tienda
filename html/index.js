const carrito = document.getElementById("carrito"),

listaCursos = document.getElementById("lista-cursos"), contenedorCarrito = document.querySelector('.buy-card .lista_de_ cursos'),

vaciarCarritoBtn = document.querySelector('#vaciar_carrito');

let articulosCarrito = [];

registrarEventsListeners()

function registrarEventsListeners() {

 listaCursos.addEventListener('click', agregarCurso);

}

function agregarCurso(e) {

if (e.target.classList.contains("agregar-carrito")) { const cursoSeleccionado= e.target.parentElement.parentElement; leerInfo(cursoSeleccionado)

}

}


function leerInfo(curso) {


const infoCurso = {

titulo: curso.querySelector('h3').textContent,
precio: curso.querySelector('.descuento').textContent, 
id: curso.querySelector('button').getAttribute('data-id'), 
cantidad: 1

}
articulosCarrito = [...articulosCarrito, infoCurso]

carritoHTML()
}


function carritoHTML() {

    articulosCarrito.forEach(curso => {

        const fila = document.createElement('div');
        
        fila.innerHTML = `
        
        <p>${curso.titulo}</p> 
        
        <p>${curso.precio}</p>
        
        <p>${curso.cantidad}</p>
        
        <p><span>X</span></p>
        ` ;
    contenedorCarrito.appendChild(fila)
        
        });
        
        }



