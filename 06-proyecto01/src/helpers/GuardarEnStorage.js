export    const GuardarEnStorage = (clave, elemento) => {

        // Conseguir los elementos que ya tenemos en el Localstorage
        let elementos = JSON.parse(localStorage.getItem(clave));

        // Comprobar si es un array

        if(Array.isArray(elementos)){
            // Añadir un elemento nuevo
            elementos.push(elemento)
        } else {
            // Crear un array con el nuevo elemento
            elementos = [elemento];
        }

        // Guardar en el localstorage
        localStorage.setItem(clave, JSON.stringify(elementos));       

        // Devolver objeto guardado
        return elemento;

        

    }