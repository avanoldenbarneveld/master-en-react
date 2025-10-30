import { useState, useEffect } from "react";

export const useAjax = (url) => {
  const [estado, setEstado] = useState({
    datos: null,
    cargando: true
  });

  const getData = async () => {
    setEstado(prev => ({
      ...prev,
      cargando: true
    }));

    try {
      const peticion = await fetch(url, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });

      const datos = await peticion.json();

      setEstado({
        datos: datos.data,
        cargando: false
      });
    } catch (error) {
      console.error(error);
      setEstado({ datos: null, cargando: false });
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {
    datos: estado.datos,
    cargando: estado.cargando
  };
};
