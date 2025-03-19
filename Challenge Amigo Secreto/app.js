// Array para guardar los nombres
let nombres = [];

// Función para agregar nombres
function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    // Validar que no haya duplicados
    if (nombres.includes(nombre)) {
        alert('Este nombre ya fue agregado.');
        return;
    }
    
    // Añadir el nombre al array
    nombres.push(nombre);
    
    // Actualizar la lista visual
    actualizarLista();
    
    // Limpiar el campo de entrada
    inputNombre.value = '';
}

// Función para actualizar la lista visual
function actualizarLista() {
    const listaNombres = document.getElementById('listaAmigos');
    listaNombres.innerHTML = ''; // Limpiar la lista antes de actualizar
    nombres.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}

// Función para sortear un nombre
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    // Validar que haya al menos dos nombres en la lista para sortear
    if (nombres.length < 2) {
        alert('Agrega al menos dos nombres para sortear.');
        return;
    }
    
    // Limpiar la lista de amigos antes de mostrar el resultado
    const listaNombres = document.getElementById('listaAmigos');
    listaNombres.innerHTML = ''; // Limpiar la lista de amigos

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    
    // Mostrar el resultado de forma más llamativa con emojis
    resultado.innerHTML = `<li>🎉 El amigo secreto es: ${nombres[indiceAleatorio]} 🎉</li>`;
}
