//-----------------------------------------------------------
// Primer intento de la función que devuelve un HASH Númerico
/*
function generarHashTexto(texto){
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    if (!texto.length) {
        return null;
    }

    let caracteres = texto.split('');

    return caracteres.reduce((h, c) => (h = c.charCodeAt(0) + (h << 6) + (h << 16) - h), 0);
}

try {
    console.log(generarHashTexto('JavaScript'));
} catch (e) {
    console.log(`Error: ${e.messge}`);
}
*/



//-------------------------------------------------------
//Segundo intento de la función que devuelve un hash pero requiere modulos de Node
/*
const crypto = require('crypto');

function generarLlaveUnica(texto1, texto2) {
    if (typeof texto1 !== 'string' || typeof texto2 !== 'string') {
        throw new TypeError('Ambas entradas deben ser cadenas de texto.');
    }

    const textoConcatenado = texto1 + '|' + texto2; // Concatenar los dos textos con un delimitador

    // Generar el hash SHA-256
    const hash = crypto.createHash('sha256');
    hash.update(textoConcatenado);
    const llaveUnica = hash.digest('hex');

    return llaveUnica;
}

// Ejemplo de uso:
try {
    const texto1 = 'Hola';
    const texto2 = 'Mundo';
    const llave = generarLlaveUnica(texto1, texto2);
    console.log('Llave única:', llave);
} catch (error) {
    console.error('Error:', error.message);
}*/


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
const texto = 'as39473';
generarHash(texto)
    .then(hash => console.log('Hash SHA-256:', hash))
    .catch(error => console.error('Error:', error));




//----------------------------------------------------------
//Ejemplo para tomar dos entradas de texto antes de generar el hash

// async function generarHash(texto1, texto2) {
//     if (typeof texto1 !== 'string' || typeof texto2 !== 'string') {
//         throw new TypeError('Ambas entradas deben ser cadenas de texto.');
//     }

//     const textoConcatenado = texto1 + '|' + texto2; // Concatenar los dos textos con un delimitador

//     const encoder = new TextEncoder();
//     const data = encoder.encode(textoConcatenado);

//     const hashBuffer = await crypto.subtle.digest('SHA-256', data);
//     const hashArray = Array.from(new Uint8Array(hashBuffer));
//     const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

//     return hashHex;
// }

// // Ejemplo de uso:
// const texto1 = 'Hola';
// const texto2 = 'Mundo2';
// generarHash(texto1, texto2)
//     .then(hash => console.log('Hash SHA-256:', hash))
//     .catch(error => console.error('Error:', error.message));
