//conexion a la db

import { pool } from '../db.js';

//traer una tarea

const getTask = async (req, res) => {
	//console.log(req.params.id);
	/* res.send('traer una tarea'); */
	try {
		const [result] = await pool.query(
			'SELECT * FROM tasks WHERE id = ?',
			req.params.id

			//res.send(result),
		);
		res.send(result[0]);
		console.log(result);
	} catch (error) {
		console.log('error', error);
		res.send(error);
	}
};

//traer tareas

const getTasks = async (req, res) => {
	try {
		const [result] = await pool.query('SELECT * FROM tasks');
		console.log(result);
		res.send(result);
	} catch (error) {
		console.log('error papa', error);
		return res.status(500).json({ messaje: 'error papa' });
	}
};

//crear tareas

const createTasks = async (req, res) => {
	console.log('BODY', req.body);
	console.log('TITLE', req.body.title);
	console.log('DESCRIPTION', req.body.description);
	try {
		const [result] = await pool.query(
			`INSERT INTO tasks (title , description) VALUES (?,?) `,
			[req.body.title, req.body.description]
		);
		console.log('result', result);
		/* res.send(req.body); */
		res.json({
			id: result.insertId,
			title: req.body.title,
			description: req.body.description,
		});
	} catch (error) {
		console.log("error pa ''''", error);

		return res.status(500).json({ messaje: 'error papa' });
	}
};

//actualizar  tareas

const updateTask = async (req, res) => {
	try {
		const [result] = await pool.query('UPDATE tasks SET ? WHERE id = ? ', [
			req.body,
			req.params.id,
		]);
		res.send(result);
		console.log(result);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ messaje: 'error papa' });
	}
};

//borrar  tareas

const deleteTask = async (req, res) => {
	try {
		const [result] = await pool.query(
			'DELETE FROM tasks WHERE id = ? ',
			req.params.id
		);
		res.send(result);
	} catch (error) {
		console.log('error', error);
	}
};

export { getTask, getTasks, createTasks, updateTask, deleteTask };
