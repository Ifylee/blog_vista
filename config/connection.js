// const Sequelize = require('sequelize');
// require('dotenv').config();


// let sequelize;

// if (process.env.DB_URL) {
//   sequelize = new Sequelize(process.env.DB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'postgres'
//     }
//   );
// }

// module.exports = sequelize;

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {
  // Use the database URL for deployment
  sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    logging: false, // Optional: Set to true if you want to see SQL queries
  });
} else {
  // Use separate parameters for local development
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Optional: Set to true if you want to see SQL queries
  });
}

// Test the database connection (optional, for debugging)
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
