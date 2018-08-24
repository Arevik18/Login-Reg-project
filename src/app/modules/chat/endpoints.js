import { ChatController } from './chat.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';

export default (router) => {

    router.get('/', ...middlewares(schemas, 'getAll'), ChatController.getAll);

    router.post('/', ...middlewares(schemas, 'add'), ChatController.add);

};
