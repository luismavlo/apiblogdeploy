const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: process.env.DB_DIALECT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true, // Requiere conexión SSL/TLS
      rejectUnauthorized: false, // Ignora los certificados autofirmados, utiliza un certificado CA válido en producción
    },
  },
});

// const DB_URI = process.env.DB_URI;

// const db = new Sequelize(DB_URI, {
//   logging: false,
// });

module.exports = { db };
