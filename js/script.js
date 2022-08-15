let productos = [];

function validarDatos(id, nombre, precio){

    if (id == '') {
        alert('debe ingresar un id');
        return false;
    }

    if (nombre == '') {
        alert('debe ingresar un nombre');
        return false;
    }

    if (precio == '') {
        alert('debe ingresar un precio');
        return false;
    }

    return true;
}

function guardarDatos(id, nombre, precio){

    productos.push(
        {
            id: id,
            nombre: nombre,
            precio: precio
        }
    );

}


function mostrarDatos(){

    let registros = '';

    for (let i = 0; i < productos.length; i++) {
       
        registros +=
        `
            <tr>
                <td>${productos[i].id}</td>
                <td>${productos[i].nombre}</td>
                <td>${productos[i].precio}</td>
            </tr>
        `
    }

    let detalle = document.getElementById('detalle');

    detalle.innerHTML = registros;

}

function limpiarControles(){
    document.getElementById('id').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
}


function guardarRegistro(){

    let id = document.getElementById('id').value;
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;

    // validar datos

    if (validarDatos(id,nombre,precio) == false) {
        return;
    }

    // guardar datos

    guardarDatos(id,nombre,precio);

    // mostrar datos

    mostrarDatos();


    // limpiar controles

    limpiarControles();

}