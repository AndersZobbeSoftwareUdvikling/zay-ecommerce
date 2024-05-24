module.exports = {
  username: process.env.DB_USERNAME || "Casaroot",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "zay",
  host: process.env.DB_HOSTNAME || "zay-ecormmerce-db.mysql.database.azure.com",
  port: process.env.DB_PORT || "3306",
  // host: 'db',
  dialect: "mysql"
}
