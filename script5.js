let llaveGenerada = ''; // Variable global para almacenar la llave generada
let llaveCorta = '';// Variable para generar la llave corta




async function generarHash(variable1, variable2, variable3) {
    // Concatenar las tres variables
    const textoConcatenado = `${variable1}${variable2}${variable3}`;

    // Convertir el texto concatenado en un ArrayBuffer
    const encoder = new TextEncoder();
    const data = encoder.encode(textoConcatenado);

    // Calcular el hash SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    // Guardar el hash en la variable global
    llaveGenerada = hashHex;

    // Devolver el hash
    return hashHex;
}

// Ejemplo de uso:



document.getElementById('Boton1').addEventListener('click', () => {
    const variable1 = document.getElementById('usuarioHTML').value;
    const variable2 = document.getElementById('contraseñaHTML').value;
    const variable3 = document.getElementById('llaveCifradoHTML').value;
    generarHash(variable1, variable2, variable3)
        .then(() => console.log('Llave generada:', llaveGenerada))
        .catch(error => console.error('Error:', error));
});