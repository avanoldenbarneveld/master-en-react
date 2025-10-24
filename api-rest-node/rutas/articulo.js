const express = require("express");
const router = express.Router();

const ArticuloControlador = require("../controladores/articulos.js");

// Rutas de prueba
router.get("/ruta-de-prueba", ArticuloControlador.prueba);
router.get("/curso", ArticuloControlador.curso);

// Rutas principales
router.post("/crear", ArticuloControlador.crear);
router.get("/articulos", ArticuloControlador.listar);
router.get("/articulo/:id", ArticuloControlador.uno);
router.delete("/articulo/:id", ArticuloControlador.borrar);

module.exports = router;
