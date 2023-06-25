import { Router } from 'express';
import {
	createTasks,
	deleteTask,
	getTask,
	getTasks,
	updateTask,
} from '../controllers/task.controllers.js';

const taskRouter = Router();

//traer todas las tareas

taskRouter.get('/tasks', getTasks);

//traer una tarea

taskRouter.get('/tasks/:id', getTask);

//crear una tarea
taskRouter.post('/tasks', createTasks);

//actualizar una tarea

taskRouter.put('/tasks/:id', updateTask);

//borrar una tarea

taskRouter.delete('/tasks/:id', deleteTask);

export { taskRouter };
