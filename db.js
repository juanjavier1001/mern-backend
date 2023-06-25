import mysql2 from 'mysql2';
import { createPool } from 'mysql2/promise';
import { DB_NAME, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config.js';

const pool = createPool({
	host: DB_HOST,

	user: DB_USER,

	password: DB_PASSWORD,

	database: DB_NAME,
	port: DB_PORT,
});

//exportamos la conexion a la db
export { pool };

/* console.log(pool); */
