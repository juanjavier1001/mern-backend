import mysql2 from 'mysql2';
import { createPool } from 'mysql2/promise';

const pool = createPool({
	host: 'localhost',

	user: 'root',

	password: '',

	database: 'taskpb2023',
});

//exportamos la conexion a la db
export { pool };

/* console.log(pool); */
