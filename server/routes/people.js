import 'babel-polyfill';
import Router from 'koa-router';
import { baseApi } from '../config';
import jwt from '../middlewares/jwt';
import PeolesControllers from '../controllers/peoples';

const api = 'people';

const router = new Router();

router.prefix(`/${baseApi}/${api}`);


router.get('/', PeolesControllers.find);

router.post('/', PeolesControllers.add);


router.get('/:id', PeolesControllers.findById);

router.delete('/:id', PeolesControllers.delete);

export default router;
