//--------------------------------------------------------------------
//Ejemplo de cómo generar un hash SHA-256 en un navegador web utilizando el API de crypto disponible en JavaScript moderno

async function generarHash(texto) {
    const encoder = new TextEncoder();
    const data = encoder.encode(texto);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

// Ejemplo de uso:
const usuario = 'as32183';
const contraseña = 'Contraseña12345';
const llaveCifrado = 'Towi3';

let hashUsuario;
let hashContraseña;
let hashLlaveCifrado;
generarHash(usuario)
    .then(result => {
        hashUsuario = result;
        document.getElementById('h1Prueba').innerText = hashUsuario.slice(0,5); // Mostrar el hash en la etiqueta h1
        console.log(hashUsuario);
    })
    .catch(error => console.error('Error:', error));

generarHash(contraseña)
    .then(result => {
        hashContraseña = result;
        document.getElementById('h2Prueba').innerText = hashContraseña.slice(0,5); // Mostrar el hash en la etiqueta h2
        console.log(hashContraseña);
    })
    .catch(error => console.error('Error:', error));

generarHash(llaveCifrado)
    .then(result => {
        hashLlaveCifrado = result;
        document.getElementById('h3Prueba').innerText = hashLlaveCifrado.slice(0,5); // Mostrar el hash en la etiqueta h3
        console.log(hashLlaveCifrado);
    })
    .catch(error => console.error('Error:', error));


