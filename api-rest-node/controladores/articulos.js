const fs = require("fs");
const validator = require("validator");
const Articulo = require("../modelos/Articulo");
const mongoose = require("mongoose");

// Acción de prueba
const prueba = (req, res) => {
  return res.status(200).json({
    mensaje: "Soy una acción de prueba en mi controlador de artículos",
  });
};

// Acción de prueba de curso
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

// Crear artículo
const crear = async (req, res) => {
  try {
    const parametros = req.body || {};

    // Validar campos
    if (
      typeof parametros.titulo !== "string" ||
      typeof parametros.contenido !== "string"
    ) {
      return res.status(400).json({
        status: "error",
        mensaje: "Los campos deben ser texto válido",
      });
    }

    if (
      validator.isEmpty(parametros.titulo) ||
      validator.isEmpty(parametros.contenido)
    ) {
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

// Listar artículos
const listar = async (req, res) => {
  try {
    const { ultimos } = req.query;
    let consulta = Articulo.find({}).sort({ fecha: -1 });

    if (ultimos) {
      consulta = consulta.limit(3);
    }

    const articulos = await consulta.exec();

    if (!articulos || articulos.length === 0) {
      return res.status(404).json({
        status: "error",
        mensaje: "No se han encontrado artículos",
      });
    }

    return res.status(200).json({
      status: "success",
      contador: articulos.length,
      articulos,
    });
  } catch (error) {
    console.error("Error en listar:", error);
    return res.status(500).json({
      status: "error",
      mensaje: "Error al listar los artículos",
      error: error.message,
    });
  }
};

// Obtener un artículo por ID
const uno = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: "error",
        mensaje: "El ID proporcionado no es válido",
      });
    }

    const articulo = await Articulo.findById(id);

    if (!articulo) {
      return res.status(404).json({
        status: "error",
        mensaje: "No se ha encontrado el artículo",
      });
    }

    return res.status(200).json({
      status: "success",
      articulo,
    });
  } catch (error) {
    console.error("Error al obtener artículo:", error);
    return res.status(500).json({
      status: "error",
      mensaje: "Error al obtener el artículo",
      error: error.message,
    });
  }
};

// Borrar un artículo
const borrar = async (req, res) => {
  try {
    const articuloId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(articuloId)) {
      return res.status(400).json({
        status: "error",
        mensaje: "El ID proporcionado no es válido",
      });
    }

    const articuloBorrado = await Articulo.findOneAndDelete({ _id: articuloId });

    if (!articuloBorrado) {
      return res.status(404).json({
        status: "error",
        mensaje: "No se ha encontrado el artículo para borrar",
      });
    }

    return res.status(200).json({
      status: "success",
      mensaje: "Artículo borrado correctamente",
      articulo: articuloBorrado,
    });
  } catch (error) {
    console.error("Error al borrar artículo:", error);
    return res.status(500).json({
      status: "error",
      mensaje: "Error al borrar el artículo",
      error: error.message,
    });
  }
};

// Editar un artículo
const editar = async (req, res) => {
  try {
    const articuloId = req.params.id;
    const parametros = req.body || {};

    // Validar ID
    if (!mongoose.Types.ObjectId.isValid(articuloId)) {
      return res.status(400).json({
        status: "error",
        mensaje: "El ID proporcionado no es válido",
      });
    }

    // Validar datos
    if (
      typeof parametros.titulo !== "string" ||
      typeof parametros.contenido !== "string" ||
      validator.isEmpty(parametros.titulo) ||
      validator.isEmpty(parametros.contenido)
    ) {
      return res.status(400).json({
        status: "error",
        mensaje: "Datos inválidos o incompletos para actualizar el artículo",
      });
    }

    // Buscar y actualizar
    const articuloActualizado = await Articulo.findOneAndUpdate(
      { _id: articuloId },
      parametros,
      { new: true }
    );

    if (!articuloActualizado) {
      return res.status(404).json({
        status: "error",
        mensaje: "No se ha encontrado el artículo para actualizar",
      });
    }

    return res.status(200).json({
      status: "success",
      mensaje: "Artículo actualizado correctamente",
      articulo: articuloActualizado,
    });
  } catch (error) {
    console.error("Error al actualizar artículo:", error);
    return res.status(500).json({
      status: "error",
      mensaje: "Error al actualizar el artículo",
      error: error.message,
    });
  }
};

// Subir imagen
const subir = async (req, res) => {
  try {
    // Verificar que haya archivo
    if (!req.file) {
      return res.status(400).json({
        status: "error",
        mensaje: "No se ha subido ningún archivo",
      });
    }

    // Nombre y extensión del archivo
    const archivo = req.file.originalname;
    const archivo_extension = archivo.split(".").pop().toLowerCase();

    // Comprobar extensión válida
    if (!["png", "jpg", "jpeg", "gif"].includes(archivo_extension)) {
      fs.unlink(req.file.path, () => {
        return res.status(400).json({
          status: "error",
          mensaje: "Imagen no válida",
        });
      });
      return;
    }

    // Si hay un ID, actualizar el artículo con la imagen
    const articuloId = req.params.id;
    let articuloActualizado = null;

    if (articuloId && mongoose.Types.ObjectId.isValid(articuloId)) {
      articuloActualizado = await Articulo.findOneAndUpdate(
        { _id: articuloId },
        { imagen: req.file.filename },
        { new: true }
      );
    }

    return res.status(200).json({
      status: "success",
      mensaje: "Imagen subida correctamente",
      file: req.file,
      articulo: articuloActualizado,
    });
  } catch (error) {
    console.error("Error al subir archivo:", error);
    return res.status(500).json({
      status: "error",
      mensaje: "Error en la subida de la imagen",
      error: error.message,
    });
  }
};

module.exports = {
  prueba,
  curso,
  crear,
  listar,
  uno,
  borrar,
  editar,
  subir,
};
