import express, { Application } from 'express';
import { connectDb } from './infra/database';
import { errorMiddleware } from './infra/middlewares/error.middleware';
import { EventRoutes } from './infra/routes/event.routes';

export class App {
	public app: Application;
	private eventRoutes = new EventRoutes();
	constructor() {
		this.app = express();
		this.middlewwaresInitialize();
		this.initializeRoutes();
		this.interceptionError();
		connectDb();
	}
	initializeRoutes() {
		this.app.use('/eventes', this.eventRoutes.router);
	}
	interceptionError() {
		this.app.use(errorMiddleware);
	}
	middlewwaresInitialize() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}
	listen() {
		this.app.listen(3333, () => console.log('server is running'));
	}
}
