module.exports = {
  dbConnection: process.env.DB_CONNECTION,
  conferenceName: process.env.CONFERENCE_NAME,
  dev: process.env.ENVIRONMENT != "production",
  api: {
    port: process.env.API_PORT,
  },
  mysql: {
    host: process.env.MYSQL_HOST || "",
    database: process.env.MYSQL_DATABASE || "",
    user: process.env.MYSQL_USER || "",
    password: process.env.MYSQL_PASSWORD || "",
    port: process.env.MYSQL_PORT || 33060,
  },
};
