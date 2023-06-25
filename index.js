import express from 'express';
import { PORT } from './config.js';
//conexion a la db
import { pool } from './db.js';
//conexion a la db
import { taskRouter } from './routes/task.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(taskRouter);

app.get('/', (req, res) => {
	res.send('hola ura');
});	

app.get('/connectDB', async (req, res) => {
	try {
		const [result] = await pool.query('select 16 as result ');
		console.log(result);
		res.send(result[0]);
	} catch (error) {
		console.log('error al conectar', error);
		res.send(error);
	}
});

app.listen(PORT, () => console.log('server on ... ' + PORT));
