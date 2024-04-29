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
const usuario = 'aa94183';
const contraseña = 'Contraseña12345';
const llaveCifrado = 'mundo!';
generarHash(usuario, contraseña, llaveCifrado)
    .then(hash => {
        console.log('Hash SHA-256:', hash);
        console.log(hash.length);
        //console.log('Llave guardada:', llaveGenerada); // Acceder al hash guardado
        document.getElementById("h1Prueba").innerText = "Llave completa:" + hash;
        let numeroAleatorio = Math.floor(Math.random() * 56);
        console.log(numeroAleatorio);
        llaveCorta = hash.slice(numeroAleatorio, numeroAleatorio+8);
        console.log(llaveCorta);
        document.getElementById('h2Prueba').innerText = "Llave corta: " + llaveCorta;
    })
    .catch(error => console.error('Error:', error));

