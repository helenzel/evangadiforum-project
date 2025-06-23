import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const dbconfig = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "forum",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "evangadiforumfinal",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Creating connection pool
const pool = mysql.createPool(dbconfig);

export default pool;
