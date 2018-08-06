import { UserController } from './user.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';

export default (router) => {

    router.get('/me', ...middlewares(schemas, 'getOne'), UserController.getOne);
    router.put('/me', ...middlewares(schemas, 'update'), UserController.update);
    router.delete('/:id', ...middlewares(schemas, 'delete'), UserController.delete);
    router.get('/', ...middlewares(schemas, 'getAll'), UserController.getAll);

};
