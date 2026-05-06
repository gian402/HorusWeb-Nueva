require('dotenv').config();
const app = require('./src/app');
const sequelize = require('./src/config/database');

// Importar modelos para que Sequelize los registre antes del sync
require('./src/models/Contacto');
require('./src/models/Reclamacion');

const PORT = process.env.PORT || 3000;

async function iniciar() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a MySQL');

    // Sincroniza modelos con la BD (crea o ajusta tablas sin borrar datos)
    await sequelize.sync({ alter: true });
    console.log('✅ Tablas sincronizadas');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error.message);
    process.exit(1);
  }
}

iniciar();
