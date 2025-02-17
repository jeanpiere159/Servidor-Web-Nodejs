const express = require("express");
const path = require("path");

const startServer = (options) => {
  const { port } = options;

  const app = express();

  const publicDir = path.join(__dirname, "..", "public");
  console.log("Ruta pública:", publicDir);

  app.use(express.static(publicDir));

  app.get("*", (req, res) => {
    const indexPath = path.join(publicDir, "index.html");
    console.log("Sirviendo:", indexPath);

    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error("Error al cargar el archivo:", err);
        res.status(500).send("Error al cargar el archivo");
      }
    });
  });

  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
};

module.exports = {
  startServer,
};
