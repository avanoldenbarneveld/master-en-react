import React, { useState, useEffect } from 'react';

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Generico / basico
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
      },
      {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
      },
      {
        id: 3,
        email: 'emma.wong@reqres.in',
        first_name: 'Emma',
        last_name: 'Wong',
      },
    ]);
    setCargando(false);
  };

  const getUsuariosAjaxPms = () => {
    fetch('https://reqres.in/api/users?page=1', {
      headers: { 'x-api-key': 'reqres-free-v1' },
    })
      .then((respuesta) => respuesta.json())
      .then(
        (resultado_final) => {
          setUsuarios(resultado_final.data);
          setCargando(false);
        },
        (error) => {
          console.log(error);
          setCargando(false);
        }
      );
  };

  const getUsuariosAjaxAW = () => {
    setTimeout(async () => {
        try {
        console.log('⏳ Timeout triggered, fetching now...');
      const peticion = await fetch('https://reqres.in/api/users?page=1', {
        headers: { 'x-api-key': 'reqres-free-v1' },
      });
      const { data } = await peticion.json();
      setUsuarios(data);
      setCargando(false);
        } catch(error) {
            console.log(error)
        }

    }, 2000);
  };

  useEffect(() => {
    // getUsuariosEstaticos();
    // getUsuariosAjaxPms();
    getUsuariosAjaxAW();
  }, []);

  if (cargando) {
    return <div className="cargando">Cargando datos...</div>;
  }

  return (
    <div>
      <h2>Listado de usuarios via Ajax</h2>
      <ol className="usuarios">
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <img src={usuario.avatar} width="80" />
            &nbsp;
            {usuario.first_name} {usuario.last_name}
          </li>
        ))}
      </ol>
    </div>
  );
};
