const validator = require("validator");
const Articulo = require("../modelos/Articulo");

const prueba = (req, res) => {
  return res.status(200).json({
    mensaje: "Soy una acción de prueba en mi controlador de articulos",
  });
};

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

const crear = async (req, res) => {
  try {
    const parametros = req.body || {};

    if (typeof parametros.titulo !== "string" || typeof parametros.contenido !== "string") {
      return res.status(400).json({
        status: "error",
        mensaje: "Los campos deben ser texto válido",
      });
    }

    if (validator.isEmpty(parametros.titulo) || validator.isEmpty(parametros.contenido)) {
      return res.status(400).json({
        status: "error",
        mensaje: "Faltan datos por enviar",
      });
    }

    // Crear y guardar artículo
    const articulo = new Articulo(parametros);
    const articuloGuardado = await articulo.save();

    return res.status(200).json({
      status: "success",
      articulo: articuloGuardado,
    });
  } catch (error) {
    console.error("Error en crear:", error);
    return res.status(500).json({
      status: "error",
      mensaje: "No se ha podido guardar el artículo",
      error: error.message,
    });
  }
};

module.exports = {
  prueba,
  curso,
  crear,
};
