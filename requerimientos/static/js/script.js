import { Ollama } from 'ollama';


const campoRequerimiento = document.getElementById('requerimiento');
document.getElementById('evaluar').addEventListener('click', evaluation);
document.getElementById('prueba').addEventListener('click', probar);

function probar() {

    console.log(campoRequerimiento);
}

async function evaluation() {

    try {
        const uri = 'https://fearful-skeleton-96wv77qwg9gpf7vp-11434.app.github.dev/';
        const requerimiento = 'El usuario ingresa su usario y contraseña, evaluar si son correctos';

        const data = {
            model: 'd1-omni:600m',
            state: campoRequerimiento.value,
            questions: {
                condicion: {
                    type: 'noul',
                    instructions: 'Does the state text contain a greeting?',
                    criteria: {
                        true: 'The state text contains a greeting.',
                        false: 'The state text does not contain a greeting.',
                    },
                },
            },
        }

        const respuesta = await fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!respuesta.ok) {
            throw new Error(`La solicitud falló: ${respuesta.status}`);
        }

        const resultado = await respuesta.json();
        console.log('Conexión exitosa', resultado);


    } catch (error) {
        console.log('Error, algo salió mal:', error.message);
    }


}




