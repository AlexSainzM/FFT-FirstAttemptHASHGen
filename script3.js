async function generarHash(texto) {
    const encoder = new TextEncoder();
    const data = encoder.encode(texto);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

// Ejemplo de uso:
const usuario = 'as39183';
const contraseña = 'Contraseña12345';
const llaveCifrado = 'Towi';

let hashUsuario;
let hashContraseña;
let hashLlaveCifrado;
let concatenatedKeys; // Variable para almacenar las llaves concatenadas

Promise.all([
    generarHash(usuario),
    generarHash(contraseña),
    generarHash(llaveCifrado)
])
.then(results => {
    hashUsuario = results[0];
    hashContraseña = results[1];
    hashLlaveCifrado = results[2];

    concatenatedKeys = hashUsuario.slice(0, 5) + hashContraseña.slice(0, 5) + hashLlaveCifrado.slice(0, 5);
    
    console.log('Llaves concatenadas:', concatenatedKeys);
})
.catch(error => console.error('Error:', error));
