// Helper genérico para peticiones AJAX (GET, POST, PUT, DELETE)
export const Ajax = async (url, metodo = 'GET', datosGuardar = null) => {
  let datos = null;
  let cargando = true;

  try {
    // Configuración básica
    let opciones = {
      method: metodo,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      }
    };

    // Si hay datos que guardar (POST o PUT)
    if (metodo === 'POST' || metodo === 'PUT') {
      opciones.body = JSON.stringify(datosGuardar);
    }

    // Ejecutar la petición
    const respuesta = await fetch(url, opciones);

    // Comprobar si la respuesta es correcta
    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }

    // Obtener el cuerpo como JSON
    datos = await respuesta.json();
  } catch (error) {
    console.error('Error en Ajax:', error);
    datos = { status: 'error', message: error.message };
  } finally {
    cargando = false;
  }

  // Devolver un objeto con el resultado y el estado de carga
  return { datos, cargando };
};
