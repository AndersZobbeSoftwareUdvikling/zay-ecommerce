module.exports = {
  username: process.env.DB_USERNAME || "username",
  password: process.env.DB_PASSWORD || "userpassword",
  database: process.env.DB_DATABASE || "zay",
  host: process.env.DB_HOSTNAME || 'db',
  // host: 'db',
  dialect: "mysql"
}
