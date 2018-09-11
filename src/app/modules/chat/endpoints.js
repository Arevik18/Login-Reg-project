import { ChatController } from './chat.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';

export default (router) => {

    router.get('/', ...middlewares(schemas, 'getAll'), ChatController.getAll);

    router.post('/', ...middlewares(schemas, 'add'), ChatController.add);

    router.delete('/:id', ...middlewares(schemas, 'delete'), ChatController.delete);

    router.put('/:id', ...middlewares(schemas, 'update'), ChatController.update);

};
