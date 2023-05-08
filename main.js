const nombre = document.querySelector('.nombre')
const telefono = document.querySelector('.telefono')
const direccion = document.querySelector('.direccion')
const numero = document.querySelector('.numero')
const correo = document.querySelector('.correo')
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea')
const btnbuscar = document.querySelector('.btn-buscar')
const btnmodificar = document.querySelector('.btn-modificar')

const listadoTareas = document.querySelector('.listado-tareas')
const db = window.localStorage

btnAgregarTarea.onclick = () =>{ 
    let contacto = {
        id:Math.random(1,100),
        nombre: nombre.value,
        telefono:telefono.value,
        direccion:direccion.value,
        numero:numero.value,
        correo:correo.value,


    }
    guardarContacto(db, contacto)
}

cargarContactos(db, listadoTareas)