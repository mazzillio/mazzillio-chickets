import express, { Application } from 'express';
import { connectDb } from './infra/database';

export class App {
  public app:Application;
  constructor(){
    this.app = express();
    this.middlewwaresInitialize();
    this.initializeRoutes();
    this.interceptionError();
    connectDb();
  }
  initializeRoutes(){
    // this.app.use('')
  }
  interceptionError(){
    //this.app.use()
  }
  middlewwaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true}))
  }
  listen(){
    this.app.listen(3333, () => console.log('server is running'))
  }
}