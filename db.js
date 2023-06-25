import mysql2 from 'mysql2';
import { createPool } from 'mysql2/promise';
import {
	DB_DATABASE,
	DB_HOST,
	DB_PASSWORD,
	DB_PORT,
	DB_USER,
} from './config.js';

const pool = createPool({
	host: DB_HOST,

	user: DB_USER,

	password: DB_PASSWORD,

	port: DB_PORT,

	database: DB_DATABASE,
});

//exportamos la conexion a la db
export { pool };

/* console.log(pool); */
