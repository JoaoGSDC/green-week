import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const points = new PointsController;
const items = new ItemsController;

routes.get('/items', items.index);

routes.post('/points', points.create);
routes.get('/points', points.index);
routes.get('/points/:id', points.show);

export default routes;