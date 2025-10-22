
const prueba = (req, res) => {

    return res.status(200).json({
        mensaje: 'Soy una acción de prueba en mi controlador de articulos'
    });
}

const curso = (req, res) => {
  console.log("Se ha ejecutado el endpoint probando");

  return res.status(200).json([
    {
      curso: "Master en React",
      autor: "Alberto van Oldenbarneveld",
      url: "albertovan.com",
    },
    {
      curso: "Master en React",
      autor: "Alberto van Oldenbarneveld",
      url: "albertovan.com",
    },
  ]);
};

module.exports = {
    prueba,
    curso
}