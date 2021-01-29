import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';

import { connectMongoDb, initMongoDb } from './utils/dbInit';
import middleware from './utils/middleware';
import restaurantsRouter from './controller/restaurants';

const app = express();

void connectMongoDb();
void initMongoDb();

app.use(morgan('tiny'));
app.use(express.json());

app.use('/discovery', restaurantsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorhandler);

export default app;