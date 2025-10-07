import React from 'react'

export const Empleados = React.memo(
  () => {
    console.log("Se ha vuelto a renderizar Empleados !!")
  return (
    <div>Empleados</div>
  )
}
);
