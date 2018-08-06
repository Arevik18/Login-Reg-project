import { SettingsController } from './settings.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';

export default (router) => {

    router.get('/', ...middlewares(schemas, 'getAll'), SettingsController.getAll);

    router.get('/:cat', ...middlewares(schemas, 'getByCategory'), SettingsController.getByCategory);

    router.post('/', ...middlewares(schemas, 'setting'), SettingsController.create);

    router.put('/:id', ...middlewares(schemas, 'setting'), SettingsController.update);

};
