module.exports = {
  HOST: "localhost",
  USER: "admin",
  PASSWORD: "nfitest1*",
  DB: "nfi-db",
  dialect: "mysql",
  PORT: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
